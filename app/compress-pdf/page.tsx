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
      about={[
        "This tool uses pdf-lib to re-save your PDF's internal structure more efficiently, running entirely in your browser rather than on a server. A PDF file bundles text, fonts, and images together with a certain amount of structural overhead — repeated objects, uncompressed cross-reference tables, and similar internal bookkeeping. Re-packaging that structure can shrink a file noticeably, especially for documents with a lot of repeated elements like multi-page forms.",
        "What this approach honestly can't do is meaningfully shrink a PDF whose size mainly comes from large, high-resolution embedded images, since that would require re-encoding the images themselves rather than just repackaging the file's structure. Because of that, this tool always shows you the original size next to the new size before you download anything, so you can see exactly what was — or wasn't — saved rather than taking a vague claim at face value.",
      ]}
      tool={<CompressPdf />}
      isClientSide
      howTo={[
        "Select or drop a PDF file, then click Compress PDF.",
        "Review the original size, new size, and reduction percentage shown.",
        "Use the Download button to save the compressed PDF, or keep your original if the savings aren't worth it.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Compression happens entirely in your browser using pdf-lib — your PDF is never sent to our server during the process.",
        },
        {
          question: "Is there a file size limit?",
          answer:
            "PDFs up to 50 MB are supported. Larger files still process locally, but performance depends on your device's available memory.",
        },
        {
          question: "Will compressing reduce quality?",
          answer:
            "No. This tool re-packages the PDF's internal structure more efficiently rather than re-encoding text or images, so visual quality is unaffected either way.",
        },
        {
          question: "How much smaller will my PDF get, and how fast?",
          answer:
            "Compression itself takes a second or two. The size reduction varies by file — documents with repeated internal structure shrink noticeably, while image-heavy PDFs may see little change, which the tool shows you honestly before download.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Compress PDF Files for Online Application Portals Without Quality Loss",
          href: "/blog/compress-pdf-for-application-portals",
        },
      ]}
    />
  );
}
