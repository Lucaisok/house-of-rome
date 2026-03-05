"use client";

import { useEffect } from "react";
import { X, Clock } from "lucide-react";
import styles from "./HomeRulesModal.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";
import { homeRuleIcons, HomeRuleKey } from "./homeRuleIcons";
import type { Apartment } from "@/content/apartments";

interface HomeRulesModalProps {
    isOpen: boolean;
    homeRules: Apartment["homeRules"];
    onClose: () => void;
    locale: Locale;
}

export const HomeRulesModal = ({ isOpen, homeRules, onClose, locale }: HomeRulesModalProps) => {
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

    const rules: Array<{ key: HomeRuleKey; label: string; value: string; }> = [
        { key: "checkIn", label: t.checkIn, value: homeRules.checkIn },
        { key: "checkOut", label: t.checkOut, value: homeRules.checkOut },
    ];

    if (homeRules.selfCheckin) {
        rules.push({ key: "selfCheckin", label: t.selfCheckin, value: "✓" });
    }

    rules.push({
        key: homeRules.smokingAllowed ? "smokingAllowed" : "smokingNotAllowed",
        label: homeRules.smokingAllowed ? t.smokingAllowed : t.smokingNotAllowed,
        value: "",
    });

    rules.push({
        key: homeRules.petsAllowed ? "petsAllowed" : "petsNotAllowed",
        label: homeRules.petsAllowed ? t.petsAllowed : t.petsNotAllowed,
        value: "",
    });

    rules.push({
        key: homeRules.partiesAllowed ? "partiesAllowed" : "partiesNotAllowed",
        label: homeRules.partiesAllowed ? t.partiesAllowed : t.partiesNotAllowed,
        value: "",
    });

    return (
        <div className={styles.overlay} onClick={onClose} role="presentation">
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-label="All home rules"
                onClick={(event) => event.stopPropagation()}
            >
                <div className={styles.header}>
                    <h3 className={styles.title}>{t.allHomeRules}</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles.closeButton}
                        aria-label="Close home rules modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className={styles.grid}>
                    {rules.map((rule, index) => {
                        const IconComponent = homeRuleIcons[rule.key] || Clock;
                        const isTimingRule =
                            rule.key === "checkIn" ||
                            rule.key === "checkOut" ||
                            rule.key === "selfCheckin";

                        return (
                            <div
                                key={`${rule.key}-${index}`}
                                className={`${styles.item} ${isTimingRule ? styles.itemSoftAccent : ""}`}
                            >
                                <IconComponent size={24} className={styles.icon} />
                                <div className={styles.content}>
                                    <p className={styles.label}>{rule.label}</p>
                                    {rule.value && <p className={styles.value}>{rule.value}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
