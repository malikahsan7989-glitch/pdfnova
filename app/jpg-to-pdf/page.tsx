import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import JpgToPdf from "../components/tools/JpgToPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "JPG to PDF Converter Online Free | Foldryn",
  description:
    "Convert JPG or PNG images to a PDF online for free, right in your browser. Combine multiple images into one document. No upload, no signup.",
  alternates: { canonical: "/jpg-to-pdf" },
  openGraph: {
    siteName: SITE_NAME,
    title: "JPG to PDF Converter Online Free | Foldryn",
    description: "Turn your JPG or PNG images into a single PDF document, right in your browser.",
    url: "/jpg-to-pdf",
    type: "website",
  },
};

export default function JpgToPdfPage() {
  return (
    <ToolPageLayout
      slug="jpg-to-pdf"
      h1="JPG to PDF Converter"
      intro="Combine one or more JPG or PNG images into a single PDF, processed locally in your browser."
      about={[
        "This tool builds a new PDF document directly in your browser using pdf-lib, embedding each image you select as its own page. Your photos are read from your device, embedded at their original quality, and assembled into a single file — without any image ever being uploaded to a server along the way.",
        "You control how each page is sized: choosing Auto creates a page that matches each image's exact dimensions with no borders, while A4 or Letter scale images down (never up) to fit a standard fixed page size, which is usually the better choice when the document needs to print consistently. Images can also be reordered before conversion, so a stack of photographed pages ends up in the correct sequence in the final PDF.",
      ]}
      tool={<JpgToPdf />}
      isClientSide
      howTo={[
        "Select or drop one or more JPG or PNG images, reordering them if needed.",
        "Choose a page size: Auto, A4, or Letter.",
        "Click Convert to PDF, then use the Download button to save your document.",
      ]}
      faq={[
        {
          question: "Are my images uploaded anywhere?",
          answer:
            "No. Your images are embedded into the PDF entirely in your browser using pdf-lib — nothing is sent to our server during conversion.",
        },
        {
          question: "Is there a limit on image size or how many I can add?",
          answer:
            "Each image can be up to 20 MB, and there's no fixed limit on the number of images — though very large batches depend on your device's available memory.",
        },
        {
          question: "Does this reduce my image quality?",
          answer:
            "No. Images are embedded into the PDF at their original quality; choosing A4 or Letter may scale an image down to fit the page, but it's never upscaled or recompressed.",
        },
        {
          question: "How fast is the conversion?",
          answer:
            "A handful of images convert in a second or two. Larger batches or bigger image files take proportionally longer, since each image is processed on your own device.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Combine Multiple Scanned Receipts and Documents into One PDF",
          href: "/blog/combine-scanned-receipts-into-one-pdf",
        },
        {
          title: "PDF vs. JPG: Which Format Should You Use for Documents and Images?",
          href: "/blog/pdf-vs-jpg-which-format-to-use",
        },
      ]}
    />
  );
}
