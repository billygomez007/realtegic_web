import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Realtegic, the technology company building digital infrastructure and intelligent applications for businesses, developers, institutions and enterprises.",
  path: "/about",
});

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation",
    text: "We challenge conventional ways of working and look for better possibilities through technology.",
  },
  {
    number: "02",
    icon: Target,
    title: "Purpose",
    text: "We build around real problems, measurable outcomes and technology that creates meaningful value.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Intelligence",
    text: "We use AI and automation to make products smarter, faster and more capable.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Impact",
    text: "We measure success by what our technology enables people and organizations to achieve.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-wrap">
          <div className="about-label">ABOUT REALTEGIC</div>

          <h1>
            We build technology
            <br />
            <span>with a reason.</span>
          </h1>

          <p>
            Realtegic is a technology company building foundational digital
            infrastructure and intelligent applications for businesses,
            developers, institutions and enterprises.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-wrap">

          <div className="about-story-grid">
            <div>
              <div className="about-label">WHO WE ARE</div>

              <h2>
                Technology should make
                <span> possibility practical.</span>
              </h2>
            </div>

            <div className="about-story-copy">
              <p>
                The world is changing quickly. Businesses are expected to move
                faster, serve people better and operate with greater
                intelligence.
              </p>

              <p>
                Realtegic was created to help organizations navigate that
                change. We bring together software engineering, artificial
                intelligence, automation and digital product design to create
                technology that works in the real world.
              </p>

              <p>
                We are not interested in building technology for technology&apos;s
                sake. We look for important problems, understand the people
                affected by them and build systems that can make a measurable
                difference.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="about-mission">
        <div className="about-wrap">

          <div className="about-label">OUR MISSION</div>

          <div className="mission-grid">
            <h2>
              Make intelligent technology
              <span> accessible, useful and transformative.</span>
            </h2>

            <div>
              <div className="mission-icon">
                <BrainCircuit size={32} aria-hidden="true" />
              </div>

              <p>
                We believe advanced technology should not be reserved for a
                small group of organizations. Our mission is to turn powerful
                technology into practical products that businesses and people
                can actually use.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="about-vision">
        <div className="about-wrap about-vision-grid">
          <div>
            <div className="about-label">OUR VISION</div>
            <h2>
              Build technology that becomes
              <span> infrastructure for what comes next.</span>
            </h2>
          </div>

          <div className="about-vision-copy">
            <p>
              We envision Realtegic as a technology company whose infrastructure and
              products power increasingly important parts of how businesses,
              applications and institutions operate.
            </p>
            <p>
              Our ambition is to build technology that can scale across industries
              and markets while remaining practical, interoperable and useful in the
              real world.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-wrap">

          <div className="about-label">WHAT DRIVES US</div>

          <div className="values-heading">
            <h2>
              Four principles behind
              <span> everything we build.</span>
            </h2>
          </div>

          <div className="values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div className="value-card" key={value.number}>
                  <div className="value-top">
                    <span>{value.number}</span>
                    <Icon size={25} aria-hidden="true" />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="about-global">
        <div className="about-wrap">

          <div className="global-grid">

            <div className="global-visual">
              <div className="global-circle circle-one" />
              <div className="global-circle circle-two" />
              <div className="global-circle circle-three" />

              <div className="global-center">
                <Globe2 size={44} aria-hidden="true" />
                <strong>GLOBAL</strong>
                <small>BY DESIGN</small>
              </div>
            </div>

            <div className="global-copy">
              <div className="about-label">OUR AMBITION</div>

              <h2>
                Built for a
                <br />
                <span>connected world.</span>
              </h2>

              <p>
                Realtegic is building technology designed to scale across
                markets, systems and industries while remaining practical,
                adaptable and interoperable.
              </p>

              <p>
                Our products are designed with scalability, interoperability
                and international standards in mind from the beginning.
              </p>

              <Link href="/products" className="about-link">
                Explore our products
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <section className="about-cta">
        <div className="about-wrap">

          <div className="about-label">THE NEXT CHAPTER</div>

          <h2>
            We are building what
            <br />
            <span>comes next.</span>
          </h2>

          <p>
            Explore the products, ideas and technologies coming from Realtegic.
          </p>

          <Link href="/contact" className="about-cta-button">
            Start a conversation
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>
      </section>

    </main>
  );
}
