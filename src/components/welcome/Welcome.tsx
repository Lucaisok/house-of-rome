import styles from "./Welcome.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";

interface WelcomeProps {
    locale: Locale;
}

export function Welcome({ locale }: WelcomeProps ) {
    const t = siteContent[locale].welcome;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    {t.title}
                </h2>
                <div className={styles.divider} />
                <p className={styles.paragraph}>
                    {t.description}
                </p>
                <p className={styles.paragraph}>
                    {t.secondDescription}
                </p>
            </div>
        </section>
    );
}