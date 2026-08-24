import { FlaskConical, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";

const labTracks = [
  "AI research",
  "African language technology",
  "Intelligent systems",
  "New infrastructure",
  "Experimental products",
  "Developer research",
  "Emerging technologies",
];

export default function InnovationSection() {
  return (
    <section className="innovation-section innovation-section--labs" id="innovation">
      <div className="new-wrap innovation-grid innovation-grid--labs">
        <div className="innovation-labs-visual" aria-hidden="true">
          <div className="innovation-labs-visual__orb" />
          <div className="innovation-labs-visual__core">
            <FlaskConical size={44} />
            <span>REALTEGIC LABS</span>
            <strong>Building What Comes Next.</strong>
          </div>
          <div className="innovation-labs-visual__tracks">
            {labTracks.map((track, index) => (
              <span
                key={track}
                className={`innovation-labs-visual__track innovation-labs-visual__track--${index + 1}`}
              >
                {track}
              </span>
            ))}
          </div>
        </div>

        <div className="innovation-labs-copy">
          <SectionEyebrow>REALTEGIC LABS</SectionEyebrow>

          <h2>Building What Comes Next.</h2>

          <p>
            The Realtegic Labs section is prepared for future content around AI
            research, intelligent systems, new infrastructure, experimental
            products, developer research and emerging technologies.
          </p>

          <div className="innovation-labs-copy__footer">
            <Sparkles size={16} />
            <span>Research achievements are not implied here.</span>
          </div>

          <Button asLink href="/innovation" variant="secondary" size="lg">
            Explore Innovation
          </Button>
        </div>
      </div>
    </section>
  );
}
