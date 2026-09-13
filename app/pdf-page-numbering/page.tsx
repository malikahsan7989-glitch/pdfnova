import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import PdfPageNumbering from "../components/tools/PdfPageNumbering";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Add Page Numbers to PDF Online Free | Foldryn",
  description:
    "Add page numbers to every page of a PDF online for free, right in your browser. Choose the position and starting number.",
  alternates: { canonical: "/pdf-page-numbering" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Add Page Numbers to PDF Online Free | Foldryn",
    description: "Add page numbers to a PDF in the position you choose, right in your browser.",
    url: "/pdf-page-numbering",
    type: "website",
  },
};

export default function PdfPageNumberingPage() {
  return (
    <ToolPageLayout
      slug="pdf-page-numbering"
      h1="PDF Page Numbering"
      intro="Add page numbers to every page of a PDF, choosing the position and where numbering starts."
      about={[
        "This tool uses pdf-lib to draw a page number directly onto every page of your document, entirely inside your browser. Your file is read locally, numbered, and the result generated without ever being uploaded to a server.",
        "You can place numbers in any of six common positions — top or bottom, aligned left, center, or right — and choose what number the first page should start from, which is useful when a document is meant to continue numbering from an earlier section rather than starting at 1.",
      ]}
      tool={<PdfPageNumbering />}
      isClientSide
      howTo={[
        "Select or drop a PDF file.",
        "Choose a position and the number you want the first page to start from.",
        "Click Add Page Numbers, then use the Download button to save your file.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Page numbers are added entirely in your browser using pdf-lib — your PDF is never sent to our server.",
        },
        {
          question: "Is there a limit on file size or page count?",
          answer:
            "PDFs up to 50 MB are supported. Very long documents rely on your device's available memory to process every page.",
        },
        {
          question: "Can I start numbering from something other than 1?",
          answer:
            "Yes. Set any starting number you like — useful when a document should continue the numbering from a previous section.",
        },
        {
          question: "Will this affect the rest of my page content?",
          answer:
            "No. The page number is added as a small text element in your chosen corner or edge; the rest of each page's content is untouched.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Combine Multiple Scanned Receipts and Documents into One PDF",
          href: "/blog/combine-scanned-receipts-into-one-pdf",
        },
      ]}
    />
  );
}
