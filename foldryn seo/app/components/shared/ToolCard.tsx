import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export interface ToolCardData {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ToolCard({ title, description, href, icon: Icon }: ToolCardData) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 min-h-12 flex-1 text-sm leading-6 text-slate-600">{description}</p>

      <Link
        href={href}
        className="mt-6 block w-full rounded-xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
      >
        Use Tool
      </Link>
    </div>
  );
}
