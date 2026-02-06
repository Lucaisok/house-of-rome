export type Apartment = {
  slug: string;
  name: string;
};

export const apartments: Apartment[] = [
  {
    slug: "pretty-vatican-house",
    name: "Pretty Vatican House",
  },
  {
    slug: "spanish-steps-apartment-terrace",
    name: "Spanish Steps Apartment & Terrace",
  },
  {
    slug: "trastevere-experience",
    name: "Trastevere Experience",
  },
  {
    slug: "appartamento-trastevere",
    name: "Appartamento Trastevere",
  },
];

export const getApartmentBySlug = (slug: string) =>
  apartments.find((a) => a.slug === slug);
