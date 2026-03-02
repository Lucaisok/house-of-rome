"use client";

import { useState } from "react";
import { Wifi } from "lucide-react";
import styles from "./Amenities.module.css";
import type { Amenity } from "@/content/apartments";
import { amenityIcons } from "./amenityIcons";
import { AmenitiesModal } from "./AmenitiesModal";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";

interface AmenitiesProps {
    amenities: Amenity[];
    title: string;
    locale: Locale;
}

export const Amenities = ({ amenities, title, locale }: AmenitiesProps) => {
    const t = siteContent[locale].global;
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!amenities.length) return null;

    const visibleAmenities = amenities.slice(0, 7);

    return (
        <div className={styles.sectionBlock}>
            <h2 className={styles.heading}>{title}</h2>
            <div className={styles.amenitiesGrid}>
                {visibleAmenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity] || Wifi;
                    const translatedName = t.amenityNames[amenity] || amenity;
                    return (
                        <div key={amenity} className={styles.amenityItem}>
                            <IconComponent size={20} className={styles.amenityIcon} />
                            <span>{translatedName}</span>
                        </div>
                    );
                })}
                <button
                    type="button"
                    className={styles.viewServicesButton}
                    onClick={() => setIsModalOpen(true)}
                >
                    {t.viewAll}
                </button>
            </div>
            <AmenitiesModal
                isOpen={isModalOpen}
                amenities={amenities}
                onClose={() => setIsModalOpen(false)}
                locale={locale}
            />
        </div>
    );
};
