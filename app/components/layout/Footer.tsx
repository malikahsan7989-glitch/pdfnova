import Link from "next/link";
import { tools } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 px-4 py-12 text-white sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">
            Fold<span className="text-blue-400">ryn</span>
          </h3>
          <p className="mt-3 text-sm text-slate-400">
            Simple, fast PDF tools that run in your browser.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Tools
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link href={tool.href} className="hover:text-white">
                  {tool.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Company
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/security" className="hover:text-white">
                Security
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Legal
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Foldryn. All rights reserved.
      </div>
    </footer>
  );
}
