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

    const iconSize = variant === "highlight" ? 22 : 20;
    const stroke = variant === "highlight" ? Math.max(iconStrokeWidth, 2.5) : iconStrokeWidth;

    return (
        <div className={itemClass}>
            <Icon size={iconSize} className={iconClass} strokeWidth={stroke} />
            <span style={{ color: variant === "highlight" ? "var(--accent-color)" : "#525252" }}>{label}</span>
        </div>
    );
};
