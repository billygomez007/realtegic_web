import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Infrastructure at Realtegic",
  description:
    "Explore the Realtegic infrastructure platform overview, coming soon.",
  path: "/infrastructure",
});

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
