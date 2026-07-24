"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, primaryNav, telHref, whatsappHref } from "@/lib/site-config";
import { Logo } from "./Logo";
import { PhoneIcon, WhatsAppIcon } from "./CtaButtons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[padding,background-color] duration-300 ${
        scrolled ? "bg-forest-ink py-2.5 shadow-image-frame" : "bg-forest-ink/95 py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Stolk Tuinprojecten — naar home">
          <Logo tone="light" />
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-1 font-sans text-sm font-medium text-linen/90 transition-colors hover:text-linen after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:bg-moss-soft after:transition-all ${
                      isActive ? "text-linen after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={telHref(company.phone)}
            data-event="phone_click"
            className="rounded-[6px] bg-terracotta px-5 py-2.5 font-sans text-sm font-medium text-linen transition-colors hover:bg-terracotta-deep"
          >
            Bel direct
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telHref(company.phone)}
            data-event="phone_click"
            aria-label="Bel Stolk Tuinprojecten"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-linen transition-colors hover:bg-terracotta-deep"
          >
            <PhoneIcon />
          </a>
          {/* WhatsApp-groen (merkkleur): bewuste uitzondering op het palet,
              op verzoek van de klant — niet het accent voor overige UI. */}
          <a
            href={whatsappHref(company.whatsapp)}
            data-event="whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stuur Stolk Tuinprojecten een WhatsApp-bericht"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-linen transition-colors hover:bg-[#1FB958]"
          >
            <WhatsAppIcon />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobiel-menu"
            className="flex h-11 w-11 items-center justify-center rounded-[6px] text-linen"
          >
            <span className="sr-only">{menuOpen ? "Sluit menu" : "Open menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobiel-menu"
        className={`fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto bg-forest-deep transition-opacity duration-200 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobiele navigatie" className="flex flex-col gap-1 px-6 py-8">
          {primaryNav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-[6px] px-3 py-4 font-display text-2xl ${
                  isActive ? "text-linen" : "text-linen/75"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-6 flex flex-col gap-3 border-t border-linen/15 pt-6">
            <a
              href={telHref(company.phone)}
              data-event="phone_click"
              className="rounded-[6px] bg-terracotta px-6 py-4 text-center font-sans text-sm font-medium text-linen"
            >
              Bel direct — {company.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
