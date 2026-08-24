import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Developers | Realtegic",
  description: "Developer-facing tools and documentation are coming soon.",
};

export default function DevelopersPage() {
  return (
    <ComingSoonPage
      eyebrow="DEVELOPERS"
      title="Developer Platform Coming Soon."
      description="We are preparing APIs, SDKs and documentation for future release."
      primaryHref="/contact"
      primaryLabel="Talk to us"
    />
  );
}
