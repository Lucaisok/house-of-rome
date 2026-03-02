
import { Contacts } from "@/components/contact/contacts/Contacts";
import { Form } from "@/components/contact/form/Form";
import { HeaderSection } from "@/components/contact/headerSection/HeaderSection";
import { assertLocale } from "@/lib/i18n";
import { contactsMetadata } from "@/lib/seo/contacts/metadata";
import styles from "./page.module.css";

export const generateMetadata = contactsMetadata;

export const ContactsPage = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);

  return (
    <main>
      <HeaderSection locale={locale} />
      <section className={styles.section}>
        <div className={styles.container}>
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
