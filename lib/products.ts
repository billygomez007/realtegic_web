import { BrainCircuit, Building2, type LucideIcon } from "lucide-react";

export type ProductData = {
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
};

export const products: ProductData[] = [
  {
    slug: "kuba-ai",
    title: "Kuba AI",
    category: "AI WORKFORCE PLATFORM",
    description:
      "An intelligent AI workforce that helps businesses automate customer communication, engagement and everyday operations.",
    status: "AVAILABLE",
    number: "01",
    icon: BrainCircuit,
    features: [
      "AI customer engagement",
      "Multi-channel communication",
      "Business automation",
      "AI agents and workflows",
    ],
    summary:
      "Kuba AI is designed to let organizations deploy digital workforces that support conversations, service tasks and internal operations with a consistent AI layer.",
    useCases: [
      "Customer support and lead handling",
      "Sales follow-up and business communications",
      "Routine operational assistance across teams",
    ],
    availability: "Currently positioned as an available product direction with practical business use cases and a clear operational value proposition.",
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
];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, ProductData>;
