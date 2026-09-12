import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import CompressPdf from "../components/tools/CompressPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Compress PDF Online Free — Reduce PDF File Size | Foldryn",
  description:
    "Compress a PDF online for free, right in your browser. See your original and new file size before you download. No upload required.",
  alternates: { canonical: "/compress-pdf" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Compress PDF Online Free | Foldryn",
    description: "Reduce your PDF's file size directly in your browser.",
    url: "/compress-pdf",
    type: "website",
  },
};

export default function CompressPdfPage() {
  return (
    <ToolPageLayout
      slug="compress-pdf"
      h1="Compress PDF Online"
      intro="Shrink your PDF's file size in your browser. We show you the before-and-after size so you always know what you're getting."
      tool={<CompressPdf />}
      isClientSide
      howTo={[
        "Select or drop a PDF file.",
        "Click Compress PDF.",
        "Review the original size, new size, and reduction percentage.",
        "Use the Download button to save the compressed PDF, or keep your original if the savings aren't worth it.",
      ]}
      faq={[
        {
          question: "How much smaller will my PDF get?",
          answer:
            "It depends on the file. PDFs with a lot of repeated or shared internal structure can shrink noticeably. PDFs whose size mainly comes from high-resolution images may see little or no reduction, since this tool doesn't re-encode images — we'll tell you honestly either way.",
        },
        {
          question: "Will compressing reduce quality?",
          answer:
            "No. This tool re-packages the PDF's internal structure more efficiently rather than re-encoding text or images, so visual quality is unaffected.",
        },
        {
          question: "What if the compressed file is larger than the original?",
          answer:
            "Occasionally a PDF is already efficiently encoded and re-saving it adds a small amount of overhead. If that happens, we'll show you both sizes so you can decide whether to keep your original.",
        },
      ]}
    />
  );
}
