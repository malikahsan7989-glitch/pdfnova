import type { Metadata } from "next";
import RotatePdf from "../components/tools/RotatePdf";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("rotate-pdf");

export default function RotatePdfPage() {
  return <ToolPageLayout slug="rotate-pdf" tool={<RotatePdf />} />;
}
