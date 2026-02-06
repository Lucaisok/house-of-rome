export type Apartment = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  guests: number;
  bedrooms: number;
  image: string;
};

export const apartments: Apartment[] = [
  {
    slug: "pretty-vatican-house",
    name: "Pretty Vatican House",
    shortDescription: "",
    description: "",
    guests: 0,
    bedrooms: 0,
    image: "",
  },
  {
    slug: "spanish-steps-apartment-terrace",
    name: "Spanish Steps Apartment & Terrace",
    shortDescription: "",
    description: "",
    guests: 0,
    bedrooms: 0,
    image: "",
  },
  {
    slug: "trastevere-experience",
    name: "Trastevere Experience",
    shortDescription: "",
    description: "",
    guests: 0,
    bedrooms: 0,
    image: "",
  },
  {
    slug: "appartamento-trastevere",
    name: "Appartamento Trastevere",
    shortDescription: "",
    description: "",
    guests: 0,
    bedrooms: 0,
    image: "",
  },
];

export const getApartmentBySlug = (slug: string) =>
  apartments.find((a) => a.slug === slug);
