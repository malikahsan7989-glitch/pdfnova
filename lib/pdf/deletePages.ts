import { PDFDocument } from "pdf-lib";
import { ValidationError } from "../validation/fileValidation";

/**
 * Returns a new PDF with the given 1-based page numbers removed. Refuses
 * to produce an empty document — deleting every page isn't a valid PDF
 * and almost certainly isn't what the user meant to do.
 */
export async function deletePages(file: File, pageNumbersToDelete: number[]): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const totalPages = pdf.getPageCount();

  const toDelete = new Set(pageNumbersToDelete);
  if (toDelete.size >= totalPages) {
    throw new ValidationError(
      "You can't delete every page — at least one page must remain in the PDF."
    );
  }

  // Remove from the end backward so earlier indices don't shift under us.
  const sortedDescending = Array.from(toDelete).sort((a, b) => b - a);
  for (const pageNumber of sortedDescending) {
    if (pageNumber < 1 || pageNumber > totalPages) continue;
    pdf.removePage(pageNumber - 1);
  }

  return pdf.save();
}
