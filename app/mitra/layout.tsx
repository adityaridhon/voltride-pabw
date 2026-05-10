import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Mitra Dashboard | VoltRide",
  description: "Mitra Dashboard for Fleet Management",
};

export default async function MitraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || !["ADMIN", "MITRA"].includes(session.user.role)) {
    redirect("/unauthorized");
  }

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
