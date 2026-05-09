"use server";

import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  createMitraSchema,
  updateMitraSchema,
  deleteMitraSchema,
} from "@/lib/validations/master";
import type { CreateMitraInput, UpdateMitraInput } from "@/lib/validations/master";

// ─── GET ALL MITRA (Admin & Mitra) ───────────────────────────────────────────

export async function getAllMitra() {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN", "MITRA"]);

    return prisma.mitra.findMany({
      include: {
        user: { select: { name: true, email: true, role: true } },
        _count: { select: { armada: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  });
}

// ─── GET SINGLE MITRA ─────────────────────────────────────────────────────────

export async function getMitraById(id: string) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA"]);

    const mitra = await prisma.mitra.findUnique({
      where: { id },
      include: {
        user: { select: { name: true, email: true } },
        armada: true,
        dompet: true,
      },
    });

    if (!mitra) throw new Error("Mitra tidak ditemukan.");

    // MITRA hanya bisa lihat data miliknya sendiri
    if (session.user.role === "MITRA" && mitra.userId !== session.user.id) {
      throw new Error("FORBIDDEN: Anda hanya dapat melihat data mitra Anda sendiri.");
    }

    return mitra;
  });
}

// ─── CREATE MITRA (Admin Only) ────────────────────────────────────────────────

export async function createMitra(input: CreateMitraInput) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    const parsed = createMitraSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { userId, namaMitra, noHp, alamat } = parsed.data;

    // Pastikan user ada dan belum punya profil mitra
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User tidak ditemukan.");

    const existingMitra = await prisma.mitra.findUnique({ where: { userId } });
    if (existingMitra) throw new Error("User ini sudah memiliki profil Mitra.");

    // Buat profil mitra sekaligus ubah role user menjadi MITRA
    const [mitra] = await prisma.$transaction([
      prisma.mitra.create({ data: { userId, namaMitra, noHp, alamat } }),
      prisma.user.update({ where: { id: userId }, data: { role: "MITRA" } }),
    ]);

    // Auto-buat dompet jika belum ada
    const mitraWithDompet = await prisma.mitra.findUnique({
      where: { id: mitra.id },
      include: { dompet: true },
    });
    if (!mitraWithDompet?.dompet) {
      await prisma.dompet.create({ data: { mitraId: mitra.id } });
    }

    return mitra;
  });
}

// ─── UPDATE MITRA (Admin & Mitra sendiri) ────────────────────────────────────

export async function updateMitra(input: UpdateMitraInput) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA"]);

    const parsed = updateMitraSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { id, ...data } = parsed.data;

    const mitra = await prisma.mitra.findUnique({ where: { id } });
    if (!mitra) throw new Error("Mitra tidak ditemukan.");

    // MITRA hanya bisa update data miliknya
    if (session.user.role === "MITRA" && mitra.userId !== session.user.id) {
      throw new Error("FORBIDDEN: Anda hanya dapat mengubah data mitra Anda sendiri.");
    }

    return prisma.mitra.update({ where: { id }, data });
  });
}

// ─── DELETE MITRA (Admin Only) ────────────────────────────────────────────────

export async function deleteMitra(id: string) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN"]);

    const parsed = deleteMitraSchema.safeParse({ id });
    if (!parsed.success) throw new Error("ID mitra tidak valid.");

    const mitra = await prisma.mitra.findUnique({ where: { id } });
    if (!mitra) throw new Error("Mitra tidak ditemukan.");

    // Reset role user kembali ke USER sebelum hapus
    await prisma.$transaction([
      prisma.mitra.delete({ where: { id } }),
      prisma.user.update({ where: { id: mitra.userId }, data: { role: "USER" } }),
    ]);

    return { id };
  });
}
