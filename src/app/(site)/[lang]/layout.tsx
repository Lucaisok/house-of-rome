import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import {
  getSiteUrl,
  toPublicPath,
  buildLanguageAlternates,
  ogLocale,
} from "@/lib/seo/metadata";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "it" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = assertLocale(raw); // returns "en" | "it"

  const siteUrl = getSiteUrl();

  const title =
    lang === "it"
      ? "House of Rome – Appartamenti a Roma"
      : "House of Rome – Apartments in Rome";

  const description =
    lang === "it"
      ? "Appartamenti curati a Roma. Prenotazioni online e disponibilità aggiornate."
      : "Curated apartments in Rome. Online booking and up-to-date availability.";

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
}

export default async function LangLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <>
      <header style={{ padding: 16, display: "flex", justifyContent: "flex-end" }}>
        <LanguageSwitch />
      </header>
      {children}
    </>
  );
}
