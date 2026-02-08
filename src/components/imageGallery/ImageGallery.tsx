import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { ApartmentGallery } from "./ApartmentGallery";
import styles from "./ImageGallery.module.css";

export const ImageGallery = ({ apartment }: ApartmentPageParams) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <ApartmentGallery images={apartment.images} apartmentName={apartment.name} />
            </div>
        </section>
    );
};