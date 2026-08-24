import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Developers at Realtegic",
  description:
    "Developer tools, APIs and documentation for Realtegic are coming soon.",
  path: "/developers",
});

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
