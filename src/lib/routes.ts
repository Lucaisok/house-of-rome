import type { Locale } from "@/lib/i18n";

/** Returns routes prefixed with the given locale, e.g. /it/apartments */
export const localizedRoutes = (locale: Locale) => ({
    home: `/${locale}`,
    apartments: `/${locale}/apartments`,
    apartment: (slug: string) => `/${locale}/apartments/${slug}`,
    contacts: `/${locale}/contacts`,
    privacyPolicy: `/${locale}/privacy-policy`,
    book: `/${locale}/book`,
});
