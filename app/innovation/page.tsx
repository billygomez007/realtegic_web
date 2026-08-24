import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BrainCircuit,
  Lightbulb,
  Network,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Innovation at Realtegic",
  description:
    "Explore Realtegic Labs and the ideas, research and emerging technologies shaping future products.",
  path: "/innovation",
});

const focusAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Exploring intelligent systems, AI agents and new ways for software to understand, reason and act.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Automation",
    text: "Turning repetitive business processes into intelligent workflows that operate faster and more efficiently.",
  },
  {
    number: "03",
    icon: Network,
    title: "Connected Platforms",
    text: "Building technology ecosystems where people, data, products and services work together.",
  },
  {
    number: "04",
    icon: Atom,
    title: "Emerging Technology",
    text: "Researching new technologies and business models that could shape the next generation of digital products.",
  },
];

export default function InnovationPage() {
  return (
    <main className="innovation-page">

      <section className="innovation-hero-new">
        <div className="innovation-wrap">

          <div className="innovation-label">
            REALTEGIC INNOVATION LAB
          </div>

          <div className="innovation-hero-grid">

            <div>
              <h1>
                We build
                <br />
                what the
                <span> future needs.</span>
              </h1>

              <p>
                The Realtegic Innovation Lab explores emerging technologies,
                business opportunities and ideas that can become the products
                of tomorrow.
              </p>

              <div className="innovation-actions">
                <Link href="/products" className="innovation-primary">
                  Explore our products
                  <ArrowRight size={17} />
                </Link>

                <Link href="/contact" className="innovation-secondary">
                  Build with us
                </Link>
              </div>
            </div>

            <div className="innovation-orbit">
              <div className="innovation-orbit-ring ring-one" />
              <div className="innovation-orbit-ring ring-two" />
              <div className="innovation-orbit-ring ring-three" />

              <div className="innovation-core">
                <Sparkles size={40} />
                <strong>INNOVATION</strong>
                <small>LAB</small>
              </div>

              <div className="innovation-orbit-node node-one">
                <BrainCircuit size={16} />
                AI
              </div>

              <div className="innovation-orbit-node node-two">
                <Rocket size={16} />
                Products
              </div>

              <div className="innovation-orbit-node node-three">
                <Lightbulb size={16} />
                Ideas
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="innovation-mission">
        <div className="innovation-wrap">

          <div className="innovation-mission-grid">

            <div>
              <div className="innovation-label">
                OUR APPROACH
              </div>

              <h2>
                Innovation is not
                <span> a department.</span>
              </h2>
            </div>

            <p>
              At Realtegic, innovation is part of how we think. We look for
              problems worth solving, technologies that can create leverage and
              opportunities to build products that have a real-world impact.
            </p>

          </div>

        </div>
      </section>

      <section className="innovation-focus">
        <div className="innovation-wrap">

          <div className="innovation-section-heading">
            <div>
              <div className="innovation-label">
                WHAT WE EXPLORE
              </div>

              <h2>
                From emerging ideas
                <span> to useful technology.</span>
              </h2>
            </div>

            <p>
              Our research focuses on technologies that can improve how people
              and organizations work, communicate and create value.
            </p>
          </div>

          <div className="innovation-focus-grid">

            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article className="innovation-focus-card" key={area.number}>

                  <div className="innovation-focus-top">
                    <span>{area.number}</span>
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </div>

                  <div className="innovation-card-line" />

                </article>
              );
            })}

          </div>

        </div>
      </section>

      <section className="innovation-pipeline">
        <div className="innovation-wrap">

          <div className="innovation-pipeline-grid">

            <div className="innovation-pipeline-visual">
              <div className="pipeline-line line-1" />
              <div className="pipeline-line line-2" />
              <div className="pipeline-line line-3" />

              <div className="pipeline-point point-1">
                <span>01</span>
                Problem
              </div>

              <div className="pipeline-point point-2">
                <span>02</span>
                Research
              </div>

              <div className="pipeline-point point-3">
                <span>03</span>
                Prototype
              </div>

              <div className="pipeline-point point-4">
                <span>04</span>
                Product
              </div>
            </div>

            <div>
              <div className="innovation-label">
                FROM IDEA TO PRODUCT
              </div>

              <h2>
                Ideas become
                <span> technology.</span>
              </h2>

              <p>
                We move promising ideas through research, experimentation,
                prototyping and product development. The goal is simple:
                create technology people can actually use.
              </p>

              <div className="innovation-process-list">
                <div>
                  <strong>Research</strong>
                  <span>Understand the opportunity.</span>
                </div>

                <div>
                  <strong>Experiment</strong>
                  <span>Test what is possible.</span>
                </div>

                <div>
                  <strong>Build</strong>
                  <span>Turn the strongest ideas into products.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="innovation-future">
        <div className="innovation-wrap">

          <div className="innovation-future-inner">

            <div className="innovation-label">
              THE FUTURE IS BEING BUILT
            </div>

            <h2>
              Today&apos;s experiment
              <br />
              could become
              <span> tomorrow&apos;s platform.</span>
            </h2>

            <p>
              Realtegic is building beyond the products you see today. Our
              Innovation Lab is where new ideas begin.
            </p>

            <Link href="/contact">
              Partner with us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
