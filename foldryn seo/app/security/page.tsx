import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | Foldryn",
  description: "How Foldryn approaches the security of your files and data.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Security</h1>

        <div className="mt-8 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Browser-Based Processing</h2>
            <p className="mt-3">
              All of Foldryn&apos;s tools process your files locally in your
              browser rather than on a server. This means your PDF and image
              files aren&apos;t transmitted to us at all — there&apos;s no
              upload step to secure, because it doesn&apos;t happen. The
              website itself, including the code that runs these tools, is
              delivered to your browser from our hosting provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Input Validation</h2>
            <p className="mt-3">
              Every tool validates file type and size before processing, and
              handles corrupt, password-protected, or otherwise invalid
              files gracefully rather than crashing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Transport Security</h2>
            <p className="mt-3">
              The website itself is served over HTTPS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Reporting a Concern</h2>
            <p className="mt-3">
              If you believe you&apos;ve found a security issue with
              Foldryn, please reach out via our{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact
              </a>{" "}
              page with details so we can look into it.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
