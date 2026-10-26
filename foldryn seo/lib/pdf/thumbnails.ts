import { getPdfJs } from "./pdfjsClient";

export interface PageThumbnail {
  pageNumber: number;
  dataUrl: string;
}

/**
 * Renders a low-resolution thumbnail image for every page of a PDF, for
 * use in page-selection UIs. Deliberately small/low-scale — these are
 * previews for picking pages, not export-quality images.
 */
export async function generatePageThumbnails(file: File): Promise<PageThumbnail[]> {
  const pdfjs = await getPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  const thumbnails: PageThumbnail[] = [];

  try {
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      // Cap thumbnail width so very large pages don't produce huge canvases.
      const scale = 220 / baseViewport.width;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Canvas rendering is not supported in this browser.");
      }

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvas, canvasContext: context, viewport }).promise;

      thumbnails.push({ pageNumber, dataUrl: canvas.toDataURL("image/jpeg", 0.7) });

      canvas.width = 0;
      canvas.height = 0;
    }
  } finally {
    await loadingTask.destroy();
  }

  return thumbnails;
}
