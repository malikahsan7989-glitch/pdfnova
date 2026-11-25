import type { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { tools } from "@/lib/tools";
import { toolSeo } from "@/lib/toolSeo";
import { renderInline } from "@/lib/markdownLite";
import {
  toolSoftwareAppSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/structuredData";
import { landingPagesFor, landingPath } from "@/lib/landing/registry";
import JsonLd from "./JsonLd";

interface ToolPageLayoutProps {
  slug: string;
  tool: ReactNode;
}

const sectionCard = "mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6";
const sectionTitle = "text-xl font-bold text-slate-900";
const bodyText = "text-sm leading-7 text-slate-600";

export default function ToolPageLayout({ slug, tool }: ToolPageLayoutProps) {
  const seo = toolSeo[slug];
  if (!seo) throw new Error(`No SEO content defined for tool "${slug}"`);

  const path = `/${slug}`;
  const useCases = landingPagesFor(slug).filter((p) => p.indexable !== false);
  const relatedTools = seo.related
    .map((s) => tools.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const softwareAppData = toolSoftwareAppSchema({
    name: seo.h1,
    description: seo.intro,
    path,
  });
  const faqData = faqPageSchema(seo.faq);
  const breadcrumbData = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: seo.h1, path },
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
              {seo.h1}
            </li>
          </ol>
        </nav>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {seo.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">{seo.intro}</p>
        </div>

        <div className="flex justify-center">{tool}</div>

        <section className="mx-auto mt-12 max-w-2xl space-y-4">
          <h2 className={sectionTitle}>What {seo.name} does</h2>
          {seo.about.map((paragraph, i) => (
            <p key={i} className={bodyText}>
              {renderInline(paragraph)}
            </p>
          ))}
        </section>

        <section className={sectionCard}>
          <h2 className={sectionTitle}>How to use {seo.name}</h2>
          <ol className={`mt-4 list-decimal space-y-2 pl-5 ${bodyText}`}>
            {seo.steps.map((step, i) => (
              <li key={i}>{renderInline(step)}</li>
            ))}
          </ol>
        </section>

        <section className={sectionCard}>
          <h2 className={sectionTitle}>Common uses</h2>
          <ul className={`mt-4 list-disc space-y-2 pl-5 ${bodyText}`}>
            {seo.useCases.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ul>
        </section>

        <section className={sectionCard}>
          <h2 className={sectionTitle}>Tips for better results</h2>
          <ul className={`mt-4 list-disc space-y-2 pl-5 ${bodyText}`}>
            {seo.tips.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ul>
        </section>

        <section className={sectionCard}>
          <h2 className={sectionTitle}>Good to know</h2>
          <ul className={`mt-4 list-disc space-y-2 pl-5 ${bodyText}`}>
            {seo.limits.map((item, i) => (
              <li key={i}>{renderInline(item)}</li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3 rounded-xl bg-blue-50 p-4">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-bold text-slate-900">How your files are handled</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Files are processed in your browser and are not uploaded to our server for this
                tool.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{seo.handling}</p>
            </div>
          </div>
        </section>

        <section className={sectionCard}>
          <h2 className={sectionTitle}>Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {seo.faq.map((item) => (
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
        </section>

        {useCases.length > 0 && (
          <section className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">{seo.name} for specific jobs</h2>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {useCases.map((p) => (
                <li key={p.slug}>
                  <Link href={landingPath(p)} className="text-sm font-medium text-blue-600 hover:underline">
                    {p.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {relatedTools.length > 0 && (
          <section className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Related PDF tools</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedTools.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={t.href}
                    className="block h-full rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200"
                  >
                    <span className="font-semibold text-slate-900">{t.title}</span>
                    <span className="mt-1 block text-sm text-slate-600">{t.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {seo.guides.length > 0 && (
          <section className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Related guides</h2>
            <ul className="mt-4 space-y-2">
              {seo.guides.map((guide) => (
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
          </section>
        )}
      </div>
    </main>
  );
}
