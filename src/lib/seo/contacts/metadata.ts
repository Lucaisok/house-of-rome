import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import { makePageMetadata } from "../metadata";

export const contactsMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string; }>;
}): Promise<Metadata> => {
  const { lang: raw } = await params;
  const lang = assertLocale(raw);

  const publicPath = lang === "it" ? "/it/contacts" : "/contacts";

  const title =
    lang === "it"
      ? "Contatti – Appartamenti in Affitto a Roma | House of Rome"
      : "Contact Us – Apartment Rentals in Rome | House of Rome";

  const description =
    lang === "it"
      ? "Pianifica il tuo affitto vacanze a Roma con House of Rome. Contattaci per disponibilità, prezzi e consigli sugli appartamenti. Supporto 7 giorni su 7 via WhatsApp."
      : "Plan your Rome holiday rental with House of Rome. Contact us for availability, pricing and apartment recommendations. 7-day support via WhatsApp.";

  return makePageMetadata({ lang, publicPath, title, description });
};
