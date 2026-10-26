"use client";

import { useState } from "react";
import { RotateCw, RotateCcw } from "lucide-react";
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

export default function RotatePdf() {
  const [file, setFile] = useState<File | null>(null);
  const [thumbnails, setThumbnails] = useState<PageThumbnail[]>([]);
  const [rotations, setRotations] = useState<Record<number, number>>({});
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
    setRotations({});
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
      setError(toFriendlyMessage(err, "rotate-validate"));
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

  const applyRotation = (delta: number) => {
    if (selected.size === 0) return;
    setRotations((prev) => {
      const next = { ...prev };
      selected.forEach((pageNumber) => {
        next[pageNumber] = ((next[pageNumber] ?? 0) + delta + 360) % 360;
      });
      return next;
    });
  };

  const reset = () => {
    setFile(null);
    setThumbnails([]);
    setRotations({});
    setSelected(new Set());
    setError(null);
    setResult(null);
  };

  const handleApply = async () => {
    if (!file) return;
    const changed = Object.entries(rotations).filter(([, deg]) => deg !== 0);
    if (changed.length === 0) {
      setError("Select at least one page and rotate it before applying.");
      return;
    }

    setError(null);
    setResult(null);

    try {
      setProcessing(true);
      const { rotatePages } = await import("@/lib/pdf/rotate");
      const rotationMap: Record<number, number> = {};
      changed.forEach(([page, deg]) => {
        rotationMap[Number(page)] = deg;
      });
      const bytes = await rotatePages(file, rotationMap);
      const blob = new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
      setResult({ blob, filename: safeFilename(`${file.name}-rotated`, "pdf") });
    } catch (err) {
      setError(toFriendlyMessage(err, "rotate"));
    } finally {
      setProcessing(false);
    }
  };

  const hasChanges = Object.values(rotations).some((deg) => deg !== 0);

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Rotate PDF</h2>
      <p className="mt-2 text-sm text-slate-600">
        Select one or more pages below, then rotate them clockwise or counter-clockwise.
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
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-sm text-slate-700">
              <strong>{file.name}</strong> · {thumbnails.length} page{thumbnails.length === 1 ? "" : "s"} ·{" "}
              {selected.size} selected
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => applyRotation(-90)}
                disabled={selected.size === 0 || processing}
                className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Rotate Left
              </button>
              <button
                type="button"
                onClick={() => applyRotation(90)}
                disabled={selected.size === 0 || processing}
                className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RotateCw className="h-4 w-4" aria-hidden="true" />
                Rotate Right
              </button>
            </div>
          </div>

          <PageThumbnailGrid
            thumbnails={thumbnails}
            selected={selected}
            onToggle={toggleSelect}
            imageStyle={(pageNumber) => ({
              transform: `rotate(${rotations[pageNumber] ?? 0}deg)`,
            })}
          />
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Applying rotation…" />}

      {result && !processing && (
        <ResultDownload
          message="Your rotated PDF is ready."
          filename={result.filename}
          onDownload={() => downloadBlob(result.blob, result.filename)}
        />
      )}

      {file && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {!result && (
            <button
              onClick={handleApply}
              disabled={processing || !hasChanges}
              className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? "Applying…" : "Apply Rotation"}
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
