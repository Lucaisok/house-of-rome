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

  const publicPath = lang === "it" ? "/it/apartments" : "/en/apartments";

  const title =
    lang === "it"
      ? "Appartamenti in Affitto Breve a Roma | House of Rome"
      : "Apartments for Rent in Rome | House of Rome";

  const description =
    lang === "it"
      ? "Esplora i nostri appartamenti in affitto breve a Roma: Trastevere, Vaticano e centro storico. Case intere, cancellazione gratuita, prenotazione diretta."
      : "Browse our Rome holiday apartments for rent: short-stay rentals in Trastevere, near the Vatican and the city centre. Entire homes, free cancellation, direct booking.";

  return makePageMetadata({ lang, publicPath, title, description });
};
