import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BadgeCheck,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  ChartColumn,
  Check,
  ChevronRight,
  CircleUserRound,
  FileText,
  HeartPulse,
  Headphones,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageCircle,
  MessageSquareText,
  MessagesSquare,
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  Plane,
  Plug,
  Plus,
  Rocket,
  Scale,
  Send,
  Settings,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ProductData } from "@/lib/products";
import styles from "@/components/superkuba/superkuba.module.css";

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

type Channel = {
  name: string;
  status: "In development" | "Planned";
  icon: LucideIcon;
};

const channels: Channel[] = [
  { name: "Voice", status: "In development", icon: Phone },
  { name: "WhatsApp", status: "In development", icon: MessageCircle },
  { name: "Email", status: "In development", icon: Mail },
  { name: "SMS", status: "In development", icon: Smartphone },
  { name: "Web Chat", status: "Planned", icon: MessageSquareText },
  { name: "Instagram", status: "Planned", icon: AtSign },
  { name: "Facebook", status: "Planned", icon: Users },
  { name: "Telegram", status: "Planned", icon: Send },
];

const knowledgeSources = [
  "Company information",
  "Products and services",
  "FAQs and policies",
  "Documents",
  "Operating procedures",
  "Approved customer context",
];

const employeeControls = [
  "Name and role",
  "Communication tone",
  "Languages",
  "Autonomy boundaries",
];

