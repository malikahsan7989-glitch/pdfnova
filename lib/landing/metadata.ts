import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import type { LandingPage } from "./types";
import { landingPath } from "./registry";

export function buildLandingMetadata(page: LandingPage): Metadata {
  const path = landingPath(page);
  const indexable = page.indexable !== false;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      url: path,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
