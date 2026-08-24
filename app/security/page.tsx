import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Security at Realtegic",
  description:
    "Security practices and information for Realtegic are coming soon.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <ComingSoonPage
      eyebrow="SECURITY"
      title="Security Information Coming Soon."
      description="We are preparing a public overview of our security posture and practices."
      primaryHref="/contact"
      primaryLabel="Contact us"
    />
  );
}
