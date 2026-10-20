import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Globe2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/about/about.module.css";
import {
  AfricaGlobeVisual,
  BuildingVisual,
  CtaWaves,
  LaptopGlobeVisual,
  TeamVisual,
} from "@/components/about/AboutVisuals";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Realtegic, the technology company building digital infrastructure and intelligent applications for businesses, developers, institutions and enterprises.",
  path: "/about",
});

const traits = [
  { icon: Lightbulb, label: "Innovative Solutions" },
  { icon: HeartHandshake, label: "Real-World Impact" },
  { icon: Globe2, label: "Global Standards" },
];

const approach = [
  {
    icon: BarChart3,
    title: "Accessible",
    text: "Technology for everyone, not just experts.",
  },
  {
    icon: Users,
    title: "Useful",
    text: "Real solutions for real needs.",
  },
  {
    icon: Zap,
    title: "Transformative",
    text: "Creating opportunities and better outcomes.",
  },
];

const principles = [
  {
    number: "01",
    icon: Users,
    title: "People First",
    text: "We design technology around real human needs and experiences.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Practical Innovation",
    text: "We turn bold ideas into solutions that work in the real world.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Trust and Integrity",
    text: "We build secure, reliable and transparent systems.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Lasting Impact",
    text: "We measure success by what our technology enables people and organizations to achieve.",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.about}>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Technology for a smarter tomorrow</p>
            <h1 id="about-hero-title" className={styles.heroTitle}>
              We build technology <span>with a reason.</span>
            </h1>
            <p className={styles.heroLead}>
              At Realtegic, we design and build intelligent platforms that solve
              real problems, create opportunities and improve lives for
              businesses, communities and individuals.
            </p>
            <div className={styles.actions}>
              <Link href="/products" className={styles.btnPrimary}>
                Explore Our Products
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.btnLight}>
                Talk to Our Team
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <ul className={styles.traitRow}>
              {traits.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroFrame} aria-hidden="true">
              <BuildingVisual />
            </div>
            <div className={styles.trustCard}>
              <span className={styles.iconTile}>
                <Users size={20} aria-hidden="true" />
              </span>
              <p>Trusted by businesses and communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Belief ---------- */}
      <section className={styles.section} aria-labelledby="about-belief-title">
        <div className={`${styles.wrap} ${styles.beliefGrid}`}>
          <div>
            <p className={styles.eyebrowBlue}>Our belief</p>
            <h2 id="about-belief-title" className={styles.heading}>
              Technology should make <span>possibility practical.</span>
            </h2>
            <p className={styles.body}>
              We believe technology is most powerful when it solves real
              problems. That&apos;s why we bring together software engineering,
              artificial intelligence, automation and digital product design to
              create technology that works in the real world.
            </p>
            <Link href="/company" className={styles.btnPrimary}>
              Learn More About Us
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.beliefVisual}>
            <div className={styles.beliefFrame} aria-hidden="true">
              <TeamVisual />
            </div>
            <div className={styles.impactCard}>
              <span className={styles.iconTileSoft}>
                <Lightbulb size={20} aria-hidden="true" />
              </span>
              <h3>From ideas to real-world impact.</h3>
              <p>
                We look for important problems, understand the people affected
                by them and build systems that can make a measurable difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Approach (dark) ---------- */}
      <section className={styles.approach} aria-labelledby="about-approach-title">
        <div className={`${styles.wrap} ${styles.approachGrid}`}>
          <div>
            <p className={styles.eyebrowBlue}>Our approach</p>
            <h2 id="about-approach-title" className={styles.headingDark}>
              Make intelligent technology{" "}
              <span>accessible, useful and transformative.</span>
            </h2>
            <p className={styles.bodyDark}>
              We believe advanced technology should not be reserved for a small
              group of organizations. We turn powerful technology into practical
              products that businesses and people can actually use.
            </p>
          </div>

          <div className={styles.approachFrame} aria-hidden="true">
            <LaptopGlobeVisual />
          </div>

          <ul className={styles.approachList}>
            {approach.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className={styles.approachIcon}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className={styles.section} aria-labelledby="about-mission-title">
        <div className={`${styles.wrap} ${styles.missionGrid}`}>
          <div>
            <p className={styles.eyebrowBlue}>Our mission</p>
            <h2 id="about-mission-title" className={styles.heading}>
              Build technology that becomes{" "}
              <span>infrastructure for what comes next.</span>
            </h2>
          </div>
          <div className={styles.missionCopy}>
            <p>
              We create platforms, tools and digital infrastructure that power
              increasingly important parts of how businesses, applications and
              institutions operate.
            </p>
            <p>
              Our ambition is to build technology that can scale across
              industries and markets while remaining practical, interoperable
              and useful in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Principles ---------- */}
      <section className={styles.section} aria-labelledby="about-principles-title">
        <div className={styles.wrap}>
          <p className={styles.eyebrowBlue}>Our principles</p>
          <h2 id="about-principles-title" className={styles.heading}>
            Four principles behind <span>everything we build.</span>
          </h2>
          <ul className={styles.principleGrid}>
            {principles.map(({ number, icon: Icon, title, text }) => (
              <li key={number} className={styles.principleCard}>
                <div className={styles.principleTop}>
                  <Icon size={24} aria-hidden="true" />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Vision ---------- */}
      <section className={styles.section} aria-labelledby="about-vision-title">
        <div className={`${styles.wrap} ${styles.visionGrid}`}>
          <div className={styles.visionFrame} aria-hidden="true">
            <AfricaGlobeVisual />
          </div>
          <div>
            <p className={styles.eyebrowBlue}>Our vision</p>
            <h2 id="about-vision-title" className={styles.heading}>
              Built for a <span>connected world.</span>
            </h2>
            <p className={styles.body}>
              Realtegic is building technology designed to scale across markets,
              systems and industries while remaining practical, adaptable and
              interoperable, with international standards in mind from the
              beginning.
            </p>
            <Link href="/innovation" className={styles.textLink}>
              Our Global Impact
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className={styles.cta} aria-labelledby="about-cta-title">
        <CtaWaves />
        <div className={`${styles.wrap} ${styles.ctaInner}`}>
          <p className={styles.eyebrowLight}>
            <Sparkles size={13} aria-hidden="true" />
            Join us
          </p>
          <h2 id="about-cta-title" className={styles.ctaTitle}>
            We are building what comes next.
          </h2>
          <p className={styles.ctaText}>
            Partner with us, build with us or explore our products and be part
            of a smarter, more connected future.
          </p>
          <Link href="/contact" className={styles.btnWhite}>
            Get in Touch
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
