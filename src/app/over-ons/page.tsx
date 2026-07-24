import type { Metadata } from "next";
import { PhoneButton, WhatsAppButton } from "@/components/CtaButtons";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { company, workingAreas } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Over Lucas Stolk | Hovenier vanuit Wijngaarden",
  description:
    "Lucas Stolk is eigenaar van Stolk Tuinprojecten en uw vaste aanspreekpunt voor tuinontwerp en tuinaanleg, werkzaam vanuit Wijngaarden.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over Lucas Stolk | Hovenier vanuit Wijngaarden",
    description:
      "Eigenaar van Stolk Tuinprojecten, uw vaste aanspreekpunt voor tuinontwerp en aanleg.",
    url: "/over-ons",
  },
};

const steps = [
  { title: "Kennismaken", text: "Een eerste gesprek over uw ideeën en de mogelijkheden." },
  {
    title: "Wensen en locatie bespreken",
    text: "Samen kijken naar de plek zelf en wat u er dagelijks van verwacht.",
  },
  {
    title: "Ontwerp en voorstel",
    text: "Een ontwerp dat uw wensen vertaalt naar een praktische indeling.",
  },
  {
    title: "Voorbereiding en aanleg",
    text: "Grondwerk, bestrating, beplanting en de overige aanleg, stap voor stap.",
  },
  { title: "Oplevering", text: "Een nette overdracht van de afgeronde tuin." },
];

const values = [
  { title: "Aandacht voor de plek", text: "Elk ontwerp begint bij de tuin en de omgeving zelf." },
  { title: "Heldere afspraken", text: "U weet vooraf waar u aan toe bent, ook over de planning." },
  {
    title: "Vakwerk van ontwerp tot oplevering",
    text: "Dezelfde hovenier begeleidt het hele traject.",
  },
  { title: "Bereikbaar en persoonlijk", text: "Rechtstreeks contact, zonder tussenpersonen." },
];

export default function OverOnsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: "Over ons", item: `${company.siteUrl}/over-ons` },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: company.owner,
    jobTitle: "Eigenaar",
    worksFor: { "@id": `${company.siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={personJsonLd} />

      {/* 1. Intro met grote foto */}
      <Section tone="linen" className="!pb-0">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center">
          <PlaceholderImage
            src="lucas-stolk-planting.png"
            alt="Lucas Stolk aan het werk in de tuin, met aandacht aan het planten"
            aspect="4/5"
            priority
            framed
            photo
          />
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
              Hovenier vanuit Wijngaarden
            </p>
            <h1 className="mt-4 max-w-[16ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] text-forest-deep">
              {company.owner}
            </h1>
            <p className="mt-6 max-w-[48ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
              Eigenaar van Stolk Tuinprojecten en uw vaste aanspreekpunt voor
              tuinontwerp en complete tuinaanleg — voor particulieren en bedrijven
              in en rond Wijngaarden.
            </p>
          </div>
        </div>
      </Section>

      {/* 2. Persoonlijke visie */}
      <Section tone="linen">
        <div className="max-w-[62ch]">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
            Eén aanspreekpunt, van schets tot oplevering
          </h2>
          <p className="mt-6 font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
            Ik geloof dat een tuin het beste wordt als ontwerp en aanleg in één
            hand blijven. Zo blijft de lijn tussen wat is bedacht en wat wordt
            uitgevoerd helder — voor u, en voor mij.
          </p>
          <p className="mt-4 font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
            Daarom ben ik bij elk project zelf uw aanspreekpunt, van het eerste
            gesprek tot de laatste plant in de grond.
          </p>
        </div>
      </Section>

      {/* 3. Zo verloopt samenwerking */}
      <Section tone="forest">
        <h2 className="max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
          Zo verloopt de samenwerking
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-linen/15 pt-6">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-moss-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-lg font-medium">{step.title}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-linen/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Waarden */}
      <Section tone="linen">
        <h2 className="max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
          Waarden
        </h2>
        <ul className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title} className="border-t border-sand pt-6">
              <p className="font-display text-xl font-medium text-forest-deep">{value.title}</p>
              <p className="mt-2 max-w-[38ch] font-sans text-sm leading-relaxed text-charcoal/75">
                {value.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. Werkgebied */}
      <Section tone="linen" className="!pt-0">
        <div className="max-w-[62ch] border-t border-sand pt-12">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15] text-forest-deep">
            Werkgebied
          </h2>
          <p className="mt-4 font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
            Werkzaam vanuit {company.city}, actief in {workingAreas.slice(0, -1).join(", ")} en{" "}
            {workingAreas.at(-1)}.
          </p>
        </div>
      </Section>

      {/* 6. Bel-CTA */}
      <Section tone="forest">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[22ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
              Liever direct even overleggen?
            </h2>
            <p className="mt-4 max-w-[44ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
              Bel of app rechtstreeks met Lucas Stolk.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PhoneButton />
            <WhatsAppButton tone="on-forest" />
          </div>
        </div>
      </Section>
    </>
  );
}
