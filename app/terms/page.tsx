import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Foldryn",
  description: "The terms that govern your use of Foldryn.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-8 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Using Foldryn</h2>
            <p className="mt-3">
              Foldryn provides free online tools for working with PDF files.
              By using this website, you agree to use it only for lawful
              purposes and not to misuse the tools, attempt to disrupt the
              service, or upload content you don&apos;t have the right to
              process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Your Files</h2>
            <p className="mt-3">
              You retain full ownership of any files you process using
              Foldryn. As described in our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              , most tools process your files locally in your browser and we
              never receive a copy of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">No Warranty</h2>
            <p className="mt-3">
              Foldryn is provided &quot;as is,&quot; without warranties of
              any kind. We make reasonable efforts to keep the tools
              accurate and reliable, but we do not guarantee that results
              will always be error-free, or that the service will always be
              available. We recommend keeping a backup of any original file
              you process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Foldryn is not liable
              for any indirect, incidental, or consequential damages arising
              from your use of the site or its tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Changes</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Continued use of
              the site after changes are posted means you accept the updated
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Questions about these Terms? Visit our{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
