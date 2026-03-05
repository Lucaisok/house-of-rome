
import { Contacts } from "@/components/contact/contacts/Contacts";
import { Form } from "@/components/contact/form/Form";
import { HeaderSection } from "@/components/contact/headerSection/HeaderSection";
import { assertLocale } from "@/lib/i18n";
import { contactsMetadata } from "@/lib/seo/contacts/metadata";
import { generateContactsStructuredData } from "@/lib/seo/contacts/structuredData";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import {
  generateBreadcrumbStructuredData,
  getContactsBreadcrumbs,
} from "@/lib/seo/breadcrumbs";
import styles from "./page.module.css";

export const generateMetadata = contactsMetadata;

export const ContactsPage = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);

  const structuredData = generateContactsStructuredData({ locale });
  const breadcrumbs = getContactsBreadcrumbs(locale);
  const breadcrumbStructuredData = generateBreadcrumbStructuredData({
    locale,
    breadcrumbs,
  });

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <HeaderSection locale={locale} />
      <section className={styles.section}>
        <div className={styles.container}>
          <Breadcrumb
            items={breadcrumbs.map((item, idx) => ({
              ...item,
              isCurrent: idx === breadcrumbs.length - 1,
            }))}
          />
          <div className={styles.grid}>
            <Contacts locale={locale} />
            <Form locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
