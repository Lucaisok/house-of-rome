"use client";
import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";
import { siteContent } from "@/content/global";
import { LocaleProp } from "@/app/(site)/[lang]/page";
import Link from "next/link";
import { localizedRoutes } from "@/lib/routes";

export const CookieBanner = ({ locale }: LocaleProp) => {
    const t = siteContent[locale].cookieBanner;
    const r = localizedRoutes(locale);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) setVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                {t.message} {" "}
                <Link href={r.privacyPolicy} className={styles.link}>
                    {t.learnMore}
                </Link>
            </div>
            <button className={styles.button} onClick={acceptCookies}>
                {t.accept}
            </button>
        </div>
    );
};

export default CookieBanner;
