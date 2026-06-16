import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import type { Role } from "@/src/generated/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig, // Mengambil basis konfigurasi dari auth.config.ts
  adapter: PrismaAdapter(prisma),
  secret:
    process.env.AUTH_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "your-secret-key-change-in-production",

  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },

      async authorize(credentials) {
        const email = String(credentials?.email || "")
          .trim()
          .toLowerCase();

        const password = String(credentials?.password || "");
        const targetRole = credentials?.role;

        if (!email || !password) return null;

        const user = await prisma.user.findFirst({
          where: { email },
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: true,
          },
        });

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
          isPasswordValid = password === passwordInDb;
        }

        if (!isPasswordValid) return null;

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

  events: {
    async createUser({ user }) {
      await prisma.wallet.upsert({
        where: { userId: user.id! },
        update: {},
        create: { userId: user.id! },
      });
    },
  },

  callbacks: {
    ...authConfig.callbacks, // Mengambil callback dasar

    // Override jwt callback khusus untuk kebutuhan server-side (query database tambahan)
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role: Role }).role;
      }

      // Query database ini aman ditaruh di sini karena file auth.ts tidak akan di-import oleh middleware
      if (token.id && !token.role) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { role: true },
        });

        token.role = dbUser?.role;
      }

      return token;
    },
  },
});