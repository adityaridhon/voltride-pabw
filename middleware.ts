import NextAuth from "next-auth";
import { authConfig } from "@/auth.config"; 
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES: Record<string, string[]> = {
  "/admin": ["ADMIN"],
  "/mitra": ["ADMIN", "MITRA"],
  "/dashboard": ["ADMIN", "MITRA", "USER"],
  "/profile": ["USER"],
  "/wallet": ["USER"],
  "/topup": ["USER"],
  "/history": ["USER"],
  "/transaction": ["ADMIN", "MITRA", "USER"],
  "/transfer": ["ADMIN", "MITRA", "USER"],
  "/withdraw": ["USER"],
  "/payment-method": ["ADMIN", "MITRA", "USER"],
  "/security": ["ADMIN", "MITRA", "USER"],
  "/notifications": ["ADMIN", "MITRA", "USER"],
};

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/api/auth"];

// Inisialisasi auth khusus untuk lingkungan Edge / Middleware
const { auth } = NextAuth(authConfig);

export default auth(function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const session = (req as any).auth as { user?: { role?: string } } | null;

  const pathname = nextUrl.pathname;
  const isAuthenticated = !!session?.user;
  const userRole = session?.user?.role as string | undefined;

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(
      new URL(getDashboardByRole(userRole), nextUrl),
    );
  }

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route),
  );
  if (isPublicRoute) return NextResponse.next();

  const protectedEntry = Object.entries(PROTECTED_ROUTES).find(([route]) =>
    pathname.startsWith(route),
  );

  if (protectedEntry) {
    const [, allowedRoles] = protectedEntry;

    if (!isAuthenticated) {
      const loginUrl = new URL("/login", nextUrl);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (userRole && !allowedRoles.includes(userRole)) {
      return NextResponse.redirect(new URL("/unauthorized", nextUrl));
    }
  }

  return NextResponse.next();
});

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
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};