import type { Metadata } from "next";
import { PhoneButton, WhatsAppButton } from "@/components/CtaButtons";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { company, workingAreas } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Hovenier Wijngaarden",
  description:
    "Neem contact op met Stolk Tuinprojecten voor tuinontwerp en tuinaanleg in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Stolk Tuinprojecten",
    description: "Hovenier Wijngaarden — bel of app rechtstreeks met Lucas.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${company.siteUrl}/contact` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <Section tone="linen" className="!pb-8">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
          Hovenier Wijngaarden
        </p>
        <h1 className="mt-4 max-w-[20ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] text-forest-deep">
          Bespreek uw tuinplannen
        </h1>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PhoneButton />
          <WhatsAppButton />
        </div>
        <p className="mt-6 max-w-[50ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
          Werkzaam vanuit {company.city}, actief in {workingAreas.slice(0, -1).join(", ")} en{" "}
          {workingAreas.at(-1)}.
        </p>
      </Section>

      <Section tone="linen" className="!pt-0">
        <div className="grid gap-12 border-t border-sand pt-12 lg:grid-cols-[7fr_5fr]">
          <div>
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15] text-forest-deep">
              Stuur een bericht
            </h2>
            <div className="mt-6 max-w-[520px]">
              <ContactForm />
            </div>
          </div>

          <div className="rounded-[6px] border border-sand bg-linen-warm p-8">
            <h2 className="font-display text-xl font-medium text-forest-deep">Adresgegevens</h2>
            <ul className="mt-4 flex flex-col gap-1.5 font-sans text-[1.0625rem] text-charcoal/85">
              <li>{company.name}</li>
              <li>{company.owner}</li>
              <li>{company.street}</li>
              <li>
                {company.postalCode} {company.city}
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
