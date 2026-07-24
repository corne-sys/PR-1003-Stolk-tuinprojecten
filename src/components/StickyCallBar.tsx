import { company, telHref, whatsappHref } from "@/lib/site-config";

/** Sticky onderbalk voor mobiel — altijd bereikbaar bel-CTA, puur CSS, geen JS. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-px bg-sand shadow-sticky-bar lg:hidden">
      <a
        href={telHref(company.phone)}
        data-event="phone_click"
        className="flex flex-1 items-center justify-center gap-2 bg-terracotta py-4 font-sans text-sm font-medium tracking-wide text-linen"
      >
        Bel direct
      </a>
      <a
        href={whatsappHref(company.whatsapp)}
        data-event="whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-forest-deep py-4 font-sans text-sm font-medium tracking-wide text-linen"
      >
        WhatsApp
      </a>
    </div>
  );
}
