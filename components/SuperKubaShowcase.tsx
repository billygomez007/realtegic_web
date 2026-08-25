import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  Check,
  CircleUserRound,
  Headphones,
  HeartPulse,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  PhoneIncoming,
  PhoneOutgoing,
  Plane,
  Scale,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import ProductBrandLogo from "@/components/ProductBrandLogo";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { ProductData } from "@/lib/products";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const aiEmployees: IconItem[] = [
  {
    title: "AI Receptionist",
    description: "Handles enquiries, routes conversations and welcomes customers.",
    icon: CircleUserRound,
  },
  {
    title: "AI Sales Assistant",
    description: "Engages prospects, captures leads and supports the sales process.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI Customer Support",
    description: "Answers customer questions and handles support conversations.",
    icon: Headphones,
  },
  {
    title: "AI Appointment Agent",
    description: "Books, reschedules and manages customer appointments.",
    icon: CalendarDays,
  },
  {
    title: "AI Executive Assistant",
    description: "Supports administrative work, follow-ups and coordination.",
    icon: Sparkles,
  },
  {
    title: "AI Marketing Agent",
    description: "Supports campaigns, customer engagement and marketing activities.",
    icon: Megaphone,
  },
  {
    title: "AI Operations Agent",
    description: "Helps coordinate tasks, workflows and everyday operations.",
    icon: Settings2,
  },
  {
    title: "AI Accountant",
    description: "Supports configured finance workflows with permissions and human controls.",
    icon: Calculator,
  },
];

const voiceCapabilities: IconItem[] = [
  {
    title: "Inbound calls",
    description: "Designed to answer incoming business calls and handle appropriate customer conversations.",
    icon: PhoneIncoming,
  },
  {
    title: "Outbound calls",
    description: "Designed for configured follow-ups, reminders and appropriate customer engagement.",
    icon: PhoneOutgoing,
  },
  {
    title: "Natural conversations",
    description: "Voice experiences are intended to follow business knowledge, policies and permissions.",
    icon: MessagesSquare,
  },
  {
    title: "Call workflows",
    description: "Planned connections include leads, appointments, follow-ups and supported processes.",
    icon: Workflow,
  },
];

const channels = [
  { name: "Voice", status: "In development" },
  { name: "WhatsApp", status: "In development" },
  { name: "Email", status: "In development" },
  { name: "SMS", status: "In development" },
  { name: "Web Chat", status: "Planned" },
  { name: "Instagram", status: "Planned" },
  { name: "Facebook", status: "Planned" },
  { name: "Telegram", status: "Planned" },
];

const knowledgeSources = [
  "Company information",
  "Products and services",
  "FAQs and policies",
  "Documents",
  "Operating procedures",
  "Approved customer context",
  "Business knowledge",
];

const employeeControls = [
  "Name and role",
  "Communication tone",
  "Business knowledge",
  "Languages",
  "Connected tools",
  "Permissions",
  "Approval requirements",
  "Autonomy boundaries",
];

const supportedActions = [
  "Capture leads",
  "Update customer information",
  "Create tasks",
  "Schedule appointments",
  "Send follow-ups",
  "Handle enquiries",
  "Trigger supported workflows",
  "Escalate for human approval",
];

const useCases: IconItem[] = [
  {
    title: "Professional services",
    description: "Handle enquiries, appointments, follow-ups and client communication.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Legal practices",
    description: "Support reception, appointment coordination and administrative workflows.",
    icon: Scale,
  },
  {
    title: "Property businesses",
    description: "Capture prospects, arrange viewings and follow up with property leads.",
    icon: BadgeCheck,
  },
  {
    title: "Healthcare and clinics",
    description: "Support appropriate reception and appointment workflows without clinical decisions.",
    icon: HeartPulse,
  },
  {
    title: "Travel businesses",
    description: "Respond to travel enquiries, capture requirements and support follow-ups.",
    icon: Plane,
  },
  {
    title: "Retail and commerce",
    description: "Handle product enquiries, customer support and sales conversations.",
    icon: ShoppingBag,
  },
];

const setupSteps = [
  "Create your business account",
  "Teach Kuba about your business",
  "Choose your AI employees",
  "Configure roles and permissions",
  "Connect supported channels and tools",
  "Deploy your AI workforce",
  "Monitor and improve",
];

