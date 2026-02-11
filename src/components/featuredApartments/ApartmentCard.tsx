import { Apartment } from "@/content/apartments";
import type { Locale } from "@/lib/i18n";
import { ArrowRight, Home, Users, BedDouble, Square, Landmark, Bath } from "lucide-react";
import styles from "./ApartmentCard.module.css";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { siteContent } from "@/content/global";
import { highlightIcons } from "@/components/highlights/Highlights";
import type { Highlight } from "@/content/apartments";
import { formatPrice } from "@/lib/format";

interface ApartmentCardProps {
    apartment: Apartment;
    locale: Locale;
}

export const ApartmentCard = ({ apartment, locale }: ApartmentCardProps) => {
    const t = siteContent[locale].apartmentCard;
    const shortDescription = apartment.shortDescription[locale];
    const price = formatPrice(apartment.startingPrice, locale);

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
                    {apartment.highlights.map((highlight: Highlight) => {
                        const Icon = highlightIcons[highlight] || highlightIcons["Recently Renovated"];
                        return (
                            <div key={highlight} className={styles.metaItem}>
                                <span className={`${styles.metaIcon} ${styles.metaIconHighlight}`}>
                                    <Icon size={18} />
                                </span>
                                <span className={styles.metaTextHighlight}>{highlight}</span>
                            </div>
                        );
                    })}
                    <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>
                            <Landmark size={18} />
                        </span>
                        <span>{apartment.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>
                            <Users size={18} />
                        </span>
                        <span>{apartment.guests} {apartment.guests < 2 ? t.Guest : t.Guests}</span>
                    </div>
                    <div className={styles.additionalMetaItems}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>
                                <Home size={18} />
                            </span>
                            <span>
                                {apartment.bedrooms} {apartment.bedrooms < 2 ? t.Bedroom : t.Bedrooms}
                            </span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>
                                <BedDouble size={18} />
                            </span>
                            <span>
                                {apartment.beds} {apartment.beds < 2 ? t.Bed : t.Beds}
                            </span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>
                                <Bath size={18} />
                            </span>
                            <span>
                                {apartment.bathrooms} {apartment.bathrooms < 2 ? t.Bathroom : t.Bathrooms}
                            </span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaIcon}>
                                <Square size={18} />
                            </span>
                            <span>{apartment.size} {t.sqm}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.cardFooter}>
                    <div className={styles.priceBlock}>
                        <span className={styles.priceLabel}>{t.startingFrom}</span>
                        <span className={styles.priceValue}>{price}</span>
                    </div>
                    <div className={styles.link}>
                        <span>{t.viewDetails}</span>
                        <ArrowRight size={14} className={styles.linkIcon} />
                    </div>
                </div>
            </div>
        </Link>
    );
};