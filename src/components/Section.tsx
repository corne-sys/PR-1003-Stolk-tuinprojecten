import type { ElementType, ReactNode } from "react";

type SectionProps = {
  tone?: "linen" | "forest";
  as?: ElementType;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  linen: "bg-linen text-charcoal",
  forest: "bg-forest-deep text-linen",
};

export function Section({
  tone = "linen",
  as: Tag = "section",
  className = "",
  children,
  ariaLabel,
}: SectionProps) {
  return (
    <Tag
      aria-label={ariaLabel}
      className={`${toneClass[tone]} py-[clamp(4rem,9vw,8rem)] ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">{children}</div>
    </Tag>
  );
}
