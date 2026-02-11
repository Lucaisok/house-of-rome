import { MapSection } from "@/components/apartments/mapSection/mapSection";
import { FeaturedApartments } from "@/components/apartments/showcase/FeaturedApartments";
import { Welcome } from "@/components/apartments/welcome/Welcome";
import { assertLocale } from "@/lib/i18n";
import { apartmentsMetadata } from "@/lib/seo/apartments/metadata";

export const generateMetadata = apartmentsMetadata;

export const Apartments = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);
  return (
    <main>
      <Welcome locale={locale} />
      <FeaturedApartments locale={locale} />
      <MapSection locale={locale} />
    </main>
  );
};

export default Apartments;
