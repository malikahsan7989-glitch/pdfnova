import type { CSSProperties } from "react";
import { CheckCircle2 } from "lucide-react";
import type { PageThumbnail } from "@/lib/pdf/thumbnails";

interface PageThumbnailGridProps {
  thumbnails: PageThumbnail[];
  selected: Set<number>;
  onToggle: (pageNumber: number) => void;
  imageStyle?: (pageNumber: number) => CSSProperties;
  selectedColor?: "blue" | "red";
}

export default function PageThumbnailGrid({
  thumbnails,
  selected,
  onToggle,
  imageStyle,
  selectedColor = "blue",
}: PageThumbnailGridProps) {
  const ring = selectedColor === "red" ? "border-red-500" : "border-blue-600";
  const check = selectedColor === "red" ? "text-red-600" : "text-blue-600";

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
      {thumbnails.map((thumb) => {
        const isSelected = selected.has(thumb.pageNumber);
        return (
          <button
            key={thumb.pageNumber}
            type="button"
            onClick={() => onToggle(thumb.pageNumber)}
            aria-pressed={isSelected}
            aria-label={`Page ${thumb.pageNumber}${isSelected ? ", selected" : ""}`}
            className={`group relative overflow-hidden rounded-lg border-2 bg-white transition ${
              isSelected ? `${ring} shadow-sm` : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-slate-50 p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb.dataUrl}
                alt={`Page ${thumb.pageNumber} preview`}
                className="max-h-full max-w-full object-contain transition-transform"
                style={imageStyle ? imageStyle(thumb.pageNumber) : undefined}
              />
            </div>

            <div className="flex items-center justify-between bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
              <span>Page {thumb.pageNumber}</span>
              {isSelected && <CheckCircle2 className={`h-4 w-4 ${check}`} aria-hidden="true" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
