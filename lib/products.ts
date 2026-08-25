import {
  BrainCircuit,
  Building2,
  GraduationCap,
  Network,
  PanelsTopLeft,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type { StatusBadgeType } from "@/components/StatusBadge";
import type { ProductBrandFields } from "@/lib/product-brand";

export type ProductData = ProductBrandFields & {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: string;
  number: string;
  icon: LucideIcon;
  availabilityStatus: StatusBadgeType;
  visual: string;
  market: string;
  featured?: boolean;
  websiteLabel?: string;
  homepageCtaLabel?: string;
  homepageStatusLabel?: string;
  features: string[];
  summary: string;
  useCases: string[];
  availability: string;
  cardDescription?: string;
  capabilityLabel?: string;
  capabilityLine?: string[];
  ctaLabel?: string;
  externalCtaLabel?: string;
  signupUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export const products: ProductData[] = [
  {
    slug: "kuba-ai",
    title: "SuperKuba",
    category: "AI WORKFORCE PLATFORM",
    description:
      "Build an AI workforce for your business. Deploy intelligent digital employees that can answer calls, engage customers, generate leads, manage appointments, provide support, automate work and operate across your communication channels.",
    status: "LIVE",
    number: "01",
    icon: BrainCircuit,
    availabilityStatus: "available",
    visual: "AI workforce",
    market: "Business",
    featured: true,
    websiteLabel: "SuperKuba.com",
    homepageCtaLabel: "Visit SuperKuba",
    homepageStatusLabel: "Live",
    logo: "/logos/superkuba-logo.png",
    logoAlt: "SuperKuba",
    logoWidth: 2172,
    logoHeight: 724,
    externalUrl: "https://superkuba.com",
    signupUrl: "https://superkuba.com/signup",
    capabilityLabel: "CHANNEL ROADMAP",
    capabilityLine: ["Voice", "WhatsApp", "Email", "Web Chat", "Automation"],
    ctaLabel: "Explore SuperKuba",
    seoTitle: "SuperKuba | AI Workforce Platform by Realtegic",
    seoDescription:
      "Discover SuperKuba, Realtegic's AI Workforce Platform for building and managing intelligent digital employees across sales, customer service, appointments, communications and business operations.",
    features: [
      "AI customer engagement",
      "Multi-channel communication",
      "Business automation",
      "AI agents and workflows",
    ],
    summary:
      "SuperKuba is designed to let organizations deploy digital workforces that support conversations, service tasks and internal operations with a consistent AI layer.",
    useCases: [
      "Customer support and lead handling",
      "Sales follow-up and business communications",
      "Routine operational assistance across teams",
    ],
    availability: "SuperKuba is live. Individual AI roles, communication channels, integrations and workflows remain subject to account configuration and rollout status.",
    cardDescription:
      "Create, deploy and manage intelligent digital employees that work alongside your human team.",
  },
  {
    slug: "propertyos",
    title: "PropertyOS",
    category: "PROPERTY TECHNOLOGY",
    description:
      "AI-powered property management, payments, tenant experiences, maintenance and property marketplace infrastructure.",
    status: "IN DEVELOPMENT",
    number: "02",
    icon: Building2,
    availabilityStatus: "in-development",
    visual: "PropertyOS",
    market: "Property",
    homepageCtaLabel: "Explore product",
    features: [
      "Property management",
      "Tenant management",
      "Maintenance automation",
      "AI-powered operations",
    ],
    summary:
      "PropertyOS is being designed to connect property operations, tenant experiences and portfolio oversight into a single digital operating surface.",
    useCases: [
      "Portfolio oversight for landlords and developers",
      "Maintenance coordination and tenant communication",
      "Operational visibility across property workflows",
    ],
    availability: "The product is actively in development and is not presented as a general public launch or fully available platform yet.",
  },
  {
    slug: "trustpay",
    title: "TrustPay",
    category: "DIGITAL TRUST & ESCROW",
    description:
      "Digital trust infrastructure designed to make transactions between buyers and sellers safer.",
    status: "RESEARCH",
    number: "03",
    icon: Shield,
    availabilityStatus: "research",
    visual: "Trust layer",
    market: "Finance",
    homepageCtaLabel: "Explore concept",
    features: [
      "Transaction safeguards",
      "Buyer and seller workflows",
      "Digital trust controls",
      "Payment coordination",
    ],
    summary:
      "TrustPay is a research-stage concept exploring how digital trust infrastructure could support safer transactions between buyers and sellers.",
    useCases: [
      "Structured transaction flows between buyers and sellers",
      "Clearer payment and fulfillment coordination",
      "Trust controls for future marketplace experiences",
    ],
    availability:
      "TrustPay remains a research-stage concept and is not presented as a publicly available financial service.",
  },
  {
    slug: "tap-and-order",
    title: "Tap & Order",
    category: "SUPER APP",
    description:
      "A connected super app bringing marketplace, mobility and delivery services into one digital experience.",
    status: "PRODUCT",
    number: "04",
    icon: PanelsTopLeft,
    availabilityStatus: "available",
    visual: "Connected super app",
    market: "Everyday services",
    websiteLabel: "TapOrderAfrica.com",
    homepageCtaLabel: "Learn More",
    homepageStatusLabel: "Product",
    logo: "/logos/tap-and-order-logo.png",
    logoAlt: "Tap & Order",
    logoWidth: 9000,
    logoHeight: 3000,
    externalUrl: "https://www.taporderafrica.com",
    externalCtaLabel: "Visit Tap & Order",
    ctaLabel: "Learn More",
    seoTitle:
      "Tap & Order | Marketplace, Mobility & Delivery Super App | Realtegic",
    seoDescription:
      "Tap & Order is a Realtegic super app connecting marketplace, mobility and delivery services through one digital platform.",
    features: [
      "Marketplace",
      "Mobility",
      "Delivery",
      "Connected experience",
    ],
    summary:
      "Tap & Order brings commerce, mobility and delivery services together through one connected consumer platform.",
    useCases: [
      "Discover and order products from participating merchants",
      "Access mobility services through the same ecosystem",
      "Coordinate delivery as part of a connected experience",
    ],
    availability:
      "Tap & Order connects marketplace, mobility and delivery within one product ecosystem.",
  },
  {
    slug: "institution-platform",
    title: "Institution Platform",
    category: "INSTITUTION MANAGEMENT",
    description:
      "Intelligent operating infrastructure for schools, universities, churches and other institutions.",
    status: "PRIVATE PREVIEW",
    number: "05",
    icon: GraduationCap,
    availabilityStatus: "private-preview",
    visual: "Institution OS",
    market: "Institutions",
    homepageCtaLabel: "Request preview",
    features: [
      "Institution operations",
      "Member and stakeholder records",
      "Administrative workflows",
      "Communication coordination",
    ],
    summary:
      "Institution Platform brings core administrative workflows into a shared operating environment for education, faith and other membership-based institutions.",
    useCases: [
      "Coordinate recurring administrative processes",
      "Support communication across institutional stakeholders",
      "Improve visibility across records and operations",
    ],
    availability:
      "Institution Platform is in private preview. Access and capabilities remain limited while the platform is developed.",
  },
  {
    slug: "mobility-platform",
    title: "Mobility Platform",
    category: "MOBILITY & TRANSPORTATION",
    description:
      "Digital infrastructure for route-based transport, booking, payments, fleet operations and future mobility services.",
    status: "PUBLIC PREVIEW",
    number: "06",
    icon: Network,
    availabilityStatus: "public-preview",
    visual: "Mobility stack",
    market: "Mobility",
    homepageCtaLabel: "View preview",
    features: [
      "Route and service management",
      "Booking workflows",
      "Fleet operations",
      "Mobility payments",
    ],
    summary:
      "Mobility Platform is designed to connect transport services, booking, payments and operational workflows through shared digital infrastructure.",
    useCases: [
      "Manage route-based transport services",
      "Coordinate bookings and mobility payments",
      "Support fleet and service operations",
    ],
    availability:
      "Mobility Platform is in public preview. Features and availability may change as development continues.",
  },
];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, ProductData>;
