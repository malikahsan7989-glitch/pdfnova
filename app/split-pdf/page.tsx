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
      tool={<SplitPdf />}
      isClientSide
      howTo={[
        "Select or drop a PDF file.",
        "Choose to extract specific pages, or split every page into a separate file.",
        "If extracting, enter the pages you want (e.g. 1,3,5-8).",
        "Click Split PDF, then use the Download button to save your result — a single PDF, or a ZIP if there are multiple files.",
      ]}
      faq={[
        {
          question: "How do I split specific pages from a PDF?",
          answer:
            "Choose \"Extract pages,\" then type the page numbers or ranges you want, like 1,3,5-8. Those pages are combined into one new PDF.",
        },
        {
          question: "Can I split every page into its own file?",
          answer:
            "Yes — choose \"Split every page\" and each page of your PDF becomes its own PDF file. If there's more than one page, they're bundled into a ZIP for download.",
        },
        {
          question: "Is there a page limit?",
          answer:
            "The PDF file itself is limited to 50 MB. Very large documents may also be limited by your device's available memory, since splitting happens in your browser.",
        },
      ]}
    />
  );
}
