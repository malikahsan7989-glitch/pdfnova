import type { LandingPage } from "../../types";

/** Split PDF: workflow and problem-solving intents. */
export const splitPdfWorkflowPages: LandingPage[] = [
  {
    slug: "split-scanned-batch-into-separate-documents",
    toolSlug: "split-pdf",
    title: "Split a Scanned Batch Into Separate Documents | Foldryn",
    description:
      "A scanner saved several different documents as one PDF. Split it into separate files by page range and fix sideways pages first. Browser only.",
    h1: "Split a Scanned Batch Into Separate Documents",
    intent: "workflow",
    markets: ["Global"],
    primaryKeyword: "split scanned batch into separate documents",
    secondaryKeywords: ["separate scanned documents in one pdf", "scanner saved everything as one file", "split scan into individual letters", "divide scanned pdf into several documents"],
    intro:
      "When a scanner or phone app puts a whole pile of paper into one PDF, splitting it by page ranges gives you one file per document.",
    situation: [
      "Office scanners often have a \"scan to PDF\" button that makes one file from everything on the tray. A letter, a two-page receipt and a four-page contract end up as seven pages in one document. Filing them separately means cutting the file where each document starts.",
      "Scroll through and note the first and last page of each document. Fix any sideways pages first with [Rotate PDF](/rotate-pdf), then extract each range as its own file. Since extraction happens in your browser, nothing needs to leave your device to do this.",
    ],
    steps: [
      "Scroll the scan and write down each document's page range, such as 1, 2-3 and 4-7.",
      "If any page is sideways, rotate it before splitting.",
      "In [Split PDF](/split-pdf), extract each range in turn and name each downloaded file for its content.",
    ],
    example: {
      title: "Example: seven pages, three documents",
      body: "Page 1 is a letter, pages 2 and 3 a receipt, pages 4 to 7 a contract. Three extractions, 1, 2-3 and 4-7, give three correctly separated files.",
    },
    useCases: [
      "**Filing cabinets going digital.**",
      "**Mixed-post scanning** at the end of the week.",
      "**Home admin** with one folder per document.",
    ],
    limits: [
      "The tool can't detect document boundaries. You enter them.",
      "Scanned PDFs are pictures, and splitting doesn't make the text searchable.",
      "Many separate documents mean several runs, one per range.",
    ],
    faq: [
      {
        question: "Can it split automatically at blank pages?",
        answer: "No. It splits by the page numbers you enter or into single pages.",
      },
      {
        question: "What if each document is one page?",
        answer: "Choose Split every page and rename the files.",
      },
      {
        question: "Do scans lose quality when split?",
        answer: "No. Pages are copied without re-encoding.",
      },
    ],
    siblings: ["split-scanned-class-set-by-student", "split-pdf-into-separate-pages", "split-pdf-by-page-range", "split-pdf-and-download-as-zip"],
    relatedTools: ["rotate-pdf", "delete-pdf-pages", "compress-pdf"],
  },
  {
    slug: "split-pdf-in-half",
    toolSlug: "split-pdf",
    title: "Split a PDF in Half | Foldryn",
    description:
      "Cut a PDF into two parts at the midpoint or any page you choose. Check the page count, then run two extractions in your browser.",
    h1: "Split a PDF in Half, or Into Two Parts",
    intent: "workflow",
    markets: ["Global"],
    primaryKeyword: "split a pdf in half",
    secondaryKeywords: ["divide pdf into two parts", "cut pdf at page 10", "split pdf into two files", "first half and second half of a pdf"],
    intro:
      "Cutting a PDF into two parts takes two quick extractions: pages up to the cut, then pages after it.",
    situation: [
      "Reasons for halving a PDF are practical: a file is too big to attach, a document should go to two different people, or a book is easier to read in two files. The tool doesn't have a \"halve it\" button, but it only takes two entries to get there.",
      "Load the file and read the page count that appears. For a 40-page file, extract 1-20 first and then 21-40. If you'd rather cut at a particular page, like the end of a section, use that page instead of the midpoint.",
      "If the page count is odd, one half is one page longer, which doesn't matter for most uses. If the cut matters, such as keeping a section together, choose the page by looking at the content rather than by arithmetic.",
    ],
    steps: [
      "Add your file in [Split PDF](/split-pdf) and read the page count shown.",
      "Choose Extract pages, enter the first part (for example 1-20), run it, and download.",
      "Enter the second part (21-40), run it again, and download.",
    ],
    example: {
      title: "Example: a 37-page document",
      body: "With an odd page count, pick where you want the cut. Extract 1-18 and then 19-37, so nothing is lost or repeated.",
    },
    useCases: [
      "**Attachment limits:** send two smaller emails.",
      "**Two reviewers** each taking one half.",
      "**Splitting a book** into two reading files.",
    ],
    limits: [
      "Neither half will necessarily be half the file size, since pages differ in weight.",
      "No automatic split by size.",
      "Pages stay in ascending order.",
    ],
    faq: [
      {
        question: "Will the two files add up to the original size?",
        answer: "They are roughly in proportion, but not exact, because page content varies.",
      },
      {
        question: "Can I split into three or four parts?",
        answer: "Yes. Run an extraction for each range, such as 1-10, 11-20 and 21-30.",
      },
      {
        question: "Can I rejoin the parts?",
        answer: "Yes, with [Merge PDF](/merge-pdf).",
      },
    ],
    siblings: ["split-large-pdf-for-email-limit", "split-pdf-every-n-pages", "split-pdf-by-page-range", "split-textbook-pdf-into-chapters"],
    relatedTools: ["merge-pdf", "compress-pdf", "extract-pdf-pages"],
  },
  {
    slug: "split-pdf-by-page-range",
    toolSlug: "split-pdf",
    title: "Split a PDF by Page Range: How to Enter Pages | Foldryn",
    description:
      "How to write page ranges such as 1,3,5-8 when splitting a PDF, what happens to order and duplicates, and a few worked examples.",
    h1: "How to Split a PDF by Page Range (1,3,5-8 Explained)",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "split pdf by page range",
    secondaryKeywords: ["how to enter page numbers to split pdf", "extract pages 3 to 7 from pdf", "pdf page range format", "pick pages from pdf by number"],
    intro:
      "Page ranges are a small bit of syntax. Once you know it, you can pick almost any combination of pages.",
    situation: [
      "In Extract pages mode you type the pages you want. Separate individual pages with commas and use a dash for a run of pages: 1,3,5-8 means pages 1, 3, 5, 6, 7 and 8. Spaces don't matter, and everything you list ends up together in one new PDF.",
      "Two rules are worth knowing. The output is always in ascending order, so 8,1,3 gives pages 1, 3 and 8. And a page repeated in the list appears once. A backwards range such as 8-5, or a page beyond the document's length, shows an error instead of producing a wrong file.",
    ],
    steps: [
      "Add your PDF in [Split PDF](/split-pdf) and note the page count.",
      "Write your pages with commas for single pages and a dash for runs, for example 2,4-6,10.",
      "Run the split and open the result to confirm it holds the right pages.",
    ],
    example: {
      title: "Example: four entries and their results",
      body: "\"3\" gives one page. \"3-7\" gives five pages. \"1,3,5-8\" gives six pages. \"8,1,3\" gives pages 1, 3 and 8, in that order.",
    },
    useCases: [
      "**Quick extracts** from long documents.",
      "**Scattered pages** such as a title page and an appendix.",
      "**Repeatable ranges** you can type from your notes.",
    ],
    limits: [
      "You can't reorder pages in one pass.",
      "Printed page numbers can differ from PDF positions.",
      "Only whole pages are selected, never part of a page.",
    ],
    faq: [
      {
        question: "Can I use \"all\" or \"end\" in the list?",
        answer: "No. Use real page numbers, based on the page count the tool shows.",
      },
      {
        question: "What if I list a page twice?",
        answer: "It's included once.",
      },
      {
        question: "Why do I get an error?",
        answer: "Usually a range going backwards or a page beyond the last one. See our [error guide](/split-pdf/split-pdf-page-range-error).",
      },
    ],
    siblings: ["split-pdf-page-range-error", "split-pdf-printed-numbers-vs-pdf-pages", "share-only-some-pages-of-a-pdf", "split-pdf-in-half"],
    relatedTools: ["extract-pdf-pages", "delete-pdf-pages", "merge-pdf"],
    guides: [{ title: "How to extract pages from a PDF, step by step", href: "/blog/how-to-split-extract-pages-from-pdf" }],
  },
  {
    slug: "split-pdf-every-n-pages",
    toolSlug: "split-pdf",
    title: "Split a PDF Every 2, 5 or 10 Pages: What Works | Foldryn",
    description:
      "Foldryn has no \"split every N pages\" option. Here is what it can do instead: single pages, typed ranges, and merging single pages into groups.",
    h1: "Splitting a PDF Every 2, 5 or 10 Pages: What Works Here",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "split pdf every n pages",
    secondaryKeywords: ["split pdf every 2 pages", "split pdf into chunks of 10 pages", "split pdf every 5 pages", "divide pdf into equal parts"],
    intro:
      "There isn't a \"split every N pages\" setting. You can still get there with typed ranges or with a split-then-merge approach.",
    situation: [
      "Some tools ask for a number and cut the PDF into equal chunks. Split PDF doesn't. It splits into single pages or extracts a list of pages you type. If you came looking for an automatic chunker, it's better to know that now than to hunt for a hidden option.",
      "For a few chunks, typed ranges are quickest: for a 30-page file in tens, run 1-10, 11-20 and 21-30. For many chunks, split every page and merge groups back with [Merge PDF](/merge-pdf), or write ranges in a text note and paste them one at a time.",
    ],
    steps: [
      "Check the page count and decide the chunk size, such as 10.",
      "Run [Split PDF](/split-pdf) once per chunk: 1-10, then 11-20, then 21-30.",
      "For dozens of chunks, split every page and merge each group of pages back together.",
    ],
    example: {
      title: "Example: 30 pages in tens",
      body: "Three runs, 1-10, 11-20 and 21-30, give three ten-page files. Each run is one entry and one download.",
    },
    useCases: [
      "**Sending in batches** of a fixed length.",
      "**Printing runs** with a set number of sheets.",
      "**Handing out equal parts** to several people.",
    ],
    limits: [
      "No automatic equal-chunk splitting.",
      "Many chunks mean many runs.",
      "No splitting by file size or bookmarks.",
    ],
    faq: [
      {
        question: "Is a chunk-size option planned?",
        answer: "That isn't something we can promise. For now the options are single pages or typed ranges.",
      },
      {
        question: "What's the quickest way for 50 chunks?",
        answer: "Realistically, a splitter built for batches would be quicker. For a handful of chunks, typed ranges are fine.",
      },
      {
        question: "Can I do two-page chunks?",
        answer: "Yes, with ranges such as 1-2, 3-4 and so on, one run each.",
      },
    ],
    siblings: ["split-pdf-in-half", "split-pdf-and-download-as-zip", "split-invoices-pdf-into-individual-invoices", "split-large-pdf-for-email-limit"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "compress-pdf"],
  },
  {
    slug: "split-large-pdf-for-email-limit",
    toolSlug: "split-pdf",
    title: "Split a Large PDF to Fit an Email Limit | Foldryn",
    description:
      "Break a big PDF into smaller parts that fit under an email or upload limit. Foldryn can't split by size, so here's a page-based method.",
    h1: "Split a Large PDF to Fit an Email or Upload Limit",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "split large pdf for email",
    secondaryKeywords: ["pdf too big to email split into parts", "break pdf into smaller files for upload", "split pdf under 10mb", "divide large pdf attachments"],
    intro:
      "If a PDF is too big to attach, cutting it into parts can solve it. Since there's no split-by-size option, you do it by pages.",
    situation: [
      "Email services and portals cap attachment sizes, and a long PDF full of scans or photos can pass the limit easily. A common fix is to send two or three smaller files instead of one.",
      "Because Foldryn splits by page numbers, you choose where to cut. Start by halving, then check the size of each result in your file manager. If a part is still too big, split it again. Pages with large images weigh more than text pages, so equal page counts don't always mean equal sizes.",
    ],
    steps: [
      "Check the file size and your limit, then guess how many parts you need.",
      "In [Split PDF](/split-pdf), extract the first range, for example 1-25, and check its size.",
      "Extract the rest, check each size, and re-split any part still over the limit.",
    ],
    example: {
      title: "Example: a 34 MB scan and a 20 MB limit",
      body: "Splitting 80 pages into 1-40 and 41-80 gives roughly 17 MB each, both under the limit. Send them in two emails and say which is part one and which part two.",
    },
    useCases: [
      "**Email attachments** over a size cap.",
      "**Portals** that accept several files.",
      "**Slow connections** where smaller uploads are safer.",
    ],
    limits: [
      "No automatic splitting by file size.",
      "[Compress PDF](/compress-pdf) doesn't recompress images, so it may not help scan-heavy files.",
      "Recipients must be happy to receive several files. Some portals need one.",
    ],
    faq: [
      {
        question: "Should I compress or split?",
        answer: "Try Compress PDF first for text-heavy files. For image-heavy ones, splitting usually works better.",
      },
      {
        question: "Can the recipient join the parts back?",
        answer: "Yes, with any PDF merge tool, including [Merge PDF](/merge-pdf).",
      },
      {
        question: "What is the maximum file size here?",
        answer: "The tool accepts files up to 50 MB.",
      },
    ],
    siblings: ["split-pdf-in-half", "split-pdf-every-n-pages", "split-pdf-on-android", "split-scanned-batch-into-separate-documents"],
    relatedTools: ["compress-pdf", "merge-pdf", "delete-pdf-pages"],
    guides: [{ title: "How to compress PDF files for online application portals", href: "/blog/compress-pdf-for-application-portals" }],
  },
  {
    slug: "split-pdf-page-range-error",
    toolSlug: "split-pdf",
    title: "Split PDF Page Range Error: Causes and Fixes | Foldryn",
    description:
      "Getting an error when you enter pages to extract? The usual causes are a backwards range, a page past the end, or a typo. Quick fixes inside.",
    h1: "Fixing a Page Range Error When Splitting a PDF",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "pdf split page range error",
    secondaryKeywords: ["invalid page range pdf", "page number out of range when extracting pdf", "pdf extract pages not working", "split pdf says invalid pages"],
    intro:
      "A page-range error nearly always means the text you typed doesn't match the document. The fix is quick once you know which case you've hit.",
    situation: [
      "The tool checks your list against the file before it does anything. A range that runs backwards, like 8-5, shows an error. So does a page beyond the last one, like 30 in a 24-page file, or text that isn't a page number.",
      "Go by the page count that appears when your file loads, not by the numbers printed on the pages. A document with a cover or preface can have 24 PDF pages but a printed \"page 24\" that is really PDF page 26, which is how people end up with out-of-range errors.",
    ],
    steps: [
      "Look at the page count the tool shows after loading your PDF.",
      "Re-type your list using commas and dashes only, with the smaller number first in each range.",
      "Make sure no number is bigger than the page count, then run it again.",
    ],
    example: {
      title: "Example: three common mistakes",
      body: "\"12-9\" runs backwards, so write 9-12. \"1-30\" in a 24-page file goes past the end, so write 1-24. \"1;3;5\" uses semicolons, so write 1,3,5.",
    },
    useCases: [
      "**Fixing a stuck extraction** quickly.",
      "**Checking inputs** before a long list.",
      "**Understanding page counts** versus printed numbers.",
    ],
    limits: [
      "If the file itself is damaged or password-protected, the problem isn't your range.",
      "Only whole numbers, commas and dashes are accepted.",
      "Page numbers start at 1 and count every page, including covers.",
    ],
    faq: [
      {
        question: "Why does it say the page doesn't exist?",
        answer: "The number is larger than the document's page count. Use the count the tool shows.",
      },
      {
        question: "Does a space in the list matter?",
        answer: "No, spaces are fine. The separators must be commas and dashes.",
      },
      {
        question: "Still failing?",
        answer: "Try opening the PDF in a viewer. If it won't open there either, the file may be damaged, so download it again.",
      },
    ],
    siblings: ["split-pdf-by-page-range", "split-pdf-printed-numbers-vs-pdf-pages", "split-password-protected-pdf", "split-pdf-on-windows"],
    relatedTools: ["extract-pdf-pages", "delete-pdf-pages", "rotate-pdf"],
  },
  {
    slug: "split-password-protected-pdf",
    toolSlug: "split-pdf",
    title: "Can't Split a Password-Protected PDF? Fix It | Foldryn",
    description:
      "Split PDF can't process password-protected files. Learn why, and how to make an unprotected copy of a file you're allowed to use, then split it.",
    h1: "Why a Password-Protected PDF Won't Split, and What to Do",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "split password protected pdf",
    secondaryKeywords: ["extract pages from encrypted pdf", "pdf locked cannot extract pages", "split secured pdf", "split pdf says password required"],
    intro:
      "Foldryn can't split a password-protected or encrypted PDF. For a file you're entitled to use, there's a straightforward workaround.",
    situation: [
      "Bank statements, payslips and some government documents arrive locked. A viewer opens them once you type the password, but the splitter has to read the pages itself and it can't unlock files. It shows an error instead of producing a damaged result.",
      "If the document is yours, open it in a viewer you trust, enter the password, and save or print the document to a new PDF. That copy has no password and can be split like any other file. Handle the unprotected copy with care, since it's no longer locked.",
      "If you receive a locked file from someone else, ask them for an unlocked copy. That's often simpler than making one yourself, and it avoids handling a file you may not be meant to unlock.",
    ],
    steps: [
      "Open the protected PDF in a viewer or browser and enter the password.",
      "Save a copy or use \"Save as PDF\" from the print dialog to make a new, unlocked file.",
      "Add the new file to [Split PDF](/split-pdf) and extract your pages as usual.",
    ],
    example: {
      title: "Example: a locked payslip PDF",
      body: "A payslip PDF asks for a password. Open it, save an unprotected copy, then extract page 3 from that copy to send on.",
    },
    useCases: [
      "**Statements and payslips** from portals.",
      "**Files locked by default** by an office scanner.",
      "**Your own old protected files.**",
    ],
    limits: [
      "Foldryn doesn't remove or crack passwords.",
      "Only handle files you're entitled to use.",
      "Some viewers restrict saving or printing, which may block the workaround.",
    ],
    faq: [
      {
        question: "Is this a bug?",
        answer: "No. The tool refuses files it can't read rather than producing a broken result.",
      },
      {
        question: "Do you recover forgotten passwords?",
        answer: "No. There's no password removal or recovery feature.",
      },
      {
        question: "Could a damaged file show the same problem?",
        answer: "Possibly. If the file isn't protected but won't open in a viewer either, download it again.",
      },
    ],
    siblings: ["split-bank-statement-pdf-by-month", "split-pdf-page-range-error", "split-pdf-without-uploading", "split-tax-return-pdf-into-sections"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "delete-pdf-pages"],
  },
  {
    slug: "split-pdf-printed-numbers-vs-pdf-pages",
    toolSlug: "split-pdf",
    title: "PDF Page Numbers Don't Match? Pick the Right Pages | Foldryn",
    description:
      "Printed page numbers often differ from a PDF's real page positions. Learn why, and how to pick the right pages when you split a PDF.",
    h1: "Printed Page Numbers vs. PDF Page Positions When Splitting",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "pdf page numbers do not match actual pages",
    secondaryKeywords: ["page 1 is not the first page of the pdf", "roman numeral pages pdf extract", "printed page number vs pdf page number", "wrong pages extracted from pdf"],
    intro:
      "Page 45 in the book and page 45 in the PDF are often different pages. Split by the PDF's own count.",
    situation: [
      "Books and reports usually start numbering after the cover, the contents and the preface, sometimes with roman numerals first. The printed number on a page can be 12 when it's the 20th page of the file. A splitter counts every page from the very first one, so entering 12 gives you the wrong page.",
      "The tool shows how many pages your file has, but not the printed labels. The reliable approach is to open the PDF in a viewer, find the page you want, and read its position in the viewer's page box, which counts from the first page. Use that number in Extract pages.",
    ],
    steps: [
      "Open the PDF in a viewer and jump to the page you want.",
      "Read the viewer's own page counter, such as 20 of 310, and note that number.",
      "Enter that number in [Split PDF](/split-pdf), extract, and check the first and last page of the result.",
    ],
    example: {
      title: "Example: chapter 2 starts on printed page 31",
      body: "The preface takes up eight PDF pages, so printed page 31 is PDF page 39. Enter 39, not 31, to start the chapter extract.",
    },
    useCases: [
      "**Textbooks** with front matter.",
      "**Reports** with a cover and contents.",
      "**Scanned books** with unnumbered pages.",
    ],
    limits: [
      "Some viewers show both a printed label and a position, so read carefully which is which.",
      "The tool can't map printed numbers to positions for you.",
      "Always open the result and check the first and last pages.",
    ],
    faq: [
      {
        question: "Why is the extract off by a few pages?",
        answer: "The printed numbers are probably offset by front matter. Count from the first page of the file.",
      },
      {
        question: "Can I enter roman numerals?",
        answer: "No. Only numbers, commas and dashes work.",
      },
      {
        question: "Can I renumber the extract?",
        answer: "Yes, afterwards, with [PDF Page Numbering](/pdf-page-numbering) which lets you pick the starting number.",
      },
    ],
    siblings: ["split-pdf-page-range-error", "split-pdf-by-page-range", "split-textbook-pdf-into-chapters", "split-bank-statement-pdf-by-month"],
    relatedTools: ["pdf-page-numbering", "extract-pdf-pages", "delete-pdf-pages"],
  },
  {
    slug: "split-pdf-and-download-as-zip",
    toolSlug: "split-pdf",
    title: "Split a PDF and Download All Pages as a ZIP | Foldryn",
    description:
      "How the ZIP output works when you split every page of a PDF: file names, what's inside, and how to open it on a phone or computer.",
    h1: "Split a PDF and Download the Pages as a ZIP",
    intent: "file-format",
    markets: ["Global"],
    primaryKeyword: "split pdf pages into a zip file",
    secondaryKeywords: ["download split pdf pages zip", "how to open zip of pdf pages", "pdf pages as individual files in zip", "split pdf each page separate file download"],
    intro:
      "When a split makes several files, you get them as one ZIP. Here's what's inside and how to open it.",
    situation: [
      "Choosing Split every page creates one PDF per page. A ZIP is one file that holds all of them, which avoids a flurry of separate downloads. The ZIP is created in your browser, so nothing is uploaded to build it.",
      "Inside, the files are named page-1.pdf, page-2.pdf and so on, matching each page's position in the original. A one-page document produces a single PDF with no ZIP. After downloading, open the ZIP with your device's built-in unzip or extract option.",
      "Unzipping is a right-click away on Windows and macOS, and on phones the Files app or a file manager handles it. If you later need the pages as a single PDF again, add the extracted files to [Merge PDF](/merge-pdf).",
    ],
    steps: [
      "In [Split PDF](/split-pdf), add your file and choose **Split every page**.",
      "Run it and download the ZIP your browser offers.",
      "Open or extract the ZIP on your device, then rename the files as needed.",
    ],
    example: {
      title: "Example: what a 5-page file produces",
      body: "A five-page PDF gives a ZIP containing page-1.pdf through page-5.pdf, each a single-page PDF with the content of that page.",
    },
    useCases: [
      "**Many pages** you want to process separately.",
      "**Phones and tablets** where a ZIP is a single download.",
      "**Handing a folder** of single pages to someone.",
    ],
    limits: [
      "Names are position-based. Renaming is manual.",
      "Some phones need a file manager app to open ZIPs.",
      "Very long documents create many files and use more memory.",
    ],
    faq: [
      {
        question: "Why didn't I get a ZIP?",
        answer: "If the result is a single file, such as an extract or a one-page document, it downloads as a PDF.",
      },
      {
        question: "How do I open a ZIP on a phone?",
        answer: "Tap it in your file manager or Files app and choose to extract or preview its contents.",
      },
      {
        question: "Is the ZIP stored by Foldryn?",
        answer: "No. It's built on your device and downloaded from it.",
      },
    ],
    siblings: ["split-pdf-into-separate-pages", "split-payroll-pdf-into-payslips", "split-scanned-class-set-by-student", "split-pdf-slides-into-single-pages"],
    relatedTools: ["merge-pdf", "pdf-to-jpg", "compress-pdf"],
  },
  {
    slug: "reorder-pdf-pages-split-and-merge",
    toolSlug: "split-pdf",
    title: "Reorder PDF Pages With Split and Merge | Foldryn",
    description:
      "Foldryn can't drag pages around, but you can rearrange a PDF by splitting it into pages and merging them in a new order. Step-by-step.",
    h1: "Reorder PDF Pages by Splitting and Merging",
    intent: "workflow",
    markets: ["Global"],
    primaryKeyword: "reorder pdf pages by splitting and merging",
    secondaryKeywords: ["rearrange pages in a pdf", "change page order in pdf", "move a page in a pdf", "swap two pages in pdf"],
    intro:
      "There's no page-drag editor here, but splitting then merging gets you a new page order in your browser.",
    situation: [
      "Extracted pages always come out in ascending order, so a single extraction can't rearrange a document. What you can do is turn the document into single-page files, then use Merge PDF, whose list can be reordered with an arrow on each row, to build the order you want.",
      "That's practical for a handful of pages. For a long file with only one page in the wrong place, it's quicker to cut the document into three pieces around that page and merge them with the page in its new position.",
    ],
    steps: [
      "In [Split PDF](/split-pdf), choose Split every page and download the ZIP, then unzip it.",
      "Add the page files to [Merge PDF](/merge-pdf) and use the arrows to put them in the new order.",
      "Press **Merge PDFs**, download, and check the page order in the result.",
    ],
    example: {
      title: "Example: moving page 5 to the front",
      body: "Split a 6-page file into six files. In Merge PDF, move page-5.pdf to the top, then merge. The new document starts with the old page 5.",
    },
    useCases: [
      "**A page scanned out of order.**",
      "**Putting a cover first** when it ended up last.",
      "**Re-sequencing** slides saved as a PDF.",
    ],
    limits: [
      "It takes several steps compared with an editor that drags pages.",
      "Many pages mean a long merge list.",
      "Sideways pages need fixing separately with [Rotate PDF](/rotate-pdf).",
    ],
    faq: [
      {
        question: "Is there an easier way for long documents?",
        answer: "For one misplaced page, split the file into ranges around it and merge them in the new order, instead of making every page a file.",
      },
      {
        question: "Does the quality change?",
        answer: "No. Pages are copied in both steps, not redrawn.",
      },
      {
        question: "Can I do this on a phone?",
        answer: "Yes, though handling many files is easier on a larger screen.",
      },
    ],
    siblings: ["split-pdf-slides-into-single-pages", "split-contract-pdf-into-sections", "split-pdf-and-download-as-zip", "split-pdf-in-half"],
    relatedTools: ["merge-pdf", "rotate-pdf", "pdf-page-numbering"],
    guides: [{ title: "How to merge PDF files in the right order", href: "/blog/how-to-merge-pdf-files-in-order" }],
  },
];
