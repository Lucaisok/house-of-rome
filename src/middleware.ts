import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const locales = ["en", "it"] as const;
type Locale = (typeof locales)[number];

function pickLocale(req: NextRequest): Locale {
  // 1) Cookie wins (user choice)
  const cookieLang = req.cookies.get("hor_lang")?.value;
  if (cookieLang === "en" || cookieLang === "it") return cookieLang;

  // 2) Fallback to Accept-Language
  const al = req.headers.get("accept-language") || "";
  // Simple check is enough for 2 languages:
  if (al.toLowerCase().includes("it")) return "it";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next internals, API, and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If path already has a locale prefix, continue
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  // Redirect to preferred locale
  const locale = pickLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  // 307 keeps method; good default
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
