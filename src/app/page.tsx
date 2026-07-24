import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneButton, WhatsAppButton } from "@/components/CtaButtons";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { company, projects, workingAreas } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hovenier Wijngaarden | Tuinontwerp & Tuinaanleg | Stolk",
  description:
    "Stolk Tuinprojecten verzorgt tuinontwerp en complete tuinaanleg in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht. Bel direct met Lucas.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hovenier Wijngaarden | Tuinontwerp & Tuinaanleg | Stolk",
    description:
      "Tuinontwerp en complete tuinaanleg in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht.",
    url: "/",
  },
};

const whyPoints = [
  {
    title: "Persoonlijke aanpak",
    text: "Uw wensen en de plek zelf zijn het uitgangspunt, niet een standaard pakket.",
  },
  {
    title: "Eén vast aanspreekpunt",
    text: "U schakelt gedurende het hele traject rechtstreeks met Lucas Stolk.",
  },
  {
    title: "Ontwerp en aanleg als geheel",
    text: "Van eerste schets tot opgeleverde tuin bij één en dezelfde hovenier.",
  },
  {
    title: "Betrouwbare communicatie",
    text: "Heldere afspraken over planning en werkzaamheden, zonder verrassingen.",
  },
];

export default function HomePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hovenier Wijngaarden | Tuinontwerp & Tuinaanleg",
    url: company.siteUrl,
    about: { "@id": `${company.siteUrl}/#organization` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "In welke regio werkt Stolk Tuinprojecten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stolk Tuinprojecten werkt vanuit Wijngaarden in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik terecht voor zowel tuinontwerp als aanleg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Stolk Tuinprojecten verzorgt zowel het ontwerp als de complete aanleg, met Lucas Stolk als vast aanspreekpunt door het hele traject.",
        },
      },
      {
        "@type": "Question",
        name: "Werkt Stolk Tuinprojecten voor particulieren en bedrijven?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, zowel particulieren als bedrijven kunnen bij Stolk Tuinprojecten terecht.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik direct telefonisch overleggen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Bel of app rechtstreeks met Lucas Stolk om uw tuinplannen te bespreken.",
        },
      },
      {
        "@type": "Question",
        name: "Worden ook kleine tuinen ontworpen en aangelegd?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, zowel compacte stadstuinen als ruime landelijke tuinen worden ontworpen en aangelegd.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-linen">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
              Hovenier vanuit Wijngaarden
            </p>
            <h1 className="mt-4 max-w-[16ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] tracking-[-0.01em] text-forest-deep">
              Doordachte tuinen, vakkundig aangelegd
            </h1>
            <p className="mt-6 max-w-[52ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
              Stolk Tuinprojecten ontwerpt en realiseert landelijke en moderne tuinen
              voor particulieren en bedrijven in Wijngaarden, Molenlanden en omgeving.
            </p>

            {/* Knopen op desktop onder de tekst, op mobiel verborgen en onder de foto geplaatst */}
            <div className="mt-8 hidden flex-col gap-3 sm:flex-row lg:flex">
              <PhoneButton />
              <WhatsAppButton />
            </div>
            <p className="mt-5 hidden font-sans text-sm text-charcoal/60 lg:block">
              Persoonlijk contact met Lucas Stolk
            </p>
          </div>

          <div>
            {/* Foto aangeleverd door klant. */}
            <div className="shadow-image-frame relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/photos/hero-garden.png"
                alt="Verzorgde tuin met gazon, border en zitje onder bomen"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>

            {/* Op mobiel komen de knoppen direct onder de foto */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:hidden">
              <PhoneButton />
              <WhatsAppButton />
            </div>
            <p className="mt-4 font-sans text-sm text-charcoal/60 lg:hidden">
              Persoonlijk contact met Lucas Stolk
            </p>
          </div>
        </div>
      </section>

      {/* 2. Korte positionering */}
      <Section tone="linen">
        <div className="max-w-[62ch]">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
            Tuinontwerp en complete aanleg, van begin tot eind bij één hovenier
          </h2>
          <p className="mt-6 font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
            Stolk Tuinprojecten combineert het ontwerp van uw tuin met de volledige
            aanleg ervan. Geen wisselende contactpersonen en geen losse partijen
            die op elkaar moeten wachten: Lucas Stolk denkt mee vanaf de eerste
            schets tot en met de oplevering.
          </p>
          <p className="mt-4 font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
            Die persoonlijke aanpak, met één vast aanspreekpunt, zorgt voor een
            aanleg die aansluit bij wat u werkelijk voor ogen heeft — en bij hoe u
            de tuin dagelijks gaat gebruiken.
          </p>
        </div>
      </Section>

      {/* 3. Diensten */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-moss-soft">
              01
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
              Tuinontwerp
            </h2>
            <p className="mt-5 max-w-[42ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
              Uw wensen vertaald naar een praktisch ontwerp: een indeling die
              logisch aanvoelt, beplanting die bij de plek past en materialen die
              tijd doorstaan. Steeds met oog voor de balans tussen uitstraling en
              dagelijks gebruik.
            </p>
          </div>
          <div className="border-t border-linen/15 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <span className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-moss-soft">
              02
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
              Complete tuinaanleg
            </h2>
            <p className="mt-5 max-w-[42ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
              Van voorbereiding en grondwerk tot bestrating, beplanting, gazon en
              relevante houtwerk-onderdelen — netjes uitgevoerd en netjes
              opgeleverd. De precieze uitvoeringsmogelijkheden voor uw situatie
              bespreken we vooraf samen.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Voor kleine en grote tuinen */}
      <Section tone="linen">
        <h2 className="max-w-[28ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
          Passend bij elke tuin, klein of groot
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <PlaceholderImage
              src="compact-garden.png"
              alt="Compacte stadstuin met doordachte indeling"
              aspect="3/2"
              photo
            />
            <p className="mt-3 font-sans text-sm text-charcoal/70">Compacte stadstuin</p>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderImage
              src="spacious-garden.png"
              alt="Ruime landelijke tuin met natuurlijke beplanting"
              aspect="4/3"
              photo
            />
            <p className="mt-3 font-sans text-sm text-charcoal/70">Ruime landelijke tuin</p>
          </div>
          <div className="lg:col-span-3">
            <PlaceholderImage
              src="business-garden.png"
              alt="Zakelijke buitenruimte met representatief terras"
              aspect="3/2"
              photo
            />
            <p className="mt-3 font-sans text-sm text-charcoal/70">Zakelijke buitenruimte</p>
          </div>
        </div>
      </Section>

      {/* 5. Waarom Stolk */}
      <Section tone="forest">
        <h2 className="max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
          Waarom Stolk Tuinprojecten
        </h2>
        <ul className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <li key={point.title} className="border-t border-linen/15 pt-6">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <path
                  d="M4 20C10 20 11 12 15 12C18 12 19 6 22 6"
                  stroke="var(--color-moss-soft)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-4 font-display text-xl font-medium">{point.title}</p>
              <p className="mt-2 max-w-[36ch] font-sans text-sm leading-relaxed text-linen/80">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Uitgelichte projecten */}
      <Section tone="linen">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
            Uitgelichte projecten
          </h2>
          <Link
            href="/projecten"
            className="font-sans text-sm font-medium text-forest-deep underline decoration-moss decoration-1 underline-offset-4 hover:text-moss"
          >
            Alle projecten bekijken
          </Link>
        </div>
        <p className="mt-3 max-w-[60ch] font-sans text-sm text-charcoal/60">
          Ter voorbereiding getoonde placeholders — vervang titels, tekst en
          foto&apos;s door echte projecten vóór livegang.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projecten/${project.slug}`}
              className="group block"
            >
              <PlaceholderImage
                src={
                  i === 0
                    ? "project-molenlanden-1.jpg"
                    : i === 1
                      ? "project-dordrecht-1.jpg"
                      : "project-gorinchem-1.jpg"
                }
                alt={project.images[0]?.alt ?? project.title}
                aspect="4/3"
                photo
              />
              <p className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.1em] text-moss">
                {project.region}
              </p>
              <p className="mt-1 font-display text-xl font-medium text-forest-deep group-hover:text-moss">
                {project.title}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. Werkgebied + FAQ */}
      <Section tone="linen">
        <div className="grid gap-14 lg:grid-cols-[5fr_7fr]">
          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
              Werkgebied
            </h2>
            <p className="mt-5 max-w-[42ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
              Vanuit Wijngaarden is Stolk Tuinprojecten actief in{" "}
              {workingAreas.slice(0, -1).join(", ")} en {workingAreas.at(-1)}. Voor
              tuinontwerp en aanleg in en rond deze omgeving bent u aan het juiste
              adres.
            </p>
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15] text-forest-deep">
              Veelgestelde vragen
            </h2>
            <div className="mt-6">
              <Faq />
            </div>
          </div>
        </div>
      </Section>

      {/* 8. CTA */}
      <Section tone="forest">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
              Plannen voor een nieuwe tuin?
            </h2>
            <p className="mt-4 max-w-[48ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
              Bespreek uw wensen rechtstreeks met Lucas Stolk.
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
