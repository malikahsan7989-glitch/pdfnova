import type { Metadata } from "next";
import ExtractPdfPages from "../components/tools/ExtractPdfPages";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("extract-pdf-pages");

export default function ExtractPdfPagesPage() {
  return <ToolPageLayout slug="extract-pdf-pages" tool={<ExtractPdfPages />} />;
}
