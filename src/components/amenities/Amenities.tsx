import {
    Wifi,
    Wind,
    Tv,
    Coffee,
    UtensilsCrossed,
    Shirt,
    type LucideIcon,
} from "lucide-react";
import styles from "./Amenities.module.css";
import type { Amenity } from "@/content/apartments";

const amenityIcons: Record<Amenity, LucideIcon> = {
    Wifi,
    "Air Conditioning": Wind,
    TV: Tv,
    "Coffee Maker": Coffee,
    "Full Kitchen": UtensilsCrossed,
    Dryer: Shirt,
    Washer: Shirt,
};

interface AmenitiesProps {
    amenities: Amenity[];
    title: string;
}

export const Amenities = ({ amenities, title }: AmenitiesProps) => {
    if (!amenities.length) return null;

    return (
        <div className={styles.sectionBlock}>
            <h2 className={styles.heading}>{title}</h2>
            <div className={styles.amenitiesGrid}>
                {amenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity] || Wifi;
                    return (
                        <div key={amenity} className={styles.amenityItem}>
                            <IconComponent size={20} className={styles.amenityIcon} />
                            <span>{amenity}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
