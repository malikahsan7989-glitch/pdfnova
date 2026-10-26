import type { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { relatedTools } from "@/lib/tools";
import {
  toolSoftwareAppSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/structuredData";
import JsonLd from "./JsonLd";

interface FaqItem {
  question: string;
  answer: string;
}

interface ToolPageLayoutProps {
  slug: string;
  h1: string;
  intro: string;
  about: string[];
  tool: ReactNode;
  howTo: string[];
  isClientSide: boolean;
  faq?: FaqItem[];
  relatedGuides?: { title: string; href: string }[];
}

export default function ToolPageLayout({
  slug,
  h1,
  intro,
  about,
  tool,
  howTo,
  isClientSide,
  faq = [],
  relatedGuides = [],
}: ToolPageLayoutProps) {
  const related = relatedTools(slug);
  const path = `/${slug}`;

  const softwareAppData = toolSoftwareAppSchema({ name: h1, description: intro, path });
  const faqData = faqPageSchema(faq);
  const breadcrumbData = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: h1, path },
  ]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
      <JsonLd data={softwareAppData} />
      {faqData && <JsonLd data={faqData} />}
      <JsonLd data={breadcrumbData} />
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-slate-700" aria-current="page">
              {h1}
            </li>
          </ol>
        </nav>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {h1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">{intro}</p>
        </div>

        <div className="flex justify-center">{tool}</div>

        <div className="mx-auto mt-12 max-w-2xl space-y-4 text-sm leading-7 text-slate-600">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">How It Works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600">
            {howTo.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-blue-50 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <h2 className="font-bold text-slate-900">Your Privacy Matters</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isClientSide
                  ? "Files are processed in your browser and are not uploaded to our server for this tool."
                  : "This tool processes your file on our server, then deletes it once your download is ready. See our Privacy Policy for details."}
              </p>
            </div>
          </div>
        </div>

        {faq.length > 0 && (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 divide-y divide-slate-100">
              {faq.map((item) => (
                <details key={item.question} className="group py-3">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none">
                    <span className="flex items-center justify-between gap-3">
                      {item.question}
                      <span className="flex-shrink-0 text-slate-400 transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Related Tools</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={t.href}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedGuides.length > 0 && (
          <div className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Related Guides</h2>
            <ul className="mt-4 space-y-2">
              {relatedGuides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {guide.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
