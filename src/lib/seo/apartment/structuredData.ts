import { Apartment } from "@/content/apartments";
import { Locale } from "@/lib/i18n";
import { getSiteUrl } from "../metadata";

interface StructuredDataProps {
    apartment: Apartment;
    locale: Locale;
}

export function generateApartmentStructuredData({ apartment, locale }: StructuredDataProps) {
    const siteUrl = getSiteUrl();
    const publicPath = locale === "it" ? `/it/apartments/${apartment.slug}` : `/apartments/${apartment.slug}`;
    const url = new URL(publicPath, siteUrl).toString();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Apartment",
        "name": apartment.name,
        "description": apartment.shortDescription[locale],
        "url": url,
        "image": apartment.img_preview ? new URL(apartment.img_preview, siteUrl).toString() : undefined,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": apartment.address,
            "addressLocality": "Rome",
            "addressRegion": "Lazio",
            "addressCountry": "IT"
        },
        "geo": apartment.lat && apartment.lng ? {
            "@type": "GeoCoordinates",
            "latitude": apartment.lat,
            "longitude": apartment.lng
        } : undefined,
        "numberOfRooms": apartment.bedrooms,
        "numberOfBedrooms": apartment.bedrooms,
        "numberOfBathroomsTotal": apartment.bathrooms,
        "occupancy": {
            "@type": "QuantitativeValue",
            "maxValue": apartment.guests
        },
        ...(apartment.size && {
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": apartment.size,
                "unitCode": "MTK" // square meters
            }
        }),
        "amenityFeature": apartment.amenities.map(amenity => ({
            "@type": "LocationFeatureSpecification",
            "name": amenity
        })),
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": apartment.startingPrice,
            "availability": "https://schema.org/InStock"
        },
        "checkinTime": apartment.homeRules?.checkIn || "15:00",
        "checkoutTime": apartment.homeRules?.checkOut || "11:00",
        "petsAllowed": apartment.homeRules?.petsAllowed || false,
        "smokingAllowed": apartment.homeRules?.smokingAllowed || false
    };

    return structuredData;
}
