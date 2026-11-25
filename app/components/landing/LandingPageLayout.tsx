import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { toolSeo } from "@/lib/toolSeo";
import { renderInline } from "@/lib/markdownLite";
import { faqPageSchema, breadcrumbSchema } from "@/lib/structuredData";
import { getLandingPage, landingPath, toolFor } from "@/lib/landing/registry";
import type { LandingPage } from "@/lib/landing/types";
import JsonLd from "../shared/JsonLd";

const card = "mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6";
const h2 = "text-xl font-bold text-slate-900";
const body = "text-sm leading-7 text-slate-600";

function ToolCta({ toolSlug, label }: { toolSlug: string; label: string }) {
  return (
    <Link
      href={`/${toolSlug}`}
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export default function LandingPageLayout({ page }: { page: LandingPage }) {
  const tool = toolFor(page.toolSlug);
  const seo = toolSeo[page.toolSlug];
  if (!tool || !seo) throw new Error(`Unknown tool "${page.toolSlug}" for landing page "${page.slug}"`);

  const path = landingPath(page);
  const siblings = page.siblings
    .map((s) => getLandingPage(page.toolSlug, s))
    .filter((p): p is LandingPage => Boolean(p));
  const related = page.relatedTools
    .map((s) => toolFor(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const faqData = faqPageSchema(page.faq);
  const breadcrumbData = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: tool.title, path: tool.href },
    { name: page.h1, path },
  ]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
      <JsonLd data={breadcrumbData} />
      {faqData && <JsonLd data={faqData} />}
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={tool.href} className="hover:text-blue-600 hover:underline">
                {tool.title}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-slate-700" aria-current="page">
              {page.h1}
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {page.h1}
          </h1>
          <p className="mt-4 text-slate-600">{renderInline(page.intro)}</p>
          <div className="mt-6">
            <ToolCta toolSlug={page.toolSlug} label={`Open ${tool.title}`} />
          </div>
        </header>

        <section className="mx-auto mt-12 max-w-2xl space-y-4">
          <h2 className={h2}>The situation</h2>
          {page.situation.map((p, i) => (
            <p key={i} className={body}>
              {renderInline(p)}
            </p>
          ))}
        </section>

        <section className={card}>
          <h2 className={h2}>How to do it</h2>
          <ol className={`mt-4 list-decimal space-y-2 pl-5 ${body}`}>
            {page.steps.map((s, i) => (
              <li key={i}>{renderInline(s)}</li>
            ))}
          </ol>
          <div className="mt-6">
            <ToolCta toolSlug={page.toolSlug} label={`Go to ${tool.title}`} />
          </div>
        </section>

        <section className={card}>
          <h2 className={h2}>{page.example.title}</h2>
          <p className={`mt-3 ${body}`}>{renderInline(page.example.body)}</p>
        </section>

        <section className={card}>
          <h2 className={h2}>When this helps</h2>
          <ul className={`mt-4 list-disc space-y-2 pl-5 ${body}`}>
            {page.useCases.map((u, i) => (
              <li key={i}>{renderInline(u)}</li>
            ))}
          </ul>
        </section>

        <section className={card}>
          <h2 className={h2}>Worth knowing</h2>
          <ul className={`mt-4 list-disc space-y-2 pl-5 ${body}`}>
            {page.limits.map((l, i) => (
              <li key={i}>{renderInline(l)}</li>
            ))}
          </ul>
        </section>

        <section className={card}>
          <div className="flex items-start gap-3 rounded-xl bg-blue-50 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <h2 className="font-bold text-slate-900">How your files are handled</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Files are processed in your browser and are not uploaded to our server for this tool.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{seo.handling}</p>
            </div>
          </div>
        </section>

        <section className={card}>
          <h2 className={h2}>Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {page.faq.map((item) => (
              <details key={item.question} className="group py-3">
                <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none">
                  <span className="flex items-center justify-between gap-3">
                    {item.question}
                    <span className="flex-shrink-0 text-slate-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {siblings.length > 0 && (
          <section className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">More ways to use {tool.title}</h2>
            <ul className="mt-4 space-y-2">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link href={landingPath(s)} className="text-sm font-medium text-blue-600 hover:underline">
                    {s.h1} →
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pdf-use-cases" className="text-sm font-medium text-slate-600 hover:underline">
                  See all PDF use cases →
                </Link>
              </li>
            </ul>
          </section>
        )}

        {related.length > 0 && (
          <section className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Related PDF tools</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((t) => (
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

        {page.guides && page.guides.length > 0 && (
          <section className="mx-auto mt-8 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900">Related guides</h2>
            <ul className="mt-4 space-y-2">
              {page.guides.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="text-sm font-medium text-blue-600 hover:underline">
                    {g.title} →
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
