import { Users, Home, Bath, Maximize } from "lucide-react";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { siteContent } from "@/content/global";
import styles from "./InfoPills.module.css";
import { Pill } from "@/components/pills/Pill";

export const InfoPills = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].apartmentCard;
    const g = siteContent[locale].global;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.list}>
                    <Pill
                        icon={Users}
                        label={`${apartment.guests} ${apartment.guests > 1 ? t.Guests : t.Guest}`}
                    />
                    <Pill
                        icon={Home}
                        label={`${apartment.bedrooms} ${apartment.bedrooms > 1 ? t.Bedrooms : t.Bedroom}`}
                    />
                    <Pill
                        icon={Bath}
                        label={`${apartment.bathrooms} ${apartment.bathrooms > 1 ? t.Bathrooms : t.Bathroom}`}
                    />
                    <Pill
                        icon={Maximize}
                        label={`${apartment.size} ${g.sqm}`}
                    />
                </div>
            </div>
        </section>
    );
};