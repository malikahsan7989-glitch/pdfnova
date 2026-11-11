import type { Metadata } from "next";
import CompressPdf from "../components/tools/CompressPdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("compress-pdf");

export default function CompressPdfPage() {
  return <ToolPageLayout slug="compress-pdf" tool={<CompressPdf />} />;
}
