import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import { makePageMetadata } from "../metadata";

export const apartmentsMetadata = async ({
    params,
}: {
    params: Promise<{ lang: string; }>;
}): Promise<Metadata> => {
    const { lang: raw } = await params;
    const lang = assertLocale(raw);

    const publicPath = lang === "it" ? "/it/apartments" : "/apartments";

    const title =
        lang === "it" ? "Appartamenti | House of Rome" : "Apartments | House of Rome";

    const description =
        lang === "it"
            ? "Scopri i 4 appartamenti di House of Rome: comfort, posizione e disponibilità aggiornate. Prenotazione online."
            : "Discover House of Rome’s 4 apartments: comfort, location, and up-to-date availability. Book online.";

    return makePageMetadata({ lang, publicPath, title, description });
};