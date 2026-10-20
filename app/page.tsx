import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Building2,
  Bus,
  Car,
  CreditCard,
  Globe2,
  Landmark,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import BigPicture from "@/components/home/BigPicture";
import {
  AiChipVisual,
  ApproachVisual,
  CodeLaptopVisual,
  CtaGlobe,
  HeroVisual,
} from "@/components/home/HomeVisuals";
import styles from "@/components/home/home.module.css";
import { createPageMetadata } from "@/lib/metadata";
import { platforms } from "@/lib/infrastructure";
import { products } from "@/lib/products";

export const metadata: Metadata = createPageMetadata({
  title: "Technology Infrastructure and Products",
  description:
    "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
  path: "/",
});

const platformSummaries: Record<string, string> = {
  "ai-platform": "Intelligent solutions for business, automation, data and innovation.",
  "communications-cloud":
    "Reliable and scalable communication infrastructure for modern businesses.",
  "identity-cloud": "Secure identity and access management across all platforms.",
  "integration-cloud": "Seamless APIs and integrations for a connected ecosystem.",
  "automation-cloud":
    "Workflow automation to streamline operations and reduce manual work.",
  "data-intelligence-platform":
    "Turn data into actionable insights with advanced analytics and AI.",
  "developer-cloud": "Tools, SDKs and infrastructure for builders and innovators.",
};

const featuredPlatform = platforms.find((platform) => platform.featured) ?? platforms[0];
const otherPlatforms = platforms.filter((platform) => platform !== featuredPlatform);

const productTiles: {
  slug: string;
  tag: string;
  icon: LucideIcon;
  summary: string;
}[] = [
  {
    slug: "propertyos",
    tag: "Real Estate",
    icon: Building2,
    summary: "End-to-end real estate management for modern markets.",
  },
  {
    slug: "trustpay",
    tag: "Fintech",
    icon: CreditCard,
    summary: "Secure and simple payment solutions for businesses and individuals.",
  },
  {
    slug: "tap-and-order",
    tag: "Commerce",
    icon: ShoppingBag,
    summary: "A marketplace and business management platform for everyday services.",
  },
  {
    slug: "institution-platform",
    tag: "Institutions",
    icon: Landmark,
    summary: "Tools for organizations, agencies and large-scale operations.",
  },
  {
    slug: "mobility-platform",
    tag: "Mobility",
    icon: Car,
    summary: "Smart mobility solutions for connected cities and communities.",
  },
  {
    slug: "kuba-ai",
    tag: "AI Workforce",
    icon: Boxes,
    summary: "A unified AI workforce connecting multiple services and opportunities.",
  },
];

const productCards = productTiles.flatMap((tile) => {
  const product = products.find((item) => item.slug === tile.slug);
  return product ? [{ ...tile, title: product.title }] : [];
});

const stats = [
  { value: `${platforms.length}`, label: "Infrastructure Platforms" },
  { value: `${products.length}`, label: "Integrated Products" },
  { value: "1", label: "Unified Foundation" },
  { value: "∞", label: "More Possibilities" },
];

const trustPoints = [
  { icon: ShieldCheck, label: "Secure & Reliable" },
  { icon: Bus, label: "Scalable Infrastructure" },
  { icon: Rocket, label: "Built for Growth" },
];

const approachPoints = [
  {
    icon: Boxes,
    title: "Scalable Architecture",
    detail: "Built to support growth at every stage.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Systems",
    detail: "Automation and AI for real impact.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    detail: "Secure, reliable and future-ready.",
  },
];

