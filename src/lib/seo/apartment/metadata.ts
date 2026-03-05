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

  const title = `${aptName} | House of Rome`;

  const description =
    lang === "it"
      ? `Scopri ${aptName}, appartamento a Roma firmato House of Rome. Verifica disponibilità e prenota online.`
      : `${aptName} is a fully equipped apartment in Rome by House of Rome. Check availability and book online.`;

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
