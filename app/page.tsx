import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Database,
  Layers3,
  Network,
  MessageSquare,
  Plug,
  Shield,
  Workflow,
} from "lucide-react";
import Button from "@/components/Button";
import AfricaFirstSection from "@/components/AfricaFirstSection";
import CTASection from "@/components/CTASection";
import DeveloperSection from "@/components/DeveloperSection";
import EcosystemArchitecture from "@/components/EcosystemArchitecture";
import InfrastructureDiagram from "@/components/InfrastructureDiagram";
import PlatformCard, {
  type PlatformCardData,
} from "@/components/PlatformCard";
import ProductCard, { type ProductCardData } from "@/components/ProductCard";
import InnovationSection from "@/components/InnovationSection";
import SectionEyebrow from "@/components/SectionEyebrow";
import AfricaNetworkVisual from "@/components/AfricaNetworkVisual";

const platforms: PlatformCardData[] = [
  {
    name: "AI Platform",
    slug: "ai-platform",
    category: "AI INFRASTRUCTURE",
    description:
      "Infrastructure for building, deploying and operating intelligent agents, AI applications, memory, tools and workflows.",
    lifecycleStatus: "research",
    icon: BrainCircuit,
    featured: true,
    route: "/innovation",
    publicAvailability: false,
    ctaLabel: "Explore research",
  },
  {
    name: "Communications Cloud",
    slug: "communications-cloud",
    category: "COMMUNICATIONS INFRASTRUCTURE",
    description:
      "Unified communications infrastructure for WhatsApp, SMS, email, voice, push notifications and future communication channels.",
    lifecycleStatus: "in-development",
    icon: MessageSquare,
    featured: false,
    route: "/contact",
    publicAvailability: false,
    ctaLabel: "View foundation",
  },
  {
    name: "Identity Cloud",
    slug: "identity-cloud",
    category: "IDENTITY INFRASTRUCTURE",
    description:
      "Authentication, authorization, organizations, user management, permissions and identity infrastructure for modern applications.",
    lifecycleStatus: "internal",
    icon: Shield,
    featured: false,
    route: "/about",
    publicAvailability: false,
    ctaLabel: "Learn more",
  },
  {
    name: "Integration Cloud",
    slug: "integration-cloud",
    category: "INTEGRATION INFRASTRUCTURE",
    description:
      "A common integration layer connecting applications to APIs, financial systems, business services and external platforms.",
    lifecycleStatus: "private-preview",
    icon: Plug,
    featured: false,
    route: "/products",
    publicAvailability: false,
    ctaLabel: "Request access",
  },
  {
    name: "Automation Cloud",
    slug: "automation-cloud",
    category: "AUTOMATION INFRASTRUCTURE",
    description:
      "Workflow, trigger, scheduling and business-process automation infrastructure for applications and intelligent agents.",
    lifecycleStatus: "in-development",
    icon: Workflow,
    featured: false,
    route: "/products",
    publicAvailability: false,
    ctaLabel: "See the stack",
  },
  {
    name: "Data & Intelligence Platform",
    slug: "data-intelligence-platform",
    category: "DATA INFRASTRUCTURE",
    description:
      "Shared data, events, analytics and intelligence infrastructure for Realtegic applications and future customers.",
    lifecycleStatus: "public-preview",
    icon: Database,
    featured: false,
    route: "/innovation",
    publicAvailability: true,
    ctaLabel: "View preview",
  },
];

const productPortfolio: ProductCardData[] = [
  {
    productName: "SuperKuba",
    displayName: "SuperKuba",
    slug: "superkuba",
    category: "AI WORKFORCE PLATFORM",
    description:
      "Create, deploy and manage intelligent digital employees that work alongside your human team.",
    availabilityStatus: "available",
    website: "Realtegic.com",
    route: "/products",
    visual: "AI workforce",
    logo: BrainCircuit,
    featured: true,
    ctaLabel: "Visit SuperKuba",
    market: "Business",
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
    logo: Building2,
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
    logo: Shield,
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
    logo: Layers3,
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
    logo: Workflow,
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
    logo: Network,
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
              BUILDING AFRICA&apos;S TECHNOLOGY INFRASTRUCTURE
            </SectionEyebrow>

            <h1>
              The Technology Behind Africa&apos;s{" "}
              <span>Digital Future.</span>
            </h1>

            <p>
              We build the digital infrastructure and intelligent platforms
              that power businesses, institutions and developers across Africa
              and beyond.
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
              eventually, the applications businesses and developers build
              across Africa.
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
