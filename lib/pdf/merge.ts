import { PDFDocument } from "pdf-lib";

/**
 * Merges an ordered list of PDF files into a single PDF and returns the
 * resulting bytes. Throws on invalid/corrupt/encrypted input — callers
 * should wrap this with toFriendlyMessage().
 */
export async function mergePdfs(files: File[]): Promise<Uint8Array> {
  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach((page) => mergedPdf.addPage(page));
  }

  return mergedPdf.save();
}
