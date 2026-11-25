import type { LandingPage } from "../../types";

/** Merge PDF: devices, software-free and privacy intents. */
export const mergePdfAccessPages: LandingPage[] = [
  {
    slug: "combine-pdf-files-into-one",
    toolSlug: "merge-pdf",
    title: "Combine PDF Files Into One Document | Foldryn",
    description:
      "Combine several PDF files into one document in your browser. Add the files, set the order, and download a single PDF. No account needed.",
    h1: "Combine PDF Files Into One Document",
    intent: "core",
    markets: ["Global"],
    primaryKeyword: "combine pdf files into one",
    secondaryKeywords: ["combine pdfs", "combine pdf documents", "put pdf files together", "join pdf files", "join pdfs into one file"],
    intro:
      "Several PDFs, one document. Add the files, put them in the order the reader should see them, and save the result as a single PDF.",
    situation: [
      "\"Combine\", \"join\", \"merge\" and \"put together\" all describe the same job: taking the pages of separate PDF files and placing them one after another in a new file. The files are joined whole. The first file's pages come first, then every page of the second file, and so on.",
      "People usually combine PDFs because whoever is receiving them wants one file: a portal with a single upload box, an email with one attachment, or a reviewer who would rather scroll than open six documents. Pages are copied across rather than redrawn, so text, fonts and layout stay as they were in the originals.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) and select your files, or drop them onto the page. Each file can be up to 50 MB.",
      "Look at the numbered list. Use the arrow on a row to move that file up, or the X to take it out.",
      "Press **Merge PDFs**, then use the Download button to save the combined document.",
    ],
    example: {
      title: "Example: a three-part report",
      body: "A cover page, the main report and an appendix arrive as three separate files. Add all three, check that the list reads cover, report, appendix, and merge. The download is one PDF that starts with the cover and ends with the last appendix page.",
    },
    useCases: [
      "**Sending one attachment** instead of several, so nothing gets left out of an email.",
      "**Filing:** keep a contract, its amendment and the signed copy together in one document.",
      "**Reading:** turn a set of related handouts into something you can scroll through in order.",
    ],
    limits: [
      "Files are joined whole. If you need only certain pages from a file, take them out first with [Extract PDF Pages](/extract-pdf-pages).",
      "Bookmarks and interactive form features in the originals may not carry over to the combined file.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "What's the difference between combining and merging PDFs?",
        answer: "None in practice. Different sites and programs use different words for the same action: joining the pages of several PDFs into one file.",
      },
      {
        question: "Does the combined PDF look the same as the originals?",
        answer: "Yes. Pages are copied from your files rather than redrawn, so the text and layout carry over unchanged.",
      },
      {
        question: "Can I combine PDFs with different page sizes?",
        answer: "Yes. Each page keeps its own size, so a Letter page and an A4 page can sit in the same document.",
      },
    ],
    siblings: ["merge-pdf-without-installing-software", "merge-pdf-without-uploading", "merge-pdf-for-job-application", "merge-pdf-and-add-page-numbers"],
    relatedTools: ["split-pdf", "extract-pdf-pages", "compress-pdf"],
    guides: [{ title: "How to merge PDF files in the right order", href: "/blog/how-to-merge-pdf-files-in-order" }],
  },
  {
    slug: "merge-pdf-on-iphone",
    toolSlug: "merge-pdf",
    title: "Merge PDF Files on iPhone or iPad | Foldryn",
    description:
      "Merge PDF files on an iPhone or iPad using your mobile browser. Pick files from your device, set the order with the arrows, and save the result.",
    h1: "How to Merge PDF Files on an iPhone or iPad",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "merge pdf on iphone",
    secondaryKeywords: ["combine pdf on iphone", "merge pdf on ipad", "how to merge pdfs on iphone", "join pdf files on iphone without app"],
    intro:
      "You can merge PDFs from Safari or another mobile browser on an iPhone or iPad without installing an app.",
    situation: [
      "The usual trigger is a form or portal that wants one PDF while the pieces are scattered: a scan in Files, an attachment saved from Mail, a document downloaded from a website. Instead of switching to a computer, you can open Foldryn in your phone's browser and combine them there.",
      "Selecting files opens the system file picker, where you can browse the places your device offers, such as On My iPhone or cloud storage you've connected. Re-ordering uses buttons rather than dragging, which suits a touchscreen: one tap on a row's arrow moves that file up.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) in your browser and tap the file area to choose your PDFs from the picker.",
      "Check the numbered list. Tap the arrow on a file to move it up, or the X to remove it.",
      "Tap **Merge PDFs**, then tap Download. Your browser decides where the file is saved, so look in its downloads list or the Files app if you can't spot it.",
    ],
    example: {
      title: "Example: a signed form and its attachment",
      body: "You saved a signed form from an email and have a separate statement in Files. Add the form first and the statement second, merge, and upload the single file to the portal from the same phone.",
    },
    useCases: [
      "**Away from a computer:** finish an application from your phone on the day it's due.",
      "**Shared devices:** nothing to install on a family iPad or a work phone.",
      "**Quick fixes:** swap two files' order and merge again without starting over on a desktop.",
    ],
    limits: [
      "Very large files depend on the memory your device has free. Closing other tabs can help.",
      "Photos in your library are images, not PDFs. Turn them into a PDF first with [JPG to PDF](/jpg-to-pdf), then merge.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Do I need to install an app on my iPhone?",
        answer: "No. Merge PDF is a web page that runs in your mobile browser.",
      },
      {
        question: "Where does the merged file go on my iPhone?",
        answer: "It's saved by your browser like any other download. Check the browser's downloads list or the Files app.",
      },
      {
        question: "Can I drag files to reorder them on a touchscreen?",
        answer: "There's no drag-and-drop. Each row has an arrow that moves the file up, which works the same way with a tap.",
      },
    ],
    siblings: ["merge-pdf-on-android", "merge-pdf-on-chromebook", "merge-photos-and-pdfs-into-one-file", "merge-pdf-without-uploading"],
    relatedTools: ["jpg-to-pdf", "compress-pdf", "rotate-pdf"],
  },
  {
    slug: "merge-pdf-on-android",
    toolSlug: "merge-pdf",
    title: "Merge PDF Files on an Android Phone | Foldryn",
    description:
      "Merge PDF files on an Android phone or tablet from your browser. No app to install. Choose files, order them, merge, and save one PDF.",
    h1: "How to Merge PDF Files on an Android Phone",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "merge pdf on android",
    secondaryKeywords: ["combine pdf files on android", "join pdf on android phone", "merge pdfs android without app", "combine pdfs on samsung phone"],
    intro:
      "Android phones and tablets can merge PDFs in the browser, so you don't have to hunt for an app or move files to a computer.",
    situation: [
      "PDFs tend to pile up in odd places on Android: Downloads from the browser, attachments saved from Gmail or another mail app, scans from a document-scanner app. When a form wants all of them as one file, the quickest route is often the browser you already have open.",
      "Tapping the file area opens Android's document picker, which can reach Downloads and any storage app you've enabled. The list that follows shows the files in the order they'll be merged, with an arrow on each row to move it up.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) in Chrome or your usual browser and tap the file area.",
      "Select two or more PDFs in the picker. They appear as a numbered list.",
      "Move files up with the arrow, remove any with the X, then tap **Merge PDFs** and Download.",
    ],
    example: {
      title: "Example: scanner-app output",
      body: "A scanner app saved a three-page letter and a two-page receipt as separate PDFs in Downloads. Select both, put the letter first, merge, and attach the single file to your email.",
    },
    useCases: [
      "**Government and school forms** that accept one upload only.",
      "**Tablets:** work with a longer list of files on a bigger screen without installing anything.",
      "**Work phones** where you can't add apps.",
    ],
    limits: [
      "Large files use your device's memory, so a very big merge may fail on an older phone.",
      "If a file won't merge, it may be password-protected or damaged. The tool shows an error rather than producing a broken file.",
      "Images such as phone photos need converting with [JPG to PDF](/jpg-to-pdf) before they can be merged.",
    ],
    faq: [
      {
        question: "Is there an Android app for this?",
        answer: "There's no app. Merge PDF runs as a web page in your browser.",
      },
      {
        question: "Why can't I find my PDF in the picker?",
        answer: "The picker only shows storage locations that are available on your phone. Move the file to Downloads or a folder the picker can open, then try again.",
      },
      {
        question: "Does it work on a tablet?",
        answer: "Yes. The page adapts to the screen, and the controls are the same as on a phone.",
      },
    ],
    siblings: ["merge-pdf-on-iphone", "merge-pdf-on-chromebook", "merge-scanned-pages-into-one-pdf", "merge-pdf-without-installing-software"],
    relatedTools: ["jpg-to-pdf", "compress-pdf", "split-pdf"],
  },
  {
    slug: "merge-pdf-on-chromebook",
    toolSlug: "merge-pdf",
    title: "Merge PDF Files on a Chromebook | Foldryn",
    description:
      "Merge PDF files on a Chromebook from the Chrome browser. Nothing to install: pick files from Downloads or Drive, order them, merge and save.",
    h1: "How to Merge PDF Files on a Chromebook",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "merge pdf on chromebook",
    secondaryKeywords: ["combine pdf files on chromebook", "chromebook merge pdfs", "join pdfs chromebook without extension"],
    intro:
      "A Chromebook is built around the browser, which makes it a natural place to merge PDFs without adding software.",
    situation: [
      "School Chromebooks are often locked down: no installs, and sometimes no extensions. A tool that is just a web page avoids both problems. If the school or workplace allows you to open the site, you can merge your PDFs the same way as on any other computer.",
      "The file picker is the standard ChromeOS one, so you can browse Downloads, files on the Chromebook, and Google Drive if it's available to you. After merging, the new PDF is saved to wherever your browser downloads files, usually Downloads.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) in Chrome and select your PDFs, or drag them in from the Files app.",
      "Order them with the arrows on each row, and remove any you don't need.",
      "Click **Merge PDFs**, then Download. The new file appears in your Downloads folder in Files.",
    ],
    example: {
      title: "Example: a school group project",
      body: "Four classmates each sent their section as a PDF. Save them into Downloads, add them in the order of the report, merge, and submit the single file through the class portal.",
    },
    useCases: [
      "**School work** where each member of a group has a separate file.",
      "**Locked-down devices** where installing programs isn't possible.",
      "**Drive files:** merge a PDF from Google Drive with one from Downloads.",
    ],
    limits: [
      "A school network or device policy may block some websites, in which case the page won't open.",
      "Chromebooks with little memory can struggle with very large merges.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Do I need a Chrome extension?",
        answer: "No. It works as an ordinary web page, so there is no extension to add.",
      },
      {
        question: "Can I merge a PDF that's stored in Google Drive?",
        answer: "If the file picker shows your Drive, you can select the PDF from there. Otherwise download it to your Chromebook first.",
      },
      {
        question: "Will the merged file be saved to Drive automatically?",
        answer: "No. It's downloaded to your Chromebook. You can move it to Drive afterwards from the Files app.",
      },
    ],
    siblings: ["merge-pdf-on-windows", "merge-pdf-on-mac", "merge-pdf-for-assignment-submission", "merge-pdf-without-installing-software"],
    relatedTools: ["split-pdf", "compress-pdf", "delete-pdf-pages"],
  },
  {
    slug: "merge-pdf-on-mac",
    toolSlug: "merge-pdf",
    title: "Merge PDF Files on a Mac in Your Browser | Foldryn",
    description:
      "Merge PDF files on a Mac from Safari or Chrome. Work from a simple file list with up and remove buttons, then download one combined PDF.",
    h1: "How to Merge PDF Files on a Mac",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "merge pdf on mac",
    secondaryKeywords: ["combine pdf files mac", "merge pdfs on macbook", "join pdf mac without preview", "combine pdfs on mac online"],
    intro:
      "A Mac can merge PDFs in its browser as well as in Preview. The browser route works from a plain list of files, which some people find easier to check.",
    situation: [
      "Preview on macOS can combine PDFs by dragging page thumbnails from one document into another, and it works well for many people. A browser-based merge is a different way of doing the same thing: you add whole files, see them as a numbered list, and press one button. That's simpler when you have many files, or when the thumbnails view feels fiddly.",
      "It also helps on a Mac that isn't yours, such as a library or office machine, where you'd rather not open sensitive documents in an app that keeps recent-file lists. In Foldryn the files are read into browser memory for the merge and aren't uploaded.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) in Safari or Chrome and select your PDFs, or drag them from Finder onto the page.",
      "Check the order in the list and use the arrows to adjust it.",
      "Click **Merge PDFs** and then Download. The file is saved to your browser's download folder.",
    ],
    example: {
      title: "Example: twelve monthly statements",
      body: "Twelve PDF statements sit in a Finder folder named by month. Select all twelve, check the list runs January to December, and merge. You get a single year-end document without opening each one.",
    },
    useCases: [
      "**Many files at once:** a list is quicker to check than a wall of thumbnails.",
      "**Shared or borrowed Macs** where you'd rather not install or configure anything.",
      "**Consistent steps** across a Mac at home and a Windows PC at work.",
    ],
    limits: [
      "Files are merged whole. For page-level changes, such as dropping one page, use [Delete PDF Pages](/delete-pdf-pages) first.",
      "Bookmarks and form fields in the originals may not carry across.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Does this replace Preview?",
        answer: "It doesn't have to. Preview is a fine option on a Mac. This is an alternative that works from a file list in any browser.",
      },
      {
        question: "Does it work in Safari?",
        answer: "Yes, Safari and Chrome on macOS both work. Use an up-to-date version of either.",
      },
      {
        question: "Can I drag files in from Finder?",
        answer: "Yes. You can drop files onto the page or use the file picker.",
      },
    ],
    siblings: ["merge-pdf-on-windows", "merge-pdf-on-chromebook", "merge-pdf-without-uploading", "merge-pdf-for-tax-documents"],
    relatedTools: ["delete-pdf-pages", "extract-pdf-pages", "pdf-page-numbering"],
  },
  {
    slug: "merge-pdf-on-windows",
    toolSlug: "merge-pdf",
    title: "Merge PDF Files on Windows Without Software | Foldryn",
    description:
      "Merge PDF files on a Windows PC from Edge, Chrome or Firefox. No installer: add your files, order them, merge, and save the new PDF.",
    h1: "How to Merge PDF Files on Windows Without Installing Software",
    intent: "device",
    markets: ["Global"],
    primaryKeyword: "merge pdf on windows",
    secondaryKeywords: ["combine pdf files windows 11", "merge pdfs windows 10 free", "how to merge pdf files in windows", "join pdf files on pc"],
    intro:
      "Windows doesn't include a \"merge PDFs\" command in File Explorer, but you can do it in a browser tab with no installer.",
    situation: [
      "Many people on Windows end up searching for a program just to join two PDFs, then face installers, trials and sign-ups. If your PDFs are on the PC already, a web page that merges them locally is quicker, and it leaves nothing installed behind.",
      "Edge, Chrome and Firefox all work. You add files from File Explorer's picker or drag them onto the page, order them in the list, and download the result into your usual Downloads folder.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) in Edge, Chrome or Firefox, then drag your PDFs in from File Explorer or click to browse.",
      "Fix the order with the arrows. The numbered list is the order of the final document.",
      "Click **Merge PDFs** and then Download to save the result.",
    ],
    example: {
      title: "Example: contract plus signed pages",
      body: "A contract PDF and a separately scanned signature page need to go out together. Add the contract first and the signature page second, merge, and send one file.",
    },
    useCases: [
      "**Office PCs** where you can't install programs without an administrator.",
      "**One-off jobs** that don't justify downloading software.",
      "**Re-doing a merge** with a different order in a few clicks.",
    ],
    limits: [
      "Merging joins whole files. To use only some pages, extract them first with [Extract PDF Pages](/extract-pdf-pages).",
      "Very large merges use your PC's memory, so close heavy tabs if it feels slow.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Can Windows merge PDFs by itself?",
        answer: "File Explorer has no built-in command for merging PDFs, which is why people use a program or a web tool.",
      },
      {
        question: "Does it work on Windows 10 and Windows 11?",
        answer: "Yes. It depends on your browser, not the Windows version, so any current browser works.",
      },
      {
        question: "Where is the merged file saved?",
        answer: "In your browser's download location, which is normally the Downloads folder.",
      },
    ],
    siblings: ["merge-pdf-on-mac", "merge-pdf-without-installing-software", "merge-pdf-for-legal-exhibits", "merge-large-pdf-files"],
    relatedTools: ["split-pdf", "compress-pdf", "pdf-page-numbering"],
  },
  {
    slug: "merge-pdf-without-installing-software",
    toolSlug: "merge-pdf",
    title: "Merge PDFs Without Installing Anything | Foldryn",
    description:
      "Merge PDF files without downloading software or creating an account. Foldryn runs in your browser tab, so there is nothing to install or remove.",
    h1: "Merge PDFs Without Installing Anything",
    intent: "software-free",
    markets: ["Global"],
    primaryKeyword: "merge pdf without software",
    secondaryKeywords: ["merge pdf no download", "combine pdf without installing", "online pdf merger no install", "merge pdfs without adobe"],
    intro:
      "If you need one PDF out of several and don't want a program on your device, a browser tab is enough.",
    situation: [
      "Installing software for a single task has costs: time, disk space, a licence prompt, and something left behind afterwards. Browser-based tools skip all of that. You open the page, do the job, and close the tab.",
      "Here the merge runs in your browser using a PDF library, and your files are read from your device into the page's memory. There's no account step and no installer, and when you close or refresh the page, the files you added are cleared from it.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf) in any current browser.",
      "Add your PDFs and arrange them in the list.",
      "Press **Merge PDFs**, save the result with the Download button, then close the tab.",
    ],
    example: {
      title: "Example: a shared work computer",
      body: "You can't install software on your office PC, and there's a deadline for a bid document made of five PDFs. Merge them in the browser, download the single file, and clear nothing but a tab.",
    },
    useCases: [
      "**Managed devices** where installation is blocked.",
      "**Occasional use:** you merge a PDF a few times a year and don't want another program to maintain.",
      "**Travel:** use any browser on a borrowed machine.",
    ],
    limits: [
      "You need an internet connection to load the page. The merging itself happens on your device.",
      "Features of full PDF editors, such as editing text or filling forms, are outside what this tool does.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Is anything saved on my computer besides the file I download?",
        answer: "The tool doesn't install anything. Your browser may keep ordinary page data, as it does for any site.",
      },
      {
        question: "Do I have to make an account?",
        answer: "No. There's no account, email address or sign-in.",
      },
      {
        question: "Does it add a watermark?",
        answer: "No. The merged PDF contains your pages and nothing added by Foldryn.",
      },
    ],
    siblings: ["merge-pdf-on-windows", "merge-pdf-without-uploading", "combine-pdf-files-into-one", "merge-pdf-on-chromebook"],
    relatedTools: ["split-pdf", "compress-pdf", "rotate-pdf"],
  },
  {
    slug: "merge-pdf-without-uploading",
    toolSlug: "merge-pdf",
    title: "Merge PDFs Without Uploading Them | Foldryn",
    description:
      "Merge PDF files without sending them to a server. They are read into your browser, combined there, and not uploaded to Foldryn. See how to check it.",
    h1: "Merge PDFs Without Uploading Them to a Server",
    intent: "privacy",
    markets: ["Global"],
    primaryKeyword: "merge pdf without uploading",
    secondaryKeywords: ["merge pdf offline in browser", "private pdf merger", "combine pdfs locally", "merge confidential pdf online safely"],
    intro:
      "Foldryn merges PDFs inside your browser. Your files are not uploaded to Foldryn, which matters when the documents are personal.",
    situation: [
      "Many online PDF tools work by sending your file to a server, processing it there, and sending a result back. For a restaurant menu that's harmless. For a bank statement, a lease or a medical letter, plenty of people would rather their file stayed on their own device.",
      "Foldryn's merge works differently. Your PDFs are read from your device into your browser's memory and combined there with the pdf-lib library. The combined file is created on your device and downloaded from it. Closing or refreshing the page clears what you added.",
    ],
    steps: [
      "Open [Merge PDF](/merge-pdf), add your files and merge them as normal.",
      "To check for yourself, open your browser's developer tools, choose the Network tab, and watch it while you press Merge PDFs. You should not see your PDFs being sent anywhere.",
      "Download the result and close the tab.",
    ],
    example: {
      title: "Example: documents you wouldn't email casually",
      body: "A mortgage broker has asked for payslips and bank statements as one file. Merging them locally means the pieces are combined on your own device before you decide where to send the single result.",
    },
    useCases: [
      "**Financial and legal papers** you'd rather not hand to an unknown server.",
      "**Workplace documents** covered by a confidentiality policy.",
      "**Anyone curious** who wants to verify the claim with their browser's own tools.",
    ],
    limits: [
      "\"Not uploaded\" is about the merge. The page itself still loads from Foldryn's servers like any website.",
      "On a shared computer, a downloaded file stays in that computer's Downloads folder until you delete it.",
      "Browser extensions can read page content, so use a clean browser profile if that is a concern.",
      "See our [Privacy Policy](/privacy-policy) and [Security](/security) pages for the full picture.",
    ],
    faq: [
      {
        question: "How can I confirm the files aren't uploaded?",
        answer: "Use your browser's developer tools, open the Network tab, and merge a file. You'll see the page's own assets load, but not your PDFs being sent.",
      },
      {
        question: "Does it work offline?",
        answer: "The page has to load first, which needs a connection. We don't promise offline use after that.",
      },
      {
        question: "Is the merged file stored by Foldryn?",
        answer: "No. It's created on your device and downloaded from it.",
      },
    ],
    siblings: ["merge-pdf-without-installing-software", "merge-pdf-for-mortgage-documents", "merge-pdf-for-insurance-claim", "merge-password-protected-pdf"],
    relatedTools: ["watermark-pdf", "compress-pdf", "extract-pdf-pages"],
  },
];
