import { Users } from "lucide-react";
import styles from './Highlights.module.css';
import { Pill } from "@/components/pills/Pill";
import { Highlight } from "@/content/apartments";

export const Highlights = ({ highlights }: { highlights: Highlight[]; }) => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {highlights.map((highlight) => {
                        return (
                            <Pill
                                icon={Users}
                                label={highlight}
                                variant="highlight"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};