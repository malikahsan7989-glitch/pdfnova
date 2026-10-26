export default function ProgressBar({
  label = "Processing…",
  indeterminate = true,
  value,
}: {
  label?: string;
  indeterminate?: boolean;
  value?: number;
}) {
  return (
    <div className="mt-6" aria-live="polite">
      <p className="mb-2 text-sm font-medium text-slate-700">{label}</p>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        {indeterminate ? (
          <div className="h-full w-1/3 rounded-full bg-blue-600 progress-indeterminate" />
        ) : (
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${Math.min(100, Math.max(0, value ?? 0))}%` }}
          />
        )}
      </div>
    </div>
  );
}
