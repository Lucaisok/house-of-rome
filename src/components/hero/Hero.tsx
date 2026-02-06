import styles from "./Hero.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";
import { NavButton } from "../navButton/NavButton";

interface HeroProps {
    locale: Locale;
}

export function Hero({ locale }: HeroProps) {
    const content = siteContent[locale].hero;

    return (
        <section className={styles.hero}>
            <div className={styles.media}>
                <img
                    src="/hero.jpeg"
                    alt="Rome cityscape at sunset"
                    className={styles.image}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.contentWrap}>
                <div className={styles.content}>
                    <div className={styles.textPanel}>
                        <h1 className={styles.title}>
                            {content.firstLine}
                            <br />
                            {content.secondLine}
                        </h1>
                        <p className={styles.subtitle}>
                            {content.thirdLine}
                        </p>
                        <div className={styles.actions}>
                            <NavButton href="/apartments" className={styles.primaryButton}>
                                {content.viewApartments}
                            </NavButton>
                            <NavButton href="/about" className={styles.secondaryButton}>
                                {content.contactUs}
                            </NavButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}