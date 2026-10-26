import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Foldryn",
  description: "Get in touch with the Foldryn team about a tool, a bug, or general feedback.",
  alternates: { canonical: "/contact" },
};

const CONTACT_EMAIL = "support@foldryn.com";

export default function ContactPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Contact</h1>

        <p className="mt-6 text-slate-600 leading-7">
          Questions, bug reports, or feedback about any Foldryn tool are
          welcome. We read every message.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>

        <p className="mt-6 text-sm text-slate-500">
          If you&apos;re reporting an issue with a specific tool, it helps to
          mention which tool, your browser, and what happened.
        </p>
      </div>
    </main>
  );
}
