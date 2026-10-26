import type { Metadata } from "next";
import { POLICY_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | Foldryn",
  description: "How Foldryn uses cookies and similar technologies, and what would change if advertising is enabled.",
  alternates: { canonical: "/cookie-policy" },
};

const link = "text-blue-600 hover:underline";

export default function CookiePolicyPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Cookie Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {POLICY_LAST_UPDATED}</p>

        <div className="mt-8 space-y-8 text-slate-600 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">What Cookies Are</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device by your
              browser. They can be used for things like remembering
              preferences, understanding how a site is used, or delivering
              ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">What Foldryn Uses Today</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Foldryn&apos;s own code does not currently set cookies, and it
                does not use browser storage such as localStorage.
              </li>
              <li>
                The tools do not need cookies. Your files are processed in
                your browser and are not uploaded, as described in our{" "}
                <a href="/privacy-policy" className={link}>
                  Privacy Policy
                </a>
                .
              </li>
              <li>
                The current application source does not include analytics or
                advertising scripts. Based on the code in this project, Foldryn
                does not intentionally set analytics or advertising cookies.
                This does not rule out technical cookies or request logging
                used by the hosting provider or other infrastructure needed to
                deliver and protect the website.
              </li>
              <li>
                Our hosting provider, Vercel, may use technical cookies or
                similar mechanisms needed to deliver and secure the site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">If Advertising Is Enabled</h2>
            <p className="mt-3">
              We may show ads from Google AdSense in the future. If we do,
              Google and its partners may set cookies or use similar
              technologies on Foldryn to serve and measure ads, including ads
              based on your visits to this and other sites. This page and our
              Privacy Policy will be reviewed before any ads go live.
            </p>
            <p className="mt-3">
              For visitors in the European Economic Area, the United Kingdom
              and Switzerland, we will provide a way to give or refuse
              consent before cookies are used for personalized advertising.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Managing Cookies</h2>
            <p className="mt-3">
              Most browsers let you view, block, or delete cookies in their
              settings. Blocking cookies is unlikely to affect Foldryn&apos;s
              tools, since they don&apos;t rely on them. If advertising is
              enabled, you will also be able to manage personalized ads
              through{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Google Ads Settings
              </a>{" "}
              and{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                www.aboutads.info
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
