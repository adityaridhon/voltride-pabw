"use server";

import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  createArmadaSchema,
  updateArmadaSchema,
  deleteArmadaSchema,
} from "@/lib/validations/master";
import type {
  CreateArmadaInput,
  UpdateArmadaInput,
} from "@/lib/validations/master";

// ─── GET ALL ARMADA ───────────────────────────────────────────────────────────

export async function getAllArmada(mitraId?: string) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA", "USER"]);

    const whereClause =
      session.user.role === "MITRA"
        ? // MITRA hanya lihat armada miliknya
          { mitra: { userId: session.user.id } }
        : mitraId
          ? { mitraId }
          : {};

    return prisma.mobil.findMany({
      where: whereClause,
      include: {
        mitra: { select: { id: true, companyName: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  });
}

// ─── GET SINGLE ARMADA ────────────────────────────────────────────────────────

export async function getArmadaById(id: string) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA", "USER"]);

    const armada = await prisma.mobil.findUnique({
      where: { id },
      include: {
        mitra: { select: { id: true, companyName: true, userId: true } },
      },
    });

    if (!armada) throw new Error("Armada tidak ditemukan.");

    // MITRA hanya bisa lihat armada yang dimilikinya
    if (
      session.user.role === "MITRA" &&
      armada.mitra.userId !== session.user.id
    ) {
      throw new Error("FORBIDDEN: Armada ini bukan milik Anda.");
    }

    return armada;
  });
}

// ─── CREATE ARMADA (Admin & Mitra) ───────────────────────────────────────────

export async function createArmada(input: CreateArmadaInput) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA"]);

    const parsed = createArmadaSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { mitraId, hargaPerHari, ...rest } = parsed.data;

    // Pastikan mitra ada
    const mitra = await prisma.mitra.findUnique({ where: { id: mitraId } });
    if (!mitra) throw new Error("Mitra tidak ditemukan.");

    // MITRA hanya bisa tambah armada ke mitra miliknya
    if (session.user.role === "MITRA" && mitra.userId !== session.user.id) {
      throw new Error(
        "FORBIDDEN: Anda hanya dapat menambah armada untuk mitra Anda sendiri.",
      );
    }

    // Cek nomor plat sudah ada
    const existing = await prisma.mobil.findUnique({
      where: { plateNumber: rest.nomorPlat },
    });
    if (existing)
      throw new Error(`Nomor plat '${rest.nomorPlat}' sudah terdaftar.`);

    const statusMap: Record<string, "ACTIVE" | "INACTIVE" | "MAINTENANCE"> = {
      TERSEDIA: "ACTIVE",
      DISEWA: "INACTIVE",
      PERAWATAN: "MAINTENANCE",
    };

    return prisma.mobil.create({
      data: {
        mitraId,
        name: rest.namaKendaraan,
        brand: rest.merek,
        model: rest.model,
        plateNumber: rest.nomorPlat,
        pricePerDay: hargaPerHari,
        imageUrl: rest.foto,
        status: statusMap[rest.statusKetersediaan ?? "TERSEDIA"],
      },
    });
  });
}

// ─── UPDATE ARMADA (Admin & Mitra pemilik) ───────────────────────────────────

export async function updateArmada(input: UpdateArmadaInput) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA"]);

    const parsed = updateArmadaSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { id, ...data } = parsed.data;

    const armada = await prisma.mobil.findUnique({
      where: { id },
      include: { mitra: { select: { userId: true } } },
    });

    if (!armada) throw new Error("Armada tidak ditemukan.");

    // MITRA hanya bisa update armada miliknya
    if (
      session.user.role === "MITRA" &&
      armada.mitra.userId !== session.user.id
    ) {
      throw new Error(
        "FORBIDDEN: Anda hanya dapat mengubah armada Anda sendiri.",
      );
    }

    const statusMap: Record<string, "ACTIVE" | "INACTIVE" | "MAINTENANCE"> = {
      TERSEDIA: "ACTIVE",
      DISEWA: "INACTIVE",
      PERAWATAN: "MAINTENANCE",
    };

    return prisma.mobil.update({
      where: { id },
      data: {
        name: data.namaKendaraan,
        brand: data.merek,
        model: data.model,
        plateNumber: data.nomorPlat,
        pricePerDay: data.hargaPerHari,
        imageUrl: data.foto,
        status: data.statusKetersediaan
          ? statusMap[data.statusKetersediaan]
          : undefined,
      },
    });
  });
}

// ─── DELETE ARMADA (Admin & Mitra pemilik) ───────────────────────────────────

export async function deleteArmada(id: string) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA"]);

    const parsed = deleteArmadaSchema.safeParse({ id });
    if (!parsed.success) throw new Error("ID armada tidak valid.");

    const armada = await prisma.mobil.findUnique({
      where: { id },
      include: { mitra: { select: { userId: true } } },
    });

    if (!armada) throw new Error("Armada tidak ditemukan.");

    if (
      session.user.role === "MITRA" &&
      armada.mitra.userId !== session.user.id
    ) {
      throw new Error(
        "FORBIDDEN: Anda hanya dapat menghapus armada Anda sendiri.",
      );
    }

    await prisma.mobil.delete({ where: { id } });
    return { id };
  });
}
