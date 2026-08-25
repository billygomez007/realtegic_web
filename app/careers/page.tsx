import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Careers",
  description:
    "Realtegic is building technology across artificial intelligence, software infrastructure, communications, automation, data and digital products.",
  path: "/careers",
});

const disciplines = [
  "Software Engineering",
  "Artificial Intelligence & Machine Learning",
  "Product & Design",
  "Data & Analytics",
  "Infrastructure & Platform Engineering",
  "Business & Operations",
];

export default function CareersPage() {
  return (
    <main className="simple-page">
      <section className="page-section">
        <div className="container">
          <span className="rt-eyebrow">CAREERS</span>
          <h1>Build What&apos;s Next With Us.</h1>
          <p>
            Realtegic is building technology across artificial intelligence, software
            infrastructure, communications, automation, data and digital products.
          </p>

          <div className="simple-card">
            <p>
              There are currently no publicly listed openings. We welcome talented
              people who are excited by practical technology, sophisticated product
              work and meaningful impact.
            </p>
            <p>
              If you would like to stay connected with Realtegic and hear about
              future opportunities, contact us directly and tell us what you&apos;re
              building.
            </p>
            <div className="rt-actions">
              <Link href="/contact" className="rt-btn rt-btn-primary">
                Contact Realtegic
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <h2 className="careers-subheading">Disciplines we expect to grow into</h2>
          <p className="careers-subheading-lede">
            These are the areas of work behind Realtegic&apos;s technology today and the
            disciplines we anticipate needing as the company grows. This is a picture of
            direction, not a promise of specific open roles.
          </p>
          <div className="simple-grid">
            {disciplines.map((discipline) => (
              <div key={discipline} className="simple-grid-card">
                <strong>{discipline}</strong>
              </div>
            ))}
          </div>

          <div className="simple-card">
            <h2 className="careers-subheading">Our culture</h2>
            <p>
              We look for people who care about building things properly: curiosity
              about hard problems, ownership over outcomes, craftsmanship in the work
              itself, and a preference for practical impact over theoretical polish.
              These are the qualities we value as we grow, rather than a description of
              benefits or employment terms we have not yet formalized.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
