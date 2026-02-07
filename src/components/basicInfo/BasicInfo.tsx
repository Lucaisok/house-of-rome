import { siteContent } from "@/content/global";
import { MapPin, Users, Home, Bath, Maximize } from "lucide-react";
import styles from "./BasicInfo.module.css";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";

export const BasicInfo = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].apartmentCard;
    const g = siteContent[locale].global;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {apartment.name}
                </h1>
                <div className={styles.location}>
                    <MapPin size={18} />
                    <span>{apartment.address}</span>
                </div>
                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Users size={20} />
                        <span>{apartment.guests} {apartment.guests > 1 ? t.Guests : t.Guest}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Home size={20} />
                        <span>{apartment.bedrooms} {apartment.bedrooms > 1 ? t.Bedrooms : t.Bedroom}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Bath size={20} />
                        <span>{apartment.bathrooms} {apartment.bathrooms > 1 ? t.Bathrooms : t.Bathroom}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Maximize size={20} />
                        <span>{apartment.size} {g.sqm}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};