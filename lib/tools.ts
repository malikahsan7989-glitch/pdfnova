import {
  Combine,
  Scissors,
  Shrink,
  FileImage,
  Image as ImageIcon,
  RotateCw,
  Trash2,
  FileOutput,
  ImagePlus,
  Droplets,
  Hash,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory = "Organize" | "Convert" | "Optimize" | "Edit";

export interface ToolMeta {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  category: ToolCategory;
}

export const tools: ToolMeta[] = [
  {
    slug: "merge-pdf",
    href: "/merge-pdf",
    title: "Merge PDF",
    shortTitle: "Merge",
    description: "Combine multiple PDF files into one document, in the order you choose.",
    icon: Combine,
    category: "Organize",
  },
  {
    slug: "split-pdf",
    href: "/split-pdf",
    title: "Split PDF",
    shortTitle: "Split",
    description: "Extract specific pages or split a PDF into separate files.",
    icon: Scissors,
    category: "Organize",
  },
  {
    slug: "rotate-pdf",
    href: "/rotate-pdf",
    title: "Rotate PDF",
    shortTitle: "Rotate",
    description: "Rotate individual pages of a PDF using visual page thumbnails.",
    icon: RotateCw,
    category: "Organize",
  },
  {
    slug: "delete-pdf-pages",
    href: "/delete-pdf-pages",
    title: "Delete PDF Pages",
    shortTitle: "Delete Pages",
    description: "Remove unwanted pages from a PDF by selecting them visually.",
    icon: Trash2,
    category: "Organize",
  },
  {
    slug: "extract-pdf-pages",
    href: "/extract-pdf-pages",
    title: "Extract PDF Pages",
    shortTitle: "Extract Pages",
    description: "Pick specific pages from a PDF and save them as a new document.",
    icon: FileOutput,
    category: "Organize",
  },
  {
    slug: "pdf-page-numbering",
    href: "/pdf-page-numbering",
    title: "PDF Page Numbering",
    shortTitle: "Page Numbers",
    description: "Add page numbers to every page of a PDF, in the position you choose.",
    icon: Hash,
    category: "Organize",
  },
  {
    slug: "pdf-to-jpg",
    href: "/pdf-to-jpg",
    title: "PDF to JPG",
    shortTitle: "PDF to JPG",
    description: "Convert PDF pages into JPG images you can save or share.",
    icon: FileImage,
    category: "Convert",
  },
  {
    slug: "pdf-to-png",
    href: "/pdf-to-png",
    title: "PDF to PNG",
    shortTitle: "PDF to PNG",
    description: "Convert PDF pages into PNG images with a transparent-friendly format.",
    icon: ImagePlus,
    category: "Convert",
  },
  {
    slug: "jpg-to-pdf",
    href: "/jpg-to-pdf",
    title: "JPG to PDF",
    shortTitle: "JPG to PDF",
    description: "Turn one or more JPG or PNG images into a single PDF.",
    icon: ImageIcon,
    category: "Convert",
  },
  {
    slug: "compress-pdf",
    href: "/compress-pdf",
    title: "Compress PDF",
    shortTitle: "Compress",
    description: "Shrink a PDF's file size, right in your browser.",
    icon: Shrink,
    category: "Optimize",
  },
  {
    slug: "watermark-pdf",
    href: "/watermark-pdf",
    title: "Watermark PDF",
    shortTitle: "Watermark",
    description: "Stamp a custom text watermark across every page of a PDF.",
    icon: Droplets,
    category: "Edit",
  },
];

export const toolCategories: ToolCategory[] = ["Organize", "Convert", "Optimize", "Edit"];

export function toolsByCategory(category: ToolCategory): ToolMeta[] {
  return tools.filter((t) => t.category === category);
}

export function relatedTools(currentSlug: string, count = 3): ToolMeta[] {
  return tools.filter((t) => t.slug !== currentSlug).slice(0, count);
}
