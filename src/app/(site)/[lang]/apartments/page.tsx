import { FeaturedApartments } from "@/components/apartments/showcase/FeaturedApartments";
import { assertLocale } from "@/lib/i18n";
import { apartmentsMetadata } from "@/lib/seo/apartments/metadata";
import { Intro } from "@/components/apartments/intro/Intro";
import { Map } from "@/components/apartments/map/Map";

export const generateMetadata = apartmentsMetadata;

const Apartments = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);
  return (
    <main>
      <Intro locale={locale} />
      <FeaturedApartments locale={locale} />
      <Map locale={locale} />
    </main>
  );
};

export default Apartments;
