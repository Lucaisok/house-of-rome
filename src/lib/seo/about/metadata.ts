import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import { makePageMetadata } from "../metadata";

export const aboutMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  const { lang: raw } = await params;
  const lang = assertLocale(raw);

  const publicPath = lang === "it" ? "/it/about" : "/about";

  const title =
    lang === "it"
      ? "Chi siamo & Contatti | House of Rome"
      : "About & Contacts | House of Rome";

  const description =
    lang === "it"
      ? "Scopri House of Rome, la nostra filosofia di ospitalità e come contattarci per informazioni e prenotazioni."
      : "Learn more about House of Rome, our apartments, and how to contact us. Location, philosophy, and direct booking information.";

  return makePageMetadata({ lang, publicPath, title, description });
};
