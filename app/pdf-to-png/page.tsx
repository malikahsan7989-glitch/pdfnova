import type { Metadata } from "next";
import PdfToPng from "../components/tools/PdfToPng";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("pdf-to-png");

export default function PdfToPngPage() {
  return <ToolPageLayout slug="pdf-to-png" tool={<PdfToPng />} />;
}
