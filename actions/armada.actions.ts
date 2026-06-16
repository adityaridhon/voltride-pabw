"use server";

import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  createArmadaSchema,
  updateArmadaSchema,
  deleteArmadaSchema,
} from "@/lib/validations/master";
import type { CreateArmadaInput, UpdateArmadaInput } from "@/lib/validations/master";

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

    const { mitraId, hargaPerHari, namaKendaraan, merek, model, color, nomorPlat, statusKetersediaan, foto, range, acceleration, battery, chargingTime, seat } = parsed.data;

    // Pastikan mitra ada
    const mitra = await prisma.mitra.findUnique({ where: { id: mitraId } });
    if (!mitra) throw new Error("Mitra tidak ditemukan.");

    // MITRA hanya bisa tambah armada ke mitra miliknya
    if (session.user.role === "MITRA" && mitra.userId !== session.user.id) {
      throw new Error("FORBIDDEN: Anda hanya dapat menambah armada untuk mitra Anda sendiri.");
    }

    // Cek nomor plat sudah ada
    const existing = await prisma.mobil.findUnique({
      where: { plateNumber: nomorPlat },
    });
    if (existing) throw new Error(`Nomor plat '${nomorPlat}' sudah terdaftar.`);

    return prisma.mobil.create({
      data: {
        mitraId,
        name: namaKendaraan,
        brand: merek,
        model,
        color,
        plateNumber: nomorPlat,
        pricePerDay: hargaPerHari,
        status: ( statusKetersediaan === "AVAILABLE"? "ACTIVE" : statusKetersediaan === "MAINTENANCE"? "MAINTENANCE": "INACTIVE" ) as any,
        imageUrl: foto,
        range: range,
        acceleration: acceleration,
        battery: battery,
        chargingTime: chargingTime,
        seat: seat,
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

    const { id, namaKendaraan, merek, model, color, nomorPlat, statusKetersediaan, foto, hargaPerHari, ...rest } = parsed.data;

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
      throw new Error("FORBIDDEN: Anda hanya dapat mengubah armada Anda sendiri.");
    }

    // Check nomor plat duplikat (exclude armada saat ini)
    if (nomorPlat && nomorPlat !== armada.plateNumber) {
      const existing = await prisma.mobil.findUnique({
        where: { plateNumber: nomorPlat },
      });
      if (existing) throw new Error(`Nomor plat '${nomorPlat}' sudah terdaftar.`);
    }

    const updateData: any = {};
    if (namaKendaraan) updateData.name = namaKendaraan;
    if (merek) updateData.brand = merek;
    if (model) updateData.model = model;
    if (color) updateData.color = color;
    if (nomorPlat) updateData.plateNumber = nomorPlat;
    if (hargaPerHari !== undefined) {
    updateData.pricePerDay = hargaPerHari;
    }
    if (statusKetersediaan) {
      updateData.status = statusKetersediaan === "AVAILABLE"? "ACTIVE" : statusKetersediaan === "MAINTENANCE"? "MAINTENANCE": "INACTIVE" ;
    }
    if (foto) updateData.imageUrl = foto;

    return prisma.mobil.update({ where: { id }, data: updateData });
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
      throw new Error("FORBIDDEN: Anda hanya dapat menghapus armada Anda sendiri.");
    }

    // Check active bookings (PENDING atau PAID dianggap aktif)
    const activeBookings = await prisma.booking.findFirst({
      where: {
        mobilId: id,
        status: { in: ["PENDING", "PAID"] },
      },
    });

    if (activeBookings) {
      throw new Error("Armada tidak dapat dihapus karena masih memiliki pemesanan aktif.");
    }

    await prisma.mobil.delete({ where: { id } });
    return { id };
  });
}
