import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import JsonLd from "../components/shared/JsonLd";
import { websiteSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "PDF Tips & Guides | Foldryn Blog",
  description:
    "Practical guides on working with PDFs — compressing files for upload portals, combining scanned documents, converting between PDF and JPG, and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "PDF Tips & Guides | Foldryn Blog",
    description: "Practical, no-fluff guides for everyday PDF tasks.",
    url: "/blog",
    siteName: "Foldryn",
    type: "website",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <main className="px-4 py-16 sm:px-6">
      <JsonLd data={websiteSchema()} />
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            PDF Tips &amp; Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Practical, no-fluff guides for the everyday PDF tasks people actually run into.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
