import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { tools } from "@/lib/tools";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Fold<span className="text-blue-600">ryn</span>
          </span>
          <span className="text-[11px] font-medium text-slate-500">
            PDF tools that work in your browser
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Tools
            </button>
            <div className="invisible absolute left-0 top-full w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50 hover:text-blue-600"
                >
                  {tool.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link
            href="/#tools"
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Tools
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
