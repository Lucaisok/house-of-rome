import type { Locale } from "@/lib/i18n";

export const siteContent: Record<
    Locale,
    {
        global: {
            rome: string;
            sqm: string;
            aboutThisPlace: string;
            amenities: string;
            location: string;
            see: string;
            photo: string;
            photos: string;
            viewGallery: string;
            viewAll: string;
            allServices: string;
        },
        home: {
            title: string;
            subtitle: string;
        };
        nav: {
            home: string;
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
        featuredApartments: {
            title: string;
            description: string;
            cta: string;
        };
        callToAction: {
            title: string;
            description: string;
            viewApartments: string;
            contactUs: string;
        };
        apartmentCard: {
            viewDetails: string;
            startingFrom: string;
            night: string;
            bookNow: string;
            Guests: string;
            Guest: string;
            Bed: string;
            Bedroom: string;
            Bedrooms: string;
            Bathroom: string;
            Bathrooms: string;
            Beds: string;
            sqm: string;
        };
        apartments: {
            title: string;
            description: string;
            exploreLocationsTitle: string;
            exploreLocationsDescription: string;
        };
        footer: {
            contactTitle: string;
            paragraph: string;
            address: string;
            phone: string;
            email: string;
            followUs: string;
            quickLinks: string;
        };
        contact: {
            header: {
                title: string,
                description: string;
            };
            infoBox: {
                title: string;
                firstParagraph: string;
                secondParagraph: string;
            };
            contacts: {
                title: string;
                whatsApp: {
                    description: string;
                    buttonText: string;
                    message: string;
                },
                phone: string;
            },
            form: {
                title: string;
                nameLabel: string;
                emailLabel: string;
                phoneLabel: string;
                messageLabel: string;
                messagePlaceholder: string;
                submitButton: string;
                success: string;
                error: string;
            };
        };
        privacy: {
            title: string;
            intro: string;
            cookiesTitle: string;
            cookies: string;
            rightsTitle: string;
            rights: string;
            contactTitle: string;
            contact: string;
        };
        cookieBanner: {
            message: string;
            accept: string;
            decline: string;
            learnMore: string;
        };
    }
> = {
    en: {
        global: {
            rome: "Rome",
            sqm: "sqm",
            aboutThisPlace: "About this place",
            amenities: "Amenities",
            location: "Location",
            see: "See",
            photo: "photo",
            photos: "photos",
            viewGallery: "View gallery",
            viewAll: "View all",
            allServices: "All services",
        },
        home: {
            title: "House of Rome",
            subtitle: "Carefully selected apartments in the heart of Rome",
        },
        nav: {
            home: "Home",
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
        featuredApartments: {
            title: "Our Apartments",
            description: "Each apartment has been carefully selected and designed to offer you an unforgettable stay in Rome",
            cta: "View All Apartments",
        },
        callToAction: {
            title: "Ready to Experience Rome?",
            description: "Book your stay with us and discover the beauty of the Eternal City from the comfort of your own elegant apartment.",
            viewApartments: "Browse Apartments",
            contactUs: "Get in Touch",
        },
        footer: {
            contactTitle: "Contact Us",
            address: "Address",
            phone: "Phone",
            email: "Email",
            followUs: "Follow Us",
            paragraph: "Providing exceptional short-term apartment rentals in Rome since 2020. Your comfort and satisfaction are our top priorities.",
            quickLinks: "Quick Links",
        },
        apartmentCard: {
            viewDetails: "View Details",
            startingFrom: "Starting from",
            night: "night",
            bookNow: "Book now",
            Guests: "Guests",
            Guest: "Guest",
            Bedrooms: "Bedrooms",
            Bedroom: "Bedroom",
            Bathrooms: "Bathrooms",
            Bathroom: "Bathroom",
            Beds: "Beds",
            Bed: "Bed",
            sqm: "sqm",
        },
        apartments: {
            exploreLocationsTitle: "Explore Our Locations",
            exploreLocationsDescription: "All of our apartments are strategically located throughout Rome's most iconic neighborhoods, ensuring you're never far from the city's treasures.",
            title: "Our Apartments",
            description: "Discover our carefully curated collection of four exceptional apartments in Rome's most desirable neighborhoods. Each residence offers a unique blend of authentic Roman charm and modern comfort, perfectly positioned to explore the eternal city.",
        },
        contact: {
            header: {
                title: "Get in Touch",
                description: "We're here to help you plan your perfect stay in Rome. Reach out to us with any questions about our apartments or to make a reservation."
            },
            infoBox: {
                title: "Planning Your Visit?",
                firstParagraph: "Our team is dedicated to making your Roman holiday unforgettable. Whether you need recommendations for restaurants, help with transportation, or have questions about our apartments, we're here to assist.",
                secondParagraph: "For the fastest response, we recommend contacting us via WhatsApp. We're available 7 days a week to answer your questions."
            },
            contacts: {
                title: "Contact Information",
                whatsApp: {
                    description: "Get instant responses to your questions",
                    buttonText: "Chat on WhatsApp",
                    message: "Hello! I would like to inquire about your apartments in Rome.",
                },
                phone: "Phone",
            },
            form: {
                title: "Send Us a Message",
                nameLabel: "Full Name",
                emailLabel: "Email Address",
                phoneLabel: "Phone Number",
                messageLabel: "Message",
                messagePlaceholder: "Tell us about your travel plans or ask any questions...",
                submitButton: "Send Message",
                success: "Thank you for your message! We will get back to you soon.",
                error: "An error occurred. Please try again.",
            }
        },
        privacy: {
            title: "Privacy Policy",
            intro: "We value your privacy. This website uses cookies only for essential functionality and analytics. No personal data is sold or shared with third parties",
            cookiesTitle: "Cookies",
            cookies: "Cookies are small text files stored on your device. We use them to remember your preferences and to understand how our site is used.",
            rightsTitle: "Your Choices",
            rights: "You can accept or decline cookies using the banner. Most browsers also allow you to control cookies via settings.",
            contactTitle: "Contact",
            contact: "For questions about this privacy policy, please contact us at ",
        },
        cookieBanner: {
            message: "This website uses cookies to ensure you get the best experience.",
            accept: "Accept",
            decline: "Decline",
            learnMore: "Learn more",
        }
    },
    it: {
        global: {
            rome: "Roma",
            sqm: "mq",
            aboutThisPlace: "Informazioni",
            amenities: "Servizi",
            location: "Posizione",
            see: "Vedi",
            photo: "foto",
            photos: "foto",
            viewGallery: "Galleria immagini",
            viewAll: "Vedi tutti",
            allServices: "Tutti i servizi",
        },
        home: {
            title: "House of Rome",
            subtitle: "Appartamenti selezionati con cura nel cuore di Roma",
        },
        nav: {
            home: "Home",
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
        featuredApartments: {
            title: "I nostri appartamenti",
            description: "Ogni appartamento è stato accuratamente selezionato e progettato per offrirti un soggiorno indimenticabile a Roma",
            cta: "Vedi gli appartamenti",
        },
        callToAction: {
            title: "Pronto a vivere Roma?",
            description: "Prenota il tuo soggiorno con noi e scopri la bellezza della Città Eterna dal comfort del tuo elegante appartamento.",
            viewApartments: "Prenota un appartamento",
            contactUs: "Contattaci",
        },
        footer: {
            contactTitle: "Contatti",
            address: "Indirizzo",
            phone: "Telefono",
            email: "Email",
            followUs: "Seguici",
            paragraph: "Fornendo eccezionali affitti di appartamenti a breve termine a Roma dal 2020. Il tuo comfort e la tua soddisfazione sono le nostre massime priorità.",
            quickLinks: "Link",
        },
        apartmentCard: {
            viewDetails: "Vedi Dettagli",
            startingFrom: "A partire da",
            night: "notte",
            bookNow: "Prenota ora",
            Guests: "Ospiti",
            Guest: "Ospite",
            Bedrooms: "Camere da letto",
            Bathrooms: "Bagni",
            Bathroom: "Bagno",
            Bedroom: "Camera da letto",
            Beds: "Letti",
            Bed: "Letto",
            sqm: "mq",
        },
        apartments: {
            exploreLocationsTitle: "Esplora le nostre location",
            exploreLocationsDescription: "Tutti i nostri appartamenti sono strategicamente situati nei quartieri più iconici di Roma, assicurandoti di essere sempre vicino ai tesori della città.",
            title: "I nostri appartamenti",
            description: "Scopri la nostra collezione accuratamente selezionata di quattro appartamenti eccezionali nei quartieri più desiderabili di Roma. Ogni residenza offre un mix unico di autentico fascino romano e comfort moderno, perfettamente posizionata per esplorare la città eterna.",
        },
        contact: {
            header: {
                title: "Contattaci",
                description: "Siamo qui per aiutarti a pianificare il tuo soggiorno perfetto a Roma. Contattaci per qualsiasi domanda sui nostri appartamenti o per effettuare una prenotazione."
            },
            infoBox: {
                title: "Pianificando la tua visita?",
                firstParagraph: "Il nostro team è dedicato a rendere indimenticabile la tua vacanza romana. Che tu abbia bisogno di consigli sui ristoranti, aiuto con i trasporti o domande sui nostri appartamenti, siamo qui per assisterti.",
                secondParagraph: "Per una risposta più rapida, ti consigliamo di contattarci tramite WhatsApp. Siamo disponibili 7 giorni su 7 per rispondere alle tue domande."
            },
            contacts: {
                title: "Informazioni di contatto",
                whatsApp: {
                    description: "Ricevi risposte istantanee alle tue domande",
                    buttonText: "Chatta su WhatsApp",
                    message: "Ciao! Vorrei avere informazioni sui vostri appartamenti a Roma.",
                },
                phone: "Telefono",
            },
            form: {
                title: "Inviaci un messaggio",
                nameLabel: "Nome",
                emailLabel: "Indirizzo email",
                phoneLabel: "Numero di telefono",
                messageLabel: "Messaggio",
                messagePlaceholder: "Raccontaci i tuoi piani di viaggio o fai qualsiasi domanda...",
                submitButton: "Invia",
                success: "Grazie per il tuo messaggio! Ti ricontatteremo presto.",
                error: "Si è verificato un errore. Riprova.",
            }
        },
        privacy: {
            title: "Informativa sulla privacy",
            intro: "Teniamo alla tua privacy. Questo sito utilizza solo cookie essenziali e di analisi. Nessun dato personale viene venduto o condiviso con terze parti.",
            cookiesTitle: "Cookie",
            cookies: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo. Li utilizziamo per ricordare le tue preferenze e per capire come viene utilizzato il nostro sito.",
            rightsTitle: "Le tue scelte",
            rights: "Puoi accettare o rifiutare i cookie tramite il banner. La maggior parte dei browser consente anche di gestire i cookie dalle impostazioni.",
            contactTitle: "Contatti",
            contact: "Per domande su questa informativa sulla privacy, contattaci a ",
        },
        cookieBanner: {
            message: "Questo sito utilizza cookie per garantirti la migliore esperienza.",
            accept: "Accetta",
            decline: "Rifiuta",
            learnMore: "Scopri di più",
        }
    }
};