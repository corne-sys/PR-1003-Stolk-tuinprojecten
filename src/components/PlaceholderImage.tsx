import Image from "next/image";

type PlaceholderImageProps = {
  /** Bestandsnaam onder /public/images/placeholders/ (of /images/photos/
   * wanneer `photo` true is), bv. "hero.svg" of "project-dordrecht-1.jpg". */
  src: string;
  /** Betekenisvolle Nederlandse alt-tekst die de uiteindelijke foto beschrijft. */
  alt: string;
  aspect?: "16/9" | "4/3" | "3/2" | "4/5";
  priority?: boolean;
  framed?: boolean;
  className?: string;
  /** true = echte foto onder /images/photos/, false (default) = illustratieve placeholder. */
  photo?: boolean;
};

const aspectClass: Record<NonNullable<PlaceholderImageProps["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
};

/**
 * Toont een illustratieve placeholder (line-art, `/images/placeholders/`) of,
 * met `photo`, een echte foto (`/images/photos/`) — zelfde aspect/framed-
 * styling in beide gevallen.
 */
export function PlaceholderImage({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  framed = false,
  className = "",
  photo = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl ${aspectClass[aspect]} ${
        framed ? "leaf-path-clip shadow-image-frame" : ""
      } ${className}`}
    >
      <Image
        src={`/images/${photo ? "photos" : "placeholders"}/${src}`}
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
