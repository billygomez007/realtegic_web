import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Layers3,
  Network,
  Shield,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Button from "@/components/Button";
import AfricaFirstSection from "@/components/AfricaFirstSection";
import CTASection from "@/components/CTASection";
import DeveloperSection from "@/components/DeveloperSection";
import EcosystemArchitecture from "@/components/EcosystemArchitecture";
import InfrastructureDiagram from "@/components/InfrastructureDiagram";
import PlatformCard from "@/components/PlatformCard";
import ProductCard, { type ProductCardData } from "@/components/ProductCard";
import InnovationSection from "@/components/InnovationSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import AfricaNetworkVisual from "@/components/AfricaNetworkVisual";
import { createPageMetadata } from "@/lib/metadata";
import { platforms } from "@/lib/infrastructure";

export const metadata: Metadata = createPageMetadata({
  title: "Realtegic",
  description:
    "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
  path: "/",
});

const productPortfolio: ProductCardData[] = [
  {
    productName: "SuperKuba",
    displayName: "SuperKuba",
    slug: "superkuba",
    category: "AI WORKFORCE PLATFORM",
    description:
      "Create, deploy and manage intelligent digital employees that work alongside your human team.",
    availabilityStatus: "available",
    website: "SuperKuba.com",
    route: "/products/kuba-ai",
    visual: "AI workforce",
    icon: BrainCircuit,
    logo: "/logos/superkuba-logo.png",
    logoAlt: "SuperKuba",
    logoWidth: 2172,
    logoHeight: 724,
    featured: true,
    ctaLabel: "Visit SuperKuba",
    market: "Business",
    statusLabel: "Live",
  },
  {
    productName: "PropertyOS",
    displayName: "PropertyOS",
    slug: "propertyos",
    category: "PROPERTY TECHNOLOGY",
    description:
      "AI-powered property management, payments, tenant experiences, maintenance and property marketplace infrastructure.",
    availabilityStatus: "in-development",
    website: "Realtegic.com",
    route: "/products",
    visual: "Property OS",
    icon: Building2,
    featured: false,
    ctaLabel: "Explore product",
    market: "Property",
  },
  {
    productName: "TrustPay",
    displayName: "TrustPay",
    slug: "trustpay",
    category: "DIGITAL TRUST & ESCROW",
    description:
      "Digital trust infrastructure designed to make transactions between buyers and sellers safer.",
    availabilityStatus: "research",
    website: "Realtegic.com",
    route: "/products",
    visual: "Trust layer",
    icon: Shield,
    featured: false,
    ctaLabel: "Explore concept",
    market: "Finance",
  },
  {
    productName: "Institution Platform",
    displayName: "Institution Platform",
    slug: "institution-platform",
    category: "INSTITUTION MANAGEMENT",
    description:
      "Intelligent operating infrastructure for schools, universities, churches and other institutions.",
    availabilityStatus: "private-preview",
    website: "Realtegic.com",
    route: "/products",
    visual: "Institution OS",
    icon: Layers3,
    featured: false,
    ctaLabel: "Request preview",
    market: "Institutions",
  },
  {
    productName: "Government Technology",
    displayName: "Government Technology",
    slug: "government-technology",
    category: "GOVTECH",
    description:
      "Digital infrastructure and intelligent services designed to improve how citizens, institutions and government interact.",
    availabilityStatus: "research",
    website: "Realtegic.com",
    route: "/innovation",
    visual: "GovTech",
    icon: Workflow,
    featured: false,
    ctaLabel: "See research",
    market: "Government",
  },
  {
    productName: "Mobility Platform",
    displayName: "Mobility Platform",
    slug: "mobility-platform",
    category: "MOBILITY & TRANSPORTATION",
    description:
      "Digital infrastructure for route-based transport, booking, payments, fleet operations and future mobility services.",
    availabilityStatus: "public-preview",
    website: "Realtegic.com",
    route: "/innovation",
    visual: "Mobility stack",
    icon: Network,
    featured: false,
    ctaLabel: "View preview",
    market: "Mobility",
  },
];

