import type { Role } from "@/src/generated/prisma";
import type { DefaultSession } from "next-auth";

/**
 * Augmentasi module NextAuth agar objek `session.user`
 * memiliki properti `id` dan `role` yang type-safe.
 */
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role;
  }
}
