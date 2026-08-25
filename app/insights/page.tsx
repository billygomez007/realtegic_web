import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Insights",
  description:
    "Ideas, technology and what Realtegic is learning across AI, infrastructure, software and digital transformation.",
  path: "/insights",
});

const topics = [
  "Artificial Intelligence",
  "Software Infrastructure",
  "Communications & Messaging",
  "Automation",
  "Data & Analytics",
  "Developer Platforms",
  "Digital Transformation",
  "Industry Solutions",
];

export default function InsightsPage() {
  return (
    <main className="simple-page">
      <section className="page-section">
        <div className="container">
          <span className="rt-eyebrow">INSIGHTS</span>
          <h1>Ideas, Technology and What We&apos;re Learning.</h1>
          <p>
            Realtegic Insights will explore perspectives on AI, infrastructure,
            software, automation, digital transformation, product development and
            emerging technology.
          </p>

          <div className="simple-card">
            <p>No articles have been published yet.</p>
            <div className="rt-actions">
              <Link href="/innovation" className="rt-btn rt-btn-primary">
                Explore Innovation
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <h2 className="careers-subheading">Topics we expect to cover</h2>
          <p className="careers-subheading-lede">
            When we start publishing, these are the categories we expect Realtegic
            Insights to cover, based on the technology we are already building. This is
            a preview of direction, not a schedule or a promise of specific articles.
          </p>
          <div className="simple-grid">
            {topics.map((topic) => (
              <div key={topic} className="simple-grid-card">
                <strong>{topic}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
