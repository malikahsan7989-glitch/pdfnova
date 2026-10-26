// Shared file validation constants + helpers used across all PDF tools.
// Keep limits here so they're easy to tune in one place.

export const MAX_PDF_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB per PDF
export const MAX_IMAGE_SIZE_BYTES = 20 * 1024 * 1024; // 20 MB per image

export const ACCEPTED_PDF_TYPE = "application/pdf";
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(1)} ${units[unitIndex]}`;
}

export { formatBytes };

/**
 * Validates a single File as a PDF candidate.
 * Checks extension + MIME type (best-effort, browsers can report either
 * inconsistently) and file size. Does NOT verify the file is a well-formed
 * PDF — that only happens once we actually try to parse it, since that's
 * the only reliable way to know.
 */
export function validatePdfFile(file: File): void {
  if (!file) {
    throw new ValidationError("No file was provided.");
  }

  if (file.size === 0) {
    throw new ValidationError(`"${file.name}" is empty.`);
  }

  const looksLikePdf =
    file.type === ACCEPTED_PDF_TYPE ||
    file.name.toLowerCase().endsWith(".pdf");

  if (!looksLikePdf) {
    throw new ValidationError(`"${file.name}" is not a PDF file.`);
  }

  if (file.size > MAX_PDF_SIZE_BYTES) {
    throw new ValidationError(
      `"${file.name}" is ${formatBytes(file.size)}, which is over the ${formatBytes(
        MAX_PDF_SIZE_BYTES
      )} limit per file.`
    );
  }
}

/**
 * Validates a single File as an image candidate (JPG/JPEG/PNG).
 */
export function validateImageFile(file: File): void {
  if (!file) {
    throw new ValidationError("No file was provided.");
  }

  if (file.size === 0) {
    throw new ValidationError(`"${file.name}" is empty.`);
  }

  const lowerName = file.name.toLowerCase();
  const looksLikeImage =
    ACCEPTED_IMAGE_TYPES.includes(file.type) ||
    lowerName.endsWith(".jpg") ||
    lowerName.endsWith(".jpeg") ||
    lowerName.endsWith(".png");

  if (!looksLikeImage) {
    throw new ValidationError(`"${file.name}" is not a JPG or PNG image.`);
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    throw new ValidationError(
      `"${file.name}" is ${formatBytes(file.size)}, which is over the ${formatBytes(
        MAX_IMAGE_SIZE_BYTES
      )} limit per image.`
    );
  }
}

/**
 * Parses a page-range string like "1,3,5-8" into a sorted, de-duplicated
 * array of 1-based page numbers, validated against the document's total
 * page count.
 */
export function parsePageRanges(input: string, totalPages: number): number[] {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new ValidationError("Enter at least one page or page range.");
  }

  const pages = new Set<number>();
  const segments = trimmed.split(",").map((s) => s.trim()).filter(Boolean);

  if (segments.length === 0) {
    throw new ValidationError("Enter at least one page or page range.");
  }

  for (const segment of segments) {
    const rangeMatch = segment.match(/^(\d+)\s*-\s*(\d+)$/);
    const singleMatch = segment.match(/^(\d+)$/);

    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10);
      const end = parseInt(rangeMatch[2], 10);

      if (start < 1 || end < 1) {
        throw new ValidationError(
          `"${segment}" contains a page number below 1.`
        );
      }
      if (start > end) {
        throw new ValidationError(
          `"${segment}" is not a valid range (start is after end).`
        );
      }
      if (end > totalPages) {
        throw new ValidationError(
          `"${segment}" goes beyond the document's ${totalPages} page${
            totalPages === 1 ? "" : "s"
          }.`
        );
      }
      for (let p = start; p <= end; p += 1) pages.add(p);
    } else if (singleMatch) {
      const page = parseInt(singleMatch[1], 10);
      if (page < 1) {
        throw new ValidationError(`"${segment}" is not a valid page number.`);
      }
      if (page > totalPages) {
        throw new ValidationError(
          `Page ${page} is beyond the document's ${totalPages} page${
            totalPages === 1 ? "" : "s"
          }.`
        );
      }
      pages.add(page);
    } else {
      throw new ValidationError(
        `"${segment}" isn't a valid page or range. Use formats like "1,3,5-8".`
      );
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

/**
 * Produces a safe, collision-resistant output filename for downloads.
 */
export function safeFilename(base: string, extension: string): string {
  const cleanBase = base
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-zA-Z0-9-_ ]/g, "")
    .trim()
    .slice(0, 60);
  const stamp = new Date().toISOString().slice(0, 10);
  const name = cleanBase || "file";
  return `${name}-${stamp}.${extension}`;
}
