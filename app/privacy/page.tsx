import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Realtegic's privacy policy explains what information we collect, how we use it, and the choices available to you when you interact with our website and products.",
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
            <p className="legal-meta">Last updated: August 25, 2026</p>
            <p>
              This policy explains what information Realtegic collects, how we use it,
              and the choices available to you when you visit our website or use our
              products. It is written to be clear and honest rather than exhaustive
              legal boilerplate, and we will keep it updated as our products evolve.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact us
                <ArrowRight size={17} aria-hidden="true" />
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
                  We aim to collect only what is necessary to operate our services,
                  support customers, and improve the reliability of our technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="new-wrap">
          <article className="legal-article">
            <h2>1. Introduction</h2>
            <p>
              Realtegic (&quot;Realtegic&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;) provides this policy to describe our general approach to
              privacy across our website, products and business communications. It
              applies to information we collect through {siteConfig.domain} and related
              Realtegic products and services, unless a specific product states
              otherwise. It does not apply to third-party websites or services that we
              do not control, even if linked from our site.
            </p>

            <h2>2. Information We Provide and Collect</h2>
            <h3>2.1 Information you provide directly</h3>
            <p>
              When you contact us, request information, apply for a role, or otherwise
              communicate with Realtegic, you may choose to share information such as
              your name, email address, company, phone number, and the contents of your
              message. Our contact form is designed so this information is sent directly
              to us by email rather than stored in a database on our servers.
            </p>
            <h3>2.2 Technical and usage information</h3>
            <p>
              Like most websites, our site and infrastructure may automatically record
              limited technical information when you visit, such as approximate device
              or browser type, general usage patterns, and standard web server logs used
              to operate and secure our systems. We use this information for operating,
              securing, and improving our website and infrastructure rather than to
              build detailed profiles about individuals.
            </p>

            <h2>3. How We Use Information</h2>
            <p>We use the information described above to:</p>
            <ul>
              <li>Respond to inquiries, requests, and messages sent to us;</li>
              <li>Operate, maintain, and secure our website, products, and infrastructure;</li>
              <li>Understand general usage patterns so we can improve our products and content;</li>
              <li>Communicate with customers, partners, and candidates about matters they have raised with us; and</li>
              <li>Meet reasonable legal, security, and operational obligations.</li>
            </ul>
            <p>
              We do not sell personal information, and we do not use the contents of
              messages sent to us for advertising purposes.
            </p>

            <h2>4. Cookies and Similar Technologies</h2>
            <p>
              Our website may use a limited set of cookies or similar local storage
              technologies necessary for basic functionality, such as remembering
              interface preferences or supporting security features. We do not currently
              operate third-party advertising or cross-site tracking cookies on this
              website. Where our approach to cookies changes materially, we will update
              this policy.
            </p>

            <h2>5. Service Providers</h2>
            <p>
              We may rely on reputable third-party infrastructure and service providers
              (for example, hosting, email delivery, or security tooling) to help us
              operate our website and business. Where we use such providers, we expect
              them to handle information responsibly and only for the purposes we
              direct. We do not publish a list of every provider on this page, but we
              are glad to answer specific questions if you contact us.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We apply reasonable administrative, technical, and organizational measures
              designed to protect information from loss, misuse, and unauthorized
              access, in line with the principles described on our{" "}
              <Link href="/security">Security</Link> page. No method of transmission or
              storage is perfectly secure, and we cannot guarantee absolute security of
              any information.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary to fulfill
              the purposes described in this policy, respond to the person who shared it
              with us, or meet legitimate business, security, or legal needs. When
              information is no longer needed for these purposes, we take reasonable
              steps to delete it or render it non-identifying.
            </p>

            <h2>8. Cross-Border Processing</h2>
            <p>
              Realtegic operates from Ghana and may work with service providers,
              partners, or team members located in other countries. As a result,
              information may be processed or accessed in locations other than your own.
              Where this occurs, we aim to apply consistent privacy and security
              practices regardless of where information is processed.
            </p>

            <h2>9. Your Choices and Rights</h2>
            <p>
              Depending on where you are located, you may have rights regarding
              information you have shared with us, such as asking us to access, correct,
              or delete it, or asking questions about how it has been used. You can make
              such a request at any time by contacting us using the details below, and
              we will respond in a reasonable manner appropriate to the request and
              applicable law.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our website and products are intended for businesses, developers,
              institutions, and other professional audiences, and are not directed to
              children. We do not knowingly collect personal information from children.
              If you believe a child has provided us with personal information, please
              contact us so we can address it.
            </p>

            <h2>11. Third-Party Links</h2>
            <p>
              Our website may link to third-party websites, products, or services that
              are not owned or controlled by Realtegic. We are not responsible for the
              privacy practices or content of those third parties, and we encourage you
              to review their own policies before sharing information with them.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time as our products, technology,
              and operations evolve. When we make material changes, we will update the
              &quot;Last updated&quot; date at the top of this page. We encourage you to
              review this page periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this policy or how Realtegic handles
              information, please{" "}
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
