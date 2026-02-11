import type { Locale } from "@/lib/i18n";

export const formatPrice = (amount: number, locale: Locale) => {
    return new Intl.NumberFormat(locale === "it" ? "it-IT" : "en-GB", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(amount);
};
