import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { assertLocale } from "@/lib/i18n";
import { siteLayoutMetadata } from "@/lib/seo/siteLayout.ts/metadata";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "it" }];
}

export const generateMetada = siteLayoutMetadata;

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string; }>;
}) {
  const { lang } = await params;
  const locale = assertLocale(lang);

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
