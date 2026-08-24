import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import SectionEyebrow from "@/components/SectionEyebrow";
import { createPageMetadata } from "@/lib/metadata";
import { productBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug[slug];

  if (!product) {
    return createPageMetadata({
      title: "Product not found",
      description: "The requested Realtegic product could not be found.",
      path: "/products",
    });
  }

  return createPageMetadata({
    title: `${product.title} | Realtegic Products`,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug[slug];

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <main className="new-home">
      <section className="new-hero infrastructure-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <SectionEyebrow>{product.category}</SectionEyebrow>
            <h1>
              {product.title}
              <span> built for practical outcomes.</span>
            </h1>
            <p>{product.summary}</p>
            <div className="hero-actions">
              <Link href="/products" className="rt-btn rt-btn-primary">
                Explore all products
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="rt-btn rt-btn-outline">
                Contact us
              </Link>
            </div>
          </div>

          <div className="platform-card platform-card--featured" style={{ padding: 32 }}>
            <div className="platform-card__top">
              <div className="platform-card__icon" aria-hidden="true">
                <Icon size={26} />
              </div>
              <span className="status-badge status-badge--dark">{product.status}</span>
            </div>
            <div className="platform-card__body">
              <div className="platform-card__content">
                <small>{product.category}</small>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="platform-card__meta">
                  <span>{product.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platforms-section">
        <div className="new-wrap">
          <div className="section-intro">
            <div>
              <SectionEyebrow>CORE FEATURES</SectionEyebrow>
              <h2>
                Built to <span>simplify real work.</span>
              </h2>
            </div>
            <p>{product.availability}</p>
          </div>

          <div className="platform-grid">
            {product.features.map((feature, index) => (
              <article key={feature} className="platform-card">
                <div className="platform-card__top">
                  <div className="platform-card__icon" aria-hidden="true">
                    <CheckCircle2 size={22} />
                  </div>
                  <span className="status-badge status-badge--dark">0{index + 1}</span>
                </div>
                <div className="platform-card__body">
                  <div className="platform-card__content">
                    <h3>{feature}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="infrastructure-summary">
        <div className="new-wrap infrastructure-summary-grid">
          <div>
            <SectionEyebrow>USE CASES</SectionEyebrow>
            <h2>
              Practical outcomes <span>for operations.</span>
            </h2>
          </div>
          <div>
            <ul className="list-checks" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {product.useCases.map((item) => (
                <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
                  <CheckCircle2 size={18} style={{ marginTop: 4 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
