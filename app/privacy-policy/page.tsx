import type { Metadata } from "next";
import { POLICY_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Foldryn",
  description:
    "How Foldryn handles your files and data. All of Foldryn's PDF tools process files in your browser, and we don't upload or store them.",
  alternates: { canonical: "/privacy-policy" },
};

const externalLink = "text-blue-600 hover:underline";

export default function PrivacyPolicyPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {POLICY_LAST_UPDATED}</p>

        <div className="mt-8 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Overview</h2>
            <p className="mt-3">
              This policy explains what information is handled when you use
              Foldryn at www.foldryn.com. The short version: Foldryn&apos;s
              tools work inside your browser, we don&apos;t ask you to create
              an account, and your files are not uploaded to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">How Your Files Are Processed</h2>
            <p className="mt-3">
              All eleven Foldryn tools process your files directly in your
              browser using JavaScript: Merge PDF, Split PDF, Compress PDF,
              PDF to JPG, JPG to PDF, Rotate PDF, Delete PDF Pages, Extract
              PDF Pages, PDF Page Numbering, PDF to PNG, and Watermark PDF.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                The PDF tools read your file from your device into your
                browser&apos;s memory and use the pdf-lib library to build the
                result there.
              </li>
              <li>
                PDF to JPG and PDF to PNG use PDF.js to draw each page in your
                browser and then save it as an image. When there are several
                images, they are packed into a ZIP file in your browser.
              </li>
              <li>
                The page previews shown by Rotate PDF, Delete PDF Pages and
                Extract PDF Pages are also generated in your browser.
              </li>
            </ul>
            <p className="mt-3">
              Your PDF and image files are not sent to Foldryn&apos;s servers,
              and we do not store, view, or keep copies of them. While you use
              a tool, your file and the result exist in your browser&apos;s
              memory. When you press Download, your browser saves the result
              to your device; closing or refreshing the page clears it from
              the tool. Because everything happens on your device, we are not
              able to recover a file or result for you.
            </p>
            <p className="mt-3">
              If we ever add a tool that needs server-side processing, that
              tool&apos;s page will say so, and this policy will describe how
              the file is handled and when it is deleted before the tool is
              released.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
            <p className="mt-3">
              <strong>Files:</strong> none, as described above.
            </p>
            <p className="mt-3">
              <strong>Account information:</strong> none. Foldryn has no
              accounts or logins.
            </p>
            <p className="mt-3">
              <strong>Messages you send us:</strong> if you email us, we
              receive your email address and whatever you write, and we use it
              only to respond to you.
            </p>
            <p className="mt-3">
              <strong>Technical information:</strong> Foldryn is hosted on
              Vercel. When your browser requests a page, the hosting servers
              receive standard connection information, such as your IP
              address, browser and device type, and the page requested, and
              may keep it in server logs for delivering, securing and
              troubleshooting the site. Our hosting provider may also make
              aggregated usage figures, such as request counts, available to
              us. Foldryn&apos;s own website code does not currently include
              analytics or tracking scripts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Cookies and Browser Storage</h2>
            <p className="mt-3">
              Foldryn&apos;s own code does not currently set cookies or use
              browser storage such as localStorage. Our hosting provider may
              use technical cookies or similar mechanisms needed to deliver
              and secure the site. See our{" "}
              <a href="/cookie-policy" className={externalLink}>
                Cookie Policy
              </a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Advertising</h2>
            <p className="mt-3">
              Foldryn does not currently display advertising, and no
              advertising scripts or advertising cookies are in use on the
              site. We may apply to show ads from Google AdSense in the
              future. This section describes what will apply if and when we
              do, and we will review it before any ads go live.
            </p>
            <p className="mt-3">
              When advertising is enabled, Google, as a third-party vendor,
              uses cookies to serve ads on Foldryn. Google&apos;s use of
              advertising cookies enables it and its partners to serve ads to
              you based on your visit to Foldryn and other sites on the
              internet. You can opt out of personalized advertising by
              visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                Google Ads Settings
              </a>
              . You can also opt out of some third-party vendors&apos; use of
              cookies for personalized advertising at{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                www.aboutads.info
              </a>
              . More about how Google uses data from sites that use its
              services is available at{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                policies.google.com/technologies/partner-sites
              </a>
              .
            </p>
            <p className="mt-3">
              For visitors in the European Economic Area, the United Kingdom
              and Switzerland, we will provide a way to give or refuse consent
              before cookies are used for personalized advertising. Ads would
              be shown around the tools and content, and your files are never
              shared with advertisers, because we never receive them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Third-Party Services</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Vercel</strong> hosts the website and delivers it to
                your browser, as described above.
              </li>
              <li>
                <strong>Google Search Console</strong> is used by the site
                owner to see how Foldryn appears in Google Search. It reports
                aggregated search performance data to us and does not add
                scripts to the pages you visit.
              </li>
              <li>
                <strong>Google AdSense</strong> is not active. It would be
                used only if advertising is enabled, as described in the
                Advertising section.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Children</h2>
            <p className="mt-3">
              Foldryn is not directed at children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Your Choices</h2>
            <p className="mt-3">
              Because we don&apos;t hold your files or accounts, there is
              nothing of that kind for us to delete or export. If you have
              emailed us and want your message deleted, or have a question
              about this policy, please{" "}
              <a href="/contact" className={externalLink}>
                contact us
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. When we do,
              we will change the date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Visit our{" "}
              <a href="/contact" className={externalLink}>
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
