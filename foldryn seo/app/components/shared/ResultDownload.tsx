import { Download, CheckCircle2 } from "lucide-react";

interface ResultDownloadProps {
  message: string;
  filename: string;
  onDownload: () => void;
}

/**
 * Shown after a tool finishes processing successfully. The result blob is
 * already generated and held in the parent's state — clicking Download
 * just triggers a save-as, it never re-runs any processing.
 */
export default function ResultDownload({ message, filename, onDownload }: ResultDownloadProps) {
  return (
    <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
      <div className="flex items-start gap-2">
        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-green-800">{message}</p>
          <p className="mt-0.5 truncate text-xs text-green-700">{filename}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onDownload}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 active:bg-blue-800"
      >
        <Download className="h-5 w-5" aria-hidden="true" />
        Download
      </button>
    </div>
  );
}
