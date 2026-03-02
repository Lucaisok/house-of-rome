"use client";

import { useState } from "react";
import { Users, Home, Bath, Maximize, Eye } from "lucide-react";
import { ApartmentPageParams } from "@/app/(site)/[lang]/apartments/[slug]/page";
import { siteContent } from "@/content/global";
import styles from "./InfoPills.module.css";
import { Pill } from "@/components/pills/Pill";
import { InfoPillsModal } from "./InfoPillsModal";
import { highlightIcons } from "@/components/cardHighlights/Higlights";

export const InfoPills = ({ apartment, locale }: ApartmentPageParams) => {
    const t = siteContent[locale].apartmentCard;
    const g = siteContent[locale].global;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const infos = [
        {
            key: "guests",
            icon: Users,
            label: `${apartment.guests} ${apartment.guests > 1 ? t.Guests : t.Guest}`,
        },
        {
            key: "bedrooms",
            icon: Home,
            label: `${apartment.bedrooms} ${apartment.bedrooms > 1 ? t.Bedrooms : t.Bedroom}`,
        },
        {
            key: "bathrooms",
            icon: Bath,
            label: `${apartment.bathrooms} ${apartment.bathrooms > 1 ? t.Bathrooms : t.Bathroom}`,
        },
        {
            key: "size",
            icon: Maximize,
            label: `${apartment.size} ${g.sqm}`,
        },
    ];

    const highlights = apartment.highlights.map((highlight, index) => ({
        key: `highlight-${index}`,
        icon: highlightIcons[highlight] || Users,
        label: g.highlightNames[highlight] || highlight,
    }));

    const visibleInfos = infos.slice(0, 3);

    const openModal = () => setIsModalOpen(true);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div
                    className={styles.list}
                    role="button"
                    tabIndex={0}
                    onClick={openModal}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openModal();
                        }
                    }}
                    aria-label={g.viewAll}
                >
                    {visibleInfos.map((info, index) => (
                        <div
                            key={info.key}
                            className={index === 2 ? styles.hideOnMobile : undefined}
                        >
                            <Pill icon={info.icon} label={info.label} />
                        </div>
                    ))}
                    <button
                        type="button"
                        className={styles.viewMorePillButton}
                        onClick={(event) => {
                            event.stopPropagation();
                            openModal();
                        }}
                        aria-label={g.viewAll}
                    >
                        <Pill icon={Eye} label={g.viewAll} />
                    </button>
                </div>
            </div>
            <InfoPillsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={g.aboutThisPlace}
                infos={infos}
                highlights={highlights}
            />
        </section>
    );
};