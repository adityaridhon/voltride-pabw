import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
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
      },

      async authorize(credentials) {
        const email = String(credentials?.email || "")
          .trim()
          .toLowerCase();

        const password = String(credentials?.password || "");

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
  ],

  callbacks: {
    async jwt({ token, user }) {
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