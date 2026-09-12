import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Foldryn",
  description: "How Foldryn handles your files and data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-8 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">File Processing</h2>
            <p className="mt-3">
              Foldryn&apos;s core tools — Merge PDF, Split PDF, Compress PDF,
              PDF to JPG, and JPG to PDF — process your files directly in
              your browser using JavaScript. Your PDF and image files are
              not uploaded to our servers when you use these tools, and we
              do not store, view, or retain them. If we ever add a tool that
              requires server-side processing, that tool&apos;s page will say
              so explicitly, and we will describe how that file is handled
              and when it is deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
            <p className="mt-3">
              We do not require an account to use Foldryn&apos;s tools. Like
              most websites, our hosting provider and any analytics tools we
              use may automatically collect standard technical information
              such as your IP address, browser type, device type, and pages
              visited, for the purpose of operating and improving the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Cookies</h2>
            <p className="mt-3">
              Foldryn does not currently use cookies for advertising or
              tracking. If that changes — for example, if we add analytics
              or advertising in the future — we will update this policy and
              our{" "}
              <a href="/cookie-policy" className="text-blue-600 hover:underline">
                Cookie Policy
              </a>{" "}
              accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Advertising</h2>
            <p className="mt-3">
              Foldryn does not currently display advertising. If we add
              advertising in the future (for example, through Google
              AdSense), this policy will be updated to describe what data
              third-party ad providers may collect and how you can opt out
              where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Third-Party Services</h2>
            <p className="mt-3">
              This website is built with Next.js and hosted on infrastructure
              such as Vercel, which may process standard connection data
              (like IP addresses) as part of delivering the site to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the date at the top of
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Visit our{" "}
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
