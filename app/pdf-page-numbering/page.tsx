import type { Metadata } from "next";
import PdfPageNumbering from "../components/tools/PdfPageNumbering";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("pdf-page-numbering");

export default function PdfPageNumberingPage() {
  return <ToolPageLayout slug="pdf-page-numbering" tool={<PdfPageNumbering />} />;
}
