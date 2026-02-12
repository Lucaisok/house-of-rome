"use client";

import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import styles from "./AddressAndMap.module.css";
import { siteContent } from "@/content/global";
import MapView from "./MapView";

export const AddressAndMapSection = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].global;
    const markers = [{ lat: apartment.lat as number, lng: apartment.lng as number, label: apartment.name === "Spanish Steps Apartment & Terrace" ? "Spanish Steps" : apartment.name }];
    const center: [number, number] = [apartment.lat as number, apartment.lng as number];

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{t.location}</h2>
                <p className={styles.address}>{apartment.address}</p>
                <div className={styles.mapWrap}>
                    <MapView center={center} markers={markers} />
                </div>
            </div>
        </div>
    );
};