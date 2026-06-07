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

// Hook untuk smooth scroll progress (0 → 1 dalam rentang scrollY 0–120px)
function useScrollProgress(maxScroll = 120) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrolled = Math.min(window.scrollY / maxScroll, 1);
        setProgress(scrolled);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [maxScroll]);

  return progress;
}

// Easing cubic-ease-out untuk feel yang natural
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const rawProgress = useScrollProgress(120);
  const progress = easeOut(rawProgress); // 0 = atas, 1 = sudah scroll

  // Nilai animasi floating navbar berdasarkan progress
  const floatingOpacity = progress;
  const floatingTranslateY = (1 - progress) * -28; // mulai -28px, berakhir di 0
  const floatingScale = 0.94 + progress * 0.06;     // scale 0.94 → 1.0
  const floatingBlur = progress * 12;               // blur 0 → 12px
  const floatingWidth = 100 - (1 - progress) * 8;  // width 92% → 100% (dalam %)
  const floatingShadow = progress;                  // shadow intensity

  // Static navbar memudar saat scroll
  const staticOpacity = 1 - progress;

  const NavLinks = () => (
    <ul className="flex items-center gap-8 text-[15px] font-medium">
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
                isActive && "text-[#00b488] font-semibold"
              )}
            >
              {item.label}
            </Link>
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#00b488]" />
            )}
          </li>
        );
      })}
    </ul>
  );

  const AuthButton = ({ compact = false }: { compact?: boolean }) => (
    <>
      {session?.user ? (
        <Link href="/dashboard">
          <button
            type="button"
            className={cn(
              "rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] font-semibold text-white shadow-md shadow-emerald-950/10 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all text-center",
              compact
                ? "px-5 py-2 text-[14px] min-w-[90px]"
                : "px-8 py-2.5 text-[15px] min-w-[110px]"
            )}
          >
            Profile
          </button>
        </Link>
      ) : (
        <Link href="/login">
          <button
            type="button"
            className={cn(
              "rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] font-semibold text-white shadow-md shadow-emerald-950/10 hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all text-center",
              compact
                ? "px-5 py-2 text-[14px] min-w-[90px]"
                : "px-8 py-2.5 text-[15px] min-w-[110px]"
            )}
          >
            Login
          </button>
        </Link>
      )}
    </>
  );

  return (
    <>
      {/* ─── 1. NAVBAR STATIS ─────────────────────────────── */}
      <nav
        className="absolute top-0 z-40 w-full border-b border-zinc-100 bg-white py-4"
        style={{
          opacity: staticOpacity,
          pointerEvents: staticOpacity < 0.1 ? "none" : "auto",
          // Shadow memudar bersama opacity
          boxShadow: `0 4px 20px -4px rgba(0,0,0,${0.05 * staticOpacity})`,
          // Transisi ringan agar tidak patah-patah
          willChange: "opacity",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center select-none">
              <h1 className="font-bold text-2xl tracking-tight text-zinc-900">
                Volt<span className="text-[#00b488] font-extrabold">Ride</span>
              </h1>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex justify-center">
            <NavLinks />
          </div>

          {/* Auth + Hamburger */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:flex items-center">
              <AuthButton />
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

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden mx-4 overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 shadow-inner">
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
                        isActive && "bg-white text-[#00b488] font-semibold shadow-sm"
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
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-gradient-to-r from-[#006B4F] to-[#00D096] py-3 text-sm font-semibold text-white shadow text-center"
                    >
                      Profile
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => { setIsOpen(false); signOut(); }}
                    className="w-full rounded-xl border border-zinc-200 bg-white py-3 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center justify-center gap-2"
                  >
                    <LogOut className="size-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)}>
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
        </div>
      </nav>

      {/* ─── 2. NAVBAR FLOATING ───────────────────────────── */}
      <nav
        className="fixed z-50 left-1/2 bg-white/90 border border-zinc-200/80 rounded-2xl py-3 backdrop-blur-md"
        style={{
          // Animasi berbasis inline style untuk interpolasi halus
          opacity: floatingOpacity,
          transform: `
            translateX(-50%)
            translateY(${floatingTranslateY}px)
            scale(${floatingScale})
          `,
          // Width diinterpolasi dari 92% → 97%
          width: `${floatingWidth}%`,
          maxWidth: "1280px",
          top: "12px",
          pointerEvents: floatingOpacity < 0.05 ? "none" : "auto",
          // Shadow yang tumbuh bersama scroll
          boxShadow: `
            0 ${4 + floatingShadow * 16}px ${12 + floatingShadow * 28}px -4px rgba(0,0,0,${0.04 + floatingShadow * 0.08}),
            0 0 0 1px rgba(0,0,0,${floatingShadow * 0.04})
          `,
          // Backdrop blur tambahan via filter
          backdropFilter: `blur(${floatingBlur}px) saturate(${1 + progress * 0.4})`,
          WebkitBackdropFilter: `blur(${floatingBlur}px) saturate(${1 + progress * 0.4})`,
          willChange: "transform, opacity, width, box-shadow",
          // Transisi pendek untuk responsivitas saat scroll cepat berhenti
          transition: "box-shadow 0.1s ease, border-color 0.2s ease",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo — sedikit lebih kecil di floating mode */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center select-none">
              <h1
                className="font-bold tracking-tight text-zinc-900"
                style={{ fontSize: `${22 - progress * 2}px` }}
              >
                Volt<span className="text-[#00b488] font-extrabold">Ride</span>
              </h1>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex justify-center">
            <NavLinks />
          </div>

          {/* Auth */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:flex items-center">
              <AuthButton compact />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;