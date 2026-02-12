import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { Home, MapPin, Users, Ruler } from "lucide-react";
import styles from "./Card.module.css";
import { siteContent } from "@/content/global";
import { routes } from "@/lib/routes";
import { normalizeImagePath } from "@/lib/utils/utils";

export const Card = ({ apartment, locale }: ApartmentPageParams) => {
    const shortDescription = apartment.shortDescription[locale];
    const t = siteContent[locale].apartmentCard;

    return (
        <div key={apartment.slug} className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <img
                    src={normalizeImagePath(apartment.img_preview)}
                    alt={apartment.name}
                    className={styles.cardImage}
                />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardPriceBlock}>
                        <h3 className={styles.cardTitle}>{apartment.name}</h3>
                        <div className={styles.cardLocationRow}>
                            <MapPin size={16} />
                            <span className={styles.cardLocation}>{apartment.location}</span>
                        </div>
                    </div>
                    <div className={styles.cardPriceBlockDesktop}>
                        <div className={styles.cardPrice}>€{apartment.startingPrice}</div>
                        <div className={styles.cardPriceNote}>{(t.startingFrom).toUpperCase()}</div>
                    </div>
                </div>
                <p className={styles.cardDescription}>{shortDescription}</p>
                <div className={styles.cardDetailsRow}>
                    <div className={styles.cardDetailsItem}>
                        <Users size={18} />
                        <span className={styles.cardDetailsText}>{apartment.guests} {t.Guests}</span>
                    </div>
                    <div className={styles.cardDetailsItem}>
                        <Home size={18} />
                        <span className={styles.cardDetailsText}>{apartment.bedrooms} {t.Bedroom}{apartment.bedrooms > 1 ? 's' : ''}</span>
                    </div>
                    <div className={styles.cardDetailsItem}>
                        <Ruler size={18} />
                        <span className={styles.cardSize}>{apartment.size}{t.sqm}</span>
                    </div>
                </div>
                <a
                    href={routes.apartment(apartment.slug)}
                    className={styles.cardButton}
                >
                    {t.viewDetails}
                </a>
            </div>
        </div>
    );
};
