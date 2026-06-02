import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingAvailabilitySchema = z.object({
	userId: z.string().cuid("User ID tidak valid"),
	mobilId: z.string().cuid("Mobil ID tidak valid"),
	startDate: z.string().min(1, "Start date wajib diisi"),
	endDate: z.string().min(1, "End date wajib diisi"),
});

export type BookingAvailabilityInput = z.infer<
	typeof bookingAvailabilitySchema
>;

const toDateOnly = (value: string, label: string) => {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) {
		throw new Error(`${label} tidak valid`);
	}
	date.setHours(0, 0, 0, 0);
	return date;
};

const toDateOnlyFromDate = (value: Date, label: string) => {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) {
		throw new Error(`${label} tidak valid`);
	}
	date.setHours(0, 0, 0, 0);
	return date;
};

const addDays = (date: Date, days: number) => {
	const next = new Date(date);
	next.setDate(next.getDate() + days);
	return next;
};

export async function validateBookingAvailability(
	input: BookingAvailabilityInput
) {
	const parsed = bookingAvailabilitySchema.safeParse(input);
	if (!parsed.success) {
		throw new Error(parsed.error.issues[0]?.message ?? "Input tidak valid");
	}

	const startDate = toDateOnly(parsed.data.startDate, "Start date");
	const endDate = toDateOnly(parsed.data.endDate, "End date");

	if (endDate < startDate) {
		throw new Error("Tanggal akhir harus setelah tanggal mulai.");
	}

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const minStartDate = addDays(today, 1);
	const maxStartDate = addDays(today, 3);
	const maxEndDate = addDays(today, 3);

	if (startDate < minStartDate) {
		throw new Error("Pemesanan minimal H-1 dari hari ini.");
	}

	if (startDate > maxStartDate) {
		throw new Error("Pemesanan maksimal H+3 dari hari ini.");
	}

	if (endDate > maxEndDate) {
		throw new Error("Tanggal akhir maksimal H+3 dari hari ini.");
	}

	const overlappingBooking = await prisma.booking.findFirst({
		where: {
			mobilId: parsed.data.mobilId,
			status: {
				notIn: ["CANCELLED", "FAILED"],
			},
			AND: [
				{
					startDate: {
						lte: endDate,
					},
				},
				{
					endDate: {
						gte: startDate,
					},
				},
			],
		},
		select: {
			id: true,
		},
	});

	if (overlappingBooking) {
		throw new Error(
			"Mobil tidak tersedia pada tanggal tersebut (terdeteksi overlap booking)."
		);
	}
}

export function validateBookingCancellation(startDateValue: Date) {
	const startDate = toDateOnlyFromDate(startDateValue, "Tanggal mulai");
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const minAllowedStart = addDays(today, 2);
	if (startDate <= minAllowedStart) {
		throw new Error("Pembatalan hanya bisa dilakukan minimal H-2.");
	}
}
