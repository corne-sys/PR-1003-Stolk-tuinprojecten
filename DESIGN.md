---
name: Stolk Tuinprojecten
description: Premium, landelijk-modern hoveniersmerk uit Wijngaarden — rust, vakmanschap, direct persoonlijk contact.
colors:
  forest-deep: "#1F3327"
  forest-ink: "#152219"
  moss: "#71805A"
  moss-soft: "#95A278"
  linen: "#F7F2E9"
  linen-warm: "#F1EADA"
  sand: "#E4D7BD"
  charcoal: "#211E1B"
  terracotta: "#B25E3E"
typography:
  display:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Work Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "14px"
  path: "0 60% 0 60%"
spacing:
  section-y: "clamp(4rem, 9vw, 8rem)"
  gutter: "clamp(1.25rem, 5vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.linen}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "#9C4E31"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
---

# Design System: Stolk Tuinprojecten

## Overview

**Creative North Star: "Het tuinpad na sluitingstijd"** — de rust van een net aangelegde tuin aan het einde van de dag, laag licht, natuurlijke materialen, geen enkele haast.

Dit is geen SaaS-uitstraling en geen tuincentrum-folder. Het is redactioneel en landelijk-modern tegelijk: brede foto's zoals in een architectuurtijdschrift, gecombineerd met de tastbaarheid van hout, steen en beplanting. Dichte, diepgroene secties wisselen af met lichte, linnen-kleurige rustpunten — dat ritme is zelf een ontwerpprincipe, niet decoratie. Terracotta is de enige warme kleur en wordt spaarzaam ingezet, uitsluitend voor actie.

Afgewezen: felgroen, glazen kaarten, paarse gradients, stock-tuinicoontjes, pil-knoppen, emoji.

**Key Characteristics:** redactionele koppen met lichte architectonische hoek · afwisselend licht/diep-groen sectieritme · organische lijn als terugkerend motief · terracotta uitsluitend voor CTA · royale witruimte, geen cards-als-structuur.

## Colors

Een ingetogen, natuurlijke palet waarin diepgroen de dominante kleur draagt (Committed-strategie: groen neemt hele secties in beslag, geen accent-op-grijs) en terracotta uitsluitend de actie markeert.

