import styles from "./CallToAction.module.css";
import { NavButton } from "../navButton/NavButton";
import { siteContent } from "@/content/global";
import { routes } from "@/lib/routes";
import { LocaleProp } from "@/app/(site)/[lang]/page";

export function CallToAction({ locale }: LocaleProp) {
    const t = siteContent[locale].callToAction;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.title}</h2>
                <p className={styles.subtitle}>
                    {t.description}
                </p>
                <div className={styles.actions}>
                    <NavButton href={routes.apartments} className={styles.primaryButton}>
                        {t.viewApartments}
                    </NavButton>
                    <NavButton href={routes.about} className={styles.secondaryButton}>
                        {t.contactUs}
                    </NavButton>
                </div>
            </div>
        </section>
    );
}
