import { Apartment } from "@/content/apartments";
import type { Locale } from "@/lib/i18n";
import { ArrowRight, Home, Users, BedDouble, Square, MapPin, Bath } from "lucide-react";
import styles from "./ApartmentCard.module.css";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { siteContent } from "@/content/global";

interface ApartmentCardProps {
    apartment: Apartment;
    locale: Locale;
}

export const ApartmentCard = ({ apartment, locale }: ApartmentCardProps) => {
    const t = siteContent[locale].apartmentCard;
    const shortDescription = apartment.shortDescription[locale];

    return (
        <Link href={routes.apartment(apartment.slug)} className={styles.card}>
            <div className={styles.media}>
                <img
                    src={apartment.img_preview}
                    alt={apartment.name}
                    className={styles.image}
                />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{apartment.name}</h3>
                <p className={styles.description}>{shortDescription}</p>
                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <MapPin size={18} />
                        <span>{apartment.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Users size={18} />
                        <span>{apartment.guests} {apartment.guests < 2 ? t.Guest : t.Guests}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Home size={18} />
                        <span>
                            {apartment.bedrooms} {apartment.bedrooms < 2 ? t.Bedroom : t.Bedrooms}
                        </span>
                    </div>
                    <div className={styles.metaItem}>
                        <BedDouble size={18} />
                        <span>
                            {apartment.beds} {apartment.beds < 2 ? t.Bed : t.Beds}
                        </span>
                    </div>
                    <div className={styles.metaItem}>
                        <Bath size={18} />
                        <span>
                            {apartment.bathrooms} {apartment.bathrooms < 2 ? t.Bathroom : t.Bathrooms}
                        </span>
                    </div>
                    <div className={styles.metaItem}>
                        <Square size={18} />
                        <span>{apartment.size} {t.sqm}</span>
                    </div>
                </div>
                <div className={styles.link}>
                    <span>{t.viewDetails}</span>
                    <ArrowRight size={18} className={styles.linkIcon} />
                </div>
            </div>
        </Link>
    );
};