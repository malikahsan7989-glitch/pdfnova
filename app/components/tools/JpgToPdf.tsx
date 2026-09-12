"use client";

import { useState } from "react";
import { GripVertical, X, Image as ImageIcon } from "lucide-react";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import { imagesToPdf, type PageSizeOption } from "@/lib/pdf/jpgToPdf";
import { validateImageFile, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";

interface ConvertResult {
  blob: Blob;
  filename: string;
}

export default function JpgToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeOption>("auto");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ConvertResult | null>(null);

  const addFiles = (newFiles: File[]) => {
    setError(null);
    setResult(null);
    try {
      newFiles.forEach(validateImageFile);
    } catch (err) {
      setError(toFriendlyMessage(err, "jpg-to-pdf-validate"));
      return;
    }
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setResult(null);
  };

  const moveFile = (index: number, direction: -1 | 1) => {
    setFiles((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
    setResult(null);
  };

  const reset = () => {
    setFiles([]);
    setError(null);
    setResult(null);
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setError("Please select at least one JPG or PNG image.");
      return;
    }

    setError(null);
    setResult(null);

    try {
      setProcessing(true);
      const bytes = await imagesToPdf(files, pageSize);
      const blob = new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
      setResult({ blob, filename: safeFilename("images", "pdf") });
    } catch (err) {
      setError(toFriendlyMessage(err, "jpg-to-pdf"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">JPG to PDF</h2>
      <p className="mt-2 text-sm text-slate-600">
        Combine one or more JPG or PNG images into a single PDF.
      </p>

      <div className="mt-6">
        <FileDropzone
          accept="image/jpeg,image/png,.jpg,.jpeg,.png"
          multiple
          disabled={processing}
          label="Choose images"
          helperText="JPG or PNG, up to 20 MB each."
          onFilesSelected={addFiles}
        />
      </div>

      {files.length > 0 && (
        <>
          <ul className="mt-5 space-y-2 text-left">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <ImageIcon className="h-4 w-4 flex-shrink-0 text-slate-400" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate text-sm text-slate-700">
                  {index + 1}. {file.name}
                </span>
                <button
                  type="button"
                  aria-label={`Move ${file.name} up`}
                  disabled={processing || index === 0}
                  onClick={() => moveFile(index, -1)}
                  className="rounded p-1 text-slate-400 hover:text-blue-600 disabled:opacity-30"
                >
                  <GripVertical className="h-4 w-4 rotate-90" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  disabled={processing}
                  onClick={() => removeFile(index)}
                  className="rounded p-1 text-slate-400 hover:text-red-600 disabled:opacity-30"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <p className="text-sm font-medium text-slate-700">Page size</p>
            <div className="mt-2 flex gap-2 rounded-xl bg-slate-100 p-1">
              {(["auto", "a4", "letter"] as PageSizeOption[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPageSize(size)}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-semibold capitalize transition ${
                    pageSize === size ? "bg-white shadow-sm" : "text-slate-500"
                  }`}
                >
                  {size === "a4" ? "A4" : size}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Building your PDF…" />}

      {result && !processing && (
        <ResultDownload
          message="Your PDF is ready."
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {!result && (
          <button
            onClick={handleConvert}
            disabled={processing || files.length === 0}
            className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? "Converting…" : "Convert to PDF"}
          </button>
        )}
        {files.length > 0 && (
          <button
            onClick={reset}
            disabled={processing}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Reset
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Files are processed directly in your browser and are not uploaded to our server.
      </p>
    </div>
  );
}
