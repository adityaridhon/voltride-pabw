"use server";

import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";
import {
  createUserReviewSchema,
  type CreateUserReviewInput,
} from "@/lib/validations/review";

export async function createUserReview(input: CreateUserReviewInput) {
  return withErrorHandling(async () => {
    const session = await requireRole(["ADMIN", "MITRA"]);

    const parsed = createUserReviewSchema.safeParse(input);
    if (!parsed.success) {
      throw new Error(parsed.error.errors[0].message);
    }

    const { bookingId, userId, rating, comment } = parsed.data;

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        mobil: { select: { mitra: { select: { userId: true } } } },
      },
    });

    if (!booking) throw new Error("Booking tidak ditemukan.");
    if (booking.userId !== userId) {
      throw new Error("User tidak sesuai dengan booking.");
    }

    const isAdmin = session.user.role === "ADMIN";
    const isMitraOwner = booking.mobil?.mitra?.userId === session.user.id;

    if (!isAdmin && !isMitraOwner) {
      throw new Error("FORBIDDEN: Anda tidak dapat memberi review ini.");
    }

    const existing = await prisma.userReview.findUnique({
      where: { bookingId },
      select: { id: true },
    });

    if (existing) {
      throw new Error("Review untuk booking ini sudah ada.");
    }

    return prisma.userReview.create({
      data: {
        bookingId,
        reviewerId: session.user.id,
        userId,
        rating,
        comment,
      },
      include: {
        reviewer: { select: { id: true, name: true, email: true } },
        user: { select: { id: true, name: true, email: true } },
      },
    });
  });
}

export async function getUserReviews(userId: string) {
  return withErrorHandling(async () => {
    await requireRole(["ADMIN", "MITRA", "USER"]);

    return prisma.userReview.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        reviewer: { select: { id: true, name: true, email: true } },
        booking: { select: { id: true, startDate: true, endDate: true } },
      },
    });
  });
}
