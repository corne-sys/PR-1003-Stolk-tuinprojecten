import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PhoneButton, WhatsAppButton } from "@/components/CtaButtons";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { company, getProjectBySlug, projects } from "@/lib/site-config";

const projectImageFiles: Record<string, string[]> = {
  "landelijke-tuin-molenlanden": ["project-molenlanden-1.jpg"],
  "moderne-gezinstuin-dordrecht": ["project-dordrecht-1.jpg"],
  "compacte-tuin-gorinchem": ["project-gorinchem-1.jpg"],
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} | Stolk Tuinprojecten`;
  const description = project.description;

  return {
    title,
    description,
    alternates: { canonical: `/projecten/${project.slug}` },
    openGraph: { title, description, url: `/projecten/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const images = projectImageFiles[project.slug] ?? [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: "Projecten", item: `${company.siteUrl}/projecten` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${company.siteUrl}/projecten/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <Section tone="linen" className="!pb-8">
        <nav aria-label="Kruimelpad" className="font-sans text-sm text-charcoal/60">
          <Link href="/projecten" className="hover:text-forest-deep">
            Projecten
          </Link>{" "}
          / {project.title}
        </nav>
        <p className="mt-6 font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
          {project.region} · {project.gardenType}
        </p>
        <h1 className="mt-4 max-w-[26ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.02] text-forest-deep">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[60ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
          {project.description}
        </p>
      </Section>

      <Section tone="linen" className="!pt-0">
        <div className="border-t border-sand pt-12">
          {images.map((src, i) => (
            <PlaceholderImage
              key={src}
              src={src}
              alt={project.images[i]?.alt ?? project.title}
              aspect="16/9"
              framed
              photo
            />
          ))}
        </div>
      </Section>

      {(project.challenge || project.approach) && (
        <Section tone="forest">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {project.challenge && (
              <div>
                <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15]">
                  De uitdaging
                </h2>
                <p className="mt-4 max-w-[46ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
                  {project.challenge}
                </p>
              </div>
            )}
            {project.approach && (
              <div className={project.challenge ? "border-t border-linen/15 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0" : ""}>
                <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15]">
                  De aanpak
                </h2>
                <p className="mt-4 max-w-[46ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
                  {project.approach}
                </p>
              </div>
            )}
          </div>
        </Section>
      )}

      <Section tone="linen">
        <h2 className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-moss">
          Diensten bij dit project
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {project.services.map((service) => (
            <li
              key={service}
              className="rounded-[6px] border border-sand bg-linen-warm px-4 py-2 font-sans text-sm text-charcoal/80"
            >
              {service}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="forest">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[22ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-medium leading-[1.1]">
              Vergelijkbaar project in gedachten?
            </h2>
            <p className="mt-4 max-w-[44ch] font-sans text-[1.0625rem] leading-relaxed text-linen/85">
              Bespreek de mogelijkheden voor uw tuin rechtstreeks met Lucas Stolk.
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
