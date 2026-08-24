import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Company | Realtegic",
  description: "Company information and expansion details are coming soon.",
};

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
