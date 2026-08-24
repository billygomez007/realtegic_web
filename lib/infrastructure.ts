import {
  BrainCircuit,
  Code2,
  Database,
  MessageSquare,
  Plug,
  Shield,
  Workflow,
} from "lucide-react";
import type { PlatformCardData } from "@/components/PlatformCard";

export const platforms: PlatformCardData[] = [
  {
    name: "AI Platform",
    slug: "ai-platform",
    category: "AI INFRASTRUCTURE",
    description:
      "Infrastructure for building, deploying and operating intelligent agents, AI applications, memory, tools and workflows.",
    lifecycleStatus: "research",
    icon: BrainCircuit,
    featured: true,
    route: "/infrastructure/ai-platform",
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
    route: "/infrastructure/communications-cloud",
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
    route: "/infrastructure/identity-cloud",
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
    route: "/infrastructure/integration-cloud",
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
    route: "/infrastructure/automation-cloud",
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
    route: "/infrastructure/data-intelligence-platform",
    publicAvailability: true,
    ctaLabel: "View preview",
  },
  {
    name: "Developer Cloud",
    slug: "developer-cloud",
    category: "DEVELOPER INFRASTRUCTURE",
    description:
      "Developer infrastructure for APIs, SDKs, developer credentials, sandbox environments, testing, observability, usage management, documentation and tools for building on Realtegic platforms.",
    lifecycleStatus: "in-development",
    icon: Code2,
    featured: false,
    route: "/infrastructure/developer-cloud",
    publicAvailability: false,
    ctaLabel: "Explore developer tooling",
  },
];

export const platformBySlug = Object.fromEntries(
  platforms.map((platform) => [platform.slug, platform]),
) as Record<string, PlatformCardData>;

export const platformDetails: Record<
  string,
  {
    summary: string;
    capabilities: string[];
    outcomes: string[];
    availability: string;
  }
> = {
  "ai-platform": {
    summary:
      "A shared AI foundation for reasoning, memory, orchestration and agentic workflows that can power future products and business operations.",
    capabilities: [
      "Agent orchestration and task planning",
      "Knowledge retrieval and memory layers",
      "Tool use and workflow automation",
      "Multi-channel communications and AI actions",
    ],
    outcomes: [
      "Reduce repetitive work across operations",
      "Improve service quality with consistent AI responses",
      "Create reusable business workflows without bespoke rebuilds",
    ],
    availability: "Research and internal experimentation remain active; public access is not available yet.",
  },
  "communications-cloud": {
    summary:
      "A customer and team communication backbone that connects voice, messaging, email and notifications through a consistent operating layer.",
    capabilities: [
      "Unified messaging channels",
      "Structured customer and team notifications",
      "Operational automation and event triggers",
      "Channel-aware communication routing",
    ],
    outcomes: [
      "Create a single communication layer across products",
      "Improve engagement consistency across customer journeys",
      "Support future multi-channel operations without duplicate plumbing",
    ],
    availability: "Under active development and not publicly available for general customer use.",
  },
  "identity-cloud": {
    summary:
      "Identity infrastructure for organizations, people, permissions and access control designed to be secure, adaptable and product-ready.",
    capabilities: [
      "Authentication and authorization models",
      "Organization and role management",
      "Permissions and access policy enforcement",
      "Identity primitives for future applications",
    ],
    outcomes: [
      "Reduce duplicated identity patterns across products",
      "Support trust and access controls consistently",
      "Enable future multi-product user experiences without brittle integrations",
    ],
    availability: "Internal architecture remains in active design and implementation.",
  },
  "integration-cloud": {
    summary:
      "A common connectivity layer that helps products interact with APIs, business services and external systems without creating fragmented custom integrations.",
    capabilities: [
      "API connectivity and orchestration",
      "Event-driven integration patterns",
      "Business system adapters and service layers",
      "Operational sync and workflow coordination",
    ],
    outcomes: [
      "Speed up product integration and deployment",
      "Reduce custom connector sprawl",
      "Create more reliable operational data flow between services",
    ],
    availability: "Private preview and internal access only; public availability remains unavailable.",
  },
  "automation-cloud": {
    summary:
      "Workflow and process automation infrastructure that lets teams trigger actions, coordinate services and streamline operations using reusable logic.",
    capabilities: [
      "Event-driven workflow execution",
      "Business process orchestration",
      "Trigger-based automation and approvals",
      "Operational monitoring and exception handling",
    ],
    outcomes: [
      "Shorten turnaround time on repetitive tasks",
      "Improve consistency across operational workflows",
      "Enable future intelligent automation without bespoke coding at every layer",
    ],
    availability: "In development and intended for internal product use before broader release.",
  },
  "data-intelligence-platform": {
    summary:
      "The shared data, metrics and intelligence layer supporting analytics, operational insight and future real-time decision-making across the ecosystem.",
    capabilities: [
      "Shared event and data pipelines",
      "Operational dashboards and insight generation",
      "Intelligence and analytics primitives",
      "Reliable access to structured business data",
    ],
    outcomes: [
      "Create a common source of truth for systems and teams",
      "Increase transparency into product and business performance",
      "Support future AI and operational workloads with reliable data foundations",
    ],
    availability: "Public preview is available in controlled scenarios only; broader public access remains limited.",
  },
  "developer-cloud": {
    summary:
      "Developer infrastructure designed to support API access, tooling, observability, sandbox testing and a future developer experience around Realtegic products.",
    capabilities: [
      "API tooling and documentation workflows",
      "Developer credentials and access controls",
      "Sandbox and testing environments",
      "Monitoring, observability and usage management",
    ],
    outcomes: [
      "Simplify developer onboarding for future public access",
      "Improve reliability and supportability for platform integrations",
      "Prepare for a future ecosystem of partner, customer and third-party developer use",
    ],
    availability: "In development. Public developer APIs, SDKs and sandboxes remain intentionally unavailable until launch.",
  },
};
