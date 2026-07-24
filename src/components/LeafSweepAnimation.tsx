"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "stolk-leaf-sweep-played";

// Het pad zelf: een zacht slingerende band met perspectief (breed vooraan,
// smal richting de achtergrond). Punten berekend langs een bezier-middenlijn
// zodat de rand vloeiend meebuigt met de bocht.
const PATH_POLYGON =
  "133,400 144,397 154,395 165,392 175,389 184,386 194,383 203,379 212,376 220,372 229,368 237,363 244,359 252,354 259,350 265,345 272,340 278,335 284,330 290,325 295,319 301,314 306,309 311,304 315,299 320,293 324,288 329,283 333,278 337,273 342,268 346,263 350,258 354,253 358,248 363,243 367,238 371,233 376,228 380,224 385,219 390,214 395,210 400,205 405,201 411,196 416,192 422,188 428,183 435,179 442,175 418,125 410,128 401,132 393,135 385,138 377,142 370,146 363,150 355,154 348,157 342,161 335,165 328,169 322,174 316,178 310,182 304,186 298,189 292,193 287,197 281,201 276,205 270,208 265,211 260,215 255,218 250,221 245,224 240,226 235,229 231,231 226,233 221,235 217,237 212,239 207,240 203,241 198,242 193,243 189,244 184,245 179,245 174,245 169,245 164,245 158,245 153,245 147,244 140,243 134,242 127,240";

const RUNGS: [number, number, number, number][] = [
  [184, 386, 158, 245],
  [259, 350, 203, 241],
  [311, 304, 245, 224],
  [350, 258, 292, 193],
  [390, 214, 348, 157],
];

// Drie golven van elk drie bladeren, telkens iets verder op het pad en iets
// kleiner (dieptewerking). Elke golf wordt bij een van de drie bezemslagen
// weggeveegd — de vertragingen hieronder zijn afgestemd op de contactmomenten
// in de `broom-swing`-animatie.
const leaves = [
  // golf 1 — vlak bij de bezem
  { x: 186, y: 298, dx: 95, dy: -42, rot: 120, scale: 0.95, duration: 1.0, delay: 0.1 },
  { x: 150, y: 330, dx: 100, dy: -30, rot: -100, scale: 0.9, duration: 1.05, delay: 0.18 },
  { x: 208, y: 281, dx: 85, dy: -48, rot: 95, scale: 0.85, duration: 0.95, delay: 0.28 },
  // golf 2 — halverwege het pad
  { x: 258, y: 262, dx: 78, dy: -46, rot: -130, scale: 0.7, duration: 1.1, delay: 1.25 },
  { x: 226, y: 288, dx: 82, dy: -38, rot: 110, scale: 0.72, duration: 1.0, delay: 1.35 },
  { x: 275, y: 244, dx: 70, dy: -44, rot: -85, scale: 0.65, duration: 1.05, delay: 1.45 },
  // golf 3 — verderop, richting de bocht naar achteren
  { x: 314, y: 218, dx: 60, dy: -38, rot: 100, scale: 0.5, duration: 1.0, delay: 2.35 },
  { x: 296, y: 236, dx: 64, dy: -34, rot: -110, scale: 0.52, duration: 0.95, delay: 2.45 },
  { x: 330, y: 202, dx: 55, dy: -32, rot: 75, scale: 0.46, duration: 0.9, delay: 2.55 },
];

// Losse bladeren die altijd blijven liggen (niet geveegd) — voor een voller,
// natuurlijker pad.
const scatterLeaves = [
  { x: 210, y: 360, rot: 25, scale: 0.9 },
  { x: 140, y: 310, rot: -35, scale: 0.75 },
  { x: 245, y: 300, rot: 60, scale: 0.6 },
  { x: 200, y: 265, rot: -15, scale: 0.55 },
  { x: 355, y: 190, rot: 40, scale: 0.4 },
  { x: 380, y: 175, rot: -55, scale: 0.35 },
];

/**
 * Kenmerkende, eenmalige overgangsanimatie: een tuinman-silhouet veegt in
 * drie zichtbare halen bladeren van een slingerend pad met perspectief.
 * Speelt hooguit één keer per sessie en respecteert prefers-reduced-motion —
 * in dat geval wordt direct de statische eindcompositie getoond.
 */
