import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Globe2,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Realtegic to discuss products, partnerships or custom technology solutions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-wrap">

          <div className="contact-label">LET&apos;S BUILD TOGETHER</div>

          <div className="contact-hero-grid">

            <div>
              <h1>
                Have an idea,
                <br />
                problem or
                <span> opportunity?</span>
              </h1>

              <p>
                Tell us what you are trying to build, improve or automate.
                Our team can help turn the idea into a technology solution.
              </p>
            </div>

            <div className="contact-visual">
              <div className="contact-orbit orbit-a" />
              <div className="contact-orbit orbit-b" />

              <div className="contact-core">
                <Sparkles size={38} aria-hidden="true" />
                <strong>REALTEGIC</strong>
                <small>LET&apos;S BUILD</small>
              </div>

              <div className="contact-node contact-node-a">
                <BrainCircuit size={16} aria-hidden="true" />
                AI
              </div>

              <div className="contact-node contact-node-b">
                <Building2 size={16} aria-hidden="true" />
                Platforms
              </div>

              <div className="contact-node contact-node-c">
                <Globe2 size={16} aria-hidden="true" />
                Digital
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="contact-main">
        <div className="contact-wrap">

          <div className="contact-main-grid">

            <div className="contact-options">

              <div className="contact-label">
                HOW CAN WE HELP?
              </div>

              <h2>
                Start with a
                <span> conversation.</span>
              </h2>

              <p>
                Whether you want to use one of our products, explore a
                partnership or build something new, we would like to hear from
                you.
              </p>

              <div className="contact-option-list">

                <div>
                  <div className="contact-option-icon">
                    <MessageSquare size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>Product & Solutions</strong>
                    <span>Ask us about Realtegic products and solutions.</span>
                  </div>
                </div>

                <div>
                  <div className="contact-option-icon">
                    <BrainCircuit size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>Technology & Partnerships</strong>
                    <span>
                      Explore technology, strategic and business partnerships.
                    </span>
                  </div>
                </div>

                <div>
                  <div className="contact-option-icon">
                    <Sparkles size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>Build Something New</strong>
                    <span>
                      Have a business problem that needs technology?
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <ContactForm />

          </div>

        </div>
      </section>

      <section className="contact-direct">
        <div className="contact-wrap">

          <div className="contact-direct-grid">

            <div>
              <div className="contact-label">DIRECT CONTACT</div>
              <h2>
                Prefer to reach us
                <span> directly?</span>
              </h2>
            </div>

            <div className="contact-direct-card">
              <Mail size={22} aria-hidden="true" />
              <small>EMAIL</small>
              <a href={`mailto:${siteConfig.email}`} className="contact-direct-link">
                {siteConfig.email}
              </a>
              <span>We&apos;ll get back to you as soon as possible.</span>
            </div>

            <div className="contact-direct-card contact-direct-card--stacked">
              <small>OFFICE</small>
              <span>{siteConfig.officeAddress[0]}</span>
              <span>{siteConfig.officeAddress[1]}</span>
              <small>PHONE</small>
              {siteConfig.phoneNumbers.map((phone) => (
                <a key={phone.href} href={phone.href} className="contact-direct-link">
                  {phone.number}
                </a>
              ))}
            </div>

          </div>

        </div>
      </section>

      <section className="contact-final">
        <div className="contact-wrap">

          <h2>
            Good technology
            <br />
            starts with a
            <span> good conversation.</span>
          </h2>

          <Link href="/products">
            Explore our products
            <ArrowRight size={17} aria-hidden="true" />
          </Link>

        </div>
      </section>

    </main>
  );
}
