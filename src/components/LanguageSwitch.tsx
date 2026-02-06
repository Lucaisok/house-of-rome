"use client";

import { usePathname, useRouter } from "next/navigation";

type Locale = "en" | "it";

function setLangCookie(lang: Locale) {
  // 1 year
  document.cookie = `hor_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

function otherLocale(current: Locale): Locale {
  return current === "en" ? "it" : "en";
}

function getCurrentLocaleFromPath(pathname: string): Locale {
  // our URLs always start with /en or /it
  if (pathname === "/it" || pathname.startsWith("/it/")) return "it";
  return "en";
}

function replaceLocaleInPath(pathname: string, next: Locale) {
  // Normalize: ensure pathname starts with /en or /it
  const current = getCurrentLocaleFromPath(pathname);

  // Strip current locale prefix
  const without =
    pathname === `/${current}` ? "/" : pathname.replace(new RegExp(`^/${current}`), "");

  // Build next path
  return without === "/" ? `/${next}` : `/${next}${without}`;
}

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  const current = getCurrentLocaleFromPath(pathname);
  const next = otherLocale(current);

  return (
    <button
      type="button"
      onClick={() => {
        setLangCookie(next);
        const nextPath = replaceLocaleInPath(pathname, next);
        router.push(nextPath);
      }}
      aria-label={`Switch language to ${next}`}
    >
      {next.toUpperCase()}
    </button>
  );
}
