import type { Metadata } from "next";
import MergePdf from "../components/MergePdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("merge-pdf");

export default function MergePdfPage() {
  return <ToolPageLayout slug="merge-pdf" tool={<MergePdf />} />;
}
