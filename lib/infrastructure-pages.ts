import {
  Activity,
  AppWindow,
  Bell,
  Bot,
  Box,
  Boxes,
  Brain,
  BrainCircuit,
  ChartColumn,
  ChartLine,
  ChartPie,
  Cloud,
  Code2,
  Cog,
  Cpu,
  Database,
  FileText,
  Globe,
  KeyRound,
  Layers,
  LayoutGrid,
  Link2,
  Lock,
  Mail,
  MessageCircle,
  MessageSquareMore,
  Network,
  Phone,
  RefreshCw,
  Route,
  Settings,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type InfraNode = {
  icon: LucideIcon;
  title: string;
  detail?: string;
};

export type InfraPageContent = {
  heroIcon: LucideIcon;
  heroLabel: string;
  /** Checklist on the central hero card. When present the hero uses the stacked layout. */
  heroChecks?: string[];
  heroNodes: InfraNode[];
  traits: InfraNode[];
  capabilities: { icon: LucideIcon; description: string }[];
  valueIcon: LucideIcon;
  valueNodes: InfraNode[];
  valueExtras?: InfraNode[];
  cta: { eyebrow: string; title: string };
};

export const infrastructurePages: Record<string, InfraPageContent> = {
  "ai-platform": {
    heroIcon: BrainCircuit,
    heroLabel: "AI Platform",
    heroChecks: ["Agents", "Memory", "Tools", "Workflows"],
    heroNodes: [
      { icon: Bot, title: "Agents", detail: "Reasoning and planning" },
      { icon: Database, title: "Knowledge", detail: "Retrieval and memory" },
      { icon: Workflow, title: "Tools", detail: "Actions and workflows" },
      { icon: MessageCircle, title: "Channels", detail: "Voice, chat and messaging" },
    ],
    traits: [
      { icon: Sparkles, title: "Reason", detail: "with context" },
      { icon: Workflow, title: "Act", detail: "across tools" },
      { icon: ShieldCheck, title: "Govern", detail: "by design" },
    ],
    capabilities: [
      {
        icon: BrainCircuit,
        description: "Coordinate agents that plan tasks, reason over context and hand off work.",
      },
      {
        icon: Database,
        description: "Ground responses in business knowledge with retrieval and memory layers.",
      },
      {
        icon: Workflow,
        description: "Let agents use tools and trigger workflows across connected systems.",
      },
      {
        icon: MessageCircle,
        description: "Bring AI actions to voice, chat, email and messaging channels.",
      },
    ],
    valueIcon: BrainCircuit,
    valueNodes: [
      { icon: Sparkles, title: "Reason" },
      { icon: Database, title: "Remember" },
      { icon: Workflow, title: "Act" },
      { icon: ShieldCheck, title: "Govern" },
    ],
    cta: { eyebrow: "Ready to explore", title: "Explore our AI products and solutions." },
  },
  "communications-cloud": {
    heroIcon: MessageCircle,
    heroLabel: "Communications Cloud",
    heroNodes: [
      { icon: MessageSquareMore, title: "WhatsApp", detail: "Messaging" },
      { icon: Phone, title: "Voice", detail: "Calling & IVR" },
      { icon: Users, title: "In-app", detail: "Notifications" },
      { icon: Mail, title: "Email", detail: "Notifications" },
      { icon: MessageCircle, title: "SMS", detail: "Text messaging" },
      { icon: Bell, title: "Push", detail: "Notifications" },
    ],
    traits: [
      { icon: MessageCircle, title: "Unified", detail: "across channels" },
      { icon: Users, title: "Reliable", detail: "at scale" },
      { icon: ShieldCheck, title: "Secure", detail: "by design" },
    ],
    capabilities: [
      {
        icon: MessageCircle,
        description:
          "Connect WhatsApp, SMS, email, voice, push and in-app messaging through a single platform.",
      },
      {
        icon: Users,
        description:
          "Deliver targeted, reliable and contextual notifications to customers and internal teams.",
      },
      {
        icon: Settings,
        description:
          "Automate communication workflows based on business events, user actions and system triggers.",
      },
      {
        icon: Route,
        description:
          "Route messages intelligently based on user preferences, context and channel availability.",
      },
    ],
    valueIcon: MessageSquareMore,
    valueNodes: [
      { icon: Users, title: "Customers" },
      { icon: Users, title: "Teams" },
      { icon: Box, title: "Systems" },
      { icon: Network, title: "Products" },
    ],
    valueExtras: [
      { icon: MessageSquareMore, title: "WhatsApp" },
      { icon: Mail, title: "Email" },
      { icon: MessageCircle, title: "SMS" },
      { icon: Phone, title: "Voice" },
      { icon: Bell, title: "Push" },
    ],
    cta: {
      eyebrow: "Ready to connect",
      title: "Explore our communications products and solutions.",
    },
  },
  "identity-cloud": {
    heroIcon: Users,
    heroLabel: "Identity Cloud",
    heroChecks: ["Authentication", "Organizations", "Roles", "Policies"],
    heroNodes: [
      { icon: Users, title: "People", detail: "Users, groups and roles" },
      { icon: ShieldCheck, title: "Permissions", detail: "Access and policy control" },
      { icon: Cog, title: "Applications", detail: "Integrate across platforms" },
      { icon: Database, title: "Ecosystem", detail: "Ready for future products" },
    ],
    traits: [
      { icon: Lock, title: "Secure", detail: "by design" },
      { icon: Box, title: "Adapts", detail: "across products" },
      { icon: Globe, title: "Ready", detail: "for what's next" },
    ],
    capabilities: [
      {
        icon: Lock,
        description:
          "Flexible, standards-based identity frameworks for people, services and applications.",
      },
      {
        icon: Users,
        description: "Support for organizations, teams and dynamic role structures.",
      },
      {
        icon: FileText,
        description: "Centralized, scalable policy controls across products and services.",
      },
      {
        icon: Box,
        description: "Reusable identity components to accelerate product development.",
      },
    ],
    valueIcon: ShieldCheck,
    valueNodes: [
      { icon: Lock, title: "Secure" },
      { icon: ChartColumn, title: "Scalable" },
      { icon: Box, title: "Flexible" },
      { icon: Link2, title: "Connected" },
    ],
    cta: {
      eyebrow: "Ready to build",
      title: "Explore our infrastructure products and solutions.",
    },
  },
  "integration-cloud": {
    heroIcon: Cloud,
    heroLabel: "Integration Cloud",
    heroNodes: [
      { icon: AppWindow, title: "Applications", detail: "Web & mobile" },
      { icon: Link2, title: "APIs", detail: "REST, GraphQL" },
      { icon: Database, title: "Business Systems", detail: "ERP, CRM, HR" },
      { icon: Cloud, title: "External Services", detail: "Payments, logistics" },
      { icon: ChartColumn, title: "Data Platforms", detail: "Analytics, lakes" },
      { icon: LayoutGrid, title: "SaaS Products", detail: "Third-party" },
    ],
    traits: [
      { icon: Zap, title: "Connect", detail: "systems faster" },
      { icon: Box, title: "Standardize", detail: "integrations" },
      { icon: ShieldCheck, title: "Reliable", detail: "and secure" },
      { icon: ChartColumn, title: "Built", detail: "to scale" },
    ],
    capabilities: [
      {
        icon: Link2,
        description: "Connect, manage and orchestrate APIs across internal and external systems.",
      },
      {
        icon: Network,
        description:
          "Build real-time, event-driven integrations for scalable, decoupled architectures.",
      },
      {
        icon: Settings,
        description:
          "Reusable connectors for business applications and services, adapted to each system.",
      },
      {
        icon: Layers,
        description:
          "Ensure reliable data flow, error handling and process coordination across systems.",
      },
    ],
    valueIcon: Link2,
    valueNodes: [
      { icon: AppWindow, title: "Applications" },
      { icon: Link2, title: "APIs" },
      { icon: Database, title: "Data" },
      { icon: LayoutGrid, title: "Services" },
    ],
    valueExtras: [
      { icon: RefreshCw, title: "Sync" },
      { icon: Network, title: "Transform" },
      { icon: ChartColumn, title: "Monitor" },
      { icon: Layers, title: "Scale" },
    ],
    cta: {
      eyebrow: "Ready to integrate",
      title: "Explore our integration products and solutions.",
    },
  },
  "automation-cloud": {
    heroIcon: Zap,
    heroLabel: "Automation Cloud",
    heroChecks: ["Triggers", "Workflows", "Approvals", "Integrations"],
    heroNodes: [
      { icon: Database, title: "Data Sources", detail: "Apps, services, databases" },
      { icon: Code2, title: "Business Logic", detail: "Rules and workflows" },
      { icon: Users, title: "Approvals", detail: "People and policies" },
      { icon: ChartColumn, title: "Monitoring", detail: "Insights and exceptions" },
    ],
    traits: [
      { icon: Zap, title: "Automate", detail: "repetitive work" },
      { icon: Boxes, title: "Orchestrate", detail: "across systems" },
      { icon: ChartColumn, title: "Scale", detail: "with confidence" },
    ],
    capabilities: [
      {
        icon: Zap,
        description: "Trigger and execute workflows based on real-time events across systems.",
      },
      {
        icon: Boxes,
        description:
          "Coordinate multi-step processes across teams, services and applications.",
      },
      {
        icon: Settings,
        description: "Automate actions with configurable triggers, rules and approval flows.",
      },
      {
        icon: ChartColumn,
        description: "Track workflows, identify issues and handle exceptions intelligently.",
      },
    ],
    valueIcon: Settings,
    valueNodes: [
      { icon: Zap, title: "Triggers" },
      { icon: Database, title: "Integrations" },
      { icon: Users, title: "Approvals" },
      { icon: ChartColumn, title: "Monitoring" },
    ],
    cta: {
      eyebrow: "Ready to automate",
      title: "Explore our automation products and solutions.",
    },
  },
  "data-intelligence-platform": {
    heroIcon: ChartColumn,
    heroLabel: "Data & Intelligence",
    heroNodes: [
      { icon: Database, title: "Data Sources", detail: "Products, services, external systems" },
      { icon: ChartLine, title: "Data Pipelines", detail: "Batch and real-time" },
      { icon: ShieldCheck, title: "Governance", detail: "Security, privacy and compliance" },
      { icon: ChartColumn, title: "Analytics", detail: "Dashboards and BI" },
      { icon: Cpu, title: "AI & ML", detail: "Intelligence primitives" },
      { icon: ChartPie, title: "Operational Insights", detail: "Real-time monitoring" },
    ],
    traits: [
      { icon: Settings, title: "Unify", detail: "your data" },
      { icon: Activity, title: "Turn data", detail: "into insight" },
      { icon: ShieldCheck, title: "Secure", detail: "and govern" },
      { icon: ChartColumn, title: "Scale", detail: "across products" },
    ],
    capabilities: [
      {
        icon: Database,
        description: "Ingest, process and share data across products and external systems in real time.",
      },
      {
        icon: ChartColumn,
        description: "Deliver real-time visibility with customizable dashboards and business insights.",
      },
      {
        icon: Brain,
        description: "Enable AI/ML, analytics and predictive intelligence across use cases.",
      },
      {
        icon: Layers,
        description: "Provide governed, high-quality data access with consistent models and APIs.",
      },
    ],
    valueIcon: ChartColumn,
    valueNodes: [
      { icon: Database, title: "Ingest" },
      { icon: ChartColumn, title: "Analyze" },
      { icon: ShieldCheck, title: "Govern" },
      { icon: LayoutGrid, title: "Activate" },
    ],
    cta: {
      eyebrow: "Ready to build",
      title: "Explore our data and intelligence products and solutions.",
    },
  },
  "developer-cloud": {
    heroIcon: Code2,
    heroLabel: "Developer Cloud",
    heroChecks: ["APIs", "SDKs", "Sandboxes", "Documentation", "Observability"],
    heroNodes: [
      { icon: Settings, title: "API Tooling", detail: "Build and integrate" },
      { icon: Database, title: "Sandbox Environments", detail: "Test and validate" },
      { icon: KeyRound, title: "Developer Access", detail: "Credentials and controls" },
      { icon: ChartColumn, title: "Monitoring & Insights", detail: "Usage and observability" },
    ],
    traits: [
      { icon: Code2, title: "Build", detail: "faster" },
      { icon: Box, title: "Integrate", detail: "with confidence" },
      { icon: ShieldCheck, title: "Secure", detail: "by design" },
      { icon: ChartColumn, title: "Scale", detail: "for what's next" },
    ],
    capabilities: [
      {
        icon: Code2,
        description:
          "Tools, SDKs and documentation workflows to accelerate developer productivity.",
      },
      {
        icon: Lock,
        description: "Secure and manage API keys, permissions and access policies for developers.",
      },
      {
        icon: Box,
        description:
          "Isolated environments to build, test and validate integrations before production.",
      },
      {
        icon: ChartColumn,
        description:
          "Gain visibility into API usage, performance and integration health across environments.",
      },
    ],
    valueIcon: Code2,
    valueNodes: [
      { icon: SquareTerminal, title: "Build" },
      { icon: Box, title: "Test" },
      { icon: Link2, title: "Integrate" },
      { icon: ChartColumn, title: "Monitor" },
    ],
    cta: {
      eyebrow: "Ready for what's next",
      title: "Explore our developer products and solutions.",
    },
  },
};
