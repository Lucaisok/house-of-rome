import { assertLocale, defaultLocale } from "@/lib/i18n";
import { aboutMetadata } from "@/lib/seo/about/metadata";

export const generateMetadata = aboutMetadata;

export const About = async ({
    params,
}: {
    params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
    const resolvedParams = await Promise.resolve(params);
    const lang = assertLocale(resolvedParams?.lang ?? defaultLocale);
    return (
        <main>
            <h1>About / Contact</h1>
            <p>({lang})</p>
        </main>
    );
};

export default About;