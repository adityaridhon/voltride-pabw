"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Menu, X, LogOut } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/product" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-4 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center select-none">
            <h1 className="font-heading font-bold text-2xl tracking-tight text-zinc-900">
              Volt<span className="text-[#00b488] font-extrabold">Ride</span>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8 text-[15px] font-medium font-sans">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href} className="relative py-2">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-zinc-500 hover:text-[#00b488] transition-colors duration-200",
                      isActive && "text-[#00b488] font-semibold",
                    )}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#00b488] animate-in fade-in slide-in-from-bottom-1 duration-300" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden md:flex items-center">
            {session?.user ? (
              <Link href="/dashboard">
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] px-8 py-2.5 text-[15px] font-semibold text-white shadow-md shadow-emerald-950/10 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all text-center min-w-[110px]"
                >
                  Profile
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] px-8 py-2.5 text-[15px] font-semibold text-white shadow-md shadow-emerald-950/10 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all text-center min-w-[110px]"
                >
                  Login
                </button>
              </Link>
            )}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-100 bg-white p-2.5 text-zinc-700 shadow-sm transition hover:bg-zinc-50 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 rounded-xl border border-zinc-100 bg-zinc-50 p-4 shadow-inner md:hidden animate-in slide-in-from-top-2 duration-200 mx-4">
          <ul className="space-y-1.5 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex w-full items-center rounded-lg px-3 py-2 text-zinc-500 hover:bg-white hover:text-[#00b488] transition",
                      isActive &&
                        "bg-white text-[#00b488] font-semibold shadow-sm",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-zinc-200">
            {session?.user ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] py-3 text-sm font-semibold text-white shadow text-center"
                  >
                    Profile
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    signOut();
                  }}
                  className="w-full rounded-xl border border-zinc-200 bg-white py-3 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center justify-center gap-2"
                >
                  <LogOut className="size-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <button
                  type="button"
                  className="w-full rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] py-3 text-sm font-semibold text-white shadow text-center"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
