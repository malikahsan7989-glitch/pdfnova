import Link from "next/link";
import { blogPosts } from "@/lib/blog";

const featured = [
  "how-to-split-extract-pages-from-pdf",
  "how-to-rotate-pdf-pages",
  "compress-pdf-for-application-portals",
  "how-to-delete-pages-from-pdf",
  "how-to-merge-pdf-files-in-order",
  "how-to-convert-pdf-to-png",
];

export default function HomeGuides() {
  const guides = featured
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">PDF how-to guides</h2>
          <p className="mt-2 text-slate-600">Step-by-step help for everyday PDF jobs.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {guides.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200"
              >
                <span className="font-semibold text-slate-900">{post.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{post.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center">
          <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:underline">
            See all guides →
          </Link>
        </p>
      </div>
    </section>
  );
}
