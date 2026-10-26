import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import SplitPdf from "../components/tools/SplitPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Split PDF Online Free — Extract or Separate Pages | Foldryn",
  description:
    "Split a PDF online for free. Extract specific pages or split every page into its own file, right in your browser. No upload, no signup.",
  alternates: { canonical: "/split-pdf" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Split PDF Online Free | Foldryn",
    description:
      "Extract pages or split every page of a PDF into separate files, right in your browser.",
    url: "/split-pdf",
    type: "website",
  },
};

export default function SplitPdfPage() {
  return (
    <ToolPageLayout
      slug="split-pdf"
      h1="Split PDF Online"
      intro="Extract the pages you need, or split every page into its own PDF — all processed locally in your browser."
      about={[
        "Splitting happens entirely on your device using pdf-lib running in your browser. Once you select a PDF, the tool reads its page count and lets you choose between two modes: extracting a specific set of pages into one new document, or breaking every page apart into its own individual file. Either way, your original file is read locally and never leaves your device during the process.",
        "When extracting pages, the tool copies only the pages you specify — using a simple range format like 1,3,5-8 — into a brand-new PDF, preserving their original order and formatting. When splitting every page, each page becomes a standalone PDF, and if there's more than one result file, they're automatically packaged into a single ZIP so you can download everything in one go instead of one file at a time.",
      ]}
      tool={<SplitPdf />}
      isClientSide
      howTo={[
        "Select or drop a PDF file, then choose to extract specific pages or split every page.",
        "If extracting, enter the pages you want using a format like 1,3,5-8.",
        "Click Split PDF, then use the Download button to save your result — a single PDF, or a ZIP if there are multiple files.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Splitting happens entirely in your browser using pdf-lib — your PDF is never sent to our server during the process.",
        },
        {
          question: "Is there a page or file size limit?",
          answer:
            "The PDF file itself is limited to 50 MB. Very large documents may also be limited by your device's available memory, since splitting happens in your browser.",
        },
        {
          question: "Will splitting affect page quality or formatting?",
          answer:
            "No. Pages are copied directly from your original file rather than re-rendered, so text, images, and layout remain exactly as they were.",
        },
        {
          question: "How fast is splitting a large document?",
          answer:
            "Extracting a handful of pages is nearly instant. Splitting every page of a very long document takes a bit longer, since each page is processed individually before being bundled into a ZIP.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Split and Extract Specific Pages From Large PDF Documents",
          href: "/blog/how-to-split-extract-pages-from-pdf",
        },
      ]}
    />
  );
}
