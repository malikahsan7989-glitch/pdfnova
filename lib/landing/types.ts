export type IntentCategory =
  | "core"
  | "device"
  | "software-free"
  | "privacy"
  | "problem-solving"
  | "student"
  | "professional"
  | "business"
  | "document-specific"
  | "workflow"
  | "file-format";

/** Where the wording of the page genuinely applies. "Global" means no local variation. */
export type Market = "Global" | "US" | "UK" | "AU" | "CA" | "NZ";

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPage {
  /** URL segment under the tool's route: /{toolSlug}/{slug}. Unique within a tool. */
  slug: string;
  /** Slug of the existing functional tool this page sends people to. */
  toolSlug: string;
  /** <title>, max 60 characters, includes the brand. */
  title: string;
  /** Meta description, max 155 characters. */
  description: string;
  h1: string;
  intent: IntentCategory;
  /** Markets whose search wording this page is written for. */
  markets: Market[];
  /** One phrase per page. Never shared with another page. */
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string;
  /** Paragraphs describing this specific situation. Markdown-lite (**bold**, [text](/path)). */
  situation: string[];
  steps: string[];
  /** A short worked example specific to this page. */
  example: { title: string; body: string };
  useCases: string[];
  limits: string[];
  faq: LandingFaq[];
  /** Slugs of sibling landing pages of the same tool (2 to 4). */
  siblings: string[];
  /** Slugs of other existing tools (2 to 3). */
  relatedTools: string[];
  /** Existing blog posts, only when genuinely relevant. */
  guides?: { title: string; href: string }[];
  /** Set to false to keep a page out of the index and the sitemap. Defaults to true. */
  indexable?: boolean;
}
