import styles from "./CallToAction.module.css";
import { NavButton } from "../navButton/NavButton";
import { siteContent } from "@/content/global";
import { localizedRoutes } from "@/lib/routes";
import { LocaleProp } from "@/app/(site)/[lang]/page";

export function CallToAction({ locale }: LocaleProp) {
    const t = siteContent[locale].callToAction;
    const r = localizedRoutes(locale);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.title}</h2>
                <p className={styles.subtitle}>
                    {t.description}
                </p>
                <div className={styles.actions}>
                    <NavButton href={r.book} className={styles.primaryButton}>
                        {t.viewApartments}
                    </NavButton>
                    <NavButton href={r.contacts} className={styles.secondaryButton}>
                        {t.contactUs}
                    </NavButton>
                </div>
            </div>
        </section>
    );
}
