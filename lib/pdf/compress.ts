import { PDFDocument } from "pdf-lib";

export interface CompressResult {
  bytes: Uint8Array;
  originalSize: number;
  resultSize: number;
}

/**
 * "Compresses" a PDF using pdf-lib's realistic capabilities: re-saving the
 * document with object streams enabled, which can shrink PDFs that have a
 * lot of shared/repeated objects (forms, large page trees, etc.).
 *
 * IMPORTANT (honesty): pdf-lib does not re-encode or downsample embedded
 * images the way a server-side pipeline (e.g. Ghostscript/MuPDF) can. For
 * PDFs whose size is dominated by high-resolution images, this will not
 * meaningfully shrink the file, and the result can occasionally end up
 * larger than the original. Callers should surface both sizes to the user
 * and let them decide.
 */
export async function compressPdf(file: File): Promise<CompressResult> {
  const arrayBuffer = await file.arrayBuffer();
  const originalSize = file.size;

  const pdf = await PDFDocument.load(arrayBuffer, {
    updateMetadata: false,
  });

  // Object streams let multiple PDF objects share one compressed stream,
  // which is the main lever pdf-lib gives us for size reduction.
  const bytes = await pdf.save({
    useObjectStreams: true,
    addDefaultPage: false,
  });

  return {
    bytes,
    originalSize,
    resultSize: bytes.byteLength,
  };
}
