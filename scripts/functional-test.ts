import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { mergePdfs } from "../lib/pdf/merge";
import { getPdfPageCount, extractPages, splitEveryPage } from "../lib/pdf/split";
import { compressPdf } from "../lib/pdf/compress";
import { imagesToPdf } from "../lib/pdf/jpgToPdf";
import { rotatePages } from "../lib/pdf/rotate";
import { deletePages } from "../lib/pdf/deletePages";
import { addWatermark } from "../lib/pdf/watermark";
import { addPageNumbers } from "../lib/pdf/pageNumbers";
import {
  validatePdfFile,
  validateImageFile,
  parsePageRanges,
  ValidationError,
} from "../lib/validation/fileValidation";

let passCount = 0;
let failCount = 0;

function check(name: string, cond: boolean, detail = "") {
  if (cond) {
    passCount += 1;
    console.log(`PASS - ${name}${detail ? " (" + detail + ")" : ""}`);
  } else {
    failCount += 1;
    console.log(`FAIL - ${name}${detail ? " (" + detail + ")" : ""}`);
  }
}

async function expectThrow(name: string, fn: () => Promise<unknown> | unknown) {
  try {
    await fn();
    check(name, false, "expected an error but none was thrown");
  } catch (err) {
    check(name, true, (err as Error).message);
  }
}

async function makeSamplePdfBytes(pages: number, label: string): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  for (let i = 0; i < pages; i += 1) {
    const page = doc.addPage([300, 300]);
    page.drawText(`${label} page ${i + 1}`, { x: 20, y: 150, size: 20, font, color: rgb(0, 0, 0) });
  }
  return doc.save();
}

async function makeSampleJpegBytes(): Promise<Uint8Array> {
  // Minimal valid baseline JPEG isn't trivial to hand-roll, so instead we
  // embed a PNG (pdf-lib's PNG path) — this exercises the PNG branch of
  // imagesToPdf, which is the code path we can construct deterministically
  // without a browser canvas.
  const doc = await PDFDocument.create();
  void doc;
  // 1x1 red PNG, base64-encoded.
  const pngBase64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
  return Uint8Array.from(Buffer.from(pngBase64, "base64"));
}

function toFile(bytes: Uint8Array, name: string, type: string): File {
  return new File([bytes as unknown as BlobPart], name, { type });
}

