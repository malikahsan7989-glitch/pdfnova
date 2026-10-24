import ToolCard from "../shared/ToolCard";
import { tools } from "@/lib/tools";

export default function ToolGrid() {
  return (
    <section id="tools" className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Popular PDF Tools</h2>
          <p className="mt-2 text-slate-600">Choose a tool to get started.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
