import styles from "./page.module.css";
import { Apartment, getApartmentBySlug } from "@/content/apartments";
import { apartmentMetadata } from "@/lib/seo/apartment/metadata";
import { assertLocale, Locale } from "@/lib/i18n";
import { BasicInfo } from "@/components/basicInfo/BasicInfo";
import { ApartmentDescription } from "@/components/apartmentDescription/ApartmentDescription";
import { AddressAndMapSection } from "@/components/addressAndMap/AddressAndMap";
import { ImageGallery } from "@/components/imageGallery/ImageGallery";

export const generateMetadata = apartmentMetadata;

export interface ApartmentPageParams {
  apartment: Apartment;
  locale: Locale;
}

const ApartmentPage = async ({
  params,
}: {
  params: Promise<{ lang: string; slug: string; }>;
}) => {
  const { slug, lang } = await Promise.resolve(params);
  const locale = assertLocale(lang);
  const apartment = getApartmentBySlug(slug);
  if (!apartment) {
    // Optional: handle 404 later
    return null;
  }
  return (
    <main className={styles.page}>
      <BasicInfo apartment={apartment} locale={locale} />
      <ImageGallery apartment={apartment} locale={locale} />
      <ApartmentDescription apartment={apartment} locale={locale} />
      <AddressAndMapSection apartment={apartment} locale={locale} />
    </main>
  );
};

export default ApartmentPage;
