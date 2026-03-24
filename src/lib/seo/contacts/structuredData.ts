import { getSiteUrl } from "../metadata";

export function generateContactsStructuredData({ locale }: { locale: "en" | "it"; }) {
    const siteUrl = getSiteUrl();

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "House of Rome",
        description:
            locale === "it"
                ? "Società di noleggio appartamenti specializzata in splendide proprietà a Roma, Italia"
                : "Apartment rental company specializing in beautiful properties in Rome, Italy",
        url: siteUrl,
        telephone: "+39 320 6158544",
        email: "houseofrome2024@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Via dei Panieri, 14/A",
            addressLocality: "Rome",
            addressRegion: "Lazio",
            postalCode: "00153",
            addressCountry: "IT",
        },
        sameAs: [
            "https://www.instagram.com/houseofrome2024/",
        ],
        image: `${siteUrl}/og-default.jpg`,
        priceRange: "€€€",
    };
}
