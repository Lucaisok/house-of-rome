import { Apartment } from "@/content/apartments";
import { ArrowRight, Home, Users, BedDouble, Square, MapPin } from "lucide-react";
import styles from "./ApartmentCard.module.css";
import { routes } from "@/lib/routes";

interface ApartmentCardProps {
    apartment: Apartment;
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
    return (
        <div key={apartment.slug} className={styles.card}>
            <div className={styles.media}>
                <img
                    src={apartment.img_preview}
                    alt={apartment.name}
                    className={styles.image}
                />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{apartment.name}</h3>
                <p className={styles.description}>{apartment.shortDescription}</p>
                <div className={styles.meta}>
                    {"location" in apartment && (
                        <div className={styles.metaItem}>
                            <MapPin size={18} />
                            <span>{(apartment as { location?: string }).location}</span>
                        </div>
                    )}
                    <div className={styles.metaItem}>
                        <Users size={18} />
                        <span>{apartment.guests} Guests</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Home size={18} />
                        <span>
                            {apartment.bedrooms} Bedroom{apartment.bedrooms > 1 ? "s" : ""}
                        </span>
                    </div>
                    <div className={styles.metaItem}>
                        <BedDouble size={18} />
                        <span>
                            {apartment.beds} Bed{apartment.beds > 1 ? "s" : ""}
                        </span>
                    </div>
                    <div className={styles.metaItem}>
                        <Square size={18} />
                        <span>{apartment.sqm} sqm</span>
                    </div>
                </div>
                <a href={routes.apartment(apartment.slug)} className={styles.link}>
                    <span>View Details</span>
                    <ArrowRight size={18} className={styles.linkIcon} />
                </a>
            </div>
        </div>
    );
};