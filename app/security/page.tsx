import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Security | Realtegic",
  description: "Security information is coming soon.",
};

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
