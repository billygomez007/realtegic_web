import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Globe2,
  Layers3,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

const products = [
  {
    name: "Kuba AI",
    category: "AI WORKFORCE",
    description:
      "AI agents that communicate, assist customers and automate business operations across channels.",
    icon: BrainCircuit,
  },
  {
    name: "Realtegic Property",
    category: "PROPERTY TECHNOLOGY",
    description:
      "An intelligent operating system for property owners, managers and developers.",
    icon: Building2,
  },
];

const capabilities = [
  ["AI & Intelligence", "Systems that understand, reason and act."],
  ["Automation", "Turn repetitive processes into intelligent workflows."],
  ["Digital Platforms", "Build connected experiences around your business."],
  ["Communication", "Bring customers, teams and channels together."],
  ["Data & Analytics", "Turn business information into useful decisions."],
  ["Integrations", "Connect the systems your organization already uses."],
];

const industries = [
  "Real Estate",
  "Travel & Tourism",
  "Commerce & Retail",
  "Logistics & Mobility",
  "Enterprise",
  "Government",
  "Education",
  "Health & Human Services",
];

export default function Home() {
  return (
    <main className="new-home">

      <section className="new-hero">
        <div className="new-wrap">
          <div className="hero-badge">
            <span />
            TECHNOLOGY • INNOVATION • IMPACT
          </div>

          <h1>
            Building the
            <br />
            <span>intelligence behind</span>
            <br />
            modern business.
          </h1>

          <p>
            Realtegic builds AI-powered products, intelligent platforms and
            digital infrastructure that help organizations work smarter,
            serve better and scale faster.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="primary-action">
              Explore our products
              <ArrowRight size={17} />
            </Link>

            <Link href="/contact" className="secondary-action">
              Talk to Realtegic
            </Link>
          </div>

          <div className="hero-system">
            <div className="system-center">
              <BrainCircuit size={42} />
              <strong>REALTEGIC</strong>
              <small>INTELLIGENCE LAYER</small>
            </div>

            <div className="system-node system-one">
              <Workflow size={17} />
              Automation
            </div>

            <div className="system-node system-two">
              <Network size={17} />
              Platforms
            </div>

            <div className="system-node system-three">
              <Globe2 size={17} />
              Channels
            </div>
          </div>
        </div>
      </section>

      <section className="suite-section">
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

      <section className="home-products">
        <div className="new-wrap">

          <div className="section-topline">
            <div>
              <small>OUR PRODUCTS</small>
              <h2>Technology that solves.</h2>
            </div>

            <Link href="/products">
              View all products
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-product-grid">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  href="/products"
                  className="home-product-card"
                  key={product.name}
                >
                  <div className="home-product-icon">
                    <Icon size={32} />
                  </div>

                  <small>{product.category}</small>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <span>
                    Explore product
                    <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}

            <div className="home-product-coming">
              <Sparkles size={28} />
              <small>INNOVATION PIPELINE</small>
              <h3>More products are coming.</h3>
              <p>
                New ideas are being researched and developed across industries.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="solutions-section">
        <div className="new-wrap">

          <div className="section-intro">
            <div>
              <small>WHAT WE HELP BUSINESSES DO</small>
              <h2>
                From complexity
                <span> to clarity.</span>
              </h2>
            </div>

            <p>
              Realtegic technology can sit at the center of your operation,
              connecting the people, processes and systems that keep your
              business moving.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map(([title, text], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <CheckCircle2 size={17} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="industry-section">
        <div className="new-wrap">

          <div className="industry-heading">
            <div>
              <small>INDUSTRIES WE SERVE</small>
              <h2>
                Technology that
                <span> adapts to you.</span>
              </h2>
            </div>

            <p>
              Different industries have different problems. Our technology
              foundations are designed to adapt to the environment in which
              they operate.
            </p>
          </div>

          <div className="industry-pills">
            {industries.map((industry) => (
              <Link href="/industries" key={industry}>
                {industry}
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>

          <Link href="/industries" className="industry-button">
            Explore industries
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

      <section className="technology-section">
        <div className="new-wrap technology-grid">

          <div>
            <small>THE TECHNOLOGY FOUNDATION</small>

            <h2>
              Powerful alone.
              <br />
              <span>Better together.</span>
            </h2>

            <p>
              Our products are designed to work independently while sharing a
              common technology philosophy. As the ecosystem grows, the
              products become more powerful together.
            </p>
          </div>

          <div className="technology-stack">
            <div>
              <BrainCircuit />
              <strong>Artificial Intelligence</strong>
              <span>Intelligence across the ecosystem</span>
            </div>

            <div>
              <Workflow />
              <strong>Automation Engine</strong>
              <span>Processes that run intelligently</span>
            </div>

            <div>
              <Network />
              <strong>Connected Systems</strong>
              <span>Data, people and platforms connected</span>
            </div>
          </div>

        </div>
      </section>

      <section className="innovation-section">
        <div className="new-wrap innovation-grid">

          <div className="innovation-visual">
            <Sparkles size={42} />
            <span>REALTEGIC</span>
            <strong>INNOVATION LAB</strong>
          </div>

          <div>
            <small>RESEARCH & INNOVATION</small>

            <h2>
              We are not only
              <span> building today.</span>
            </h2>

            <p>
              The Realtegic Innovation Lab explores emerging technologies,
              business models and opportunities that could become tomorrow's
              products.
            </p>

            <Link href="/innovation">
              Explore the Innovation Lab
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      <section className="final-home-cta">
        <div className="new-wrap">

          <small>LET&apos;S BUILD WHAT&apos;S NEXT</small>

          <h2>
            Have a problem worth
            <br />
            <span>solving with technology?</span>
          </h2>

          <p>
            Tell us what you are trying to build, improve or automate.
          </p>

          <Link href="/contact">
            Start a conversation
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
