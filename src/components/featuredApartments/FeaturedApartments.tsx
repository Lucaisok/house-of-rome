import { NavButton } from "../navButton/NavButton";
import styles from "./FeaturedApartments.module.css";
import { Locale } from "@/lib/i18n";
import { siteContent } from "@/content/global";
import { Apartments } from "./Apartments";

interface FeaturedApartmentsProps {
    locale: Locale;
}

export function FeaturedApartments({ locale }: FeaturedApartmentsProps) {
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
                {/* <Apartments /> */}
                <div className={styles.ctaWrap}>
                    <NavButton href="/apartments" className={styles.cta}>
                        {t.cta}
                    </NavButton>
                </div>
            </div>
        </section>
    );
}