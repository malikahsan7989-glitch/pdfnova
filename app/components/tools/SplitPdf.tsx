"use client";

import { useState } from "react";
import JSZip from "jszip";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import { getPdfPageCount, extractPages, splitEveryPage } from "@/lib/pdf/split";
import { validatePdfFile, parsePageRanges, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";

type Mode = "range" | "every";

interface SplitResult {
  blob: Blob;
  filename: string;
  fileCount: number;
}

export default function SplitPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [mode, setMode] = useState<Mode>("range");
  const [rangeInput, setRangeInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SplitResult | null>(null);

  const handleFile = async (files: File[]) => {
    const selected = files[0];
    setError(null);
    setResult(null);
    setPageCount(null);

    try {
      validatePdfFile(selected);
      const count = await getPdfPageCount(selected);
      setFile(selected);
      setPageCount(count);
    } catch (err) {
      setFile(null);
      setError(toFriendlyMessage(err, "split-validate"));
    }
  };

  const reset = () => {
    setFile(null);
    setPageCount(null);
    setRangeInput("");
    setError(null);
    setResult(null);
  };

  const handleSplit = async () => {
    if (!file || !pageCount) return;

    setError(null);
    setResult(null);

    try {
      setProcessing(true);

      if (mode === "range") {
        const pages = parsePageRanges(rangeInput, pageCount);
        const bytes = await extractPages(file, pages);
        const blob = new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
        setResult({
          blob,
          filename: safeFilename(`${file.name}-extracted`, "pdf"),
          fileCount: 1,
        });
      } else {
        const results = await splitEveryPage(file);

        if (results.length === 1) {
          const blob = new Blob([results[0].bytes as unknown as BlobPart], {
            type: "application/pdf",
          });
          setResult({
            blob,
            filename: safeFilename(`${file.name}-page-1`, "pdf"),
            fileCount: 1,
          });
        } else {
          const zip = new JSZip();
          results.forEach((r) => zip.file(r.name, r.bytes));
          const zipBlob = await zip.generateAsync({ type: "blob" });
          setResult({
            blob: zipBlob,
            filename: safeFilename(`${file.name}-split`, "zip"),
            fileCount: results.length,
          });
        }
      }
    } catch (err) {
      setError(toFriendlyMessage(err, "split"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Split PDF</h2>
      <p className="mt-2 text-sm text-slate-600">
        Extract specific pages, or split every page into its own file.
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

      {file && pageCount !== null && !result && (
        <div className="mt-6">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <strong>{file.name}</strong> · {pageCount} page{pageCount === 1 ? "" : "s"}
          </div>

          <div className="mt-5 flex gap-2 rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode("range")}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                mode === "range" ? "bg-white shadow-sm" : "text-slate-500"
              }`}
            >
              Extract pages
            </button>
            <button
              type="button"
              onClick={() => setMode("every")}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                mode === "every" ? "bg-white shadow-sm" : "text-slate-500"
              }`}
            >
              Split every page
            </button>
          </div>

          {mode === "range" && (
            <div className="mt-5 text-left">
              <label htmlFor="page-ranges" className="text-sm font-medium text-slate-700">
                Pages to extract
              </label>
              <input
                id="page-ranges"
                type="text"
                inputMode="numeric"
                placeholder="e.g. 1,3,5-8"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                disabled={processing}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <p className="mt-2 text-xs text-slate-500">
                Separate pages with commas, and use a dash for ranges. All selected pages become a single PDF.
              </p>
            </div>
          )}

          {mode === "every" && (
            <p className="mt-5 text-sm text-slate-600">
              This will produce {pageCount} separate PDF file{pageCount === 1 ? "" : "s"}
              {pageCount > 1 ? ", downloaded together as a ZIP." : "."}
            </p>
          )}
        </div>
      )}

      {file && result && (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <strong>{file.name}</strong> · {pageCount} page{pageCount === 1 ? "" : "s"}
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Splitting your PDF…" />}

      {result && !processing && (
        <ResultDownload
          message={
            result.fileCount > 1
              ? `Your PDF was split into ${result.fileCount} files.`
              : "Your PDF is ready."
          }
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      {file && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {!result && (
            <button
              onClick={handleSplit}
              disabled={processing || (mode === "range" && !rangeInput.trim())}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? "Splitting…" : "Split PDF"}
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
