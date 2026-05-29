import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function MitraPage() {
  const session = await auth();

  if (!session?.user || !["ADMIN", "MITRA"].includes(session.user.role)) {
    redirect("/unauthorized");
  }

  redirect("/mitra/dashboard");
}
