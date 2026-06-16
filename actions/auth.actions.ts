"use server";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { withErrorHandling } from "@/lib/auth-guard";
import {
  registerSchema,
  registerAdminSchema,
  registerMitraSchema,
} from "@/lib/validations/auth";
import type {
  LoginInput,
  RegisterInput,
  RegisterAdminInput,
  RegisterMitraInput,
} from "@/lib/validations/auth";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

// ─── REGISTER ─────────────────────────────────────────────────────────────────


export async function registerAdmin(input: RegisterAdminInput) {
  return withErrorHandling(async () => {
    const parsed = registerAdminSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { email, password } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email sudah terdaftar.");

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: email.split("@")[0],
        email,
        password: hashedPassword,
        role: "ADMIN",
      },
      select: { id: true, email: true, role: true },
    });

    return user;
  });
}

export async function registerMitra(input: RegisterMitraInput) {
  return withErrorHandling(async () => {
    const parsed = registerMitraSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { email, password, namaMitra, noHp, alamat } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email sudah terdaftar.");

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: namaMitra,
        email,
        password: hashedPassword,
        role: "MITRA",
      },
      select: { id: true, email: true, role: true },
    });

    const mitra = await prisma.mitra.create({
      data: {
        userId: user.id,
        companyName: namaMitra,
        phone: noHp,
        address: alamat,
      },
    });

    await prisma.wallet.create({ data: { userId: mitra.userId } });

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

// ─── LOGIN WITH GOOGLE ────────────────────────────────────────────────────────

export async function loginWithGoogle() {
  return withErrorHandling(async () => {
    try {
      await signIn("google", { redirect: false });
      return { ok: true };
    } catch (error) {
      if (error instanceof AuthError) {
        throw new Error("Gagal login dengan Google. Silakan coba lagi.");
      }
      throw error;
    }
  });
}
