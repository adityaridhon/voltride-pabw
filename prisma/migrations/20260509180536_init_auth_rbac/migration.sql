/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MITRA', 'USER');

-- CreateEnum
CREATE TYPE "StatusKetersediaan" AS ENUM ('TERSEDIA', 'DISEWA', 'PERAWATAN');

-- CreateEnum
CREATE TYPE "StatusPemesanan" AS ENUM ('MENUNGGU', 'DIKONFIRMASI', 'AKTIF', 'SELESAI', 'DIBATALKAN');

-- CreateEnum
CREATE TYPE "JenisTransaksi" AS ENUM ('TOPUP', 'PEMBAYARAN', 'REFUND');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "noHp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mitra" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "namaMitra" TEXT NOT NULL,
    "noHp" TEXT,
    "alamat" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mitra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armada" (
    "id" TEXT NOT NULL,
    "mitraId" TEXT NOT NULL,
    "namaKendaraan" TEXT NOT NULL,
    "merek" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "nomorPlat" TEXT NOT NULL,
    "statusKetersediaan" "StatusKetersediaan" NOT NULL DEFAULT 'TERSEDIA',
    "hargaPerHari" DECIMAL(12,2) NOT NULL,
    "foto" TEXT,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "armada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dompet" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "mitraId" TEXT,
    "saldo" DECIMAL(14,2) NOT NULL DEFAULT 0,

    CONSTRAINT "dompet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pemesanan" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "armadaId" TEXT NOT NULL,
    "tanggalSewa" TIMESTAMP(3) NOT NULL,
    "tanggalSelesai" TIMESTAMP(3) NOT NULL,
    "totalHarga" DECIMAL(14,2) NOT NULL,
    "statusPemesanan" "StatusPemesanan" NOT NULL DEFAULT 'MENUNGGU',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pemesanan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaksi_saldo" (
    "id" TEXT NOT NULL,
    "dompetId" TEXT NOT NULL,
    "jenis" "JenisTransaksi" NOT NULL,
    "jumlah" DECIMAL(14,2) NOT NULL,
    "keterangan" TEXT,
    "tanggalTransaksi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaksi_saldo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mitra_userId_key" ON "mitra"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "armada_nomorPlat_key" ON "armada"("nomorPlat");

-- CreateIndex
CREATE UNIQUE INDEX "dompet_userId_key" ON "dompet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "dompet_mitraId_key" ON "dompet"("mitraId");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mitra" ADD CONSTRAINT "mitra_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armada" ADD CONSTRAINT "armada_mitraId_fkey" FOREIGN KEY ("mitraId") REFERENCES "mitra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dompet" ADD CONSTRAINT "dompet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dompet" ADD CONSTRAINT "dompet_mitraId_fkey" FOREIGN KEY ("mitraId") REFERENCES "mitra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pemesanan" ADD CONSTRAINT "pemesanan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pemesanan" ADD CONSTRAINT "pemesanan_armadaId_fkey" FOREIGN KEY ("armadaId") REFERENCES "armada"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksi_saldo" ADD CONSTRAINT "transaksi_saldo_dompetId_fkey" FOREIGN KEY ("dompetId") REFERENCES "dompet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
