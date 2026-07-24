import Image from "next/image";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Echt logo-monogram (public/images/logo-mark.png, uitgesneden en
 * transparant gemaakt uit het aangeleverde ontwerp) + wordmerk als tekst.
 * Alleen tone="light" (donkere achtergrond) heeft een echte asset; tone="dark"
 * valt terug op het eerdere lijn-icoon totdat een variant voor lichte
 * achtergrond beschikbaar is.
 */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const textColor = tone === "dark" ? "text-forest-deep" : "text-linen";
  const lineColor = tone === "dark" ? "stroke-moss" : "stroke-moss-soft";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {tone === "light" ? (
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={548}
          height={247}
          className="h-[30px] w-auto shrink-0"
        />
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M4 24C10 24 11 15 15 15C19 15 20 6 26 6"
            className={lineColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M15 15C13.5 12 13.5 9 15 6M15 15C16.5 12 16.5 9 15 6M15 15C13.2 17.6 12.7 20.4 13 23M15 15C16.8 17.6 17.3 20.4 17 23"
            className={lineColor}
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span className={`font-display leading-tight ${textColor}`}>
        <span className="block text-lg font-medium tracking-tight">Stolk</span>
        <span className="block -mt-1 text-xs font-sans font-medium uppercase tracking-[0.14em] opacity-80">
          Tuinprojecten
        </span>
      </span>
    </span>
  );
}
