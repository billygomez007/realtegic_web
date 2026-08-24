import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Careers | Realtegic",
  description: "Careers information and open roles are coming soon.",
};

export default function CareersPage() {
  return (
    <ComingSoonPage
      eyebrow="CAREERS"
      title="Careers Page Coming Soon."
      description="Open roles and hiring details will be shared here when available."
      primaryHref="/contact"
      primaryLabel="Get in touch"
    />
  );
}
