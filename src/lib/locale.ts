import type { Locale } from "@/lib/i18n";

export const setLangCookie = (lang: Locale) => {
    // 1 year
    document.cookie = `hor_lang=${lang}; path=/; max-age=31536000; samesite=lax`;
};

export const getCurrentLocaleFromPath = (pathname: string): Locale => {
    // our URLs always start with /en or /it
    if (pathname === "/it" || pathname.startsWith("/it/")) return "it";
    return "en";
};

export const replaceLocaleInPath = (pathname: string, next: Locale) => {
    // Normalize: ensure pathname starts with /en or /it
    const current = getCurrentLocaleFromPath(pathname);

    // Strip current locale prefix
    const without =
        pathname === `/${current}` ? "/" : pathname.replace(new RegExp(`^/${current}`), "");

    // Build next path
    return without === "/" ? `/${next}` : `/${next}${without}`;
};
