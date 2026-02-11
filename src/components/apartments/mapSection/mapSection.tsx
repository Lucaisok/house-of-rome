import { LocaleProp } from "@/app/(site)/[lang]/page";
import styles from "./mapSection.module.css";

import { siteContent } from "@/content/global";
import { ApartmentsMap } from "./ApartmentsMap";

export const MapSection = ({ locale }: LocaleProp) => {
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
                    {/* Map with apartment pins */}
                    <ApartmentsMap />
                </div>
            </div>
        </section>
    );
};