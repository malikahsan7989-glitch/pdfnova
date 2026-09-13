"use client";

import { useState } from "react";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import { validatePdfFile, safeFilename } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";
import type { WatermarkPosition } from "@/lib/pdf/watermark";

interface Result {
  blob: Blob;
  filename: string;
}

const POSITIONS: { value: WatermarkPosition; label: string }[] = [
  { value: "center", label: "Center" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
  { value: "diagonal", label: "Diagonal" },
];

export default function WatermarkPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [position, setPosition] = useState<WatermarkPosition>("diagonal");
  const [opacity, setOpacity] = useState(0.3);
  const [fontSize, setFontSize] = useState(48);
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
      setError(toFriendlyMessage(err, "watermark-validate"));
    }
  };

  const reset = () => {
    setFile(null);
    setError(null);
    setResult(null);
  };

  const handleApply = async () => {
    if (!file) return;

    if (!text.trim()) {
      setError("Enter the watermark text you'd like to apply.");
      return;
    }

    setError(null);
    setResult(null);

    try {
      setProcessing(true);
      const { addWatermark } = await import("@/lib/pdf/watermark");
      const bytes = await addWatermark(file, { text: text.trim(), position, opacity, fontSize });
      const blob = new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
      setResult({ blob, filename: safeFilename(`${file.name}-watermarked`, "pdf") });
    } catch (err) {
      setError(toFriendlyMessage(err, "watermark"));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Watermark PDF</h2>
      <p className="mt-2 text-sm text-slate-600">
        Stamp a custom text watermark across every page of your PDF.
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
            <label htmlFor="watermark-text" className="text-sm font-medium text-slate-700">
              Watermark text
            </label>
            <input
              id="watermark-text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={processing}
              maxLength={60}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">Position</p>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {POSITIONS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPosition(p.value)}
                  disabled={processing}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="watermark-opacity" className="text-sm font-medium text-slate-700">
                Opacity ({Math.round(opacity * 100)}%)
              </label>
              <input
                id="watermark-opacity"
                type="range"
                min={0.1}
                max={0.9}
                step={0.05}
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                disabled={processing}
                className="mt-3 w-full accent-blue-600"
              />
            </div>
            <div>
              <label htmlFor="watermark-size" className="text-sm font-medium text-slate-700">
                Font size ({fontSize}pt)
              </label>
              <input
                id="watermark-size"
                type="range"
                min={16}
                max={96}
                step={2}
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
                disabled={processing}
                className="mt-3 w-full accent-blue-600"
              />
            </div>
          </div>
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Applying your watermark…" />}

      {result && !processing && (
        <ResultDownload
          message="Your watermarked PDF is ready."
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
              {processing ? "Applying…" : "Apply Watermark"}
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
