import styles from "./page.module.css";
import { assertLocale } from "@/lib/i18n";
import { homeMetadata } from "@/lib/seo/home/metadata";
import { Hero } from "@/components/hero/Hero";
import { Welcome } from "@/components/welcome/Welcome";
import { FeaturedApartments } from "@/components/featuredApartments/FeaturedApartments";
import { CallToAction } from "@/components/callToAction/CallToAction";
import { Locale } from "@/lib/i18n";

export const generateMetadata = homeMetadata;

export interface LocaleProp {
  locale: Locale;
}

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
        <Welcome locale={locale} />
        <FeaturedApartments locale={locale} />
        <CallToAction locale={locale} />
      </div>
    </main>
  );
};

export default Home;
