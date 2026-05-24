import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  BookingStatus,
  TransactionDirection,
  TransactionStatus,
  TransactionType,
} from "@/src/generated/prisma";

class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const bookingId = body.bookingId as string | undefined;
    const userId = body.userId as string | undefined;

    if (!bookingId || !userId) {
      return NextResponse.json(
        { message: "bookingId dan userId wajib dikirim" },
        { status: 400 },
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const booking = await tx.booking.findUnique({
        where: { id: bookingId },
        include: {
          user: true,
          mobil: true,
        },
      });

      if (!booking) {
        throw new ApiError("Booking tidak ditemukan", 404);
      }

      if (booking.userId !== userId) {
        throw new ApiError("Booking ini bukan milik user tersebut", 403);
      }

      if (booking.status !== BookingStatus.PENDING) {
        throw new ApiError("Booking tidak bisa dibayar", 400);
      }

      const wallet = await tx.wallet.findUnique({
        where: { userId },
      });

      if (!wallet) {
        throw new ApiError("Wallet user tidak ditemukan", 404);
      }

      if (wallet.balance < booking.totalPrice) {
        throw new ApiError("Saldo tidak cukup", 400);
      }

      const updateBooking = await tx.booking.updateMany({
        where: {
          id: bookingId,
          userId,
          status: BookingStatus.PENDING,
        },
        data: {
          status: BookingStatus.PAID,
        },
      });

      if (updateBooking.count === 0) {
        throw new ApiError("Booking sudah diproses atau tidak valid", 400);
      }

      const updateWallet = await tx.wallet.updateMany({
        where: {
          id: wallet.id,
          balance: {
            gte: booking.totalPrice,
          },
        },
        data: {
          balance: {
            decrement: booking.totalPrice,
          },
        },
      });

      if (updateWallet.count === 0) {
        throw new ApiError("Saldo tidak cukup", 400);
      }

      const transaction = await tx.transaction.create({
        data: {
          userId,
          walletId: wallet.id,
          bookingId: booking.id,
          type: TransactionType.BOOKING_PAYMENT,
          direction: TransactionDirection.DEBIT,
          amount: booking.totalPrice,
          status: TransactionStatus.SUCCESS,
          description: `Pembayaran booking mobil ${booking.mobil.name}`,
        },
      });

      const latestWallet = await tx.wallet.findUnique({
        where: { id: wallet.id },
      });

      const latestBooking = await tx.booking.findUnique({
        where: { id: booking.id },
      });

      return {
        booking: latestBooking,
        wallet: latestWallet,
        transaction,
      };
    });

    return NextResponse.json({
      message: "Checkout berhasil. Booking sudah lunas.",
      data: result,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode },
      );
    }

    console.error(error);

    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
