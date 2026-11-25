import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { allLandingPages, landingPath } from "../lib/landing/registry";
import { tools } from "../lib/tools";

// Writes data/keywords/<tool>.csv and a master index. Search volume and difficulty are
// ALWAYS "unavailable" here: no keyword tool was queried, so no metrics are invented.
const SOURCE = "Proposed from page intent; not yet validated against Google Search Console, Keyword Planner, Ahrefs or Semrush";
const esc = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
const typeOf = (k: string) => (/^(how|why|can|what|is|does|do|where|which)\b/.test(k) ? "question" : k.split(" ").length <= 2 ? "short-tail" : k.split(" ").length === 3 ? "medium-tail" : "long-tail");
const header = ["keyword", "search_intent", "target_country", "keyword_type", "related_landing_page", "classification", "search_volume", "keyword_difficulty", "research_source"];

mkdirSync("data/keywords", { recursive: true });
const pages = allLandingPages();
const globalSeen = new Map<string, string>();
const master: string[][] = [];

for (const tool of tools) {
  const rows: string[][] = [];
  for (const p of pages.filter((x) => x.toolSlug === tool.slug)) {
    const entries: [string, string][] = [[p.primaryKeyword, "primary"], ...p.secondaryKeywords.map((k) => [k, "secondary"] as [string, string])];
    for (const [kw, cls] of entries) {
      const key = kw.toLowerCase().trim();
      if (globalSeen.has(key)) continue; // each phrase is mapped to exactly one page
      globalSeen.set(key, landingPath(p));
      rows.push([kw, p.intent, p.markets.join("|"), typeOf(key), landingPath(p), cls, "unavailable", "unavailable", SOURCE]);
    }
  }
  // Optional authored list: data/keywords/source/<tool>.txt with "## page-slug | markets | intent" headers.
  const src = `data/keywords/source/${tool.slug}.txt`;
  if (existsSync(src)) {
    let slug = "TOOL", markets = "Global", intent = "core";
    for (const raw of readFileSync(src, "utf8").split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;
      if (line.startsWith("##")) { [slug, markets, intent] = line.slice(2).split(" | ").map((x) => x.trim()); continue; }
      const key = line.toLowerCase();
      if (globalSeen.has(key)) continue;
      const related = slug === "TOOL" ? tool.href : `${tool.href}/${slug}`;
      if (slug !== "TOOL" && !pages.some((p) => p.toolSlug === tool.slug && p.slug === slug)) throw new Error(`Unknown page slug in ${src}: ${slug}`);
      globalSeen.set(key, related);
      rows.push([line, intent, markets, typeOf(key), related, slug === "TOOL" ? "tool-page" : "secondary", "unavailable", "unavailable", SOURCE]);
    }
  }
  if (rows.length === 0) continue;
  writeFileSync(`data/keywords/${tool.slug}.csv`, [header, ...rows].map((r) => r.map(esc).join(",")).join("\n") + "\n");
  master.push([tool.slug, String(pages.filter((x) => x.toolSlug === tool.slug).length), String(rows.length), "500", rows.length >= 500 ? "keyword target met (demand unverified)" : "keyword target not met"]);
}
writeFileSync("data/keywords/_master-index.csv", [["tool", "landing_pages", "unique_keywords_mapped", "keyword_target", "status"], ...master].map((r) => r.map(esc).join(",")).join("\n") + "\n");
console.log(master.map((m) => m.join(" | ")).join("\n"));
const csv = readFileSync("data/keywords/merge-pdf.csv", "utf8").trim().split("\n").slice(1).map((l) => l.split(","));
const count = (i: number) => csv.reduce((m, r) => m.set(r[i], (m.get(r[i]) ?? 0) + 1), new Map<string, number>());
console.log("by type:", Object.fromEntries(count(3)));
console.log("by intent:", Object.fromEntries(count(1)));
