import { getSiteUrl } from "./metadata";

export interface BreadcrumbItem {
    name: string;
    path: string;
}

export function generateBreadcrumbStructuredData({
    locale,
    breadcrumbs,
}: {
    locale: "en" | "it";
    breadcrumbs: BreadcrumbItem[];
}) {
    const siteUrl = getSiteUrl();

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.path}`,
        })),
    };
}

// Helper function to build breadcrumbs for apartment pages
export function getApartmentBreadcrumbs({
    locale,
    apartmentName,
    apartmentSlug,
}: {
    locale: "en" | "it";
    apartmentName: string;
    apartmentSlug: string;
}): BreadcrumbItem[] {
    const homeLabel = locale === "it" ? "Home" : "Home";
    const apartmentsLabel = locale === "it" ? "Appartamenti" : "Apartments";

    const basePath = locale === "it" ? "/it" : "";

    return [
        { name: homeLabel, path: basePath || "/" },
        { name: apartmentsLabel, path: `${basePath}/apartments` },
        { name: apartmentName, path: `${basePath}/apartments/${apartmentSlug}` },
    ];
}

// Helper function to build breadcrumbs for contacts page
export function getContactsBreadcrumbs(locale: "en" | "it"): BreadcrumbItem[] {
    const homeLabel = locale === "it" ? "Home" : "Home";
    const contactsLabel = locale === "it" ? "Contatti" : "Contacts";

    const basePath = locale === "it" ? "/it" : "";

    return [
        { name: homeLabel, path: basePath || "/" },
        { name: contactsLabel, path: `${basePath}/contacts` },
    ];
}
