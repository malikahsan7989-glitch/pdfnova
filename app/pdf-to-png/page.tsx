import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import PdfToPng from "../components/tools/PdfToPng";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "PDF to PNG Converter Online Free | Foldryn",
  description:
    "Convert PDF pages to PNG images online for free, right in your browser. Download a single PNG or a ZIP of all pages. No upload, no signup.",
  alternates: { canonical: "/pdf-to-png" },
  openGraph: {
    siteName: SITE_NAME,
    title: "PDF to PNG Converter Online Free | Foldryn",
    description: "Convert every page of your PDF into a PNG image, right in your browser.",
    url: "/pdf-to-png",
    type: "website",
  },
};

export default function PdfToPngPage() {
  return (
    <ToolPageLayout
      slug="pdf-to-png"
      h1="PDF to PNG Converter"
      intro="Turn each page of a PDF into a PNG image, processed locally in your browser."
      about={[
        "This converter uses the same PDF.js rendering approach as our PDF to JPG tool, drawing each page onto a canvas directly in your browser rather than uploading your file to a server. PNG is chosen here specifically because it's a lossless format — every pixel is preserved exactly, which matters more for pages with sharp lines, diagrams, or text than for photographs.",
        "Because PNG doesn't use the same lossy compression as JPG, PNG files are typically larger for the same page, especially for busy or photographic content. If your priority is smaller file size for sharing, PDF to JPG is usually the better choice; if you need pixel-perfect fidelity for diagrams or screenshots extracted from a PDF, PNG is the right format.",
      ]}
      tool={<PdfToPng />}
      isClientSide
      howTo={[
        "Select or drop a PDF file.",
        "Click Convert to PNG and wait for each page to render.",
        "Use the Download button to save a single PNG, or a ZIP file if your PDF has multiple pages.",
      ]}
      faq={[
        {
          question: "Are my files uploaded to a server?",
          answer:
            "No. This tool renders each PDF page to an image entirely in your browser using PDF.js — your file never leaves your device.",
        },
        {
          question: "Is there a limit on PDF size or page count?",
          answer:
            "PDFs up to 50 MB are supported. Very long documents rely on your browser's available memory to render every page.",
        },
        {
          question: "Why choose PNG instead of JPG?",
          answer:
            "PNG is lossless, so text and sharp lines stay perfectly crisp with no compression artifacts — at the cost of a larger file size than JPG.",
        },
        {
          question: "How long does conversion take?",
          answer:
            "A single page converts almost instantly. Multi-page documents take proportionally longer, since each page is rendered individually before being packaged for download.",
        },
      ]}
      relatedGuides={[
        {
          title: "PDF vs. JPG: Which Format Should You Use for Documents and Images?",
          href: "/blog/pdf-vs-jpg-which-format-to-use",
        },
      ]}
    />
  );
}
