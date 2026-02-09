import type { LucideIcon } from "lucide-react";
import styles from "./PillGroup.module.css";

export type PillItem = {
    icon: LucideIcon;
    label: string;
    iconStrokeWidth?: number;
};

interface PillGroupProps {
    items: PillItem[];
    variant?: "default" | "highlight";
}

export const PillGroup = ({ items, variant = "default" }: PillGroupProps) => {
    if (items.length === 0) return null;

    const itemClass = variant === "highlight" ? `${styles.item} ${styles.highlightItem}` : styles.item;
    const iconClass = variant === "highlight" ? `${styles.icon} ${styles.highlightIcon}` : styles.icon;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {items.map((item) => (
                        <div key={item.label} className={itemClass}>
                            <item.icon size={20} className={iconClass} strokeWidth={item.iconStrokeWidth ?? 2} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
