"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  Prisma,
  TransactionDirection,
  TransactionStatus,
  TransactionType,
} from "@/src/generated/prisma";

type BookingActionState = {
  ok: boolean;
  message: string;
};

const ACTIVE_BOOKING_STATUSES = ["PENDING", "PAID"] as const;
const DAY_IN_MS = 24 * 60 * 60 * 1000;

export async function createBookingAction(
  _prevState: BookingActionState,
  formData: FormData
): Promise<BookingActionState> {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      message: "Please login first before making a reservation.",
    };
  }

  const mobilId = String(formData.get("mobilId") ?? "");
  const startDateValue = String(formData.get("startDate") ?? "");
  const endDateValue = String(formData.get("endDate") ?? "");

  if (!mobilId || !startDateValue || !endDateValue) {
    return { ok: false, message: "Please select a car and specify start and end dates." };
  }

  const startDate = parseDate(startDateValue);
  const endDate = parseDate(endDateValue);

  if (!startDate || !endDate) {
    return { ok: false, message: "Invalid date format." };
  }

  if (startDate > endDate) {
    return { ok: false, message: "End date cannot be before start date." };
  }

  const today = startOfDay(new Date());
  if (startDate < today) {
    return { ok: false, message: "Start date cannot be before today." };
  }

  const mobil = await prisma.mobil.findUnique({
    where: { id: mobilId },
    select: {
      id: true,
      name: true,
      status: true,
      pricePerDay: true,

      mitra: {
        select: {
          userId: true,
        },
      },
    },
  });

  if (!mobil) {
    return { ok: false, message: "Car not found." };
  }

 if (mobil.status !== "ACTIVE") {
    return { ok: false, message: "Car is currently not available for booking." };
  }

  const totalDays = getTotalDays(startDate, endDate);
  const totalPrice = totalDays * mobil.pricePerDay;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await prisma.$transaction(
        async (tx) => {
          const overlappingBookings = await tx.booking.findMany({
            where: {
              mobilId,
              status: { in: [...ACTIVE_BOOKING_STATUSES] },
              startDate: { lte: endDate },
              endDate: { gte: startDate },
            },
            select: {
              startDate: true,
              endDate: true,
            },
          });

          const requestedDates = getDateKeysBetween(startDate, endDate);
          const bookedDate = requestedDates.find((dateKey) =>
            overlappingBookings.some((booking) =>
              getDateKeysBetween(booking.startDate, booking.endDate).includes(dateKey)
            )
          );

          if (bookedDate) {
            throw new BookingActionError(`${formatDateId(bookedDate)} Already Booked.`);
          }

          const wallet = await tx.wallet.findUnique({
            where: { userId: session.user.id },
          });

          if (!wallet) {
            throw new BookingActionError("Wallet Not Found.");
          }

          const walletUpdate = await tx.wallet.updateMany({
            where: {
              id: wallet.id,
              balance: { gte: totalPrice },
            },
            data: {
              balance: { decrement: totalPrice },
            },
          });

          if (walletUpdate.count === 0) {
            throw new BookingActionError("Balance not enough.");
          }

          const booking = await tx.booking.create({
            data: {
              userId: session.user.id,
              mobilId,
              startDate,
              endDate,
              totalDays,
              totalPrice,
              status: "PAID",
            },
          });

          const mitraWallet = await tx.wallet.findUnique({
            where: {
              userId: mobil.mitra.userId,
            },
          });

          if (!mitraWallet) {
            throw new BookingActionError(
              "Partner wallet not found."
            );
          }

          await tx.wallet.update({
            where: {
              id: mitraWallet.id,
            },
            data: {
              balance: {
                increment: totalPrice,
              },
            },
          })

          await tx.transaction.create({
            data: {
              userId: session.user.id,
              walletId: wallet.id,
              bookingId: booking.id,
              type: TransactionType.BOOKING_PAYMENT,
              direction: TransactionDirection.DEBIT,
              amount: totalPrice,
              status: TransactionStatus.SUCCESS,
              description: `Pembayaran booking mobil ${mobil.name}`,
            },
          });

          await tx.transaction.create({
            data: {
              userId: mobil.mitra.userId,
              walletId: mitraWallet.id,
              bookingId: booking.id,
              type: TransactionType.BOOKING_PAYMENT,
              direction: TransactionDirection.CREDIT,
              amount: totalPrice,
              status: TransactionStatus.SUCCESS,
              description: `Pendapatan dari booking mobil ${mobil.name}`,
            },
          });
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable }
      );
      break;
    } catch (error) {
      if (error instanceof BookingActionError) {
        return { ok: false, message: error.message };
      }

      if (isRetryableTransactionError(error) && attempt < 3) {
        continue;
      }

      console.error(error);
      return { ok: false, message: "An error occurred while processing the booking." };
    }
  }

  revalidatePath("/product");
  revalidatePath("/profile");
  revalidatePath("/history");
  revalidatePath("/wallet");

  return {
    ok: true,
    message: "Booking successful. Thank you for your order!",
  };
}

class BookingActionError extends Error {}

function isRetryableTransactionError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2034"
  );
}

function parseDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getTotalDays(startDate: Date, endDate: Date) {
  return Math.floor((startOfDay(endDate).getTime() - startOfDay(startDate).getTime()) / DAY_IN_MS) + 1;
}

function getDateKeysBetween(startDate: Date, endDate: Date) {
  const dates: string[] = [];
  const current = startOfDay(startDate);
  const end = startOfDay(endDate);

  while (current <= end) {
    dates.push(toDateKey(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateId(dateKey: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parseDate(dateKey) ?? new Date(dateKey));
}
