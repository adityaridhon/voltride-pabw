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

    // Create user first, then mitra profile with correct userId
    const user = await prisma.user.create({
      data: {
        name: namaMitra,
        email,
        password: hashedPassword,
        role: "MITRA",
      },
      select: { id: true, email: true, role: true },
    });

    // Create mitra profile with user id
    const mitra = await prisma.mitra.create({
      data: {
        userId: user.id,
        namaMitra,
        noHp,
        alamat,
      },
    });

    // Create wallet for mitra
    await prisma.dompet.create({ data: { mitraId: mitra.id } });

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
