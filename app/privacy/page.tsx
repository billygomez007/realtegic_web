import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Privacy | Realtegic",
  description: "Privacy policy details are coming soon.",
};

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
