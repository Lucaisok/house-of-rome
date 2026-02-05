import styles from "../page.module.css";
import { assertLocale, defaultLocale } from "@/lib/i18n";
import { homeMetadata } from "@/lib/seo/home/metadata";

export const generateMetadata = homeMetadata;

export const Home = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const resolvedParams = await Promise.resolve(params);
  const lang = assertLocale(resolvedParams?.lang ?? defaultLocale);
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>House of Rome</h1>
        <p>Next.js + TypeScript + CSS Modules. {lang}</p>
      </section>
    </main>
  );
};

export default Home;