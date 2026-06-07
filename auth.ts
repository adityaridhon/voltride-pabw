import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import type { Role } from "@/src/generated/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret:
    process.env.AUTH_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "your-secret-key-change-in-production",

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
        role: {
          label: "Role",
          type: "text",
        },
      },

      async authorize(credentials) {
        const email = String(credentials?.email || "")
          .trim()
          .toLowerCase();

        const password = String(credentials?.password || "");
        const targetRole = credentials?.role;

        console.log("=== LOGIN DEBUG ===");
        console.log("email:", email);
        console.log("hasPassword:", Boolean(password));

        if (!email || !password) {
          console.log("LOGIN FAILED: email/password kosong");
          return null;
        }

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: true,
          },
        });

        console.log("userFound:", Boolean(user));
        console.log("userEmail:", user?.email);
        console.log("passwordInDbExists:", Boolean(user?.password));

        if (!user || !user.password) {
          console.log("LOGIN FAILED: user tidak ditemukan / password kosong");
          return null;
        }

        if (targetRole && user.role !== targetRole) {
          console.log(
            `LOGIN FAILED: role mismatch, expected ${targetRole}, got ${user.role}`,
          );
          return null;
        }

        let isPasswordValid = false;
        const passwordInDb = user.password;

        if (
          passwordInDb.startsWith("$2a$") ||
          passwordInDb.startsWith("$2b$") ||
          passwordInDb.startsWith("$2y$")
        ) {
          isPasswordValid = await bcrypt.compare(password, passwordInDb);
        } else {
          // Untuk testing kalau password di database masih plain text
          isPasswordValid = password === passwordInDb;
        }

        console.log("passwordValid:", isPasswordValid);

        if (!isPasswordValid) {
          console.log("LOGIN FAILED: password salah");
          return null;
        }

        console.log("LOGIN SUCCESS:", user.email);

        return {
          id: String(user.id),
          name: user.name || user.email,
          email: user.email,
          role: user.role,
        };
      },
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // Handle Google OAuth sign-in
      if (account?.provider === "google") {
        try {
          const email = user.email?.toLowerCase() || "";

          // Cek apakah user sudah ada
          let dbUser = await prisma.user.findUnique({
            where: { email },
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
            },
          });

          // Jika belum ada, buat user baru dengan role USER
          if (!dbUser) {
            dbUser = await prisma.user.create({
              data: {
                email,
                name: user.name || profile?.name || "Google User",
                role: "USER",
              },
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
              },
            });

            // Auto-create wallet untuk user baru
            await prisma.wallet.create({ data: { userId: dbUser.id } });
          }

          // Update user object dengan data dari database
          user.id = dbUser.id;
          user.role = dbUser.role as Role;

          return true;
        } catch (error) {
          console.error("Error in Google sign-in callback:", error);
          return false;
        }
      }

      return true;
    },

    async redirect({ url, baseUrl }) {
      // If it's a relative url, it's safe to redirect
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role: Role }).role;
      }

      if (token.id && !token.role) {
        const dbUser = await prisma.user.findUnique({
          where: {
            id: token.id as string,
          },
          select: {
            role: true,
          },
        });

        token.role = dbUser?.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
      }

      return session;
    },
  },
});
