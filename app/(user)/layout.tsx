import type { ReactNode } from "react";
import Link from "next/link";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/usercomponents/LogoutButton";
import Navbar from "@/components/usercomponents/Navbar"

export default async function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar/>
      <main className="mx-10 py-24">{children}</main>
    </div>
  );
}
