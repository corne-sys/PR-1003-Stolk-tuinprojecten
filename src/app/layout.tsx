import type { Metadata } from "next";
import { Petrona, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { company, workingAreas } from "@/lib/site-config";

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Hovenier Wijngaarden`,
    template: `%s`,
  },
  description:
    "Stolk Tuinprojecten verzorgt tuinontwerp en complete tuinaanleg in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: company.name,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    "@id": `${company.siteUrl}/#organization`,
    name: company.name,
    url: company.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      postalCode: company.postalCode,
      addressLocality: company.city,
      addressCountry: "NL",
    },
    areaServed: workingAreas.map((area) => ({ "@type": "City", name: area })),
    founder: {
      "@type": "Person",
      name: company.owner,
    },
    ...(company.email && !company.email.startsWith("[") ? { email: company.email } : {}),
    ...(company.phone && !company.phone.startsWith("[") ? { telephone: company.phone } : {}),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.siteUrl}/#website`,
    url: company.siteUrl,
    name: company.name,
    publisher: { "@id": `${company.siteUrl}/#organization` },
    inLanguage: "nl-NL",
  };

  return (
    <html
      lang="nl"
      className={`${petrona.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[6px] focus:bg-linen focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-forest-deep"
        >
          Ga naar inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
