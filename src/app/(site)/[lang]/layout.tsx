import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { assertLocale } from "@/lib/i18n";
import { siteLayoutMetadata } from "@/lib/seo/siteLayout.ts/metadata";
import { getSiteUrl } from "@/lib/seo/metadata";

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
  const siteUrl = getSiteUrl();

  const lodgingBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "House of Rome",
    "description": locale === "it"
      ? "Appartamenti in affitto breve a Roma nel centro storico. Affitti vacanze a Trastevere, vicino al Vaticano e nel centro."
      : "Holiday apartments for rent in Rome. Short-stay vacation rentals in Trastevere, near the Vatican and the city centre.",
    "url": siteUrl,
    "logo": `${siteUrl}/og-default.jpg`,
    "telephone": "+393206158544",
    "email": "houseofrome2024@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via dei Panieri, 14/A",
      "addressLocality": "Rome",
      "postalCode": "00153",
      "addressRegion": "Lazio",
      "addressCountry": "IT",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8893,
      "longitude": 12.4699,
    },
    "priceRange": "€€",
    "checkinTime": "15:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Full Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Washing Machine", "value": true },
    ],
    "sameAs": [
      "https://www.airbnb.com",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessSchema) }}
      />
      <Header locale={locale} />
      <>
        <ScrollToTop />
        {children}
        <CookieBanner locale={locale} />
      </>
      <Footer locale={locale} />
    </>
  );
}
