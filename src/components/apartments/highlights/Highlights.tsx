import { Users } from "lucide-react";
import styles from './Highlights.module.css';
import { Pill } from "@/components/pills/Pill";
import { Highlight } from "@/content/apartments";
import { siteContent } from "@/content/global";
import { Locale } from "@/lib/i18n";

export const Highlights = ({ highlights, locale }: { highlights: Highlight[]; locale: Locale; }) => {
    const t = siteContent[locale].global;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {highlights.map((highlight, index) => {
                        const translatedName = t.highlightNames[highlight] || highlight;
                        return (
                            <Pill
                                key={`${highlight}-${index}`}
                                icon={Users}
                                label={translatedName}
                                variant="highlight"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};