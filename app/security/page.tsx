import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Security at Realtegic",
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

          <div className="industry-list">
            {principles.map((principle) => (
              <div key={principle} className="industry-card">
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
              not been verified. For specific security questions or partnership
              inquiries, please contact Realtegic directly.
            </p>
            <div className="rt-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact Realtegic
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
