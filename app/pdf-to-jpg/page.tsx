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
      about={[
        "This converter uses PDF.js — the same rendering engine behind Firefox's built-in PDF viewer — to draw each page of your document onto a canvas directly inside your browser, then encodes that canvas as a JPG image. Your file is read from your device, rendered locally, and the resulting images are generated without ever being sent to a server.",
        "Because each page is rendered rather than simply extracted, you get a real say in the output quality: choosing standard quality produces smaller images suited for screens and sharing, while high resolution renders at a larger scale for printing or zooming in, at the cost of a bigger file size. If your PDF has more than one page, all of the resulting JPGs are automatically bundled into a single ZIP file so you don't have to download each one separately.",
      ]}
      tool={<PdfToJpg />}
      isClientSide
      howTo={[
        "Select or drop a PDF file, then choose standard or high-resolution quality.",
        "Click Convert to JPG and wait for each page to render.",
        "Use the Download button to save a single JPG, or a ZIP file if your PDF has multiple pages.",
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
            "PDFs up to 50 MB are supported. Very long documents rely on your browser's available memory to render every page, so extremely large files may take longer or need more memory.",
        },
        {
          question: "What resolution are the JPG images, and will quality suffer?",
          answer:
            "Standard quality suits screen viewing and sharing. High resolution renders at a larger scale for printing or zooming in — choose the option that matches how you'll use the images.",
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
