import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import DeletePdfPages from "../components/tools/DeletePdfPages";
import ToolPageLayout from "../components/shared/ToolPageLayout";

export const metadata: Metadata = {
  title: "Delete PDF Pages Online Free — Remove Unwanted Pages | Foldryn",
  description:
    "Remove unwanted pages from a PDF online for free, right in your browser. Select pages visually and delete them in seconds.",
  alternates: { canonical: "/delete-pdf-pages" },
  openGraph: {
    siteName: SITE_NAME,
    title: "Delete PDF Pages Online Free | Foldryn",
    description: "Remove pages from a PDF using visual page previews, right in your browser.",
    url: "/delete-pdf-pages",
    type: "website",
  },
};

export default function DeletePdfPagesPage() {
  return (
    <ToolPageLayout
      slug="delete-pdf-pages"
      h1="Delete PDF Pages"
      intro="Remove blank, duplicate, or unwanted pages from a PDF by selecting them visually."
      about={[
        "This tool shows a thumbnail preview of every page in your PDF, rendered locally in your browser with PDF.js, so you can see exactly what you're about to remove before committing to it. Nothing is uploaded during this preview step — your file stays on your device throughout.",
        "When you delete selected pages, pdf-lib rebuilds the document without them, keeping every remaining page's original content and order intact. As a safeguard, the tool won't let you delete every page in the document — at least one page always has to remain, since a zero-page PDF isn't a valid file.",
      ]}
      tool={<DeletePdfPages />}
      isClientSide
      howTo={[
        "Select or drop a PDF file and wait for the page previews to load.",
        "Click each page thumbnail you want to remove — selected pages are highlighted.",
        "Click Delete Pages, then use the Download button to save your edited file.",
      ]}
      faq={[
        {
          question: "Are my files uploaded anywhere?",
          answer:
            "No. Page previews and deletion both happen entirely in your browser — your PDF is never sent to our server.",
        },
        {
          question: "Is there a limit on how many pages I can delete?",
          answer:
            "You can delete any number of pages except all of them — at least one page must remain in the final document.",
        },
        {
          question: "Will the remaining pages lose quality?",
          answer:
            "No. Remaining pages are copied over exactly as they were in the original file, without any re-rendering or recompression.",
        },
        {
          question: "How fast is this for large documents?",
          answer:
            "Loading previews for a long document takes a few seconds since every page is rendered as a thumbnail. Deleting the selected pages afterward is nearly instant.",
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
