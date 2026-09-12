import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import MergePdf from "../components/MergePdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Merge PDF Online Free — Combine PDF Files | Foldryn",
  description:
    "Merge multiple PDF files into one document online for free, right in your browser. No upload, no signup, no watermark.",
  alternates: { canonical: "/merge-pdf" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Merge PDF Online Free | Foldryn",
    description: "Combine multiple PDF files into one document, right in your browser.",
    url: "/merge-pdf",
    type: "website",
  },
};

export default function MergePdfPage() {
  return (
    <ToolPageLayout
      slug="merge-pdf"
      h1="Merge PDF Online"
      intro="Combine multiple PDF files into one document quickly and easily, processed locally in your browser."
      about={[
        "This tool combines two or more PDF files into a single document entirely inside your browser, using a JavaScript library called pdf-lib. When you select your files, each one is read directly from your device into your browser's memory — nothing is uploaded to a server first. The tool then copies every page from each source file, in the order you've arranged them, into one new PDF document.",
        "Because the merge happens locally, the process works the same way whether your files total a few kilobytes or tens of megabytes: your device does the work, and the result is generated and handed back to you as a download the moment it's ready. This also means the original formatting, fonts, and page layout of each source PDF are preserved exactly, since pages are copied rather than re-rendered or flattened into images.",
      ]}
      tool={<MergePdf />}
      isClientSide
      howTo={[
        "Select two or more PDF files.",
        "Reorder them if needed using the up arrow next to each file.",
        "Click Merge PDFs, then use the Download button to save your file.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Merging happens entirely in your browser using the pdf-lib library — your files are never sent to our server at any point in the process.",
        },
        {
          question: "Is there a limit on how many PDFs I can merge?",
          answer:
            "There's no fixed limit on the number of files, though each individual PDF must be under 50 MB, and very large combined documents depend on your device's available memory.",
        },
        {
          question: "Will merging affect the quality or formatting of my pages?",
          answer:
            "No. Pages are copied directly from each source PDF rather than re-rendered, so text, fonts, and layout stay exactly as they were in the original files.",
        },
        {
          question: "How fast is merging, and does file size matter?",
          answer:
            "Most merges finish in a second or two. Larger files or a large number of PDFs take a bit longer, since your device is doing the processing rather than a remote server.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Combine Multiple Scanned Receipts and Documents into One PDF",
          href: "/blog/combine-scanned-receipts-into-one-pdf",
        },
        {
          title: "Why Browser-Based Local PDF Processing Is Safer Than Cloud Converters",
          href: "/blog/browser-based-pdf-processing-vs-cloud-converters",
        },
      ]}
    />
  );
}
