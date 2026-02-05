import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import { makePageMetadata } from "../metadata";

export const homeMetadata = async ({
    params,
}: {
    params: Promise<{ lang: string; }>;
}): Promise<Metadata> => {
    const { lang: raw } = await params;
    const lang = assertLocale(raw);

    // Public path for Home:
    const publicPath = lang === "it" ? "/it" : "/";

    const title =
        lang === "it" ? "House of Rome – Appartamenti a Roma" : "House of Rome – Apartments in Rome";

    const description =
        lang === "it"
            ? "Appartamenti curati a Roma. Prenotazioni online e disponibilità aggiornate."
            : "Curated apartments in Rome. Online booking and up-to-date availability.";

    return makePageMetadata({ lang, publicPath, title, description });
};