### Primary
- **Diep Bosgroen** (#1F3327): draagt volledige secties (hero-achtergrond varianten, "Waarom Stolk", CTA-sectie, footer). Tekst op deze grond is linnen-wit.
- **Bosgroen Inkt** (#152219): donkerste variant, voor overlaps op afbeeldingen en sticky header na scroll.

### Secondary
- **Mosgroen** (#71805A): lijnaccenten, hover-states, iconlijnen, botanische motieven.
- **Mosgroen Zacht** (#95A278): subtiele dividers en placeholder-illustratie-accenten op donkere grond.

### Tertiary
- **Terracotta** (#B25E3E): uitsluitend primaire CTA-knoppen ("Bel direct") en de enkele belangrijkste link per sectie.

### Neutral
- **Linnen** (#F7F2E9): standaard lichte sectie-achtergrond en primaire tekstkleur op donkere grond.
- **Linnen Warm** (#F1EADA): kaartvlakken en formuliervelden op lichte secties.
- **Zand** (#E4D7BD): borders, dividers en subtiele texturen op lichte grond.
- **Houtskool** (#211E1B): hoofdtekstkleur op lichte secties.

### Named Rules
**De Twee-Grond Regel.** Elke sectie is óf volledig linnen-licht óf volledig bosgroen-donker — nooit een gemengd kaartoppervlak binnen een sectie. Het ritme tussen beide gronden is de enige "afwisseling" die het ontwerp gebruikt.

**De Terracotta-Zeldzaamheid Regel.** Terracotta verschijnt maximaal twee keer per viewport: de primaire CTA en, indien aanwezig, één begeleidend accentlijntje. Nooit als vlakvulling groter dan een knop.

## Typography

**Display Font:** Petrona (met Georgia, serif fallback)
**Body Font:** Work Sans (met ui-sans-serif, system-ui fallback)

**Character:** Petrona's warme, organische curven geven grote koppen een karaktervolle, licht redactionele hoek zonder ouderwets te worden; Work Sans blijft rustig en functioneel voor lopende tekst, menu en knoppen — de combinatie leest als "tijdschrift over tuinarchitectuur", niet als template.

### Hierarchy
- **Display** (500, clamp(2.75rem,6vw,5rem), 1.02): H1 van hero en paginakoppen.
- **Headline** (500, clamp(1.75rem,3.2vw,2.75rem), 1.1): sectiekoppen.
- **Title** (500, 1.375rem, 1.25): kaart-/projecttitels, sub-koppen.
- **Body** (400, 1.0625rem, 1.65; max 68ch): lopende tekst.
- **Label** (500, 0.875rem, tracking 0.02em): menu, knoppen, eyebrow-tekst (spaarzaam gebruikt, niet op elke sectie).

### Named Rules
**De Eén-Eyebrow Regel.** Een getrackte eyebrow-label boven een kop is toegestaan op maximaal één sectie per pagina (de hero), nooit als terugkerend systeem boven elke sectie.

## Layout

Asymmetrische compositie: hero en projectsecties gebruiken een 7/5- of 8/4-koloms verdeling in plaats van gecentreerde symmetrie. Contentbreedte 1280px max, gutter clamp(1.25rem, 5vw, 3rem). Sectie-y-ruimte clamp(4rem, 9vw, 8rem) — ruimte boven een kop is altijd groter dan eronder. Geen driekoloms-cards-grid als terugkerend patroon; secties wisselen bewust van dichtheid (breed beeld → smalle tekstkolom → breed beeld).

## Elevation & Depth

Grotendeels vlak. Diepte komt van gelaagde beeldkaders (afbeelding met dunne linnen- of bosgroen-rand en een subtiele offset-schaduw) in plaats van kaartschaduwen. Eén zachte, diffuse schaduw met verticale offset voor zwevende elementen (sticky mobiele belbalk); geen zero-offset gloed.

### Shadow Vocabulary
- **image-frame** (`box-shadow: 0 18px 40px -20px rgba(21,34,25,0.35)`): onder uitgelichte project- en heroafbeeldingen.
- **sticky-bar** (`box-shadow: 0 -6px 20px -8px rgba(21,34,25,0.25)`): onder de mobiele sticky belbalk.

## Shapes

Zachte hoeken zijn selectief, niet overal: knoppen en formuliervelden krijgen 6px radius; grote beeldkaders krijgen één diagonaal afgeknipte hoek (`clip-path` organische inkeping, refererend aan een tuinpad-bocht) in plaats van uniforme afronding. Rechte hoeken blijven de norm voor secties en containers.

### Named Rules
**De Eén-Inkeping Regel.** De organische hoek-inkeping is gereserveerd voor hero- en uitgelichte projectbeelden; gewone content-afbeeldingen en kaarten blijven rechte hoeken met dunne rand.

## Components

### Buttons
- **Shape:** 6px radius, geen pill-vorm.
- **Primary ("Bel direct"):** terracotta achtergrond (#B25E3E), linnen tekst, padding 1rem 2rem, altijd met telefoonicoon (inline SVG, geen icon-font).
- **Secondary ("Stuur een WhatsApp"):** transparant met 1.5px bosgroen-rand, bosgroen tekst; op donkere grond: linnen-rand/tekst.
- **Hover / Focus:** primary verdiept naar #9C4E31; secondary vult zachtjes met 8% bosgroen-tint. Focus-ring: 2px terracotta, 2px offset.

### Cards / Containers
- **Corner Style:** rechte hoeken, geen radius (behalve hero/project-hero-afbeeldingen, zie Shapes).
- **Background:** linnen-warm op lichte secties; nooit een donkere kaart binnen een lichte sectie.
- **Shadow Strategy:** geen kaartschaduw; scheiding via ruimte en een dunne 1px zand-rand.
- **Internal Padding:** clamp(1.5rem, 4vw, 2.5rem).

### Inputs / Fields
- **Style:** linnen-warm achtergrond, 1px zand-rand, 6px radius, zichtbaar label boven het veld (nooit placeholder-als-label).
- **Focus:** rand wordt bosgroen, 2px terracotta focus-ring.
- **Error:** rand en foutmelding in terracotta-donker (#8C4A30), tekst in het Nederlands, direct onder het veld.

### Navigation
- **Style:** Work Sans label-formaat, geen tracked-uppercase overkill; actieve pagina krijgt een dunne mosgroen-onderstreping (geen pill-achtergrond). Sticky header wordt compact (kleinere hoogte, bosgroen-inkt achtergrond) na scroll. Mobiel: volledig-scherm menu met grote tikbare items en zichtbare focus-states.

## Do's and Don'ts

### Do:
- **Do** elke sectie volledig op één grond houden (linnen óf bosgroen — De Twee-Grond Regel).
- **Do** terracotta reserveren voor actie (De Terracotta-Zeldzaamheid Regel).
- **Do** grote, redactionele projectbeelden met één organische inkeping op hero-niveau.
- **Do** meer ruimte boven een kop plaatsen dan eronder.

### Don't:
- **Don't** drie gelijke feature-cards als paginastructuur gebruiken.
- **Don't** paarse/blauwe gradients, glas-effecten of stock-tuinicoontjes gebruiken.
- **Don't** pil-vormige knoppen gebruiken — 6px radius is de vaste knopvorm.
- **Don't** een getrackte eyebrow-label boven meer dan één sectie per pagina plaatsen.
