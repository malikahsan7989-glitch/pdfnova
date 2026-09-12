import { ValidationError } from "./validation/fileValidation";

/**
 * Converts any thrown error into a friendly, user-facing message.
 * Known validation errors pass through as-is. Everything else (corrupt
 * PDFs, encrypted PDFs, pdf-lib parse failures, out-of-memory, etc.) is
 * mapped to a generic but honest message. The real error is still logged
 * to the console for debugging.
 */
export function toFriendlyMessage(error: unknown, context: string): string {
  if (error instanceof ValidationError) {
    return error.message;
  }

  console.error(`[${context}]`, error);

  const raw = error instanceof Error ? error.message.toLowerCase() : "";

  if (raw.includes("encrypted") || raw.includes("password")) {
    return "This PDF is password-protected. Please remove the password and try again.";
  }

  if (
    raw.includes("invalid pdf") ||
    raw.includes("failed to parse") ||
    raw.includes("corrupt") ||
    raw.includes("no pdf header")
  ) {
    return "This file could not be read as a valid PDF. Please check the file and try again.";
  }

  if (raw.includes("out of memory") || raw.includes("allocation failed")) {
    return "This file is too large for your browser to process. Try a smaller file.";
  }

  return "Something went wrong while processing your file. Please check the file and try again.";
}
