import type { Metadata } from "next";
import { PhoneButton, WhatsAppButton } from "@/components/CtaButtons";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { company, reviews, hasPublishedReviews } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews & Ervaringen | Stolk Tuinprojecten",
  description:
    "Lees wat tevreden klanten vertellen over hun ervaringen met Lucas Stolk en Stolk Tuinprojecten in Wijngaarden en omstreken.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews & Ervaringen | Stolk Tuinprojecten",
    description:
      "Bekijk beoordelingen van eerdere tuinprojecten door Stolk Tuinprojecten.",
    url: "/reviews",
  },
};

const expectations = [
  { title: "Persoonlijk contact", text: "U schakelt rechtstreeks met Lucas Stolk, niet met een tussenpersoon." },
  { title: "Duidelijke afspraken", text: "Vooraf helderheid over de planning, kosten en werkzaamheden." },
  { title: "Eén aanspreekpunt", text: "Dezelfde hovenier begeleidt ontwerp én complete aanleg." },
  { title: "Aandacht voor de afwerking", text: "Zorgvuldig werk met oog voor detail, van grondwerk tot oplevering." },
];

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1 text-moss" aria-label={`${rating} van de 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "fill-sand/40"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: "Reviews", item: `${company.siteUrl}/reviews` },
    ],
  };

  const reviewsJsonLd = hasPublishedReviews
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: company.name,
        image: `${company.siteUrl}/images/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.street,
          addressLocality: company.city,
          postalCode: company.postalCode,
          addressCountry: "NL",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: reviews.length,
          bestRating: "5",
          worstRating: "1",
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          datePublished: r.date,
          reviewBody: r.text,
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: "5",
          },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {reviewsJsonLd && <JsonLd data={reviewsJsonLd} />}

      {/* 1. Header & Samenvatting */}
      <Section tone="linen">
        <div className="max-w-[68ch]">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
            Ervaringen van klanten
          </p>
          <h1 className="mt-3 text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.04] text-forest-deep">
            Wat opdrachtgevers vertellen
          </h1>
          <p className="mt-6 font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
            Van eerste adviesgesprek tot de complete oplevering van de tuin.
            Lees hoe bewoners en bedrijven in de regio Wijngaarden onze samenwerking hebben ervaren.
          </p>
        </div>

        {/* Score Banner Card */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-sand bg-linen-warm/60 p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-forest-deep text-2xl font-bold text-linen font-display">
              5.0
            </div>
            <div>
              <StarRating rating={5} />
              <p className="mt-1 font-sans text-sm font-medium text-forest-deep">
                Uitstekende beoordeling door onze klanten
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Review Grid */}
      <Section tone="linen" className="!pt-0">
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-sand/80 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <StarRating rating={review.rating} />
                  <span className="font-sans text-xs text-charcoal/50">
                    {new Date(review.date).toLocaleDateString("nl-NL", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="mt-5 font-sans text-[0.98rem] leading-relaxed text-charcoal/90 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-sand/50 pt-4">
                <p className="font-display text-lg font-medium text-forest-deep">
                  {review.author}
                </p>
                <p className="font-sans text-xs text-moss font-medium">
                  {review.location} • <span className="text-charcoal/70 font-normal">{review.projectType}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 3. Wat u kunt verwachten */}
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

      {/* 4. CTA */}
      <Section tone="linen">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[22ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1] text-forest-deep">
              Zelf een tuinproject bespreken?
            </h2>
            <p className="mt-3 max-w-[44ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/80">
              Neem gerust contact op voor een vrijblijvende kennismaking.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PhoneButton />
            <WhatsAppButton />
          </div>
        </div>
      </Section>
    </>
  );
}
