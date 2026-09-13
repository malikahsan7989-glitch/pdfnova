import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import RotatePdf from "../components/tools/RotatePdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Rotate PDF Online Free — Fix Sideways Pages | Foldryn",
  description:
    "Rotate specific PDF pages online for free, right in your browser. Select pages visually and rotate them clockwise or counter-clockwise.",
  alternates: { canonical: "/rotate-pdf" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Rotate PDF Online Free | Foldryn",
    description: "Rotate individual PDF pages using visual page previews, right in your browser.",
    url: "/rotate-pdf",
    type: "website",
  },
};

export default function RotatePdfPage() {
  return (
    <ToolPageLayout
      slug="rotate-pdf"
      h1="Rotate PDF Online"
      intro="Fix sideways or upside-down pages by selecting them visually and rotating in either direction."
      about={[
        "This tool renders a small preview thumbnail of every page in your PDF directly in your browser using PDF.js, so you can see exactly which pages need rotating before making any changes. Your file is read from your device and never uploaded anywhere during this preview step.",
        "Once you select one or more pages, rotating them updates the page's internal rotation metadata using pdf-lib rather than re-rendering the page content — the underlying text and images are untouched, only the page's orientation changes. This keeps the rotated pages exactly as sharp as the originals.",
      ]}
      tool={<RotatePdf />}
      isClientSide
      howTo={[
        "Select or drop a PDF file and wait for the page previews to load.",
        "Click one or more page thumbnails to select them, then use Rotate Left or Rotate Right.",
        "Click Apply Rotation, then use the Download button to save your file.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Page previews and rotation both happen entirely in your browser — your PDF is never sent to our server.",
        },
        {
          question: "Is there a limit on file size or page count?",
          answer:
            "PDFs up to 50 MB are supported. Generating previews for very long documents depends on your device's available memory.",
        },
        {
          question: "Will rotating affect the quality of my pages?",
          answer:
            "No. Rotation only changes the page's orientation metadata — the actual text and images are never re-rendered or recompressed.",
        },
        {
          question: "Can I rotate different pages by different amounts?",
          answer:
            "Yes. Select any subset of pages and rotate them independently — each page keeps its own rotation until you apply the final result.",
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
