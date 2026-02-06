import { assertLocale } from "@/lib/i18n";
import { aboutMetadata } from "@/lib/seo/about/metadata";

export const generateMetadata = aboutMetadata;

export const About = async ({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);

  return (
    <main>
      <h1>About / Contact</h1>
      <p>({locale})</p>
    </main>
  );
};

export default About;
