/**
 * Triggers a "Save As" download for an in-memory Blob.
 *
 * The object URL is created fresh at click-time and revoked right after
 * the click is dispatched (on the next tick, so the browser has already
 * started the download). Nothing keeps a long-lived object URL around in
 * component state, so there's no risk of revoking it too early (before the
 * user clicks) or leaking it (forgetting to revoke at all).
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Defer revocation so the browser has time to actually start the
  // download before the URL becomes invalid.
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
