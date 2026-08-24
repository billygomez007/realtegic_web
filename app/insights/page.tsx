import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Insights at Realtegic",
  description:
    "Product updates, research notes and long-form writing from Realtegic are coming soon.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <ComingSoonPage
      eyebrow="INSIGHTS"
      title="Insights Coming Soon."
      description="We are preparing a place for product updates, research notes and announcements."
      primaryHref="/innovation"
      primaryLabel="Explore innovation"
    />
  );
}
