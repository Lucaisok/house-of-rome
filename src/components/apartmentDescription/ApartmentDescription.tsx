"use client";

import { useState } from "react";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import styles from "./ApartmentDescription.module.css";
import { siteContent } from "@/content/global";
import { Amenities } from "@/components/amenities/Amenities";

export const ApartmentDescription = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].global;
    const description = apartment.description[locale];
    const shortDescription = apartment.shortDescription[locale];
    const [expanded, setExpanded] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.leftColumn}>
                        <div className={styles.sectionBlock}>
                            {/* <h2 className={styles.heading}>{t.aboutThisPlace}</h2> */}
                            <p className={`${styles.paragraph} ${styles.paragraphSpacing} ${styles.shortDescription}`}>
                                {shortDescription}
                            </p>
                            <div className={styles.descriptionWrap}>
                                <p
                                    className={`${styles.paragraph} ${styles.description} ${!expanded ? styles.descriptionClamp : ""}`}
                                >
                                    {description}
                                </p>
                                {!expanded && <div className={styles.descriptionFade} />}
                            </div>
                            <button
                                type="button"
                                className={styles.readMore}
                                onClick={() => setExpanded((prev) => !prev)}
                            >
                                {expanded ? "Read less" : "Read more"}
                            </button>
                        </div>
                        <Amenities amenities={apartment.amenities} title={t.amenities} />
                    </div>
                </div>
            </div>
        </section>
    );
};