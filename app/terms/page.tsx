import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms at Realtegic",
  description:
    "Realtegic terms of use and service principles for sites, products, and customer relationships.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <small className="section-eyebrow">TERMS</small>
            <h1>
              Terms are the framework for
              <span> responsible digital relationships.</span>
            </h1>
            <p>
              Realtegic uses clear operational terms to support our customer, partner and product relationships, while emphasizing that this page is a candid overview rather than a final legal document set.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact us
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
                <small>CORE PRINCIPLES</small>
                <h3>Clear usage and accountability</h3>
                <p>
                  Our terms and service principles are intended to define responsibilities, access expectations and operational boundaries as we mature the platform and product ecosystem.
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
                  <small>1</small>
                  <h3>Responsibilities</h3>
                  <p>Users, customers and partners are expected to use services in line with their intended purpose, applicable law and the service terms in effect.</p>
                </div>
              </div>
            </article>
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>2</small>
                  <h3>Service clarity</h3>
                  <p>Operational availability and product maturity are communicated honestly, especially where services remain private, preview-only or under active development.</p>
                </div>
              </div>
            </article>
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>3</small>
                  <h3>Updates</h3>
                  <p>Terms and policies may evolve as the business and technology platform mature, and it is important that customers review current versions when engaging us.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
