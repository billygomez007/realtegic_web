import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";
import StatusBadge from "@/components/StatusBadge";

export interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function ComingSoonPage({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref = "/",
  secondaryLabel = "Back to home",
}: ComingSoonPageProps) {
  return (
    <main className="new-home">
      <section className="new-hero new-hero--compact">
        <div className="new-wrap new-hero-grid">
          <div className="hero-copy">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="hero-actions">
              <Button asLink href={primaryHref} variant="primary" size="lg">
                {primaryLabel}
              </Button>
              <Button asLink href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>

            <div className="hero-copy__footer">
              <StatusBadge status="coming-soon">Coming Soon</StatusBadge>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
