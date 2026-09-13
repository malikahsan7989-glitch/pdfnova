import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import WatermarkPdf from "../components/tools/WatermarkPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Watermark PDF Online Free — Add Text Watermark | Foldryn",
  description:
    "Add a custom text watermark to every page of a PDF online for free, right in your browser. Choose position, opacity, and font size.",
  alternates: { canonical: "/watermark-pdf" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Watermark PDF Online Free | Foldryn",
    description: "Stamp a custom text watermark across every page of a PDF, right in your browser.",
    url: "/watermark-pdf",
    type: "website",
  },
};

export default function WatermarkPdfPage() {
  return (
    <ToolPageLayout
      slug="watermark-pdf"
      h1="Watermark PDF Online"
      intro="Stamp a custom text watermark — like CONFIDENTIAL, DRAFT, or your company name — across every page of a PDF."
      about={[
        "This tool uses pdf-lib to draw your chosen text directly onto every page of the PDF, entirely inside your browser. Your file is read from your device, the watermark is applied locally, and the result is generated without any upload to a server.",
        "You control exactly how the watermark looks: pick a position (center, top, bottom, or a diagonal stamp across the page), adjust its opacity so it doesn't obscure the underlying content, and set the font size to match how prominent you want it to be. The same settings are applied consistently to every page in the document.",
      ]}
      tool={<WatermarkPdf />}
      isClientSide
      howTo={[
        "Select or drop a PDF file, then type the watermark text you want.",
        "Choose a position, and adjust opacity and font size as needed.",
        "Click Apply Watermark, then use the Download button to save your file.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. The watermark is applied entirely in your browser using pdf-lib — your PDF is never sent to our server.",
        },
        {
          question: "Is there a limit on file size?",
          answer:
            "PDFs up to 50 MB are supported. Larger files still process locally, but performance depends on your device's available memory.",
        },
        {
          question: "Can I remove a watermark once it's applied?",
          answer:
            "No, applying a watermark permanently draws it onto the page content — keep a copy of your original file if you might need an unwatermarked version later.",
        },
        {
          question: "Will the watermark affect the readability of my document?",
          answer:
            "That depends on your settings. Lower opacity and smaller font sizes keep the watermark subtle, while higher opacity makes it more prominent — adjust both to find the right balance for your use case.",
        },
      ]}
      relatedGuides={[
        {
          title: "Why Browser-Based Local PDF Processing Is Safer Than Cloud Converters",
          href: "/blog/browser-based-pdf-processing-vs-cloud-converters",
        },
      ]}
    />
  );
}
