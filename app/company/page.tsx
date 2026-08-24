import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Company at Realtegic",
  description: "Company information, milestones and updates are coming soon.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <ComingSoonPage
      eyebrow="COMPANY"
      title="Company Details Coming Soon."
      description="We are preparing a fuller company page with team, milestones and updates."
      primaryHref="/about"
      primaryLabel="Learn about Realtegic"
    />
  );
}
