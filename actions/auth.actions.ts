"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/auth-guard";
import { registerSchema } from "@/lib/validations/auth";
import type { LoginInput, RegisterInput } from "@/lib/validations/auth";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

// ─── REGISTER ─────────────────────────────────────────────────────────────────

export async function registerUser(input: RegisterInput) {
  return withErrorHandling(async () => {
    const parsed = registerSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { name, email, password, noHp } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email sudah terdaftar.");

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, noHp, role: "USER" },
      select: { id: true, email: true, role: true },
    });

    // Buat dompet otomatis
    await prisma.dompet.create({ data: { userId: user.id } });

    return user;
  });
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────

export async function loginUser(input: LoginInput) {
  return withErrorHandling(async () => {
    try {
      await signIn("credentials", {
        email: input.email,
        password: input.password,
        redirect: false,
      });
      return { ok: true };
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            throw new Error("Email atau password salah.");
          default:
            throw new Error("Terjadi kesalahan saat login.");
        }
      }
      throw error;
    }
  });
}

// ─── LOGOUT ───────────────────────────────────────────────────────────────────

export async function logoutUser() {
  await signOut({ redirect: false });
}
