import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Careers at Realtegic",
  description: "Open roles and hiring information for Realtegic are coming soon.",
  path: "/careers",
});

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
