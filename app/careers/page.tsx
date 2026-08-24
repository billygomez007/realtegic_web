import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Careers at Realtegic",
  description:
    "Realtegic is building technology across artificial intelligence, software infrastructure, communications, automation, data and digital products.",
  path: "/careers",
});

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
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
