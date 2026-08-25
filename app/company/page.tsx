import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Company",
  description:
    "Realtegic builds foundational digital infrastructure, intelligent platforms and applications for businesses, developers and institutions.",
  path: "/company",
});

const foundationAreas = [
  "AI Platform",
  "Communications Cloud",
  "Identity Cloud",
  "Integration Cloud",
  "Automation Cloud",
  "Data & Intelligence Platform",
  "Developer Cloud",
];

const productLayers = [
  "SuperKuba",
  "PropertyOS",
  "TrustPay",
  "Tap & Order",
  "Institution Platform",
  "Mobility Platform",
];

const approachSteps = [
  "Foundational Technology",
  "Shared Cloud Services",
  "Products & Applications",
  "Industry Solutions",
  "Developer Ecosystem",
];

const principles = [
  {
    title: "Practical",
    text: "We build technology around real operational problems rather than technology for its own sake.",
  },
  {
    title: "Intelligent",
    text: "We use AI and automation where they can genuinely improve how people and organizations work.",
  },
  {
    title: "Connected",
    text: "Our products are designed to communicate with other systems, services and platforms rather than operate as isolated software.",
  },
  {
    title: "Scalable",
    text: "We build foundations that can evolve across industries, organizations and markets.",
  },
];

export default function CompanyPage() {
  return (
    <main className="company-page">
      <section className="company-hero">
        <div className="company-wrap">
          <span className="company-eyebrow">COMPANY</span>
          <h1>
            Building the Technology Behind
            <span> What Comes Next.</span>
          </h1>
          <p>
            Realtegic is a technology company building foundational digital
            infrastructure, intelligent platforms and applications designed to help
            businesses, developers and institutions operate, build and grow.
          </p>
          <div className="company-actions">
            <Link href="/about" className="company-primary-action">
              About Realtegic
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="company-secondary-action">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-wrap company-story-grid">
          <div>
            <span className="company-eyebrow company-eyebrow-muted">HOW WE OPERATE</span>
            <h2>
              Technology built with
              <span> purpose.</span>
            </h2>
          </div>
          <div className="company-story-copy">
            <p>
              Realtegic brings together software engineering, artificial
              intelligence, automation, communications, data and digital product
              development to build technology that solves practical problems.
            </p>
            <p>
              We operate with a platform-first philosophy. Instead of building every
              product as an isolated system, we are developing reusable technology
              infrastructure that can power multiple Realtegic products and, over
              time, enable other businesses and developers to build on the same
              foundation.
            </p>
            <p>
              This approach allows Realtegic to create an expanding ecosystem of
              infrastructure platforms, applications and intelligent services from a
              shared technology foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="company-section company-architecture-section">
        <div className="company-wrap">
          <span className="company-eyebrow">WHAT WE BUILD</span>
          <h2>
            Infrastructure underneath.
            <span> Products on top.</span>
          </h2>
          <div className="company-architecture">
            <div className="company-architecture-level company-architecture-level--primary">
              REALTEGIC
            </div>
            <div className="company-architecture-arrow">↓</div>
            <div className="company-architecture-stack">
              <strong>TECHNOLOGY INFRASTRUCTURE</strong>
              <ul>
                {foundationAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="company-architecture-arrow">↓</div>
            <div className="company-architecture-stack">
              <strong>PRODUCTS &amp; APPLICATIONS</strong>
              <ul>
                {productLayers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="company-architecture-arrow">↓</div>
            <div className="company-architecture-stack">
              <strong>SERVING</strong>
              <ul>
                <li>Businesses</li>
                <li>Developers</li>
                <li>Institutions</li>
                <li>Enterprises</li>
                <li>Governments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section company-foundation-section">
        <div className="company-wrap company-foundation-grid">
          <div>
            <span className="company-eyebrow">OUR TECHNOLOGY FOUNDATION</span>
            <h2>
              One foundation.
              <span> Many possibilities.</span>
            </h2>
          </div>
          <div className="company-foundation-copy">
            <p>
              Realtegic is building shared infrastructure across artificial
              intelligence, communications, identity, integrations, automation,
              data and developer services.
            </p>
            <p>
              These technologies are designed to work together, allowing Realtegic
              products to share capabilities instead of rebuilding the same
              foundations repeatedly.
            </p>
            <p>
              Over time, parts of this infrastructure may also become available to
              developers, businesses and institutions through APIs, SDKs and
              developer tools.
            </p>
            <div className="company-status-row">
              <span className="company-status">Developer Access — Coming Soon</span>
              <span className="company-status-copy">
                Public APIs, SDKs and developer tools are not available yet.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section company-principles-section">
        <div className="company-wrap">
          <span className="company-eyebrow">HOW WE BUILD</span>
          <h2>
            Start with the problem.
            <span> Build the system around it.</span>
          </h2>
          <div className="company-principles-grid">
            {principles.map((principle) => (
              <div key={principle.title} className="company-principle-card">
                <strong>{principle.title}</strong>
                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section company-approach-section">
        <div className="company-wrap">
          <span className="company-eyebrow">OUR APPROACH</span>
          <h2>
            Build once.
            <span> Extend intelligently.</span>
          </h2>
          <div className="company-approach-flow">
            {approachSteps.map((step, index) => (
              <div key={step} className="company-approach-step">
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <p className="company-approach-copy">
            By developing common infrastructure first, Realtegic can create new
            products faster, connect capabilities across the portfolio and build a
            technology ecosystem that becomes more useful as it grows.
          </p>
        </div>
      </section>

      <section className="company-section company-labs-section">
        <div className="company-wrap company-labs-grid">
          <div>
            <span className="company-eyebrow">REALTEGIC LABS</span>
            <h2>
              Exploring what
              <span> comes next.</span>
            </h2>
          </div>
          <div className="company-labs-copy">
            <p>
              Realtegic Labs represents our long-term exploration of emerging
              technologies, intelligent systems and new infrastructure possibilities.
            </p>
            <ul>
              <li>artificial intelligence</li>
              <li>intelligent agents</li>
              <li>language technology</li>
              <li>automation</li>
              <li>communications infrastructure</li>
              <li>developer infrastructure</li>
              <li>data intelligence</li>
              <li>emerging digital systems</li>
            </ul>
            <Link href="/innovation" className="company-secondary-link">
              Explore Innovation
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="company-section company-info-section">
        <div className="company-wrap">
          <span className="company-eyebrow">COMPANY INFORMATION</span>
          <div className="company-info-grid">
            <div className="company-info-card">
              <small>Company</small>
              <strong>Realtegic</strong>
            </div>
            <div className="company-info-card">
              <small>Industry</small>
              <strong>Technology</strong>
            </div>
            <div className="company-info-card company-info-card--wide">
              <small>Office</small>
              <strong>{siteConfig.officeAddress[0]}</strong>
              <span>{siteConfig.officeAddress[1]}</span>
            </div>
            <div className="company-info-card">
              <small>Email</small>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div className="company-info-card">
              <small>Telephone</small>
              {siteConfig.phoneNumbers.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.number}
                </a>
              ))}
            </div>
            <div className="company-info-card">
              <small>Website</small>
              <a href={siteConfig.url}>{siteConfig.domain}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="company-final-cta">
        <div className="company-wrap">
          <span className="company-eyebrow company-eyebrow-light">FINAL CTA</span>
          <h2>
            Let&apos;s Build What&apos;s Next.
          </h2>
          <p>
            Whether you&apos;re building a business, an application or a new way of
            doing things, Realtegic is building technology designed to help make it
            possible.
          </p>
          <div className="company-actions">
            <Link href="/products" className="company-primary-action company-primary-action--light">
              Explore Our Technology
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="company-secondary-action company-secondary-action--light">
              Talk to Realtegic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
