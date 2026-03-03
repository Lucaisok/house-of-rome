"use client";

import { useState } from "react";
import { Clock, Eye } from "lucide-react";
import styles from "./HomeRules.module.css";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";
import { homeRuleIcons, HomeRuleKey } from "./homeRuleIcons";
import { HomeRulesModal } from "./HomeRulesModal";
import type { Apartment } from "@/content/apartments";

interface HomeRulesProps {
    homeRules: Apartment["homeRules"];
    locale: Locale;
}

export const HomeRules = ({ homeRules, locale }: HomeRulesProps) => {
    const t = siteContent[locale].global;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const visibleRules: Array<{ key: HomeRuleKey; label: string; value?: string; }> = [
        { key: "checkIn", label: t.checkIn, value: homeRules.checkIn },
        { key: "checkOut", label: t.checkOut, value: homeRules.checkOut },
    ];

    if (homeRules.selfCheckin) {
        visibleRules.push({ key: "selfCheckin", label: t.selfCheckin });
    }

    const displayRules = visibleRules.slice(0, 3);

    return (
        <div className={styles.sectionBlock}>
            <h2 className={styles.heading}>{t.homeRules}</h2>
            <div className={styles.rulesGrid}>
                {displayRules.map((rule, index) => {
                    const IconComponent = homeRuleIcons[rule.key] || Clock;
                    return (
                        <div key={`${rule.key}-${index}`} className={styles.ruleItem}>
                            <IconComponent size={20} className={styles.ruleIcon} />
                            <div className={styles.ruleContent}>
                                <span className={styles.ruleLabel}>{rule.label}</span>
                                {rule.value && <span className={styles.ruleValue}>{rule.value}</span>}
                            </div>
                        </div>
                    );
                })}
                <div
                    role="button"
                    tabIndex={0}
                    className={`${styles.ruleItem} ${styles.viewAllButton}`}
                    onClick={() => setIsModalOpen(true)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setIsModalOpen(true);
                        }
                    }}
                    aria-label={t.viewAll}
                >
                    <Eye size={20} className={styles.viewAllIcon} />
                    <span>{t.viewAll}</span>
                </div>
            </div>
            <HomeRulesModal
                isOpen={isModalOpen}
                homeRules={homeRules}
                onClose={() => setIsModalOpen(false)}
                locale={locale}
            />
        </div>
    );
};
