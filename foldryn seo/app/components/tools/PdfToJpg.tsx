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

type Quality = "standard" | "high";

interface ConvertResult {
  blob: Blob;
  filename: string;
  pageCount: number;
}

export default function PdfToJpg() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<Quality>("standard");
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
      setError(toFriendlyMessage(err, "pdf-to-jpg-validate"));
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

      // Dynamically imported so the ~1MB pdfjs bundle only ever loads when
      // someone actually converts a file on this page.
      const { renderPdfPagesToJpg } = await import("@/lib/pdf/pdfToImage");

      const pages = await renderPdfPagesToJpg(file, {
        scale: quality === "high" ? 3 : 2,
        quality: quality === "high" ? 0.95 : 0.85,
      });

      const baseName = safeFilename(file.name, "").replace(/\.$/, "");

      if (pages.length === 1) {
        setResult({ blob: pages[0].blob, filename: `${baseName}.jpg`, pageCount: 1 });
      } else {
        const zip = new JSZip();
        pages.forEach((p) => {
          zip.file(`page-${p.pageNumber}.jpg`, p.blob);
        });
        const zipBlob = await zip.generateAsync({ type: "blob" });
        setResult({ blob: zipBlob, filename: `${baseName}.zip`, pageCount: pages.length });
      }
    } catch (err) {
      setError(toFriendlyMessage(err, "pdf-to-jpg"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">PDF to JPG</h2>
      <p className="mt-2 text-sm text-slate-600">
        Convert every page of your PDF into a JPG image.
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

      {file && !result && (
        <div className="mt-6 space-y-5">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <strong>{file.name}</strong>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">Image quality</p>
            <div className="mt-2 flex gap-2 rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setQuality("standard")}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  quality === "standard" ? "bg-white shadow-sm" : "text-slate-500"
                }`}
              >
                Standard
              </button>
              <button
                type="button"
                onClick={() => setQuality("high")}
                className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  quality === "high" ? "bg-white shadow-sm" : "text-slate-500"
                }`}
              >
                High resolution
              </button>
            </div>
          </div>
        </div>
      )}

      {file && result && (
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
              ? "Your JPG is ready."
              : `Your ${result.pageCount} JPGs are ready as a ZIP.`
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
              {processing ? "Converting…" : "Convert to JPG"}
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
