import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Definisi route beserta role yang diizinkan.
 * Key: prefix path, Value: array role yang boleh akses.
 */
const PROTECTED_ROUTES: Record<string, string[]> = {
  "/admin": ["ADMIN"],
  "/mitra": ["ADMIN", "MITRA"],
  "/dashboard": ["ADMIN", "MITRA", "USER"],
};

/** Route yang hanya bisa diakses oleh tamu (belum login) */
const AUTH_ROUTES = ["/login", "/register"];

/** Route public yang tidak perlu pengecekan apapun */
const PUBLIC_ROUTES = ["/", "/api/auth"];

export default auth(function middleware(req: NextRequest & { auth: Awaited<ReturnType<typeof auth>> | null }) {
  const { nextUrl, auth: session } = req as unknown as {
    nextUrl: URL;
    auth: { user?: { role?: string } } | null;
  };

  const pathname = nextUrl.pathname;
  const isAuthenticated = !!session?.user;
  const userRole = session?.user?.role as string | undefined;

  // ─── 1. Jika ini route auth (login/register) ───────────────────────────────
  // User yang sudah login langsung redirect ke dashboard
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL(getDashboardByRole(userRole), nextUrl));
  }

  // ─── 2. Jika ini route public, lanjutkan ───────────────────────────────────
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
  if (isPublicRoute) return NextResponse.next();

  // ─── 3. Cek apakah route ini terproteksi ───────────────────────────────────
  const protectedEntry = Object.entries(PROTECTED_ROUTES).find(([route]) =>
    pathname.startsWith(route)
  );

  if (protectedEntry) {
    const [, allowedRoles] = protectedEntry;

    // Belum login → redirect ke login
    if (!isAuthenticated) {
      const loginUrl = new URL("/login", nextUrl);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Sudah login tapi role tidak diizinkan → redirect ke halaman tidak diizinkan
    if (userRole && !allowedRoles.includes(userRole)) {
      return NextResponse.redirect(new URL("/unauthorized", nextUrl));
    }
  }

  return NextResponse.next();
});

/**
 * Tentukan redirect dashboard berdasarkan role
 */
function getDashboardByRole(role?: string): string {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "MITRA":
      return "/mitra/dashboard";
    default:
      return "/dashboard";
  }
}

export const config = {
  /*
   * Match semua route KECUALI:
   * - File statis Next.js (_next/static, _next/image)
   * - favicon.ico
   * - File publik (gambar, dll.)
   */
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
