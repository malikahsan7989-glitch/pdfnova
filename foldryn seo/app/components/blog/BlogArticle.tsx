import { renderInline } from "@/lib/markdownLite";

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export default function BlogArticle({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-slate-600 leading-7">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-2 text-2xl font-bold text-slate-900">
                {renderInline(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-1 text-lg font-bold text-slate-900">
                {renderInline(block.text)}
              </h3>
            );
          case "p":
            return <p key={i}>{renderInline(block.text)}</p>;
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-2 pl-6">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
