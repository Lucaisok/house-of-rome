import type { Locale } from "@/lib/i18n";

export const siteContent: Record<
  Locale,
  {
    home: {
      title: string;
      subtitle: string;
    };
  }
> = {
  en: {
    home: {
      title: "House of Rome",
      subtitle: "Carefully selected apartments in the heart of Rome",
    },
  },
  it: {
    home: {
      title: "House of Rome",
      subtitle: "Appartamenti selezionati con cura nel cuore di Roma",
    },
  },
};
