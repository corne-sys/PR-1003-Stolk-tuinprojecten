import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { company } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacyverklaring | ${company.name}`,
  description: `Privacyverklaring van ${company.name}.`,
  alternates: { canonical: "/privacyverklaring" },
  robots: { index: false, follow: true },
};

export default function PrivacyverklaringPage() {
  return (
    <Section tone="linen">
      <h1 className="max-w-[24ch] text-[clamp(2.25rem,4.5vw,3.5rem)] font-medium leading-[1.05] text-forest-deep">
        Privacyverklaring
      </h1>
      <div className="mt-8 max-w-[65ch] rounded-[6px] border border-sand bg-linen-warm p-8">
        <p className="font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
          Deze pagina is een placeholder. Vul hier vóór livegang een volledige
          privacyverklaring in — onder meer welke gegevens via het
          contactformulier worden verwerkt ({company.name} vraagt alleen naam,
          telefoonnummer en e-mailadres), met welk doel, hoe lang ze worden
          bewaard, en hoe bezoekers hun rechten (inzage, correctie,
          verwijdering) kunnen uitoefenen.
        </p>
      </div>
    </Section>
  );
}
