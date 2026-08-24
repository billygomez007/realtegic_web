import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/infrastructure",
  "/products",
  "/developers",
  "/innovation",
  "/company",
  "/careers",
  "/insights",
  "/contact",
  "/security",
  "/privacy",
  "/terms",
  "/industries",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

