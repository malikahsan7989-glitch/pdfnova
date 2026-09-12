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
      tool={<MergePdf />}
      isClientSide
      howTo={[
        "Select two or more PDF files.",
        "Reorder them if needed using the up arrow next to each file.",
        "Click Merge PDFs, then use the Download button to save your file.",
      ]}
      faq={[
        {
          question: "Is there a limit on how many PDFs I can merge?",
          answer:
            "There's no fixed limit on the number of files, though each individual PDF must be under 50 MB, and very large combined documents depend on your device's available memory.",
        },
        {
          question: "Can I change the order of the files?",
          answer:
            "Yes — use the arrow button next to each file in the list to move it up, or remove it entirely before merging.",
        },
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Merging happens entirely in your browser using the pdf-lib library — your files are never sent to our server.",
        },
      ]}
    />
  );
}
