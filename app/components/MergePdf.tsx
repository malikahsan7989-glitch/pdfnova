"use client";

import { useState } from "react";
import { GripVertical, X, FileText } from "lucide-react";
import FileDropzone from "./shared/FileDropzone";
import ErrorMessage from "./shared/ErrorMessage";
import ProgressBar from "./shared/ProgressBar";
import ResultDownload from "./shared/ResultDownload";
import { mergePdfs } from "@/lib/pdf/merge";
import { validatePdfFile, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";

interface MergeResult {
  blob: Blob;
  filename: string;
}

export default function MergePdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MergeResult | null>(null);

  const addFiles = (newFiles: File[]) => {
    setError(null);
    setResult(null);
    try {
      newFiles.forEach(validatePdfFile);
    } catch (err) {
      setError(toFriendlyMessage(err, "merge-validate"));
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

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please select at least 2 PDF files to merge.");
      return;
    }

    setError(null);
    setResult(null);

    try {
      setMerging(true);
      const mergedBytes = await mergePdfs(files);
      const blob = new Blob([mergedBytes as unknown as BlobPart], {
        type: "application/pdf",
      });
      setResult({ blob, filename: safeFilename("merged", "pdf") });
    } catch (err) {
      setError(toFriendlyMessage(err, "merge"));
    } finally {
      setMerging(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Merge PDF</h2>
      <p className="mt-2 text-sm text-slate-600">
        Select two or more PDF files and combine them into one PDF, in the order shown below.
      </p>

      <div className="mt-6">
        <FileDropzone
          accept="application/pdf,.pdf"
          multiple
          disabled={merging}
          label="Choose PDF files"
          helperText="PDF files only, up to 50 MB each."
          onFilesSelected={addFiles}
        />
      </div>

      {files.length > 0 && (
        <ul className="mt-5 space-y-2 text-left">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <FileText className="h-4 w-4 flex-shrink-0 text-slate-400" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate text-sm text-slate-700">
                {index + 1}. {file.name}
              </span>
              <button
                type="button"
                aria-label={`Move ${file.name} up`}
                disabled={merging || index === 0}
                onClick={() => moveFile(index, -1)}
                className="rounded p-1 text-slate-400 hover:text-blue-600 disabled:opacity-30"
              >
                <GripVertical className="h-4 w-4 rotate-90" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                disabled={merging}
                onClick={() => removeFile(index)}
                className="rounded p-1 text-slate-400 hover:text-red-600 disabled:opacity-30"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <ErrorMessage message={error} />}
      {merging && <ProgressBar label="Merging your PDFs…" />}

      {result && !merging && (
        <ResultDownload
          message="Your PDFs have been merged."
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {!result ? (
          <button
            onClick={handleMerge}
            disabled={merging || files.length < 2}
            className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {merging ? "Merging…" : "Merge PDFs"}
          </button>
        ) : null}
        {files.length > 0 && (
          <button
            onClick={reset}
            disabled={merging}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            {result ? "Merge More Files" : "Reset"}
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Files are processed directly in your browser and are not uploaded to our server.
      </p>
    </div>
  );
}
