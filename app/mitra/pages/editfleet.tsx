import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import TambahDanEditFleet from "../components/tambahdaneditfleet";

export default async function EditFleetPage({ carId }: { carId: string }) {
  const session = await auth();
  if (!session || session.user.role !== "MITRA") redirect("/unauthorized");

  const mitra = await prisma.mitra.findUnique({
    where: { userId: session.user.id },
  });

  if (!mitra) redirect("/unauthorized");

  return <TambahDanEditFleet mode="edit" carId={carId} mitraId={mitra.id} />;
}
