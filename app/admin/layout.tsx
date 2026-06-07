import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { SidebarProvider } from "@/components/SidebarProvider";

export const metadata = {
  title: "Admin Dashboard | VoltRide",
  description: "Admin Dashboard for User and Partner Management",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return (
    <SessionProvider session={session}>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </SessionProvider>
  );
}
