import { PDFDocument, PageSizes } from "pdf-lib";

export type PageSizeOption = "auto" | "a4" | "letter";

const A4: [number, number] = PageSizes.A4; // [595.28, 841.89] pt
const LETTER: [number, number] = PageSizes.Letter; // [612, 792] pt
const PAGE_MARGIN = 24; // pt, only used for fixed page sizes

/**
 * Converts a list of JPG/PNG images into a single PDF, one image per page.
 * - "auto": each page is sized exactly to its image (no borders/margins).
 * - "a4" / "letter": each image is scaled down to fit within a fixed page
 *   size (with a small margin), preserving aspect ratio and orientation.
 */
export async function imagesToPdf(
  files: File[],
  pageSize: PageSizeOption = "auto"
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const isPng = file.type === "image/png" || file.name.toLowerCase().endsWith(".png");

    const image = isPng ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
    const { width: imgWidth, height: imgHeight } = image;

    if (pageSize === "auto") {
      const page = pdf.addPage([imgWidth, imgHeight]);
      page.drawImage(image, { x: 0, y: 0, width: imgWidth, height: imgHeight });
      continue;
    }

    const [baseWidth, baseHeight] = pageSize === "a4" ? A4 : LETTER;
    // Match page orientation to the image so wide photos aren't shrunk
    // down to fit inside a tall page unnecessarily.
    const isLandscapeImage = imgWidth > imgHeight;
    const pageWidth = isLandscapeImage ? Math.max(baseWidth, baseHeight) : Math.min(baseWidth, baseHeight);
    const pageHeight = isLandscapeImage ? Math.min(baseWidth, baseHeight) : Math.max(baseWidth, baseHeight);

    const page = pdf.addPage([pageWidth, pageHeight]);

    const maxWidth = pageWidth - PAGE_MARGIN * 2;
    const maxHeight = pageHeight - PAGE_MARGIN * 2;
    const scale = Math.min(maxWidth / imgWidth, maxHeight / imgHeight, 1);

    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const x = (pageWidth - drawWidth) / 2;
    const y = (pageHeight - drawHeight) / 2;

    page.drawImage(image, { x, y, width: drawWidth, height: drawHeight });
  }

  return pdf.save();
}
