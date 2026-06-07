import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireRole } from "@/lib/auth-guard";

export async function GET() {
  const session = await requireRole(["USER"]);
  const userId = session.user!.id;

  const wallet = await prisma.wallet.findUnique({
    where: { userId },
    select: { balance: true },
  });

  return NextResponse.json({ balance: Number(wallet?.balance ?? 0) });
}
