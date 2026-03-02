import styles from "./Highlights.module.css";
import { Highlight } from "@/content/apartments";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";
import {
    Building2,
    Sparkles,
    TreePine,
    MapPin,
    type LucideIcon
} from "lucide-react";

export const highlightIcons: Record<Highlight, LucideIcon> = {
    "City Center": MapPin,
    "Historic Building": Building2,
    "Recently Renovated": Sparkles,
    "Terrace": TreePine,
    "Vibrant Neighborhood": MapPin
};

export const Highlights = ({ highlights, locale }: { highlights: Highlight[]; locale: Locale; }) => {
    const t = siteContent[locale].global;
    return (
        <div className={styles.highlightsRow}>
            {highlights.map((highlight, index) => {
                const Icon = highlightIcons[highlight] || MapPin;
                const translatedName = t.highlightNames[highlight] || highlight;
                return (
                    <div
                        key={index}
                        className={styles.highlightPill}
                    >
                        <Icon size={16} style={{ verticalAlign: "middle", marginRight: "0.3em" }} />
                        <span>
                            {translatedName}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};