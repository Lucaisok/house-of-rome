import { NavButton } from "../navButton/NavButton";
import styles from "./FeaturedApartments.module.css";
import { siteContent } from "@/content/global";
import { apartments } from "@/content/apartments";
import { routes } from "@/lib/routes";
import { LocaleProp } from "@/app/(site)/[lang]/page";
import { Card } from "../apartments/card/Card";

export function FeaturedApartments({ locale }: LocaleProp) {
    const t = siteContent[locale].featuredApartments;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>
                        {t.description}
                    </p>
                </div>
                <div className={styles.grid}>
                    {apartments.map((apartment) => (
                        <div key={apartment.slug}>
                            <Card apartment={apartment} locale={locale} />
                        </div>
                    ))}
                </div>
                <div className={styles.ctaWrap}>
                    <NavButton href={routes.apartments} className={styles.cta}>
                        {t.cta}
                    </NavButton>
                </div>
            </div>
        </section>
    );
}