export default function Home() {
  const FeaturedIcon = featuredPlatform.icon;

  return (
    <main className={styles.home}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Technology infrastructure for a smarter tomorrow
            </p>
            <h1 className={styles.heroTitle}>
              Building the Technology Behind <span>What</span> Comes{" "}
              <span>Next.</span>
            </h1>
            <p className={styles.heroLead}>
              Powering platforms, businesses and communities with scalable
              infrastructure, intelligent systems and seamless connectivity.
            </p>
            <div className={styles.actions}>
              <Link href="/products" className={styles.btnPrimary}>
                Explore Our Products <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.btnLight}>
                Talk to Our Team
              </Link>
            </div>
            <ul className={styles.trustRow}>
              {trustPoints.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Approach */}
      <section className={styles.section} id="approach">
        <div className={`${styles.wrap} ${styles.approachGrid}`}>
          <div>
            <p className={styles.eyebrow}>Our approach</p>
            <h2 className={styles.heading}>
              We Don&apos;t Just Build Products. We Build the Infrastructure{" "}
              <span>Behind Them.</span>
            </h2>
            <p className={styles.body}>
              From cloud infrastructure to intelligent platforms, we design and
              operate the systems that help businesses innovate, scale and create
              real-world impact.
            </p>
            <Link href="/about" className={styles.btnOutline}>
              Learn More About Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.approachMedia}>
            <ApproachVisual />
            <ul className={styles.approachCards}>
              {approachPoints.map(({ icon: Icon, title, detail }) => (
                <li key={title}>
                  <span className={styles.iconTile}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Infrastructure platforms */}
      <section className={styles.section} id="platforms">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>Our ecosystem</p>
              <h2 className={styles.heading}>
                Infrastructure <span>Platforms</span>
              </h2>
            </div>
            <p className={styles.introText}>
              A suite of integrated platforms and services designed to power
              businesses, developers and communities across real estate,
              commerce, mobility and beyond.
            </p>
          </div>

          <article className={styles.featuredCard}>
            <div className={styles.featuredCopy}>
              <p className={styles.featuredLabel}>
                <span className={styles.iconTileSm}>
                  <FeaturedIcon size={14} aria-hidden="true" />
                </span>
                Featured platform
              </p>
              <h3>{featuredPlatform.name}</h3>
              <p>{platformSummaries[featuredPlatform.slug] ?? featuredPlatform.description}</p>
              <Link href={featuredPlatform.route} className={styles.btnPrimarySm}>
                Learn More <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <AiChipVisual />
          </article>

          <div className={styles.platformGrid}>
            {otherPlatforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <article key={platform.slug} className={styles.platformCard}>
                  <span className={styles.iconTile}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{platform.name}</h3>
                  <p>{platformSummaries[platform.slug] ?? platform.description}</p>
                  <Link href={platform.route} className={styles.textLink}>
                    Learn More <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>Our philosophy</p>
              <h2 className={styles.heading}>
                One Technology Foundation. <span>Multiple Products.</span>
              </h2>
            </div>
            <p className={styles.introText}>
              A unified technology foundation that powers a family of products
              and solutions, all working together to create greater value.
            </p>
          </div>

          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Products */}
      <section className={styles.products} id="products">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrowDark}>Real-world solutions</p>
              <h2 className={styles.headingDark}>
                Products &amp; <span>Applications</span>
              </h2>
            </div>
            <div className={styles.introSide}>
              <p className={styles.introTextDark}>
                From real estate to commerce and mobility, our products deliver
                practical solutions for everyday people and businesses.
              </p>
              <Link href="/products" className={styles.btnWhiteSm}>
                View All Products <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.productGrid}>
            {productCards.map(({ slug, tag, icon: Icon, title, summary }) => (
              <article key={slug} className={styles.productCard}>
                <div className={styles.productTop}>
                  <Icon size={24} aria-hidden="true" />
                  <span className={styles.tag}>{tag}</span>
                </div>
                <h3>{title}</h3>
                <p>{summary}</p>
                <Link href={`/products/${slug}`} className={styles.textLinkDark}>
                  Learn More <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Big picture */}
      <section className={styles.section} id="ecosystem">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>The big picture</p>
              <h2 className={styles.heading}>
                One Technology Foundation. <span>Many Possibilities.</span>
              </h2>
            </div>
            <p className={styles.introText}>
              Our ecosystem is designed to grow, adapt and create opportunities
              across industries and communities.
            </p>
          </div>
          <BigPicture />
        </div>
      </section>

      {/* Developers */}
      <section className={styles.devSection} id="developers">
        <div className={`${styles.wrap} ${styles.devGrid}`}>
          <CodeLaptopVisual />
          <div>
            <p className={styles.eyebrow}>For developers</p>
            <h2 className={styles.heading}>Built for What Developers Build Next.</h2>
            <p className={styles.body}>
              Powerful APIs, SDKs and infrastructure to help developers create,
              integrate and scale with confidence.
            </p>
            <div className={styles.actions}>
              <Link href="/developers" className={styles.btnPrimary}>
                Explore the Developer Platform{" "}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/infrastructure/developer-cloud" className={styles.textLinkLg}>
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <CtaGlobe />
        <div className={`${styles.wrap} ${styles.ctaInner}`}>
          <p className={styles.eyebrowDark}>
            <Sparkles size={12} aria-hidden="true" /> Get started
          </p>
          <h2 className={styles.ctaTitle}>Let&apos;s Build What&apos;s Next.</h2>
          <p className={styles.ctaText}>
            Whether you&apos;re a business, developer or organization, Realtegic
            gives you the technology, tools and support to move forward.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnWhite}>
              Contact Our Team <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/products" className={styles.btnGhost}>
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