async function main() {
  console.log("=== Merge PDF ===");
  {
    const a = await makeSamplePdfBytes(2, "A");
    const b = await makeSamplePdfBytes(3, "B");
    const fileA = toFile(a, "a.pdf", "application/pdf");
    const fileB = toFile(b, "b.pdf", "application/pdf");

    const merged = await mergePdfs([fileA, fileB]);
    const mergedDoc = await PDFDocument.load(merged);
    check("merge: 2 PDFs -> combined page count", mergedDoc.getPageCount() === 5, `got ${mergedDoc.getPageCount()}`);

    const c = await makeSamplePdfBytes(1, "C");
    const merged3 = await mergePdfs([fileA, fileB, toFile(c, "c.pdf", "application/pdf")]);
    const merged3Doc = await PDFDocument.load(merged3);
    check("merge: 3+ PDFs -> combined page count", merged3Doc.getPageCount() === 6, `got ${merged3Doc.getPageCount()}`);

    await expectThrow("merge: corrupt PDF throws", async () => {
      const corrupt = toFile(new TextEncoder().encode("not a pdf"), "bad.pdf", "application/pdf");
      await mergePdfs([fileA, corrupt]);
    });

    check(
      "validate: rejects non-PDF file",
      (() => {
        try {
          validatePdfFile(toFile(new Uint8Array([1, 2, 3]), "photo.jpg", "image/jpeg"));
          return false;
        } catch (e) {
          return e instanceof ValidationError;
        }
      })()
    );

    check(
      "validate: rejects empty file",
      (() => {
        try {
          validatePdfFile(toFile(new Uint8Array([]), "empty.pdf", "application/pdf"));
          return false;
        } catch (e) {
          return e instanceof ValidationError;
        }
      })()
    );
  }

  console.log("\n=== Split PDF ===");
  {
    const bytes = await makeSamplePdfBytes(8, "S");
    const file = toFile(bytes, "sample.pdf", "application/pdf");

    const count = await getPdfPageCount(file);
    check("split: page count detection", count === 8, `got ${count}`);

    const singlePages = parsePageRanges("3", count);
    check("split: parse single page", singlePages.length === 1 && singlePages[0] === 3);

    const rangePages = parsePageRanges("1,3,5-8", count);
    check(
      "split: parse '1,3,5-8'",
      JSON.stringify(rangePages) === JSON.stringify([1, 3, 5, 6, 7, 8]),
      JSON.stringify(rangePages)
    );

    const extracted = await extractPages(file, rangePages);
    const extractedDoc = await PDFDocument.load(extracted);
    check("split: extractPages produces correct page count", extractedDoc.getPageCount() === 6, `got ${extractedDoc.getPageCount()}`);

    await expectThrow("split: invalid range (out of bounds) throws", async () => {
      parsePageRanges("1,20", count);
    });

    await expectThrow("split: invalid range (start > end) throws", async () => {
      parsePageRanges("5-2", count);
    });

    await expectThrow("split: garbage input throws", async () => {
      parsePageRanges("abc", count);
    });

    const every = await splitEveryPage(file);
    check("split: every-page split produces one file per page", every.length === 8, `got ${every.length}`);
    const firstSplitDoc = await PDFDocument.load(every[0].bytes);
    check("split: each split file has exactly 1 page", firstSplitDoc.getPageCount() === 1);
  }

  console.log("\n=== Compress PDF ===");
  {
    const bytes = await makeSamplePdfBytes(5, "C");
    const file = toFile(bytes, "compress-me.pdf", "application/pdf");
    const result = await compressPdf(file);
    check(
      "compress: returns valid PDF with size info",
      result.bytes.byteLength > 0 && result.originalSize === file.size && result.resultSize === result.bytes.byteLength
    );
    const compressedDoc = await PDFDocument.load(result.bytes);
    check("compress: page count preserved", compressedDoc.getPageCount() === 5);

    await expectThrow("compress: invalid PDF throws", async () => {
      const corrupt = toFile(new TextEncoder().encode("garbage"), "bad.pdf", "application/pdf");
      await compressPdf(corrupt);
    });
  }

  console.log("\n=== JPG/PNG to PDF ===");
  {
    const pngBytes = await makeSampleJpegBytes();
    const imgFile = toFile(pngBytes, "photo.png", "image/png");

    validateImageFile(imgFile); // should not throw

    const pdfBytes = await imagesToPdf([imgFile], "auto");
    const doc = await PDFDocument.load(pdfBytes);
    check("jpgToPdf: single image -> 1 page PDF (auto)", doc.getPageCount() === 1);

    const pdfBytes2 = await imagesToPdf([imgFile, imgFile], "a4");
    const doc2 = await PDFDocument.load(pdfBytes2);
    check("jpgToPdf: multiple images -> matching page count (A4)", doc2.getPageCount() === 2);
    const [w, h] = [doc2.getPage(0).getWidth(), doc2.getPage(0).getHeight()];
    check("jpgToPdf: A4 page has fixed dimensions", Math.round(w) === 595 || Math.round(h) === 842 || Math.round(w) === 842, `${w}x${h}`);

    const pdfBytesLetter = await imagesToPdf([imgFile], "letter");
    const docLetter = await PDFDocument.load(pdfBytesLetter);
    check("jpgToPdf: Letter page size produces a page", docLetter.getPageCount() === 1);

    await expectThrow("jpgToPdf: non-image file rejected by validator", async () => {
      validateImageFile(toFile(new TextEncoder().encode("not an image"), "doc.pdf", "application/pdf"));
    });

    await expectThrow("jpgToPdf: oversized image rejected by validator", async () => {
      const big = new Uint8Array(21 * 1024 * 1024); // 21MB > 20MB limit
      validateImageFile(toFile(big, "huge.jpg", "image/jpeg"));
    });
  }

  console.log("\n=== Rotate PDF ===");
  {
    const bytes = await makeSamplePdfBytes(3, "R");
    const file = toFile(bytes, "rotate-me.pdf", "application/pdf");
    const rotated = await rotatePages(file, { 1: 90, 3: 180 });
    const doc = await PDFDocument.load(rotated);
    check("rotate: page 1 rotated by 90", doc.getPage(0).getRotation().angle === 90);
    check("rotate: page 2 untouched", doc.getPage(1).getRotation().angle === 0);
    check("rotate: page 3 rotated by 180", doc.getPage(2).getRotation().angle === 180);
    check("rotate: page count unchanged", doc.getPageCount() === 3);
  }

  console.log("\n=== Delete PDF Pages ===");
  {
    const bytes = await makeSamplePdfBytes(5, "D");
    const file = toFile(bytes, "delete-me.pdf", "application/pdf");
    const result = await deletePages(file, [2, 4]);
    const doc = await PDFDocument.load(result);
    check("delete: removes correct number of pages", doc.getPageCount() === 3, `got ${doc.getPageCount()}`);

    await expectThrow("delete: refuses to delete every page", async () => {
      await deletePages(file, [1, 2, 3, 4, 5]);
    });
  }

  console.log("\n=== Watermark PDF ===");
  {
    const bytes = await makeSamplePdfBytes(2, "W");
    const file = toFile(bytes, "watermark-me.pdf", "application/pdf");
    const result = await addWatermark(file, {
      text: "CONFIDENTIAL",
      position: "diagonal",
      opacity: 0.3,
      fontSize: 48,
    });
    const doc = await PDFDocument.load(result);
    check("watermark: produces valid PDF", doc.getPageCount() === 2);

    await expectThrow("watermark: invalid PDF throws", async () => {
      const corrupt = toFile(new TextEncoder().encode("garbage"), "bad.pdf", "application/pdf");
      await addWatermark(corrupt, { text: "X", position: "center", opacity: 0.3, fontSize: 24 });
    });
  }

  console.log("\n=== PDF Page Numbering ===");
  {
    const bytes = await makeSamplePdfBytes(3, "N");
    const file = toFile(bytes, "number-me.pdf", "application/pdf");
    const result = await addPageNumbers(file, { position: "bottom-center", startNumber: 5 });
    const doc = await PDFDocument.load(result);
    check("page-numbers: produces valid PDF with same page count", doc.getPageCount() === 3);
  }

  console.log(`\n${passCount} passed, ${failCount} failed`);
  if (failCount > 0) process.exit(1);
}

main().catch((err) => {
  console.error("Test run crashed:", err);
  process.exit(1);
});
