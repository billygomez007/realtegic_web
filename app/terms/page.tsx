import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Terms | Realtegic",
  description: "Terms of service details are coming soon.",
};

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
