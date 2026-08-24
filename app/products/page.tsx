import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const products = [
  {
    number: "01",
    status: "AVAILABLE",
    category: "AI WORKFORCE PLATFORM",
    title: "Kuba AI",
    description:
      "An intelligent AI workforce that helps businesses automate customer communication, engagement and everyday operations.",
    icon: BrainCircuit,
    features: [
      "AI customer engagement",
      "Multi-channel communication",
      "Business automation",
      "AI agents and workflows",
    ],
  },
  {
    number: "02",
    status: "IN DEVELOPMENT",
    category: "PROPERTY TECHNOLOGY",
    title: "Realtegic Property",
    description:
      "An intelligent property management platform for property owners, managers and developers to manage their entire portfolio from one place.",
    icon: Building2,
    features: [
      "Property management",
      "Tenant management",
      "Maintenance automation",
      "AI-powered operations",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="products-page">

      <section className="products-hero">
        <div className="products-wrap">
          <div className="products-label">OUR PRODUCTS</div>

          <h1>
            Technology built
            <br />
            <span>to solve real problems.</span>
          </h1>

          <p className="products-hero-text">
            Realtegic develops intelligent digital products that simplify
            complex work, connect people and help organizations operate better.
          </p>
        </div>
      </section>

      <section className="products-overview">
        <div className="products-wrap">

          <div className="products-heading">
            <div>
              <div className="products-label">THE REALTEGIC ECOSYSTEM</div>
              <h2>Products with a purpose.</h2>
            </div>

            <p>
              Every Realtegic product is designed around a clear business
              problem and built to create measurable value.
            </p>
          </div>

          <div className="products-cards">

            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article className="product-card" key={product.title}>

                  <div className="product-card-header">
                    <span>{product.number}</span>
                    <span className="product-status">{product.status}</span>
                  </div>

                  <div className="product-card-body">

                    <div className="product-card-info">

                      <div className="product-icon">
                        <Icon size={34} strokeWidth={1.5} />
                      </div>

                      <div className="product-category">
                        {product.category}
                      </div>

                      <h3>{product.title}</h3>

                      <p>{product.description}</p>

                      <div className="product-features">
                        {product.features.map((feature) => (
                          <div key={feature}>
                            <CheckCircle2 size={16} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact" className="product-link">
                        Learn more
                        <ArrowRight size={17} />
                      </Link>

                    </div>

                    <div className="product-card-visual">
                      <div className="visual-ring ring-one" />
                      <div className="visual-ring ring-two" />
                      <div className="visual-ring ring-three" />

                      <div className="visual-center">
                        <Icon size={42} strokeWidth={1.2} />
                      </div>

                      <div className="visual-dot dot-one" />
                      <div className="visual-dot dot-two" />
                      <div className="visual-dot dot-three" />
                    </div>

                  </div>
                </article>
              );
            })}

            <article className="product-coming">
              <div className="product-coming-icon">
                <Sparkles size={28} />
              </div>

              <div>
                <div className="products-label">INNOVATION PIPELINE</div>
                <h3>More products are coming.</h3>
                <p>
                  Our innovation team is continuously researching new
                  opportunities across industries.
                </p>
              </div>

              <Link href="/innovation" className="product-link">
                Explore innovation
                <ArrowRight size={17} />
              </Link>
            </article>

          </div>
        </div>
      </section>

      <section className="products-principles">
        <div className="products-wrap">

          <div className="products-label">HOW WE BUILD</div>

          <h2>
            Intelligent by design.
            <br />
            <span>Useful by nature.</span>
          </h2>

          <div className="principles">

            <div>
              <strong>01</strong>
              <h3>Intelligent</h3>
              <p>
                AI is built into the experience where it creates genuine
                value.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Scalable</h3>
              <p>
                Our products are engineered to grow alongside the businesses
                that use them.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Simple</h3>
              <p>
                Powerful technology should still feel clear and easy to use.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Connected</h3>
              <p>
                Our systems are designed to connect people, data, channels and
                workflows.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="products-bottom">
        <div className="products-wrap">

          <div>
            <div className="products-label">BUILD WITH REALTEGIC</div>

            <h2>
              Have a problem worth
              <br />
              <span>solving with technology?</span>
            </h2>

            <p>
              Let&apos;s explore what we can build together.
            </p>
          </div>

          <Link href="/contact" className="products-bottom-button">
            Start a conversation
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
}
