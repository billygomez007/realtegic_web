import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy at Realtegic",
  description: "Privacy policy details for Realtegic are coming soon.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ComingSoonPage
      eyebrow="PRIVACY"
      title="Privacy Policy Coming Soon."
      description="We will publish our privacy policy here before launch."
      primaryHref="/contact"
      primaryLabel="Contact us"
    />
  );
}
