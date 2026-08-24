import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Landmark,
  Plane,
  ShoppingBag,
  Truck,
  Factory,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Real Estate & Property",
    description:
      "Intelligent platforms for property owners, managers, developers and real estate businesses.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Travel & Tourism",
    description:
      "Digital systems that simplify travel operations, customer engagement, bookings and service delivery.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Commerce & Retail",
    description:
      "Connected technology for modern commerce, customer experiences, marketplaces and retail operations.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Logistics & Mobility",
    description:
      "Technology that connects customers, operators, vehicles, deliveries and operational workflows.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Government & Public Services",
    description:
      "Digital infrastructure that helps institutions improve service delivery, communication and citizen engagement.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Education",
    description:
      "Technology that helps educational organizations connect people, information and learning experiences.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "07",
    title: "Enterprise & Business",
    description:
      "AI-powered systems and automation designed to improve productivity, customer service and operations.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "08",
    title: "Health & Human Services",
    description:
      "Digital experiences and intelligent workflows designed around better access, communication and service.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page">

      <section className="industries-hero">
        <div className="industries-wrap">

          <div className="industries-label">
            INDUSTRIES WE SERVE
          </div>

          <h1>
            Technology that
            <br />
            <span>understands the industry.</span>
          </h1>

          <p>
            Realtegic builds adaptable technology for organizations operating
            in different markets, environments and industries. We combine
            intelligent software, automation and industry understanding to
            solve problems that matter.
          </p>

        </div>
      </section>

      <section className="industries-intro">
        <div className="industries-wrap">

          <div className="industries-intro-grid">

            <div>
              <div className="industries-label">
                ONE TECHNOLOGY COMPANY
              </div>

              <h2>
                Different industries.
                <span> One technology philosophy.</span>
              </h2>
            </div>

            <p>
              Every industry has its own language, processes and challenges.
              Our approach is to build flexible technology foundations that can
              adapt to the way each industry actually works.
            </p>

          </div>

        </div>
      </section>

      <section className="industries-list">
        <div className="industries-wrap">

          <div className="industries-grid">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="industry-card"
                  key={industry.number}
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="industry-card-overlay" />

                  <div className="industry-card-top">
                    <span>{industry.number}</span>
                    <div className="industry-card-icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="industry-card-content">
                    <div className="industry-card-kicker">
                      REALTEGIC INDUSTRY
                    </div>

                    <h3>{industry.title}</h3>

                    <p>{industry.description}</p>

                    <Link href="/contact">
                      Explore solutions
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      <section className="industries-capabilities">
        <div className="industries-wrap">

          <div className="industries-capabilities-grid">

            <div>
              <div className="industries-label">
                OUR TECHNOLOGY FOUNDATION
              </div>

              <h2>
                Built across industries.
                <span> Powered by intelligence.</span>
              </h2>
            </div>

            <div className="capability-list">

              <div>
                <strong>AI & Intelligence</strong>
                <span>Systems that understand, assist and act.</span>
              </div>

              <div>
                <strong>Automation</strong>
                <span>Less repetitive work. More productive teams.</span>
              </div>

              <div>
                <strong>Digital Platforms</strong>
                <span>Scalable systems designed around real workflows.</span>
              </div>

              <div>
                <strong>Connected Experiences</strong>
                <span>People, businesses, data and channels working together.</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="industries-cta">
        <div className="industries-wrap">

          <Sparkles size={32} />

          <div className="industries-cta-content">
            <div className="industries-label">
              HAVE A BUSINESS CHALLENGE?
            </div>

            <h2>
              Let&apos;s build technology
              <span> around your industry.</span>
            </h2>

            <p>
              Tell us what you are trying to solve and let&apos;s explore what
              intelligent technology can do.
            </p>

            <Link href="/contact" className="industries-cta-button">
              Talk to Realtegic
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
