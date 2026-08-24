import { Code2, Cpu, Layers3, Plug, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";
import StatusBadge from "@/components/StatusBadge";

const developerCapabilities = [
  { icon: Cpu, label: "AI" },
  { icon: Sparkles, label: "Communications" },
  { icon: ShieldCheck, label: "Identity" },
  { icon: Plug, label: "Automation" },
  { icon: Layers3, label: "Integrations" },
  { icon: Code2, label: "Data" },
];

export default function DeveloperSection() {
  return (
    <section className="developer-section" id="developers">
      <div className="new-wrap developer-grid">
        <div className="developer-copy">
          <SectionEyebrow>FOR DEVELOPERS</SectionEyebrow>

          <h2>Built for What Developers Build Next.</h2>

          <p>
            Realtegic is building infrastructure that can eventually allow
            developers and businesses to integrate AI, communications,
            identity, automation, integrations and data through APIs and SDKs.
          </p>

          <div className="developer-copy__footer">
            <StatusBadge status="coming-soon">Coming Soon</StatusBadge>
            <Button asLink href="/innovation" variant="primary" size="lg">
              Explore Developer Platform
            </Button>
          </div>
        </div>

        <div className="developer-visual" aria-hidden="true">
          <div className="developer-visual__header">
            <span>Developer Platform</span>
            <strong>Coming Soon</strong>
          </div>

          <div className="developer-visual__capsules">
            {developerCapabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <div
                  className={`developer-visual__capsule developer-visual__capsule--${index + 1}`}
                  key={capability.label}
                >
                  <Icon size={16} />
                  <span>{capability.label}</span>
                </div>
              );
            })}
          </div>

          <div className="developer-visual__panel">
            <div className="developer-visual__line" />
            <div className="developer-visual__node developer-visual__node--left" />
            <div className="developer-visual__node developer-visual__node--center" />
            <div className="developer-visual__node developer-visual__node--right" />
          </div>

          <div className="developer-visual__note">
            APIs and SDKs are being prepared for future release.
          </div>
        </div>
      </div>
    </section>
  );
}
