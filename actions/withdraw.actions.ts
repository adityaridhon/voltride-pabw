"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import {
  TransactionDirection,
  TransactionStatus,
  TransactionType,
} from "@/src/generated/prisma";

export async function withdrawAction(
  amount: number,
  provider: string,
  accountNumber: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  if (amount <= 0) {
    return {
      success: false,
      message: "Nominal tidak valid",
    };
  }

  const wallet = await prisma.wallet.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (!wallet) {
    return {
      success: false,
      message: "Wallet tidak ditemukan",
    };
  }

  if (wallet.balance < amount) {
    return {
      success: false,
      message: "Saldo tidak cukup",
    };
  }

  await prisma.$transaction(async (tx) => {
    await tx.wallet.update({
      where: {
        id: wallet.id,
      },
      data: {
        balance: {
          decrement: amount,
        },
      },
    });

    await tx.transaction.create({
      data: {
        userId: session.user.id,
        walletId: wallet.id,
        type: TransactionType.WITHDRAWAL,
        direction: TransactionDirection.DEBIT,
        amount,
        status: TransactionStatus.SUCCESS,
        description: `Withdraw ke ${provider} (${accountNumber})`,
      },
    });
  });

  return {
    success: true,
    message: "Withdraw berhasil",
  };
}