"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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
      message: "Silakan login terlebih dahulu sebelum melakukan pemesanan.",
    };
  }

  const mobilId = String(formData.get("mobilId") ?? "");
  const startDateValue = String(formData.get("startDate") ?? "");
  const endDateValue = String(formData.get("endDate") ?? "");

  if (!mobilId || !startDateValue || !endDateValue) {
    return { ok: false, message: "Pilih mobil serta tanggal mulai dan selesai." };
  }

  const startDate = parseDate(startDateValue);
  const endDate = parseDate(endDateValue);

  if (!startDate || !endDate) {
    return { ok: false, message: "Format tanggal tidak valid." };
  }

  if (startDate > endDate) {
    return { ok: false, message: "Tanggal selesai tidak boleh sebelum tanggal mulai." };
  }

  const today = startOfDay(new Date());
  if (startDate < today) {
    return { ok: false, message: "Tanggal mulai tidak boleh sebelum hari ini." };
  }

  const mobil = await prisma.mobil.findUnique({
    where: { id: mobilId },
    select: {
      id: true,
      status: true,
      pricePerDay: true,
      totalUnit: true,
      availableUnit: true,
    },
  });

  if (!mobil) {
    return { ok: false, message: "Mobil tidak ditemukan." };
  }

  if (mobil.status !== "ACTIVE" || mobil.availableUnit < 1) {
    return { ok: false, message: "Mobil sedang tidak tersedia untuk dipesan." };
  }

  const overlappingBookings = await prisma.booking.findMany({
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
  const fullyBookedDate = requestedDates.find((dateKey) => {
    const bookingCount = overlappingBookings.filter((booking) =>
      getDateKeysBetween(booking.startDate, booking.endDate).includes(dateKey)
    ).length;

    return bookingCount >= mobil.totalUnit;
  });

  if (fullyBookedDate) {
    return {
      ok: false,
      message: `Tanggal ${formatDateId(fullyBookedDate)} sudah penuh dipesan.`,
    };
  }

  const totalDays = getTotalDays(startDate, endDate);
  const totalPrice = totalDays * mobil.pricePerDay;

  await prisma.booking.create({
    data: {
      userId: session.user.id,
      mobilId,
      startDate,
      endDate,
      totalDays,
      totalPrice,
      status: "PENDING",
    },
  });

  revalidatePath("/product");

  return {
    ok: true,
    message: "Pemesanan berhasil dikirim. Status booking masih menunggu pembayaran.",
  };
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
