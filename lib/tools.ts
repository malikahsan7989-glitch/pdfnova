import {
  Combine,
  Scissors,
  Shrink,
  FileImage,
  Image as ImageIcon,
  type LucideIcon,
} from "lucide-react";

export interface ToolMeta {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
}

export const tools: ToolMeta[] = [
  {
    slug: "merge-pdf",
    href: "/merge-pdf",
    title: "Merge PDF",
    shortTitle: "Merge",
    description: "Combine multiple PDF files into one document, in the order you choose.",
    icon: Combine,
  },
  {
    slug: "split-pdf",
    href: "/split-pdf",
    title: "Split PDF",
    shortTitle: "Split",
    description: "Extract specific pages or split a PDF into separate files.",
    icon: Scissors,
  },
  {
    slug: "compress-pdf",
    href: "/compress-pdf",
    title: "Compress PDF",
    shortTitle: "Compress",
    description: "Shrink a PDF's file size, right in your browser.",
    icon: Shrink,
  },
  {
    slug: "pdf-to-jpg",
    href: "/pdf-to-jpg",
    title: "PDF to JPG",
    shortTitle: "PDF to JPG",
    description: "Convert PDF pages into JPG images you can save or share.",
    icon: FileImage,
  },
  {
    slug: "jpg-to-pdf",
    href: "/jpg-to-pdf",
    title: "JPG to PDF",
    shortTitle: "JPG to PDF",
    description: "Turn one or more JPG or PNG images into a single PDF.",
    icon: ImageIcon,
  },
];

export function relatedTools(currentSlug: string, count = 3): ToolMeta[] {
  return tools.filter((t) => t.slug !== currentSlug).slice(0, count);
}
