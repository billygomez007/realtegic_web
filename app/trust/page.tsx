import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Trust at Realtegic",
  description:
    "Realtegic is building trust, security and accountability into the foundation of its infrastructure, products and customer relationships.",
  path: "/trust",
});

export default function TrustPage() {
  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <small className="section-eyebrow">TRUST & SECURITY</small>
            <h1>
              Trust is designed into the system,
              <span> not treated as an afterthought.</span>
            </h1>
            <p>
              Realtegic is building technology with accountability, secure foundations,
              clear lifecycle status, and honest communication around what is available,
              what is in preview, and what is still under development.
            </p>
            <div className="hero-actions">
              <Link href="/security" className="rt-btn rt-btn-primary">
                Security overview
                <ArrowRight size={17} />
              </Link>
              <Link href="/privacy" className="rt-btn rt-btn-outline">
                Privacy
              </Link>
            </div>
          </div>

          <div className="platform-card platform-card--featured" style={{ padding: 32 }}>
            <div className="platform-card__body">
              <div className="platform-card__content">
                <small>OUR APPROACH</small>
                <h3>Responsible technology</h3>
                <p>
                  We prioritize secure systems, clear operational boundaries, and truthful product status as the basis for long-term trust with customers, partners and teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platforms-section">
        <div className="new-wrap">
          <div className="platform-grid">
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>FOUNDATION</small>
                  <h3>Security by design</h3>
                  <p>Security, governance and operational discipline are treated as core product decisions from the earliest stages of design.</p>
                </div>
              </div>
            </article>
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>CLARITY</small>
                  <h3>Honest lifecycle status</h3>
                  <p>We clearly distinguish between research, internal systems, private preview, public preview and available products so customers know the real status.</p>
                </div>
              </div>
            </article>
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>ACCOUNTABILITY</small>
                  <h3>Transparent communication</h3>
                  <p>Customer, partner and stakeholder communication remains candid, especially where public access is limited or still under development.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
