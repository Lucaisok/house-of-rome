import { siteContent } from "@/content/global";
import { MapPin } from "lucide-react";
import styles from "./BasicInfo.module.css";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";

export const BasicInfo = ({ apartment, locale }: ApartmentPageParams) => {
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
            </div>
        </section>
    );
};