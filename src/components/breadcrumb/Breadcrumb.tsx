import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export interface BreadcrumbItem {
    name: string;
    path: string;
    isCurrent?: boolean;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
    return (
        <nav
            className={`${styles.breadcrumb} ${className}`}
            aria-label="Breadcrumb"
        >
            <ol className={styles.list}>
                {items.map((item, index) => (
                    <li key={`${item.path}-${index}`} className={styles.item}>
                        {item.isCurrent ? (
                            <span className={styles.current}>{item.name}</span>
                        ) : (
                            <>
                                <Link href={item.path} className={styles.link}>
                                    {item.name}
                                </Link>
                                <span className={styles.separator} aria-hidden="true">
                                    /
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
