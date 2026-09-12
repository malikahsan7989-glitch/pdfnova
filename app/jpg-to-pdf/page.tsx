import type { Metadata } from "next";
import JpgToPdf from "../components/tools/JpgToPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "JPG to PDF Converter Online Free | Foldryn",
  description:
    "Convert JPG or PNG images to a PDF online for free, right in your browser. Combine multiple images into one document. No upload, no signup.",
  alternates: { canonical: "/jpg-to-pdf" },
  openGraph: {
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
      tool={<JpgToPdf />}
      isClientSide
      howTo={[
        "Select or drop one or more JPG or PNG images.",
        "Reorder images if needed using the up arrow next to each file.",
        "Choose a page size: Auto (matches each image), A4, or Letter.",
        "Click Convert to PDF, then use the Download button to save your document.",
      ]}
      faq={[
        {
          question: "Can I combine multiple images into one PDF?",
          answer:
            "Yes. Add as many JPG or PNG images as you need — each becomes one page of the resulting PDF, in the order shown.",
        },
        {
          question: "What page size should I choose?",
          answer:
            "\"Auto\" sizes each PDF page exactly to its image with no borders. \"A4\" and \"Letter\" fit each image onto a standard fixed page size, which is often better if you plan to print the document.",
        },
        {
          question: "Does this reduce my image quality?",
          answer:
            "Your images are embedded into the PDF at their original quality; choosing A4 or Letter may scale an image down to fit the page, but never upscales it.",
        },
      ]}
    />
  );
}
