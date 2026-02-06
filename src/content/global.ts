import type { Locale } from "@/lib/i18n";

export const siteContent: Record<
    Locale,
    {
        home: {
            title: string;
            subtitle: string;
        };
        nav: {
            apartments: string;
            about: string;
            book: string;
        };
    }
> = {
    en: {
        home: {
            title: "House of Rome",
            subtitle: "Carefully selected apartments in the heart of Rome",
        },
        nav: {
            apartments: "Apartments",
            about: "Contacts",
            book: "Book Now",
        },
    },
    it: {
        home: {
            title: "House of Rome",
            subtitle: "Appartamenti selezionati con cura nel cuore di Roma",
        },
        nav: {
            apartments: "Appartamenti",
            about: "Contatti",
            book: "Prenota Ora",
        },
    },
};
