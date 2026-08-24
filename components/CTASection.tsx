import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="new-wrap cta-section__inner">
        <SectionEyebrow>LET&apos;S BUILD WHAT&apos;S NEXT</SectionEyebrow>

        <h2>Let&apos;s Build What&apos;s Next.</h2>

        <p>
          Whether you&apos;re building a business, an application or the next
          big idea, Realtegic is building the technology underneath it.
        </p>

        <div className="cta-section__actions">
          <Button asLink href="#platforms" variant="primary" size="lg">
            Explore Our Technology
          </Button>

          <Button asLink href="/contact" variant="secondary" size="lg">
            Talk to Realtegic
          </Button>
        </div>
      </div>
    </section>
  );
}
