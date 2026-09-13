import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import ExtractPdfPages from "../components/tools/ExtractPdfPages";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Extract PDF Pages Online Free — Visual Page Picker | Foldryn",
  description:
    "Pick specific pages from a PDF using visual thumbnails and save them as a new document, right in your browser. Free, no upload required.",
  alternates: { canonical: "/extract-pdf-pages" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Extract PDF Pages Online Free | Foldryn",
    description: "Select pages visually and extract them into a new PDF, right in your browser.",
    url: "/extract-pdf-pages",
    type: "website",
  },
};

export default function ExtractPdfPagesPage() {
  return (
    <ToolPageLayout
      slug="extract-pdf-pages"
      h1="Extract PDF Pages"
      intro="Pick exactly the pages you need using visual thumbnails, and save them as a new PDF."
      about={[
        "This tool renders a thumbnail preview of every page in your PDF locally in your browser using PDF.js, so you can visually pick the pages you want instead of guessing page numbers. Your file is read from your device and never uploaded during preview or extraction.",
        "You can select any combination of pages, including non-contiguous ones — page 2, page 7, and page 15, for example — and they'll be combined into a single new PDF. Regardless of the order you click them in, the resulting document always keeps pages in their original numeric order.",
      ]}
      tool={<ExtractPdfPages />}
      isClientSide
      howTo={[
        "Select or drop a PDF file and wait for the page previews to load.",
        "Click each page thumbnail you want to keep — selected pages are highlighted.",
        "Click Extract Pages, then use the Download button to save your new PDF.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Page previews and extraction both happen entirely in your browser — your PDF is never sent to our server.",
        },
        {
          question: "Can I select pages that aren't next to each other?",
          answer:
            "Yes. You can select any combination of pages in any order; the final document always keeps them in their original page order.",
        },
        {
          question: "Will extracted pages lose quality or formatting?",
          answer:
            "No. Pages are copied directly from the source file rather than re-rendered, so text, images, and layout stay exactly as they were.",
        },
        {
          question: "Is there a limit on file size?",
          answer:
            "PDFs up to 50 MB are supported. Generating previews for very long documents depends on your device's available memory.",
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
