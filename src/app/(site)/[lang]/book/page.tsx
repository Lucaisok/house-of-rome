
import { assertLocale } from "@/lib/i18n";
import { bookMetadata } from "@/lib/seo/book/metadata";
import styles from "./page.module.css";
import { routes } from "@/lib/routes";
import { siteContent } from "@/content/global";
import WidgetIframe from "@/components/WidgetIframe";
import { mapWidgetURL } from "@/lib/utils/utils";

export const generateMetadata = bookMetadata;

export const BookPage = async ({
    params,
    searchParams,
}: {
    params: { lang: string; } | Promise<{ lang: string; }>;
    searchParams: Promise<{ apt?: string; }>;
}) => {
    const { lang } = await params;
    const { apt } = await searchParams;
    const locale = assertLocale(lang);
    const t = siteContent[locale];
    const url = mapWidgetURL[apt ?? "generic"];

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        {t.book.title}
                    </h1>
                    <p className={styles.subtitle}>
                        {t.book.subtitle}
                    </p>
                </div>

                <div className={styles.widgetSection}>
                    <WidgetIframe src={url ?? ""} />
                </div>

                <div className={styles.helpSection}>
                    <h3 className={styles.helpTitle}>{t.book.helpTitle}</h3>
                    <p className={styles.helpText}>
                        {t.book.helpText}
                    </p>
                    <a
                        href={routes.contacts}
                        className={styles.button}
                    >
                        {t.book.contactButton}
                    </a>
                </div>
            </div>
        </main>
    );
};

export default BookPage;