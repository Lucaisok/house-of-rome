import { LocaleProp } from "@/app/(site)/[lang]/page";
import styles from "./InfoBox.module.css";
import { siteContent } from "@/content/global";

export const InfoBox = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].contact.infoBox;

    return (
        <div className={styles.infoBox}>
            <h3 className={styles.title}>{t.title}</h3>
            <p className={styles.text}>
                {t.firstParagraph}
            </p>
            <p className={styles.text}>
                {t.secondParagraph}
            </p>
        </div>
    );
};