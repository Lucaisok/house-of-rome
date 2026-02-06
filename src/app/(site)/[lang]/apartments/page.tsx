import { assertLocale } from "@/lib/i18n";
import { apartmentsMetadata } from "@/lib/seo/apartments/metadata";

export const generateMetadata = apartmentsMetadata;

export const Apartments = async ({
  params,
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);
  return (
    <main>
      <h1>Apartments</h1>
      <p>Listing ({locale})</p>
    </main>
  );
};

export default Apartments;
