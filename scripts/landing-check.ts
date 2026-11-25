import { allLandingPages, landingPath } from "../lib/landing/registry";
import { toolSeo } from "../lib/toolSeo";
import { tools } from "../lib/tools";
import { blogPosts } from "../lib/blog";

const BANNED = [/100%/i, /guarantee/i, /military/i, /\bbest\b/i, /fastest/i, /#1/i, /number one/i, /unlimited/i, /perfect/i];
const pages = allLandingPages();
const blogSlugs = new Set(blogPosts.map((p) => `/blog/${p.slug}`));
const validPaths = new Set<string>(["/", "/blog", "/about", "/contact", "/privacy-policy", "/terms", "/cookie-policy", "/security", "/pdf-use-cases", ...tools.map((t) => t.href), ...blogSlugs, ...pages.map(landingPath)]);

let failures = 0;
const fail = (id: string, msg: string) => { failures++; console.log(`  FAIL ${id}: ${msg}`); };
const strip = (s: string) => s.replace(/\*\*/g, "").replace(/\[(.+?)\]\(.+?\)/g, "$1");
const seen = { title: new Map<string, string>(), desc: new Map<string, string>(), h1: new Map<string, string>(), kw: new Map<string, string>(), path: new Map<string, string>() };
const dupe = (m: Map<string, string>, key: string, id: string, label: string) => { const k = key.toLowerCase(); if (m.has(k)) fail(id, `duplicate ${label} (also ${m.get(k)})`); else m.set(k, id); };
const inbound = new Map<string, number>(pages.map((p) => [landingPath(p), 0]));
const shingles = new Map<string, Set<string>>();
const wordCounts: number[] = [];

for (const p of pages) {
  const id = landingPath(p);
  const text = [p.intro, ...p.situation, ...p.steps, p.example.title, p.example.body, ...p.useCases, ...p.limits, ...p.faq.flatMap((f) => [f.question, f.answer])].join(" ");
  const words = strip(text).split(/\s+/).length;
  wordCounts.push(words);
  if (!tools.some((t) => t.slug === p.toolSlug) || !toolSeo[p.toolSlug]) fail(id, "unknown tool");
  if (p.title.length > 60) fail(id, `title ${p.title.length} > 60`);
  if (!/Foldryn/.test(p.title)) fail(id, "title missing brand");
  if (p.description.length > 155 || p.description.length < 90) fail(id, `description length ${p.description.length}`);
  if (words < 280 || words > 900) fail(id, `${words} words outside 280-900`);
  if (p.steps.length < 3 || p.steps.length > 4) fail(id, `${p.steps.length} steps`);
  if (p.faq.length < 3) fail(id, `${p.faq.length} FAQs`);
  if (p.siblings.length < 3 || p.siblings.length > 4) fail(id, `${p.siblings.length} siblings`);
  if (p.relatedTools.length < 2) fail(id, "needs 2+ related tools");
  if (!/^[a-z0-9-]+$/.test(p.slug)) fail(id, "bad slug");
  dupe(seen.title, p.title, id, "title"); dupe(seen.desc, p.description, id, "description"); dupe(seen.h1, p.h1, id, "h1"); dupe(seen.kw, p.primaryKeyword, id, "primary keyword"); dupe(seen.path, id, id, "path");
  for (const s of p.siblings) { const t = `/${p.toolSlug}/${s}`; if (s === p.slug) fail(id, "sibling is itself"); else if (!validPaths.has(t)) fail(id, `unknown sibling ${s}`); else inbound.set(t, (inbound.get(t) ?? 0) + 1); }
  for (const r of p.relatedTools) { if (r === p.toolSlug) fail(id, "relatedTools includes own tool"); if (!tools.some((t) => t.slug === r)) fail(id, `unknown related tool ${r}`); }
  for (const g of p.guides ?? []) if (!blogSlugs.has(g.href)) fail(id, `guide ${g.href} not a blog post`);
  for (const m of text.matchAll(/\]\((\/[^)]*)\)/g)) { if (!validPaths.has(m[1])) fail(id, `broken link ${m[1]}`); else if (inbound.has(m[1]) && m[1] !== id) inbound.set(m[1], (inbound.get(m[1]) ?? 0) + 1); }
  for (const re of BANNED) for (const [label, t] of [["title", p.title], ["description", p.description], ["body", text]] as const) if (re.test(t)) fail(id, `banned phrase ${re} in ${label}`);
  if (!/not uploaded|aren.t uploaded|not upload|no upload/i.test(toolSeo[p.toolSlug]?.handling ?? "")) fail(id, "tool handling text lacks privacy statement");
  const toks = strip(text).toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/); const sh = new Set<string>();
  for (let i = 0; i + 5 <= toks.length; i++) sh.add(toks.slice(i, i + 5).join(" "));
  shingles.set(id, sh);
}
// near-duplicate detection (5-word shingle overlap)
const ids = [...shingles.keys()]; let maxSim = 0, maxPair = "";
for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
  const a = shingles.get(ids[i])!, b = shingles.get(ids[j])!; let inter = 0; for (const x of a) if (b.has(x)) inter++;
  const sim = inter / Math.min(a.size, b.size); if (sim > maxSim) { maxSim = sim; maxPair = `${ids[i]} <> ${ids[j]}`; }
  if (sim > 0.2) fail(ids[i], `too similar (${sim.toFixed(2)}) to ${ids[j]}`);
}
for (const [path, n] of inbound) if (n === 0) fail(path, "orphan: no inbound contextual links");
const byTool = new Map<string, number>(); for (const p of pages) byTool.set(p.toolSlug, (byTool.get(p.toolSlug) ?? 0) + 1);
console.log(`pages: ${pages.length}`, Object.fromEntries(byTool));
console.log(`words per page: min ${Math.min(...wordCounts)}, max ${Math.max(...wordCounts)}, avg ${Math.round(wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length)}`);
console.log(`max 5-word-shingle overlap: ${maxSim.toFixed(2)} (${maxPair})`);
console.log(`indexable: ${pages.filter((p) => p.indexable !== false).length}, noindex: ${pages.filter((p) => p.indexable === false).length}`);
console.log(failures === 0 ? "\nALL LANDING CHECKS PASSED" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
