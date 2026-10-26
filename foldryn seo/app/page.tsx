import type { Metadata } from "next";
import Hero from "./components/home/Hero";
import ToolGrid from "./components/home/ToolGrid";
import TrustSection from "./components/home/TrustSection";
import HowItWorks from "./components/home/HowItWorks";
import HomeFaq from "./components/home/HomeFaq";
import JsonLd from "./components/shared/JsonLd";
import { websiteSchema } from "@/lib/structuredData";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "A growing collection of free online PDF tools that run in your browser: organize, convert, compress, and edit PDFs. No upload, no signup required.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Organize, convert, compress, and edit your PDF files quickly and privately, right in your browser.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <JsonLd data={websiteSchema()} />
      <Hero />
      <ToolGrid />
      <TrustSection />
      <HowItWorks />
      <HomeFaq />
    </main>
  );
}
