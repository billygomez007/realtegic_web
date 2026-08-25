import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import SectionEyebrow from "@/components/SectionEyebrow";
import ProductBrandLogo from "@/components/ProductBrandLogo";
import SuperKubaShowcase from "@/components/SuperKubaShowcase";
import TapOrderShowcase from "@/components/TapOrderShowcase";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  serializeJsonLd,
} from "@/lib/metadata";
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

  const metadata = createPageMetadata({
    title: product.seoTitle ?? product.title,
    description: product.seoDescription ?? product.description,
    path: `/products/${slug}`,
  });

  if (product.seoTitle) {
    metadata.title = { absolute: product.seoTitle };
  }

  return metadata;
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

  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.title, path: `/products/${slug}` },
  ]);
  const breadcrumbs = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
    />
  );

  if (product.slug === "kuba-ai") {
    return (
      <>
        {breadcrumbs}
        <SuperKubaShowcase product={product} />
      </>
    );
  }

  if (product.slug === "tap-and-order") {
    return (
      <>
        {breadcrumbs}
        <TapOrderShowcase product={product} />
      </>
    );
  }

  const Icon = product.icon;

  return (
    <>
      {breadcrumbs}
      <main className="new-home">
      <section className="new-hero infrastructure-hero product-detail-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            {product.logo ? (
              <ProductBrandLogo
                src={product.logo}
                alt={product.logoAlt ?? `${product.title} logo`}
                width={product.logoWidth ?? 1200}
                height={product.logoHeight ?? 400}
                sizes="(max-width: 650px) calc(100vw - 72px), 360px"
                className="product-detail__brand-logo"
              />
            ) : (
              <SectionEyebrow>{product.category}</SectionEyebrow>
            )}
            <h1>
              {product.title}
              <span> built for practical outcomes.</span>
            </h1>
            {product.logo ? (
              <SectionEyebrow className="product-detail__category">
                {product.category}
              </SectionEyebrow>
            ) : null}
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
    </>
  );
}
