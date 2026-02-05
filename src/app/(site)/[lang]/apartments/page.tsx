import { assertLocale, defaultLocale } from "@/lib/i18n";
import { apartmentsMetadata } from "@/lib/seo/apartments/metadata";

export const generateMetadata = apartmentsMetadata;

export const Apartments = async ({
    params,
}: {
    params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
    const resolvedParams = await Promise.resolve(params);
    const lang = assertLocale(resolvedParams?.lang ?? defaultLocale);
    return (
        <main>
            <h1>Apartments</h1>
            <p>Listing ({lang})</p>
        </main>
    );
};

export default Apartments;