"use client";

import { useState } from "react";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import PageThumbnailGrid from "../shared/PageThumbnailGrid";
import { validatePdfFile, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";
import type { PageThumbnail } from "@/lib/pdf/thumbnails";

interface Result {
  blob: Blob;
  filename: string;
}

export default function ExtractPdfPages() {
  const [file, setFile] = useState<File | null>(null);
  const [thumbnails, setThumbnails] = useState<PageThumbnail[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const handleFile = async (files: File[]) => {
    const selectedFile = files[0];
    setError(null);
    setResult(null);
    setThumbnails([]);
    setSelected(new Set());

    try {
      validatePdfFile(selectedFile);
      setFile(selectedFile);
      setLoadingPreview(true);
      const { generatePageThumbnails } = await import("@/lib/pdf/thumbnails");
      const pages = await generatePageThumbnails(selectedFile);
      setThumbnails(pages);
    } catch (err) {
      setFile(null);
      setError(toFriendlyMessage(err, "extract-pages-validate"));
    } finally {
      setLoadingPreview(false);
    }
  };

  const toggleSelect = (pageNumber: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(pageNumber)) next.delete(pageNumber);
      else next.add(pageNumber);
      return next;
    });
  };

  const reset = () => {
    setFile(null);
    setThumbnails([]);
    setSelected(new Set());
    setError(null);
    setResult(null);
  };

  const handleExtract = async () => {
    if (!file) return;

    if (selected.size === 0) {
      setError("Select at least one page to extract.");
      return;
    }

    setError(null);
    setResult(null);

    try {
      setProcessing(true);
      const { extractPages } = await import("@/lib/pdf/split");
      // Preserve original page order regardless of click order.
      const orderedPages = Array.from(selected).sort((a, b) => a - b);
      const bytes = await extractPages(file, orderedPages);
      const blob = new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
      setResult({ blob, filename: safeFilename(`${file.name}-extracted`, "pdf") });
    } catch (err) {
      setError(toFriendlyMessage(err, "extract-pages"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Extract PDF Pages</h2>
      <p className="mt-2 text-sm text-slate-600">
        Select the pages you want to keep, and save them as a new PDF.
      </p>

      {!file && (
        <div className="mt-6">
          <FileDropzone
            accept="application/pdf,.pdf"
            disabled={loadingPreview}
            label="Choose a PDF file"
            helperText="One PDF file, up to 50 MB."
            onFilesSelected={handleFile}
          />
        </div>
      )}

      {loadingPreview && <ProgressBar label="Loading page previews…" />}

      {file && thumbnails.length > 0 && !result && (
        <div className="mt-6">
          <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <strong>{file.name}</strong> · {thumbnails.length} page{thumbnails.length === 1 ? "" : "s"} ·{" "}
            {selected.size} selected to extract
          </div>

          <PageThumbnailGrid thumbnails={thumbnails} selected={selected} onToggle={toggleSelect} />
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Extracting selected pages…" />}

      {result && !processing && (
        <ResultDownload
          message="Your extracted PDF is ready."
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      {file && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {!result && (
            <button
              onClick={handleExtract}
              disabled={processing || selected.size === 0}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? "Extracting…" : `Extract ${selected.size || ""} Page${selected.size === 1 ? "" : "s"}`}
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
