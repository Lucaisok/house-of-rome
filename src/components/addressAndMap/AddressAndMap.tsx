import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import styles from "./AddressAndMap.module.css";
import { siteContent } from "@/content/global";

export const AddressAndMapSection = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].global;
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{t.location}</h2>
                <p className={styles.address}>{apartment.address}</p>
                {/* <ApartmentMap
                        apartmentName={apartment.name}
                        lat={apartment.lat}
                        lng={apartment.lng}
                        address={apartment.address}
                      /> */}
            </div>
        </div>
    );
};