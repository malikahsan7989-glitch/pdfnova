"use client";

import { useState } from "react";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import { validatePdfFile, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";
import type { NumberPosition } from "@/lib/pdf/pageNumbers";

interface Result {
  blob: Blob;
  filename: string;
}

const POSITIONS: { value: NumberPosition; label: string }[] = [
  { value: "top-left", label: "Top Left" },
  { value: "top-center", label: "Top Center" },
  { value: "top-right", label: "Top Right" },
  { value: "bottom-left", label: "Bottom Left" },
  { value: "bottom-center", label: "Bottom Center" },
  { value: "bottom-right", label: "Bottom Right" },
];

export default function PdfPageNumbering() {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<NumberPosition>("bottom-center");
  const [startNumber, setStartNumber] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const handleFile = (files: File[]) => {
    const selected = files[0];
    setError(null);
    setResult(null);

    try {
      validatePdfFile(selected);
      setFile(selected);
    } catch (err) {
      setFile(null);
      setError(toFriendlyMessage(err, "page-numbering-validate"));
    }
  };

  const reset = () => {
    setFile(null);
    setError(null);
    setResult(null);
  };

  const handleApply = async () => {
    if (!file) return;

    if (!Number.isFinite(startNumber) || startNumber < 0) {
      setError("Enter a valid starting number (0 or greater).");
      return;
    }

    setError(null);
    setResult(null);

    try {
      setProcessing(true);
      const { addPageNumbers } = await import("@/lib/pdf/pageNumbers");
      const bytes = await addPageNumbers(file, { position, startNumber });
      const blob = new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
      setResult({ blob, filename: safeFilename(`${file.name}-numbered`, "pdf") });
    } catch (err) {
      setError(toFriendlyMessage(err, "page-numbering"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">PDF Page Numbering</h2>
      <p className="mt-2 text-sm text-slate-600">
        Add page numbers to every page of your PDF, in the position you choose.
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
        <div className="mt-6 space-y-5 text-left">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <strong>{file.name}</strong>
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">Position</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {POSITIONS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPosition(p.value)}
                  disabled={processing}
                  className={`rounded-lg border px-2 py-2 text-xs font-semibold transition sm:text-sm ${
                    position === p.value
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="start-number" className="text-sm font-medium text-slate-700">
              Start numbering from
            </label>
            <input
              id="start-number"
              type="number"
              min={0}
              value={startNumber}
              onChange={(e) => setStartNumber(parseInt(e.target.value, 10) || 0)}
              disabled={processing}
              className="mt-2 w-32 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Adding page numbers…" />}

      {result && !processing && (
        <ResultDownload
          message="Your numbered PDF is ready."
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      {file && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {!result && (
            <button
              onClick={handleApply}
              disabled={processing}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? "Applying…" : "Add Page Numbers"}
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
