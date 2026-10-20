import styles from "./home.module.css";

type Point = [number, number];

const toPoints = (points: Point[]) =>
  points.map(([x, y]) => `${x},${y}`).join(" ");

// Isometric slab centred on (cx, cy): returns top, left and right faces.
function isoSlab(cx: number, cy: number, w: number, h: number, t: number) {
  return {
    top: toPoints([
      [cx, cy - h],
      [cx + w, cy],
      [cx, cy + h],
      [cx - w, cy],
    ]),
    left: toPoints([
      [cx - w, cy],
      [cx, cy + h],
      [cx, cy + h + t],
      [cx - w, cy + t],
    ]),
    right: toPoints([
      [cx, cy + h],
      [cx + w, cy],
      [cx + w, cy + t],
      [cx, cy + h + t],
    ]),
  };
}

const globeDots: Point[] = [
  [62, 70],
  [88, 54],
  [120, 66],
  [104, 98],
  [140, 92],
  [76, 112],
  [132, 128],
  [96, 140],
  [158, 112],
];

function Globe({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 220 200" className={styles.globeSvg} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-fill`} cx="38%" cy="34%" r="70%">
          <stop offset="0%" stopColor="#1d4fd8" />
          <stop offset="55%" stopColor="#0b2a7a" />
          <stop offset="100%" stopColor="#030b26" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="100" r="92" fill={`url(#${id}-glow)`} />
      <circle cx="110" cy="100" r="80" fill={`url(#${id}-fill)`} />
      <g fill="none" stroke="#7fb3ff" strokeOpacity="0.28" strokeWidth="0.8">
        <ellipse cx="110" cy="100" rx="80" ry="26" />
        <ellipse cx="110" cy="100" rx="80" ry="54" />
        <ellipse cx="110" cy="100" rx="26" ry="80" />
        <ellipse cx="110" cy="100" rx="54" ry="80" />
        <line x1="30" y1="100" x2="190" y2="100" />
        <line x1="110" y1="20" x2="110" y2="180" />
      </g>
      <g stroke="#fbbf24" strokeOpacity="0.55" strokeWidth="0.9" fill="none">
        <path d="M62 70 Q90 40 120 66" />
        <path d="M104 98 Q130 76 158 112" />
        <path d="M76 112 Q100 150 132 128" />
        <path d="M88 54 Q120 80 140 92" />
      </g>
      {globeDots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#fde68a" />
      ))}
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <svg viewBox="0 0 400 420" className={styles.heroPrism}>
        <defs>
          <linearGradient id="prism-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bcd4ff" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="prism-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9cc0ff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#e8f0ff" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="prism-c" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5b8def" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#dbe7ff" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <polygon points="200,10 330,170 230,400" fill="url(#prism-b)" />
        <polygon points="200,10 90,190 230,400" fill="url(#prism-a)" />
        <polygon points="90,190 230,400 40,330" fill="url(#prism-c)" />
        <polyline
          points="200,10 90,190 230,400 330,170 200,10 230,400"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.9"
          strokeWidth="1.2"
        />
      </svg>

      <div className={styles.laptop}>
        <div className={styles.laptopScreen}>
          <div className={styles.laptopCopy}>
            <span>A Connected</span>
            <span>Future.</span>
          </div>
          <Globe id="hero-globe" />
        </div>
        <div className={styles.laptopBase} />
      </div>

      <div className={styles.plinth} />

      <div className={styles.heroStatCard}>
        <div className={styles.heroStatTop}>
          <span className={styles.heroStatIcon} />
          <div>
            <strong>Unified Infrastructure</strong>
            <small>One shared foundation</small>
          </div>
        </div>
        <div className={styles.heroStatBottom}>
          <div className={styles.miniBars}>
            {[40, 64, 52, 86, 70].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div>
            <b>7</b>
            <small>Core platforms</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ApproachVisual() {
  return (
    <div className={styles.approachPhoto} aria-hidden="true">
      <svg viewBox="0 0 420 340" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="room-wall" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b4250" />
            <stop offset="100%" stopColor="#d9dde4" />
          </linearGradient>
          <linearGradient id="room-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8ccd3" />
            <stop offset="100%" stopColor="#eef0f3" />
          </linearGradient>
          <linearGradient id="room-window" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e9f1fb" />
            <stop offset="100%" stopColor="#b8c7da" />
          </linearGradient>
        </defs>
        <rect width="420" height="340" fill="url(#room-wall)" />
        <polygon points="0,0 150,40 150,250 0,340" fill="url(#room-window)" />
        {[30, 60, 90, 120].map((x) => (
          <line
            key={x}
            x1={x}
            y1={x * 0.27}
            x2={x}
            y2={340 - x * 0.6}
            stroke="#2a2f38"
            strokeWidth="3"
          />
        ))}
        <line x1="0" y1="120" x2="150" y2="125" stroke="#2a2f38" strokeWidth="2" />
        <polygon points="150,40 420,0 420,60 150,70" fill="#f4f5f7" />
        <polygon points="150,250 420,250 420,340 0,340" fill="url(#room-floor)" />
        <polygon points="180,215 330,215 345,228 165,228" fill="#f9fafb" />
        <rect x="175" y="228" width="6" height="40" fill="#1f2937" />
        <rect x="330" y="228" width="6" height="40" fill="#1f2937" />
        <rect x="210" y="185" width="22" height="34" rx="4" fill="#111827" />
        <rect x="270" y="185" width="22" height="34" rx="4" fill="#111827" />
        <rect x="360" y="90" width="44" height="160" fill="#e5e7eb" />
        <rect x="364" y="96" width="36" height="148" fill="#cfd5dd" />
      </svg>
    </div>
  );
}

export function AiChipVisual() {
  const base = isoSlab(220, 120, 130, 70, 20);
  const chip = isoSlab(220, 92, 96, 52, 26);

  return (
    <svg viewBox="0 0 440 240" className={styles.aiChip} aria-hidden="true">
      <defs>
        <linearGradient id="chip-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b8cff" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="chip-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <linearGradient id="base-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe6ff" />
        </linearGradient>
      </defs>
      <g stroke="#93b4ff" strokeOpacity="0.55" strokeWidth="1.2" fill="none">
        <path d="M20 60 H90 L130 84" />
        <path d="M10 150 H80 L118 128" />
        <path d="M420 50 H350 L318 72" />
        <path d="M430 170 H360 L326 150" />
        <path d="M150 220 L190 196" />
        <path d="M300 226 L262 200" />
      </g>
      {[
        [20, 60],
        [10, 150],
        [420, 50],
        [430, 170],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#3b82f6" />
      ))}
      <polygon points={base.left} fill="#c7d6f5" />
      <polygon points={base.right} fill="#a9bde6" />
      <polygon points={base.top} fill="url(#base-top)" />
      <polygon points={chip.left} fill="url(#chip-side)" />
      <polygon points={chip.right} fill="#1e3a8a" />
      <polygon points={chip.top} fill="url(#chip-top)" />
      <text
        x="220"
        y="106"
        textAnchor="middle"
        fontSize="48"
        fontWeight="800"
        fill="#ffffff"
        transform="rotate(-28 220 92) skewX(18)"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        AI
      </text>
    </svg>
  );
}

