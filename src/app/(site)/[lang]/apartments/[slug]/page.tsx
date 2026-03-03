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
import WidgetIframe from "@/components/WidgetIframe";
import widgetStyles from "./widgetIframe.module.css";
import { getPublicImagePaths } from "@/lib/server/publicImages";
import { mapWidgetURL } from "@/lib/utils/utils";

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
  const apartmentData = getApartmentBySlug(slug);
  if (!apartmentData) {
    // Optional: handle 404 later
    return null;
  }

  let apartment = apartmentData;
  if (apartment.imagesDir) {
    const directoryImages = await getPublicImagePaths(apartment.imagesDir);
    if (directoryImages.length > 0) {
      apartment = {
        ...apartment,
        images: directoryImages,
      };
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.heroStack}>
        <ImageGallery apartment={apartment} locale={locale} />
      </section>
      <div className={styles.contentInset}>
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div className={widgetStyles.widgetIframeContainer}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <section>
                <BasicInfo apartment={apartment} locale={locale} />
                <Highlights highlights={apartment.highlights} locale={locale} />
                <InfoPills apartment={apartment} locale={locale} />
                <ApartmentDescription apartment={apartment} locale={locale} />
              </section>
            </div>
            <div className={widgetStyles.widgetIframe}>
              <WidgetIframe src={mapWidgetURL[apartment.slug] ?? ""} />
            </div>
          </div>
        </div>
      </div>

      <BookingHelper startingPrice={apartment.startingPrice} locale={locale} slug={apartment.slug} />
      <div className={styles.contentInset}>
        <AddressAndMapSection apartment={apartment} locale={locale} />
      </div>
    </main>
  );
};

export default ApartmentPage;
