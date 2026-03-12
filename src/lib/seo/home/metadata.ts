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
    lang === "it"
      ? "Appartamenti in Affitto a Roma | House of Rome"
      : "Holiday Apartments for Rent in Rome | House of Rome";

  const description =
    lang === "it"
      ? "Affitta un appartamento vacanze a Roma con House of Rome. Quattro affitti brevi nel centro storico, a Trastevere e vicino al Vaticano. Prenota direttamente al miglior prezzo."
      : "Rent a holiday apartment in Rome with House of Rome. Four fully equipped short-stay rentals in Trastevere and the city centre. Book direct for the best rates.";

  return makePageMetadata({ lang, publicPath, title, description });
};
