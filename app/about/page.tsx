import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Foldryn",
  description:
    "Foldryn is a small set of free, browser-based PDF tools built to make everyday PDF tasks fast and simple.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About Foldryn</h1>

        <div className="mt-6 space-y-5 text-slate-600 leading-7">
          <p>
            Foldryn is a small set of focused, free PDF tools: merging,
            splitting, compressing, and converting between PDF and JPG.
            The goal is simple — make everyday PDF tasks fast, without
            clutter, accounts, or unnecessary uploads.
          </p>
          <p>
            Wherever technically possible, Foldryn processes your files
            directly in your browser rather than on a server. That means
            faster results in most cases and fewer of your files passing
            through a server at all. Each tool page tells you clearly
            whether it works this way.
          </p>
          <p>
            Foldryn is under active development. We&apos;re currently
            focused on getting five core tools right — Merge, Split,
            Compress, PDF to JPG, and JPG to PDF — before expanding further.
          </p>
          <p>
            Have feedback or run into an issue? Visit our{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact
            </a>{" "}
            page.
          </p>
        </div>
      </div>
    </main>
  );
}
