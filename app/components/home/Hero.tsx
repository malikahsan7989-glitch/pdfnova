import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 py-16 text-center sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Free online PDF tools
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Simple PDF Tools That
          <span className="block text-blue-600">Work in Your Browser</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Organize, convert, compress, and edit your PDF files — from merging
          and splitting to rotating, watermarking, and more. Most tools
          process your files locally in your browser — no upload, no signup,
          no watermark added to your files.
        </p>

        <Link
          href="#tools"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Explore PDF Tools
        </Link>
      </div>
    </section>
  );
}
