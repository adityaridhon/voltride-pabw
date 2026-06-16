"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function withdrawAction(
  formData: FormData
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      ok: false,
      message: "Unauthorized",
    };
  }

  const amount = Number(
    formData.get("amount")
  );

  if (amount <= 0) {
    return {
      ok: false,
      message: "Nominal tidak valid",
    };
  }

  const wallet =
    await prisma.wallet.findUnique({
      where: {
        userId: session.user.id,
      },
    });

  if (!wallet) {
    return {
      ok: false,
      message: "Wallet tidak ditemukan",
    };
  }

  if (wallet.balance < amount) {
    return {
      ok: false,
      message: "Saldo tidak cukup",
    };
  }

  await prisma.wallet.update({
    where: {
      id: wallet.id,
    },
    data: {
      balance: {
        decrement: amount,
      },
    },
  });

  revalidatePath("/mitra/earnings");

  return {
    ok: true,
    message: "Withdraw berhasil",
  };
}