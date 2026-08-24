import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import SectionEyebrow from "@/components/SectionEyebrow";
import { createPageMetadata } from "@/lib/metadata";
import { platformBySlug, platformDetails, platforms } from "@/lib/infrastructure";

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = platformBySlug[slug];

  if (!platform) {
    return createPageMetadata({
      title: "Platform not found",
      description: "The requested Realtegic platform could not be found.",
      path: "/infrastructure",
    });
  }

  return createPageMetadata({
    title: `${platform.name} | Realtegic Infrastructure`,
    description: platform.description,
    path: `/infrastructure/${slug}`,
  });
}

export default async function InfrastructureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = platformBySlug[slug];

  if (!platform) {
    notFound();
  }

  const Icon = platform.icon;
  const details = platformDetails[slug] ?? {
    summary: platform.description,
    capabilities: [],
    outcomes: [],
    availability: "Availability details will be shared as this platform matures.",
  };

  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <SectionEyebrow>{platform.category}</SectionEyebrow>
            <h1>
              {platform.name}
              <span> for connected digital systems.</span>
            </h1>
            <p>{details.summary}</p>
            <div className="hero-actions">
              <Link href="/infrastructure" className="rt-btn rt-btn-primary">
                Back to infrastructure
                <ArrowRight size={17} />
              </Link>
              <Link href="/products" className="rt-btn rt-btn-outline">
                View products
              </Link>
            </div>
          </div>

          <div className="platform-card platform-card--featured" style={{ padding: 32 }}>
            <div className="platform-card__top">
              <div className="platform-card__icon" aria-hidden="true">
                <Icon size={26} />
              </div>
              <span className="status-badge status-badge--dark">{platform.lifecycleStatus}</span>
            </div>
            <div className="platform-card__body">
              <div className="platform-card__content">
                <small>{platform.category}</small>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <div className="platform-card__meta">
                  <span>{platform.publicAvailability ? "Public preview available" : "Not publicly available"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platforms-section">
        <div className="new-wrap">
          <div className="section-intro">
            <div>
              <SectionEyebrow>CAPABILITIES</SectionEyebrow>
              <h2>
                What this <span>foundation enables</span>
              </h2>
            </div>
            <p>{details.availability}</p>
          </div>

          <div className="platform-grid">
            {details.capabilities.map((capability, index) => (
              <article key={capability} className="platform-card">
                <div className="platform-card__top">
                  <div className="platform-card__icon" aria-hidden="true">
                    <CheckCircle2 size={22} />
                  </div>
                  <span className="status-badge status-badge--dark">0{index + 1}</span>
                </div>
                <div className="platform-card__body">
                  <div className="platform-card__content">
                    <h3>{capability}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="infrastructure-summary">
        <div className="new-wrap infrastructure-summary-grid">
          <div>
            <SectionEyebrow>VALUE</SectionEyebrow>
            <h2>
              Designed to <span>compound over time.</span>
            </h2>
          </div>
          <div>
            <ul className="list-checks" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {details.outcomes.map((outcome) => (
                <li key={outcome} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
                  <CheckCircle2 size={18} style={{ marginTop: 4 }} />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
