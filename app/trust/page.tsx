import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Lock, Mail, ShieldCheck } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

const trustLinks = [
  {
    href: "/security",
    icon: ShieldCheck,
    title: "Security",
    text: "How we approach secure-by-design engineering, access control, and responsible disclosure.",
  },
  {
    href: "/privacy",
    icon: Lock,
    title: "Privacy",
    text: "What information we collect, how we use it, and the choices available to you.",
  },
  {
    href: "/terms",
    icon: FileText,
    title: "Terms",
    text: "The responsibilities and expectations that apply to our website and published products.",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Contact",
    text: "Reach Realtegic directly with trust, security, or privacy questions.",
  },
];

const aiCommitments = [
  {
    title: "Human oversight",
    text: "AI-assisted features are designed to support human decisions, not replace accountability for them.",
  },
  {
    title: "Transparency about capabilities",
    text: "We aim to be clear about what an AI-enabled feature can and cannot reliably do, rather than overstating it.",
  },
  {
    title: "Data minimization",
    text: "AI features are designed to use the data reasonably necessary for the task, not to collect more than needed.",
  },
  {
    title: "Security-conscious design",
    text: "AI-enabled systems follow the same security-by-design principles we apply across our technology.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Trust Center",
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
                <ArrowRight size={17} aria-hidden="true" />
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

      <section className="platforms-section trust-hub-section">
        <div className="new-wrap">
          <small className="section-eyebrow">TRUST HUB</small>
          <h2 className="dev-section-heading">
            Everything about how we
            <span> handle trust, in one place.</span>
          </h2>
          <div className="platform-grid trust-hub-grid">
            {trustLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link href={link.href} className="platform-card trust-hub-card" key={link.href}>
                  <div className="platform-card__body">
                    <div className="platform-card__top">
                      <div className="platform-card__icon">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                    </div>
                    <div className="platform-card__content">
                      <h3>{link.title}</h3>
                      <p>{link.text}</p>
                    </div>
                    <span className="platform-card__link">
                      View {link.title}
                      <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="platforms-section">
        <div className="new-wrap">
          <small className="section-eyebrow">RESPONSIBLE AI</small>
          <h2 className="dev-section-heading">
            AI commitments,
            <span> not certifications.</span>
          </h2>
          <p className="dev-section-lede">
            As AI becomes part of more Realtegic products, we hold ourselves to a set of
            working commitments. These are principles guiding how we build, not
            third-party certifications, audits, or compliance claims.
          </p>
          <div className="platform-grid">
            {aiCommitments.map((commitment) => (
              <article className="platform-card" key={commitment.title}>
                <div className="platform-card__body">
                  <div className="platform-card__content">
                    <small>COMMITMENT</small>
                    <h3>{commitment.title}</h3>
                    <p>{commitment.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
