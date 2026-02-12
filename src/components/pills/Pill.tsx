import type { LucideIcon } from "lucide-react";
import styles from "./Pill.module.css";

interface PillProps {
    icon: LucideIcon;
    label: string;
    variant?: "default" | "highlight";
    iconStrokeWidth?: number;
}

export const Pill = ({ icon: Icon, label, variant = "default", iconStrokeWidth = 2 }: PillProps) => {
    const pillStyle =
    {
        itemClass: variant === "highlight" ? `${styles.pill} ${styles.pillHighlight}` : styles.pill,
        iconClass: variant === "highlight" ? `${styles.icon} ${styles.iconHighlight}` : styles.icon,
        textColor: variant === "highlight" ? "#ffe343" : "#525252",
        iconSize: 18,
        stroke: variant === "highlight" ? Math.max(iconStrokeWidth, 2.5) : iconStrokeWidth
    };


    return (
        <div className={pillStyle.itemClass}>
            <Icon size={pillStyle.iconSize} className={pillStyle.iconClass} strokeWidth={pillStyle.stroke} />
            <span style={{ color: pillStyle.textColor }}>{label}</span>
        </div>
    );
};
