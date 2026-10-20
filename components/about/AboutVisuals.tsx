import styles from "./about.module.css";

/*
 * Decorative illustrations for the About page.
 * Each visual sits inside a fixed aspect-ratio frame so a real photo
 * (e.g. next/image with `fill`) can replace the SVG later without
 * changing the surrounding layout.
 */

type Point = [number, number];

/* ---------- Hero: glass office building ---------- */

const towerRows = Array.from({ length: 11 }, (_, i) => i);
const towerColsFront = Array.from({ length: 6 }, (_, i) => i);
const towerColsSide = Array.from({ length: 4 }, (_, i) => i);

export function BuildingVisual() {
  return (
    <svg
      viewBox="0 0 560 460"
      className={styles.svgFill}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ab-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4eeff" />
          <stop offset="100%" stopColor="#f8fbff" />
        </linearGradient>
        <linearGradient id="ab-front" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6aa0ff" />
          <stop offset="45%" stopColor="#2f6bea" />
          <stop offset="100%" stopColor="#123a9c" />
        </linearGradient>
        <linearGradient id="ab-side" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4fc4" />
          <stop offset="100%" stopColor="#0a256f" />
        </linearGradient>
        <linearGradient id="ab-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="560" height="460" fill="url(#ab-sky)" />

      {/* back tower */}
      <polygon points="120,150 250,110 250,400 120,420" fill="#b9cdf3" />
      <polygon points="250,110 300,128 300,396 250,400" fill="#8eaae4" />

      {/* main tower: front face */}
      <polygon points="230,70 440,120 440,410 230,420" fill="url(#ab-front)" />
      {/* main tower: side face */}
      <polygon points="440,120 520,96 520,400 440,410" fill="url(#ab-side)" />
      {/* roof */}
      <polygon points="230,70 310,48 520,96 440,120" fill="#dbe7ff" />

      {/* front mullions */}
      <g stroke="#cfe0ff" strokeOpacity="0.55" strokeWidth="1.2">
        {towerColsFront.map((c) => {
          const x = 230 + (c + 1) * 35;
          const yTop = 70 + ((x - 230) / 210) * 50;
          return <line key={`fc-${c}`} x1={x} y1={yTop} x2={x} y2={420 - (c + 1) * 1.6} />;
        })}
        {towerRows.map((r) => {
          const off = (r + 1) * 30;
          return (
            <line key={`fr-${r}`} x1="230" y1={70 + off} x2="440" y2={120 + off * 0.94} />
          );
        })}
      </g>

      {/* side mullions */}
      <g stroke="#7ea6ff" strokeOpacity="0.35" strokeWidth="1">
        {towerColsSide.map((c) => {
          const x = 440 + (c + 1) * 16;
          return <line key={`sc-${c}`} x1={x} y1={120 - (c + 1) * 4.8} x2={x} y2={410 - (c + 1) * 2} />;
        })}
        {towerRows.map((r) => {
          const off = (r + 1) * 28;
          return <line key={`sr-${r}`} x1="440" y1={120 + off} x2="520" y2={96 + off} />;
        })}
      </g>

      {/* reflection sweep */}
      <polygon points="270,80 320,92 290,420 240,420" fill="url(#ab-shine)" />

      {/* logo mark on facade */}
      <g transform="translate(395 150)">
        <polygon points="0,40 18,0 36,40 26,40 18,20 10,40" fill="#fff" fillOpacity="0.92" />
      </g>

      {/* entrance canopy */}
      <polygon points="250,380 410,392 410,404 250,394" fill="#0b1f5c" fillOpacity="0.6" />

      {/* ground + plaza */}
      <rect x="0" y="412" width="560" height="48" fill="#eef3fb" />
      <polygon points="40,460 520,460 470,420 110,420" fill="#e2e9f5" />

      {/* landscaping */}
      <g fill="#3f8f5a">
        <ellipse cx="90" cy="410" rx="42" ry="20" />
        <ellipse cx="150" cy="418" rx="30" ry="14" />
        <ellipse cx="500" cy="414" rx="44" ry="20" />
        <ellipse cx="350" cy="426" rx="70" ry="10" />
      </g>
      <g fill="#5fae73">
        <ellipse cx="70" cy="400" rx="26" ry="14" />
        <ellipse cx="520" cy="402" rx="28" ry="14" />
      </g>
      <g stroke="#6b4f3a" strokeWidth="3">
        <line x1="40" y1="408" x2="40" y2="370" />
        <line x1="545" y1="406" x2="545" y2="372" />
      </g>
      <g fill="#4c9b64">
        <circle cx="40" cy="356" r="24" />
        <circle cx="545" cy="358" r="22" />
      </g>
    </svg>
  );
}

/* ---------- Belief: abstract team at a laptop ---------- */

export function TeamVisual() {
  return (
    <svg
      viewBox="0 0 600 400"
      className={styles.svgFill}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ab-room" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f7fd" />
          <stop offset="100%" stopColor="#dfe7f3" />
        </linearGradient>
        <linearGradient id="ab-shirt-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c4f8f" />
          <stop offset="100%" stopColor="#1a3366" />
        </linearGradient>
        <linearGradient id="ab-shirt-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b8fd6" />
          <stop offset="100%" stopColor="#3c6db3" />
        </linearGradient>
        <linearGradient id="ab-shirt-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3460" />
          <stop offset="100%" stopColor="#0f1f40" />
        </linearGradient>
      </defs>

      <rect width="600" height="400" fill="url(#ab-room)" />

      {/* window wall */}
      <g fill="#ffffff" fillOpacity="0.8">
        <rect x="20" y="20" width="130" height="200" rx="4" />
        <rect x="160" y="20" width="130" height="200" rx="4" />
        <rect x="300" y="20" width="130" height="200" rx="4" />
        <rect x="440" y="20" width="140" height="200" rx="4" />
      </g>
      <g fill="#cfe3d3" fillOpacity="0.8">
        <ellipse cx="80" cy="200" rx="60" ry="30" />
        <ellipse cx="520" cy="196" rx="70" ry="32" />
      </g>

      {/* plant */}
      <rect x="548" y="250" width="30" height="40" rx="4" fill="#c9d3e2" />
      <g fill="#4c9b64">
        <ellipse cx="555" cy="230" rx="14" ry="30" transform="rotate(-18 555 230)" />
        <ellipse cx="572" cy="226" rx="12" ry="28" transform="rotate(14 572 226)" />
      </g>

      {/* people (abstract, faceless) */}
      <g>
        {/* left */}
        <path d="M70 400 C70 300 110 270 160 270 C210 270 250 300 250 400 Z" fill="url(#ab-shirt-a)" />
        <circle cx="160" cy="215" r="44" fill="#6b4a36" />
        <path d="M118 200 C120 168 200 168 202 200 C190 186 130 186 118 200 Z" fill="#241812" />
        {/* middle */}
        <path d="M230 400 C230 312 262 286 305 286 C348 286 380 312 380 400 Z" fill="url(#ab-shirt-b)" />
        <circle cx="305" cy="236" r="40" fill="#7a5440" />
        <path d="M262 236 C258 180 352 180 348 236 C340 206 270 206 262 236 Z" fill="#1d130e" />
        {/* right, standing */}
        <path d="M380 400 C380 260 420 220 470 220 C520 220 560 260 560 400 Z" fill="url(#ab-shirt-c)" />
        <circle cx="470" cy="160" r="44" fill="#5c3e2e" />
        <path d="M428 150 C430 116 510 116 512 150 C500 132 440 132 428 150 Z" fill="#17100c" />
      </g>

      {/* desk */}
      <rect x="0" y="340" width="600" height="60" fill="#f5f7fb" />
      <rect x="0" y="336" width="600" height="6" fill="#e3e9f3" />

      {/* laptop */}
      <polygon points="250,250 410,250 420,336 240,336" fill="#d5dbe5" />
      <polygon points="258,258 402,258 410,328 250,328" fill="#2a3a5c" />
      <g fill="#4d86ff" fillOpacity="0.8">
        <rect x="272" y="272" width="56" height="6" rx="3" />
        <rect x="272" y="286" width="90" height="4" rx="2" fillOpacity="0.5" />
        <rect x="272" y="296" width="70" height="4" rx="2" fillOpacity="0.5" />
      </g>
      <polygon points="220,336 440,336 460,350 200,350" fill="#c4ccd9" />
    </svg>
  );
}

/* ---------- Approach: laptop with globe ---------- */

const laptopDots: Point[] = [
  [214, 132],
  [240, 118],
  [262, 146],
  [232, 168],
  [282, 124],
  [256, 186],
  [292, 168],
];

export function LaptopGlobeVisual() {
  return (
    <svg
      viewBox="0 0 400 420"
      className={styles.svgFill}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ab-lg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c3566" />
          <stop offset="100%" stopColor="#081633" />
        </linearGradient>
        <radialGradient id="ab-lg-globe" cx="38%" cy="34%" r="70%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="60%" stopColor="#0b2a7a" />
          <stop offset="100%" stopColor="#030b26" />
        </radialGradient>
        <linearGradient id="ab-lg-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a5a3a" />
          <stop offset="100%" stopColor="#4d3020" />
        </linearGradient>
      </defs>

      <rect width="400" height="420" fill="url(#ab-lg-bg)" />
      {/* window light */}
      <g fill="#fff" fillOpacity="0.06">
        <rect x="20" y="20" width="90" height="220" />
        <rect x="120" y="20" width="90" height="220" />
      </g>

      {/* screen */}
      <polygon points="120,70 370,40 370,250 120,262" fill="#0a0f1d" />
      <polygon points="130,80 360,52 360,240 130,252" fill="#06112e" />
      <circle cx="250" cy="152" r="78" fill="url(#ab-lg-globe)" />
      <g fill="none" stroke="#7fb3ff" strokeOpacity="0.3" strokeWidth="0.8">
        <ellipse cx="250" cy="152" rx="78" ry="26" />
        <ellipse cx="250" cy="152" rx="26" ry="78" />
        <ellipse cx="250" cy="152" rx="52" ry="78" />
      </g>
      <g stroke="#fbbf24" strokeOpacity="0.6" strokeWidth="1" fill="none">
        <path d="M214 132 Q240 100 282 124" />
        <path d="M232 168 Q262 140 292 168" />
        <path d="M240 118 Q250 160 256 186" />
      </g>
      {laptopDots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#fde68a" />
      ))}
      {/* side panels */}
      <g fill="#4d86ff" fillOpacity="0.5">
        <rect x="140" y="96" width="34" height="4" rx="2" />
        <rect x="140" y="106" width="24" height="4" rx="2" />
        <rect x="324" y="78" width="26" height="4" rx="2" />
        <rect x="324" y="200" width="26" height="22" rx="3" fillOpacity="0.25" />
      </g>

      {/* base */}
      <polygon points="120,262 370,250 400,290 80,304" fill="#2a3346" />
      <polygon points="80,304 400,290 400,298 80,312" fill="#141a28" />

      {/* desk */}
      <rect x="0" y="312" width="400" height="108" fill="url(#ab-lg-desk)" />
      <rect x="0" y="310" width="400" height="4" fill="#a8744f" />
    </svg>
  );
}

