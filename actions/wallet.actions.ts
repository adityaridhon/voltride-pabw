"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireRole, withErrorHandling } from "@/lib/auth-guard";

function parseAmount(raw: FormDataEntryValue | null) {
  if (!raw) return 0;
  const cleaned = String(raw).replace(/[^0-9]/g, "");
  if (!cleaned) return 0;
  return Number.parseInt(cleaned, 10);
}

export async function topUpWithQris(formData: FormData) {
  return withErrorHandling(async () => {
    const session = await requireRole(["USER"]);
    const amount = parseAmount(formData.get("amount"));

    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Nominal top up tidak valid.");
    }

    const wallet = await prisma.wallet.upsert({
      where: { userId: session.user.id },
      update: {},
      create: { userId: session.user.id },
    });

    await prisma.$transaction([
      prisma.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: amount } },
      }),
      prisma.transaction.create({
        data: {
          userId: session.user.id,
          walletId: wallet.id,
          type: "TOP_UP",
          direction: "CREDIT",
          amount,
          status: "SUCCESS",
          description: "Top up QRIS",
        },
      }),
    ]);

    revalidatePath("/dashboard");
    revalidatePath("/profile");
    revalidatePath("/wallet");
    revalidatePath("/topup");

    return { amount };
  });
}
