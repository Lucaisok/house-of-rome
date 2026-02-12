import {
    Eye,
    Building2,
    Sparkles,
    TreePine,
    MapPin,
    type LucideIcon
} from "lucide-react";
import type { Highlight } from "@/content/apartments";
import styles from "./Highlights.module.css";
import { Pill } from "./Pill";

export const highlightIcons: Record<Highlight, LucideIcon> = {
    "City Center": MapPin,
    "Historic Building": Building2,
    "Recently Renovated": Sparkles,
    "Terrace": TreePine,
    "Vibrant Neighborhood": MapPin
};

export const Highlights = ({ highlights }: { highlights: Highlight[]; }) => {
    if (highlights.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {highlights.map((highlight) => (
                        <Pill
                            key={highlight}
                            icon={highlightIcons[highlight] || Sparkles}
                            label={highlight}
                            variant="default"
                            iconStrokeWidth={1.5}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};