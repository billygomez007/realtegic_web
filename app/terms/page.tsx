import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Realtegic's terms of use explain the responsibilities, acceptable use, and expectations that apply to visitors of our website and users of our published products.",
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
            <p className="legal-meta">Last updated: August 25, 2026</p>
            <p>
              These terms describe the responsibilities and expectations that apply
              when you use the Realtegic website and our publicly available products.
              They are written in plain language rather than dense legal formalism, and
              they will evolve as our products and business mature.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact us
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
                <small>CORE PRINCIPLES</small>
                <h3>Clear usage and accountability</h3>
                <p>
                  Our terms are intended to define responsibilities, access
                  expectations, and operational boundaries as we mature the platform
                  and product ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="new-wrap">
          <article className="legal-article">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using {siteConfig.domain} or any Realtegic product that
              links to these terms, you agree to use them in line with the expectations
              described on this page. If you do not agree with these terms, please do
              not continue using our website or products.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              This website is provided to share information about Realtegic, our
              products, and how to contact us. You may browse and use the site for
              those purposes. You should not attempt to disrupt, overload, or gain
              unauthorized access to any part of our website or infrastructure.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              The Realtegic name, logo, product names, and the content, design, and
              structure of this website are the property of Realtegic or its licensors,
              unless otherwise indicated. You may view and share content from this site
              for personal, informational, or business-evaluation purposes, but you may
              not copy, reproduce, or reuse our branding, content, or product materials
              for commercial purposes without our prior written permission.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to use our website or products to:</p>
            <ul>
              <li>Violate any applicable law or the rights of others;</li>
              <li>Attempt to probe, scan, or test the vulnerability of our systems without authorization;</li>
              <li>Introduce malicious code, or attempt to interfere with the normal operation of our website or infrastructure;</li>
              <li>Misrepresent your identity or affiliation with Realtegic; or</li>
              <li>Scrape, harvest, or misuse information from our website beyond normal, reasonable use.</li>
            </ul>

            <h2>5. Product and Service Information</h2>
            <p>
              We describe our products, platforms, and their availability as honestly
              as we can, including clearly noting where a product or capability is in
              development, private preview, or not yet publicly available. Descriptions
              of planned or in-development capabilities are not commitments to a
              specific feature set or release date.
            </p>

            <h2>6. Third-Party Links and Services</h2>
            <p>
              Our website may reference or link to third-party websites, tools, or
              services that Realtegic does not control. We are not responsible for the
              content, availability, or practices of those third parties, and linking to
              them does not imply endorsement.
            </p>

            <h2>7. Availability and Changes to Services</h2>
            <p>
              We work to keep our website and available products accessible, but we do
              not guarantee uninterrupted or error-free operation. We may modify,
              suspend, or discontinue parts of our website or a product at any time,
              including features that are still in development or preview.
            </p>

            <h2>8. Disclaimers</h2>
            <p>
              Our website and publicly available products are provided on an
              &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent
              permitted by applicable law, we do not make warranties, express or
              implied, about the accuracy, reliability, or fitness for a particular
              purpose of the information, products, or services described on this site.
            </p>

            <h2>9. Limitation of Responsibility</h2>
            <p>
              To the extent permitted by applicable law, Realtegic will not be liable
              for indirect, incidental, or consequential harm arising from your use of
              our website, to the degree such liability can reasonably be limited. This
              is a general statement of principle rather than a substitute for
              jurisdiction-specific legal advice, and nothing here is intended to limit
              liability where it cannot lawfully be limited.
            </p>

            <h2>10. Changes to These Terms</h2>
            <p>
              We may update these terms as our website, products, and business evolve.
              When we make material changes, we will update the &quot;Last
              updated&quot; date at the top of this page. Continued use of our website
              after changes are posted means you accept the updated terms.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about these terms, please{" "}
              <Link href="/contact">contact us</Link> or email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Our
              office address is {siteConfig.officeAddress.join(", ")}.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
