const diagramSteps = [
  {
    title: "REALTEGIC",
    detail: "The parent technology company",
  },
  {
    title: "Infrastructure",
    detail: "Reusable systems and shared capabilities",
  },
  {
    title: "Platforms",
    detail: "Foundational products and services",
  },
  {
    title: "Applications",
    detail: "Solutions built on the stack",
  },
];

const audiences = [
  "Businesses",
  "Institutions",
  "Developers",
  "Governments",
];

export default function InfrastructureDiagram() {
  return (
    <div
      className="infrastructure-diagram"
      role="img"
      aria-label="Realtegic infrastructure diagram showing company, infrastructure, platforms, applications, and audiences"
    >
      <div className="infrastructure-diagram__rail" aria-hidden="true" />

      <div className="infrastructure-diagram__brand">
        <span className="infrastructure-diagram__brand-dot" aria-hidden="true" />
        <strong>REALTEGIC</strong>
      </div>

      <div className="infrastructure-diagram__stack">
        {diagramSteps.slice(1).map((step, index) => (
          <article
            className={`infrastructure-diagram__block infrastructure-diagram__block--${index + 1}`}
            key={step.title}
          >
            <div className="infrastructure-diagram__node" aria-hidden="true" />
            <div className="infrastructure-diagram__block-copy">
              <span>{step.title}</span>
              <p>{step.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="infrastructure-diagram__outcomes">
        {audiences.map((audience) => (
          <span key={audience}>{audience}</span>
        ))}
      </div>
    </div>
  );
}
