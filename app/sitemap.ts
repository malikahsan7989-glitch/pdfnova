import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { blogPosts } from "@/lib/blog";
import { indexableLandingPages, landingPath, LANDING_UPDATED } from "@/lib/landing/registry";
import { SITE_URL, CONTENT_UPDATED, POLICY_LAST_UPDATED } from "@/lib/site";

// lastModified values are real content-change dates, not the build time, so
// search engines aren't told that every page changed on every deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  const content = new Date(CONTENT_UPDATED);
  const policies = new Date(POLICY_LAST_UPDATED);
  const latestPost = new Date(
    blogPosts.map((p) => p.updated ?? p.date).sort().slice(-1)[0]
  );

  const staticRoutes = [
    { path: "/", priority: 1, lastModified: content },
    { path: "/blog", priority: 0.6, lastModified: latestPost },
    { path: "/pdf-use-cases", priority: 0.6, lastModified: new Date(LANDING_UPDATED) },
    { path: "/about", priority: 0.5, lastModified: policies },
    { path: "/contact", priority: 0.5, lastModified: new Date("2026-09-12") },
    { path: "/privacy-policy", priority: 0.3, lastModified: policies },
    { path: "/terms", priority: 0.3, lastModified: policies },
    { path: "/cookie-policy", priority: 0.3, lastModified: policies },
    { path: "/security", priority: 0.3, lastModified: policies },
  ];

  const toolRoutes = tools.map((tool) => ({
    path: tool.href,
    priority: 0.9,
    lastModified: content,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    lastModified: new Date(post.updated ?? post.date),
  }));

  const landingRoutes = indexableLandingPages().map((page) => ({
    path: landingPath(page),
    priority: 0.7,
    lastModified: new Date(LANDING_UPDATED),
  }));

  return [...staticRoutes, ...toolRoutes, ...landingRoutes, ...blogRoutes].map(
    ({ path, priority, lastModified }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })
  );
}
