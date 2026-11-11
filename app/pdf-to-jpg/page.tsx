import type { Metadata } from "next";
import PdfToJpg from "../components/tools/PdfToJpg";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("pdf-to-jpg");

export default function PdfToJpgPage() {
  return <ToolPageLayout slug="pdf-to-jpg" tool={<PdfToJpg />} />;
}
