const infrastructureLayers = [
  "AI",
  "Communications",
  "Identity",
  "Integration",
  "Automation",
  "Data",
];

const productLayers = [
  "SuperKuba",
  "PropertyOS",
  "TrustPay",
  "Institutions",
  "GovTech",
  "Mobility",
  "Future Products",
];

const outcomes = ["Businesses", "Developers", "Institutions", "Governments"];

export default function EcosystemArchitecture() {
  return (
    <div
      className="ecosystem-architecture"
      role="img"
      aria-label="Realtegic ecosystem architecture showing infrastructure, products, and audiences"
    >
      <div className="ecosystem-architecture__frame">
        <div className="ecosystem-architecture__column">
          <span className="ecosystem-architecture__eyebrow">REALTEGIC</span>
          <strong>Technology Infrastructure</strong>
          <div className="ecosystem-architecture__layer-grid">
            {infrastructureLayers.map((layer, index) => (
              <span key={layer} className={`ecosystem-architecture__chip ecosystem-architecture__chip--infra-${index + 1}`}>
                {layer}
              </span>
            ))}
          </div>
        </div>

        <div className="ecosystem-architecture__connector" aria-hidden="true">
          <span />
        </div>

        <div className="ecosystem-architecture__column ecosystem-architecture__column--products">
          <span className="ecosystem-architecture__eyebrow">REALTEGIC PRODUCTS</span>
          <strong>Products & Applications</strong>
          <div className="ecosystem-architecture__layer-grid ecosystem-architecture__layer-grid--products">
            {productLayers.map((layer, index) => (
              <span key={layer} className={`ecosystem-architecture__chip ecosystem-architecture__chip--product-${index + 1}`}>
                {layer}
              </span>
            ))}
          </div>
        </div>

        <div className="ecosystem-architecture__connector ecosystem-architecture__connector--bottom" aria-hidden="true">
          <span />
        </div>

        <div className="ecosystem-architecture__outcomes">
          <span className="ecosystem-architecture__eyebrow">POWERING</span>
          <strong>Businesses</strong>
          <div className="ecosystem-architecture__outcome-grid">
            {outcomes.map((outcome) => (
              <span key={outcome}>{outcome}</span>
            ))}
          </div>
        </div>

        <svg
          className="ecosystem-architecture__paths"
          viewBox="0 0 900 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M450 130 C450 210, 450 250, 450 315"
            className="ecosystem-architecture__path"
          />
          <path
            d="M450 560 C450 660, 450 725, 450 830"
            className="ecosystem-architecture__path ecosystem-architecture__path--secondary"
          />
          <path
            d="M450 880 C450 960, 450 1005, 450 1080"
            className="ecosystem-architecture__path ecosystem-architecture__path--tertiary"
          />
          <circle cx="450" cy="130" r="7" className="ecosystem-architecture__node" />
          <circle cx="450" cy="315" r="8" className="ecosystem-architecture__node" />
          <circle cx="450" cy="560" r="7" className="ecosystem-architecture__node" />
          <circle cx="450" cy="830" r="8" className="ecosystem-architecture__node" />
          <circle cx="450" cy="1080" r="7" className="ecosystem-architecture__node" />
        </svg>
      </div>
    </div>
  );
}
