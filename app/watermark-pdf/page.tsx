import type { Metadata } from "next";
import WatermarkPdf from "../components/tools/WatermarkPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("watermark-pdf");

export default function WatermarkPdfPage() {
  return <ToolPageLayout slug="watermark-pdf" tool={<WatermarkPdf />} />;
}
