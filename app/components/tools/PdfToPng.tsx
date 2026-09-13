"use client";

import { useState } from "react";
import JSZip from "jszip";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import { validatePdfFile, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";

interface ConvertResult {
  blob: Blob;
  filename: string;
  pageCount: number;
}

export default function PdfToPng() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ConvertResult | null>(null);

  const handleFile = (files: File[]) => {
    const selected = files[0];
    setError(null);
    setResult(null);

    try {
      validatePdfFile(selected);
      setFile(selected);
    } catch (err) {
      setFile(null);
      setError(toFriendlyMessage(err, "pdf-to-png-validate"));
    }
  };

  const reset = () => {
    setFile(null);
    setError(null);
    setResult(null);
  };

  const handleConvert = async () => {
    if (!file) return;

    setError(null);
    setResult(null);

    try {
      setProcessing(true);

      // Reuses the same rendering path as PDF to JPG, only the output
      // format differs — dynamically imported so the pdfjs bundle only
      // loads when someone actually converts a file on this page.
      const { renderPdfPagesToImage } = await import("@/lib/pdf/pdfToImage");

      const pages = await renderPdfPagesToImage(file, { format: "png", scale: 2 });
      const baseName = safeFilename(file.name, "").replace(/\.$/, "");

      if (pages.length === 1) {
        setResult({ blob: pages[0].blob, filename: `${baseName}.png`, pageCount: 1 });
      } else {
        const zip = new JSZip();
        pages.forEach((p) => {
          zip.file(`page-${p.pageNumber}.png`, p.blob);
        });
        const zipBlob = await zip.generateAsync({ type: "blob" });
        setResult({ blob: zipBlob, filename: `${baseName}.zip`, pageCount: pages.length });
      }
    } catch (err) {
      setError(toFriendlyMessage(err, "pdf-to-png"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">PDF to PNG</h2>
      <p className="mt-2 text-sm text-slate-600">
        Convert every page of your PDF into a PNG image.
      </p>

      {!file && (
        <div className="mt-6">
          <FileDropzone
            accept="application/pdf,.pdf"
            disabled={processing}
            label="Choose a PDF file"
            helperText="One PDF file, up to 50 MB."
            onFilesSelected={handleFile}
          />
        </div>
      )}

      {file && (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <strong>{file.name}</strong>
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Converting your PDF pages…" />}

      {result && !processing && (
        <ResultDownload
          message={
            result.pageCount === 1
              ? "Your PNG is ready."
              : `Your ${result.pageCount} PNGs are ready as a ZIP.`
          }
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      {file && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {!result && (
            <button
              onClick={handleConvert}
              disabled={processing}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? "Converting…" : "Convert to PNG"}
            </button>
          )}
          <button
            onClick={reset}
            disabled={processing}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Choose Different File
          </button>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-slate-500">
        Files are processed directly in your browser and are not uploaded to our server.
      </p>
    </div>
  );
}
