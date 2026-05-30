import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  TransactionDirection,
  TransactionStatus,
  TransactionType,
} from "@/src/generated/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const userId = body.userId as string | undefined;
    const amount = Number(body.amount);

    if (!userId) {
      return NextResponse.json(
        { message: "userId wajib dikirim" },
        { status: 400 },
      );
    }

    if (!Number.isInteger(amount) || amount <= 0) {
      return NextResponse.json(
        { message: "Nominal top-up harus berupa angka lebih dari 0" },
        { status: 400 },
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const wallet = await tx.wallet.upsert({
        where: {
          userId,
        },
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
          description: "Top-up saldo via QRIS dummy",
        },
      });

      return {
        wallet,
        transaction,
      };
    });

    return NextResponse.json({
      message: "Top-up berhasil",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Terjadi kesalahan saat top-up" },
      { status: 500 },
    );
  }
}
