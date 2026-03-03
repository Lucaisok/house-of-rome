import styles from "./BookingHelper.module.css";
import type { Locale } from "@/lib/i18n";
import { siteContent } from "@/content/global";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { routes } from "@/lib/routes";

interface BookingHelperProps {
    startingPrice: number;
    locale: Locale;
}

export const BookingHelper = ({ startingPrice, locale }: BookingHelperProps) => {
    const t = siteContent[locale].apartmentCard;
    const price = formatPrice(startingPrice, locale);

    return (
        <section className={styles.bar}>
            <div className={styles.container}>
                <div className={styles.priceWrap}>
                    <span className={styles.priceLabel}>{t.startingFrom}</span>
                    <span className={styles.priceValue}>{price} / {t.night}</span>
                </div>
                <Link href={routes.book}><div className={styles.button}>{t.bookNow}</div></Link>
            </div>
        </section>
    );
};