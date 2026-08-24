import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InfrastructureDiagram from "@/components/InfrastructureDiagram";
import PlatformCard from "@/components/PlatformCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import { createPageMetadata } from "@/lib/metadata";
import { platforms } from "@/lib/infrastructure";

export const metadata: Metadata = createPageMetadata({
  title: "Infrastructure at Realtegic",
  description:
    "Realtegic builds reusable technology infrastructure across AI, communications, identity, integrations, automation, data and developer platforms.",
  path: "/infrastructure",
});

export default function InfrastructurePage() {
  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <SectionEyebrow>INFRASTRUCTURE</SectionEyebrow>
            <h1>
              Reusable technology foundations for
              <span> the systems that come next.</span>
            </h1>
            <p>
              Realtegic builds infrastructure first so its products and future
              digital experiences can share the same intelligence, data, identity,
              automation and communication foundations.
            </p>
            <div className="hero-actions">
              <Link href="#platforms" className="rt-btn rt-btn-primary">
                Explore Platforms
                <ArrowRight size={17} />
              </Link>
              <Link href="/products" className="rt-btn rt-btn-outline">
                View Products
              </Link>
            </div>
          </div>

          <InfrastructureDiagram />
        </div>
      </section>

      <section className="platforms-section" id="platforms">
        <div className="new-wrap">
          <div className="section-intro">
            <div>
              <SectionEyebrow>OUR TECHNOLOGY INFRASTRUCTURE</SectionEyebrow>
              <h2>
                Infrastructure
                <span> Platforms</span>
              </h2>
            </div>

            <p>
              The platforms below represent Realtegic&apos;s technology vision and the
              shared capabilities behind its products. Lifecycle status indicates the
              current stage of development and does not imply public availability.
            </p>
          </div>

          <div className="platform-grid">
            {platforms.map((platform) => (
              <PlatformCard key={platform.slug} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="infrastructure-summary">
        <div className="new-wrap infrastructure-summary-grid">
          <div>
            <SectionEyebrow>PLATFORM STRATEGY</SectionEyebrow>
            <h2>
              Shared foundations.
              <span> Better products.</span>
            </h2>
          </div>
          <div>
            <p>
              Realtegic is building a connected technology stack where AI,
              communications, identity, data, integrations and automation work
              together rather than as isolated systems. This allows products to share
              common infrastructure and evolve more efficiently over time.
            </p>
            <p>
              Some platforms are in research, internal, preview or development stages.
              Others may become available to customers, partners or developers through
              dedicated channels in the future. Public APIs, SDKs and developer
              access remain explicitly unavailable until they are launched.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
