import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Foldryn",
  description: "How Foldryn uses cookies and similar technologies.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Cookie Policy</h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-8 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">What Cookies Are</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device by your
              browser. They can be used for things like remembering
              preferences, understanding how a site is used, or delivering
              relevant ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Current Use</h2>
            <p className="mt-3">
              Foldryn&apos;s PDF tools do not use cookies — file processing
              happens locally in your browser and doesn&apos;t require them.
              Our hosting provider may set minimal technical cookies
              necessary to serve the site reliably.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Future Use</h2>
            <p className="mt-3">
              If we add analytics or advertising in the future, those
              services may set their own cookies to measure usage or serve
              ads. We will update this page to describe exactly what&apos;s
              in use and how you can manage or opt out of them, consistent
              with our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Managing Cookies</h2>
            <p className="mt-3">
              Most browsers let you view, block, or delete cookies through
              their settings. Blocking cookies is unlikely to affect
              Foldryn&apos;s core tools, since they don&apos;t rely on them.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
