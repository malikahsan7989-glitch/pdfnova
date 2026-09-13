import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export type NumberPosition =
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "top-left"
  | "top-center"
  | "top-right";

export interface PageNumberOptions {
  position: NumberPosition;
  startNumber: number;
}

const MARGIN = 28;

export async function addPageNumbers(file: File, options: PageNumberOptions): Promise<Uint8Array> {
  const { position, startNumber } = options;
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontSize = 11;

  const pages = pdf.getPages();

  pages.forEach((page, index) => {
    const { width, height } = page.getSize();
    const label = String(startNumber + index);
    const textWidth = font.widthOfTextAtSize(label, fontSize);

    const isTop = position.startsWith("top");
    const y = isTop ? height - MARGIN : MARGIN - fontSize * 0.3;

    let x: number;
    if (position.endsWith("left")) {
      x = MARGIN;
    } else if (position.endsWith("right")) {
      x = width - MARGIN - textWidth;
    } else {
      x = width / 2 - textWidth / 2;
    }

    page.drawText(label, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.2, 0.2, 0.2),
    });
  });

  return pdf.save();
}
