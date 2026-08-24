import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy at Realtegic",
  description:
    "Realtegic privacy principles and how we approach privacy for customer, partner and operational data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <small className="section-eyebrow">PRIVACY</small>
            <h1>
              Privacy is a product decision,
              <span> not a checkbox.</span>
            </h1>
            <p>
              Realtegic is building its products and infrastructure with clear respect for
              customer, partner and user data. This page outlines the principles guiding
              that work while we continue to mature the full legal privacy documentation.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact us
                <ArrowRight size={17} />
              </Link>
              <Link href="/terms" className="rt-btn rt-btn-outline">
                Terms
              </Link>
            </div>
          </div>

          <div className="platform-card platform-card--featured" style={{ padding: 32 }}>
            <div className="platform-card__body">
              <div className="platform-card__content">
                <small>OUR APPROACH</small>
                <h3>Data with purpose</h3>
                <p>
                  We aim to collect only what is necessary to operate services, support customers,
                  and improve the reliability of our technology.
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
                  <h3>Purpose limitation</h3>
                  <p>We use personal and operational data for the specific business and service purposes involved in delivering our products and infrastructure.</p>
                </div>
              </div>
            </article>
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>2</small>
                  <h3>Security and access</h3>
                  <p>Data is protected with reasonable operational controls, access boundaries and security practices appropriate to the systems we build.</p>
                </div>
              </div>
            </article>
            <article className="platform-card">
              <div className="platform-card__body">
                <div className="platform-card__content">
                  <small>3</small>
                  <h3>Transparency</h3>
                  <p>We will communicate material privacy practices clearly, especially when services, access models or customer responsibilities change.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
