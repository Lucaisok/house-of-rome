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
        hero: {
            firstLine: string;
            secondLine: string;
            thirdLine: string;
            viewApartments: string;
            contactUs: string;
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
        hero: {
            firstLine: "Your Home in the",
            secondLine: "Eternal City",
            thirdLine: "Experience authentic Roman living in our carefully curated collection of elegant apartments",
            viewApartments: "View Apartments",
            contactUs: "Contact Us",
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
        hero: {
            firstLine: "La tua casa nella",
            secondLine: "Città Eterna",
            thirdLine: "Vivi l'autentica esperienza romana nella nostra collezione accuratamente selezionata di eleganti appartamenti",
            viewApartments: "Vedi Appartamenti",
            contactUs: "Contattaci",
        },
    },
};