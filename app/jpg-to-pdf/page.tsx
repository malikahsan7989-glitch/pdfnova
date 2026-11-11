import type { Metadata } from "next";
import JpgToPdf from "../components/tools/JpgToPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("jpg-to-pdf");

export default function JpgToPdfPage() {
  return <ToolPageLayout slug="jpg-to-pdf" tool={<JpgToPdf />} />;
}
