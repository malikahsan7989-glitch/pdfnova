import type { LandingPage } from "../../types";

/** Split PDF: document-specific, student, professional and business intents. */
export const splitPdfDocumentPages: LandingPage[] = [
  {
    slug: "split-bank-statement-pdf-by-month",
    toolSlug: "split-pdf",
    title: "Split a Bank Statement PDF by Month | Foldryn",
    description:
      "Pull one month out of a multi-month bank statement PDF. Enter the page range for that month and download a smaller file in your browser.",
    h1: "Split a Multi-Month Bank Statement PDF Into Single Months",
    intent: "document-specific",
    markets: ["Global"],
    primaryKeyword: "split bank statement pdf by month",
    secondaryKeywords: ["extract one month from bank statement pdf", "separate statement pages by month", "pick pages from annual statement pdf", "bank statement pdf too many pages"],
    intro:
      "Some banks export a whole year as one PDF. Lenders and landlords often want specific months, so pull those pages out.",
    situation: [
      "A yearly or quarterly statement download can run to dozens of pages with no dividers between months. Sending all of it shares far more than the person asked for, and some portals reject large files.",
      "Open the PDF in any viewer and note which page each month starts and ends on. Then use Extract pages with those ranges, for example 14-19 for one month. Foldryn shows the document's real page count, which helps when printed numbers on the statement don't match.",
    ],
    steps: [
      "Note the page ranges for each month you need by scrolling the original.",
      "In [Split PDF](/split-pdf), choose Extract pages and enter a range such as 14-19.",
      "Run it and download. Repeat with another range for each additional month.",
    ],
    example: {
      title: "Example: the latest three months",
      body: "A 36-page annual statement has the last three months on pages 25 to 36. Enter 25-36 and you get a 12-page PDF containing only those months.",
    },
    useCases: [
      "**Loan and rental applications** asking for recent months only.",
      "**Accountant requests** for specific periods.",
      "**Trimming** before you merge several statements into one pack.",
    ],
    limits: [
      "The tool can't find months for you. You enter the page numbers.",
      "Statements protected by a password can't be processed. See [splitting password-protected PDFs](/split-pdf/split-password-protected-pdf).",
      "Foldryn doesn't redact account numbers or other details.",
    ],
    faq: [
      {
        question: "Are my statements uploaded?",
        answer: "No. They are split in your browser and not uploaded to Foldryn.",
      },
      {
        question: "Can I do several months in one go?",
        answer: "Yes, if they sit in one range or a list such as 1-6,13-18. They end up in one PDF, in page order.",
      },
      {
        question: "What if my bank's page numbers don't match?",
        answer: "Go by the page count the tool shows. Printed numbers can differ from the file's own page positions.",
      },
    ],
    siblings: ["split-tax-return-pdf-into-sections", "split-pdf-printed-numbers-vs-pdf-pages", "split-password-protected-pdf", "share-only-some-pages-of-a-pdf"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "compress-pdf"],
  },
  {
    slug: "split-payroll-pdf-into-payslips",
    toolSlug: "split-pdf",
    title: "Split a Payroll PDF Into Individual Payslips | Foldryn",
    description:
      "Separate a payroll run PDF into one file per page, such as one payslip per employee. Split every page in your browser and download a ZIP.",
    h1: "Split a Payroll PDF Into Individual Payslips",
    intent: "business",
    markets: ["Global"],
    primaryKeyword: "split payroll pdf into individual payslips",
    secondaryKeywords: ["separate payslips from one pdf", "split pay stubs pdf one per employee", "payslip pdf one page per person", "split salary slips pdf"],
    intro:
      "If your payroll software exports every payslip into one PDF, splitting it by page gives you a file per person.",
    situation: [
      "A payroll run often produces a single document with one page per employee. Before sending, someone has to separate it so each person receives only their own page. Splitting every page produces one PDF per page in seconds, instead of printing and re-scanning.",
      "This only works when each payslip is exactly one page. If some run to two pages, split by ranges instead. Payslips contain personal and financial details, so Foldryn processes the file in your browser without uploading it, but how you store and send the individual files is up to you and your data policies.",
    ],
    steps: [
      "Check that each payslip is one page, and note the order of employees in the PDF.",
      "In [Split PDF](/split-pdf), choose **Split every page** and run it. Download the ZIP.",
      "Unzip and rename each page-N.pdf with the employee's name or ID before sending.",
    ],
    example: {
      title: "Example: 18 employees, 18 pages",
      body: "The payroll PDF has 18 pages in alphabetical order. After splitting, page-1.pdf is the first employee and page-18.pdf the last, ready to be renamed and sent individually.",
    },
    useCases: [
      "**Small businesses** without a payroll portal for staff.",
      "**HR admin** distributing a monthly run.",
      "**Contractors** separating a client's batch of remittance pages.",
    ],
    limits: [
      "Page-per-person layouts only. Two-page payslips need range extraction.",
      "Renaming is manual. The tool names files page-1.pdf, page-2.pdf and so on.",
      "Foldryn is not a payroll or compliance product. Follow your own data protection rules.",
    ],
    faq: [
      {
        question: "Is payroll data uploaded to Foldryn?",
        answer: "No. The PDF is split in your browser and isn't uploaded.",
      },
      {
        question: "Can I get names on the files automatically?",
        answer: "No. Files are numbered by page, so you rename them yourself.",
      },
      {
        question: "What if a payslip spans two pages?",
        answer: "Use Extract pages with a range for each person, such as 3-4, one run per person.",
      },
    ],
    siblings: ["split-invoices-pdf-into-individual-invoices", "split-pdf-and-download-as-zip", "split-pdf-without-uploading", "split-pdf-by-page-range"],
    relatedTools: ["watermark-pdf", "merge-pdf", "extract-pdf-pages"],
  },
  {
    slug: "split-invoices-pdf-into-individual-invoices",
    toolSlug: "split-pdf",
    title: "Split an Invoices PDF Into Single Invoices | Foldryn",
    description:
      "Break a batch PDF of invoices into separate files, either one per page or by page ranges. Runs in your browser and downloads as a ZIP.",
    h1: "Split a Batch Invoices PDF Into Individual Invoices",
    intent: "business",
    markets: ["Global"],
    primaryKeyword: "split invoices pdf into individual invoices",
    secondaryKeywords: ["separate invoices from combined pdf", "one invoice per file from batch pdf", "split billing run pdf", "divide invoice batch by customer"],
    intro:
      "Billing systems sometimes export a month's invoices as one PDF. Split it so each customer gets only their own.",
    situation: [
      "A batch export is convenient for printing and awkward for emailing. Each customer should receive one invoice, not everyone's. If every invoice is a single page, one click on Split every page does the whole job.",
      "Multi-page invoices need page ranges instead. Work out where each invoice starts and ends, then extract the ranges one at a time. For long batches it can help to split into single pages first, then merge the pages that belong together.",
    ],
    steps: [
      "Scroll the batch PDF and note which pages belong to which invoice.",
      "In [Split PDF](/split-pdf), choose Split every page for one-page invoices, or Extract pages with a range such as 5-6 for a two-page one.",
      "Download, then rename the files with the invoice numbers before sending.",
    ],
    example: {
      title: "Example: a mixed batch",
      body: "Forty pages hold 32 invoices: 24 are one page and 8 are two pages. Split every page, then use [Merge PDF](/merge-pdf) to join the two-page invoices back together in order.",
    },
    useCases: [
      "**Monthly billing runs.**",
      "**Statement mailings** where each client gets their own file.",
      "**Archiving** invoices individually by number.",
    ],
    limits: [
      "Files are named by page position, so renaming is manual.",
      "The tool can't detect where one invoice ends and the next begins.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Can it split by customer name?",
        answer: "No. It splits by page numbers or into single pages only.",
      },
      {
        question: "How do I handle invoices with different page counts?",
        answer: "Split every page, then merge the pages of each multi-page invoice back together, or extract each invoice's range.",
      },
      {
        question: "Is there a limit on batch size?",
        answer: "Files can be up to 50 MB. Very large batches depend on your device's memory.",
      },
    ],
    siblings: ["split-payroll-pdf-into-payslips", "split-pdf-and-download-as-zip", "reorder-pdf-pages-split-and-merge", "split-pdf-every-n-pages"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "compress-pdf"],
  },
  {
    slug: "split-textbook-pdf-into-chapters",
    toolSlug: "split-pdf",
    title: "Split a Textbook PDF Into Chapters | Foldryn",
    description:
      "Cut a long textbook or course PDF into chapter files by page range. Enter each chapter's pages, download, and repeat. Runs in your browser.",
    h1: "Split a Textbook or Course PDF Into Chapters",
    intent: "student",
    markets: ["Global"],
    primaryKeyword: "split textbook pdf into chapters",
    secondaryKeywords: ["split ebook pdf by chapter", "separate lecture notes by week", "cut a long pdf into chapters", "chapter by chapter pdf for studying"],
    intro:
      "A 600-page PDF is hard to carry around and to share. Cut it into chapters you can open, annotate and send separately.",
    situation: [
      "Textbook and course PDFs rarely include one file per chapter, but studying works better in chunks: this week's reading, a chapter for a study group, a section for a group project. The contents page tells you where each chapter starts.",
      "Foldryn doesn't read bookmarks, so you enter the page ranges yourself. Pages are numbered by their position in the file, not necessarily by the number printed on them, so check the first and last page of each range after splitting.",
    ],
    steps: [
      "Use the contents page to write down each chapter's start and end page in the PDF.",
      "In [Split PDF](/split-pdf), choose Extract pages and enter one chapter's range, such as 45-78.",
      "Download, then repeat with the next range. Name each file by chapter.",
    ],
    example: {
      title: "Example: three chapters for a study group",
      body: "Chapters 4 to 6 span pages 91 to 168 of the PDF. Extract 91-168 to share one file instead of a 600-page book.",
    },
    useCases: [
      "**Weekly reading** sent as a short file.",
      "**Study groups** sharing only the relevant chapters.",
      "**Phones and tablets** where a smaller file opens faster.",
    ],
    limits: [
      "No splitting by bookmarks or chapter headings.",
      "Printed page numbers often differ from PDF positions, especially after front matter.",
      "Share only material you have the right to share.",
    ],
    faq: [
      {
        question: "Why don't my page numbers match the book's?",
        answer: "Front matter such as covers and prefaces shifts positions. See our page on [printed numbers vs. PDF positions](/split-pdf/split-pdf-printed-numbers-vs-pdf-pages).",
      },
      {
        question: "Can I split many chapters at once?",
        answer: "One range list makes one PDF. Make a separate run for each chapter.",
      },
      {
        question: "Does splitting reduce quality?",
        answer: "No. Pages are copied from the original, not redrawn.",
      },
    ],
    siblings: ["split-pdf-printed-numbers-vs-pdf-pages", "split-pdf-by-page-range", "split-pdf-slides-into-single-pages", "split-pdf-in-half"],
    relatedTools: ["extract-pdf-pages", "pdf-page-numbering", "compress-pdf"],
  },
  {
    slug: "split-scanned-class-set-by-student",
    toolSlug: "split-pdf",
    title: "Split Scanned Student Work Into Separate Files | Foldryn",
    description:
      "Scan a stack of student work into one PDF, then split every page into its own file. Name each file by student and upload to your system.",
    h1: "Split a Scanned Class Set Into One File per Student",
    intent: "student",
    markets: ["Global"],
    primaryKeyword: "split scanned class set into one file per student",
    secondaryKeywords: ["split scanned tests by student", "one page per student pdf", "separate scanned assignments", "teacher scan batch to individual pdfs"],
    intro:
      "Teachers often scan a stack of papers in one pass. Splitting the result by page gives a file for each student.",
    situation: [
      "A document feeder scans a whole stack as one PDF, one sheet after another. Learning platforms and gradebooks usually want each student's work as its own file. Splitting every page means you don't have to rescan paper by paper.",
      "Keep the stack in a known order, such as alphabetical by name, so file numbers map to students. If any student wrote two sheets, those pages need to be handled with ranges instead of single pages.",
      "Rotation and order matter more here than anywhere else. If the feeder scanned a sheet upside down, that student's file will be upside down too, so skim the PDF before splitting and fix any sideways page first. Once split, check that the first and last files match the first and last names on your list, which catches most ordering mistakes.",
    ],
    steps: [
      "Scan the stack in a known order, with one sheet per student.",
      "In [Split PDF](/split-pdf), choose **Split every page** and download the ZIP.",
      "Unzip it and rename page-1.pdf, page-2.pdf and so on using your class list.",
    ],
    example: {
      title: "Example: a 28-student quiz",
      body: "A quiz scanned in roll order gives 28 pages. After splitting, page-1.pdf belongs to the first name on the list and page-28.pdf to the last.",
    },
    useCases: [
      "**Returning marked work** to each student privately.",
      "**Uploading to a gradebook** with one file per student.",
      "**Filing** assessment evidence per learner.",
    ],
    limits: [
      "Rotation problems in a scan stay with the page. Fix them with [Rotate PDF](/rotate-pdf) first.",
      "Files are numbered, not named. Renaming is manual.",
      "Student work is personal data, so store and send it according to your school's rules.",
    ],
    faq: [
      {
        question: "Can it split by name or barcode?",
        answer: "No. It splits by page position only.",
      },
      {
        question: "What if one student's work is two pages?",
        answer: "Use ranges such as 5-6, or split every page and merge the two back together.",
      },
      {
        question: "Are the scans uploaded to Foldryn?",
        answer: "No. The file is processed in your browser.",
      },
    ],
    siblings: ["split-scanned-batch-into-separate-documents", "split-pdf-on-chromebook", "split-pdf-and-download-as-zip", "split-pdf-into-separate-pages"],
    relatedTools: ["rotate-pdf", "merge-pdf", "delete-pdf-pages"],
  },
  {
    slug: "extract-signature-page-from-pdf",
    toolSlug: "split-pdf",
    title: "Send Only the Signature Page of a PDF | Foldryn",
    description:
      "Pull the signature page out of a long PDF so you can send just that page. Enter the page number, download one small file. Runs in your browser.",
    h1: "Pull the Signature Page Out of a Long PDF",
    intent: "professional",
    markets: ["Global"],
    primaryKeyword: "extract signature page from pdf",
    secondaryKeywords: ["send only signed page of a pdf", "get last page of pdf as separate file", "take signature page from contract pdf", "save one page of a pdf"],
    intro:
      "Many agreements are 20 pages long and only the last page needs a signature. Extract just that page to send back.",
    situation: [
      "The common loop: you receive a long agreement, sign it, and the other party asks for the signed page. Sending the whole document back increases the file size and shows more than needed.",
      "Find the page number of the signature page in the PDF, then enter that single number in Extract pages. If the signature appears over two pages, enter both, such as 17-18. The result is a small new PDF with only those pages.",
      "Count carefully if the signature page is the last page: a document shown as 22 of 22 in your viewer has its signature on page 22, whatever a footer says. If signatures are spread over several pages, list them all, such as 5,12,22, so the extract holds each signed page in order.",
    ],
    steps: [
      "Open the signed PDF in a viewer and note the page number of the signature page.",
      "In [Split PDF](/split-pdf), choose Extract pages and enter that number, for example 22.",
      "Run it and download the one-page PDF.",
    ],
    example: {
      title: "Example: page 22 of 22",
      body: "A 22-page lease has the signatures on the last page. Entering 22 gives a one-page file to email back.",
    },
    useCases: [
      "**Returning signed pages** by email.",
      "**Attaching signature pages** to a separate document set.",
      "**Keeping a small copy** of the page that matters.",
    ],
    limits: [
      "Foldryn doesn't create signatures. You sign in another program first.",
      "Whether a signature page alone is acceptable is up to the other party.",
      "Digital signature validity may not survive extraction. Check with the recipient.",
    ],
    faq: [
      {
        question: "Does this sign my PDF?",
        answer: "No. It only extracts pages from a document you already signed.",
      },
      {
        question: "Can I add the signature page back into the main document?",
        answer: "Yes. Use [Merge PDF](/merge-pdf) to join it with the other pages.",
      },
      {
        question: "Will a cryptographic signature still be valid?",
        answer: "Not necessarily. Extracting creates a new file, so ask the recipient what they need.",
      },
    ],
    siblings: ["split-contract-pdf-into-sections", "share-only-some-pages-of-a-pdf", "split-multi-page-form-pdf", "split-pdf-by-page-range"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "watermark-pdf"],
  },
  {
    slug: "split-contract-pdf-into-sections",
    toolSlug: "split-pdf",
    title: "Split a Contract PDF Into Sections | Foldryn",
    description:
      "Separate a long contract PDF into the main agreement, schedules and appendices by page range. Runs in your browser, with the original left intact.",
    h1: "Split a Contract PDF Into Agreement, Schedules and Appendices",
    intent: "professional",
    markets: ["Global"],
    primaryKeyword: "split contract pdf into sections",
    secondaryKeywords: ["separate schedules from agreement pdf", "split legal document pdf by section", "pull appendix out of pdf", "divide agreement into parts"],
    intro:
      "A contract bundle often combines the main terms with schedules and appendices. Separate them so each part can be reviewed or sent on its own.",
    situation: [
      "Different people need different parts: finance reviews the pricing schedule, operations the service levels, legal the main terms. Sharing one 80-page file means everyone reads, or forwards, everything.",
      "Note where each part starts and ends, then extract each range as its own PDF. The original stays untouched, so you can always return to the full bundle. This is document handling only, and it doesn't replace advice about what should be shared or signed.",
      "Keep the original bundle as the master copy and treat each extract as a working copy. If a schedule is revised later, extract the revised pages again and use [Merge PDF](/merge-pdf) to join the new schedule with the unchanged parts, rather than editing by hand.",
    ],
    steps: [
      "List the page ranges of each part, such as terms 1-24, schedule A 25-31, appendix 32-48.",
      "In [Split PDF](/split-pdf), enter one range at a time in Extract pages and download each result.",
      "Name each file clearly, and keep the original bundle as the master copy.",
    ],
    example: {
      title: "Example: three outputs from one bundle",
      body: "From a 48-page bundle you extract 1-24, 25-31 and 32-48 in three runs, giving a terms file, a pricing schedule and an appendix file.",
    },
    useCases: [
      "**Sending the right part** to the right reviewer.",
      "**Version control:** replace only the schedule that changed.",
      "**Smaller attachments** per department.",
    ],
    limits: [
      "No splitting by bookmarks or headings.",
      "Signatures and annotations may not survive extraction in every case.",
      "This is not legal advice.",
    ],
    faq: [
      {
        question: "Can I put the sections back together later?",
        answer: "Yes, with [Merge PDF](/merge-pdf), in whatever order you choose.",
      },
      {
        question: "Does the original change?",
        answer: "No. You always get new files.",
      },
      {
        question: "Is the contract uploaded?",
        answer: "No. It's processed in your browser and not uploaded to Foldryn.",
      },
    ],
    siblings: ["extract-signature-page-from-pdf", "split-medical-records-pdf", "share-only-some-pages-of-a-pdf", "reorder-pdf-pages-split-and-merge"],
    relatedTools: ["merge-pdf", "pdf-page-numbering", "extract-pdf-pages"],
  },
  {
    slug: "split-medical-records-pdf",
    toolSlug: "split-pdf",
    title: "Split a Medical Records PDF to Share Pages | Foldryn",
    description:
      "Pick only the relevant pages from a long medical records PDF before sending them to a new provider or insurer. Runs in your browser, no upload.",
    h1: "Share Only the Relevant Pages of a Medical Records PDF",
    intent: "document-specific",
    markets: ["Global"],
    primaryKeyword: "split medical records pdf",
    secondaryKeywords: ["extract pages from medical record pdf", "send part of patient records pdf", "pick pages from lab results pdf", "trim health records pdf"],
    intro:
      "Patient portals often download a complete record as one PDF. You can share just the pages that are relevant.",
    situation: [
      "A full record may cover years of visits. A new specialist or an insurer may only need a recent report, a letter or a set of lab results. Choosing those pages is easier than emailing everything, and it limits what you share.",
      "Foldryn processes the file in your browser rather than uploading it, which is helpful for sensitive documents. It isn't a medical or compliance product, and it doesn't redact anything. If details on the chosen pages should be hidden, handle that before sharing.",
      "Think about what the recipient really needs before choosing pages: a single letter, a set of results, or a date range of visits. Fewer pages are easier for them to read, and you stay in control of what leaves your hands. If you're unsure, ask the provider which pages they want.",
    ],
    steps: [
      "Scroll the record and note the page numbers of the reports you want to share.",
      "In [Split PDF](/split-pdf), choose Extract pages and enter them, such as 3-5,12.",
      "Download the smaller PDF, check it page by page, and send it using the channel your provider asks for.",
    ],
    example: {
      title: "Example: a referral",
      body: "A 120-page portal download contains a consultant letter on pages 41 to 43. Extract 41-43 and send only that letter with your referral.",
    },
    useCases: [
      "**Referrals** where only a recent report matters.",
      "**Insurance claims** needing specific results.",
      "**Second opinions** based on selected documents.",
    ],
    limits: [
      "Nothing is redacted. Pages are copied as they are.",
      "Not a compliance solution. Follow your provider's rules for sending records.",
      "Password-protected downloads can't be processed.",
    ],
    faq: [
      {
        question: "Are my medical documents uploaded to Foldryn?",
        answer: "No. They are processed in your browser on your device.",
      },
      {
        question: "Can I hide parts of a page?",
        answer: "No. The tool extracts whole pages and doesn't edit content.",
      },
      {
        question: "Should I send the original or the extract?",
        answer: "That depends on what the recipient asks for. Check their instructions.",
      },
    ],
    siblings: ["split-pdf-without-uploading", "share-only-some-pages-of-a-pdf", "split-contract-pdf-into-sections", "split-password-protected-pdf"],
    relatedTools: ["extract-pdf-pages", "delete-pdf-pages", "merge-pdf"],
  },
  {
    slug: "share-only-some-pages-of-a-pdf",
    toolSlug: "split-pdf",
    title: "Share Only Some Pages of a PDF | Foldryn",
    description:
      "Send part of a PDF instead of the whole thing. Choose the pages to keep, create a new smaller PDF, and leave your original untouched.",
    h1: "Share Only Some Pages of a PDF, Not the Whole File",
    intent: "problem-solving",
    markets: ["Global"],
    primaryKeyword: "share only some pages of a pdf",
    secondaryKeywords: ["send part of a pdf", "cut selected pages from pdf into new file", "give someone only certain pages", "keep selected pages of a pdf"],
    intro:
      "If you only want the other person to see a few pages, make a new PDF containing just those.",
    situation: [
      "It's easy to attach the whole file and say \"see page 14\". That puts every other page in front of the recipient too. A short extract is cleaner, smaller, and keeps unrelated material private.",
      "The tool builds a new file from the pages you list, and the original is not modified. Remember that a PDF viewer's \"hide\" or \"cover\" tools don't remove content, whereas extracting only the pages you need means the others are simply not in the new file.",
    ],
    steps: [
      "Decide which pages the recipient should receive.",
      "In [Split PDF](/split-pdf), choose Extract pages and enter them, such as 14,16-18.",
      "Download, open the new file to confirm it contains only what you intend, then send it.",
    ],
    example: {
      title: "Example: four pages of a 50-page report",
      body: "Your colleague needs pages 14 and 16 to 18. Entering 14,16-18 gives a four-page PDF with nothing else in it.",
    },
    useCases: [
      "**Privacy:** keep unrelated pages out of an email.",
      "**Size:** a smaller attachment.",
      "**Clarity:** the recipient sees what matters.",
    ],
    limits: [
      "Pages stay in ascending order and can't be rearranged.",
      "Check the output before sending, in case you mistyped a range.",
      "If you need to remove a few pages from the rest, see [Delete PDF Pages](/delete-pdf-pages).",
    ],
    faq: [
      {
        question: "Is this safer than covering pages with a box?",
        answer: "Extraction leaves the other pages out entirely, whereas boxes drawn over content may leave it underneath. Always check the output.",
      },
      {
        question: "Can I keep the original?",
        answer: "Yes. The tool never changes your original file.",
      },
      {
        question: "What's the difference from Delete PDF Pages?",
        answer: "Extracting keeps the pages you list. Deleting removes the pages you list. Use whichever list is shorter.",
      },
    ],
    siblings: ["split-pdf-by-page-range", "extract-signature-page-from-pdf", "split-medical-records-pdf", "split-bank-statement-pdf-by-month"],
    relatedTools: ["delete-pdf-pages", "extract-pdf-pages", "watermark-pdf"],
    guides: [{ title: "How to delete pages from a PDF", href: "/blog/how-to-delete-pages-from-pdf" }],
  },
  {
    slug: "split-pdf-slides-into-single-pages",
    toolSlug: "split-pdf",
    title: "Split a Slide Deck PDF Into Single Slides | Foldryn",
    description:
      "Break a PDF of presentation slides into one file per slide, or extract a few slides. Runs in your browser and downloads as a ZIP.",
    h1: "Split a Slide Deck PDF Into Single Slides",
    intent: "file-format",
    markets: ["Global"],
    primaryKeyword: "split slide deck pdf into single slides",
    secondaryKeywords: ["separate presentation pdf into slides", "one slide per pdf file", "extract slides from presentation pdf", "split lecture slides pdf"],
    intro:
      "A presentation exported as PDF is one page per slide. Split it to reuse or share slides one at a time.",
    situation: [
      "After exporting slides to PDF you might want a single slide for a document, a chat or a form. Or you want a handful from a 40-slide deck for a colleague's talk. Each slide is a page, so page-based splitting fits naturally.",
      "If you need the slides as pictures for another document, split to single pages and convert with [PDF to PNG](/pdf-to-png). Keep in mind that converting makes pictures, so text in them is no longer selectable.",
      "Some presentation programs can export each animation step as its own page, so one slide may appear as several pages. Scroll through the PDF first and count real slides before you enter numbers, otherwise a range may include repeated versions of the same slide.",
    ],
    steps: [
      "Export the presentation as PDF from your slide program.",
      "In [Split PDF](/split-pdf), choose Split every page, or Extract pages with the slide numbers you want.",
      "Download the ZIP or PDF and use the slides where you need them.",
    ],
    example: {
      title: "Example: a four-slide summary",
      body: "From a 40-slide deck, extract 1,5,12,40 to get a short PDF with the title, agenda, key chart and closing slide.",
    },
    useCases: [
      "**Short summaries** of a long deck.",
      "**Reusing a single slide** in another document.",
      "**Sharing selected slides** without the full presentation.",
    ],
    limits: [
      "Animations and speaker notes aren't kept in a standard PDF export.",
      "Slides can't be reordered inside this tool.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Can I get slides as images?",
        answer: "Convert the pages with PDF to PNG or PDF to JPG after splitting.",
      },
      {
        question: "Will slide text stay selectable?",
        answer: "In the split PDF files, yes. In images, no.",
      },
      {
        question: "How do I rearrange the slides?",
        answer: "Split every page, then merge them in the new order. See our [reorder workflow](/split-pdf/reorder-pdf-pages-split-and-merge).",
      },
    ],
    siblings: ["split-pdf-into-separate-pages", "reorder-pdf-pages-split-and-merge", "split-pdf-and-download-as-zip", "split-textbook-pdf-into-chapters"],
    relatedTools: ["pdf-to-png", "pdf-to-jpg", "merge-pdf"],
  },
  {
    slug: "split-multi-page-form-pdf",
    toolSlug: "split-pdf",
    title: "Split a Multi-Page Form PDF by Section | Foldryn",
    description:
      "Separate the pages of a long application form PDF so you can upload, sign or send each section on its own. Runs in your browser.",
    h1: "Split a Multi-Page Application Form by Section",
    intent: "document-specific",
    markets: ["Global"],
    primaryKeyword: "split multi-page form pdf by section",
    secondaryKeywords: ["separate pages of application form pdf", "split form into parts for upload", "pull pages from long form pdf", "divide a form pdf for signatures"],
    intro:
      "Long forms often need different parts handled in different ways: some pages signed, some uploaded, some sent to someone else.",
    situation: [
      "A 12-page application might have a personal details section, an employer section and a declaration. Each person who has to fill or sign their part only needs those pages, and an upload portal may ask for separate files per section.",
      "Splitting by ranges lets you do this without printing. Once each part is done, you can bring them back together with [Merge PDF](/merge-pdf) in the right order for the final submission.",
      "Decide the splits before you send anything out. Writing the page range for each person in the email, for example \"please complete pages 5 to 7\", avoids mix-ups, especially on long forms with several signers.",
    ],
    steps: [
      "Check which pages belong to which section of the form.",
      "In [Split PDF](/split-pdf), enter each section's range in Extract pages, such as 1-4, and download it.",
      "Send or complete each part, then merge them back if the final submission needs one file.",
    ],
    example: {
      title: "Example: an employer's section",
      body: "Pages 5 to 7 of a 12-page form are for your employer. Extract 5-7 and email only those three pages to them to complete.",
    },
    useCases: [
      "**Collecting signatures** from different people.",
      "**Portals with section-specific uploads.**",
      "**Partial resubmissions** of corrected pages.",
    ],
    limits: [
      "Fillable form fields may not behave the same after extraction. Test the output.",
      "Foldryn doesn't fill or flatten forms.",
      "Follow the form issuer's rules on what may be split.",
    ],
    faq: [
      {
        question: "Will form fields still work?",
        answer: "They may not. Open the extracted file and test the fields before relying on them.",
      },
      {
        question: "Can I put the sections back together?",
        answer: "Yes, with Merge PDF, in the page order you need.",
      },
      {
        question: "Does the original form stay intact?",
        answer: "Yes. Splitting never modifies the original.",
      },
    ],
    siblings: ["extract-signature-page-from-pdf", "split-tax-return-pdf-into-sections", "split-pdf-by-page-range", "split-pdf-in-half"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "rotate-pdf"],
  },
  {
    slug: "split-tax-return-pdf-into-sections",
    toolSlug: "split-pdf",
    title: "Split a Tax Return PDF Into Sections | Foldryn",
    description:
      "Separate a long tax return or tax pack PDF into the forms, schedules and supporting pages you need to send or file. Runs in your browser.",
    h1: "Split a Tax Return PDF Into Forms and Supporting Pages",
    intent: "document-specific",
    markets: ["US", "UK", "AU", "CA", "NZ"],
    primaryKeyword: "split tax return pdf into sections",
    secondaryKeywords: ["extract pages from tax return pdf", "separate tax forms from supporting documents", "send accountant only some pages of tax pdf", "split tax pack pdf"],
    intro:
      "A tax return download can include the main return, schedules and a pile of supporting pages. Split out what each recipient needs.",
    situation: [
      "Tax software often exports one PDF with everything: the return itself, worksheets and attachments. A lender may want the return only, an accountant the schedules, and a state or regional filing something different again. Sending one huge file wastes everyone's time.",
      "Which pages go where depends on your country and your situation, so confirm requirements with your tax authority or adviser. Foldryn just helps you cut the document along the page boundaries you choose.",
      "Use a clear naming habit: the tax year first, then what the file is, for example 2025-return-main.pdf and 2025-return-schedules.pdf. A year later you'll be glad of it, and recipients can tell what each attachment is without opening it.",
    ],
    steps: [
      "Scan the PDF and note where the main return ends and schedules or worksheets begin.",
      "In [Split PDF](/split-pdf), enter each range in Extract pages, such as 1-6 for the return itself.",
      "Download each extract, name it clearly with the tax year, and send as instructed.",
    ],
    example: {
      title: "Example: main return only",
      body: "A 42-page export has the actual return on pages 1 to 8. Extract 1-8 to give a lender a short, relevant file.",
    },
    useCases: [
      "**Lender requests** for a return without worksheets.",
      "**Accountant handovers** with only supporting schedules.",
      "**Tidy archives** with one file per component.",
    ],
    limits: [
      "This doesn't check what a tax authority requires.",
      "Foldryn can't file anything for you.",
      "Password-protected tax files can't be processed.",
    ],
    faq: [
      {
        question: "Can I combine pages from different tax years?",
        answer: "Split each year's file, then join the extracts with [Merge PDF](/merge-pdf).",
      },
      {
        question: "Are tax documents uploaded?",
        answer: "No. They are processed in your browser.",
      },
      {
        question: "Does extracting change a page's content?",
        answer: "No. Pages are copied as they are.",
      },
    ],
    siblings: ["split-bank-statement-pdf-by-month", "split-multi-page-form-pdf", "share-only-some-pages-of-a-pdf", "split-password-protected-pdf"],
    relatedTools: ["merge-pdf", "extract-pdf-pages", "pdf-page-numbering"],
  },
];
