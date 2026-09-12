"use client";

import { useState } from "react";
import FileDropzone from "../shared/FileDropzone";
import ErrorMessage from "../shared/ErrorMessage";
import ProgressBar from "../shared/ProgressBar";
import ResultDownload from "../shared/ResultDownload";
import { compressPdf, type CompressResult } from "@/lib/pdf/compress";
import { validatePdfFile, safeFilename, formatBytes } from "@/lib/validation/fileValidation";
import { toFriendlyMessage } from "@/lib/errors";
import { downloadBlob } from "@/lib/download";

export default function CompressPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CompressResult | null>(null);

  const handleFile = (files: File[]) => {
    const selected = files[0];
    setError(null);
    setResult(null);

    try {
      validatePdfFile(selected);
      setFile(selected);
    } catch (err) {
      setFile(null);
      setError(toFriendlyMessage(err, "compress-validate"));
    }
  };

  const reset = () => {
    setFile(null);
    setError(null);
    setResult(null);
  };

  const handleCompress = async () => {
    if (!file) return;

    setError(null);
    setResult(null);

    try {
      setProcessing(true);
      const compressResult = await compressPdf(file);
      setResult(compressResult);
    } catch (err) {
      setError(toFriendlyMessage(err, "compress"));
    } finally {
      setProcessing(false);
    }
  };

  const compressedFilename = file ? safeFilename(`${file.name}-compressed`, "pdf") : "compressed.pdf";

  const reduction =
    result && result.originalSize > 0
      ? Math.round((1 - result.resultSize / result.originalSize) * 100)
      : 0;

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Compress PDF</h2>
      <p className="mt-2 text-sm text-slate-600">
        Reduce your PDF&apos;s file size directly in your browser.
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
          <strong>{file.name}</strong> · {formatBytes(file.size)}
        </div>
      )}

      {error && <ErrorMessage message={error} />}
      {processing && <ProgressBar label="Compressing your PDF…" />}

      {result && !processing && (
        <>
          <div className="mt-5 rounded-xl border border-slate-200 p-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Original size</span>
              <span className="font-semibold text-slate-900">{formatBytes(result.originalSize)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-slate-500">New size</span>
              <span className="font-semibold text-slate-900">{formatBytes(result.resultSize)}</span>
            </div>
            <div className="mt-3 border-t border-slate-100 pt-3">
              {reduction > 0 ? (
                <p className="font-medium text-green-700">
                  Reduced by about {reduction}%.
                </p>
              ) : result.resultSize > result.originalSize ? (
                <p className="font-medium text-amber-700">
                  This PDF is already efficiently encoded — the result is
                  slightly larger than the original. You can still download
                  it, or keep your original file.
                </p>
              ) : (
                <p className="font-medium text-slate-600">
                  This PDF is already well optimized — little more could be
                  saved without re-encoding embedded images, which this tool
                  doesn&apos;t do.
                </p>
              )}
            </div>
          </div>

          <ResultDownload
            message="Your compressed PDF is ready."
            filename={compressedFilename}
            onDownload={() => {
              const blob = new Blob([result.bytes as unknown as BlobPart], {
                type: "application/pdf",
              });
              downloadBlob(blob, compressedFilename);
            }}
          />
        </>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {!result && (
          <button
            onClick={handleCompress}
            disabled={processing || !file}
            className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? "Compressing…" : "Compress PDF"}
          </button>
        )}
        {file && (
          <button
            onClick={reset}
            disabled={processing}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Choose Different File
          </button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Files are processed directly in your browser and are not uploaded to our server.
      </p>
    </div>
  );
}
