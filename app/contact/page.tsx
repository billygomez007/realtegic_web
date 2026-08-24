import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Globe2,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-wrap">

          <div className="contact-label">LET&apos;S BUILD TOGETHER</div>

          <div className="contact-hero-grid">

            <div>
              <h1>
                Have an idea,
                <br />
                problem or
                <span> opportunity?</span>
              </h1>

              <p>
                Tell us what you are trying to build, improve or automate.
                Our team can help turn the idea into a technology solution.
              </p>
            </div>

            <div className="contact-visual">
              <div className="contact-orbit orbit-a" />
              <div className="contact-orbit orbit-b" />

              <div className="contact-core">
                <Sparkles size={38} />
                <strong>REALTEGIC</strong>
                <small>LET&apos;S BUILD</small>
              </div>

              <div className="contact-node contact-node-a">
                <BrainCircuit size={16} />
                AI
              </div>

              <div className="contact-node contact-node-b">
                <Building2 size={16} />
                Platforms
              </div>

              <div className="contact-node contact-node-c">
                <Globe2 size={16} />
                Digital
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="contact-main">
        <div className="contact-wrap">

          <div className="contact-main-grid">

            <div className="contact-options">

              <div className="contact-label">
                HOW CAN WE HELP?
              </div>

              <h2>
                Start with a
                <span> conversation.</span>
              </h2>

              <p>
                Whether you want to use one of our products, explore a
                partnership or build something new, we would like to hear from
                you.
              </p>

              <div className="contact-option-list">

                <div>
                  <div className="contact-option-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <strong>Product & Solutions</strong>
                    <span>Ask us about Realtegic products and solutions.</span>
                  </div>
                </div>

                <div>
                  <div className="contact-option-icon">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <strong>Technology & Partnerships</strong>
                    <span>
                      Explore technology, strategic and business partnerships.
                    </span>
                  </div>
                </div>

                <div>
                  <div className="contact-option-icon">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <strong>Build Something New</strong>
                    <span>
                      Have a business problem that needs technology?
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <form className="contact-form-new">

              <div className="contact-form-title">
                <span>01</span>
                <strong>Tell us about your project</strong>
              </div>

              <div className="contact-form-row">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </label>

                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label>
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                />
              </label>

              <label>
                <span>What can we help you with?</span>
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="products">Realtegic Products</option>
                  <option value="ai">AI & Automation</option>
                  <option value="platform">Digital Platform</option>
                  <option value="partnership">Partnership</option>
                  <option value="custom">Custom Technology</option>
                </select>
              </label>

              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what you are building..."
                />
              </label>

              <button type="submit">
                Send message
                <ArrowRight size={17} />
              </button>

            </form>

          </div>

        </div>
      </section>

      <section className="contact-direct">
        <div className="contact-wrap">

          <div className="contact-direct-grid">

            <div>
              <div className="contact-label">DIRECT CONTACT</div>
              <h2>
                Prefer to reach us
                <span> directly?</span>
              </h2>
            </div>

            <div className="contact-direct-card">
              <Mail size={22} />
              <small>EMAIL</small>
              <strong>hello@realtegic.com</strong>
              <span>We&apos;ll get back to you as soon as possible.</span>
            </div>

          </div>

        </div>
      </section>

      <section className="contact-final">
        <div className="contact-wrap">

          <h2>
            Good technology
            <br />
            starts with a
            <span> good conversation.</span>
          </h2>

          <Link href="/products">
            Explore our products
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}
