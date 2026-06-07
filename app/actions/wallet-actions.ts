"use server";

import { prisma } from "@/lib/prisma";
import {
  TransactionDirection,
  TransactionStatus,
  TransactionType,
} from "@/src/generated/prisma";

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

// server action simulasi topup saldo user.
// tidak menggunakan payment gateway.
export async function topUpBalanceAction(
  userId: string,
  amount: number,
): Promise<ActionResult> {
  try {
    validateAmount(amount);

    // Simulasi proses ke pihak bank/payment provider
    await delay(2000);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new Error("User tidak ditemukan");
      }

      const wallet = await tx.wallet.upsert({
        where: { userId },
        update: {
          balance: {
            increment: amount,
          },
        },
        create: {
          userId,
          balance: amount,
        },
      });

      const transaction = await tx.transaction.create({
        data: {
          userId,
          walletId: wallet.id,
          type: TransactionType.TOP_UP,
          direction: TransactionDirection.CREDIT,
          amount,
          status: TransactionStatus.SUCCESS,
          description: "Simulasi top-up saldo tanpa payment gateway",
        },
      });

      return {
        balance: wallet.balance,
        transactionId: transaction.id,
      };
    });

    return {
      success: true,
      message: "Top-up berhasil",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat top-up",
    };
  }
}

// server action simulasi withdrawal saldo mitra.
//  parameter yang dipakai adalah mitraId ya ces
export async function withdrawMitraBalanceAction(
  mitraId: string,
  amount: number,
): Promise<ActionResult> {
  try {
    validateAmount(amount);

    // simulasi proses ke pihak bank
    await delay(2000);

    const result = await prisma.$transaction(async (tx) => {
      const mitra = await tx.mitra.findUnique({
        where: { id: mitraId },
        include: {
          user: {
            include: {
              wallet: true,
            },
          },
        },
      });

      if (!mitra) {
        throw new Error("Mitra tidak ditemukan");
      }

      const wallet = mitra.user.wallet;

      if (!wallet) {
        throw new Error("Wallet Mitra tidak ditemukan");
      }

      if (wallet.balance < amount) {
        throw new Error("Saldo Mitra tidak cukup");
      }

      const updatedWallet = await tx.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: {
            decrement: amount,
          },
        },
      });

      const transaction = await tx.transaction.create({
        data: {
          userId: mitra.userId,
          walletId: wallet.id,
          type: TransactionType.WITHDRAWAL,
          direction: TransactionDirection.DEBIT,
          amount,
          status: TransactionStatus.SUCCESS,
          description: "Simulasi withdrawal saldo Mitra tanpa payment gateway",
        },
      });

      return {
        balance: updatedWallet.balance,
        transactionId: transaction.id,
      };
    });

    return {
      success: true,
      message: "Withdrawal berhasil",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat withdrawal",
    };
  }
}
