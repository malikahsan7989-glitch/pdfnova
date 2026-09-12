import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import PdfToJpg from "../components/tools/PdfToJpg";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "PDF to JPG Converter Online Free | Foldryn",
  description:
    "Convert PDF pages to JPG images online for free, right in your browser. Download a single JPG or a ZIP of all pages. No upload, no signup.",
  alternates: { canonical: "/pdf-to-jpg" },
  openGraph: {
    siteName: SITE_NAME,
    title: "PDF to JPG Converter Online Free | Foldryn",
    description: "Convert every page of your PDF into a JPG image, right in your browser.",
    url: "/pdf-to-jpg",
    type: "website",
  },
};

export default function PdfToJpgPage() {
  return (
    <ToolPageLayout
      slug="pdf-to-jpg"
      h1="PDF to JPG Converter"
      intro="Turn each page of a PDF into a JPG image, processed locally in your browser."
      tool={<PdfToJpg />}
      isClientSide
      howTo={[
        "Select or drop a PDF file.",
        "Choose standard or high-resolution image quality.",
        "Click Convert to JPG, then use the Download button to save a single JPG, or a ZIP file if your PDF has multiple pages.",
      ]}
      faq={[
        {
          question: "Can I convert a multi-page PDF?",
          answer:
            "Yes. Every page is converted to its own JPG image. If there's more than one page, all images are bundled into a ZIP file for download.",
        },
        {
          question: "What resolution are the JPG images?",
          answer:
            "Standard quality is suited for screen viewing and sharing. High resolution renders at a higher scale for printing or zooming in, at the cost of a larger file size.",
        },
        {
          question: "Are my files uploaded to a server?",
          answer:
            "No. This tool renders each PDF page to an image entirely in your browser using PDF.js — your file never leaves your device.",
        },
      ]}
    />
  );
}
