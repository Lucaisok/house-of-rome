import { siteContent } from "@/content/global";
import styles from "./HeaderSection.module.css";
import { LocaleProp } from "@/app/(site)/[lang]/page";

export const HeaderSection = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].contact.header;
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {t.title}
                </h1>
                <p className={styles.subtitle}>
                    {t.description}
                </p>
            </div>
        </section>
    );
};