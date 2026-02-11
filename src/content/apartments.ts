export type Amenity = "Wifi" | "Air Conditioning" | "TV" | "Full Kitchen" | "Coffee Maker" | "Dryer" | "Washer";
export type Highlight = "City Center" | "Historic Building" | "Recently Renovated" | "Terrace";

export type Apartment = {
  slug: string;
  name: string;
  img_preview: string;
  shortDescription: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  size: number;
  location: string;
  images: string[];
  address: string;
  amenities: Amenity[];
  highlights: Highlight[];
  lat: number;
  lng: number;
};

export const apartments: Apartment[] = [
  {
    slug: "pretty-vatican-house",
    name: "Pretty Vatican House",
    shortDescription: {
      it: "Appartamento nuovo e confortevole vicino al Vaticano, ideale per 3 persone, con metro Cipro e servizi sotto casa.",
      en: "New, comfortable apartment near the Vatican, ideal for up to 3 guests, with Cipro metro and services nearby."
    },
    description: {
      it: `Grazioso e confortevole appartamento di recente realizzazione, a pochi passi dal Vaticano. L’alloggio è nuovo, accogliente e dotato di tutti i comfort.

Ideale per fino a 3 persone, perfetto sia per brevi soggiorni che per permanenze più lunghe, come una settimana o più. Lo stadio Olimpico è molto vicino e ben collegato. La metro Cipro (A) è proprio di fronte casa, così come le fermate degli autobus.

Zona ricca di servizi: supermercati, bar e ristoranti sotto casa.

Sarà un piacere accogliervi e farvi sentire come a casa!`,
      en: `Charming and comfortable apartment, recently built, just steps from the Vatican. The accommodation is new, cozy, and equipped with all comforts. Ideal for up to 3 guests, perfect for both short stays and longer ones, like a week or more. The Olympic Stadium is very close and well connected. The Cipro metro (A) is right in front of the house, as are the bus stops. The area is rich in services: supermarkets, bars, and restaurants right at your doorstep. It will be a pleasure to welcome you and make you feel at home!`
    },
    guests: 0,
    bedrooms: 0,
    img_preview: "./temporary_preview.jpg",
    beds: 0,
    size: 0,
    images: ["."],
    location: "",
    bathrooms: 0,
    address: "",
    amenities: ["Air Conditioning", "Coffee Maker", "Full Kitchen", "Washer", "Dryer", "TV"],
    lat: 0,
    lng: 0,
    highlights: [],
  },
  {
    slug: "spanish-steps-apartment-terrace",
    name: "Spanish Steps Apartment & Terrace",
    shortDescription: {
      it: "Elegante appartamento con patio privato, a pochi passi da Piazza di Spagna: il punto di partenza ideale per vivere Roma.",
      en: "Elegant apartment with a private patio near the Spanish Steps: the perfect base for exploring Rome."
    },
    description: {
      it: `Nel cuore più autentico di Roma, a pochi passi da Piazza di Spagna, questa casa vacanze è un rifugio di eleganza e tranquillità, ideale per vivere la città come veri romani.

  Situata al primo piano di un palazzo signorile e molto silenzioso, dotato di ascensore, la casa può ospitare fino a 4 persone, risultando perfetta per famiglie, coppie o piccoli gruppi di amici. Gli ambienti sono curati, luminosi e pensati per offrire comfort e relax dopo una giornata tra arte, shopping e passeggiate senza meta.

  Il vero gioiello della casa è il patio privato, uno spazio intimo e tranquillo dove concedersi una colazione lenta, un momento di lettura o un calice di vino la sera, lontani dal ritmo frenetico della città, pur essendo nel suo cuore pulsante.

  La posizione è semplicemente impareggiabile: tutto è raggiungibile a piedi. Fontana di Trevi, Piazza Navona, il Pantheon, Trinità dei Monti e le vie dello shopping più esclusive sono a pochi minuti di distanza. Non servono mezzi, solo il piacere di scoprire Roma passo dopo passo.

  Una casa elegante e accogliente, pensata per chi desidera un soggiorno raffinato, centrale e autentico, senza rinunciare alla quiete e alla privacy`,
      en: `In the most authentic heart of Rome, just steps from the Spanish Steps, this holiday home is a refuge of elegance and tranquility, ideal for experiencing the city like true Romans.

Located on the first floor of a quiet, elegant building with an elevator, the home can accommodate up to 4 guests, making it perfect for families, couples, or small groups of friends. The spaces are curated, bright, and designed to offer comfort and relaxation after a day of art, shopping, and aimless strolls.

The true gem of the home is the private patio—a cozy and tranquil space where you can enjoy a slow breakfast, a moment of reading, or a glass of wine in the evening, away from the hectic pace of the city while still being in its beating heart.

The location is simply unbeatable: everything is within walking distance. Trevi Fountain, Piazza Navona, the Pantheon, Trinità dei Monti, and the most exclusive shopping streets are just minutes away. No transportation needed—just the pleasure of discovering Rome step by step.

An elegant and welcoming home designed for those who want a refined, central, and authentic stay without giving up quiet and privacy.`
    },
    guests: 4,
    bedrooms: 1,
    beds: 2,
    size: 60,
    img_preview: "./spanish_steps/preview.jpg",
    images: ["./spanish_steps/preview.jpg", "./spanish_steps/span_1.jpg", "./spanish_steps/span_2.jpg", "./spanish_steps/span_3.jpg", "./spanish_steps/span_4.jpg", "./spanish_steps/span_5.jpg", "./spanish_steps/span_6.jpg", "./spanish_steps/span_7.jpg", "./spanish_steps/span_8.jpg", "./spanish_steps/span_9.jpg", "./spanish_steps/span_10.jpg"],
    location: "Via Veneto",
    bathrooms: 1,
    address: "Via Francesco Crispi 64, 00187 Roma, Italia",
    amenities: ["Air Conditioning", "Coffee Maker", "Full Kitchen", "Washer", "Dryer", "TV"],
    lat: 41.90488,
    lng: 12.48624,
    highlights: ["Terrace", "City Center"],
  },
  {
    slug: "trastevere-experience",
    name: "Trastevere Experience",
    shortDescription: {
      it: "Appartamento moderno nel cuore di Trastevere, a due passi da Piazza Trilussa—stile, comfort e tranquillità per esplorare a piedi.",
      en: "Modern apartment in the heart of Trastevere, steps from Piazza Trilussa—style, comfort, and calm for exploring on foot."
    },
    description: {
      it: `Nel cuore di Trastevere, questo moderno appartamento è un vero gioiello per chi desidera vivere la città a piedi, immergendosi nell’atmosfera autentica di uno dei quartieri più amati di Roma.

Situato a pochi passi da Piazza Trilussa, il cuore pulsante di Trastevere, l’appartamento offre un perfetto equilibrio tra stile contemporaneo e comfort. Gli ambienti sono luminosi, curati nei dettagli e pensati per garantire un soggiorno rilassante dopo una giornata trascorsa a esplorare le strade acciottolate, le piazzette animate e i locali tipici del quartiere. La posizione è ideale per chi vuole scoprire Trastevere a piedi: dalla casa si raggiungono facilmente le principali attrazioni del quartiere, come Santa Maria in Trastevere, il Gianicolo e il mercato di Porta Portese, ma anche le zone limitrofe come Campo de’ Fiori, Piazza Navona e il centro storico.

Una casa moderna e accogliente, pensata per chi desidera un soggiorno autentico, comodo e centrale, immerso nella bellezza e nell’anima di Trastevere.`,
      en: `In the heart of Trastevere, this modern apartment is a true gem for those who want to experience the city on foot, immersing themselves in the authentic atmosphere of one of Rome’s most beloved neighborhoods.

Located just steps from Piazza Trilussa, the beating heart of Trastevere, the apartment offers a perfect balance of contemporary style and comfort. The spaces are bright, carefully detailed, and designed to ensure a relaxing stay after a day spent exploring the cobblestone streets, lively squares, and typical local spots of the neighborhood. The location is ideal for those who want to discover Trastevere on foot: from the home you can easily reach the main attractions of the neighborhood, such as Santa Maria in Trastevere, Gianicolo Hill, and Porta Portese market, as well as nearby areas like Campo de’ Fiori, Piazza Navona, and the historic center.

A modern and welcoming home designed for those who want an authentic, comfortable, and central stay, immersed in the beauty and soul of Trastevere.`
    },
    guests: 4,
    bedrooms: 1,
    size: 50,
    beds: 2,
    img_preview: "./trastevere_experience/preview.jpg",
    images: [],
    location: "Trastevere",
    bathrooms: 2,
    address: "Via dei Fienaroli 15, Trastevere, 00153 Roma, Italia",
    amenities: ["Air Conditioning", "Coffee Maker", "Full Kitchen", "Washer", "Dryer", "TV"],
    lat: 41.88934,
    lng: 12.47228,
    highlights: []
  },
  {
    slug: "appartamento-trastevere",
    name: "Appartamento Trastevere",
    shortDescription: {
      it: "Accogliente casetta nel cuore di Trastevere, perfetta per una fuga romantica o una vacanza intima a Roma.",
      en: "Cozy little home in the heart of Trastevere, perfect for a romantic getaway or an intimate vacation in Rome."
    },
    description: {
      it: `Nel cuore di Trastevere, questa accogliente casetta è un rifugio perfetto per chi cerca un soggiorno intimo e romantico a Roma. Situata in una delle zone più autentiche e affascinanti della città, la casa offre un’atmosfera calda e accogliente, ideale per coppie o viaggiatori solitari che desiderano immergersi nell’anima di Trastevere.

L’appartamento è arredato con cura, combinando elementi tradizionali con tocchi moderni per creare uno spazio confortevole e pieno di charme. La posizione è semplicemente imbattibile: a pochi passi da Piazza Trilussa, Santa Maria in Trastevere e le vie più caratteristiche del quartiere, la casa permette di vivere l’esperienza romana a piedi, scoprendo angoli nascosti, trattorie tipiche e l’atmosfera unica di Trastevere.

Una casetta accogliente e romantica, pensata per chi desidera un soggiorno autentico, intimo e centrale, immerso nella magia di Trastevere.`
      ,
      en: `In the heart of Trastevere, this cozy little home is a perfect refuge for those seeking an intimate and romantic stay in Rome. Located in one of the most authentic and charming areas of the city, the home offers a warm and welcoming atmosphere, ideal for couples or solo travelers who want to immerse themselves in the soul of Trastevere.

The apartment is thoughtfully furnished, combining traditional elements with modern touches to create a comfortable and charming space. The location is simply unbeatable: just steps from Piazza Trilussa, Santa Maria in Trastevere, and the most characteristic streets of the neighborhood, the home allows you to experience Rome on foot, discovering hidden corners, typical trattorias, and the unique atmosphere of Trastevere.

A cozy and romantic little home designed for those who want an authentic, intimate, and central stay, immersed in the magic of Trastevere.`
    },
    guests: 0,
    bedrooms: 0,
    img_preview: "./temporary_preview.jpg",
    beds: 0,
    size: 0,
    images: [],
    location: "",
    bathrooms: 0,
    address: "",
    amenities: ["Air Conditioning", "Coffee Maker", "Full Kitchen", "Washer", "Dryer", "TV"],
    lat: 0,
    lng: 0,
    highlights: [],
  },
];

export const getApartmentBySlug = (slug: string) =>
  apartments.find((a) => a.slug === slug);
