import { siteContent } from "@/content/global";
import styles from "../page.module.css";
import { assertLocale } from "@/lib/i18n";
import { homeMetadata } from "@/lib/seo/home/metadata";

export const generateMetadata = homeMetadata;

export const Home = async ({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);
  const t = siteContent[locale];

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>{t.home.title}</h1>
        <h2>{t.home.subtitle}</h2>
      </section>
    </main>
  );
};

export default Home;
