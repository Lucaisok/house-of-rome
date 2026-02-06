export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale => {
    return (locales as readonly string[]).includes(v);
};

export const assertLocale = (v: string): Locale => {
    if (!isLocale(v)) return defaultLocale;
    return v;
};
