"use client";

import { useEffect } from "react";
import { Wifi, X } from "lucide-react";
import type { Amenity } from "@/content/apartments";
import { amenityIcons } from "./amenityIcons";
import styles from "./AmenitiesModal.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";

interface AmenitiesModalProps {
    isOpen: boolean;
    amenities: Amenity[];
    onClose: () => void;
    locale: Locale;
}

export const AmenitiesModal = ({ isOpen, amenities, onClose, locale }: AmenitiesModalProps) => {
    const t = siteContent[locale].global;

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose} role="presentation">
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label="All amenities"
                onClick={(event) => event.stopPropagation()}
            >
                <div className={styles.header}>
                    <h3 className={styles.title}>{t.allServices}</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles.closeButton}
                        aria-label="Close services modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className={styles.grid}>
                    {amenities.map((amenity) => {
                        const IconComponent = amenityIcons[amenity] || Wifi;
                        return (
                            <div key={amenity} className={styles.item}>
                                <IconComponent size={20} className={styles.icon} />
                                <span>{amenity}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
