import styles from "./page.module.css";
import { Apartment, getApartmentBySlug } from "@/content/apartments";
import { apartmentMetadata } from "@/lib/seo/apartment/metadata";
import { assertLocale, Locale } from "@/lib/i18n";
import { BasicInfo } from "@/components/basicInfo/BasicInfo";
import { ApartmentDescription } from "@/components/apartmentDescription/ApartmentDescription";
import { AddressAndMapSection } from "@/components/addressAndMap/AddressAndMap";
import { ImageGallery } from "@/components/imageGallery/ImageGallery";
import { InfoPills } from "@/components/infoPills/InfoPills";
import { BookingHelper } from "@/components/bookingHelper/BookingHelper";
import { Highlights } from "@/components/apartments/highlights/Highlights";

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
      <section className={styles.heroStack}>
        <ImageGallery apartment={apartment} locale={locale} />
        <BasicInfo apartment={apartment} locale={locale} />
        <Highlights highlights={apartment.highlights} />
        <InfoPills apartment={apartment} locale={locale} />
      </section>
      <BookingHelper startingPrice={apartment.startingPrice} locale={locale} />
      <ApartmentDescription apartment={apartment} locale={locale} />
      <AddressAndMapSection apartment={apartment} locale={locale} />
    </main>
  );
};

export default ApartmentPage;
