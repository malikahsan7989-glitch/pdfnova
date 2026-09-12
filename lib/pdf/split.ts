import { PDFDocument } from "pdf-lib";

export interface SplitResultFile {
  name: string;
  bytes: Uint8Array;
}

/**
 * Loads a PDF and returns its page count, for validating a page-range
 * string before running the actual split.
 */
export async function getPdfPageCount(file: File): Promise<number> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  return pdf.getPageCount();
}

/**
 * Extracts the given 1-based page numbers into a single new PDF
 * (in the order given), useful for "extract these pages" mode.
 */
export async function extractPages(
  file: File,
  pageNumbers: number[]
): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const source = await PDFDocument.load(arrayBuffer);
  const output = await PDFDocument.create();

  const zeroBasedIndices = pageNumbers.map((n) => n - 1);
  const pages = await output.copyPages(source, zeroBasedIndices);
  pages.forEach((page) => output.addPage(page));

  return output.save();
}

/**
 * Splits a PDF into one file per selected page (or every page, if no
 * selection is given). Returns each result as its own named PDF, ready to
 * be downloaded individually or zipped.
 */
export async function splitEveryPage(
  file: File,
  pageNumbers?: number[]
): Promise<SplitResultFile[]> {
  const arrayBuffer = await file.arrayBuffer();
  const source = await PDFDocument.load(arrayBuffer);
  const totalPages = source.getPageCount();

  const targets = pageNumbers ?? Array.from({ length: totalPages }, (_, i) => i + 1);
  const results: SplitResultFile[] = [];

  for (const pageNumber of targets) {
    const output = await PDFDocument.create();
    const [page] = await output.copyPages(source, [pageNumber - 1]);
    output.addPage(page);
    const bytes = await output.save();
    results.push({
      name: `page-${pageNumber}.pdf`,
      bytes,
    });
  }

  return results;
}
