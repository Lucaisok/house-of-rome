import { Apartment } from "@/content/apartments";
import { ArrowRight, Home, Users } from "lucide-react";
import styles from "./ApartmentCard.module.css";
import { routes } from "@/lib/routes";

interface ApartmentCardProps {
    apartment: Apartment;
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
    return (
        <div key={apartment.slug} className={styles.card}>
            <div className={styles.media}>
                {/* <img
                            src={apartment.image}
                            alt={apartment.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        /> */}
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{apartment.name}</h3>
                <p className={styles.description}>{apartment.shortDescription}</p>
                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Users size={18} />
                        <span>{apartment.guests} Guests</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Home size={18} />
                        <span>
                            {apartment.bedrooms} Bedroom{apartment.bedrooms > 1 ? "s" : ""}
                        </span>
                    </div>
                </div>
                <a href={routes.apartment(apartment.slug)} className={styles.link}>
                    <span>View Details</span>
                    <ArrowRight size={18} className={styles.linkIcon} />
                </a>
            </div>
        </div>
    );
};