import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { LocaleProp } from "@/app/(site)/[lang]/page";
import { siteContent } from "@/content/global";
import { routes } from "@/lib/routes";

export function Footer({ locale }: LocaleProp) {
    const t = siteContent[locale];
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3 className={styles.brandTitle}>
                            {t.home.title}
                        </h3>
                        <p className={styles.brandDescription}>
                            {t.footer.paragraph}
                        </p>
                    </div>
                    <div>
                        <h4 className={styles.sectionTitle}>{t.footer.quickLinks}</h4>
                        <ul className={styles.list}>
                            <li>
                                <Link href={routes.apartments} className={styles.link}>
                                    {t.nav.apartments}
                                </Link>
                            </li>
                            <li>
                                <Link href={routes.about} className={styles.link}>
                                    {t.nav.about}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.sectionTitle}>{t.footer.contactTitle}</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}>
                                <MapPin size={18} className={styles.iconTop} />
                                <span>{t.footer.address}</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={18} className={styles.icon} />
                                {/* Note: The phone number is hardcoded for demonstration purposes. In a real application, it should come from the content or configuration. */}
                                <a href="tel:+39061234567" className={styles.link}>
                                    {t.footer.phone}
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={18} className={styles.icon} />
                                <a href="mailto:info@houseofrome.com" className={styles.link}>
                                    {t.footer.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2026 House of Rome. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