const controlToggles: { label: string; icon: LucideIcon }[] = [
  { label: "Business knowledge", icon: BookOpen },
  { label: "Connected tools", icon: Plug },
  { label: "Permissions", icon: ShieldCheck },
  { label: "Approval requirements", icon: BadgeCheck },
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

const workforceTiers: { label: string; title: string; icon: LucideIcon }[] = [
  { label: "Start with one", title: "AI Receptionist", icon: UserRound },
  { label: "Build a pair", title: "Receptionist + Sales Assistant", icon: Users },
  { label: "Grow over time", title: "A wider AI workforce", icon: Rocket },
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
  "Create your account and teach Kuba about your business",
  "Choose and configure your AI employees",
  "Connect supported channels and tools",
  "Deploy, monitor and improve",
];

const heroTraits: { label: string; icon: LucideIcon }[] = [
  { label: "Role-based AI employees", icon: Bot },
  { label: "Configurable permissions", icon: SlidersHorizontal },
  { label: "Human oversight built in", icon: ShieldCheck },
];

const dashboardNav: { label: string; icon: LucideIcon }[] = [
  { label: "Workforce", icon: Users },
  { label: "Knowledge", icon: BookOpen },
  { label: "Integrations", icon: Plug },
  { label: "Analytics", icon: ChartColumn },
  { label: "Settings", icon: Settings },
];

const dashboardEmployees: { name: string; icon: LucideIcon; tone: string; line: string }[] = [
  { name: "Customer Support Agent", icon: Headphones, tone: "violet", line: "0,14 8,10 16,12 24,6 32,9 40,3" },
  { name: "Sales Assistant", icon: BriefcaseBusiness, tone: "blue", line: "0,12 8,13 16,7 24,9 32,4 40,6" },
  { name: "Operations Agent", icon: Settings2, tone: "green", line: "0,10 8,6 16,11 24,8 32,10 40,4" },
  { name: "Knowledge Agent", icon: BookOpen, tone: "blue", line: "0,13 8,9 16,10 24,5 32,7 40,2" },
];

function WorkforceDashboard() {
  return (
    <div className={styles.dashboard} aria-hidden="true">
      <div className={styles.dashFloat}>
        <span className={styles.dashFloatIcon}>
          <Sparkles size={15} />
        </span>
        <span>
          <strong>AI Employees</strong>
          <small>Working for your business</small>
        </span>
      </div>
      <div className={styles.dashWindow}>
        <aside className={styles.dashSide}>
          <div className={styles.dashBrand}>
            <LayoutDashboard size={13} />
            SuperKuba
          </div>
          <ul>
            {dashboardNav.map(({ label, icon: Icon }, index) => (
              <li key={label} className={index === 0 ? styles.dashNavActive : undefined}>
                <Icon size={12} />
                {label}
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles.dashMain}>
          <div className={styles.dashHead}>
            <strong>AI Employees</strong>
            <span className={styles.dashCreate}>
              <Plus size={11} />
              Create
            </span>
          </div>
          <ul className={styles.dashList}>
            {dashboardEmployees.map(({ name, icon: Icon, tone, line }) => (
              <li key={name}>
                <span className={`${styles.dashAvatar} ${styles[`tone_${tone}`]}`}>
                  <Icon size={15} />
                </span>
                <span className={styles.dashName}>
                  <strong>{name}</strong>
                  <small>Active</small>
                </span>
                <svg viewBox="0 0 40 16" className={styles.dashSpark}>
                  <polyline points={line} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={styles.dashDots}>
                  <i />
                  <i />
                  <i />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function KnowledgeVisual() {
  return (
    <div className={styles.knowledgeVisual} aria-hidden="true">
      <div className={styles.docStack}>
        <span />
        <span />
        <span className={styles.docTop}>
          <FileText size={30} />
        </span>
      </div>
      <div className={styles.docCard}>
        <span className={styles.iconTileSm}>
          <BookOpen size={14} />
        </span>
        <span>
          Docs, FAQs,
          <br />
          policies &amp; procedures
        </span>
      </div>
    </div>
  );
}

function ScaleVisual() {
  return (
    <div className={styles.scaleVisual} aria-hidden="true">
      <div className={styles.scaleGlow} />
      <div className={styles.scaleCube}>
        <UserRound size={44} />
      </div>
      <div className={styles.scaleCard}>
        <span className={styles.scaleCardIcon}>
          <ArrowUpRight size={15} />
        </span>
        <span>
          <strong>Scale</strong>
          <small>your AI workforce</small>
        </span>
      </div>
    </div>
  );
}

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" fill="currentColor" />
    </svg>
  );
}

export default function SuperKubaShowcase({ product }: { product: ProductData }) {
  if (!product.externalUrl || !product.signupUrl) {
    throw new Error("SuperKuba showcase requires complete destination configuration.");
  }

  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  } as const;

  const exploreLink = (className: string) => (
    <a href={product.externalUrl} className={className} {...externalLinkProps}>
      Explore SuperKuba
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Sparkle className={styles.sparkleA} />
        <Sparkle className={styles.sparkleB} />
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrowDark}>SuperKuba · A Realtegic product</p>
            <h1 className={styles.heroTitle}>
              Build Your <span>AI Workforce.</span>
            </h1>
            <p className={styles.heroLead}>
              SuperKuba enables businesses to create, deploy and manage intelligent
              digital employees that work alongside human teams across customer
              service, sales, appointments, operations and everyday business
              processes.
            </p>
            <div className={styles.actions}>
              {exploreLink(styles.btnWhite)}
              <a href={product.signupUrl} className={styles.btnGhost} {...externalLinkProps}>
                Get started
              </a>
            </div>
            <ul className={styles.traits}>
              {heroTraits.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <span className={styles.traitIcon} aria-hidden="true">
                    <Icon size={15} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <WorkforceDashboard />
        </div>
      </section>

      {/* AI employees */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>AI employees for every team</p>
              <h2 className={styles.heading}>
                Specialized AI employees, <span>working as one team.</span>
              </h2>
            </div>
            <p className={styles.introText}>
              Instead of using AI only as a chatbot or occasional assistant,
              SuperKuba lets a business build a team of specialized AI employees
              with defined roles, knowledge, tools and permissions.
            </p>
          </div>
          <div className={styles.roleGrid}>
            {aiEmployees.map(({ title, description, icon: Icon }) => (
              <article key={title} className={styles.roleCard}>
                <div className={styles.roleTop}>
                  <span className={styles.iconTile} aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <ArrowRight size={15} className={styles.roleArrow} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.note}>
            Role availability and actions depend on account configuration,
            connected tools, permissions and rollout status.
          </p>
        </div>
      </section>

      {/* Voice */}
      <section className={styles.dark}>
        <div className={`${styles.wrap} ${styles.voiceGrid}`}>
          <div>
            <p className={styles.eyebrowDark}>
              Voice capabilities
              <span className={styles.statusPill}>In development</span>
            </p>
            <h2 className={styles.headingDark}>
              AI that can <span>talk to your customers.</span>
            </h2>
            <p className={styles.bodyDark}>
              SuperKuba&apos;s communications architecture is being developed to
              support voice interactions. Voice capabilities are not presented as
              generally available until enabled for a customer&apos;s account.
            </p>
            {exploreLink(styles.btnPrimary)}
          </div>
          <div className={styles.voiceTiles}>
            {voiceCapabilities.map(({ title, description, icon: Icon }) => (
              <article key={title} className={styles.darkTile}>
                <span className={styles.iconTileDark} aria-hidden="true">
                  <Icon size={19} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>Meet customers where they are</p>
              <h2 className={styles.heading}>
                One workforce. <span>Multiple channels.</span>
              </h2>
            </div>
            <p className={styles.introText}>
              SuperKuba is designed around connected customer communication.
              Channel availability remains tied to rollout and account
              configuration.
            </p>
          </div>
          <ul className={styles.channelGrid}>
            {channels.map(({ name, status, icon: Icon }) => (
              <li key={name} className={styles.channelTile}>
                <span className={styles.iconTile} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span>
                  <strong>{name}</strong>
                  <small className={status === "Planned" ? styles.planned : styles.inDev}>
                    {status}
                  </small>
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.note}>
            Voice, WhatsApp, email and SMS are identified in the current Realtegic
            communications roadmap as in development. Social and additional chat
            channels are shown as planned.
          </p>
        </div>
      </section>

      {/* Knowledge + controls */}
      <section className={styles.section}>
        <div className={`${styles.wrap} ${styles.panelRow}`}>
          <article className={styles.panelLight}>
            <div className={styles.panelCopy}>
              <p className={styles.eyebrowBlue}>Your business, your context</p>
              <h2 className={styles.panelHeading}>
                Your business knowledge becomes <span>useful context.</span>
              </h2>
              <p className={styles.panelText}>
                Approved information helps configured AI employees represent and
                assist the organization more effectively.
              </p>
              <ul className={styles.checkList}>
                {knowledgeSources.map((item) => (
                  <li key={item}>
                    <span className={styles.checkDot} aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <KnowledgeVisual />
          </article>

          <article className={styles.panelDark}>
            <p className={styles.eyebrowDark}>Configure and control</p>
            <h2 className={styles.panelHeadingDark}>
              Configure how each employee should work.
            </h2>
            <p className={styles.panelTextDark}>
              Businesses remain in control of role definitions, access, approvals
              and boundaries.
            </p>
            <div className={styles.controlBody}>
              <ul className={styles.checkListDark}>
                {employeeControls.map((item) => (
                  <li key={item}>
                    <span className={styles.checkDotSolid} aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className={styles.toggleList} aria-label="Configurable settings">
                {controlToggles.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <span className={styles.toggleIcon} aria-hidden="true">
                      <Icon size={12} />
                    </span>
                    <span className={styles.toggleLabel}>{label}</span>
                    <span className={styles.toggle} aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Actions */}
      <section className={styles.section}>
        <div className={`${styles.wrap} ${styles.actionsGrid}`}>
          <div>
            <p className={styles.eyebrow}>From conversations to actions</p>
            <h2 className={styles.heading}>
              Turn customer interactions into <span>supported actions.</span>
            </h2>
          </div>
          <div>
            <p className={styles.introText}>
              SuperKuba is intended to help configured AI employees carry work
              through supported business processes, not simply answer questions.
            </p>
            <ul className={styles.actionList}>
              {supportedActions.map((action) => (
                <li key={action}>
                  <span className={styles.iconTileSm} aria-hidden="true">
                    <Check size={13} strokeWidth={2.6} />
                  </span>
                  <span className={styles.actionLabel}>{action}</span>
                  <ChevronRight size={15} className={styles.actionChevron} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className={`${styles.dark} ${styles.tierSection}`}>
        <div className={`${styles.wrap} ${styles.tierGrid}`}>
          <div className={styles.tierCopy}>
            <p className={styles.eyebrowDark}>Built to work with your team</p>
            <h2 className={styles.headingDark}>
              Start with what you need. Expand when you are ready.
            </h2>
            <p className={styles.bodyDark}>
              SuperKuba is not simply about replacing an entire workforce. Human
              employees can supervise, approve, intervene and take over where
              appropriate.
            </p>
            <div className={styles.tierCards}>
              {workforceTiers.map(({ label, title, icon: Icon }) => (
                <article key={title} className={styles.tierCard}>
                  <span className={styles.iconTileDark} aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <span>
                    <small>{label}</small>
                    <h3>{title}</h3>
                  </span>
                </article>
              ))}
            </div>
            <div className={styles.actions}>
              {exploreLink(styles.btnPrimary)}
              <Link href="/contact" className={styles.btnGhost}>
                Talk to Our Team
              </Link>
            </div>
          </div>
          <ScaleVisual />
        </div>
      </section>

      {/* Use cases */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>Business use cases</p>
              <h2 className={styles.heading}>
                Designed around <span>practical work.</span>
              </h2>
            </div>
            <p className={styles.introText}>
              A flexible workforce architecture can support more industries as
              roles, integrations and workflows expand.
            </p>
          </div>
          <div className={styles.useGrid}>
            {useCases.map(({ title, description, icon: Icon }) => (
              <article key={title} className={styles.useTile}>
                <span className={styles.iconTile} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={`${styles.section} ${styles.lastSection}`}>
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>A simple path</p>
              <h2 className={styles.heading}>
                From business context to <span>deployed workforce.</span>
              </h2>
            </div>
            <p className={styles.introText}>
              A clear journey keeps configuration understandable and controlled.
            </p>
          </div>
          <ol className={styles.steps}>
            {setupSteps.map((step, index) => (
              <li key={step}>
                <span className={styles.stepNum} aria-hidden="true">
                  {index + 1}
                </span>
                <span className={styles.stepLabel}>{step}</span>
                {index < setupSteps.length - 1 && (
                  <ChevronRight size={16} className={styles.stepArrow} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`${styles.wrap} ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Ready to build your AI workforce?</h2>
          <p className={styles.ctaText}>
            Discover how SuperKuba can help your business deploy intelligent
            digital employees across customer communication and everyday
            operations.
          </p>
          <div className={`${styles.actions} ${styles.actionsCenter}`}>
            {exploreLink(styles.btnPrimary)}
            <Link href="/contact" className={styles.btnGhost}>
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
