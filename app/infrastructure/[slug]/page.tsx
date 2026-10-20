import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import {
  CtaWave,
  InfraHeroDiagram,
  InfraValueDiagram,
} from "@/components/infrastructure/InfraDiagrams";
import styles from "@/components/infrastructure/infra.module.css";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  serializeJsonLd,
} from "@/lib/metadata";
import { platformBySlug, platformDetails, platforms } from "@/lib/infrastructure";
import { infrastructurePages } from "@/lib/infrastructure-pages";

const toneClasses = [styles.toneBlue, styles.tonePurple, styles.toneGreen, styles.toneOrange];

export function generateStaticParams() {
  return platforms.map((platform) => ({ slug: platform.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const platform = platformBySlug[slug];

  if (!platform) {
    return createPageMetadata({
      title: "Platform not found",
      description: "The requested Realtegic platform could not be found.",
      path: "/infrastructure",
    });
  }

  return createPageMetadata({
    title: platform.name,
    description: platform.description,
    path: `/infrastructure/${slug}`,
  });
}

export default async function InfrastructureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = platformBySlug[slug];
  const content = infrastructurePages[slug];

  if (!platform || !content) {
    notFound();
  }

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: platform.name, path: `/infrastructure/${slug}` },
  ]);
  const details = platformDetails[slug] ?? {
    summary: platform.description,
    capabilities: [],
    outcomes: [],
    availability: "Availability details will be shared as this platform matures.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{platform.category}</p>
              <h1 className={styles.heroTitle}>
                {platform.name} <span>for connected digital systems.</span>
              </h1>
              <p className={styles.heroLead}>{details.summary}</p>
              <div className={styles.actions}>
                <Link href="/infrastructure" className={styles.btnPrimary}>
                  Back to Infrastructure <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/products" className={styles.btnOutline}>
                  View Products
                </Link>
              </div>
              <ul className={styles.traits}>
                {content.traits.map(({ icon: Icon, title, detail }) => (
                  <li key={title}>
                    <span className={styles.traitIcon}>
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <InfraHeroDiagram content={content} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.intro}>
              <div>
                <p className={styles.eyebrow}>Capabilities</p>
                <h2 className={styles.heading}>
                  What this foundation <span>enables.</span>
                </h2>
              </div>
              <p className={styles.introText}>{details.availability}</p>
            </div>

            <div className={styles.capGrid}>
              {details.capabilities.map((title, index) => {
                const capability = content.capabilities[index];
                const Icon = capability?.icon ?? content.heroIcon;
                const tone = toneClasses[index % toneClasses.length];

                return (
                  <article key={title} className={`${styles.capCard} ${tone}`}>
                    <span className={styles.capNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.capBody}>
                      <span className={styles.capIcon}>
                        <Icon size={28} aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{title}</h3>
                        {capability ? <p>{capability.description}</p> : null}
                      </div>
                      <span className={styles.capArrow} aria-hidden="true">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.value}>
          <div className={`${styles.wrap} ${styles.valueGrid}`}>
            <div>
              <p className={styles.eyebrow}>Value</p>
              <h2 className={styles.heading}>
                Designed to compound <span>over time.</span>
              </h2>
              <ul className={styles.checks}>
                {details.outcomes.map((outcome) => (
                  <li key={outcome}>
                    <span>
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <InfraValueDiagram content={content} />
          </div>
        </section>

        <section className={styles.cta}>
          <CtaWave />
          <div className={`${styles.wrap} ${styles.ctaInner}`}>
            <p className={styles.eyebrowLight}>{content.cta.eyebrow}</p>
            <h2 className={styles.ctaTitle}>{content.cta.title}</h2>
            <p className={styles.ctaText}>
              Learn how {platform.name} fits into the broader Realtegic ecosystem.
            </p>
            <div className={styles.actions}>
              <Link href="/products" className={styles.btnWhite}>
                Explore All Products <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.btnGhost}>
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
