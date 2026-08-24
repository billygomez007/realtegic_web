import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Insights at Realtegic",
  description:
    "Ideas, technology and what Realtegic is learning across AI, infrastructure, software and digital transformation.",
  path: "/insights",
});

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
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