export function LayerStackVisual() {
  const layers = [176, 140, 104, 68];

  return (
    <svg viewBox="0 0 360 340" className={styles.layerStack} aria-hidden="true">
      <defs>
        <linearGradient id="layer-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef4ff" />
          <stop offset="100%" stopColor="#c6d8ff" />
        </linearGradient>
        <linearGradient id="layer-top-hi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b8cff" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <ellipse
        cx="180"
        cy="200"
        rx="168"
        ry="62"
        fill="none"
        stroke="#bfd2ff"
        strokeDasharray="4 6"
      />
      <ellipse cx="180" cy="200" rx="128" ry="46" fill="none" stroke="#dbe6ff" />
      {[
        [12, 200],
        [348, 200],
        [180, 262],
        [62, 160],
        [298, 240],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="9" fill="#dbe6ff" />
          <circle cx={x} cy={y} r="4.5" fill="#2563eb" />
        </g>
      ))}
      {layers.map((y, index) => {
        const slab = isoSlab(180, y, 92, 48, 16);
        const highlighted = index === layers.length - 1;

        return (
          <g key={y} opacity={highlighted ? 1 : 0.96}>
            <polygon points={slab.left} fill={highlighted ? "#1e40af" : "#aac0ef"} />
            <polygon points={slab.right} fill={highlighted ? "#1e3a8a" : "#8ea9e3"} />
            <polygon
              points={slab.top}
              fill={highlighted ? "url(#layer-top-hi)" : "url(#layer-top)"}
              stroke="#ffffff"
              strokeOpacity="0.8"
            />
          </g>
        );
      })}
      <text
        x="180"
        y="76"
        textAnchor="middle"
        fontSize="24"
        fontWeight="800"
        fill="#ffffff"
        transform="rotate(-27 180 68) skewX(20)"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        AI
      </text>
    </svg>
  );
}

