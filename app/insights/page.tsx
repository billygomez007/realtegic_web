import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Insights | Realtegic",
  description: "Insights, updates and long-form writing are coming soon.",
};

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
