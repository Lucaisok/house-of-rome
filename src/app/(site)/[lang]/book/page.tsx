
import { HeaderSection } from "@/components/contact/headerSection/HeaderSection";
import { assertLocale } from "@/lib/i18n";
import { bookMetadata } from "@/lib/seo/book/metadata";
import styles from "./page.module.css";
import { routes } from "@/lib/routes";
import { siteContent } from "@/content/global";
import WidgetIframe from "@/components/WidgetIframe";

export const generateMetadata = bookMetadata;

export const BookPage = async ({
    params,
}: {
    params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
    const { lang } = await params;
    const locale = assertLocale(lang);
    const t = siteContent[locale];

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
                    <WidgetIframe src="https://bnbforms.com/103473/" />
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