const codeLines = [
  [["k", "import"], ["p", " { Realtegic } "], ["k", "from"], ["s", " \"@realtegic/sdk\""]],
  [],
  [["k", "const"], ["p", " client = "], ["k", "new"], ["f", " Realtegic"], ["p", "({"]],
  [["p", "  apiKey: process.env."], ["v", "REALTEGIC_KEY"], ["p", ","]],
  [["p", "});"]],
  [],
  [["c", "// Send a message through Communications Cloud"]],
  [["k", "await"], ["p", " client.messages."], ["f", "send"], ["p", "({"]],
  [["p", "  channel: "], ["s", "\"whatsapp\""], ["p", ","]],
  [["p", "  to: customer.phone,"]],
  [["p", "  template: "], ["s", "\"order_confirmed\""], ["p", ","]],
  [["p", "});"]],
  [],
  [["c", "// Trigger an automation workflow"]],
  [["k", "await"], ["p", " client.workflows."], ["f", "run"], ["p", "("], ["s", "\"onboarding\""], ["p", ");"]],
] as const;

export function CodeLaptopVisual() {
  return (
    <div className={styles.devVisual} aria-hidden="true">
      <div className={styles.devScreen}>
        <div className={styles.devChrome}>
          <span />
          <span />
          <span />
          <em>app.ts</em>
        </div>
        <pre>
          {codeLines.map((line, lineIndex) => (
            <div key={lineIndex} className={styles.codeLine}>
              <i>{lineIndex + 1}</i>
              {line.map(([kind, text], tokenIndex) => (
                <span key={tokenIndex} className={styles[`tok_${kind}`]}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </pre>
      </div>
      <div className={styles.devBase} />
      <div className={styles.devCup} />
    </div>
  );
}

const arcDots: Point[] = [
  [120, 150],
  [190, 96],
  [262, 130],
  [330, 84],
  [214, 200],
  [300, 186],
  [380, 150],
  [150, 236],
];

export function CtaGlobe() {
  return (
    <svg viewBox="0 0 460 320" className={styles.ctaGlobe} aria-hidden="true">
      <defs>
        <radialGradient id="cta-globe-fill" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#020a24" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="330" r="290" fill="url(#cta-globe-fill)" />
      <g fill="none" stroke="#60a5fa" strokeOpacity="0.28">
        <circle cx="260" cy="330" r="290" />
        <ellipse cx="260" cy="330" rx="290" ry="120" />
        <ellipse cx="260" cy="330" rx="290" ry="210" />
        <ellipse cx="260" cy="330" rx="120" ry="290" />
        <ellipse cx="260" cy="330" rx="210" ry="290" />
      </g>
      <g fill="none" stroke="#93c5fd" strokeOpacity="0.7" strokeWidth="1.2">
        <path d="M120 150 Q160 80 190 96" />
        <path d="M190 96 Q240 70 330 84" />
        <path d="M262 130 Q300 150 380 150" />
        <path d="M214 200 Q250 160 300 186" />
        <path d="M150 236 Q180 190 214 200" />
      </g>
      {arcDots.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="7" fill="#60a5fa" fillOpacity="0.25" />
          <circle cx={x} cy={y} r="2.6" fill="#e0f2fe" />
        </g>
      ))}
    </svg>
  );
}
