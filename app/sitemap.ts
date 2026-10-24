import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const siteUrl = "https://foldryn.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/cookie-policy", priority: 0.3 },
    { path: "/security", priority: 0.3 },
  ];

  const toolRoutes = tools.map((tool) => ({
    path: tool.href,
    priority: 0.9,
  }));

  return [...staticRoutes, ...toolRoutes].map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
