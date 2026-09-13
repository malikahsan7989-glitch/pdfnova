import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";

export type WatermarkPosition = "center" | "top" | "bottom" | "diagonal";

export interface WatermarkOptions {
  text: string;
  position: WatermarkPosition;
  opacity: number; // 0-1
  fontSize: number;
}

export async function addWatermark(file: File, options: WatermarkOptions): Promise<Uint8Array> {
  const { text, position, opacity, fontSize } = options;
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const font = await pdf.embedFont(StandardFonts.HelveticaBold);

  const textWidth = font.widthOfTextAtSize(text, fontSize);
  const textHeight = font.heightAtSize(fontSize);

  for (const page of pdf.getPages()) {
    const { width, height } = page.getSize();
    const centerX = width / 2 - textWidth / 2;
    const centerY = height / 2 - textHeight / 2;

    const x = centerX;
    let y = centerY;
    let rotate = 0;

    if (position === "top") {
      y = height - textHeight * 2;
    } else if (position === "bottom") {
      y = textHeight;
    } else if (position === "diagonal") {
      rotate = 45;
    }
    // "center" uses the defaults set above.

    page.drawText(text, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.4, 0.4, 0.4),
      opacity,
      rotate: degrees(rotate),
    });
  }

  return pdf.save();
}
