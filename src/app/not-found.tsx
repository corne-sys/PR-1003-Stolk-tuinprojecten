import Link from "next/link";
import { PhoneButton } from "@/components/CtaButtons";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section tone="linen" className="min-h-[60vh]">
      <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-moss">
        Pagina niet gevonden
      </p>
      <h1 className="mt-4 max-w-[20ch] text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.05] text-forest-deep">
        Deze pagina bestaat niet (meer)
      </h1>
      <p className="mt-6 max-w-[50ch] font-sans text-[1.0625rem] leading-relaxed text-charcoal/85">
        Mogelijk is de link verouderd of onjuist getypt. Ga terug naar de
        homepage of neem direct contact op.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-[6px] border-[1.5px] border-forest-deep px-8 py-4 font-sans text-sm font-medium tracking-wide text-forest-deep hover:bg-forest-deep/5"
        >
          Naar de homepage
        </Link>
        <PhoneButton />
      </div>
    </Section>
  );
}
