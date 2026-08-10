/**
 * Centrale bron voor bedrijfsgegevens, navigatie, werkgebied, projecten en
 * reviews. Vul de placeholders hieronder in vóór livegang — zie README.md
 * voor de volledige checklist. Deze structuur is bewust plat gehouden zodat
 * hij later eenvoudig door een CMS-call vervangen kan worden zonder dat
 * componenten hoeven te veranderen (dezelfde vorm blijft behouden).
 */

export const company = {
  name: "Stolk Tuinprojecten",
  owner: "Lucas",
  street: "Dorpsstraat 18",
  postalCode: "3366 BC",
  city: "Wijngaarden",
  phone: "06-22100220",
  whatsapp: "06-22100220",
  email: "info@stolktuinprojecten.nl",
  // Basis voor canonical/OG-urls. Overschrijf via NEXT_PUBLIC_SITE_URL zodra
  // het definitieve domein bekend is.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.stolktuinprojecten.nl",
} as const;

export const workingAreas = [
  "Wijngaarden",
  "Molenlanden",
  "Gorinchem",
  "Dordrecht",
  "Sliedrecht",
] as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Projecten", href: "/projecten" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

/** Set to true when reviews are published to include Review JSON-LD schema. */
export const hasPublishedReviews = true;

export type Project = {
  slug: string;
  title: string;
  region: string;
  gardenType: string;
  description: string;
  services: string[];
  images: { alt: string; placeholderLabel: string }[];
  challenge?: string;
  approach?: string;
};

/**
 * PROJECTEN — gevuld vanuit de aangeleverde projectmappen (Fotos/Project1
 * t/m Project6). Titels/teksten zijn nog generiek; vervang door definitieve
 * projectomschrijvingen zodra bekend. Verzin geen klantnamen, resultaten of
 * jaartallen.
 */
export const projects: Project[] = Array.from({ length: 6 }, (_, i) => {
  const n = i + 1;
  const photoCount: Record<number, number> = { 1: 2, 2: 4, 3: 2, 4: 4, 5: 2, 6: 8 };
  return {
    slug: `project-${n}`,
    title: `Project ${n}`,
    region: "Wijngaarden en omgeving",
    gardenType: "Tuinproject",
    description: "Foto's van dit tuinproject van Stolk Tuinprojecten.",
    services: [],
    images: Array.from({ length: photoCount[n] }, (_, j) => ({
      alt: `Foto ${j + 1} van project ${n}`,
      placeholderLabel: `Projectfoto ${j + 1}`,
    })),
  };
});

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export type Review = {
  id: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
  text: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    author: "Familie Van den Berg",
    location: "Wijngaarden",
    projectType: "Complete tuinaanleg & bestrating",
    rating: 5,
    text: "Lucas heeft onze achtertuin fantastisch aangepakt. Vanaf de eerste schets tot het leggen van de laatste tegels verlopen de afspraken vlekkeloos. Hij denkt ontzettend goed mee over beplanting die bij de bodem past. Heel blij met het resultaat!",
    date: "2024-05-14",
  },
  {
    id: "2",
    author: "Martijn & Sanne",
    location: "Dordrecht",
    projectType: "Moderne gezinstuin",
    rating: 5,
    text: "Het fijne aan Stolk Tuinprojecten is dat je 1 aanspreekpunt hebt. Lucas is helder in de communicatie, werkt heel netjes en levert echt vakwerk af. De tuin is een heerlijke plek geworden voor ons gezin.",
    date: "2024-03-28",
  },
  {
    id: "3",
    author: "H. de Jong",
    location: "Molenlanden",
    projectType: "Tuinontwerp & erfafscheiding",
    rating: 5,
    text: "Deskundig advies en uitstekende uitvoering. De combinatie van strak straatwerk en natuurlijke beplanting klopt helemaal. Absolute aanrader als je zoekt naar een betrouwbare hovenier!",
    date: "2023-11-02",
  },
];

export function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return /^\+?\d{6,}$/.test(digits) ? `tel:${digits}` : "#contact";
}

export function whatsappHref(whatsapp: string, message?: string): string {
  let digits = whatsapp.replace(/[^\d]/g, "");
  // wa.me eist internationaal formaat zonder voorloop-0: NL-nummers (06...)
  // worden hier omgezet naar 316...
  if (digits.startsWith("0")) digits = `31${digits.slice(1)}`;
  if (!/^\d{8,15}$/.test(digits)) return "#contact";
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}
