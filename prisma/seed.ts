/**
 * Prisma Seed Script — Prisma v7 + Neon adapter
 * Jalankan dengan: npx prisma db seed
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";
import bcrypt from "bcryptjs";

// ─── Inisialisasi PrismaClient dengan Neon adapter (wajib di Prisma v7) ───────
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter } as never);

async function main() {
  console.log("🌱 Memulai seeding...");

  // ─── 1. Buat Admin ─────────────────────────────────────────────────────────
  const adminPassword = await bcrypt.hash("Admin@12345", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@voltride.id" },
    update: {},
    create: {
      name: "Super Admin",
      email: "admin@voltride.id",
      password: adminPassword,
      role: "ADMIN",
    },
  });
  console.log("✅ Admin dibuat:", admin.email);

  // ─── 2. Buat User Mitra ────────────────────────────────────────────────────
  const mitraPassword = await bcrypt.hash("Mitra@12345", 12);
  const mitraUser = await prisma.user.upsert({
    where: { email: "mitra@voltride.id" },
    update: {},
    create: {
      name: "Budi Santoso",
      email: "mitra@voltride.id",
      password: mitraPassword,
      role: "MITRA",
      noHp: "081234567890",
    },
  });

  // Buat profil Mitra
  const mitra = await prisma.mitra.upsert({
    where: { userId: mitraUser.id },
    update: {},
    create: {
      userId: mitraUser.id,
      namaMitra: "EV Rental Budi",
      noHp: "081234567890",
      alamat: "Jl. Sudirman No. 123, Jakarta",
    },
  });

  // Buat dompet mitra
  await prisma.dompet.upsert({
    where: { mitraId: mitra.id },
    update: {},
    create: { mitraId: mitra.id, saldo: 500000 },
  });
  console.log("✅ Mitra dibuat:", mitraUser.email);

  // ─── 3. Buat Armada ────────────────────────────────────────────────────────
  const armada1 = await prisma.armada.upsert({
    where: { nomorPlat: "B 1234 EV" },
    update: {},
    create: {
      mitraId: mitra.id,
      namaKendaraan: "Tesla Model 3",
      merek: "Tesla",
      model: "Model 3",
      tahun: 2023,
      nomorPlat: "B 1234 EV",
      statusKetersediaan: "TERSEDIA",
      hargaPerHari: 750000,
      deskripsi: "Mobil listrik premium dengan jangkauan 500km",
    },
  });

  const armada2 = await prisma.armada.upsert({
    where: { nomorPlat: "B 5678 EV" },
    update: {},
    create: {
      mitraId: mitra.id,
      namaKendaraan: "BYD Atto 3",
      merek: "BYD",
      model: "Atto 3",
      tahun: 2024,
      nomorPlat: "B 5678 EV",
      statusKetersediaan: "TERSEDIA",
      hargaPerHari: 500000,
      deskripsi: "SUV listrik dengan kabin luas dan fitur modern",
    },
  });
  console.log("✅ Armada dibuat:", armada1.nomorPlat, armada2.nomorPlat);

  // ─── 4. Buat User Biasa ────────────────────────────────────────────────────
  const userPassword = await bcrypt.hash("User@12345", 12);
  const regularUser = await prisma.user.upsert({
    where: { email: "user@voltride.id" },
    update: {},
    create: {
      name: "Ani Putri",
      email: "user@voltride.id",
      password: userPassword,
      role: "USER",
      noHp: "089876543210",
    },
  });

  await prisma.dompet.upsert({
    where: { userId: regularUser.id },
    update: {},
    create: { userId: regularUser.id, saldo: 1000000 },
  });
  console.log("✅ User dibuat:", regularUser.email);

  console.log("\n🎉 Seeding selesai!");
  console.log("\n📋 Akun tersedia:");
  console.log("  Admin  → admin@voltride.id   | Admin@12345");
  console.log("  Mitra  → mitra@voltride.id   | Mitra@12345");
  console.log("  User   → user@voltride.id    | User@12345");
}

main()
  .catch((e) => {
    console.error("❌ Seed gagal:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
