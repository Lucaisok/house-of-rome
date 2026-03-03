import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import { makePageMetadata } from "../metadata";

export const bookMetadata = async ({
    params,
}: {
    params: Promise<{ lang: string; }>;
}): Promise<Metadata> => {
    const { lang: raw } = await params;
    const lang = assertLocale(raw);

    const publicPath = lang === "it" ? "/it/book" : "/book";

    const title =
        lang === "it"
            ? "Prenota il tuo soggiorno | House of Rome"
            : "Book Your Stay | House of Rome";

    const description =
        lang === "it"
            ? "Prenota il tuo appartamento perfetto a Roma. Scegli le tue date e trova l'alloggio ideale per la tua avventura romana con House of Rome."
            : "Book your perfect apartment in Rome. Choose your dates and find the ideal accommodation for your Roman adventure with House of Rome.";

    return makePageMetadata({ lang, publicPath, title, description });
};
