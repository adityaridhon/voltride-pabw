"use server";

import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
} from "@/lib/validations/master";
import bcrypt from "bcryptjs";
import type { CreateUserInput, UpdateUserInput } from "@/lib/validations/master";

// ─── GET ALL USERS (Admin Only) ───────────────────────────────────────────────

export async function getUsers() {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        noHp: true,
        createdAt: true,
        mitra: { select: { id: true, namaMitra: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  });
}

// ─── GET SINGLE USER ──────────────────────────────────────────────────────────

export async function getUserById(id: string) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        noHp: true,
        createdAt: true,
        updatedAt: true,
        mitra: true,
      },
    });

    if (!user) throw new Error("User tidak ditemukan.");
    return user;
  });
}

// ─── CREATE USER (Admin Only) ─────────────────────────────────────────────────

export async function createUser(input: CreateUserInput) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    // Validasi input
    const parsed = createUserSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { name, email, password, role, noHp } = parsed.data;

    // Cek email sudah terdaftar
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email sudah terdaftar.");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role, noHp },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    // Jika role MITRA, auto-buat record Mitra dan Dompet
    if (role === "MITRA") {
      const mitra = await prisma.mitra.create({
        data: { userId: user.id, namaMitra: name ?? email },
      });
      await prisma.dompet.create({ data: { mitraId: mitra.id } });
    }

    // Auto-buat Dompet untuk USER
    if (role === "USER") {
      await prisma.dompet.create({ data: { userId: user.id } });
    }

    return user;
  });
}

// ─── UPDATE USER (Admin Only) ─────────────────────────────────────────────────

export async function updateUser(input: UpdateUserInput) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    const parsed = updateUserSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { id, ...data } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) throw new Error("User tidak ditemukan.");

    return prisma.user.update({
      where: { id },
      data,
      select: { id: true, name: true, email: true, role: true, updatedAt: true },
    });
  });
}

// ─── DELETE USER (Admin Only) ─────────────────────────────────────────────────

export async function deleteUser(id: string) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    const parsed = deleteUserSchema.safeParse({ id });
    if (!parsed.success) throw new Error("ID user tidak valid.");

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) throw new Error("User tidak ditemukan.");

    await prisma.user.delete({ where: { id } });
    return { id };
  });
}
