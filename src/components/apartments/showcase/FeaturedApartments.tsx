import { LocaleProp } from "@/app/(site)/[lang]/page";
import { Card } from "../card/Card";
import { apartments } from "@/content/apartments";
import styles from "../../featuredApartments/FeaturedApartments.module.css";

export const FeaturedApartments = ({ locale }: LocaleProp) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {apartments.map((apartment) => (
                        <Card key={apartment.slug} apartment={apartment} locale={locale} />
                    ))}
                </div>
            </div>
        </section>
    );
};