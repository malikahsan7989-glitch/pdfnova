import { getPdfJs } from "./pdfjsClient";

export interface PageImageResult {
  pageNumber: number;
  blob: Blob;
}

export type ImageFormat = "jpeg" | "png";

/**
 * Renders every page of a PDF file to an image Blob (JPG or PNG) using
 * PDF.js + a canvas. `scale` controls output resolution (2 ≈ good
 * print/zoom quality, 1 ≈ smaller/faster). `quality` only affects JPEG
 * output (PNG is always lossless).
 */
export async function renderPdfPagesToImage(
  file: File,
  options: { format?: ImageFormat; scale?: number; quality?: number } = {}
): Promise<PageImageResult[]> {
  const { format = "jpeg", scale = 2, quality = 0.9 } = options;
  const mimeType = format === "png" ? "image/png" : "image/jpeg";
  const pdfjs = await getPdfJs();

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  const results: PageImageResult[] = [];

  try {
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Canvas rendering is not supported in this browser.");
      }

      // JPG has no transparency, so fill white first to avoid a black
      // background on pages without one. PNG supports transparency, but
      // filling white here matches what the page actually looks like when
      // viewed normally, rather than producing a see-through PNG that
      // looks wrong when placed on a dark background elsewhere.
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvas, canvasContext: context, viewport }).promise;

      const blob: Blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error(`Failed to encode page as ${format.toUpperCase()}.`))),
          mimeType,
          format === "jpeg" ? quality : undefined
        );
      });

      results.push({ pageNumber, blob });

      // Release canvas memory before moving to the next page.
      canvas.width = 0;
      canvas.height = 0;
    }
  } finally {
    await loadingTask.destroy();
  }

  return results;
}

/**
 * Kept for the existing PDF to JPG tool — unchanged behavior, now
 * implemented as a thin wrapper around the generalized renderer.
 */
export async function renderPdfPagesToJpg(
  file: File,
  options: { scale?: number; quality?: number } = {}
): Promise<PageImageResult[]> {
  return renderPdfPagesToImage(file, { ...options, format: "jpeg" });
}
