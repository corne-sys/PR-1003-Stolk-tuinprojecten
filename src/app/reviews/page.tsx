import type { Metadata } from "next";
import { PhoneButton, WhatsAppButton } from "@/components/CtaButtons";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews | Stolk Tuinprojecten",
  description:
    "Deze pagina wordt binnenkort aangevuld met ervaringen van opdrachtgevers van Stolk Tuinprojecten.",
  alternates: { canonical: "/reviews" },
};

const expectations = [
  { title: "Persoonlijk contact", text: "U schakelt rechtstreeks met Lucas Stolk, niet met een callcenter." },
  { title: "Duidelijke afspraken", text: "Vooraf helderheid over planning en werkzaamheden." },
  { title: "Eén aanspreekpunt", text: "Dezelfde hovenier begeleidt ontwerp én aanleg." },
  { title: "Aandacht voor nette uitvoering", text: "Zorgvuldig werk, van voorbereiding tot oplevering." },
];

export default function ReviewsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: "Reviews", item: `${company.siteUrl}/reviews` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <Section tone="linen">
        <h1 className="max-w-[22ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] text-forest-deep">
          Ervaringen met Stolk Tuinprojecten
        </h1>
        <p className="mt-6 max-w-[60ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
          Deze pagina wordt binnenkort aangevuld met ervaringen van
          opdrachtgevers.
        </p>
      </Section>

      <Section tone="forest">
        <h2 className="max-w-[26ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
          Wat u tijdens de samenwerking mag verwachten
        </h2>
        <ul className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2">
          {expectations.map((item) => (
            <li key={item.title} className="border-t border-linen/15 pt-6">
              <p className="font-display text-xl font-medium">{item.title}</p>
              <p className="mt-2 max-w-[36ch] font-sans text-sm leading-relaxed text-linen/80">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="linen">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-[22ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
            Zelf een tuinproject bespreken?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PhoneButton />
            <WhatsAppButton />
          </div>
        </div>
      </Section>
    </>
  );
}
