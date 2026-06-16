"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  TransactionDirection,
  TransactionStatus,
  TransactionType,
} from "@/src/generated/prisma";

function parseAmount(raw: FormDataEntryValue | null) {
  if (!raw) return 0;
  const cleaned = String(raw).replace(/[^0-9]/g, "");
  if (!cleaned) return 0;
  return Number.parseInt(cleaned, 10);
}

export async function topUpWithQris(formData: FormData) {
  return withErrorHandling(async () => {
    const session = await requireRole(["USER"]);
    const amount = parseAmount(formData.get("amount"));

    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Nominal top up tidak valid.");
    }

    const wallet = await prisma.wallet.upsert({
      where: { userId: session.user.id },
      update: {},
      create: { userId: session.user.id },
    });

    await prisma.$transaction([
      prisma.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: amount } },
      }),
      prisma.transaction.create({
        data: {
          userId: session.user.id,
          walletId: wallet.id,
          type: "TOP_UP",
          direction: "CREDIT",
          amount,
          status: "SUCCESS",
          description: "Top up QRIS",
        },
      }),
    ]);

    revalidatePath("/profile");
    revalidatePath("/wallet");
    revalidatePath("/topup");

    return { amount };
  });
}

// Shared helper types and utilities for wallet actions
type ActionResult = {
  success: boolean;
  message: string;
  data?: {
    balance?: number;
    transactionId?: string;
  };
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function validateAmount(amount: number) {
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error("Nominal harus berupa angka lebih dari 0");
  }
}

export async function topUpBalanceAction(
  userId: string,
  amount: number,
): Promise<ActionResult> {
  try {
    validateAmount(amount);

    await delay(1500);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({ where: { id: userId } });
      if (!user) throw new Error("User tidak ditemukan");

      const wallet = await tx.wallet.upsert({
        where: { userId },
        update: { balance: { increment: amount } },
        create: { userId, balance: amount },
      });

      const transaction = await tx.transaction.create({
        data: {
          userId,
          walletId: wallet.id,
          type: TransactionType.TOP_UP,
          direction: TransactionDirection.CREDIT,
          amount,
          status: TransactionStatus.SUCCESS,
          description: "Top up saldo",
        },
      });

      return { balance: wallet.balance, transactionId: transaction.id };
    });

    return { success: true, message: "Top-up berhasil", data: result };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : "Terjadi kesalahan saat top-up" };
  }
}

export async function withdrawMitraBalanceAction(
  mitraId: string,
  amount: number,
): Promise<ActionResult> {
  try {
    validateAmount(amount);

    await delay(1500);

    const result = await prisma.$transaction(async (tx) => {
      const mitra = await tx.mitra.findUnique({
        where: { id: mitraId },
        include: { user: { include: { wallet: true } } },
      });

      if (!mitra) throw new Error("Mitra tidak ditemukan");

      const wallet = mitra.user.wallet;
      if (!wallet) throw new Error("Wallet Mitra tidak ditemukan");
      if (wallet.balance < amount) throw new Error("Saldo Mitra tidak cukup");

      const updatedWallet = await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: amount } },
      });

      const transaction = await tx.transaction.create({
        data: {
          userId: mitra.userId,
          walletId: wallet.id,
          type: TransactionType.WITHDRAWAL,
          direction: TransactionDirection.DEBIT,
          amount,
          status: TransactionStatus.SUCCESS,
          description: "Withdrawal Mitra",
        },
      });

      return { balance: updatedWallet.balance, transactionId: transaction.id };
    });

    return { success: true, message: "Withdrawal berhasil", data: result };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : "Terjadi kesalahan saat withdrawal" };
  }
}
