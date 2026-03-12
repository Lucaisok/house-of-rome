import type { Metadata } from "next";
import { assertLocale } from "@/lib/i18n";
import { makePageMetadata } from "../metadata";
import { getApartmentBySlug } from "@/content/apartments";

export const apartmentMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string; slug: string; }>;
}): Promise<Metadata> => {
  const { lang: raw, slug } = await params;
  const lang = assertLocale(raw);
  const apt = getApartmentBySlug(slug);
  const aptName = apt?.name ?? slug; // fallback only

  const publicPath = lang === "it" ? `/it/apartments/${slug}` : `/apartments/${slug}`;

  const title =
    lang === "it"
      ? `${aptName} – Appartamento in Affitto a Roma | House of Rome`
      : `${aptName} – Holiday Apartment for Rent in Rome | House of Rome`;

  const description =
    lang === "it"
      ? `Affitta ${aptName}, appartamento per vacanze a Roma${apt?.guests ? ` fino a ${apt.guests} ospiti` : ""}. Verifica disponibilità e prenota direttamente con House of Rome al miglior prezzo.`
      : `Rent ${aptName}, a holiday apartment in Rome by House of Rome${apt?.guests ? ` sleeping up to ${apt.guests} guests` : ""}. Check availability and book direct for the best rate.`;

  // Use apartment preview image for Open Graph
  // Convert relative public path to absolute path for OG image
  const ogImage = apt?.img_preview ? `/appartamento_${apt.slug.replace(/^appartamento-/, '')}/${apt.img_preview.split('/').pop()}` : undefined;

  return makePageMetadata({
    lang,
    publicPath,
    title,
    description,
    ...(ogImage && { image: ogImage }),
  });
};
