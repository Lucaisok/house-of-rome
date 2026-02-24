import { siteContent } from "@/content/global";
import styles from "./privacy-policy.module.css";
import { assertLocale } from "@/lib/i18n";
import { email } from "@/components/contact/contacts/Contacts";

export const PrivacyPolicy = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);
  const t = siteContent[locale].privacy;

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{t.title}</h1>
      <p className={styles.text}>
        {t.intro}
      </p>
      <h2 className={styles.sectionTitle}>{t.cookiesTitle}</h2>
      <p className={styles.text}>
        {t.cookies}
      </p>
      <h2 className={styles.sectionTitle}>{t.rightsTitle}</h2>
      <p className={styles.text}>
        {t.rights}
      </p>
      <h2 className={styles.sectionTitle}>{t.contactTitle}</h2>
      <p className={styles.text}>
        {t.contact} <a href={`mailto:${email}`} className={styles.link}>{email}</a>.
      </p>
    </main>
  );
};

export default PrivacyPolicy;