export default function SuperKubaShowcase({ product }: { product: ProductData }) {
  if (
    !product.logo ||
    !product.logoAlt ||
    !product.logoWidth ||
    !product.logoHeight ||
    !product.externalUrl ||
    !product.signupUrl
  ) {
    throw new Error("SuperKuba showcase requires complete brand and destination configuration.");
  }

  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  } as const;

  return (
    <main className="superkuba-showcase">
      <section className="superkuba-hero">
        <div className="new-wrap superkuba-hero__grid">
          <div className="superkuba-hero__copy">
            <ProductBrandLogo
              src={product.logo}
              alt={product.logoAlt}
              width={product.logoWidth}
              height={product.logoHeight}
              sizes="(max-width: 650px) calc(100vw - 64px), 360px"
              className="superkuba-hero__logo"
            />
            <SectionEyebrow>A REALTEGIC PRODUCT</SectionEyebrow>
            <h1>
              Build Your <span>AI Workforce.</span>
            </h1>
            <p>
              SuperKuba enables businesses to create, deploy and manage intelligent
              digital employees that work alongside human teams across customer
              service, sales, appointments, operations and everyday business
              processes.
            </p>
            <div className="superkuba-actions">
              <a
                href={product.signupUrl}
                className="superkuba-button superkuba-button--primary"
                {...externalLinkProps}
              >
                Start with SuperKuba
                <ArrowRight size={17} />
              </a>
              <a
                href={product.externalUrl}
                className="superkuba-button superkuba-button--secondary"
                {...externalLinkProps}
              >
                Visit SuperKuba
              </a>
            </div>
          </div>

          <div className="superkuba-workforce-preview">
            <div className="superkuba-workforce-preview__header">
              <span>YOUR AI WORKFORCE</span>
              <strong>LIVE</strong>
            </div>
            <div className="superkuba-workforce-preview__roles">
              {aiEmployees.slice(0, 4).map(({ title, icon: Icon }) => (
                <div key={title}>
                  <span aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <strong>{title.replace("AI ", "")}</strong>
                  <small>Choose when needed</small>
                </div>
              ))}
            </div>
            <p>Start with one role. Add more as your business grows.</p>
          </div>
        </div>
      </section>

      <section className="superkuba-section superkuba-section--soft">
        <div className="new-wrap">
          <div className="superkuba-section__intro">
            <div>
              <SectionEyebrow>YOUR BUSINESS. YOUR AI WORKFORCE.</SectionEyebrow>
              <h2>
                Specialized AI employees, <span>working as one team.</span>
              </h2>
            </div>
            <p>
              Instead of using AI only as a chatbot or occasional assistant,
              SuperKuba lets a business build a team of specialized AI employees
              with defined roles, knowledge, tools and permissions.
            </p>
          </div>

          <div className="superkuba-role-grid">
            {aiEmployees.map(({ title, description, icon: Icon }) => (
              <article key={title} className="superkuba-role-card">
                <span className="superkuba-icon" aria-hidden="true">
                  <Icon size={21} />
                </span>
                <small>AI EMPLOYEE</small>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="superkuba-disclaimer">
            Role availability and actions depend on account configuration,
            connected tools, permissions and rollout status.
          </p>
        </div>
      </section>

      <section className="superkuba-section superkuba-voice">
        <div className="new-wrap superkuba-voice__grid">
          <div className="superkuba-voice__copy">
            <span className="superkuba-status superkuba-status--development">
              IN DEVELOPMENT
            </span>
            <SectionEyebrow>VOICE CAPABILITIES</SectionEyebrow>
            <h2>
              AI that can <span>talk to your customers.</span>
            </h2>
            <p>
              SuperKuba&apos;s communications architecture is being developed to
              support voice interactions. Voice capabilities are not presented as
              generally available until enabled for a customer&apos;s account.
            </p>
          </div>

          <div className="superkuba-voice__cards">
            {voiceCapabilities.map(({ title, description, icon: Icon }) => (
              <article key={title}>
                <span className="superkuba-icon superkuba-icon--dark" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="superkuba-section">
        <div className="new-wrap">
          <div className="superkuba-section__intro">
            <div>
              <SectionEyebrow>MEET CUSTOMERS WHERE THEY ARE</SectionEyebrow>
              <h2>
                One workforce. <span>Multiple channels.</span>
              </h2>
            </div>
            <p>
              SuperKuba is designed around connected customer communication.
              Channel availability remains tied to rollout and account
              configuration.
            </p>
          </div>

          <div className="superkuba-channel-grid">
            {channels.map((channel) => (
              <div key={channel.name}>
                <MessageCircle size={19} aria-hidden="true" />
                <strong>{channel.name}</strong>
                <span
                  className={`superkuba-status ${
                    channel.status === "Planned"
                      ? "superkuba-status--planned"
                      : "superkuba-status--development"
                  }`}
                >
                  {channel.status}
                </span>
              </div>
            ))}
          </div>
          <p className="superkuba-disclaimer">
            Voice, WhatsApp, email and SMS are identified in the current Realtegic
            communications roadmap as in development. Social and additional chat
            channels are shown as planned.
          </p>
        </div>
      </section>

      <section className="superkuba-section superkuba-section--soft">
        <div className="new-wrap superkuba-control-grid">
          <article className="superkuba-control-card">
            <span className="superkuba-icon" aria-hidden="true">
              <Bot size={22} />
            </span>
            <SectionEyebrow>TEACH KUBA ABOUT YOUR BUSINESS</SectionEyebrow>
            <h2>Your business knowledge becomes useful context.</h2>
            <p>
              Approved information helps configured AI employees represent and
              assist the organization more effectively without implying autonomous
              decision-making.
            </p>
            <ul>
              {knowledgeSources.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="superkuba-control-card superkuba-control-card--dark">
            <span className="superkuba-icon superkuba-icon--dark" aria-hidden="true">
              <SlidersHorizontal size={22} />
            </span>
            <SectionEyebrow>YOUR AI EMPLOYEES. YOUR RULES.</SectionEyebrow>
            <h2>Configure how each employee should work.</h2>
            <p>
              Businesses remain in control of role definitions, access,
              approvals and boundaries.
            </p>
            <ul>
              {employeeControls.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="superkuba-section">
        <div className="new-wrap superkuba-action-grid">
          <div className="superkuba-action-copy">
            <SectionEyebrow>MORE THAN CONVERSATION</SectionEyebrow>
            <h2>
              Turn customer interactions into <span>supported actions.</span>
            </h2>
            <p>
              SuperKuba is intended to help configured AI employees carry work
              through supported business processes, not simply answer questions.
            </p>
          </div>
          <div className="superkuba-action-list">
            {supportedActions.map((action) => (
              <div key={action}>
                <Check size={16} />
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="superkuba-section superkuba-team">
        <div className="new-wrap">
          <div className="superkuba-team__intro">
            <SectionEyebrow>BUILT TO WORK WITH YOUR TEAM</SectionEyebrow>
            <h2>Start with what you need. Expand when you are ready.</h2>
            <p>
              SuperKuba is not simply about replacing an entire workforce. Human
              employees can supervise, approve, intervene and take over where
              appropriate.
            </p>
          </div>
          <div className="superkuba-team__options">
            <article>
              <small>START WITH ONE</small>
              <strong>AI Receptionist</strong>
            </article>
            <article>
              <small>BUILD A PAIR</small>
              <strong>Receptionist + Sales Assistant</strong>
            </article>
            <article>
              <small>GROW OVER TIME</small>
              <strong>A wider AI workforce</strong>
            </article>
          </div>
          <div className="superkuba-human-control">
            <Users size={22} />
            <span>Human oversight remains part of the operating model.</span>
            <ShieldCheck size={22} />
          </div>
        </div>
      </section>

      <section className="superkuba-section superkuba-section--soft">
        <div className="new-wrap">
          <div className="superkuba-section__intro">
            <div>
              <SectionEyebrow>BUSINESS USE CASES</SectionEyebrow>
              <h2>
                Designed around <span>practical work.</span>
              </h2>
            </div>
            <p>
              A flexible workforce architecture can support more industries as
              roles, integrations and workflows expand.
            </p>
          </div>
          <div className="superkuba-use-case-grid">
            {useCases.map(({ title, description, icon: Icon }) => (
              <article key={title}>
                <span className="superkuba-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="superkuba-section">
        <div className="new-wrap">
          <div className="superkuba-section__intro">
            <div>
              <SectionEyebrow>HOW IT WORKS</SectionEyebrow>
              <h2>
                From business context to <span>deployed workforce.</span>
              </h2>
            </div>
            <p>A clear journey keeps configuration understandable and controlled.</p>
          </div>
          <ol className="superkuba-steps">
            {setupSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="superkuba-final-cta">
        <div className="new-wrap">
          <ProductBrandLogo
            src={product.logo}
            alt=""
            width={product.logoWidth}
            height={product.logoHeight}
            sizes="(max-width: 650px) calc(100vw - 80px), 280px"
            className="superkuba-final-cta__logo"
          />
          <h2>Ready to build your AI workforce?</h2>
          <p>
            Discover how SuperKuba can help your business deploy intelligent
            digital employees across customer communication and everyday
            operations.
          </p>
          <div className="superkuba-actions superkuba-actions--center">
            <a
              href={product.signupUrl}
              className="superkuba-button superkuba-button--primary"
              {...externalLinkProps}
            >
              Get Started with SuperKuba
              <ArrowRight size={17} />
            </a>
            <a
              href={product.externalUrl}
              className="superkuba-button superkuba-button--secondary"
              {...externalLinkProps}
            >
              Visit SuperKuba.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
