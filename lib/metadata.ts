import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: "/logos/Realtegic_Official_Logo.png",
          width: 1774,
          height: 887,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logos/Realtegic_Official_Logo.png"],
    },
  };
}

