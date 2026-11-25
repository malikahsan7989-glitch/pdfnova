import type { LandingPage } from "../../types";

/** Merge PDF: workflow and problem-solving intents that combine Merge PDF with other Foldryn tools. */
export const mergePdfWorkflowPages: LandingPage[] = [
  {
    slug: "merge-scanned-pages-into-one-pdf",
    toolSlug: "merge-pdf",
    title: "Merge Scanned Pages Into One PDF | Foldryn",
    description:
      "Join separate scanned PDFs into one document. Fix sideways pages first, set the order, and merge in your browser. Tips for keeping scans readable.",
    h1: "Merge Scanned Pages Into One PDF",
    intent: "workflow",
    markets: ["Global"],
    primaryKeyword: "merge scanned pages into one pdf",
    secondaryKeywords: ["combine scanned documents pdf", "join scanner output files", "multiple scans one pdf", "merge scan pdfs in order"],
    intro:
      "Scanners and scanning apps often save every batch as its own file. Straighten them out, order them, and join them into one document.",
    situation: [
      "A flatbed or office scanner may produce a new PDF each time you press the button, so a ten-page letter can end up as three files. Phone scanning apps do the same when you start a new scan. The result is a folder of fragments that only make sense in a certain order.",
      "Before merging, look for pages that came out sideways or upside down. Merging keeps each page as it is, so fix orientation first with [Rotate PDF](/rotate-pdf). Then combine the files, and the finished document reads from start to finish.",
    ],
    steps: [
      "Open any file with a sideways page in [Rotate PDF](/rotate-pdf), turn those pages, and download the corrected copy.",
      "Add all the scan files to [Merge PDF](/merge-pdf), in reading order, and press **Merge PDFs**.",
      "Scroll through the download to confirm no page is missing, duplicated or unreadable.",
    ],
    example: {
      title: "Example: a signed lease scanned in three goes",
      body: "Pages 1 to 4 were scanned first, 5 to 8 second, and 9 to 12 after a paper jam. Name the files scan-1, scan-2, scan-3, merge them in that order, and the lease runs through all twelve pages.",
    },
    useCases: [
      "**Paper archives** scanned over several sessions.",
      "**Phone scans** started more than once.",
      "**Shared scanners** that name files by time rather than content.",
    ],
    limits: [
      "Scans are images, so a large batch can make a large file. Scanning text at 150 to 200 DPI is often enough.",
      "Merging doesn't make scanned text searchable. That needs OCR, which Foldryn doesn't do.",
      "Merged files are the combined size of the originals, roughly.",
    ],
    faq: [
      {
        question: "Why are some of my pages sideways?",
        answer: "Scanners sometimes detect orientation wrongly. Rotate those pages before merging so the finished document is the right way up.",
      },
      {
        question: "Does merging reduce the quality of the scans?",
        answer: "No. Pages are copied across without being re-encoded.",
      },
      {
        question: "Is there a guide to combining scanned receipts too?",
        answer: "Yes. It's linked below.",
      },
    ],
    siblings: ["merge-receipts-into-one-pdf", "merge-photos-and-pdfs-into-one-file", "merge-large-pdf-files", "merge-pdf-on-android"],
    relatedTools: ["rotate-pdf", "compress-pdf", "delete-pdf-pages"],
    guides: [{ title: "How to combine scanned receipts and documents into one PDF", href: "/blog/combine-scanned-receipts-into-one-pdf" }],
  },
  {
    slug: "merge-photos-and-pdfs-into-one-file",
    toolSlug: "merge-pdf",
    title: "Combine Photos and PDFs Into One File | Foldryn",
    description:
      "Combine JPG or PNG photos with PDF documents in one file: turn the photos into a PDF first, then merge. Two short steps, both in your browser.",
    h1: "Combine Photos and PDF Documents Into One File",
    intent: "file-format",
    markets: ["Global"],
    primaryKeyword: "combine jpg and pdf into one file",
    secondaryKeywords: ["merge image and pdf", "add photo to pdf document", "combine png and pdf", "photos and documents single pdf"],
    intro:
      "Merge PDF joins PDFs only, so photos need one extra step: convert them to a PDF, then combine that with your documents.",
    situation: [
      "It's common to have a form saved as a PDF plus a handful of phone photos, such as a signed page, an ID copy or damage pictures, that all need to go together. The merge tool accepts PDF files, so images need converting first.",
      "[JPG to PDF](/jpg-to-pdf) makes a PDF from JPG or PNG images, one image per page, with Auto, A4 or Letter page sizes. Once the photos are one PDF, merge it with your other documents in whichever order suits.",
    ],
    steps: [
      "In [JPG to PDF](/jpg-to-pdf), add your photos, set their order and page size, and download the PDF.",
      "Open [Merge PDF](/merge-pdf) and add the document PDF and your new photo PDF.",
      "Order the list, press **Merge PDFs**, and download the combined file.",
    ],
    example: {
      title: "Example: form plus three photos",
      body: "A two-page PDF form and three photographs of a signed page become a five-page PDF. The photos go through JPG to PDF first and become pages 3 to 5.",
    },
    useCases: [
      "**Claims and applications** with photographic evidence.",
      "**Homework** that mixes typed pages and pictures of working.",
      "**Records** where a photo needs to sit beside the paperwork.",
    ],
    limits: [
      "JPG to PDF accepts JPG and PNG up to 20 MB each. HEIC photos must be converted to JPG first.",
      "Photos are embedded as they are, so large photos make a large PDF.",
      "Two tools means two downloads, but each stays in your browser.",
    ],
    faq: [
      {
        question: "Can Merge PDF take JPG files directly?",
        answer: "No. It accepts PDF files only, so convert images with JPG to PDF first.",
      },
      {
        question: "What page size should I pick for photos?",
        answer: "Auto keeps each image's own proportions. Letter or A4 suits printing, and Letter is standard in the US and Canada while A4 is common elsewhere.",
      },
      {
        question: "Can I put a photo between two PDF pages?",
        answer: "Yes. Convert the photo to a one-page PDF, then place it between the other files in the Merge list.",
      },
    ],
    siblings: ["merge-pdf-for-insurance-claim", "merge-receipts-into-one-pdf", "merge-scanned-pages-into-one-pdf", "merge-pdf-on-iphone"],
    relatedTools: ["jpg-to-pdf", "pdf-to-jpg", "compress-pdf"],
    guides: [{ title: "PDF vs. JPG: which format should you use?", href: "/blog/pdf-vs-jpg-which-format-to-use" }],
  },
  {
    slug: "merge-pdf-and-add-page-numbers",
    toolSlug: "merge-pdf",
    title: "Merge PDFs and Add Page Numbers | Foldryn",
    description:
      "Merge several PDFs, then number every page once so references run continuously. A two-step workflow in your browser, with a note on skipping a cover.",
    h1: "Merge PDFs and Add Continuous Page Numbers",
    intent: "workflow",
    markets: ["Global"],
    primaryKeyword: "merge pdf and add page numbers",
    secondaryKeywords: ["number pages after combining pdfs", "continuous page numbers merged pdf", "page numbers across multiple pdf files", "combine pdf then number pages"],
    intro:
      "Number a document once it is finished. Merge first, then add page numbers to the combined file so they run from start to end.",
    situation: [
      "Numbering each file separately gives you several pages labelled 1. Numbering the finished document gives you one unbroken sequence, which is what readers need when they say \"see page 14\".",
      "So the order is: merge the files, then open the result in [PDF Page Numbering](/pdf-page-numbering), choose one of the six positions, and pick the starting number. The numbers are small, dark gray and plain, so they sit out of the way of the content.",
    ],
    steps: [
      "Merge your files in [Merge PDF](/merge-pdf) and download the combined PDF.",
      "Open [PDF Page Numbering](/pdf-page-numbering), add the combined file, and choose a position and starting number.",
      "Press Add Page Numbers and download the numbered PDF. Check that numbers don't overlap existing footers.",
    ],
    example: {
      title: "Example: keeping the cover unnumbered",
      body: "To leave a cover page without a number, extract everything after the cover, number that part starting from 2, then merge the cover back in front. Our guide linked below walks through it.",
    },
    useCases: [
      "**Reports and theses** built from several files.",
      "**Contract and exhibit bundles** where pages are cited.",
      "**Printed packs** where loose pages must stay in order.",
    ],
    limits: [
      "Numbers already printed on the original pages stay. Pick a position that doesn't collide, such as the top if footers are busy.",
      "The numbers are plain and small, and you can't change the font or style.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Should I number before or after merging?",
        answer: "After, if you want one continuous sequence. Numbering first gives each file its own numbering.",
      },
      {
        question: "Can I start from a number other than 1?",
        answer: "Yes. The starting number is a setting.",
      },
      {
        question: "Does the page numbering tool upload my file?",
        answer: "No. Like the merge tool, it works in your browser and doesn't upload your PDF to Foldryn.",
      },
    ],
    siblings: ["merge-pdf-for-legal-exhibits", "merge-pdf-chapters-into-one-document", "merge-pdf-for-meeting-packet", "merge-pdf-for-print"],
    relatedTools: ["pdf-page-numbering", "extract-pdf-pages", "split-pdf"],
    guides: [{ title: "How to add page numbers to a PDF", href: "/blog/how-to-add-page-numbers-to-pdf" }],
  },
  {
    slug: "merge-pdf-and-reduce-file-size",
    toolSlug: "merge-pdf",
    title: "Merge PDFs and Reduce the File Size | Foldryn",
    description:
      "Merged PDF too big to email or upload? See how to check its size, try compressing it, and what to do when the images are the problem.",
    h1: "Merge PDFs, Then Try to Reduce the File Size",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "merge pdf and reduce file size",
    secondaryKeywords: ["combine pdfs under email size limit", "merged pdf too large to upload", "make merged pdf smaller", "reduce size of combined pdf"],
    intro:
      "A merged PDF is roughly the sum of its parts. If that sum is over an upload limit, there are a few things to try, and one honest limit.",
    situation: [
      "Merging doesn't compress anything: ten 2 MB files make a file of around 20 MB. Portals and email systems often cap attachments, so the combined file can be refused even when each piece was fine.",
      "[Compress PDF](/compress-pdf) repackages the file's internal structure, which can trim repeated overhead. It does not recompress the images inside, so a file full of scans or photos may shrink only a little or not at all. The tool shows the original size, the new size and the percentage change, so you can decide whether to use the result.",
    ],
    steps: [
      "Merge your files in [Merge PDF](/merge-pdf) and download the combined PDF. Note its size in your file manager.",
      "Open [Compress PDF](/compress-pdf), add the merged file and compress it. Compare the two sizes.",
      "If it is still too large, remove pages you don't need, or re-scan at a lower resolution and merge again.",
    ],
    example: {
      title: "Example: a 14 MB packet and a 10 MB limit",
      body: "A merged packet is 14 MB and the portal accepts 10 MB. Compressing saves a little, but most of the size is scanned pages. Removing two blank scans with Delete PDF Pages and re-scanning one colour page in greyscale gets under the limit.",
    },
    useCases: [
      "**Application portals** with an upload ceiling.",
      "**Email attachments** that bounce.",
      "**Storage:** keeping a long document smaller.",
    ],
    limits: [
      "There is no target-size setting such as \"under 5 MB\".",
      "Images inside the PDF are not recompressed, so image-heavy files may not shrink much.",
      "Some already-efficient PDFs come out about the same size or slightly larger. The tool tells you either way.",
    ],
    faq: [
      {
        question: "Why is my merged PDF so big?",
        answer: "Its size is about the total of the originals, and scanned or photo-heavy pages are large.",
      },
      {
        question: "Does Compress PDF lower the quality?",
        answer: "It doesn't re-encode your text or images, so pages should look the same.",
      },
      {
        question: "What helps most when images are the problem?",
        answer: "Scan text documents at a lower resolution (150 to 200 DPI is often enough) or in black and white, then merge again.",
      },
    ],
    siblings: ["merge-large-pdf-files", "merge-pdf-for-job-application", "merge-pdf-for-portfolio", "merge-pdf-for-visa-application"],
    relatedTools: ["compress-pdf", "delete-pdf-pages", "extract-pdf-pages"],
    guides: [{ title: "How to compress PDF files for online application portals", href: "/blog/compress-pdf-for-application-portals" }],
  },
  {
    slug: "merge-password-protected-pdf",
    toolSlug: "merge-pdf",
    title: "Can't Merge a Password-Protected PDF? Fix It | Foldryn",
    description:
      "Merge fails on a password-protected or encrypted PDF. Learn why, and how to make an unprotected copy of a file you're allowed to use, then merge it.",
    h1: "Why a Password-Protected PDF Won't Merge, and What to Do",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "merge password protected pdf",
    secondaryKeywords: ["cannot merge encrypted pdf", "pdf merge error password", "combine locked pdf files", "bank statement pdf won't merge"],
    intro:
      "Foldryn can't merge a PDF that is password-protected or encrypted. Here is why, and a legitimate way round it for files that are yours.",
    situation: [
      "Banks, payroll systems and some government sites send PDFs that are locked with a password or encryption. Opening one in a reader works because you type the password there, but the merge tool has to read the file's pages itself, and it can't unlock files. When it meets one, it shows an error rather than producing a damaged result.",
      "If the document is yours, or you're permitted to use it, you can create an unprotected copy with a program that already opens it. Open the file in your PDF viewer, enter the password, and save or print the document to a new PDF. Then use that copy for merging.",
    ],
    steps: [
      "Open the protected PDF in a PDF viewer or browser and enter the password.",
      "Save a copy, or use the print dialog's \"Save as PDF\" option, to create a new file without the password.",
      "Add the new copy to [Merge PDF](/merge-pdf) with your other files, and merge as usual.",
    ],
    example: {
      title: "Example: bank statements for a loan",
      body: "Three statements downloaded from online banking each ask for a password. Open each one, save an unprotected copy, then merge the copies. Keep or delete the copies afterwards, as you prefer.",
    },
    useCases: [
      "**Statements and payslips** from financial or payroll portals.",
      "**Scanned documents** protected by an office scanner's default.",
      "**Files that merge fine except one.**",
    ],
    limits: [
      "Foldryn doesn't remove passwords or crack protection. Only handle files you are entitled to use.",
      "A copy made this way is no longer protected, so store and share it with care.",
      "Some viewers restrict printing or saving for certain files, which may prevent making a copy.",
    ],
    faq: [
      {
        question: "Is the error a bug?",
        answer: "No. The tool is refusing a file it can't read, which is better than silently producing a broken PDF.",
      },
      {
        question: "Does Foldryn recover lost passwords?",
        answer: "No. There is no password removal or recovery feature.",
      },
      {
        question: "Could a damaged file cause the same error?",
        answer: "Yes. If your file isn't protected, try opening it in a PDF viewer. If it won't open there either, re-download it from the source.",
      },
    ],
    siblings: ["merge-pdf-for-mortgage-documents", "merge-pdf-without-uploading", "merge-pdf-for-rental-application", "merge-large-pdf-files"],
    relatedTools: ["extract-pdf-pages", "compress-pdf", "split-pdf"],
  },
  {
    slug: "merge-large-pdf-files",
    toolSlug: "merge-pdf",
    title: "Merge Large PDF Files: Limits and Tips | Foldryn",
    description:
      "Merging big PDFs in your browser: the 50 MB per-file limit, why memory matters, and how to work in stages or trim pages when a merge struggles.",
    h1: "Merging Large PDF Files: Limits and Practical Tips",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "merge large pdf files",
    secondaryKeywords: ["combine big pdf files", "merge pdf over 50mb", "pdf merge too slow or crashes", "merge hundreds of pdf pages"],
    intro:
      "Merging happens on your own device, so big jobs depend on your device's memory as well as Foldryn's limits.",
    situation: [
      "Each file you add to Merge PDF can be up to 50 MB. There's no fixed cap on how many files you add, but the whole combination is built in your browser's memory. A phone or an older laptop with many tabs open has less room than a modern desktop, so a very large merge may be slow or fail there.",
      "If a merge struggles, work in stages. Merge a few files into a part, merge more into another, then merge the parts. Trim before you start too: pages you don't need cost memory, and removing them is often the biggest single saving.",
    ],
    steps: [
      "Close other tabs and apps to free up memory, then try the merge again on a larger device if you have one.",
      "Remove pages you don't need with [Delete PDF Pages](/delete-pdf-pages), or keep only some with [Extract PDF Pages](/extract-pdf-pages).",
      "If it still struggles, merge in groups, then merge the group files together.",
    ],
    example: {
      title: "Example: forty scanned files in two stages",
      body: "Merge files 1 to 20 into Part A, files 21 to 40 into Part B, then merge Part A and Part B. The final document is the same, and each step asks less of your device.",
    },
    useCases: [
      "**Big scan archives.**",
      "**Image-heavy reports** and portfolios.",
      "**Older devices** with limited memory.",
    ],
    limits: [
      "A single file over 50 MB is rejected. Split it first with [Split PDF](/split-pdf), or trim it.",
      "Compress PDF doesn't recompress images, so it often can't shrink scan-heavy files.",
      "We can't promise a particular device will handle a particular size.",
    ],
    faq: [
      {
        question: "What is the maximum file size?",
        answer: "50 MB per file. There is no set limit on how many files, but your device's memory is a practical limit.",
      },
      {
        question: "Why is it slow?",
        answer: "The work is done on your device, so it depends on its speed and free memory. Large image-heavy files take longer.",
      },
      {
        question: "Will staged merging change the result?",
        answer: "No. As long as the files are in the same order overall, the final document is the same.",
      },
    ],
    siblings: ["merge-pdf-and-reduce-file-size", "merge-scanned-pages-into-one-pdf", "merge-pdf-for-portfolio", "merge-pdf-on-windows"],
    relatedTools: ["split-pdf", "delete-pdf-pages", "compress-pdf"],
  },
  {
    slug: "insert-pages-from-one-pdf-into-another",
    toolSlug: "merge-pdf",
    title: "Insert Pages From One PDF Into Another | Foldryn",
    description:
      "Insert pages from one PDF into the middle of another by splitting, extracting and merging. A step-by-step workflow that runs in your browser.",
    h1: "Insert Pages From One PDF Into the Middle of Another",
    intent: "workflow",
    markets: ["Global"],
    primaryKeyword: "insert pages from one pdf into another",
    secondaryKeywords: ["add pages in the middle of a pdf", "put page between pdf pages", "replace a page in a pdf", "combine specific pages from two pdfs"],
    intro:
      "Merge PDF joins whole files end to end. To place pages in the middle, split the main file around the insertion point, then merge the pieces in order.",
    situation: [
      "A typical case: a 10-page contract needs a new schedule between pages 4 and 5, or an updated page replaces an old one. Merge PDF can't weave pages together on its own, but it can join three pieces: the start of the document, the new pages, and the rest.",
      "[Split PDF](/split-pdf) has an Extract pages option that accepts ranges such as 1-4, so you can save the first part and the last part as separate files. If the new pages are inside a longer file, take just those with [Extract PDF Pages](/extract-pdf-pages). Then merge the three.",
    ],
    steps: [
      "With [Split PDF](/split-pdf), extract pages 1-4 into one file, and pages 5-10 into another.",
      "If the new pages are part of a bigger file, extract them with [Extract PDF Pages](/extract-pdf-pages).",
      "In [Merge PDF](/merge-pdf), add the first part, the new pages, then the last part, and merge.",
    ],
    example: {
      title: "Example: replacing page 7",
      body: "Extract pages 1-6 and 8-10 from the original, and save the corrected page as its own PDF. Merge: first part, corrected page, last part. Page 7 is now the new one.",
    },
    useCases: [
      "**Contracts** with an added schedule or corrected page.",
      "**Reports** needing an updated figure page.",
      "**Forms** where one page was redone.",
    ],
    limits: [
      "It takes three pieces and several steps, since there is no one-click insert.",
      "Bookmarks and interactive form features may not carry over.",
      "Check the final page count: it should equal the old total minus replaced pages plus the new ones.",
    ],
    faq: [
      {
        question: "Is there a single \"insert\" button?",
        answer: "No. This workflow uses Split PDF or Extract PDF Pages, followed by Merge PDF.",
      },
      {
        question: "Does the original file change?",
        answer: "No. You always get new files and your original stays as it was.",
      },
      {
        question: "Can I replace a page rather than add one?",
        answer: "Yes. Leave the old page out when extracting the parts, as in the example above.",
      },
    ],
    siblings: ["merge-pdf-for-legal-exhibits", "merge-pdf-for-meeting-packet", "merge-pdf-chapters-into-one-document", "combine-pdf-files-into-one"],
    relatedTools: ["split-pdf", "extract-pdf-pages", "delete-pdf-pages"],
    guides: [{ title: "How to split a PDF and extract pages", href: "/blog/how-to-split-extract-pages-from-pdf" }],
  },
  {
    slug: "merge-pdf-for-print",
    toolSlug: "merge-pdf",
    title: "Merge PDFs Before Printing | Foldryn",
    description:
      "Combine several PDFs into one file before you print, so it goes to the printer as a single job. Check page sizes and orientation first.",
    h1: "Merge PDFs Before You Print Them",
    intent: "workflow",
    markets: ["US", "UK", "AU", "CA", "NZ"],
    primaryKeyword: "merge pdfs before printing",
    secondaryKeywords: ["combine pdfs for printing", "print multiple pdfs as one job", "single print job several documents", "print shop one pdf"],
    intro:
      "Printing a dozen files one by one is slow, and the pages can end up in the wrong order. Merge them and print once.",
    situation: [
      "Whether you print at home, at the office, or send a file to a print shop, one document is simpler than many. The order is fixed, page numbers can run through, and you won't forget a file at the printer.",
      "Two things are worth checking first. Mixed paper sizes: Foldryn keeps each page's own size, so a Letter page and an A4 page stay different, and your printer may scale them. And orientation: fix sideways pages with [Rotate PDF](/rotate-pdf) before merging.",
    ],
    steps: [
      "Rotate any sideways pages with [Rotate PDF](/rotate-pdf), and remove any you don't need to print.",
      "Add the files to [Merge PDF](/merge-pdf) in print order and press **Merge PDFs**.",
      "Open the downloaded file and use your print dialog or give it to the print shop as one document.",
    ],
    example: {
      title: "Example: a conference handout set",
      body: "A schedule, three speaker sheets and a map are merged in that order, numbered, and printed as one job of about twenty pages.",
    },
    useCases: [
      "**Handouts and course packs.**",
      "**Office printing** of multi-part documents.",
      "**Print shops** that prefer one file per order.",
    ],
    limits: [
      "Foldryn doesn't set margins, bleed or duplex settings. Use your printer's dialog for those.",
      "Mixed page sizes in one file may print scaled, depending on the printer.",
      "Letter is standard in the US and Canada and A4 elsewhere. Check which your printer expects.",
    ],
    faq: [
      {
        question: "Does merging change the page size?",
        answer: "No. Each page keeps its own size.",
      },
      {
        question: "Can I print double-sided?",
        answer: "That's a printer setting. Foldryn doesn't change it.",
      },
      {
        question: "Should I number the pages before printing?",
        answer: "It helps when pages might get shuffled. Number the merged file with [PDF Page Numbering](/pdf-page-numbering).",
      },
    ],
    siblings: ["merge-pdf-and-add-page-numbers", "merge-pdf-for-meeting-packet", "merge-scanned-pages-into-one-pdf", "combine-pdf-files-into-one"],
    relatedTools: ["rotate-pdf", "pdf-page-numbering", "delete-pdf-pages"],
  },
];
