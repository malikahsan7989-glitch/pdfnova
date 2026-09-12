import { getPdfJs } from "./pdfjsClient";

export interface PageImageResult {
  pageNumber: number;
  blob: Blob;
}

/**
 * Renders every page of a PDF file to a JPG Blob using PDF.js + a canvas.
 * `scale` controls output resolution (2 ≈ good print/zoom quality,
 * 1 ≈ smaller/faster). `quality` is the JPEG encoder quality (0-1).
 */
export async function renderPdfPagesToJpg(
  file: File,
  options: { scale?: number; quality?: number } = {}
): Promise<PageImageResult[]> {
  const { scale = 2, quality = 0.9 } = options;
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

      // Fill white first - JPG has no transparency, and PDF pages without
      // an explicit background would otherwise render as black.
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvas, canvasContext: context, viewport }).promise;

      const blob: Blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Failed to encode page as JPG."))),
          "image/jpeg",
          quality
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
