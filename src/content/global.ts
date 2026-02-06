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
        welcome: {
            title: string;
            description: string;
            secondDescription: string;
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
        welcome: {
            title: "Welcome to House of Rome",
            description: "We offer a curated selection of four exceptional apartments in the heart of Rome. Each property has been thoughtfully designed to provide the perfect blend of modern comfort and timeless Italian elegance.",
            secondDescription: "Whether you're here for a romantic getaway, a family vacation, or exploring the city's rich history, our apartments offer the ideal base for your Roman adventure.",
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
        welcome: {
            title: "Benvenuto a Roma",
            description: "Offriamo una selezione curata di quattro appartamenti eccezionali nel cuore di Roma. Ogni struttura è stata progettata con attenzione per offrire il perfetto equilibrio tra comfort moderno ed eleganza italiana senza tempo.",
            secondDescription: "Che tu sia qui per una fuga romantica, una vacanza in famiglia o per esplorare la ricca storia della città, i nostri appartamenti offrono la base ideale per la tua avventura romana.",
        },
    },
};