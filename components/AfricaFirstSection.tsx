import AfricaNetworkVisual from "@/components/AfricaNetworkVisual";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function AfricaFirstSection() {
  return (
    <section className="africa-first-section" id="africa">
      <div className="new-wrap africa-first-grid">
        <div className="africa-first-copy">
          <SectionEyebrow>BUILT IN AFRICA</SectionEyebrow>

          <h2>Built in Africa. Built for the World.</h2>

          <p>
            Realtegic begins with the realities of African markets while
            designing technology capable of global operation.
          </p>

          <ul className="africa-first-list">
            <li>Mobile-first markets</li>
            <li>Local communication channels</li>
            <li>Digital payments</li>
            <li>Local languages</li>
            <li>Fragmented business systems</li>
            <li>Emerging-market infrastructure</li>
            <li>Public-sector transformation</li>
            <li>Global scalability</li>
          </ul>
        </div>

        <AfricaNetworkVisual className="africa-network-visual--muted" />
      </div>
    </section>
  );
}
