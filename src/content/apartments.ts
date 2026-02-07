export type Apartment = {
  slug: string;
  name: string;
  img_preview: string;
  shortDescription: string;
  description: string;
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
    description: `Grazioso e confortevole appartamento di recente realizzazione, a pochi passi dal Vaticano. L’alloggio è nuovo, accogliente e dotato di tutti i comfort.

Ideale per fino a 3 persone, perfetto sia per brevi soggiorni che per permanenze più lunghe, come una settimana o più. Lo stadio Olimpico è molto vicino e ben collegato. La metro Cipro (A) è proprio di fronte casa, così come le fermate degli autobus.

Zona ricca di servizi: supermercati, bar e ristoranti sotto casa.

Sarà un piacere accogliervi e farvi sentire come a casa!`,
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
    description: `Nel cuore più autentico di Roma, a pochi passi da Piazza di Spagna, questa casa vacanze è un rifugio di eleganza e tranquillità, ideale per vivere la città come veri romani.

  Situata al primo piano di un palazzo signorile e molto silenzioso, dotato di ascensore, la casa può ospitare fino a 4 persone, risultando perfetta per famiglie, coppie o piccoli gruppi di amici. Gli ambienti sono curati, luminosi e pensati per offrire comfort e relax dopo una giornata tra arte, shopping e passeggiate senza meta.

  Il vero gioiello della casa è il patio privato, uno spazio intimo e tranquillo dove concedersi una colazione lenta, un momento di lettura o un calice di vino la sera, lontani dal ritmo frenetico della città, pur essendo nel suo cuore pulsante.

  La posizione è semplicemente impareggiabile: tutto è raggiungibile a piedi. Fontana di Trevi, Piazza Navona, il Pantheon, Trinità dei Monti e le vie dello shopping più esclusive sono a pochi minuti di distanza. Non servono mezzi, solo il piacere di scoprire Roma passo dopo passo.

  Una casa elegante e accogliente, pensata per chi desidera un soggiorno raffinato, centrale e autentico, senza rinunciare alla quiete e alla privacy`,
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
    description: `Nel cuore più autentico e vivace di Roma, a pochi passi da Piazza Trilussa e accanto alla Basilica di Santa Maria in Trastevere, questa casa vacanza moderna è il punto di partenza ideale per vivere la città tra tradizione, bellezza e atmosfere senza tempo.

L’appartamento si trova nel cuore di Trastevere, considerato da molti il quartiere più affascinante di Roma, famoso per le sue piazze, i vicoli acciottolati, i ristoranti storici e la vita romana più genuina. Pur essendo immersa in uno dei quartieri più amati e frequentati, la casa è inserita in un contesto tranquillo, perfetto per il riposo e il relax.

Gli ambienti, dal design moderno e curato, possono ospitare fino a 4 persone e sono ideali sia per famiglie sia per coppie di amici. La presenza di due bagni garantisce comfort, praticità e privacy durante il soggiorno, rendendo la casa adatta anche a permanenze più lunghe.

Da qui Roma si scopre facilmente a piedi: il centro storico, Campo de’ Fiori, il Tevere e molte delle principali attrazioni sono a pochi minuti di distanza. Tornare a casa, la sera, significa ritrovare quiete e comfort, dopo aver vissuto l’energia unica di Trastevere.

Una casa moderna e accogliente, pensata per chi desidera vivere Roma in modo autentico, senza rinunciare allo stile, alla comodità e alla tranquillità.`,
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
    description: `Nel cuore di Trastevere, questa deliziosa casetta è una vera chicca romana, un rifugio intimo e accogliente che regala la sensazione autentica di sentirsi a casa, lontano da casa.

Gli ambienti caldi e curati avvolgono gli ospiti in un’atmosfera raccolta e rilassante, perfetta per una fuga d’amore nella Città Eterna, ma ideale anche per una coppia di amici o una piccola famiglia in cerca di comfort e autenticità.

Situata in uno dei quartieri più affascinanti di Roma, tra vicoli storici, piazzette animate e botteghe senza tempo, la casa permette di vivere Trastevere nella sua essenza più vera. Allo stesso tempo, offre la tranquillità necessaria per godersi momenti di quiete dopo una giornata trascorsa a esplorare la città.

Una casetta accogliente come il calore di casa, pensata per chi desidera un soggiorno romantico, intimo e genuino, immerso nella bellezza e nell’anima di Roma`,
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
