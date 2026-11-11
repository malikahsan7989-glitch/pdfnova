import { toolSeo } from "../lib/toolSeo";
import { tools } from "../lib/tools";
import { blogPosts } from "../lib/blog";

const BANNED = [/100%/i, /guarantee/i, /military/i, /\bbest\b/i, /fastest/i, /#1/i, /number one/i, /unlimited/i, /perfect/i];
const blogSlugs = new Set(blogPosts.map((p) => `/blog/${p.slug}`));
const toolHrefs = new Set(tools.map((t) => t.href));
const validPaths = new Set<string>(["/", "/blog", "/about", "/contact", "/privacy-policy", "/terms", "/cookie-policy", "/security", ...toolHrefs, ...blogSlugs]);

let failures = 0;
const fail = (slug: string, msg: string) => { failures++; console.log(`  FAIL ${slug}: ${msg}`); };
const strip = (s: string) => s.replace(/\*\*/g, "").replace(/\[(.+?)\]\(.+?\)/g, "$1");

const titles = new Set<string>(), descs = new Set<string>();
console.log("slug                 title desc  steps faq words links");
for (const tool of tools) {
  const seo = toolSeo[tool.slug];
  if (!seo) { fail(tool.slug, "missing from toolSeo"); continue; }

  const all = [seo.intro, ...seo.about, ...seo.steps, ...seo.useCases, ...seo.tips, ...seo.limits, seo.handling, ...seo.faq.flatMap((f) => [f.question, f.answer])];
  const words = strip(all.join(" ")).split(/\s+/).length;
  const links = [...all.join(" ").matchAll(/\]\((\/[^)]*)\)/g)].map((m) => m[1]);

  if (seo.title.length > 60) fail(tool.slug, `title ${seo.title.length} > 60`);
  if (seo.description.length > 155) fail(tool.slug, `description ${seo.description.length} > 155`);
  if (!/free/i.test(seo.description)) fail(tool.slug, "description should mention free");
  if (!/no signup|without signup|no sign-up|no account/i.test(seo.description)) fail(tool.slug, "description should mention no signup");
  if (!/browser/i.test(seo.description)) fail(tool.slug, "description should say processed in your browser");
  if (!/Foldryn/.test(seo.title)) fail(tool.slug, "title should include brand");
  if (seo.steps.length < 3 || seo.steps.length > 4) fail(tool.slug, `${seo.steps.length} steps (want 3-4)`);
  if (seo.faq.length < 4) fail(tool.slug, `${seo.faq.length} FAQs (want 4+)`);
  if (words < 350 || words > 750) fail(tool.slug, `${words} words outside 350-750`);
  if (titles.has(seo.title)) fail(tool.slug, "duplicate title"); titles.add(seo.title);
  if (descs.has(seo.description)) fail(tool.slug, "duplicate description"); descs.add(seo.description);
  for (const r of seo.related) { if (r === tool.slug) fail(tool.slug, "related to itself"); if (!tools.some((t) => t.slug === r)) fail(tool.slug, `unknown related ${r}`); }
  if (seo.related.length < 3) fail(tool.slug, "need 3+ related tools");
  for (const g of seo.guides) if (!blogSlugs.has(g.href)) fail(tool.slug, `guide link ${g.href} not a blog post`);
  for (const l of links) if (!validPaths.has(l)) fail(tool.slug, `broken internal link ${l}`);
  for (const re of BANNED) for (const [label, text] of [["title", seo.title], ["description", seo.description], ["body", all.join(" ")]] as const) if (re.test(text)) fail(tool.slug, `banned phrase ${re} in ${label}`);
  if (!/not uploaded|isn.t uploaded|aren.t uploaded|never uploaded|nothing uploaded|nothing is uploaded|no upload|not upload/i.test(seo.handling + seo.description)) fail(tool.slug, "privacy statement missing");

  console.log(`${tool.slug.padEnd(20)} ${String(seo.title.length).padStart(5)} ${String(seo.description.length).padStart(4)} ${String(seo.steps.length).padStart(6)} ${String(seo.faq.length).padStart(3)} ${String(words).padStart(6)} ${String(links.length).padStart(5)}`);
}
for (const slug of Object.keys(toolSeo)) if (!tools.some((t) => t.slug === slug)) fail(slug, "in toolSeo but not in tools registry");

// blog: CTA + dates sanity
for (const p of blogPosts) {
  if (p.updated && p.updated < p.date) fail(p.slug, "updated is before date");
}
console.log(failures === 0 ? "\nALL SEO CHECKS PASSED" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
