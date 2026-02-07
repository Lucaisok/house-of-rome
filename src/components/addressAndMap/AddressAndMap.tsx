import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import styles from "./AddressAndMap.module.css";

export const AddressAndMapSection = ({ apartment }: ApartmentPageParams) => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Location</h2>
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