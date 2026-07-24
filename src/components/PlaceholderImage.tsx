import Image from "next/image";

type PlaceholderImageProps = {
  /** Bestandsnaam onder /public/images/placeholders/, bv. "hero.svg". */
  src: string;
  /** Betekenisvolle Nederlandse alt-tekst die de uiteindelijke foto beschrijft. */
  alt: string;
  aspect?: "16/9" | "4/3" | "3/2" | "4/5";
  priority?: boolean;
  framed?: boolean;
  className?: string;
};

const aspectClass: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
};

/**
 * Tijdelijke, hoogwaardige illustratieve afbeelding (line-art in huisstijl-
 * kleuren) totdat echte projectfoto's beschikbaar zijn. Vervang het bestand
 * onder /public/images/placeholders door een echte foto (WebP/AVIF
 * aanbevolen) — de component en zijn props hoeven dan niet te veranderen.
 */
export function PlaceholderImage({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  framed = false,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClass[aspect]} ${
        framed ? "leaf-path-clip shadow-image-frame" : ""
      } ${className}`}
    >
      <Image
        src={`/images/placeholders/${src}`}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="object-cover"
      />
    </div>
  );
}
