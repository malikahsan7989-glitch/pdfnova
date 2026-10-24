import ToolCard from "../shared/ToolCard";
import { toolCategories, toolsByCategory } from "@/lib/tools";

const categoryBlurb: Record<string, string> = {
  Organize: "Rearrange, split, rotate, and clean up your PDF's pages.",
  Convert: "Move between PDF, JPG, and PNG without losing quality.",
  Optimize: "Shrink file size for uploads and email attachments.",
  Edit: "Add watermarks and other finishing touches.",
};

export default function ToolGrid() {
  return (
    <section id="tools" className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">PDF Tools</h2>
          <p className="mt-2 text-slate-600">Choose a tool to get started.</p>
        </div>

        <div className="space-y-14">
          {toolCategories.map((category) => {
            const categoryTools = toolsByCategory(category);
            if (categoryTools.length === 0) return null;

            return (
              <div key={category}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{category}</h3>
                  <p className="mt-1 text-sm text-slate-500">{categoryBlurb[category]}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryTools.map((tool) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
