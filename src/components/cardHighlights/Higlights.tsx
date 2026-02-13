import styles from "./Highlights.module.css";
import { Highlight } from "@/content/apartments";
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

export const Highlights = ({ highlights }: { highlights: Highlight[]; }) => {
    return (
        <div className={styles.highlightsRow}>
            {highlights.map((highlight, index) => {
                const Icon = highlightIcons[highlight] || MapPin;
                return (
                    <div
                        key={index}
                        className={styles.highlightPill}
                    >
                        <Icon size={16} style={{ verticalAlign: "middle", marginRight: "0.3em" }} />
                        <span>
                            {highlight}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};