
import { Contacts } from "@/components/contact/contacts/Contacts";
import { Form } from "@/components/contact/form/Form";
import { HeaderSection } from "@/components/contact/headerSection/HeaderSection";
import { assertLocale } from "@/lib/i18n";
import { aboutMetadata } from "@/lib/seo/about/metadata";
import styles from "./about.module.css";

export const generateMetadata = aboutMetadata;

export const About = async ({
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

export default About;
