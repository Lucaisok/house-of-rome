"use client";
import { Mail, Phone, MessageCircle } from 'lucide-react';
import styles from './Contacts.module.css';
import { siteContent } from '@/content/global';
import { LocaleProp } from '@/app/(site)/[lang]/page';
import { InfoBox } from '../infoBox/InfoBox';

export const Contacts = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].contact.contacts;

    const handleWhatsApp = () => {
        // Replace with actual WhatsApp number
        const phoneNumber = '393912345678'; // Format: country code + number (no + or spaces)
        const message = t.whatsApp.message;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className={styles.root}>
            <h2 className={styles.heading}>{t.title}</h2>
            <div className={styles.sectionList}>
                <div className={styles.section}>
                    <div className={styles.iconBox}>
                        <MessageCircle size={20} className={styles.iconWhite} />
                    </div>
                    <div>
                        <h3 className={`${styles.sectionTitle} ${styles.sectionTitleMargin}`}>WhatsApp</h3>
                        <p className={styles.text}>
                            {t.whatsApp.description}
                        </p>
                        <button
                            onClick={handleWhatsApp}
                            className={styles.button}
                        >
                            <MessageCircle size={16} />
                            <span>{t.whatsApp.buttonText}</span>
                        </button>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.iconBox}>
                        <Mail size={20} className={styles.iconWhite} />
                    </div>
                    <div>
                        <h3 className={styles.sectionTitle}>Email</h3>
                        <a
                            href="mailto:info@houseofrome.com"
                            className={styles.link}
                        >
                            info@houseofrome.com
                        </a>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.iconBox}>
                        <Phone size={20} className={styles.iconWhite} />
                    </div>
                    <div>
                        <h3 className={styles.sectionTitle}>{t.phone}</h3>
                        <a
                            href="tel:+390612345678"
                            className={styles.link}
                        >
                            +39 06 1234 5678
                        </a>
                    </div>
                </div>
            </div>
            <InfoBox locale={locale} />
        </div>
    );
};