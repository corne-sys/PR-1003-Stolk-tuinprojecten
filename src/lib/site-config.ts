/**
 * Centrale bron voor bedrijfsgegevens, navigatie, werkgebied, projecten en
 * reviews. Vul de placeholders hieronder in vóór livegang — zie README.md
 * voor de volledige checklist. Deze structuur is bewust plat gehouden zodat
 * hij later eenvoudig door een CMS-call vervangen kan worden zonder dat
 * componenten hoeven te veranderen (dezelfde vorm blijft behouden).
 */

export const company = {
  name: "Stolk Tuinprojecten",
  owner: "Lucas Stolk",
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

/** Alleen `true` zodra echte, zichtbare reviews bestaan — bepaalt of
 * Review/AggregateRating structured data mag worden toegevoegd. */
export const hasPublishedReviews = false;

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
 * TIJDELIJKE PROJECTEN — placeholders ter voorbereiding van de structuur.
 * Vervang titels, teksten en afbeeldingen door echte projecten vóór
 * livegang. Verzin geen klantnamen, resultaten of jaartallen.
 */
export const projects: Project[] = [
  {
    slug: "landelijke-tuin-molenlanden",
    title: "Landelijke tuin in Molenlanden",
    region: "Molenlanden",
    gardenType: "Landelijke tuin",
    description:
      "Een ruime, landelijke tuin met aandacht voor natuurlijke beplanting en een rustige indeling die aansluit bij het open polderlandschap.",
    services: ["Tuinontwerp", "Grondwerk", "Beplanting", "Bestrating"],
    images: [
      { alt: "Landelijke tuin met natuurlijke beplanting in Molenlanden", placeholderLabel: "Projectfoto 1 — vervangen" },
      { alt: "Terras en border in een landelijke tuin", placeholderLabel: "Projectfoto 2 — vervangen" },
    ],
    challenge:
      "Voorbeeldrichting: een open, winderige polderkavel vroeg om beschutting zonder het landschapszicht weg te nemen.",
    approach:
      "Voorbeeldrichting: beplanting en erfafscheiding zijn zo gekozen dat ze beschutting bieden en toch bij het landschap passen.",
  },
  {
    slug: "moderne-gezinstuin-dordrecht",
    title: "Moderne gezinstuin regio Dordrecht",
    region: "Regio Dordrecht",
    gardenType: "Moderne gezinstuin",
    description:
      "Een strakke, moderne tuin voor een gezin, met een heldere indeling tussen terras, gazon en beplanting voor dagelijks gebruik.",
    services: ["Tuinontwerp", "Bestrating", "Gazon", "Beplanting"],
    images: [
      { alt: "Moderne gezinstuin met strak terras in regio Dordrecht", placeholderLabel: "Projectfoto 1 — vervangen" },
      { alt: "Gazon en beplanting in een moderne gezinstuin", placeholderLabel: "Projectfoto 2 — vervangen" },
    ],
    challenge:
      "Voorbeeldrichting: een compacte kavel moest zowel speelruimte als een representatief terras bieden.",
    approach:
      "Voorbeeldrichting: een heldere zonering verdeelt de tuin in vaste gebruiksplekken zonder het geheel klein te laten aanvoelen.",
  },
  {
    slug: "compacte-tuin-gorinchem",
    title: "Compacte tuin regio Gorinchem",
    region: "Regio Gorinchem",
    gardenType: "Compacte stadstuin",
    description:
      "Een kleine, goed doordachte tuin waarin elk vierkante meter is benut zonder dat de ruimte vol aanvoelt.",
    services: ["Tuinontwerp", "Bestrating", "Beplanting"],
    images: [
      { alt: "Compacte stadstuin met doordachte indeling in regio Gorinchem", placeholderLabel: "Projectfoto 1 — vervangen" },
    ],
    challenge:
      "Voorbeeldrichting: een kleine oppervlakte vroeg om een indeling die ruimtelijk aanvoelt.",
    approach:
      "Voorbeeldrichting: diagonale bestrating en verticale beplanting vergroten de beleving van de ruimte.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

/** Leeg totdat er echte, geverifieerde reviews zijn. Nooit vullen met
 * verzonnen beoordelingen. */
export const reviews: Review[] = [];

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
