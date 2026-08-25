import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Security",
  description:
    "Realtegic applies secure-by-design development, access control, data protection and operational monitoring across its technology platform and products.",
  path: "/security",
});

const principles = [
  "secure-by-design development",
  "access control",
  "data protection",
  "authentication and authorization",
  "least-privilege access",
  "monitoring and auditability",
  "dependency management",
  "responsible vulnerability handling",
];

export default function SecurityPage() {
  return (
    <main className="simple-page">
      <section className="page-section">
        <div className="container">
          <span className="rt-eyebrow">SECURITY</span>
          <h1>Security built into how we work.</h1>
          <p>
            Realtegic applies practical security controls throughout product
            development, platform operations and internal processes.
          </p>

          <div className="simple-grid">
            {principles.map((principle) => (
              <div key={principle} className="simple-grid-card">
                <strong>{principle}</strong>
              </div>
            ))}
          </div>

          <div className="simple-card">
            <p>
              We focus on secure-by-design engineering, strong access boundaries,
              careful data handling and operational visibility. Security is treated as
              an ongoing engineering practice rather than a one-time checklist.
            </p>
            <p>
              We do not make claims about certifications or accreditations that have
              not been verified, and we do not publish specific encryption algorithms,
              vendor names, or internal system details, since doing so would not be a
              meaningful or verifiable security signal on its own.
            </p>
          </div>

          <div className="simple-card">
            <h2 className="security-subheading">Incident readiness</h2>
            <p>
              We work to prepare for the possibility of security incidents through
              internal monitoring practices and a clear internal escalation path, so
              issues can be identified and addressed as quickly as reasonably possible.
              We do not publish specific response-time commitments, since actual
              response depends on the nature and severity of an issue.
            </p>
          </div>

          <div className="simple-card">
            <h2 className="security-subheading">Responsible disclosure</h2>
            <p>
              If you believe you have found a security vulnerability affecting
              Realtegic&apos;s website or products, please report it to us directly
              rather than disclosing it publicly. We do not currently run a public bug
              bounty program, but we take credible reports seriously and will work with
              reporters in good faith.
            </p>
            <p>
              You can reach us through our <Link href="/contact">contact page</Link> or
              by emailing <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
              directly. Please include enough detail for us to reproduce the issue, and
              avoid accessing or modifying data that is not your own.
            </p>
            <div className="rt-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact Realtegic
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
