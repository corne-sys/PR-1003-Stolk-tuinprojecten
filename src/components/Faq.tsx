export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "In welke regio werkt Stolk Tuinprojecten?",
    answer:
      "Stolk Tuinprojecten werkt vanuit Wijngaarden in Wijngaarden, Molenlanden, Gorinchem, Dordrecht en Sliedrecht.",
  },
  {
    question: "Kan ik terecht voor zowel tuinontwerp als aanleg?",
    answer:
      "Ja. Stolk Tuinprojecten verzorgt zowel het ontwerp als de complete aanleg, met Lucas Stolk als vast aanspreekpunt door het hele traject.",
  },
  {
    question: "Werkt Stolk Tuinprojecten voor particulieren en bedrijven?",
    answer: "Ja, zowel particulieren als bedrijven kunnen bij Stolk Tuinprojecten terecht.",
  },
  {
    question: "Kan ik direct telefonisch overleggen?",
    answer:
      "Ja. Bel of app rechtstreeks met Lucas Stolk om uw tuinplannen te bespreken.",
  },
  {
    question: "Worden ook kleine tuinen ontworpen en aangelegd?",
    answer:
      "Ja, zowel compacte stadstuinen als ruime landelijke tuinen worden ontworpen en aangelegd.",
  },
];

export function Faq({ tone = "linen" }: { tone?: "linen" | "forest" }) {
  const answerColor = tone === "forest" ? "text-linen/80" : "text-charcoal/80";
  const borderColor = tone === "forest" ? "border-linen/15" : "border-sand";

  return (
    <dl className="flex flex-col">
      {faqItems.map((item) => (
        <details key={item.question} className={`group border-b py-5 ${borderColor}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium marker:content-none">
            {item.question}
            <span aria-hidden="true" className="shrink-0 text-moss transition-transform group-open:rotate-45">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className={`mt-3 max-w-[65ch] font-sans text-[1.0625rem] leading-relaxed ${answerColor}`}>
            {item.answer}
          </p>
        </details>
      ))}
    </dl>
  );
}
