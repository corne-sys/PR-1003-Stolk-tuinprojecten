# Stolk Tuinprojecten — website

Next.js (App Router) + TypeScript + Tailwind CSS website voor Stolk
Tuinprojecten. Zie [PRODUCT.md](./PRODUCT.md) voor productcontext en
[DESIGN.md](./DESIGN.md) voor het vastgelegde design system.

## Development

```bash
npm install
npm run dev      # start lokale dev server op http://localhost:3000
npm run lint     # ESLint
npx tsc --noEmit # TypeScript typecheck
npm run build    # production build
npm run start    # start production build lokaal
```

## Projectstructuur

- `src/lib/site-config.ts` — **centrale bron** voor bedrijfsgegevens, contact,
  navigatie, werkgebied, projecten en reviews. Vrijwel alle content-updates
  (telefoonnummer, projecten, etc.) gebeuren hier, niet in de pagina's zelf.
- `src/lib/actions/contact.ts` — server action die het contactformulier
  valideert (zie "Vóór livegang" hieronder — de daadwerkelijke verzending is
  nog niet gekoppeld).
- `src/components/` — herbruikbare componenten (Header, Footer, CTA-knoppen,
  PlaceholderImage, LeafSweepAnimation, Faq, Section, JsonLd).
- `src/app/` — routes: `/`, `/over-ons`, `/projecten`, `/projecten/[slug]`,
  `/reviews`, `/contact`, `/privacyverklaring`.
- `public/images/placeholders/` — tijdelijke illustratieve SVG-afbeeldingen
  (line-art in de huisstijlkleuren, geen stockfoto's) totdat er echte
  projectfoto's zijn.

Geen CMS: content staat in TypeScript-bestanden. De vorm van `site-config.ts`
(platte objecten/arrays) is bewust zo gehouden dat een CMS-koppeling later
die functies kan vervangen zonder dat componenten hoeven te veranderen.

## Vóór livegang — verplicht invullen

1. **Contactformulier stuurt nog nergens naartoe.** `src/lib/actions/contact.ts`
   valideert en toont een success-state, maar bezorgt niets. Koppel een echte
   route (bijv. Resend, een SMTP-provider, of een CRM-webhook) voordat het
   formulier live gaat — zie de `TODO` in dat bestand.
2. **Bedrijfsgegevens** in `src/lib/site-config.ts`:
   - `phone` (`[TELEFOONNUMMER]`)
   - `whatsapp` (`[WHATSAPP-NUMMER]`, alleen cijfers, internationaal formaat
     zonder `+`/`00`, bv. `31612345678`)
   - `email` (`[E-MAILADRES]`)
3. **Domein**: zet de env var `NEXT_PUBLIC_SITE_URL` op het definitieve
   domein (gebruikt voor canonical URLs, sitemap, JSON-LD, OG-metadata).
   Zonder deze var wordt een placeholder-domein gebruikt.
4. **Werkelijke projecten**: vervang de drie placeholder-projecten in
   `projects` (site-config.ts) en de bijbehorende SVG's in
   `public/images/placeholders/` door echte foto's (WebP/AVIF aanbevolen) —
   zoek in de code naar `TODO` en `vervang`.
5. **Portretfoto Lucas Stolk**: vervang
   `public/images/placeholders/portrait-lucas.svg` op de Over ons-pagina.
6. **Reviews**: zodra er echte, zichtbare reviews zijn, vul `reviews` in
   `site-config.ts` en zet `hasPublishedReviews` op `true`. Voeg pas dán
   `Review`/`AggregateRating` structured data toe (bewust nog niet aanwezig).
7. **Privacyverklaring**: `src/app/privacyverklaring/page.tsx` bevat nu een
   placeholdertekst. Vervang door een juridisch kloppende privacyverklaring
   (o.a. verwerking van naam/telefoon/e-mail uit het contactformulier).
8. **Analytics/cookies**: er is nog niets geactiveerd. Als er analytics komt,
   koppel deze pas na een cookie-/toestemmingskeuze. De CTA-knoppen hebben al
   `data-event="phone_click"` / `"whatsapp_click"` / `"contact_submit"`
   attributen klaarstaan om events op te hangen.
9. **Logo**: `src/components/Logo.tsx` is een tijdelijk typografisch
   woordmerk. Vervang zodra er een echt logo is.

## SEO-checklist bij livegang

- [ ] `NEXT_PUBLIC_SITE_URL` staat op het echte domein (zie boven).
- [ ] Metadata (title/description/OG) per pagina gecontroleerd — al ingevuld
  per pagina, maar herlezen na eventuele tekstwijzigingen.
- [ ] `sitemap.xml` en `robots.txt` (auto-gegenereerd via `src/app/sitemap.ts`
  en `robots.ts`) bevatten het juiste domein na stap 3.
- [ ] JSON-LD (`Organization`/`HomeAndConstructionBusiness`, `Person`,
  `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage`) bevat alleen echte
  gegevens — telefoon/e-mail worden pas opgenomen zodra ze zijn ingevuld
  (zie `src/app/layout.tsx`).
- [ ] Rich Results Test (search.google.com/test/rich-results) op minimaal de
  homepage gedraaid.
- [ ] Google Search Console + sitemap indienen na livegang.
- [ ] Social preview (OG-image) gecontroleerd — gegenereerd via
  `src/app/opengraph-image.tsx`.

## Deployment op Vercel

1. Push deze repository naar GitHub.
2. Importeer het project in Vercel (New Project → kies de repo). Next.js
   wordt automatisch gedetecteerd, geen extra configuratie nodig.
3. Zet in Vercel → Project → Environment Variables de variabele
   `NEXT_PUBLIC_SITE_URL` op het productiedomein.
4. Deploy. Koppel daarna het gewenste domein onder Project → Domains.
5. Zodra een echte e-mail/CRM-integratie voor het contactformulier is
   gekozen, voeg de bijbehorende API-key toe als environment variable en
   verwijs ernaar vanuit `src/lib/actions/contact.ts`.

## Bekende audit-notitie

`npm audit` meldt hoge-severity kwetsbaarheden in `postcss`/`sharp` die via
Next.js zelf binnenkomen. Dit betreft build-tooling die in de gebruikte
Next.js 16-canary-reeks zit, niet code die in de runtime van de site wordt
uitgevoerd; een fix zou een major-downgrade van Next.js vereisen. Controleer
bij een volgende `npm update` of dit is opgelost in een nieuwere Next.js-versie.
