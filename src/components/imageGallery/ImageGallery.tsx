import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { ApartmentGallery } from "./ApartmentGallery";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({ apartment, locale }: ApartmentPageParams) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ApartmentGallery apartment={apartment} locale={locale} />
            </div>
        </section>
    );
};