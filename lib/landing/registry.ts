import { tools } from "@/lib/tools";
import type { LandingPage } from "./types";
import { mergePdfPages } from "./pages/merge-pdf";
import { splitPdfPages } from "./pages/split-pdf";

/**
 * One entry per tool. A tool appears here only once its pages are written.
 * Pages that are not authored do not exist as routes (they return 404), they
 * are never published as placeholders.
 */
const pagesByTool: Record<string, LandingPage[]> = {
  "merge-pdf": mergePdfPages,
  "split-pdf": splitPdfPages,
};

export const LANDING_UPDATED = "2026-11-24";

export function landingPagesFor(toolSlug: string): LandingPage[] {
  return pagesByTool[toolSlug] ?? [];
}

export function allLandingPages(): LandingPage[] {
  return Object.values(pagesByTool).flat();
}

export function indexableLandingPages(): LandingPage[] {
  return allLandingPages().filter((p) => p.indexable !== false);
}

export function getLandingPage(toolSlug: string, slug: string): LandingPage | undefined {
  return landingPagesFor(toolSlug).find((p) => p.slug === slug);
}

export function landingPath(page: Pick<LandingPage, "toolSlug" | "slug">): string {
  return `/${page.toolSlug}/${page.slug}`;
}

export function toolFor(slug: string) {
  return tools.find((t) => t.slug === slug);
}
