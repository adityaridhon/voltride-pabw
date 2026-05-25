/**
 * Prisma Seed Script — login users only
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
  console.log("🌱 Memulai seeding user login...");

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

  const mitra = await prisma.user.upsert({
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

  const user = await prisma.user.upsert({
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

  console.log("✅ User login berhasil dibuat:");
  console.table([
    {
      role: admin.role,
      email: admin.email,
      password: "Admin@12345",
    },
    {
      role: mitra.role,
      email: mitra.email,
      password: "Mitra@12345",
    },
    {
      role: user.role,
      email: user.email,
      password: "User@12345",
    },
  ]);

  console.log("🎉 Seeding selesai!");
}

main()
  .catch((error) => {
    console.error("❌ Seed gagal:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });