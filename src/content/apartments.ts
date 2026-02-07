export type Apartment = {
  slug: string;
  name: string;
  img_preview: string;
  shortDescription: string;
  shortDescriptionEn: string;
  description: string;
  descriptionEn: string;
  guests: number;
  bedrooms: number;
  beds: number; // Optional number of beds in the apartment
  sqm: number; // Optional square meters of the apartment
  location: string;
  images: string[]; // Optional array of additional images for the apartment
};

export const apartments: Apartment[] = [
  {
    slug: "pretty-vatican-house",
    name: "Pretty Vatican House",
    shortDescription: "Appartamento nuovo e confortevole vicino al Vaticano, ideale per 3 persone, con metro Cipro e servizi sotto casa.",
    shortDescriptionEn: "New, comfortable apartment near the Vatican, ideal for up to 3 guests, with Cipro metro and services nearby.",
    description: `Grazioso e confortevole appartamento di recente realizzazione, a pochi passi dal Vaticano. L’alloggio è nuovo, accogliente e dotato di tutti i comfort.

Ideale per fino a 3 persone, perfetto sia per brevi soggiorni che per permanenze più lunghe, come una settimana o più. Lo stadio Olimpico è molto vicino e ben collegato. La metro Cipro (A) è proprio di fronte casa, così come le fermate degli autobus.

Zona ricca di servizi: supermercati, bar e ristoranti sotto casa.

Sarà un piacere accogliervi e farvi sentire come a casa!`,
    descriptionEn: `Cozy and comfortable newly built apartment just a few steps from the Vatican. The accommodation is new, welcoming, and equipped with all comforts.

Ideal for up to 3 guests, perfect for short stays as well as longer ones, such as a week or more. The Olympic Stadium is very close and well connected. The Cipro (A) metro is right in front of the house, along with bus stops.

The area is full of services: supermarkets, cafés, and restaurants just downstairs.

It will be a pleasure to welcome you and make you feel at home!`,
    guests: 0,
    bedrooms: 0,
    img_preview: "./temporary_preview.jpg",
    beds: 0,
    sqm: 0,
    images: [],
    location: ""
  },
  {
    slug: "spanish-steps-apartment-terrace",
    name: "Spanish Steps Apartment & Terrace",
    shortDescription: "Elegante appartamento con patio privato, a pochi passi da Piazza di Spagna: il punto di partenza ideale per vivere Roma.",
    shortDescriptionEn: "Elegant apartment with a private patio near the Spanish Steps: the perfect base for exploring Rome.",
    description: `Nel cuore più autentico di Roma, a pochi passi da Piazza di Spagna, questa casa vacanze è un rifugio di eleganza e tranquillità, ideale per vivere la città come veri romani.

  Situata al primo piano di un palazzo signorile e molto silenzioso, dotato di ascensore, la casa può ospitare fino a 4 persone, risultando perfetta per famiglie, coppie o piccoli gruppi di amici. Gli ambienti sono curati, luminosi e pensati per offrire comfort e relax dopo una giornata tra arte, shopping e passeggiate senza meta.

  Il vero gioiello della casa è il patio privato, uno spazio intimo e tranquillo dove concedersi una colazione lenta, un momento di lettura o un calice di vino la sera, lontani dal ritmo frenetico della città, pur essendo nel suo cuore pulsante.

  La posizione è semplicemente impareggiabile: tutto è raggiungibile a piedi. Fontana di Trevi, Piazza Navona, il Pantheon, Trinità dei Monti e le vie dello shopping più esclusive sono a pochi minuti di distanza. Non servono mezzi, solo il piacere di scoprire Roma passo dopo passo.

  Una casa elegante e accogliente, pensata per chi desidera un soggiorno raffinato, centrale e autentico, senza rinunciare alla quiete e alla privacy`,
    descriptionEn: `In the most authentic heart of Rome, just steps from the Spanish Steps, this holiday home is a haven of elegance and tranquility, ideal for experiencing the city like a true Roman.

Located on the first floor of a refined and very quiet building with elevator, the apartment hosts up to 4 guests—perfect for families, couples, or small groups of friends. The spaces are bright, carefully curated, and designed to offer comfort and relaxation after a day of art, shopping, and wandering.

The real jewel is the private patio, an intimate and peaceful space to enjoy a slow breakfast, a moment of reading, or a glass of wine in the evening—away from the city’s bustle yet still in its beating heart.

The location is simply unbeatable: everything is within walking distance. Trevi Fountain, Piazza Navona, the Pantheon, Trinità dei Monti, and the most exclusive shopping streets are just minutes away. No transport needed—only the pleasure of discovering Rome step by step.

An elegant and welcoming home for those who want a refined, central, and authentic stay without giving up peace and privacy.`,
    guests: 4,
    bedrooms: 1,
    beds: 2,
    sqm: 60,
    img_preview: "./spanish_steps/preview.jpg",
    images: [],
    location: "Via Veneto"
  },
  {
    slug: "trastevere-experience",
    name: "Trastevere Experience",
    shortDescription: "Appartamento moderno nel cuore di Trastevere, a due passi da Piazza Trilussa: stile, comfort e quiete per vivere Roma a piedi.",
    shortDescriptionEn: "Modern apartment in the heart of Trastevere, steps from Piazza Trilussa—style, comfort, and calm for exploring on foot.",
    description: `Nel cuore più autentico e vivace di Roma, a pochi passi da Piazza Trilussa e accanto alla Basilica di Santa Maria in Trastevere, questa casa vacanza moderna è il punto di partenza ideale per vivere la città tra tradizione, bellezza e atmosfere senza tempo.

L’appartamento si trova nel cuore di Trastevere, considerato da molti il quartiere più affascinante di Roma, famoso per le sue piazze, i vicoli acciottolati, i ristoranti storici e la vita romana più genuina. Pur essendo immersa in uno dei quartieri più amati e frequentati, la casa è inserita in un contesto tranquillo, perfetto per il riposo e il relax.

Gli ambienti, dal design moderno e curato, possono ospitare fino a 4 persone e sono ideali sia per famiglie sia per coppie di amici. La presenza di due bagni garantisce comfort, praticità e privacy durante il soggiorno, rendendo la casa adatta anche a permanenze più lunghe.

Da qui Roma si scopre facilmente a piedi: il centro storico, Campo de’ Fiori, il Tevere e molte delle principali attrazioni sono a pochi minuti di distanza. Tornare a casa, la sera, significa ritrovare quiete e comfort, dopo aver vissuto l’energia unica di Trastevere.

Una casa moderna e accogliente, pensata per chi desidera vivere Roma in modo autentico, senza rinunciare allo stile, alla comodità e alla tranquillità.`,
    descriptionEn: `In the most authentic and lively heart of Rome, just steps from Piazza Trilussa and beside the Basilica of Santa Maria in Trastevere, this modern holiday home is the ideal starting point to experience the city between tradition, beauty, and timeless atmospheres.

The apartment is in the heart of Trastevere—often considered Rome’s most charming district—famous for its squares, cobblestone alleys, historic restaurants, and genuine Roman life. While immersed in one of the city’s most beloved neighborhoods, the home sits in a quiet setting, perfect for rest and relaxation.

The modern, well‑designed interiors host up to 4 guests and are ideal for families or couples of friends. Two bathrooms ensure comfort, practicality, and privacy, making the home suitable for longer stays as well.

From here, Rome is easy to discover on foot: the historic center, Campo de’ Fiori, the Tiber, and many major attractions are just minutes away. Coming home in the evening means returning to calm and comfort after experiencing Trastevere’s unique energy.

A modern and welcoming home for those who want to live Rome authentically without giving up style, comfort, and tranquility.`,
    guests: 4,
    bedrooms: 1,
    sqm: 50,
    beds: 2,
    img_preview: "./trastevere_experience/preview.jpg",
    images: [],
    location: "Trastevere"
  },
  {
    slug: "appartamento-trastevere",
    name: "Appartamento Trastevere",
    shortDescription: "Casetta intima nel cuore di Trastevere, perfetta per un soggiorno romantico tra vicoli storici e atmosfere autentiche.",
    shortDescriptionEn: "Cozy Trastevere hideaway, perfect for a romantic stay among historic lanes and authentic Roman charm.",
    description: `Nel cuore di Trastevere, questa deliziosa casetta è una vera chicca romana, un rifugio intimo e accogliente che regala la sensazione autentica di sentirsi a casa, lontano da casa.

Gli ambienti caldi e curati avvolgono gli ospiti in un’atmosfera raccolta e rilassante, perfetta per una fuga d’amore nella Città Eterna, ma ideale anche per una coppia di amici o una piccola famiglia in cerca di comfort e autenticità.

Situata in uno dei quartieri più affascinanti di Roma, tra vicoli storici, piazzette animate e botteghe senza tempo, la casa permette di vivere Trastevere nella sua essenza più vera. Allo stesso tempo, offre la tranquillità necessaria per godersi momenti di quiete dopo una giornata trascorsa a esplorare la città.

Una casetta accogliente come il calore di casa, pensata per chi desidera un soggiorno romantico, intimo e genuino, immerso nella bellezza e nell’anima di Roma`,
    descriptionEn: `In the heart of Trastevere, this charming little home is a true Roman gem—an intimate and welcoming retreat that makes you feel at home, away from home.

Warm, curated interiors wrap guests in a cozy and relaxing atmosphere, perfect for a romantic escape in the Eternal City, yet also ideal for a couple of friends or a small family seeking comfort and authenticity.

Set in one of Rome’s most fascinating neighborhoods, among historic lanes, lively little squares, and timeless shops, the home lets you experience Trastevere at its most authentic. At the same time, it offers the calm you need to enjoy quiet moments after a day of exploring the city.

A welcoming home with the warmth of home, designed for those who want a romantic, intimate, and genuine stay, immersed in the beauty and soul of Rome.`,
    guests: 0,
    bedrooms: 0,
    img_preview: "./temporary_preview.jpg",
    beds: 0,
    sqm: 0,
    images: [],
    location: ""
  },
];

export const getApartmentBySlug = (slug: string) =>
  apartments.find((a) => a.slug === slug);
