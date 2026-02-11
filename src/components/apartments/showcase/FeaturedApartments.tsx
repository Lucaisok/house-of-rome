import { LocaleProp } from "@/app/(site)/[lang]/page";
import { Card } from "../card/Card";
import { apartments } from "@/content/apartments";
import styles from "./FeaturedApartments.module.css";

export const FeaturedApartments = ({ locale }: LocaleProp) => {
    return (
        <section className={styles.featuredSection}>
            <div className={styles.featuredContainer}>
                <div className={styles.featuredGrid}>
                    {apartments.map((apartment) => (
                        <Card key={apartment.slug} apartment={apartment} locale={locale} />
                    ))}
                </div>
            </div>
        </section>
    );
};