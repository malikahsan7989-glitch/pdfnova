import { PDFDocument, degrees } from "pdf-lib";

/**
 * Applies a rotation (in degrees, added to whatever rotation the page
 * already has) to specific pages of a PDF. `rotations` maps 1-based page
 * numbers to the additional rotation to apply (e.g. 90 or -90). Pages not
 * present in the map are left untouched.
 */
export async function rotatePages(
  file: File,
  rotations: Record<number, number>
): Promise<Uint8Array> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const pageCount = pdf.getPageCount();

  for (const [pageNumberStr, degreesToAdd] of Object.entries(rotations)) {
    const pageNumber = parseInt(pageNumberStr, 10);
    if (pageNumber < 1 || pageNumber > pageCount || degreesToAdd === 0) continue;

    const page = pdf.getPage(pageNumber - 1);
    const currentAngle = page.getRotation().angle;
    page.setRotation(degrees(currentAngle + degreesToAdd));
  }

  return pdf.save();
}
