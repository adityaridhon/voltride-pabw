/**
 * Prisma Seed Script — Prisma v7 + Neon adapter
 * Jalankan dengan: npm run db:seed
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";
import bcrypt from "bcryptjs";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter } as never);

async function main() {
  console.log("🌱 Memulai seeding...");

  const adminPassword = await bcrypt.hash("Admin@12345", 12);
  const mitraPassword = await bcrypt.hash("Mitra@12345", 12);
  const userPassword = await bcrypt.hash("User@12345", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@voltride.id" },
    update: {
      name: "Super Admin",
      password: adminPassword,
      role: "ADMIN",
      phone: null,
    },
    create: {
      name: "Super Admin",
      email: "admin@voltride.id",
      password: adminPassword,
      role: "ADMIN",
      phone: null,
    },
  });

  const mitraUser = await prisma.user.upsert({
    where: { email: "mitra@voltride.id" },
    update: {
      name: "Budi Santoso",
      password: mitraPassword,
      role: "MITRA",
      phone: "081234567890",
    },
    create: {
      name: "Budi Santoso",
      email: "mitra@voltride.id",
      password: mitraPassword,
      role: "MITRA",
      phone: "081234567890",
    },
  });

  const regularUser = await prisma.user.upsert({
    where: { email: "user@voltride.id" },
    update: {
      name: "Ani Putri",
      password: userPassword,
      role: "USER",
      phone: "089876543210",
    },
    create: {
      name: "Ani Putri",
      email: "user@voltride.id",
      password: userPassword,
      role: "USER",
      phone: "089876543210",
    },
  });

  const mitra = await prisma.mitra.upsert({
    where: { userId: mitraUser.id },
    update: {
      companyName: "EV Rental Budi",
      phone: "081234567890",
      address: "Jl. Sudirman No. 123, Jakarta",
    },
    create: {
      userId: mitraUser.id,
      companyName: "EV Rental Budi",
      phone: "081234567890",
      address: "Jl. Sudirman No. 123, Jakarta",
    },
  });

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
    },
    orderBy: {
      email: "asc",
    },
  });

  const mitras = await prisma.mitra.findMany({
    select: {
      id: true,
      userId: true,
      companyName: true,
      address: true,
      phone: true,
    },
  });

  console.log("\n✅ Users di database:");
  console.table(users);

  console.log("\n✅ Mitra di database:");
  console.table(mitras);

  console.log("\n🎉 Seeding selesai.");
  console.log("Akun testing berhasil dibuat. Password tidak ditampilkan di log.");
}

main()
  .catch((error) => {
    console.error("❌ Seed gagal:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });