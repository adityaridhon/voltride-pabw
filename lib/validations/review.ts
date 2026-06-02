import { z } from "zod";

export const createUserReviewSchema = z.object({
  bookingId: z.string().cuid("Booking ID tidak valid"),
  userId: z.string().cuid("User ID tidak valid"),
  rating: z
    .number()
    .int("Rating harus berupa angka bulat")
    .min(1, "Rating minimal 1")
    .max(5, "Rating maksimal 5"),
  comment: z.string().max(1000, "Ulasan maksimal 1000 karakter").optional(),
});

export type CreateUserReviewInput = z.infer<typeof createUserReviewSchema>;
