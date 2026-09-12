import Link from "next/link";
import { tools } from "@/lib/tools";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Back to Home
      </Link>

      <div className="mt-10">
        <p className="text-sm font-medium text-slate-500">Or try a tool:</p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.href}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:text-blue-600"
            >
              {tool.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
