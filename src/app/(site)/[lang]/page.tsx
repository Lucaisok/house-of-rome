import styles from "../page.module.css";
import { assertLocale } from "@/lib/i18n";
import { homeMetadata } from "@/lib/seo/home/metadata";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";

export const generateMetadata = homeMetadata;

export const Home = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);

  return (
    <main className={styles.page}>
      <div>
         <Hero locale={locale} />
         <Welcome locale={locale}/>
      </div>
    </main>
  );
};

export default Home;
