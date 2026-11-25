import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";
import { landingPagesFor, landingPath } from "@/lib/landing/registry";
import { breadcrumbSchema } from "@/lib/structuredData";
import JsonLd from "../components/shared/JsonLd";

export const metadata: Metadata = {
  title: "PDF Use Cases and Step-by-Step Guides | Foldryn",
  description:
    "Find the right Foldryn PDF tool for a specific job, from merging application documents to working on a phone. Each guide links to the tool that does it.",
  alternates: { canonical: "/pdf-use-cases" },
  openGraph: { siteName: "Foldryn", title: "PDF Use Cases and Step-by-Step Guides | Foldryn", url: "/pdf-use-cases", type: "website" },
};

export default function PdfUseCasesPage() {
  
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "PDF use cases", path: "/pdf-use-cases" }])} />
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">PDF use cases</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Each guide below covers one specific job, such as assembling a rental application or merging PDFs on
          a phone, and links straight to the Foldryn tool that does it.
        </p>
        {tools.map((tool) => {
          const pages = landingPagesFor(tool.slug).filter((p) => p.indexable !== false);
          if (pages.length === 0) return null;
          return (
            <section key={tool.slug} className="mt-10">
              <h2 className="text-xl font-bold text-slate-900">
                <Link href={tool.href} className="hover:text-blue-600 hover:underline">{tool.title}</Link>
              </h2>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {pages.map((p) => (
                  <li key={p.slug}>
                    <Link href={landingPath(p)} className="text-sm font-medium text-blue-600 hover:underline">
                      {p.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
