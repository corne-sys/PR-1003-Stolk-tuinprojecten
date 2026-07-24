import { company, telHref, whatsappHref } from "@/lib/site-config";

type Tone = "on-linen" | "on-forest";

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.3-.3.7-.4 1.1-.2 1.1.4 2.3.6 3.6.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C9.9 21.1 3 14.2 3 5.7 3 5.1 3.5 4.6 4.1 4.6h3c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17 14.2c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4Z"
        fill="currentColor"
      />
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function PhoneButton({
  className = "",
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={telHref(company.phone)}
      data-event="phone_click"
      className={`inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-terracotta px-8 py-4 font-sans text-sm font-medium tracking-wide text-linen transition-colors hover:bg-terracotta-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <PhoneIcon />
      Bel direct
    </a>
  );
}

export function WhatsAppButton({
  tone = "on-linen",
  className = "",
  fullWidth = false,
}: {
  tone?: Tone;
  className?: string;
  fullWidth?: boolean;
}) {
  const borderTone =
    tone === "on-forest"
      ? "border-linen text-linen hover:bg-linen/10"
      : "border-forest-deep text-forest-deep hover:bg-forest-deep/5";

  return (
    <a
      href={whatsappHref(
        company.whatsapp,
        `Hallo Lucas, ik heb interesse in tuinontwerp/aanleg via de website.`
      )}
      data-event="whatsapp_click"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-[6px] border-[1.5px] px-8 py-4 font-sans text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${borderTone} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <WhatsAppIcon />
      Stuur een WhatsApp
    </a>
  );
}
