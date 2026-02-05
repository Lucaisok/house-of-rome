import { assertLocale, defaultLocale } from "@/lib/i18n";
import { getApartmentBySlug } from "@/content/apartments";
import { apartmentMetadata } from "@/lib/seo/apartment/metadata";

export const generateMetadata = apartmentMetadata;

const ApartmentPage = async ({
    params,
}: {
    params: Promise<{ lang: string; slug: string; }>;
}) => {
    const { slug } = await Promise.resolve(params);

    const apartment = getApartmentBySlug(slug);

    if (!apartment) {
        // Optional: handle 404 later
        return null;
    }

    return (
        <main>
            <h1>{apartment.name}</h1>
            <p>Apartment detail page</p>
        </main>
    );
};

export default ApartmentPage;