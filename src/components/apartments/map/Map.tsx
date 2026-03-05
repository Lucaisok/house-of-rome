"use client";

import { LocaleProp } from "@/app/(site)/[lang]/page";
import styles from "./Map.module.css";
import dynamic from "next/dynamic";

import { siteContent } from "@/content/global";

const GeneralMap = dynamic(() => import("./GeneralMap").then(mod => ({ default: mod.GeneralMap })), {
    ssr: false,
    loading: () => <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737373' }}>Loading map...</div>
});

export const Map = ({ locale }: LocaleProp) => {
    const { exploreLocationsTitle, exploreLocationsDescription } = siteContent[locale].apartments;

    return (
        <section className={styles.mapSection}>
            <div className={styles.mapContainer}>
                <div className={styles.mapHeader}>
                    <h2 className={styles.mapTitle}>
                        {exploreLocationsTitle}
                    </h2>
                    <p className={styles.mapDescription}>
                        {exploreLocationsDescription}
                    </p>
                </div>
                <div className={styles.mapBox}>
                    <GeneralMap />
                </div>
            </div>
        </section>
    );
};