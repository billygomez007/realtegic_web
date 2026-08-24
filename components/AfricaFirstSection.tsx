import AfricaNetworkVisual from "@/components/AfricaNetworkVisual";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function AfricaFirstSection() {
  return (
    <section className="africa-first-section" id="africa">
      <div className="new-wrap africa-first-grid">
        <div className="africa-first-copy">
          <SectionEyebrow>GLOBAL TECHNOLOGY</SectionEyebrow>

          <h2>Built for a Connected World.</h2>

          <p>
            Technology should work across markets, systems and industries.
            Realtegic is building adaptable infrastructure designed to connect
            businesses, applications, people and institutions wherever they
            operate.
          </p>

          <ul className="africa-first-list">
            <li>Global scalability</li>
            <li>Interoperability</li>
            <li>Cross-market integration</li>
            <li>Modern communications</li>
            <li>Developer ecosystems</li>
            <li>Enterprise systems</li>
            <li>Digital payments</li>
            <li>Adaptable infrastructure</li>
          </ul>
        </div>

        <AfricaNetworkVisual className="africa-network-visual--muted" />
      </div>
    </section>
  );
}
