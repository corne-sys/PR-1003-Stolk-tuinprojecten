import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { company, projects } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projecten | Tuinontwerp & Tuinaanleg in de Regio",
  description:
    "Een overzicht van tuinontwerp- en tuinaanlegprojecten van Stolk Tuinprojecten in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht.",
  alternates: { canonical: "/projecten" },
  openGraph: {
    title: "Projecten | Stolk Tuinprojecten",
    description: "Tuinontwerp en tuinaanleg in de regio Wijngaarden.",
    url: "/projecten",
  },
};

const projectImages: Record<string, string> = {
  "project-1": "project-1-01.jpeg",
  "project-2": "project-2-01.jpeg",
  "project-3": "project-3-01.jpeg",
  "project-4": "project-4-01.jpeg",
  "project-5": "project-5-01.jpeg",
  "project-6": "project-6-07.jpeg",
};

export default function ProjectenPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: "Projecten", item: `${company.siteUrl}/projecten` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <Section tone="linen" className="!pb-8">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
          Tuinontwerp en tuinaanleg in de regio
        </p>
        <h1 className="mt-4 max-w-[22ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] text-forest-deep">
          Projecten
        </h1>
        <p className="mt-6 max-w-[60ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
          Onderstaande projecten zijn voorbereidende placeholders ter illustratie
          van de structuur. Titels, teksten en foto&apos;s worden vóór livegang
          vervangen door echte, afgeronde projecten.
        </p>
      </Section>

      <Section tone="linen" className="!pt-0">
        <div className="grid gap-10 border-t border-sand pt-12 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projecten/${project.slug}`} className="group block">
              <PlaceholderImage
                src={projectImages[project.slug] ?? "hero.svg"}
                alt={project.images[0]?.alt ?? project.title}
                aspect="4/3"
                photo={!!projectImages[project.slug]}
              />
              <p className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.1em] text-moss">
                {project.region} · {project.gardenType}
              </p>
              <p className="mt-1 font-display text-xl font-medium text-forest-deep group-hover:text-moss">
                {project.title}
              </p>
              <p className="mt-2 max-w-[42ch] font-sans text-sm leading-relaxed text-charcoal/70">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
