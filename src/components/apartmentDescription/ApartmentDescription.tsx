import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import {
    Wifi,
    Wind,
    Tv,
    Coffee,
    UtensilsCrossed,
    Shirt
} from 'lucide-react';
import styles from "./ApartmentDescription.module.css";
import { siteContent } from "@/content/global";

const amenityIcons: { [key: string]: any; } = {
    'WiFi': Wifi,
    'Air Conditioning': Wind,
    'TV': Tv,
    'Coffee Maker': Coffee,
    'Full Kitchen': UtensilsCrossed,
    'Washer': Shirt,
};

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
                            <h2 className={styles.heading}>{t.aboutThisPlace}</h2>
                            <p className={`${styles.paragraph} ${styles.paragraphSpacing}`}>
                                {shortDescription}
                            </p>
                            <p className={styles.paragraph}>
                                {description}
                            </p>
                        </div>
                        {/* Amenities */}
                        <div className={styles.sectionBlock}>
                            <h2 className={`${styles.heading} ${styles.headingLargeSpacing}`}>{t.amenities}</h2>
                            <div className={styles.amenitiesGrid}>
                                {apartment.amenities.map((amenity, index) => {
                                    const IconComponent = amenityIcons[amenity] || Wifi;
                                    return (
                                        <div key={index} className={styles.amenityItem}>
                                            <IconComponent size={20} className={styles.amenityIcon} />
                                            <span>{amenity}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};