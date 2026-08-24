export interface AfricaNetworkVisualProps {
  className?: string;
}

export default function AfricaNetworkVisual({
  className = "",
}: AfricaNetworkVisualProps) {
  return (
    <div
      className={`africa-network-visual ${className}`.trim()}
      role="img"
      aria-label="Stylized map of Africa connected by digital infrastructure nodes"
    >
      <div className="africa-network-visual__labels" aria-hidden="true">
        <span className="africa-network-visual__label africa-network-visual__label--north">
          Businesses
        </span>
        <span className="africa-network-visual__label africa-network-visual__label--east">
          Developers
        </span>
        <span className="africa-network-visual__label africa-network-visual__label--west">
          Institutions
        </span>
        <span className="africa-network-visual__label africa-network-visual__label--south">
          Governments
        </span>
      </div>

      <div className="africa-network-visual__frame">
        <svg
          className="africa-network-visual__svg"
          viewBox="0 0 720 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="africaGlow" cx="0" cy="0" r="1">
              <stop offset="0%" stopColor="#1683ff" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#0dd9ff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0dd9ff" stopOpacity="0" />
            </radialGradient>
            <pattern
              id="africaGrid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="720" height="720" fill="url(#africaGrid)" opacity="0.95" />

          <circle cx="360" cy="360" r="250" fill="url(#africaGlow)" opacity="0.45" />

          <path
            className="africa-network-visual__route africa-network-visual__route--one"
            d="M 206 214 C 262 198, 297 182, 350 181 C 405 180, 454 194, 507 214"
          />
          <path
            className="africa-network-visual__route africa-network-visual__route--two"
            d="M 186 325 C 255 306, 309 302, 360 305 C 412 309, 472 323, 540 350"
          />
          <path
            className="africa-network-visual__route africa-network-visual__route--three"
            d="M 254 502 C 301 461, 331 434, 357 409 C 387 381, 423 348, 485 286"
          />
          <path
            className="africa-network-visual__route africa-network-visual__route--four"
            d="M 258 523 C 308 548, 360 556, 409 548 C 466 538, 507 513, 547 478"
          />

          <path
            className="africa-network-visual__continent"
            d="M 333 82
               C 305 87, 278 97, 255 114
               C 233 131, 215 154, 204 181
               C 192 210, 185 229, 171 253
               C 159 274, 148 295, 150 320
               C 153 349, 166 371, 180 393
               C 195 417, 205 442, 218 470
               C 232 500, 246 519, 262 539
               C 280 561, 299 582, 321 594
               C 343 606, 364 612, 388 605
               C 409 598, 421 582, 431 560
               C 442 536, 452 516, 470 500
               C 490 482, 506 468, 521 447
               C 538 423, 548 398, 551 372
               C 554 349, 548 329, 540 309
               C 530 286, 530 267, 542 248
               C 555 227, 562 205, 556 180
               C 548 149, 532 126, 508 109
               C 483 91, 457 83, 427 80
               C 394 77, 363 77, 333 82 Z"
          />

          <path
            className="africa-network-visual__outline"
            d="M 333 82
               C 305 87, 278 97, 255 114
               C 233 131, 215 154, 204 181
               C 192 210, 185 229, 171 253
               C 159 274, 148 295, 150 320
               C 153 349, 166 371, 180 393
               C 195 417, 205 442, 218 470
               C 232 500, 246 519, 262 539
               C 280 561, 299 582, 321 594
               C 343 606, 364 612, 388 605
               C 409 598, 421 582, 431 560
               C 442 536, 452 516, 470 500
               C 490 482, 506 468, 521 447
               C 538 423, 548 398, 551 372
               C 554 349, 548 329, 540 309
               C 530 286, 530 267, 542 248
               C 555 227, 562 205, 556 180
               C 548 149, 532 126, 508 109
               C 483 91, 457 83, 427 80
               C 394 77, 363 77, 333 82 Z"
          />

          <circle className="africa-network-visual__node africa-network-visual__node--one" cx="244" cy="202" r="8" />
          <circle className="africa-network-visual__node africa-network-visual__node--two" cx="350" cy="181" r="9" />
          <circle className="africa-network-visual__node africa-network-visual__node--three" cx="510" cy="220" r="8" />
          <circle className="africa-network-visual__node africa-network-visual__node--four" cx="205" cy="322" r="7" />
          <circle className="africa-network-visual__node africa-network-visual__node--five" cx="360" cy="306" r="10" />
          <circle className="africa-network-visual__node africa-network-visual__node--six" cx="530" cy="350" r="7" />
          <circle className="africa-network-visual__node africa-network-visual__node--seven" cx="260" cy="520" r="7" />
          <circle className="africa-network-visual__node africa-network-visual__node--eight" cx="357" cy="408" r="9" />
          <circle className="africa-network-visual__node africa-network-visual__node--nine" cx="483" cy="286" r="8" />
          <circle className="africa-network-visual__node africa-network-visual__node--ten" cx="470" cy="500" r="7" />
        </svg>
      </div>
    </div>
  );
}
