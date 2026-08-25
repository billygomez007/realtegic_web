import { BrainCircuit, Building2, PanelsTopLeft, type LucideIcon } from "lucide-react";
import type { ProductBrandFields } from "@/lib/product-brand";

export type ProductData = ProductBrandFields & {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: string;
  number: string;
  icon: LucideIcon;
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
  },
  {
    slug: "realtegic-property",
    title: "Realtegic Property",
    category: "PROPERTY TECHNOLOGY",
    description:
      "An intelligent property management platform for property owners, managers and developers to manage their entire portfolio from one place.",
    status: "IN DEVELOPMENT",
    number: "02",
    icon: Building2,
    features: [
      "Property management",
      "Tenant management",
      "Maintenance automation",
      "AI-powered operations",
    ],
    summary:
      "Realtegic Property is being designed to connect property operations, tenant experiences and portfolio oversight into a single digital operating surface.",
    useCases: [
      "Portfolio oversight for landlords and developers",
      "Maintenance coordination and tenant communication",
      "Operational visibility across property workflows",
    ],
    availability: "The product is actively in development and is not presented as a general public launch or fully available platform yet.",
  },
  {
    slug: "tap-and-order",
    title: "Tap & Order",
    category: "SUPER APP",
    description:
      "A connected super app bringing marketplace, mobility and delivery services into one digital experience.",
    status: "PRODUCT",
    number: "03",
    icon: PanelsTopLeft,
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
];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, ProductData>;
