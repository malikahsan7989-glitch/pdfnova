import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageLayout from "@/app/components/landing/LandingPageLayout";
import { buildLandingMetadata } from "./metadata";
import { getLandingPage, landingPagesFor } from "./registry";

type Params = { landing: string };

/**
 * Builds the three exports a `app/{tool}/[landing]/page.tsx` file needs.
 * Each landing page becomes its own statically generated URL.
 */
export function createLandingRoute(toolSlug: string) {
  return {
    generateStaticParams(): Params[] {
      return landingPagesFor(toolSlug).map((p) => ({ landing: p.slug }));
    },
    async generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
      const { landing } = await params;
      const page = getLandingPage(toolSlug, landing);
      return page ? buildLandingMetadata(page) : {};
    },
    async Page({ params }: { params: Promise<Params> }) {
      const { landing } = await params;
      const page = getLandingPage(toolSlug, landing);
      if (!page) notFound();
      return <LandingPageLayout page={page} />;
    },
  };
}
