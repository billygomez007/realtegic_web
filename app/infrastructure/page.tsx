import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Infrastructure | Realtegic",
  description: "Infrastructure platform details are coming soon.",
};

export default function InfrastructurePage() {
  return (
    <ComingSoonPage
      eyebrow="INFRASTRUCTURE"
      title="Infrastructure Overview Coming Soon."
      description="The platform foundation is being prepared for a future release."
      primaryHref="/#platforms"
      primaryLabel="View platforms"
    />
  );
}