export default function Home() {
  return (
    <main className="new-home">
      <section className="new-hero">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <SectionEyebrow>
              BUILDING WHAT COMES NEXT
            </SectionEyebrow>

            <h1>
              Building the Technology Behind{" "}
              <span>What Comes Next.</span>
            </h1>

            <p>
              We build digital infrastructure and intelligent platforms that power
              businesses, developers and institutions.
            </p>

            <div className="hero-actions">
              <Button asLink href="#platforms" variant="primary" size="lg">
                Explore Our Platforms
                <ArrowRight size={17} />
              </Button>

              <Button asLink href="/products" variant="secondary" size="lg">
                Explore Our Products
              </Button>
            </div>
          </div>

          <AfricaNetworkVisual />
        </div>
      </section>

      <section className="positioning-section" id="positioning">
        <div className="new-wrap positioning-grid">
          <div className="positioning-copy">
            <SectionEyebrow>WHAT WE BUILD</SectionEyebrow>

            <h2>
              We Don&apos;t Just Build Products. We Build the Infrastructure
              Behind Them.
            </h2>

            <p>
              Realtegic develops reusable technology infrastructure first, then
              uses that foundation to build its own applications and products.
            </p>
          </div>

          <InfrastructureDiagram />
        </div>
      </section>

      <section className="platforms-section" id="platforms">
        <div className="new-wrap">
          <div className="section-intro">
            <div>
              <SectionEyebrow>OUR TECHNOLOGY INFRASTRUCTURE</SectionEyebrow>
              <h2>
                Infrastructure
                <span> Platforms</span>
              </h2>
            </div>

            <p>
              The foundational technologies powering Realtegic products and,
              over time, the applications businesses and developers build on
              Realtegic infrastructure.
            </p>
          </div>

          <div className="platform-grid">
            {platforms.map((platform) => (
              <PlatformCard key={platform.slug} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="suite-section" id="ecosystem">
        <div className="new-wrap">
          <div className="section-intro">
            <div>
              <small>THE REALTEGIC ECOSYSTEM</small>
              <h2>
                One intelligence layer.
                <span> Multiple products.</span>
              </h2>
            </div>

            <p>
              We are building a growing ecosystem of technology products that
              share a common foundation of intelligence, automation and
              connectivity.
            </p>
          </div>

          <div className="suite-strip">
            <div>
              <BrainCircuit size={23} />
              <strong>AI</strong>
            </div>
            <div>
              <Workflow size={23} />
              <strong>Automation</strong>
            </div>
            <div>
              <Network size={23} />
              <strong>Platforms</strong>
            </div>
            <div>
              <Layers3 size={23} />
              <strong>Data</strong>
            </div>
          </div>

        </div>
      </section>

      <section className="products-section" id="products">
        <div className="new-wrap">
          <div className="section-intro section-intro--dark">
            <div>
              <SectionEyebrow>BUILT BY REALTEGIC</SectionEyebrow>
              <h2>
                Products
                <span> & Applications</span>
              </h2>
            </div>

            <p>
              Technology built to solve real problems across business,
              property, finance, government, institutions and everyday life.
            </p>
          </div>

          <div className="product-grid">
            {productPortfolio.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="products-footer">
            <p>
              A growing portfolio of products that share the same infrastructure
              foundation and design principles.
            </p>

            <Button asLink href="/products" variant="secondary" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      <section className="ecosystem-section">
        <div className="new-wrap">
          <div className="ecosystem-heading">
            <div>
              <SectionEyebrow>REALTEGIC ECOSYSTEM</SectionEyebrow>
              <h2>
                One Technology Foundation.
                <span> Many Possibilities.</span>
              </h2>
            </div>

            <p>
              Realtegic builds a shared technology foundation that powers our
              products today and opens room for future applications tomorrow.
            </p>
          </div>

          <EcosystemArchitecture />
        </div>
      </section>

      <DeveloperSection />
      <AfricaFirstSection />
      <InnovationSection />

      <CTASection />

    </main>
  );
}
