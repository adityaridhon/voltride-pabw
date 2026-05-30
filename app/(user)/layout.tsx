import type { ReactNode } from "react";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

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
      <nav className="bg-white font-heading mx-10 h-18 z-50 px-10 py-5 flex flex-col justify-between items-center w-auto mt-4 rounded-lg shadow-md md:flex-row">
        <Link href="/dashboard" className="font-bold text-2xl">
          Volt<span className="text-primary">Ride</span>
        </Link>
        <ul className="flex flex-wrap items-center justify-center">
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="inline-block px-4 py-2 text-gray-700 hover:text-primary cursor-pointer">
            <Link href="/topup">Top Up</Link>
          </li>
        </ul>
        <Button size="lg" asChild>
          <Link href="/profile">Profile</Link>
        </Button>
      </nav>

      <main className="mx-10 pb-10 mt-6">{children}</main>
    </div>
  );
}
