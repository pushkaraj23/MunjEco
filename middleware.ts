import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE } from "@/lib/adminAuth";
import {
  ENQUIRIES_SESSION_COOKIE,
  ENQUIRIES_SESSION_VALUE,
} from "@/lib/enquiriesGateAuth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes, excluding /admin/login
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (session !== ADMIN_SESSION_VALUE) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Standalone enquiries viewer: /enquiries (password separate from admin)
  if (
    pathname.startsWith("/enquiries") &&
    !pathname.startsWith("/enquiries/login")
  ) {
    const session = request.cookies.get(ENQUIRIES_SESSION_COOKIE)?.value;
    if (session !== ENQUIRIES_SESSION_VALUE) {
      const loginUrl = new URL("/enquiries/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/enquiries", "/enquiries/:path*"],
};
