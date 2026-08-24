import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Terms at Realtegic",
  description: "Terms of service details for Realtegic are coming soon.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ComingSoonPage
      eyebrow="TERMS"
      title="Terms of Service Coming Soon."
      description="We will publish our terms here before launch."
      primaryHref="/contact"
      primaryLabel="Contact us"
    />
  );
}
