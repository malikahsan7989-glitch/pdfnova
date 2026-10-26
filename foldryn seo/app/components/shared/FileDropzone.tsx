"use client";

import { useCallback, useId, useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

interface FileDropzoneProps {
  accept: string;
  multiple?: boolean;
  disabled?: boolean;
  label: string;
  helperText?: string;
  onFilesSelected: (files: File[]) => void;
}

export default function FileDropzone({
  accept,
  multiple = false,
  disabled = false,
  label,
  helperText,
  onFilesSelected,
}: FileDropzoneProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      onFilesSelected(Array.from(fileList));
    },
    [onFilesSelected]
  );

  return (
    <div
      className={`rounded-xl border-2 border-dashed p-8 text-center transition ${
        isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300"
      } ${disabled ? "pointer-events-none opacity-60" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
    >
      <UploadCloud className="mx-auto h-9 w-9 text-blue-500" aria-hidden="true" />

      <label htmlFor={inputId} className="mt-3 block cursor-pointer">
        <span className="font-semibold text-slate-900">{label}</span>
        <span className="block text-sm text-slate-500">
          Drag and drop, or tap to browse
        </span>
      </label>

      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(e) => {
          handleFiles(e.target.files);
          // Allow re-selecting the same file after a reset.
          e.target.value = "";
        }}
        className="mx-auto mt-4 block w-full max-w-xs text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700"
      />

      {helperText && (
        <p className="mt-3 text-xs text-slate-500">{helperText}</p>
      )}
    </div>
  );
}
