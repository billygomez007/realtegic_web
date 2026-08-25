import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description:
      "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/icons/realtegic-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/realtegic-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
