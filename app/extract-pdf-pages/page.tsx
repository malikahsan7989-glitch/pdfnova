import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import ExtractPdfPages from "../components/tools/ExtractPdfPages";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Extract PDF Pages Online Free — Visual Page Picker | Foldryn",
  description:
    "Extract selected pages from a PDF online for free. Pick pages from visual thumbnails and save them as a new PDF in your browser, with no upload.",
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
        "Typical uses include pulling a signature page out of a contract, saving one chapter of a scanned book, or sending only the relevant pages of a long report. If you already know the exact page numbers and would rather type them, Split PDF has an Extract pages option that accepts ranges like 1,3,5-8.",
      ]}
      tool={<ExtractPdfPages />}
      isClientSide
      howTo={[
        "Select or drop a PDF file (up to 50 MB) and wait for the page previews to load.",
        "Click each page you want to keep. Selected pages get a blue outline and a tick, and the summary shows how many you've picked.",
        "Press the Extract button, which shows your count, for example Extract 3 Pages.",
        "When the result is ready, use the Download button to save your new PDF.",
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
            "No. Pages are copied directly from the source file rather than re-rendered, so text, images, and layout are kept as they were.",
        },
        {
          question: "Is there a limit on file size?",
          answer:
            "PDFs up to 50 MB are supported. Generating previews for very long documents depends on your device's available memory.",
        },
        {
          question: "Can I extract just one page?",
          answer:
            "Yes. Click a single thumbnail and the button will read Extract 1 Page. You'll get a one-page PDF.",
        },
        {
          question: "What if I'd rather type the page numbers?",
          answer:
            "Use the Extract pages option in Split PDF and enter pages like 1,3,5-8. It produces the same kind of result without the thumbnails.",
        },
        {
          question: "Does extracting change my original file?",
          answer:
            "No. You always get a new PDF, and your original file isn't modified.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Extract Pages From a PDF (Step by Step)",
          href: "/blog/how-to-split-extract-pages-from-pdf",
        },
        {
          title: "How to Delete Pages From a PDF (Blank Pages, Cover Sheets and Duplicates)",
          href: "/blog/how-to-delete-pages-from-pdf",
        },
      ]}
    />
  );
}
