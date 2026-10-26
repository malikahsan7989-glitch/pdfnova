import type { Metadata } from "next";
import { POLICY_LAST_UPDATED } from "@/lib/site";

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
        <p className="mt-2 text-sm text-slate-500">Last updated: {POLICY_LAST_UPDATED}</p>

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
              You keep full ownership of any files you process using Foldryn.
              As described in our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              , all of Foldryn&apos;s tools process your files locally in your
              browser, and we do not receive a copy of them. You are
              responsible for checking the results before you rely on or send
              them.
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
            <h2 className="text-xl font-bold text-slate-900">Advertising and Third Parties</h2>
            <p className="mt-3">
              Foldryn does not currently display advertising. If we enable it
              in the future, ads and any related cookies will be provided by
              third parties under their own terms and policies, and we will
              update our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/cookie-policy" className="text-blue-600 hover:underline">
                Cookie Policy
              </a>{" "}
              before ads appear. Foldryn is not responsible for the content
              of third-party websites linked from it.
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
