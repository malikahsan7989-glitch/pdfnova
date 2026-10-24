"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { tools } from "@/lib/tools";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[65px] z-50 border-b border-slate-200 bg-white px-4 pb-6 pt-2 shadow-lg">
          <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Tools
          </p>
          <nav className="mt-1 flex flex-col">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                {tool.title}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col border-t border-slate-100 pt-4">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
