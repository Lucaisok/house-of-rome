import styles from "./BookingHelper.module.css";
import type { Locale } from "@/lib/i18n";
import { siteContent } from "@/content/global";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { localizedRoutes } from "@/lib/routes";

interface BookingHelperProps {
    startingPrice: number;
    locale: Locale;
    slug: string;
}

export const BookingHelper = ({ startingPrice, locale, slug }: BookingHelperProps) => {
    const t = siteContent[locale].apartmentCard;
    const price = formatPrice(startingPrice, locale);
    const r = localizedRoutes(locale);
    const bookingUrl = `${r.book}?apt=${slug}`;

    return (
        <section className={styles.bar}>
            <div className={styles.container}>
                <div className={styles.priceWrap}>
                    <span className={styles.priceLabel}>{t.startingFrom}</span>
                    <span className={styles.priceValue}>{price} / {t.night}</span>
                </div>
                <Link href={bookingUrl}><div className={styles.button}>{t.bookNow}</div></Link>
            </div>
        </section>
    );
};