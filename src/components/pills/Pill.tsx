import type { LucideIcon } from "lucide-react";
import styles from "./Pill.module.css";

interface PillProps {
    icon: LucideIcon;
    label: string;
    variant?: "default" | "highlight";
    iconStrokeWidth?: number;
}

export const Pill = ({ icon: Icon, label, variant = "default", iconStrokeWidth = 2 }: PillProps) => {
    const itemClass = variant === "highlight" ? `${styles.pill} ${styles.pillHighlight}` : styles.pill;
    const iconClass = variant === "highlight" ? `${styles.icon} ${styles.iconHighlight}` : styles.icon;

    return (
        <div className={itemClass}>
            <Icon size={20} className={iconClass} strokeWidth={iconStrokeWidth} />
            <span>{label}</span>
        </div>
    );
};
