import { assertLocale } from "@/lib/i18n";
import { getSiteUrl, ogLocale } from "../metadata";
import { Metadata } from "next";

export const siteLayoutMetadata = async ({
    params,
}: {
    params: Promise<{ lang: string; }>;
}): Promise<Metadata> => {
    const { lang: raw } = await params;
    const lang = assertLocale(raw); // returns "en" | "it"

    const siteUrl = getSiteUrl();

    const title =
        lang === "it"
            ? "Appartamenti in Affitto a Roma | House of Rome"
            : "Holiday Apartments for Rent in Rome | House of Rome";

    const description =
        lang === "it"
            ? "Affitta un appartamento vacanze a Roma con House of Rome. Quattro affitti brevi nel centro storico, a Trastevere e vicino al Vaticano. Prenota direttamente al miglior prezzo."
            : "Rent a holiday apartment in Rome with House of Rome. Four fully equipped short-stay rentals in Trastevere and the city centre. Book direct for the best rates.";

    // We need the current pathname to build canonical/alternates,
    // but layout-level generateMetadata doesn't receive pathname.
    // So here we set site-wide metadata; page-level will add canonical/alternates.
    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: title,
            template: "%s | House of Rome",
        },
        description,
        openGraph: {
            title,
            description,
            siteName: "House of Rome",
            locale: ogLocale(lang),
            type: "website",
        },
    };
};