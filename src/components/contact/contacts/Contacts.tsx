"use client";
import { Mail, Phone, MessageCircle } from 'lucide-react';
import styles from './Contacts.module.css';
import { siteContent } from '@/content/global';
import { LocaleProp } from '@/app/(site)/[lang]/page';
import { InfoBox } from '../infoBox/InfoBox';

export const phoneNumber = '+39 391 2345678'; // to be finalized with actual number (format: country code + number, no + or spaces)
export const email = 'houseofrome2024@gmail.com';

export const Contacts = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].contact.contacts;

    const handleWhatsApp = () => {
        // Replace with actual WhatsApp number
        const whatsappFormattedPhoneNumber = '393912345678'; // Format: country code + number (no + or spaces) - to be finalized with actual number
        const message = t.whatsApp.message;
        window.open(`https://wa.me/${whatsappFormattedPhoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
                            href={`mailto:${email}`}
                            className={styles.link}
                        >
                            {email}
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
                            href={`tel:${phoneNumber}`}
                            className={styles.link}
                        >
                            {phoneNumber}
                        </a>
                    </div>
                </div>
            </div>
            <InfoBox locale={locale} />
        </div>
    );
};