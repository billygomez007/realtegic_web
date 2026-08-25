import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import StatusBadge from "@/components/StatusBadge";

export const metadata: Metadata = createPageMetadata({
  title: "Developers",
  description:
    "Realtegic is building shared technology infrastructure across AI, communications, identity, integrations, automation, data and developer services. External developer access is planned but not yet available.",
  path: "/developers",
});

const capabilities = [
  {
    name: "AI Platform",
    text: "Language, reasoning and intelligent-agent capabilities that power AI features across Realtegic products today, with a future path to developer-facing access.",
  },
  {
    name: "Communications Cloud",
    text: "Messaging, notifications and channel infrastructure used internally to connect Realtegic products with the people who use them.",
  },
  {
    name: "Identity Cloud",
    text: "Authentication, authorization and identity foundations that Realtegic products rely on to keep accounts and access secure.",
  },
  {
    name: "Integration Cloud",
    text: "Connective infrastructure for linking Realtegic products with each other and, eventually, with external systems.",
  },
  {
    name: "Automation Cloud",
    text: "Workflow and process-automation capabilities that reduce manual work inside Realtegic products and internal operations.",
  },
  {
    name: "Data & Intelligence Platform",
    text: "Data pipelines and analytics foundations that help Realtegic products make sense of information responsibly.",
  },
  {
    name: "Developer Cloud",
    text: "The planned home for public APIs, SDKs, sandbox environments and documentation once external developer access becomes available.",
  },
];

export default function DevelopersPage() {
  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <small className="section-eyebrow">DEVELOPERS</small>
            <h1>
              The developer platform is
              <span> being built, not launched yet.</span>
            </h1>
            <p>
              Realtegic is developing shared technology infrastructure across AI,
              communications, identity, integrations, automation, data and developer
              services. These capabilities currently power our own products internally.
              External developer access — APIs, SDKs and documentation — is planned for
              the future but is not available today.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Talk to us about developer access
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/company" className="rt-btn rt-btn-outline">
                See our technology architecture
              </Link>
            </div>
          </div>

          <div className="platform-card platform-card--featured" style={{ padding: 32 }}>
            <div className="platform-card__body">
              <div className="platform-card__content">
                <small>STATUS</small>
                <h3>Developer Access</h3>
                <p>
                  There is no public API, SDK, developer console or sandbox account
                  available yet. What follows is an honest look at the infrastructure
                  we are building and how it may eventually reach developers.
                </p>
                <StatusBadge status="coming-soon">Developer Access — Coming Soon</StatusBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platforms-section">
        <div className="new-wrap">
          <small className="section-eyebrow">OUR TECHNOLOGY FOUNDATION</small>
          <h2 className="dev-section-heading">
            Infrastructure we are building
            <span> today.</span>
          </h2>
          <p className="dev-section-lede">
            Each of these areas is real infrastructure work happening inside Realtegic
            right now. None of them currently offer public developer access — this is a
            transparent look at what exists internally and where it may head next.
          </p>

          <div className="platform-grid">
            {capabilities.map((capability) => (
              <article className="platform-card" key={capability.name}>
                <div className="platform-card__body">
                  <div className="platform-card__content">
                    <small>PLANNED CAPABILITY</small>
                    <h3>{capability.name}</h3>
                    <p>{capability.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="platforms-section dev-access-section">
        <div className="new-wrap">
          <small className="section-eyebrow">WHAT WILL CHANGE</small>
          <h2 className="dev-section-heading">
            What developer access
            <span> will eventually include.</span>
          </h2>
          <div className="dev-access-grid">
            <div className="dev-access-card">
              <strong>Documentation</strong>
              <p>Reference material describing available APIs, capabilities and limits.</p>
            </div>
            <div className="dev-access-card">
              <strong>SDKs and tooling</strong>
              <p>Client libraries and developer tooling for integrating with Realtegic infrastructure.</p>
            </div>
            <div className="dev-access-card">
              <strong>Sandbox environments</strong>
              <p>Safe, non-production environments for testing integrations before going live.</p>
            </div>
            <div className="dev-access-card">
              <strong>Access management</strong>
              <p>A defined process for requesting, provisioning and monitoring developer access.</p>
            </div>
          </div>
          <p className="dev-access-disclaimer">
            None of the items above exist as public offerings today. We are sharing this
            roadmap for transparency, not as a commitment to a specific launch date.
          </p>
        </div>
      </section>

      <section className="platforms-section dev-cta-section">
        <div className="new-wrap">
          <div className="platform-card platform-card--featured" style={{ padding: 32 }}>
            <div className="platform-card__body">
              <div className="platform-card__content">
                <small>GET IN TOUCH</small>
                <h3>Building something that needs Realtegic infrastructure?</h3>
                <p>
                  If you are exploring a partnership, integration or technical
                  collaboration with Realtegic, contact us directly. We do not offer
                  self-serve API keys or SDK downloads today, but we are glad to talk
                  about what you are trying to build.
                </p>
                <div className="hero-actions">
                  <Link href="/contact" className="rt-btn rt-btn-primary">
                    Contact Realtegic
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
