import type { Metadata } from "next";
import DeletePdfPages from "../components/tools/DeletePdfPages";
import ToolPageLayout from "../components/shared/ToolPageLayout";
import { buildToolMetadata } from "@/lib/toolSeo";

export const metadata: Metadata = buildToolMetadata("delete-pdf-pages");

export default function DeletePdfPagesPage() {
  return <ToolPageLayout slug="delete-pdf-pages" tool={<DeletePdfPages />} />;
}
