import type { Metadata } from "next";
import { SITE_NAME } from "./site";

export interface ToolFaq {
  question: string;
  answer: string;
}

export interface ToolSeo {
  /** Short tool name used in headings, e.g. "Rotate PDF". */
  name: string;
  /** Full <title>, kept under 60 characters. */
  title: string;
  /** Meta description, kept under 155 characters. */
  description: string;
  h1: string;
  intro: string;
  about: string[];
  steps: string[];
  useCases: string[];
  tips: string[];
  limits: string[];
  /** Tool-specific description of how files are handled (must match the code). */
  handling: string;
  faq: ToolFaq[];
  /** Slugs of related tools, in the order they should appear. */
  related: string[];
  guides: { title: string; href: string }[];
}

export const toolSeo: Record<string, ToolSeo> = {
  "merge-pdf": {
    name: "Merge PDF",
    title: "Merge PDF Files Online Free, No Signup | Foldryn",
    description:
      "Merge PDF files into one document for free. No signup or watermark, and files are processed in your browser, not uploaded. Reorder before you merge.",
    h1: "Merge PDF Files Online",
    intro:
      "Combine two or more PDFs into one document, in the order you choose, without creating an account.",
    about: [
      "Foldryn's Merge PDF tool joins several PDF files into a single document. Add your files, arrange them in the order you want the pages to appear, and merge. Each file is added whole, with its pages kept in their original order, and the next file starts right after it. Text, fonts and layout are carried over from the originals instead of being turned into images.",
      "It's built for the everyday jobs that come up around forms and paperwork: a cover letter and resume in one file, several statements for a loan or rental application, or a stack of scanned pages that arrived as separate PDFs. Everything runs in your browser, so there's no upload to wait for and no account to create.",
    ],
    steps: [
      "Select two or more PDF files, or drop them onto the page. Each file can be up to 50 MB.",
      "Check the numbered list. Use the arrow on a file's row to move it up, or the X to remove it.",
      "Press Merge PDFs, then use the Download button to save the combined file.",
    ],
    useCases: [
      "**Job and school applications:** combine a cover letter, resume and supporting documents when a portal accepts only one upload.",
      "**Rental, loan and tax paperwork:** bundle pay stubs, statements and forms in the order the reviewer expects.",
      "**Scanned documents:** join scans that arrived as separate files into one document that reads from start to finish.",
      "**Reports and invoices:** assemble chapters, appendices or monthly invoices into a single file to share.",
    ],
    tips: [
      "Put numbers at the start of your filenames (01-cover-letter, 02-resume) so the order is obvious in the list.",
      "If you change the order after merging, press Merge PDFs again so the result matches the list.",
      "Merge first and [add page numbers](/pdf-page-numbering) afterward, so numbering runs through the whole document.",
    ],
    limits: [
      "Files are merged whole. To place one page between the pages of another file, extract the pages you need first with [Extract PDF Pages](/extract-pdf-pages), then merge the pieces.",
      "Bookmarks and interactive form features in the originals may not carry over to the merged file.",
      "Very large combined documents depend on your device's memory.",
    ],
    handling:
      "Your PDFs are read from your device into your browser's memory and combined there with the pdf-lib library. They are not uploaded to Foldryn, and closing or refreshing the page clears them.",
    faq: [
      {
        question: "Is Merge PDF really free, and do I need to sign up?",
        answer:
          "Yes. It's free to use, with no account, no email address and no watermark added to your file.",
      },
      {
        question: "Are my PDFs uploaded to a server?",
        answer:
          "No. Merging happens in your browser, and your files are not uploaded to Foldryn.",
      },
      {
        question: "How many PDFs can I merge at once?",
        answer:
          "There's no fixed limit on the number of files. Each file can be up to 50 MB, and very large combined documents depend on your device's memory.",
      },
      {
        question: "Can I change the order of the files?",
        answer:
          "Yes. Use the arrow on each file's row to move it up before merging. There's no drag-and-drop, so to move a file down, move the one below it up instead.",
      },
      {
        question: "Will merging change how my pages look?",
        answer:
          "No. Pages are copied from your files rather than redrawn, so text and layout carry over as they were.",
      },
    ],
    related: ["split-pdf", "extract-pdf-pages", "compress-pdf", "pdf-page-numbering"],
    guides: [
      {
        title: "How to Merge PDF Files in the Right Order (Without Mixing Up Pages)",
        href: "/blog/how-to-merge-pdf-files-in-order",
      },
      {
        title: "How to Combine Multiple Scanned Receipts and Documents into One PDF",
        href: "/blog/combine-scanned-receipts-into-one-pdf",
      },
    ],
  },

  "split-pdf": {
    name: "Split PDF",
    title: "Split PDF Into Pages Online Free | Foldryn",
    description:
      "Split a PDF by page range or into single pages for free. No signup, nothing uploaded: files are processed in your browser. Download a PDF or a ZIP.",
    h1: "Split PDF Online",
    intro:
      "Extract a page range or split every page into its own PDF, right in your browser.",
    about: [
      "Split PDF has two modes. Extract pages takes the pages you list, such as 1,3,5-8, and saves them together as one new PDF. Split every page creates a separate PDF for each page and, when there is more than one, packs them into a single ZIP file for download.",
      "People use it to send only the relevant part of a long document, to separate a scanned batch into individual files, or to pull a section out of a report. Your original file is never modified. You always get new files.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB). The tool shows how many pages it has.",
      "Choose Extract pages and enter the pages you want, or choose Split every page.",
      "Press Split PDF, then use the Download button to save your PDF or ZIP.",
    ],
    useCases: [
      "**Send only what's needed:** extract the signature page or the relevant chapters instead of sharing a whole document.",
      "**Separate scanned batches:** split a multi-page scan into one file per page for filing or for uploading into separate fields.",
      "**Reports and study material:** pull one section out of a long report or a few pages from a set of notes.",
      "**Upload limits:** a smaller extract is easier to attach when a portal or email caps file size.",
    ],
    tips: [
      "Write ranges with commas and dashes: 1,3,5-8 gives pages 1, 3, 5, 6, 7 and 8.",
      "Pages always come out in ascending order, so 8,1,3 gives pages 1, 3 and 8, and a repeated page is included once.",
      "Printed page numbers can differ from the PDF's own page positions, so go by the page count the tool shows.",
    ],
    limits: [
      "You can split by page numbers or into single pages. There's no splitting by file size or by bookmarks.",
      "Extracted pages keep their original order and can't be rearranged.",
      "Password-protected PDFs can't be processed, so remove the password first.",
    ],
    handling:
      "Your PDF is read into your browser's memory and split there with pdf-lib. Nothing is uploaded to Foldryn. When there are several output files, the ZIP is also built in your browser.",
    faq: [
      {
        question: "Is Split PDF free, and do I need an account?",
        answer:
          "It's free, and there's no signup, email address or watermark.",
      },
      {
        question: "Are my files uploaded when I split a PDF?",
        answer:
          "No. Your PDF is processed in your browser and is not uploaded to Foldryn.",
      },
      {
        question: "How do I split a PDF into separate pages?",
        answer:
          "Choose Split every page. You get one PDF per page, bundled into a single ZIP file when there is more than one.",
      },
      {
        question: "What format do I use to enter page ranges?",
        answer:
          "Separate pages with commas and use a dash for a range, for example 1,3,5-8. A backwards range or a page number beyond the document's length shows an error.",
      },
      {
        question: "Can I split a PDF by file size?",
        answer:
          "No. You can split by page numbers or into single pages. For a smaller file, you can also try Compress PDF.",
      },
    ],
    related: ["extract-pdf-pages", "merge-pdf", "delete-pdf-pages", "compress-pdf"],
    guides: [
      {
        title: "How to Extract Pages From a PDF (Step by Step)",
        href: "/blog/how-to-split-extract-pages-from-pdf",
      },
    ],
  },

  "compress-pdf": {
    name: "Compress PDF",
    title: "Compress PDF Online Free, No Signup | Foldryn",
    description:
      "Compress a PDF for free in your browser and see the original and new size before you download. No signup, nothing uploaded. Results vary by file.",
    h1: "Compress PDF Online",
    intro:
      "Try to make a PDF smaller and see the before-and-after file size before you download anything.",
    about: [
      "Compress PDF repackages your document's internal structure more efficiently. A PDF carries some overhead, such as repeated objects and uncompressed structure, and re-saving it can shrink certain files noticeably, especially multi-page documents with a lot of shared elements.",
      "What it does not do is recompress the images inside your PDF. If your file is large because it holds high-resolution photos or full-color scans, the result may be only slightly smaller, or occasionally a little larger. That's why the tool shows the original size, the new size and the percentage change, so you can decide whether the new file is worth keeping.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB).",
      "Press Compress PDF and wait a moment.",
      "Compare the original and new sizes. If the new file is better, press Download. If not, keep your original.",
    ],
    useCases: [
      "**Upload limits:** some application portals and email systems cap attachment size, and a smaller file may help you fit under the limit.",
      "**Long documents and forms:** these often contain repeated structure that repackaging can trim.",
      "**Quick check:** find out whether a PDF can be reduced at all before you spend time re-scanning it.",
      "**Storage and sharing:** save a little space on files you keep or send often.",
    ],
    tips: [
      "If the tool can't shrink your file much, images are probably the cause. Re-scan at a lower resolution (150 to 200 DPI is often enough for text) and compress again.",
      "Scan text documents in black and white or grayscale when color isn't needed.",
      "Remove pages you don't need first with [Delete PDF Pages](/delete-pdf-pages) or [Extract PDF Pages](/extract-pdf-pages).",
    ],
    limits: [
      "You can't choose a target size such as 200 KB or 1 MB.",
      "Images inside the PDF are not recompressed or downsampled.",
      "Some PDFs are already efficient, and the result can be about the same size or slightly larger. The tool shows you either way.",
    ],
    handling:
      "Your PDF is read into your browser's memory and re-saved there with pdf-lib. It is not uploaded to Foldryn, and the before-and-after sizes are calculated on your device.",
    faq: [
      {
        question: "Is Compress PDF free?",
        answer:
          "Yes. It's free, with no signup and no watermark.",
      },
      {
        question: "Are my files uploaded to compress them?",
        answer:
          "No. Compression happens in your browser, and your PDF is not uploaded to Foldryn.",
      },
      {
        question: "How much smaller will my PDF get?",
        answer:
          "It depends on the file. PDFs with repeated internal structure can shrink noticeably, while PDFs full of large images may barely change. The tool shows the exact result before you download.",
      },
      {
        question: "Can I compress a PDF to a specific size, like 200 KB?",
        answer:
          "No. There's no target-size setting. If the file stays too large, re-scanning at a lower resolution usually helps more than compressing.",
      },
      {
        question: "Does compressing reduce the quality of my PDF?",
        answer:
          "The tool doesn't re-encode your text or images, so pages should look the same. It repackages the file's structure rather than changing the content.",
      },
    ],
    related: ["delete-pdf-pages", "extract-pdf-pages", "merge-pdf", "pdf-to-jpg"],
    guides: [
      {
        title: "How to Compress PDF Files for Online Application Portals (and Keep Them Readable)",
        href: "/blog/compress-pdf-for-application-portals",
      },
    ],
  },

  "pdf-to-jpg": {
    name: "PDF to JPG",
    title: "PDF to JPG Converter Online Free | Foldryn",
    description:
      "Convert PDF pages to JPG images for free in your browser. Choose standard or high resolution. No signup, no upload. Download a JPG or a ZIP.",
    h1: "PDF to JPG Converter",
    intro:
      "Turn each page of a PDF into a JPG image, processed locally in your browser.",
    about: [
      "PDF to JPG draws each page of your PDF in your browser and saves it as a JPG image. Choose Standard for everyday sharing or High resolution for larger, more detailed images. A one-page PDF gives you a single JPG, and a longer PDF gives you a ZIP file with one image per page, named page-1, page-2 and so on.",
      "JPG is a compressed format, so files stay relatively small, which makes it a good fit for email, messaging apps and upload forms. If you need text and thin lines to stay crisp, PNG is usually the better format. See [PDF to PNG](/pdf-to-png) for that.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB).",
      "Choose Standard or High resolution, then press Convert to JPG.",
      "Use the Download button to save a single JPG, or a ZIP if your PDF has several pages.",
    ],
    useCases: [
      "**Share a page as a picture** in a chat, an email or a social post.",
      "**Insert a page into slides or a document** that accepts images but not PDFs.",
      "**Upload to systems that take only image files**, such as some profile or ID upload forms.",
      "**Make quick previews** of pages from a longer document.",
    ],
    tips: [
      "Standard is fine for screens. Choose High resolution if you plan to zoom in or print.",
      "Only need a few pages? Pick them first with [Extract PDF Pages](/extract-pdf-pages), then convert the smaller file.",
      "Not sure which format to use? Our guide on [PDF vs. JPG](/blog/pdf-vs-jpg-which-format-to-use) compares them.",
    ],
    limits: [
      "Converted pages are pictures. The text can't be selected or searched, and links stop working.",
      "Pages are drawn on a plain white background.",
      "Very long PDFs use a lot of memory, so converting hundreds of pages at once may be slow on some devices.",
    ],
    handling:
      "PDF.js draws each page on a canvas in your browser, and the JPG files (and the ZIP, if there is one) are created there too. Nothing is uploaded to Foldryn.",
    faq: [
      {
        question: "Is the PDF to JPG converter free?",
        answer:
          "Yes. It's free, with no signup, no email and no watermark added to your images.",
      },
      {
        question: "Is my PDF uploaded to a server?",
        answer:
          "No. Pages are converted in your browser using PDF.js, and your file is not uploaded to Foldryn.",
      },
      {
        question: "Can I convert a multi-page PDF to JPG?",
        answer:
          "Yes. Each page becomes its own JPG, and when there is more than one they are bundled into a ZIP file.",
      },
      {
        question: "What's the difference between Standard and High resolution?",
        answer:
          "High resolution draws pages at a larger size and keeps more detail, at the cost of bigger files. Standard is smaller and fine for most screens.",
      },
      {
        question: "Will the text in my JPG be selectable?",
        answer:
          "No. A JPG is a picture of the page, so text is no longer real text. Keep the PDF if you still need to copy or search the text.",
      },
    ],
    related: ["pdf-to-png", "jpg-to-pdf", "extract-pdf-pages", "compress-pdf"],
    guides: [
      {
        title: "PDF vs. JPG: Which Format Should You Use for Documents and Images?",
        href: "/blog/pdf-vs-jpg-which-format-to-use",
      },
      {
        title: "How to Convert PDF Pages to PNG Images (and When PNG Beats JPG)",
        href: "/blog/how-to-convert-pdf-to-png",
      },
    ],
  },

  "jpg-to-pdf": {
    name: "JPG to PDF",
    title: "JPG to PDF Converter Online Free | Foldryn",
    description:
      "Convert JPG or PNG images to one PDF for free in your browser. Pick Auto, A4 or Letter. No signup, nothing uploaded. Reorder pages first.",
    h1: "JPG to PDF Converter",
    intro:
      "Combine one or more JPG or PNG images into a single PDF, processed locally in your browser.",
    about: [
      "JPG to PDF turns one or more JPG or PNG images into a single PDF, with one image per page. Arrange them in the list, pick a page size, and convert. Auto makes each page match its image exactly. A4 and Letter fit each image onto a standard page, scaling it down if needed but never enlarging it.",
      "It's handy when a form or portal wants a PDF and you only have photos: signed pages photographed with a phone, receipts, ID copies or homework. Letter is the usual page size in the US and Canada, while A4 is common in the UK and most other countries.",
    ],
    steps: [
      "Select or drop your JPG or PNG images. Each image can be up to 20 MB.",
      "Put them in order with the arrow on each row, and choose Auto, A4 or Letter.",
      "Press Convert to PDF, then use the Download button to save your document.",
    ],
    useCases: [
      "**Signed documents:** turn phone photos of a signed form into one PDF to upload or email.",
      "**Receipts and expenses:** combine receipt photos into a single file for a reimbursement.",
      "**Homework and notes:** convert pictures of handwritten pages into a document.",
      "**ID and proof copies:** make a PDF of a card or letter, and consider adding a [watermark](/watermark-pdf) saying what it's for.",
    ],
    tips: [
      "Photograph pages flat and in even light so the text stays readable in the PDF.",
      "Choose Letter for US printing and A4 for most other countries. Choose Auto to keep each image's own proportions.",
      "If the PDF ends up too large for an upload limit, try [Compress PDF](/compress-pdf), keeping in mind it doesn't recompress images.",
    ],
    limits: [
      "Only JPG and PNG images are accepted. Other formats, such as HEIC photos from some iPhones, need to be converted to JPG first.",
      "Each image can be up to 20 MB, and very large batches depend on your device's memory.",
      "Images are embedded as they are, so a large photo makes a large PDF.",
    ],
    handling:
      "Your images are read into your browser's memory and placed into a PDF there with pdf-lib. They are not uploaded to Foldryn.",
    faq: [
      {
        question: "Is the JPG to PDF converter free?",
        answer:
          "Yes. It's free, with no signup and no watermark added to your PDF.",
      },
      {
        question: "Are my photos uploaded to a server?",
        answer:
          "No. The PDF is built in your browser, and your images are not uploaded to Foldryn.",
      },
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes. Each image becomes one page, in the order shown in the list.",
      },
      {
        question: "Does it accept PNG and HEIC files?",
        answer:
          "PNG and JPG are accepted. HEIC isn't supported, so convert those photos to JPG first.",
      },
      {
        question: "Should I choose Auto, A4 or Letter?",
        answer:
          "Auto gives each page the exact size of its image. A4 and Letter place images on standard pages, which is better for printing. Letter is standard in the US and Canada, A4 in most other countries.",
      },
    ],
    related: ["merge-pdf", "pdf-to-jpg", "compress-pdf", "rotate-pdf"],
    guides: [
      {
        title: "How to Combine Multiple Scanned Receipts and Documents into One PDF",
        href: "/blog/combine-scanned-receipts-into-one-pdf",
      },
      {
        title: "PDF vs. JPG: Which Format Should You Use for Documents and Images?",
        href: "/blog/pdf-vs-jpg-which-format-to-use",
      },
    ],
  },

  "pdf-to-png": {
    name: "PDF to PNG",
    title: "PDF to PNG Converter Online Free | Foldryn",
    description:
      "Convert PDF pages to PNG images for free in your browser. Sharp, lossless pages. No signup, no upload. Download one PNG or a ZIP of all pages.",
    h1: "PDF to PNG Converter",
    intro:
      "Turn each page of a PDF into a PNG image, processed locally in your browser.",
    about: [
      "PDF to PNG draws each page of your PDF in your browser and saves it as a PNG image. PNG doesn't throw away detail, so text, thin lines and diagrams stay clean, which is why it's often the better choice for slides, documentation and screenshot-style images.",
      "Each page is drawn at about twice its normal on-screen size. A one-page PDF gives you a single PNG, and a longer PDF gives you a ZIP with one image per page. PNG files are larger than JPGs, so use [PDF to JPG](/pdf-to-jpg) when file size matters more than sharpness.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB).",
      "Press Convert to PNG and wait while each page is drawn.",
      "Use the Download button to save a single PNG, or a ZIP if your PDF has several pages.",
    ],
    useCases: [
      "**Slides and documentation:** drop a clean image of a page or chart into a presentation or a help article.",
      "**Diagrams and forms:** keep thin lines and small text sharp.",
      "**Design feedback:** share a page as an image that anyone can open.",
      "**Archiving a page exactly as drawn,** without compression artifacts.",
    ],
    tips: [
      "Only need a few pages? Pick them first with [Extract PDF Pages](/extract-pdf-pages) and convert the smaller file. It's faster and uses less memory.",
      "For photo-heavy pages, JPG usually gives a much smaller file with little visible difference.",
      "Our guide on [converting PDF pages to PNG](/blog/how-to-convert-pdf-to-png) explains when PNG beats JPG.",
    ],
    limits: [
      "Pages come out with a plain white background, not a transparent one.",
      "Converted pages are pictures. Text can't be selected or searched, and links stop working.",
      "There's no resolution setting. The High option in PDF to JPG currently renders pages larger than this tool does.",
    ],
    handling:
      "PDF.js draws each page on a canvas in your browser, and the PNG files (and the ZIP, if there is one) are created there too. Nothing is uploaded to Foldryn.",
    faq: [
      {
        question: "Is PDF to PNG free?",
        answer:
          "Yes. It's free, with no signup, no email and no watermark.",
      },
      {
        question: "Is my PDF uploaded to a server?",
        answer:
          "No. Pages are converted in your browser, and your file is not uploaded to Foldryn.",
      },
      {
        question: "Why choose PNG instead of JPG?",
        answer:
          "PNG keeps every pixel as drawn, so text and lines stay clean. JPG makes smaller files by discarding some detail, which suits photos better.",
      },
      {
        question: "Will the PNG have a transparent background?",
        answer:
          "No. Pages are drawn on a white background, the way they look on screen.",
      },
      {
        question: "Can I convert a multi-page PDF to PNG?",
        answer:
          "Yes. Each page becomes its own PNG, bundled into one ZIP file when there is more than one.",
      },
    ],
    related: ["pdf-to-jpg", "extract-pdf-pages", "jpg-to-pdf", "compress-pdf"],
    guides: [
      {
        title: "How to Convert PDF Pages to PNG Images (and When PNG Beats JPG)",
        href: "/blog/how-to-convert-pdf-to-png",
      },
      {
        title: "PDF vs. JPG: Which Format Should You Use for Documents and Images?",
        href: "/blog/pdf-vs-jpg-which-format-to-use",
      },
    ],
  },

  "rotate-pdf": {
    name: "Rotate PDF",
    title: "Rotate PDF Pages Online Free | Foldryn",
    description:
      "Rotate PDF pages online for free. Pick pages from previews and turn them left or right. No signup, nothing uploaded, processed in your browser.",
    h1: "Rotate PDF Pages Online",
    intro:
      "Fix sideways or upside-down pages by selecting them from previews and turning them in either direction.",
    about: [
      "Rotate PDF shows a small preview of every page, so you can see which ones are sideways or upside down. Click the pages you want to fix, turn them left or right in quarter turns, check the preview, and apply. Only the pages you select are changed.",
      "Rotation changes the orientation setting stored in the PDF rather than redrawing the page, so the text and images aren't re-rendered. It's the quick fix for scans fed through the wrong way and for phone scans saved in the wrong orientation.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB) and wait for the page previews to load.",
      "Click the pages that need turning, then press Rotate Left or Rotate Right. The preview updates right away.",
      "Press Apply Rotation, then use the Download button to save your PDF.",
    ],
    useCases: [
      "**Phone scans:** turn a page that came out sideways before you send it.",
      "**Landscape pages:** stand tables, certificates and charts upright.",
      "**Submissions:** fix orientation so a reviewer doesn't have to tilt their head or their screen.",
      "**Preparing a packet:** straighten pages before you merge or number them.",
    ],
    tips: [
      "Rotate first, then [merge](/merge-pdf), [number](/pdf-page-numbering) or [watermark](/watermark-pdf) the file, so those additions end up the right way up.",
      "Each press of Rotate Left or Right adds a quarter turn. Press again if a page needs a half turn.",
      "Check every preview before you apply. It takes a few seconds and saves a resend.",
    ],
    limits: [
      "Rotation works in quarter turns, so it can't fix a page scanned at a slight angle. Re-scan it with the page lying flat.",
      "There's no select-all button yet, so a document where every page is sideways takes a click per page.",
      "Previews for very long documents can take a while to load.",
    ],
    handling:
      "The page previews are drawn in your browser with PDF.js, and the rotation is applied there with pdf-lib. Your PDF is not uploaded to Foldryn.",
    faq: [
      {
        question: "Is Rotate PDF free?",
        answer:
          "Yes. It's free, with no signup, no email and no watermark.",
      },
      {
        question: "Are my files uploaded to rotate them?",
        answer:
          "No. Previews and rotation both happen in your browser, and your PDF is not uploaded to Foldryn.",
      },
      {
        question: "Can I rotate just one page of a PDF?",
        answer:
          "Yes. Select only that page's preview, rotate it, and apply. The other pages stay as they were.",
      },
      {
        question: "Will rotating reduce the quality of my pages?",
        answer:
          "No. Rotation changes the page's orientation setting rather than redrawing it, so text and images are not recompressed.",
      },
      {
        question: "Can I rotate a PDF by a few degrees to straighten a crooked scan?",
        answer:
          "No. Pages turn in quarter turns only. A page scanned at an angle is better re-scanned flat.",
      },
    ],
    related: ["delete-pdf-pages", "merge-pdf", "pdf-page-numbering", "extract-pdf-pages"],
    guides: [
      {
        title: "How to Rotate Pages in a PDF (and Fix Sideways Scans)",
        href: "/blog/how-to-rotate-pdf-pages",
      },
    ],
  },

  "delete-pdf-pages": {
    name: "Delete PDF Pages",
    title: "Delete PDF Pages Online Free | Foldryn",
    description:
      "Delete pages from a PDF for free. Pick pages from previews and remove them in seconds. No signup, nothing uploaded, processed in your browser.",
    h1: "Delete PDF Pages Online",
    intro:
      "Remove blank, duplicate or unwanted pages by selecting them from visual previews.",
    about: [
      "Delete PDF Pages shows a preview of every page. Click the pages you don't want, which get a red outline, and remove them. You receive a new PDF without those pages, and your original file isn't changed.",
      "It's a quick way to drop blank pages left by double-sided scanning, an old cover sheet, duplicates, or a page you'd rather not share. The tool won't let you delete every page, because a PDF needs at least one.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB) and wait for the page previews to load.",
      "Click each page you want to remove. The button shows how many you've picked, for example Delete 3 Pages.",
      "Press the button, then use the Download button to save your edited PDF.",
    ],
    useCases: [
      "**Blank pages after scanning:** remove the empty sheets a scanner captures from the backs of single-sided pages.",
      "**Duplicates and cover sheets:** drop a page that was scanned twice or an outdated fax cover.",
      "**Before sharing:** take out a page the recipient doesn't need to see.",
      "**Before compressing or sending:** trim a file so it's easier to upload.",
    ],
    tips: [
      "Check near-blank pages before deleting. A faint footer or a page number can matter to the reader.",
      "If you're keeping only a few pages, [Extract PDF Pages](/extract-pdf-pages) takes fewer clicks.",
      "Scroll through the new file once before you send it.",
    ],
    limits: [
      "Deleting a page takes it out of the document, but its content can stay inside the file as unused data. In a test with a sample PDF, the removed page's text was still present in the saved file even though no viewer showed it.",
      "For a page with sensitive details, build a new file from only the pages you want to keep with [Extract PDF Pages](/extract-pdf-pages) instead.",
      "You can't delete every page of a document.",
    ],
    handling:
      "The page previews are drawn in your browser with PDF.js, and the pages are removed there with pdf-lib. Your PDF is not uploaded to Foldryn.",
    faq: [
      {
        question: "Is Delete PDF Pages free?",
        answer:
          "Yes. It's free, with no signup, no email and no watermark.",
      },
      {
        question: "Is my PDF uploaded when I delete pages?",
        answer:
          "No. Previews and deletion both happen in your browser, and your file is not uploaded to Foldryn.",
      },
      {
        question: "Does deleting a page remove its data completely?",
        answer:
          "Not necessarily. The page no longer appears, but its content can remain inside the file as unused data. For sensitive pages, extract the pages you want to keep into a new file instead.",
      },
      {
        question: "Can I delete several pages at once?",
        answer:
          "Yes. Click as many pages as you like, in any order, and delete them together.",
      },
      {
        question: "Does deleting pages change my original file?",
        answer:
          "No. You get a new PDF, and your original isn't modified.",
      },
    ],
    related: ["extract-pdf-pages", "split-pdf", "rotate-pdf", "compress-pdf"],
    guides: [
      {
        title: "How to Delete Pages From a PDF (Blank Pages, Cover Sheets and Duplicates)",
        href: "/blog/how-to-delete-pages-from-pdf",
      },
      {
        title: "How to Extract Pages From a PDF (Step by Step)",
        href: "/blog/how-to-split-extract-pages-from-pdf",
      },
    ],
  },

  "extract-pdf-pages": {
    name: "Extract PDF Pages",
    title: "Extract PDF Pages Online Free — Visual Page Picker | Foldryn",
    description:
      "Extract selected pages from a PDF online for free. Pick pages from visual thumbnails and save a new PDF in your browser. No signup, no upload.",
    h1: "Extract PDF Pages",
    intro:
      "Pick exactly the pages you need using visual thumbnails, and save them as a new PDF.",
    about: [
      "This tool renders a thumbnail preview of every page in your PDF locally in your browser using PDF.js, so you can visually pick the pages you want instead of guessing page numbers. Your file is read from your device and never uploaded during preview or extraction.",
      "You can select any combination of pages, including ones that aren't next to each other, such as page 2, page 7 and page 15, and they'll be combined into a single new PDF. Regardless of the order you click them in, the resulting document keeps pages in their original numeric order.",
      "Typical uses include pulling a signature page out of a contract, saving one chapter of a scanned book, or sending only the relevant pages of a long report. If you already know the exact page numbers and would rather type them, [Split PDF](/split-pdf) has an Extract pages option that accepts ranges like 1,3,5-8.",
    ],
    steps: [
      "Select or drop a PDF file (up to 50 MB) and wait for the page previews to load.",
      "Click each page you want to keep. Selected pages get a blue outline and a tick, and the summary shows how many you've picked.",
      "Press the Extract button, which shows your count, for example Extract 3 Pages.",
      "When the result is ready, use the Download button to save your new PDF.",
    ],
    useCases: [
      "**One signed page** from a long contract, to send without the rest of the agreement.",
      "**A chapter** from a scanned book or a long set of notes.",
      "**Only the relevant pages** of a report, leaving out the appendix.",
      "**A privacy-minded copy:** a new file built from only the pages you chose.",
    ],
    tips: [
      "Printed page numbers and the PDF's own page positions can differ, which is where thumbnails help.",
      "Keeping most pages and dropping a few? [Delete PDF Pages](/delete-pdf-pages) takes fewer clicks.",
      "Need pages from several files? Extract from each, then combine the results with [Merge PDF](/merge-pdf).",
    ],
    limits: [
      "Extracted pages keep their original order and can't be rearranged.",
      "Bookmarks and interactive form features may not carry over to the new file.",
      "Previews for very long documents can take a while to load, and password-protected PDFs can't be processed.",
    ],
    handling:
      "The page previews are drawn in your browser with PDF.js, and the new PDF is built there with pdf-lib from only the pages you picked. Your file is not uploaded to Foldryn.",
    faq: [
      {
        question: "Are my files uploaded anywhere?",
        answer:
          "No. Page previews and extraction both happen in your browser, and your PDF is never sent to our server.",
      },
      {
        question: "Can I select pages that aren't next to each other?",
        answer:
          "Yes. You can select any combination of pages in any order. The final document keeps them in their original page order.",
      },
      {
        question: "Can I extract just one page?",
        answer:
          "Yes. Click a single thumbnail and the button will read Extract 1 Page. You'll get a one-page PDF.",
      },
      {
        question: "What if I'd rather type the page numbers?",
        answer:
          "Use the Extract pages option in Split PDF and enter pages like 1,3,5-8. It produces the same kind of result without the thumbnails.",
      },
      {
        question: "Does extracting change my original file?",
        answer:
          "No. You always get a new PDF, and your original file isn't modified.",
      },
      {
        question: "Will extracted pages lose quality or formatting?",
        answer:
          "No. Pages are copied from the source file rather than redrawn, so text, images and layout are kept as they were.",
      },
    ],
    related: ["split-pdf", "delete-pdf-pages", "merge-pdf", "pdf-to-png"],
    guides: [
      {
        title: "How to Extract Pages From a PDF (Step by Step)",
        href: "/blog/how-to-split-extract-pages-from-pdf",
      },
      {
        title: "How to Delete Pages From a PDF (Blank Pages, Cover Sheets and Duplicates)",
        href: "/blog/how-to-delete-pages-from-pdf",
      },
    ],
  },

  "watermark-pdf": {
    name: "Watermark PDF",
    title: "Add Watermark to PDF Online Free | Foldryn",
    description:
      "Add a text watermark to a PDF for free. Choose position, opacity and size. No signup, nothing uploaded, processed in your browser.",
    h1: "Add a Watermark to a PDF",
    intro:
      "Stamp a custom text watermark, such as CONFIDENTIAL or DRAFT, across every page of a PDF.",
    about: [
      "Watermark PDF draws your chosen text on every page of the document, entirely in your browser. You pick the position (center, top, bottom or diagonal), set how transparent it should be, and choose the font size. The same settings apply to every page.",
      "A watermark helps in more situations than people expect: marking a contract as a draft, labeling a report as confidential, or stamping a copy of your ID with what it's for, so it's less useful for anything else.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB), then type your watermark text (up to 60 characters).",
      "Choose a position, then adjust opacity and font size with the sliders.",
      "Press Apply Watermark, check the result, and use the Download button to save it.",
    ],
    useCases: [
      "**Drafts:** mark a document DRAFT so it isn't mistaken for the final version.",
      "**Confidential files:** label a report or proposal before sharing it.",
      "**ID and proof copies:** add wording like For rental application only across the page.",
      "**Samples:** stamp SAMPLE on a document you're showing as an example.",
    ],
    tips: [
      "Diagonal at around 30% opacity is readable without hiding the page underneath.",
      "Specific wording works better than a vague label. Say what the copy is for, and add a date if useful.",
      "Watermark last. [Merge](/merge-pdf), [rotate](/rotate-pdf) and [number](/pdf-page-numbering) your file first.",
    ],
    limits: [
      "The watermark is permanent once applied, so keep your original file.",
      "It's one line of gray text, placed once per page. It can't be tiled, recolored or turned into an image.",
      "Use standard letters, numbers and common punctuation. Other writing systems, such as Arabic script or Chinese characters, may not work with the built-in font.",
      "A watermark discourages casual reuse but isn't a security feature. Someone with PDF editing software may be able to cover, crop or remove it.",
    ],
    handling:
      "The watermark is drawn onto each page in your browser with pdf-lib. Your PDF is not uploaded to Foldryn.",
    faq: [
      {
        question: "Is Watermark PDF free?",
        answer:
          "Yes. It's free, with no signup, and Foldryn adds no watermark of its own to your file.",
      },
      {
        question: "Is my PDF uploaded when I add a watermark?",
        answer:
          "No. The watermark is added in your browser, and your file is not uploaded to Foldryn.",
      },
      {
        question: "Can I add an image or logo watermark?",
        answer:
          "No. The tool adds text only, as one line of gray text per page.",
      },
      {
        question: "Can a watermark be removed later?",
        answer:
          "It's drawn onto the page, so it can't be undone in Foldryn. Someone with PDF editing software may be able to cover or remove it, so don't treat it as protection. Keep an original copy.",
      },
      {
        question: "Can I preview the watermark before applying it?",
        answer:
          "There's no live preview. Apply it, check the result, and if it isn't right, go back and try different settings. Your original file isn't changed.",
      },
    ],
    related: ["pdf-page-numbering", "merge-pdf", "rotate-pdf", "compress-pdf"],
    guides: [
      {
        title: "How to Add a Watermark to a PDF (and Why It's Smart for ID Copies)",
        href: "/blog/how-to-add-watermark-to-pdf",
      },
    ],
  },

  "pdf-page-numbering": {
    name: "PDF Page Numbering",
    title: "Add Page Numbers to PDF Online Free | Foldryn",
    description:
      "Add page numbers to a PDF for free. Choose the position and starting number. No signup, nothing uploaded, processed in your browser.",
    h1: "Add Page Numbers to a PDF",
    intro:
      "Number every page of a PDF, choosing where the numbers go and which number to start from.",
    about: [
      "PDF Page Numbering draws a page number on every page of your document, in your browser. Pick one of six positions (top or bottom, left, center or right) and the number the first page should start from, then apply.",
      "Starting from a number other than 1 is useful when a document continues from an earlier section. The numbers are small, dark gray and plain, so they stay out of the way of your content.",
    ],
    steps: [
      "Select or drop a PDF (up to 50 MB).",
      "Choose a position and set the number the first page should start from.",
      "Press Add Page Numbers, then use the Download button to save your PDF.",
    ],
    useCases: [
      "**Theses and long reports:** make pages easy to cite and find.",
      "**Contracts and exhibits:** number a packet so everyone can refer to the same page.",
      "**Merged application packets:** number the combined document once, after merging.",
      "**Printouts:** keep loose pages in order and reference them in meetings.",
    ],
    tips: [
      "[Merge](/merge-pdf) your files first and number the finished document once, so numbering runs continuously.",
      "If your PDF already has footer text, try a top position so the number doesn't collide with it.",
      "To leave a cover unnumbered, extract the pages after the cover, number them starting from 2, and merge the cover back in front. Our [page numbers guide](/blog/how-to-add-page-numbers-to-pdf) walks through it.",
    ],
    limits: [
      "Every page is numbered. There's no option to skip the first page or number only some pages.",
      "Numbers appear as plain digits. There's no Page 3 of 20 format, Roman numerals, or choice of font, size or color.",
      "Number a file only once. Running it through the tool twice puts two numbers on every page.",
    ],
    handling:
      "The numbers are drawn onto each page in your browser with pdf-lib. Your PDF is not uploaded to Foldryn.",
    faq: [
      {
        question: "Is PDF page numbering free?",
        answer:
          "Yes. It's free, with no signup, no email and no watermark.",
      },
      {
        question: "Is my PDF uploaded to add page numbers?",
        answer:
          "No. The numbers are added in your browser, and your file is not uploaded to Foldryn.",
      },
      {
        question: "Can I start numbering from a number other than 1?",
        answer:
          "Yes. Enter any whole number from 0 up as the starting number.",
      },
      {
        question: "Can I skip the cover page?",
        answer:
          "Not directly, because every page is numbered. A workaround is to extract the pages after the cover, number them from 2, and merge the cover back in front.",
      },
      {
        question: "Where can I place the page numbers?",
        answer:
          "In any of six positions: top left, top center, top right, bottom left, bottom center or bottom right.",
      },
    ],
    related: ["merge-pdf", "extract-pdf-pages", "rotate-pdf", "watermark-pdf"],
    guides: [
      {
        title: "How to Add Page Numbers to a PDF (and Leave the Cover Page Blank)",
        href: "/blog/how-to-add-page-numbers-to-pdf",
      },
    ],
  },
};

export function buildToolMetadata(slug: string): Metadata {
  const seo = toolSeo[slug];
  if (!seo) throw new Error(`No SEO content defined for tool "${slug}"`);

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      url: `/${slug}`,
      type: "website",
    },
  };
}
