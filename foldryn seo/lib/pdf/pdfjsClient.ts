// Client-only PDF.js loader.
//
// pdfjs-dist needs its worker script configured correctly or rendering
// silently fails (or throws a fetch error) in production builds. Next.js's
// bundler (webpack/Turbopack) understands `new URL('...', import.meta.url)`
// and will emit the worker file as a static asset with the right hashed
// URL, so we don't need to manually copy files into /public.
//
// This module must only ever be imported from client components, and only
// inside an event handler / effect (dynamic import), never at module scope
// of a page, so the ~1MB+ pdfjs bundle never loads on pages that don't need it.

import type * as PdfJsNamespace from "pdfjs-dist";

let configured = false;

export async function getPdfJs(): Promise<typeof PdfJsNamespace> {
  const pdfjs = await import("pdfjs-dist");

  if (!configured) {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
    configured = true;
  }

  return pdfjs;
}
