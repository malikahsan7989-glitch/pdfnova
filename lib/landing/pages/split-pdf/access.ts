import type { LandingPage } from "../../types";

/** Split PDF: core, device, software-free and privacy intents. */
export const splitPdfAccessPages: LandingPage[] = [
  {
    slug: "split-pdf-into-separate-pages",
    toolSlug: "split-pdf",
    title: "Split a PDF Into Separate Pages | Foldryn",
    description:
      "Turn a multi-page PDF into one PDF per page. Choose Split every page, then download a ZIP of single-page files. It all runs in your browser.",
    h1: "Split a PDF Into Separate Pages",
    intent: "core",
    markets: ["Global"],
    primaryKeyword: "split pdf into separate pages",
    secondaryKeywords: ["split pdf into single pages", "separate pdf pages into individual files", "break a pdf into pages", "pdf page splitter"],
    intro:
      "One PDF in, one file per page out. The tool bundles the results into a ZIP so you download everything in one go.",
    situation: [
      "Sometimes a PDF is really a stack of independent pages: a batch of scanned forms, a set of certificates, a handout where every page goes to a different person. Opening it and printing page by page is tedious, and many upload forms want each page as its own file.",
      "The **Split every page** option creates a separate PDF for each page, named page-1.pdf, page-2.pdf and so on. When there is more than one file, they are packed into a ZIP that is built in your browser. Your original PDF is never changed.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) and drop in your file (up to 50 MB). The tool shows how many pages it has.",
      "Pick **Split every page** instead of Extract pages.",
      "Run the split and save the ZIP. Unzip it to find one PDF per page.",
    ],
    example: {
      title: "Example: a 12-page batch of scanned forms",
      body: "A scanner produced one 12-page PDF where each page is a different customer's form. Splitting every page gives twelve files, page-1.pdf to page-12.pdf, ready to rename and file one by one.",
    },
    useCases: [
      "**Filing:** save each scanned page under its own name.",
      "**Separate upload fields** that each take one document.",
      "**Handing out pages:** email each person only their own sheet.",
    ],
    limits: [
      "Every page is split. To get only some pages, choose Extract pages instead.",
      "There's no splitting by file size or by bookmarks.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "How are the separate files named?",
        answer: "page-1.pdf, page-2.pdf and so on, matching each page's position in the original.",
      },
      {
        question: "Do I get a ZIP or individual downloads?",
        answer: "A ZIP when there are several files. You unzip it on your device.",
      },
      {
        question: "Does splitting change my original PDF?",
        answer: "No. You always get new files and the original stays as it was.",
      },
    ],
    siblings: ["split-pdf-by-page-range", "split-pdf-and-download-as-zip", "split-scanned-batch-into-separate-documents", "split-pdf-in-half"],
    relatedTools: ["extract-pdf-pages", "merge-pdf", "delete-pdf-pages"],
    guides: [{ title: "How to extract pages from a PDF, step by step", href: "/blog/how-to-split-extract-pages-from-pdf" }],
  },
  {
    slug: "split-pdf-on-iphone",
    toolSlug: "split-pdf",
    title: "Split a PDF on iPhone or iPad | Foldryn",
    description:
      "Split a PDF on an iPhone or iPad from your mobile browser. Extract the pages you need or split every page, with no app to install.",
    h1: "How to Split a PDF on an iPhone or iPad",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "split pdf on iphone",
    secondaryKeywords: ["extract pages from pdf on iphone", "separate pdf pages on ipad", "how to split a pdf in the files app", "split pdf iphone without app"],
    intro:
      "You don't need a computer to pull a few pages out of a PDF. The browser on your iPhone or iPad can do it.",
    situation: [
      "The trigger is usually something urgent: a 30-page document arrived by email and the form only wants pages 4 to 6, or a long statement needs trimming before you send it on. Doing that on the phone you already have in your hand saves a trip to a laptop.",
      "Tapping the file area opens the system picker, which reaches the places your device offers, such as On My iPhone or connected cloud storage. You type the pages you want, for example 4-6, and the new PDF downloads like any other file from your browser.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) in Safari or another browser and choose your PDF from the picker.",
      "Under Extract pages, type the pages you want, such as 4-6, or choose Split every page.",
      "Start the split, then tap Download. Find the saved file in your browser's downloads or the Files app.",
    ],
    example: {
      title: "Example: three pages out of a long email attachment",
      body: "A 30-page agreement has the section you need on pages 4 to 6. Enter 4-6, split, and you have a three-page PDF to forward without the other twenty-seven.",
    },
    useCases: [
      "**Replying on the go** with only the relevant pages.",
      "**Shared devices** where nothing can be installed.",
      "**Quick trims** before uploading to a form.",
    ],
    limits: [
      "Large files depend on your device's free memory, so close other tabs if it struggles.",
      "Pages come out in ascending order and can't be rearranged.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Do I need an app on my iPhone?",
        answer: "No. Split PDF is a web page that works in your mobile browser.",
      },
      {
        question: "How do I type several separate pages?",
        answer: "Use commas and dashes, for example 1,3,5-8 gives pages 1, 3, 5, 6, 7 and 8.",
      },
      {
        question: "Where does the new PDF go?",
        answer: "Your browser saves it like any download. Look in its downloads list or the Files app.",
      },
    ],
    siblings: ["split-pdf-on-android", "split-pdf-by-page-range", "split-pdf-without-uploading", "share-only-some-pages-of-a-pdf"],
    relatedTools: ["extract-pdf-pages", "merge-pdf", "compress-pdf"],
  },
  {
    slug: "split-pdf-on-android",
    toolSlug: "split-pdf",
    title: "Split a PDF on an Android Phone | Foldryn",
    description:
      "Split a PDF on an Android phone or tablet in your browser. Pick the pages to keep or split every page. No app to install, no account needed.",
    h1: "How to Split a PDF on an Android Phone",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "split pdf on android",
    secondaryKeywords: ["extract pages from pdf android", "separate pdf pages on samsung phone", "cut pdf pages on android", "split pdf mobile free"],
    intro:
      "Android browsers can split PDFs directly, which is handy when the file is already in your Downloads folder or Gmail.",
    situation: [
      "PDFs on Android tend to end up in Downloads or in your mail app. If a portal wants only one section, or an email bounced because the file is big, trimming the PDF in the browser means you can finish without moving anything to a computer.",
      "The document picker opens when you tap the file area, and the page count appears once the file loads. That count is useful: it tells you the real page positions, which can differ from numbers printed on the pages.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) in Chrome or your usual browser and tap the file area.",
      "Select the PDF from Downloads or another location the picker offers.",
      "Enter the pages you want, or choose Split every page, run the split, and tap Download.",
    ],
    example: {
      title: "Example: the first two pages of a long report",
      body: "A 60-page report has an executive summary on pages 1 and 2. Type 1-2, split, and attach the small extract to a message instead of the whole thing.",
    },
    useCases: [
      "**Gmail attachments** you want to trim before forwarding.",
      "**Tablets** with larger screens for checking page counts.",
      "**Work phones** without app installs.",
    ],
    limits: [
      "Files up to 50 MB are accepted, and older phones may find big ones slow.",
      "There's no splitting by size or bookmarks.",
      "A page number beyond the document's length shows an error.",
    ],
    faq: [
      {
        question: "Is there an Android app?",
        answer: "No app is needed. The tool runs in your browser.",
      },
      {
        question: "Why can't I find my PDF?",
        answer: "The picker lists only storage your phone offers. Move the file to Downloads and try again.",
      },
      {
        question: "Can I split into one file per page?",
        answer: "Yes. Choose Split every page and you get a ZIP with one PDF per page.",
      },
    ],
    siblings: ["split-pdf-on-iphone", "split-large-pdf-for-email-limit", "split-pdf-without-installing-software", "split-pdf-into-separate-pages"],
    relatedTools: ["extract-pdf-pages", "compress-pdf", "delete-pdf-pages"],
  },
  {
    slug: "split-pdf-on-mac",
    toolSlug: "split-pdf",
    title: "Split a PDF on a Mac in Your Browser | Foldryn",
    description:
      "Split a PDF on a Mac from Safari or Chrome. Extract page ranges or split every page into separate files and download the result.",
    h1: "How to Split a PDF on a Mac",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "split pdf on mac",
    secondaryKeywords: ["extract pages from pdf mac", "separate pages of pdf macbook", "split pdf without preview", "cut a pdf into parts on mac"],
    intro:
      "Preview can pull pages out of a PDF, and a browser can too. The browser route is a plain form: type the pages, press a button.",
    situation: [
      "On a Mac you can open a PDF in Preview, show the thumbnails, and drag pages out into a new document. That works, and some people like it. Others prefer typing a list of pages once, especially when the pages are scattered, like 2, 7 and 15 to 20.",
      "In Foldryn the page list is a single text field. The file is read into browser memory, split there, and downloaded from your own machine. That is also helpful on a Mac that isn't yours, where you don't want to leave documents in an app's recent items.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) in Safari or Chrome and drag your PDF in from Finder.",
      "Type the pages to keep, for example 2,7,15-20, or choose Split every page.",
      "Run it and download the new file or ZIP to your Downloads folder.",
    ],
    example: {
      title: "Example: scattered pages in one go",
      body: "A 40-page manual has the safety page, the wiring diagram and the parts list on pages 2, 7 and 15 to 20. One entry, 2,7,15-20, gives a single 8-page PDF.",
    },
    useCases: [
      "**Scattered pages** that are tedious to drag out one by one.",
      "**Shared Macs** where you don't want to leave traces in an app.",
      "**Matching steps** with a Windows PC elsewhere.",
    ],
    limits: [
      "Pages come out in ascending order only.",
      "No splitting by file size or bookmarks.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Does this replace Preview?",
        answer: "No. Preview is fine for many jobs. This is an alternative that works from a typed page list.",
      },
      {
        question: "Does it work in Safari?",
        answer: "Yes, Safari and Chrome on macOS both work.",
      },
      {
        question: "What if I enter pages out of order?",
        answer: "They are still output in ascending order, and a repeated page appears once.",
      },
    ],
    siblings: ["split-pdf-on-windows", "split-pdf-on-chromebook", "split-pdf-by-page-range", "split-pdf-without-uploading"],
    relatedTools: ["extract-pdf-pages", "delete-pdf-pages", "rotate-pdf"],
  },
  {
    slug: "split-pdf-on-windows",
    toolSlug: "split-pdf",
    title: "Split a PDF on Windows Without Software | Foldryn",
    description:
      "Split a PDF on Windows 10 or 11 from Edge, Chrome or Firefox. Extract the pages you want or split every page, with no installer.",
    h1: "How to Split a PDF on Windows Without Installing Software",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "split pdf on windows",
    secondaryKeywords: ["split pdf windows 11", "extract pages from pdf windows 10", "separate pdf pages on pc", "cut pdf pages without adobe"],
    intro:
      "File Explorer can't split a PDF, but a browser tab can, with no installer and no sign-in.",
    situation: [
      "Windows has no built-in command to take pages out of a PDF. People often fall back on installing a large program for a single job, or printing selected pages to a new PDF, which can change how the pages look.",
      "In the browser you drag the file in from File Explorer, state which pages you want, and download the result. The pages are copied rather than redrawn, so text and layout stay as in the original.",
      "If you're not sure which pages you need, open the PDF in your browser or default viewer first and scroll to find them. Take the number from the viewer's page counter, then come back and enter it. That avoids guessing and a second run.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) in Edge, Chrome or Firefox and drag in your PDF.",
      "Choose Extract pages and type a list such as 1-3,9, or choose Split every page.",
      "Run it, then save the download from your browser's Downloads folder.",
    ],
    example: {
      title: "Example: cover plus appendix",
      body: "A 45-page report needs only the cover and the appendix on page 44. Type 1,44 and you have a two-page PDF to send.",
    },
    useCases: [
      "**Office PCs** that block installs.",
      "**One-off tasks** that don't justify new software.",
      "**Avoiding \"print to PDF\"**, which re-renders pages.",
    ],
    limits: [
      "Up to 50 MB per file, and big files use your PC's memory.",
      "No splitting by file size or bookmarks.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Can Windows split a PDF by itself?",
        answer: "Not through File Explorer. You need a PDF program or a web tool.",
      },
      {
        question: "Does it work on Windows 10 and 11?",
        answer: "Yes. It depends on your browser, not the Windows version.",
      },
      {
        question: "Will the extracted pages look different?",
        answer: "No. Pages are copied across, so the layout and text stay the same.",
      },
    ],
    siblings: ["split-pdf-on-mac", "split-pdf-without-installing-software", "split-pdf-page-range-error", "split-pdf-in-half"],
    relatedTools: ["extract-pdf-pages", "merge-pdf", "pdf-page-numbering"],
  },
  {
    slug: "split-pdf-on-chromebook",
    toolSlug: "split-pdf",
    title: "Split a PDF on a Chromebook | Foldryn",
    description:
      "Split a PDF on a Chromebook from the Chrome browser. Pick pages from Downloads or Drive, extract them, and save the new file. Nothing to install.",
    h1: "How to Split a PDF on a Chromebook",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "split pdf on chromebook",
    secondaryKeywords: ["extract pages from pdf chromebook", "separate pdf pages school chromebook", "chromebook pdf page extractor"],
    intro:
      "A Chromebook has no PDF editor built in, but its browser is enough to take pages out of a PDF.",
    situation: [
      "Students and staff on managed Chromebooks usually can't add programs, and extensions may be restricted too. A tool that is just a web page avoids both problems, if your school or workplace allows the site to open.",
      "The usual job is trimming: a teacher sends a 20-page packet but only pages 3 to 5 are for you to hand in, or a scanned PDF includes blank pages at the end. Extracting the relevant range gives you a smaller, cleaner file.",
      "Chromebooks open PDFs in a built-in viewer, so you can scroll through the document first and note the page numbers you want before you split. Doing this first avoids guessing and saves a second run.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) in Chrome and select the PDF from Downloads or Google Drive in the picker.",
      "Type the pages to keep, or choose Split every page.",
      "Run the split and download. The new file appears in Downloads in the Files app.",
    ],
    example: {
      title: "Example: handing in three pages of a packet",
      body: "A 20-page worksheet packet has your answers on pages 3 to 5. Extract 3-5 and submit that short PDF through the class portal.",
    },
    useCases: [
      "**School submissions** that need only certain pages.",
      "**Locked-down devices** with no installs.",
      "**Cleaning up scans** by keeping the useful pages.",
    ],
    limits: [
      "A school network may block the site.",
      "Very large files can struggle on Chromebooks with little memory.",
      "Pages can't be reordered.",
    ],
    faq: [
      {
        question: "Do I need a Chrome extension?",
        answer: "No. It works as an ordinary web page.",
      },
      {
        question: "Can I use a PDF from Google Drive?",
        answer: "If the picker shows your Drive you can select it there. Otherwise download it first.",
      },
      {
        question: "Does the result go back to Drive?",
        answer: "No. It downloads to your Chromebook, and you can move it to Drive yourself.",
      },
    ],
    siblings: ["split-pdf-on-windows", "split-pdf-on-android", "split-scanned-class-set-by-student", "split-pdf-without-installing-software"],
    relatedTools: ["delete-pdf-pages", "merge-pdf", "extract-pdf-pages"],
  },
  {
    slug: "split-pdf-without-installing-software",
    toolSlug: "split-pdf",
    title: "Split a PDF Without Adobe or Any Software | Foldryn",
    description:
      "Split a PDF without Adobe Acrobat or any installer. Choose pages or split every page in your browser tab, then close it. No account needed.",
    h1: "Split a PDF Without Adobe or Any Software",
    intent: "software-free",
    markets: ["Global"],
    primaryKeyword: "split pdf without adobe",
    secondaryKeywords: ["split pdf no download", "extract pages without acrobat", "online pdf splitter no install", "split pdf without paying"],
    intro:
      "Splitting a PDF doesn't require a paid program. A browser tab can handle the common cases.",
    situation: [
      "Full PDF editors are powerful, and many are subscription products. If your need is just taking certain pages out, or separating a document into single pages, a subscription is more than the job asks for.",
      "Here the splitting happens in your browser with a PDF library. There's no sign-in and nothing to install or uninstall. What it doesn't do is editing: no changing text, no filling forms, no redaction.",
      "A fair test of whether this is enough for you: if your task is \"keep these pages\" or \"separate every page\", it is. If you need to change what's written on a page, rearrange pages freely or fill in a form, you'll want an editor, and it's better to know that up front. For the first kind of task there is nothing to install and nothing to remove afterwards.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) in any current browser and add your file.",
      "Choose between Extract pages and Split every page.",
      "Run the split, download the result, and close the tab.",
    ],
    example: {
      title: "Example: a one-off task on a work laptop",
      body: "An office laptop blocks installs and you need pages 10 to 12 of a supplier PDF. Open the page, enter 10-12, download. No IT ticket, no installer.",
    },
    useCases: [
      "**Managed devices** where installation is blocked.",
      "**Occasional jobs** that don't justify a subscription.",
      "**Borrowed computers** while travelling.",
    ],
    limits: [
      "You need an internet connection to load the page.",
      "It splits files. It can't edit text or fill forms.",
      "Password-protected PDFs can't be processed.",
    ],
    faq: [
      {
        question: "Do I need an account?",
        answer: "No account, email address or sign-in is required.",
      },
      {
        question: "Is there a watermark on the result?",
        answer: "No. The files contain your pages and nothing added by Foldryn.",
      },
      {
        question: "Does it keep the original?",
        answer: "Yes. Your original file isn't touched.",
      },
    ],
    siblings: ["split-pdf-on-windows", "split-pdf-without-uploading", "split-pdf-on-chromebook", "split-pdf-into-separate-pages"],
    relatedTools: ["extract-pdf-pages", "delete-pdf-pages", "merge-pdf"],
  },
  {
    slug: "split-pdf-without-uploading",
    toolSlug: "split-pdf",
    title: "Split a PDF Without Uploading It | Foldryn",
    description:
      "Split a PDF in your browser without sending it to a server. The file is read into memory, split on your device, and not uploaded to Foldryn.",
    h1: "Split a PDF Without Uploading It to a Server",
    intent: "privacy",
    markets: ["Global"],
    primaryKeyword: "split pdf without uploading",
    secondaryKeywords: ["private pdf splitter", "split pdf locally in browser", "extract pdf pages offline", "is it safe to split a pdf online"],
    intro:
      "When a PDF holds private details, where it's processed matters. This splitter works inside your browser and doesn't upload the file to Foldryn.",
    situation: [
      "Many online tools send your file to a server, work on it there, and send a result back. For a menu or a flyer, that doesn't matter. For a bank statement, a contract or a medical letter, plenty of people would rather it stayed on their own device.",
      "Here the page you load is only the interface. Choosing a file hands it to code running on your own device, which builds the new PDF and, for several files, the ZIP. The output is offered as a download straight from memory, and reloading the page discards it.",
    ],
    steps: [
      "Open [Split PDF](/split-pdf) and add your PDF.",
      "Want proof? Open developer tools, switch to Network, run the split, and look for any request that carries your file.",
      "Download the result from the page and close the tab.",
    ],
    example: {
      title: "Example: trimming a contract before sharing",
      body: "A 25-page contract has two pages you're allowed to share. Extract them locally, check the output, and decide where to send it. The full document never leaves your device through this tool.",
    },
    useCases: [
      "**Financial and legal papers.**",
      "**Workplace documents** under a confidentiality policy.",
      "**Curious users** who want to verify with their own browser tools.",
    ],
    limits: [
      "Loading the page contacts Foldryn's servers, as any website does. That is separate from your file.",
      "On a shared computer, the files you download stay in its Downloads folder until you delete them.",
      "Extensions installed in your browser can see page content, so a clean profile is safer for sensitive files.",
      "More detail is in the [Privacy Policy](/privacy-policy) and [Security](/security) pages.",
    ],
    faq: [
      {
        question: "How can I confirm nothing is uploaded?",
        answer: "Watch the Network tab in developer tools while you split. The page's own assets load, but your PDF isn't sent.",
      },
      {
        question: "Does it work offline?",
        answer: "The page must load first, which needs a connection. Offline use afterwards isn't promised.",
      },
      {
        question: "Does Foldryn keep my split files?",
        answer: "No. They are created on your device and downloaded from it.",
      },
    ],
    siblings: ["split-pdf-without-installing-software", "split-medical-records-pdf", "split-bank-statement-pdf-by-month", "split-password-protected-pdf"],
    relatedTools: ["watermark-pdf", "extract-pdf-pages", "merge-pdf"],
  },
];
