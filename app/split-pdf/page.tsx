import type { Metadata } from "next";
import SplitPdf from "../components/tools/SplitPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("split-pdf");

export default function SplitPdfPage() {
  return <ToolPageLayout slug="split-pdf" tool={<SplitPdf />} />;
}
