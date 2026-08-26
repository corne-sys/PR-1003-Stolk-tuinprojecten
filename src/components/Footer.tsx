import Link from "next/link";
import { company, primaryNav, telHref, workingAreas } from "@/lib/site-config";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-ink text-linen">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-[32ch] font-sans text-sm leading-relaxed text-linen/75">
            Tuinontwerp en complete tuinaanleg door {company.owner}, werkzaam vanuit{" "}
            {company.city}.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-linen/60">
            Navigatie
          </h2>
          <ul className="mt-4 flex flex-col gap-2 font-sans text-sm text-linen/85">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-linen">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-linen/60">
            Contact
          </h2>
          <ul className="mt-4 flex flex-col gap-2 font-sans text-sm text-linen/85">
            <li>{company.name}</li>
            <li>{company.street}</li>
            <li>
              {company.postalCode} {company.city}
            </li>
            <li>
              <a href={telHref(company.phone)} data-event="phone_click" className="hover:text-linen">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-linen">
                {company.email}
              </a>
            </li>
            <li>KVK: {company.kvk}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-linen/60">
            Werkgebied
          </h2>
          <p className="mt-4 font-sans text-sm text-linen/85">{workingAreas.join(" · ")}</p>
        </div>
      </div>

      <div className="border-t border-linen/10">
        <div className="mx-auto max-w-[1280px] px-5 py-6 font-sans text-xs text-linen/60 sm:px-8">
          <p>
            © {year} {company.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