export function LeafSweepAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "sweeping" | "done">("idle");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "1";

    if (reduceMotion || alreadyPlayed) {
      // Reading matchMedia/sessionStorage requires the browser, so this can
      // only be resolved after mount — an effect is the correct place.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPhase("sweeping");
          sessionStorage.setItem(SESSION_KEY, "1");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (phase !== "sweeping") return;
    const timeout = setTimeout(() => setPhase("done"), 3400);
    return () => clearTimeout(timeout);
  }, [phase]);

  const settled = phase === "done";
  const leafPath = "M-11 0 C -11 -12, 0 -18, 11 0 C 0 18, -11 12, -11 0 Z";

  return (
    <div
      ref={containerRef}
      role="presentation"
      aria-hidden="true"
      className="mx-auto max-w-[900px] px-6"
    >
      <svg
        viewBox="0 0 900 420"
        className={`leaf-sweep-scene w-full ${phase === "sweeping" ? "is-sweeping" : ""}`}
      >
        {/* Slingerend pad met perspectief: breed vooraan, smal naar achteren */}
        <polygon points={PATH_POLYGON} fill="var(--color-sand)" opacity="0.55" />
        <polygon
          points={PATH_POLYGON}
          fill="none"
          stroke="var(--color-moss)"
          strokeWidth="2"
          opacity="0.5"
        />
        {RUNGS.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-moss)"
            strokeWidth="1.5"
            opacity="0.3"
          />
        ))}

        {scatterLeaves.map((leaf, i) => (
          <path
            key={`scatter-${i}`}
            d={leafPath}
            fill="var(--color-moss-soft)"
            opacity="0.6"
            transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rot}) scale(${leaf.scale})`}
          />
        ))}

        <g className="sweeper-figure" transform="translate(95 150)">
          {/* Mensfiguur in vol silhouet: hoofd, romp, twee benen, arm + bezem */}
          <circle cx="58" cy="20" r="17" fill="var(--color-charcoal)" />
          <line
            x1="58"
            y1="38"
            x2="78"
            y2="110"
            stroke="var(--color-charcoal)"
            strokeWidth="19"
            strokeLinecap="round"
          />
          <line
            x1="78"
            y1="110"
            x2="50"
            y2="190"
            stroke="var(--color-charcoal)"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M78 110 C 96 124, 110 134, 112 150 C 113 162, 122 176, 132 192"
            stroke="var(--color-charcoal)"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          <g className="broom-arm">
            <line
              x1="66"
              y1="58"
              x2="140"
              y2="96"
              stroke="var(--color-charcoal)"
              strokeWidth="13"
              strokeLinecap="round"
            />
            <line
              x1="140"
              y1="96"
              x2="190"
              y2="132"
              stroke="var(--color-charcoal)"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.75"
            />
            <polygon
              points="176,118 210,124 213,146 182,150"
              fill="var(--color-charcoal)"
              opacity="0.6"
            />
            <path
              d="M186 150 L 182 168 M196 151 L 196 170 M206 149 L 212 167"
              stroke="var(--color-charcoal)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Veeg-boog: verschijnt kort tijdens elke slag, onderstreept de beweging */}
            <path
              className="sweep-arc"
              d="M150 128 A 55 55 0 0 1 205 152"
              stroke="var(--color-charcoal)"
              strokeWidth="2"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
              opacity="0"
            />
          </g>
        </g>

        {!settled &&
          leaves.map((leaf, i) => (
            <path
              key={i}
              className="leaf"
              d={leafPath}
              fill="var(--color-moss)"
              opacity="0.9"
              transform={`translate(${leaf.x} ${leaf.y}) scale(${leaf.scale})`}
              style={
                {
                  "--dx": `${leaf.dx}px`,
                  "--dy": `${leaf.dy}px`,
                  "--rot": `${leaf.rot}deg`,
                  "--scale": leaf.scale * 0.7,
                  animationDuration: `${leaf.duration}s`,
                  animationDelay: `${leaf.delay}s`,
                } as React.CSSProperties
              }
            />
          ))}

        {settled &&
          leaves.map((leaf, i) => (
            <path
              key={i}
              d={leafPath}
              fill="var(--color-moss-soft)"
              opacity="0.75"
              transform={`translate(${leaf.x + leaf.dx} ${leaf.y + leaf.dy}) rotate(${leaf.rot * 0.7}) scale(${leaf.scale * 0.7})`}
            />
          ))}
      </svg>
    </div>
  );
}
