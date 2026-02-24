import { Contacts } from "@/components/contact/contacts/Contacts";
import { Form } from "@/components/contact/form/Form";
import { HeaderSection } from "@/components/contact/headerSection/HeaderSection";
import { assertLocale } from "@/lib/i18n";
import { aboutMetadata } from "@/lib/seo/about/metadata";

export const generateMetadata = aboutMetadata;

export const About = async ({
  params,
}: {
  params: { lang: string; } | Promise<{ lang: string; }>;
}) => {
  const { lang } = await params;
  const locale = assertLocale(lang);

  return (
    <main>
      <HeaderSection locale={locale} />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Contacts locale={locale} />
            <Form locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
