import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import styles from "./Welcome.module.css";
import { LocaleProp } from "@/app/(site)/[lang]/page";
import { siteContent } from "@/content/global";

export const Welcome = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].apartments;
    return (
        <section className={styles.welcomeSection}>
            <div className={styles.welcomeContainer}>
                <h1 className={styles.welcomeTitle}>
                    {t.title}
                </h1>
                <p className={styles.welcomeDescription}>
                    {t.description}
                </p>
            </div>
        </section>
    );
};