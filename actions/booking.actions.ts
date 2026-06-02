"use server";

import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  validateBookingAvailability,
  validateBookingCancellation,
  type BookingAvailabilityInput,
} from "@/lib/validations/booking";

// ─── BOOKING AVAILABILITY TEST (Server Action) ───────────────────────────────

export async function testBookingAvailability(input: BookingAvailabilityInput) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN", "MITRA", "USER"]);
    await validateBookingAvailability(input);
    return { ok: true } as const;
  });
}

// ─── BOOKING CANCELLATION (Server Action) ───────────────────────────────────

export async function cancelBooking(bookingId: string) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA", "USER"]);

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        mobil: {
          select: { mitra: { select: { userId: true } } },
        },
      },
    });

    if (!booking) throw new Error("Booking tidak ditemukan.");
    if (booking.status === "CANCELLED") {
      throw new Error("Booking sudah dibatalkan.");
    }
    if (booking.status === "COMPLETED") {
      throw new Error("Booking yang sudah selesai tidak bisa dibatalkan.");
    }

    const isAdmin = session.user.role === "ADMIN";
    const isOwner = booking.userId === session.user.id;
    const isMitraOwner = booking.mobil?.mitra?.userId === session.user.id;

    if (!isAdmin && !isOwner && !isMitraOwner) {
      throw new Error("FORBIDDEN: Tidak memiliki akses ke booking ini.");
    }

    validateBookingCancellation(booking.startDate);

    return prisma.booking.update({
      where: { id: bookingId },
      data: { status: "CANCELLED" },
    });
  });
}