/* ---------- Vision: Africa at night on a globe ---------- */

const africaPath =
  "M232 118 L262 110 L290 116 L312 132 L336 136 L352 152 L346 170 L362 180 L382 176 L376 196 L356 222 L340 248 L334 276 L318 300 L300 330 L282 350 L262 352 L252 330 L246 300 L236 276 L228 248 L210 236 L186 232 L166 214 L158 188 L170 160 L192 138 L214 126 Z";

const cityLights: Point[] = [
  [214, 150],
  [240, 136],
  [282, 132],
  [306, 146],
  [334, 160],
  [190, 196],
  [220, 210],
  [262, 196],
  [300, 210],
  [338, 214],
  [270, 250],
  [300, 270],
  [276, 310],
  [258, 338],
  [236, 230],
  [318, 236],
];

export function AfricaGlobeVisual() {
  return (
    <svg
      viewBox="0 0 560 400"
      className={styles.svgFill}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ab-ag-space" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#0b2266" />
          <stop offset="100%" stopColor="#020718" />
        </radialGradient>
        <radialGradient id="ab-ag-globe" cx="42%" cy="36%" r="70%">
          <stop offset="0%" stopColor="#1846c7" />
          <stop offset="55%" stopColor="#0a2266" />
          <stop offset="100%" stopColor="#030b26" />
        </radialGradient>
        <radialGradient id="ab-ag-rim" cx="50%" cy="50%" r="50%">
          <stop offset="88%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
        </radialGradient>
        <radialGradient id="ab-ag-light" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="400" fill="url(#ab-ag-space)" />
      <circle cx="270" cy="230" r="236" fill="url(#ab-ag-rim)" />
      <circle cx="270" cy="230" r="220" fill="url(#ab-ag-globe)" />

      <g fill="none" stroke="#7fb3ff" strokeOpacity="0.16" strokeWidth="0.8">
        <ellipse cx="270" cy="230" rx="220" ry="70" />
        <ellipse cx="270" cy="230" rx="220" ry="150" />
        <ellipse cx="270" cy="230" rx="80" ry="220" />
        <ellipse cx="270" cy="230" rx="160" ry="220" />
      </g>

      <path d={africaPath} fill="#0e1b3c" stroke="#5b8ff0" strokeOpacity="0.45" strokeWidth="1" />

      <g stroke="#93c5fd" strokeOpacity="0.55" strokeWidth="1" fill="none">
        <path d="M214 150 Q120 80 60 120" />
        <path d="M306 146 Q400 60 500 100" />
        <path d="M338 214 Q440 200 520 250" />
        <path d="M276 310 Q180 360 90 320" />
        <path d="M240 136 Q290 90 334 160" />
        <path d="M220 210 Q262 170 300 210" />
      </g>

      {cityLights.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="8" fill="url(#ab-ag-light)" />
          <circle cx={x} cy={y} r="1.8" fill="#fff7d6" />
        </g>
      ))}
    </svg>
  );
}

/* ---------- CTA: curved glass facade lines ---------- */

const ctaCurves = Array.from({ length: 9 }, (_, i) => i);

export function CtaWaves() {
  return (
    <svg
      viewBox="0 0 600 360"
      className={styles.ctaWaves}
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ab-cta-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fb0ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0a2a8a" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M140 360 C260 240 420 120 600 60 L600 360 Z" fill="url(#ab-cta-glass)" />
      <g fill="none" stroke="#cfe0ff" strokeWidth="1.2">
        {ctaCurves.map((i) => (
          <path
            key={i}
            d={`M${120 + i * 36} 360 C${240 + i * 30} ${250 - i * 8} ${400 + i * 20} ${130 - i * 6} 600 ${70 + i * 12}`}
            strokeOpacity={0.12 + i * 0.04}
          />
        ))}
      </g>
    </svg>
  );
}
