import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import styles from "./ApartmentDescription.module.css";
import { siteContent } from "@/content/global";
import { Amenities } from "@/components/amenities/Amenities";

export const ApartmentDescription = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].global;
    const description = apartment.description[locale];
    const shortDescription = apartment.shortDescription[locale];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.leftColumn}>
                        <div className={styles.sectionBlock}>
                            {/* <h2 className={styles.heading}>{t.aboutThisPlace}</h2> */}
                            <p className={`${styles.paragraph} ${styles.paragraphSpacing} ${styles.shortDescription}`}>
                                {shortDescription}
                            </p>
                            <p className={`${styles.paragraph} ${styles.description}`}>
                                {description}
                            </p>
                        </div>
                        <Amenities amenities={apartment.amenities} title={t.amenities} />
                    </div>
                </div>
            </div>
        </section>
    );
};