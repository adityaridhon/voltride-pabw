"use server";

import { prisma } from "@/lib/prisma";
import { requireAuth, requireRole, withErrorHandling } from "@/lib/auth-guard";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
} from "@/lib/validations/master";
import bcrypt from "bcryptjs";
import type {
  CreateUserInput,
  UpdateUserInput,
} from "@/lib/validations/master";

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
        phone: true,
        createdAt: true,
        mitraProfile: { select: { id: true, companyName: true } },
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
        phone: true,
        createdAt: true,
        updatedAt: true,
        mitraProfile: true,
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

    const { name, email, password, role, phone } = parsed.data;

    // Cek email sudah terdaftar
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email sudah terdaftar.");

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role, phone },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    // Jika role MITRA, auto-buat record Mitra
    if (role === "MITRA") {
      const mitra = await prisma.mitra.create({
        data: { userId: user.id, companyName: name ?? email },
      });
    }

    // Auto-buat Wallet untuk USER
    if (role === "USER") {
      await prisma.wallet.create({ data: { userId: user.id } });
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
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        updatedAt: true,
      },
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

export async function getCurrentUserWallet() {
  const session = await requireAuth();
  const userId = session.user!.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });

  if (!user) {
    throw new Error(
      "User tidak ditemukan di database. Silakan logout dan login kembali.",
    );
  }

  const wallet = await prisma.wallet.upsert({
    where: { userId },
    create: { userId, balance: 0 },
    update: {},
    select: { id: true, balance: true },
  });

  return { userId, wallet };
}

export async function getRecentTransactions(limit = 4) {
  const session = await requireAuth();
  const wallet = await prisma.wallet.findUnique({
    where: { userId: session.user!.id },
    select: { id: true },
  });

  if (!wallet) return [];

  return prisma.transaction.findMany({
    where: { walletId: wallet.id },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export async function confirmTopup(formData: FormData) {
  const session = await requireAuth();
  const userId = session.user!.id;

  const rawAmount = formData.get("amount");
  const amount = Number(rawAmount);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error("Nominal top up tidak valid.");
  }

  const wallet = await prisma.wallet.upsert({
    where: { userId },
    create: { userId, balance: 0 },
    update: {},
    select: { id: true },
  });

  await prisma.$transaction(async (tx) => {
    await tx.wallet.update({
      where: { id: wallet.id },
      data: { balance: { increment: amount } },
    });

    await tx.transaction.create({
      data: {
        userId,
        walletId: wallet.id,
        type: "TOP_UP",
        direction: "CREDIT",
        amount,
        status: "SUCCESS",
        description: "Top up QRIS",
      },
    });
  });

  revalidatePath("/dashboard");
  revalidatePath("/profile");
  revalidatePath("/wallet");
  revalidatePath("/history");
  revalidatePath("/topup");

  redirect("/history");
}
