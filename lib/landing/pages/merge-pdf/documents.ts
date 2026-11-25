import type { LandingPage } from "../../types";

/** Merge PDF: document-specific, student, professional and business intents. */
export const mergePdfDocumentPages: LandingPage[] = [
  {
    slug: "merge-pdf-for-job-application",
    toolSlug: "merge-pdf",
    title: "Merge Resume and Cover Letter Into One PDF | Foldryn",
    description:
      "Combine your resume, cover letter and references into one PDF for a job application. Set the order, merge in your browser, and upload a single file.",
    h1: "Merge Your Resume, Cover Letter and Documents Into One PDF",
    intent: "professional",
    markets: ["US", "CA"],
    primaryKeyword: "combine resume and cover letter into one pdf",
    secondaryKeywords: ["merge cv and cover letter pdf", "combine resume and references pdf", "job application one pdf upload", "attach resume and cover letter as one file"],
    intro:
      "Plenty of job sites give you one upload box. Put the cover letter, resume and anything else they ask for into a single PDF, in the order a recruiter reads them.",
    situation: [
      "Application systems differ. Some have separate boxes for a resume and a cover letter, others take one file called \"application documents\". When there is a single box, the order matters: most people put the cover letter first, then the resume, then supporting pages such as a reference list or a writing sample.",
      "In the UK, Australia and New Zealand the document is usually called a CV rather than a resume, and the steps are the same. Check the employer's instructions for page limits or file naming, because those rules vary and Foldryn can't know them.",
    ],
    steps: [
      "Name your files so the order is obvious, for example 01-cover-letter.pdf and 02-resume.pdf.",
      "Add them to [Merge PDF](/merge-pdf), check the numbered list, and press **Merge PDFs**.",
      "Download the combined PDF and give it a professional file name, such as Jordan-Lee-Application.pdf, before you upload it.",
    ],
    example: {
      title: "Example: three documents, one upload",
      body: "A one-page cover letter, a two-page resume and a one-page reference list become a four-page PDF. Pages 1 to 4 run in that order, with each original's layout unchanged.",
    },
    useCases: [
      "**Single-upload portals** that don't have separate fields.",
      "**Emailed applications** where one attachment is easier for the recruiter to open.",
      "**Tailored packs:** keep a master resume and swap in a different cover letter each time.",
    ],
    limits: [
      "If the employer asks for separate files, don't merge them. Follow their instructions.",
      "If the merged file is over the portal's size limit, see [reducing the size of a merged PDF](/merge-pdf/merge-pdf-and-reduce-file-size).",
      "Merging doesn't make a file readable by applicant tracking systems. A resume that is only a scanned image may not be parsed well.",
    ],
    faq: [
      {
        question: "Should the cover letter come first?",
        answer: "That's the common convention, but follow any instruction in the job posting. If none is given, cover letter first, then resume, is a safe default.",
      },
      {
        question: "Will my resume's formatting change?",
        answer: "No. Pages are copied from your files, so fonts and layout stay as they were.",
      },
      {
        question: "Can I merge a Word document?",
        answer: "Not directly. Save or export it as a PDF from Word first, then add that PDF.",
      },
    ],
    siblings: ["merge-pdf-for-college-application", "merge-pdf-for-portfolio", "merge-pdf-and-reduce-file-size", "combine-pdf-files-into-one"],
    relatedTools: ["compress-pdf", "delete-pdf-pages", "pdf-page-numbering"],
  },
  {
    slug: "merge-pdf-for-college-application",
    toolSlug: "merge-pdf",
    title: "Combine PDFs for a College Application | Foldryn",
    description:
      "Merge transcripts, essays and supporting documents into one PDF for a college or university application. Set the order and merge in your browser.",
    h1: "Combine Documents for a College or University Application",
    intent: "student",
    markets: ["US", "UK", "AU", "CA"],
    primaryKeyword: "combine pdfs for college application",
    secondaryKeywords: ["merge transcripts into one pdf", "university application documents one pdf", "scholarship application merge pdf", "combine essay and transcript pdf"],
    intro:
      "Applications often ask for several documents but allow one upload. Merge them so the admissions reader sees everything in a sensible order.",
    situation: [
      "Applicants usually collect documents from different places: a transcript from a school office, a personal statement saved from a word processor, a certificate scanned at home. They arrive as separate PDFs, and some systems accept only one file per section.",
      "What \"college\" and \"university\" applications ask for differs by country and by institution, so read the instructions for each. Foldryn can't tell you what to include, but it can put the pieces you do have into one file in the order you choose.",
    ],
    steps: [
      "Collect each document as a PDF and give the files numbered names so the order is clear.",
      "Add them to [Merge PDF](/merge-pdf). Check the list, then press **Merge PDFs**.",
      "Open the download and scroll through it to confirm every page is there before you upload.",
    ],
    example: {
      title: "Example: scholarship pack",
      body: "A scholarship form asks for one PDF containing a statement, two certificates and a transcript. Add the four files in that order, merge, and check the total page count matches the sum of the originals.",
    },
    useCases: [
      "**Scholarship and grant forms** that want everything in one file.",
      "**Applications with a size limit** where fewer, combined files are easier to manage.",
      "**Keeping a copy** of exactly what you submitted, as one document.",
    ],
    limits: [
      "Official transcripts sent directly by a school aren't something you can merge yourself. Use only documents you are allowed to upload.",
      "Some systems read each upload against a specific category, so a merged file might be wrong for them. Check before you combine.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Is it acceptable to merge my documents?",
        answer: "That depends on the application. Some require separate files for each document type, and others allow a combined file. The application instructions decide.",
      },
      {
        question: "What if my essay is a Word file?",
        answer: "Export it as a PDF from your word processor first, then add that PDF to the list.",
      },
      {
        question: "Can I keep the page numbers from each document?",
        answer: "Existing numbers stay as printed on each page. To add one continuous run of numbers, use [PDF Page Numbering](/pdf-page-numbering) after merging.",
      },
    ],
    siblings: ["merge-pdf-for-assignment-submission", "merge-pdf-for-job-application", "merge-pdf-for-visa-application", "merge-pdf-and-add-page-numbers"],
    relatedTools: ["pdf-page-numbering", "compress-pdf", "jpg-to-pdf"],
  },
  {
    slug: "merge-pdf-for-rental-application",
    toolSlug: "merge-pdf",
    title: "Merge Documents for a Rental Application PDF | Foldryn",
    description:
      "Put pay stubs, ID copies and references into one PDF for a rental or tenancy application. Merge in your browser, with nothing uploaded to Foldryn.",
    h1: "Merge Your Rental or Tenancy Application Documents Into One PDF",
    intent: "document-specific",
    markets: ["US", "CA", "UK", "AU", "NZ"],
    primaryKeyword: "combine documents for rental application pdf",
    secondaryKeywords: ["merge pay stubs into one pdf", "tenancy application documents pdf", "combine bank statements for rental", "rental application packet pdf"],
    intro:
      "Letting agents and landlords often want a full set of documents, quickly. One tidy PDF is easier for them to open and easier for you to keep track of.",
    situation: [
      "In the US and Canada this is a \"rental application\"; in the UK, Australia and New Zealand it's more often a \"tenancy application\". Either way, you may be asked for proof of income, identification, references and a previous landlord's details, and there can be a lot of competition for a property.",
      "Because these papers contain personal and financial details, where they are processed matters. Merging in your browser means the documents are combined on your own device and are not uploaded to Foldryn. What you send to the agent afterwards is up to you.",
    ],
    steps: [
      "Gather your documents as PDFs. Photos of paper documents can be turned into PDFs first with [JPG to PDF](/jpg-to-pdf).",
      "Add them to [Merge PDF](/merge-pdf) in the order the application lists them, then press **Merge PDFs**.",
      "Download the combined file, check each page is legible, and send it using the agent's preferred channel.",
    ],
    example: {
      title: "Example: a typical packet",
      body: "Three recent pay stubs, a photo ID scan, a reference letter and a bank statement become one PDF. Order them as the agent's checklist does, so a reader can tick items off as they scroll.",
    },
    useCases: [
      "**Fast-moving listings** where being first with a complete file helps.",
      "**Several applications:** reuse the same combined packet, adding or removing a document as each one requires.",
      "**Keeping your own record** of exactly what you sent.",
    ],
    limits: [
      "Foldryn can't redact or hide details. If a document needs sensitive numbers covered, do that before merging.",
      "Only send what the application actually requires. Sharing extra personal documents is your decision to make carefully.",
      "Password-protected statements need their protection removed with the program that created them, before merging.",
    ],
    faq: [
      {
        question: "Are my pay stubs uploaded when I merge them?",
        answer: "No. They're read into your browser and combined on your device, not uploaded to Foldryn.",
      },
      {
        question: "Can I add a note or watermark saying what the file is for?",
        answer: "Yes, a text watermark can be added to a finished PDF with [Watermark PDF](/watermark-pdf), which some people use to mark a copy for a specific application.",
      },
      {
        question: "What size should the file be?",
        answer: "Agents and portals set their own limits. If yours is too large, try [Compress PDF](/compress-pdf), noting that it doesn't recompress images.",
      },
    ],
    siblings: ["merge-pdf-for-mortgage-documents", "merge-pdf-for-insurance-claim", "merge-pdf-without-uploading", "merge-photos-and-pdfs-into-one-file"],
    relatedTools: ["jpg-to-pdf", "watermark-pdf", "compress-pdf"],
  },
  {
    slug: "merge-pdf-for-mortgage-documents",
    toolSlug: "merge-pdf",
    title: "Combine Mortgage Documents Into One PDF | Foldryn",
    description:
      "Combine payslips, bank statements and ID into one PDF for a mortgage or loan application. Merge in your browser without uploading to Foldryn.",
    h1: "Combine Mortgage and Loan Application Documents Into One PDF",
    intent: "document-specific",
    markets: ["US", "UK", "AU", "CA", "NZ"],
    primaryKeyword: "combine mortgage documents into one pdf",
    secondaryKeywords: ["merge bank statements into one pdf", "combine payslips pdf for mortgage", "loan application documents single pdf", "merge financial documents pdf"],
    intro:
      "A lender or broker may ask for many documents. Group them into one PDF, in the order they list them, to avoid missing pages in a long email thread.",
    situation: [
      "Mortgage and loan paperwork often involves recurring documents: several months of payslips or pay stubs, bank statements, an ID, and proof of address. Lenders and brokers frequently use secure portals that accept a limited number of files, and one combined file can fit better than a dozen separate ones.",
      "What you need to provide, and whether a portal allows combined files, is for your lender to say. If they ask for each document type separately, follow that. When one file is welcome, merging gets you there in a few clicks.",
    ],
    steps: [
      "Download each statement or payslip as a PDF, and name them so they sort correctly, for example 2026-09-payslip.pdf.",
      "Add them to [Merge PDF](/merge-pdf), put them in the order the lender lists, and press **Merge PDFs**.",
      "Download the result, scroll through it, and upload it to the lender's portal or send it as they instruct.",
    ],
    example: {
      title: "Example: three months of statements",
      body: "Three monthly statements of several pages each are merged oldest to newest. The reader scrolls through one document in date order rather than opening three files.",
    },
    useCases: [
      "**Portals with a file-count limit** or a small number of upload slots.",
      "**Broker handoffs:** send one clearly ordered pack.",
      "**Your own records** of what was submitted and when.",
    ],
    limits: [
      "Statements downloaded from a bank may be protected. If a file won't merge, see [merging password-protected PDFs](/merge-pdf/merge-password-protected-pdf).",
      "This is document handling, not financial or legal advice. Ask your lender or adviser what they need.",
      "Large scanned statements can be big. See [merging large PDFs](/merge-pdf/merge-large-pdf-files).",
    ],
    faq: [
      {
        question: "Are my bank statements sent anywhere when I merge them?",
        answer: "No. They are combined in your browser and not uploaded to Foldryn.",
      },
      {
        question: "Should I merge all documents into one file?",
        answer: "Only if your lender is happy with that. Some want each document type uploaded separately.",
      },
      {
        question: "Will the merged PDF keep the bank's text exactly?",
        answer: "Yes. Pages are copied across, not re-typed or converted, so the content stays as the bank produced it.",
      },
    ],
    siblings: ["merge-pdf-for-rental-application", "merge-pdf-for-tax-documents", "merge-password-protected-pdf", "merge-pdf-without-uploading"],
    relatedTools: ["compress-pdf", "pdf-page-numbering", "extract-pdf-pages"],
  },
  {
    slug: "merge-pdf-for-tax-documents",
    toolSlug: "merge-pdf",
    title: "Combine Tax Documents Into One PDF | Foldryn",
    description:
      "Combine tax forms, receipts and statements into one PDF for your accountant or your own records. Merge in your browser and keep them in order.",
    h1: "Combine Your Tax Documents Into One PDF",
    intent: "document-specific",
    markets: ["US", "UK", "AU", "CA", "NZ"],
    primaryKeyword: "combine tax documents into one pdf",
    secondaryKeywords: ["merge tax forms pdf", "tax return supporting documents one pdf", "combine w-2 and 1099 pdf", "organise tax records into one pdf"],
    intro:
      "Tax season piles up PDFs: forms, statements, receipts. One organised file is easier to hand to an accountant or to find again next year.",
    situation: [
      "The documents depend on where you live and what you earn: in the US, forms such as a W-2 or a 1099; elsewhere, summaries from an employer, a bank or a tax authority. They typically arrive from different senders as separate PDFs, in no useful order.",
      "Merging them into a single year folder file means your accountant, or you, can scroll through in a sensible sequence. It doesn't change what tax documents are valid or required. Those rules come from your tax authority, and an adviser can tell you what to keep.",
    ],
    steps: [
      "Download every form and statement as a PDF and name them by type and year.",
      "Add them to [Merge PDF](/merge-pdf), arrange them from most to least important for the return, and press **Merge PDFs**.",
      "Save the combined file with the tax year in its name, and add page numbers afterwards if the pack is long.",
    ],
    example: {
      title: "Example: an accountant's folder",
      body: "Income forms first, then bank interest statements, then donation receipts. A single PDF in that order lets your accountant check each section without opening twelve attachments.",
    },
    useCases: [
      "**Handing documents to an accountant** or tax preparer in one email.",
      "**Annual archive:** one PDF per tax year.",
      "**Supporting documents** for an amended return or a query.",
    ],
    limits: [
      "Check your tax authority's own rules on how to submit and keep records. Foldryn doesn't file anything for you.",
      "Receipts photographed on a phone need converting with [JPG to PDF](/jpg-to-pdf) first.",
      "Password-protected statements must have their protection removed before they can be merged.",
    ],
    faq: [
      {
        question: "Does this file my taxes?",
        answer: "No. It only combines PDF files you already have. Filing is done through your tax authority or preparer.",
      },
      {
        question: "Can I put the pages in my own order?",
        answer: "Files stay whole and in the order of the list. To reorder individual pages, split or extract them first.",
      },
      {
        question: "Will the combined file be easy to search?",
        answer: "Text that was searchable in the originals stays searchable. Scanned images stay images.",
      },
    ],
    siblings: ["merge-pdf-for-mortgage-documents", "merge-receipts-into-one-pdf", "merge-invoices-into-one-pdf", "merge-pdf-and-add-page-numbers"],
    relatedTools: ["jpg-to-pdf", "pdf-page-numbering", "compress-pdf"],
  },
  {
    slug: "merge-invoices-into-one-pdf",
    toolSlug: "merge-pdf",
    title: "Merge Invoices Into One PDF | Foldryn",
    description:
      "Merge several invoice PDFs into one file for a client, accountant or monthly record. Put them in date order and download the combined document.",
    h1: "Merge Several Invoices Into One PDF",
    intent: "business",
    markets: ["Global"],
    primaryKeyword: "merge invoices into one pdf",
    secondaryKeywords: ["combine invoice pdfs", "monthly invoices one pdf", "send multiple invoices as one attachment", "bundle invoices for accountant"],
    intro:
      "Small businesses and freelancers often end up with a stack of invoice PDFs. Combine them for a month-end pack, a client who wants everything together, or your bookkeeper.",
    situation: [
      "Invoice software exports one PDF per invoice. When a client has several open invoices, or an accountant asks for the quarter's paperwork, sending them separately invites confusion about which ones are included.",
      "A merged file reads top to bottom. Sort the files by invoice number or date before you add them, and the merged document does the same. Each invoice remains an exact copy of the page, so totals and layout aren't altered.",
    ],
    steps: [
      "Export or download each invoice as a PDF. File names starting with the invoice number sort neatly.",
      "Add them to [Merge PDF](/merge-pdf), check the order, and press **Merge PDFs**.",
      "Save the result with a clear name, such as Invoices-2026-Q3.pdf, and send or archive it.",
    ],
    example: {
      title: "Example: quarter-end pack",
      body: "Twelve weekly invoices from July to September are merged in date order. The accountant opens one file and has every invoice for the quarter.",
    },
    useCases: [
      "**Client statements:** show everything outstanding in one file.",
      "**Bookkeeping handovers:** one pack per month or quarter.",
      "**Audit or insurance requests** that ask for a run of invoices.",
    ],
    limits: [
      "Merging doesn't add a combined total or summary page. If you need one, create it separately and add it as a file.",
      "Don't merge invoices from different clients into a single file that you send to one of them.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Can I merge invoices from different programs?",
        answer: "Yes. Any ordinary PDF can be merged, whichever software created it.",
      },
      {
        question: "Will the invoice numbers or totals change?",
        answer: "No. Pages are copied as they are.",
      },
      {
        question: "Is there a limit on how many invoices I can add?",
        answer: "There's no fixed count. Each file can be up to 50 MB, and very large merges depend on your device's memory.",
      },
    ],
    siblings: ["merge-receipts-into-one-pdf", "merge-pdf-for-tax-documents", "merge-pdf-for-meeting-packet", "merge-pdf-and-add-page-numbers"],
    relatedTools: ["pdf-page-numbering", "compress-pdf", "split-pdf"],
  },
  {
    slug: "merge-pdf-for-assignment-submission",
    toolSlug: "merge-pdf",
    title: "Merge PDFs for an Assignment Submission | Foldryn",
    description:
      "Combine your cover sheet, essay, references and appendices into one PDF for an assignment upload. Merge in your browser, with nothing to install.",
    h1: "Merge Your Cover Sheet, Essay and Appendices Into One PDF",
    intent: "student",
    markets: ["Global"],
    primaryKeyword: "merge pdf for assignment submission",
    secondaryKeywords: ["combine cover page and essay pdf", "submit multiple pdfs as one assignment", "merge coursework pdf files", "combine report and appendix pdf"],
    intro:
      "Many course systems take a single file. If your coursework is in several parts, merge them in the order your marker expects.",
    situation: [
      "Coursework often comes in pieces: a cover sheet from the course, your written work, a bibliography, scanned diagrams or hand-drawn working. Learning platforms vary on how many files they accept, and some marking schemes depend on a specific order.",
      "Merging before you submit also helps avoid a common problem, which is uploading parts in the wrong order or forgetting one. Check the assignment brief for what is allowed, because Foldryn can't know your institution's rules.",
    ],
    steps: [
      "Export your written work as a PDF, and make sure every part you need is also a PDF.",
      "Add the parts to [Merge PDF](/merge-pdf) in the order the brief requires, then press **Merge PDFs**.",
      "Open the download and check it from the first to the last page before uploading.",
    ],
    example: {
      title: "Example: lab report with hand-drawn graph",
      body: "The report is typed and exported as a PDF, while a graph drawn on paper has been scanned as another PDF. Put the report first, the scanned graph second, and merge them into one submission.",
    },
    useCases: [
      "**Single-file submission systems.**",
      "**Group work:** combine each member's section into the final document.",
      "**Late checks:** one file is easier to verify than several.",
    ],
    limits: [
      "Page numbers added by each author stay as printed. Add continuous numbering afterwards with [PDF Page Numbering](/pdf-page-numbering).",
      "Follow your institution's rules on file type and naming.",
      "Merged text isn't re-checked. If a part was missing before, it is still missing after.",
    ],
    faq: [
      {
        question: "Can I merge a Word document with a PDF?",
        answer: "Export the Word document as a PDF first. Then both are PDFs and can be merged.",
      },
      {
        question: "Why does my merged file show a different page count?",
        answer: "It's the total of every page of every file you added. Check that you haven't added a file twice.",
      },
      {
        question: "Does merging affect plagiarism-check results?",
        answer: "Merging only joins the pages. Whether a submission system reads your text depends on the PDF, not on Foldryn.",
      },
    ],
    siblings: ["merge-pdf-for-college-application", "merge-pdf-chapters-into-one-document", "merge-pdf-on-chromebook", "merge-pdf-and-add-page-numbers"],
    relatedTools: ["pdf-page-numbering", "jpg-to-pdf", "compress-pdf"],
  },
  {
    slug: "merge-pdf-for-legal-exhibits",
    toolSlug: "merge-pdf",
    title: "Merge PDF Exhibits Into One Bundle | Foldryn",
    description:
      "Combine exhibits, agreements and correspondence into one ordered PDF bundle. Merge in your browser and add page numbers afterwards.",
    h1: "Merge PDF Exhibits and Supporting Documents Into One Bundle",
    intent: "professional",
    markets: ["Global"],
    primaryKeyword: "merge pdf exhibits into one bundle",
    secondaryKeywords: ["combine exhibits into one pdf", "compile document bundle pdf", "assemble contract and schedules pdf", "combine correspondence into one pdf"],
    intro:
      "A bundle of agreements, schedules and correspondence is easier to review as one ordered PDF. Merge the pieces, then number them.",
    situation: [
      "Anyone preparing a set of documents for review, whether an informal dispute, a contract file or a submission to a regulator, ends up with a mixed pile: signed agreements, scanned letters, emails saved as PDFs. Reviewers refer to pages by number, so the order and numbering matter.",
      "Foldryn merges whole files in the order you set, and can then add continuous page numbers with a separate tool. It is a document-handling aid only. Court and tribunal formatting rules, filing systems and what counts as a valid copy are different in every jurisdiction, so check the rules that apply to you or ask a qualified professional.",
    ],
    steps: [
      "Name each file with a number prefix, such as 01-agreement.pdf, 02-schedule-A.pdf, so the sequence is clear.",
      "Add them to [Merge PDF](/merge-pdf), check the order, and press **Merge PDFs**.",
      "Open [PDF Page Numbering](/pdf-page-numbering) with the combined file and number the whole bundle in one pass.",
    ],
    example: {
      title: "Example: contract with schedules",
      body: "A 14-page agreement, a 3-page schedule and a 2-page signed amendment merge into a 19-page file. Numbering the merged file once gives one set of page references, from page 1 to 19.",
    },
    useCases: [
      "**Contract packs** with schedules and amendments.",
      "**Review bundles** shared with colleagues or advisers.",
      "**Correspondence files** where order and page references matter.",
    ],
    limits: [
      "Foldryn doesn't add an index, bookmarks or hyperlinks to a bundle.",
      "Signatures and annotations may not carry over in every case. Check the result before relying on it.",
      "This isn't legal advice, and the tool has no way of knowing a court's formatting rules.",
    ],
    faq: [
      {
        question: "Does merging change the content of signed documents?",
        answer: "Pages are copied rather than redrawn, but you should always review the merged file page by page before using it.",
      },
      {
        question: "Can I number the bundle?",
        answer: "Yes, afterwards. [PDF Page Numbering](/pdf-page-numbering) adds a number to every page of a finished PDF.",
      },
      {
        question: "Can I rearrange pages inside a file?",
        answer: "Not within this tool. Split or extract the pages you need, then merge the pieces in the order you want.",
      },
    ],
    siblings: ["merge-pdf-and-add-page-numbers", "merge-pdf-for-meeting-packet", "insert-pages-from-one-pdf-into-another", "merge-pdf-for-insurance-claim"],
    relatedTools: ["pdf-page-numbering", "extract-pdf-pages", "watermark-pdf"],
  },
  {
    slug: "merge-pdf-for-insurance-claim",
    toolSlug: "merge-pdf",
    title: "Combine Documents for an Insurance Claim PDF | Foldryn",
    description:
      "Put your claim form, receipts, photos and correspondence into one PDF for an insurance claim. Merge in your browser, with nothing uploaded to Foldryn.",
    h1: "Combine Your Insurance Claim Documents Into One PDF",
    intent: "document-specific",
    markets: ["Global"],
    primaryKeyword: "combine documents for insurance claim pdf",
    secondaryKeywords: ["merge claim form and receipts pdf", "insurance claim supporting documents one file", "combine repair quotes and photos pdf", "claim evidence single pdf"],
    intro:
      "Claims go smoother when everything arrives together. Merge the form, receipts, quotes and photos into one file, in a logical order.",
    situation: [
      "A claim can involve a completed form, proof of ownership, receipts, repair quotes, photographs and previous correspondence with the insurer. These come from different places and in different formats, and an insurer's portal may allow only a limited number of uploads.",
      "Photographs are images rather than PDFs, so turn them into a PDF with [JPG to PDF](/jpg-to-pdf) first. After that, every piece is a PDF and can be merged. Check your insurer's instructions on what to include and in what format.",
    ],
    steps: [
      "Convert any photos to a PDF with [JPG to PDF](/jpg-to-pdf), and save everything in one folder.",
      "Add the claim form first, then supporting items, to [Merge PDF](/merge-pdf), and press **Merge PDFs**.",
      "Check the download, then submit it through the insurer's portal or by email. Keep a copy.",
    ],
    example: {
      title: "Example: a damage claim",
      body: "A claim form (2 pages), three receipts (3 pages) and a photo PDF (4 pages) become one 9-page file with the form on top. The assessor sees the claim first and the evidence in order.",
    },
    useCases: [
      "**Home, travel and vehicle claims** with several documents.",
      "**Resubmissions** when an insurer asks for \"everything in one file\".",
      "**Your records** of exactly what you sent.",
    ],
    limits: [
      "Check the insurer's file-size and format rules. A merged file with many photos can be large.",
      "HEIC photos from some phones must be converted to JPG before [JPG to PDF](/jpg-to-pdf) accepts them.",
      "Foldryn doesn't submit anything for you.",
    ],
    faq: [
      {
        question: "Can I merge photos directly with PDFs?",
        answer: "Not in one step. Convert the photos to a PDF first, then merge that PDF with your others.",
      },
      {
        question: "My merged file is too big for the portal. What now?",
        answer: "Try [Compress PDF](/compress-pdf). It doesn't recompress images, so photo-heavy files may not shrink much. Re-saving photos at a lower resolution before converting helps more.",
      },
      {
        question: "Are my claim documents uploaded to Foldryn?",
        answer: "No. They are combined in your browser and not uploaded to Foldryn.",
      },
    ],
    siblings: ["merge-photos-and-pdfs-into-one-file", "merge-pdf-for-rental-application", "merge-large-pdf-files", "merge-pdf-without-uploading"],
    relatedTools: ["jpg-to-pdf", "compress-pdf", "rotate-pdf"],
  },
  {
    slug: "merge-pdf-for-visa-application",
    toolSlug: "merge-pdf",
    title: "Merge Documents for a Visa Application PDF | Foldryn",
    description:
      "Combine forms and supporting documents into one PDF for a visa or immigration application, if the portal allows it. Merge in your browser.",
    h1: "Merge Documents for a Visa or Immigration Application",
    intent: "document-specific",
    markets: ["UK", "AU", "CA", "NZ", "US"],
    primaryKeyword: "merge documents for visa application pdf",
    secondaryKeywords: ["combine passport and visa documents pdf", "immigration application one pdf", "supporting documents single pdf visa", "merge bank statements for visa"],
    intro:
      "Some visa systems ask for each document as its own upload, and others accept a combined file. Merge only when the instructions allow it.",
    situation: [
      "Visa and immigration portals differ widely. Some have fixed upload slots such as \"passport\" and \"financial evidence\", with limits on file type and size. Others let you attach a single bundle. Because a wrongly formatted upload can cause delays, read the official guidance first, and don't rely on a third-party tool's idea of what is acceptable.",
      "When merging is allowed, the main job is order and legibility: pages should be right way up, text readable, and related pages together. If a scan is sideways, fix it with [Rotate PDF](/rotate-pdf) before merging.",
    ],
    steps: [
      "Read the application's upload instructions for file type, size and whether files can be combined.",
      "Scan or save each document as a PDF, rotating any sideways pages first, then add them to [Merge PDF](/merge-pdf).",
      "Merge, check every page is legible, and upload the file to the slot the portal specifies.",
    ],
    example: {
      title: "Example: financial evidence slot",
      body: "A portal has one slot for financial evidence. Six months of statements, each a separate PDF, are merged from oldest to newest into one file and uploaded to that slot, while the passport scan is uploaded separately as instructed.",
    },
    useCases: [
      "**Single-slot uploads** that expect one combined file.",
      "**Statements and payslips** over several months.",
      "**Your own copy** of what was submitted.",
    ],
    limits: [
      "Foldryn can't tell you what a visa authority requires. Always follow the official instructions, which can change.",
      "Do not merge documents into one file if the portal requires them separately.",
      "Check size limits. [Compress PDF](/compress-pdf) may help, but doesn't recompress images.",
    ],
    faq: [
      {
        question: "Is a merged PDF accepted for visa applications?",
        answer: "That depends entirely on the authority and the specific application. Read the official guidance for yours.",
      },
      {
        question: "What if a scanned page is upside down?",
        answer: "Rotate it first with [Rotate PDF](/rotate-pdf), then merge.",
      },
      {
        question: "Are my passport and bank documents uploaded to Foldryn?",
        answer: "No. They are merged in your browser and not uploaded to Foldryn.",
      },
    ],
    siblings: ["merge-pdf-for-college-application", "merge-pdf-for-mortgage-documents", "merge-scanned-pages-into-one-pdf", "merge-large-pdf-files"],
    relatedTools: ["rotate-pdf", "compress-pdf", "jpg-to-pdf"],
  },
  {
    slug: "merge-receipts-into-one-pdf",
    toolSlug: "merge-pdf",
    title: "Merge Receipts Into One PDF for Expenses | Foldryn",
    description:
      "Combine receipt PDFs into one expense report file. Merge in your browser, in date order. Photographed receipts can be turned into PDFs first.",
    h1: "Merge Receipts Into One PDF for an Expense Report",
    intent: "business",
    markets: ["Global"],
    primaryKeyword: "merge receipts into one pdf",
    secondaryKeywords: ["combine receipts for expense report", "expense claim receipts one pdf", "reimbursement receipts single file", "merge travel receipts pdf"],
    intro:
      "An expense claim is easier to approve when the receipts arrive as one file in date order, instead of ten attachments with unclear names.",
    situation: [
      "After a business trip you might have emailed receipts as PDFs, a hotel invoice downloaded from a website, and a few photographed paper slips. A finance team usually wants all of it with the claim form, and many systems accept a single attachment.",
      "Photographed receipts are JPG or PNG images, so convert them with [JPG to PDF](/jpg-to-pdf), which makes one page per image. Once all your receipts are PDFs, merge them in date order, after the expense form if it comes as a PDF.",
    ],
    steps: [
      "Turn paper-receipt photos into a PDF using [JPG to PDF](/jpg-to-pdf), with one image per page and in date order.",
      "Add the expense form, any emailed PDF receipts and your new receipt PDF to [Merge PDF](/merge-pdf).",
      "Press **Merge PDFs**, download, and attach the single file to your expense claim.",
    ],
    example: {
      title: "Example: a three-day trip",
      body: "A claim form, two hotel invoices, a train e-ticket and eight photographed receipts become a PDF of about a dozen pages, with the form first and the receipts in date order.",
    },
    useCases: [
      "**Monthly expense claims.**",
      "**Client billing** where receipts must accompany an invoice.",
      "**Personal budgeting records** kept by month.",
    ],
    limits: [
      "Receipt photos need to be readable. Take them flat and in even light.",
      "Merging doesn't read amounts or total anything up.",
      "For a lot of image receipts the file can get large, and [Compress PDF](/compress-pdf) won't recompress images.",
    ],
    faq: [
      {
        question: "Can I merge receipt photos directly?",
        answer: "No. Photos are images, so convert them to a PDF with JPG to PDF first, then merge.",
      },
      {
        question: "How do I keep receipts in date order?",
        answer: "Name the files with the date first, for example 2026-11-03-hotel.pdf, so they sort as you add them. You can also reorder with the arrows.",
      },
      {
        question: "Is there a guide for scanned receipts?",
        answer: "Yes. We have a longer walk-through linked below.",
      },
    ],
    siblings: ["merge-invoices-into-one-pdf", "merge-photos-and-pdfs-into-one-file", "merge-pdf-for-tax-documents", "merge-scanned-pages-into-one-pdf"],
    relatedTools: ["jpg-to-pdf", "compress-pdf", "rotate-pdf"],
    guides: [{ title: "How to combine scanned receipts and documents into one PDF", href: "/blog/combine-scanned-receipts-into-one-pdf" }],
  },
  {
    slug: "merge-pdf-for-meeting-packet",
    toolSlug: "merge-pdf",
    title: "Assemble a Meeting Packet as One PDF | Foldryn",
    description:
      "Combine an agenda, minutes, reports and attachments into one meeting packet PDF. Order the files, merge in your browser, then number the pages.",
    h1: "Assemble a Board or Meeting Packet as One PDF",
    intent: "business",
    markets: ["Global"],
    primaryKeyword: "assemble meeting packet pdf",
    secondaryKeywords: ["combine agenda and reports into one pdf", "board pack pdf merge", "council meeting documents single pdf", "committee papers one pdf"],
    intro:
      "Agenda first, then minutes, reports and attachments. One packet means everyone is on the same page, literally, once you number it.",
    situation: [
      "Board packs, committee papers and club meeting documents tend to be written by different people and arrive as separate files. A single packet in a fixed order is easier to circulate and to refer to: \"turn to page 12\" only works if everyone has the same file.",
      "Assemble the packet in the order of the agenda. Merge whole files, then add continuous page numbers so references are unambiguous. If one report is long and only part of it is relevant, extract the relevant pages first.",
    ],
    steps: [
      "Collect each item as a PDF and number the file names to match the agenda.",
      "Add them to [Merge PDF](/merge-pdf), check the sequence, and press **Merge PDFs**.",
      "Add page numbers with [PDF Page Numbering](/pdf-page-numbering) and send the finished packet.",
    ],
    example: {
      title: "Example: a monthly committee packet",
      body: "An agenda (1 page), last month's minutes (3 pages), a financial report (8 pages) and two proposals (5 and 2 pages) become a 19-page packet. After numbering, anyone can cite a page.",
    },
    useCases: [
      "**Boards and committees** with a regular packet.",
      "**Clubs and associations** run by volunteers.",
      "**Project reviews** that bundle several reports.",
    ],
    limits: [
      "There's no automatic table of contents. Put a contents page in the agenda if people need one.",
      "Late changes mean merging again. Keep your source files in a folder so you can rebuild quickly.",
      "Password-protected PDFs can't be merged.",
    ],
    faq: [
      {
        question: "Can I rebuild the packet quickly when a document changes?",
        answer: "Yes. Replace the changed file, add all the files again in order, and merge. There's nothing to set up.",
      },
      {
        question: "Can I have page numbers start from a different number?",
        answer: "Yes. [PDF Page Numbering](/pdf-page-numbering) lets you choose the number the first page starts from.",
      },
      {
        question: "Is the packet stored anywhere?",
        answer: "No. It's created in your browser and downloaded to your device.",
      },
    ],
    siblings: ["merge-pdf-for-legal-exhibits", "merge-invoices-into-one-pdf", "merge-pdf-and-add-page-numbers", "merge-pdf-chapters-into-one-document"],
    relatedTools: ["pdf-page-numbering", "extract-pdf-pages", "compress-pdf"],
  },
  {
    slug: "merge-pdf-for-portfolio",
    toolSlug: "merge-pdf",
    title: "Merge Work Samples Into One Portfolio PDF | Foldryn",
    description:
      "Combine work samples, project pages and a cover page into one portfolio PDF. Set the order, merge in your browser, and download a single file.",
    h1: "Merge Work Samples Into One Portfolio PDF",
    intent: "professional",
    markets: ["Global"],
    primaryKeyword: "combine work samples into portfolio pdf",
    secondaryKeywords: ["merge portfolio pdf files", "designer portfolio one pdf", "writing samples single pdf", "combine project pdfs into portfolio"],
    intro:
      "A portfolio PDF is a first impression. Put a cover page, the projects that fit the role and a closing contact page into one smooth document.",
    situation: [
      "Creatives and students often keep each project as its own PDF: a case study, a set of drawings, a writing sample. For a job or course application you need one file that reads from start to finish. Merging lets you pick which projects go in, and in what order, per application.",
      "Because each project stays a separate file, tailoring is quick. For a design role, put design projects first. For a writing role, start with writing. Rebuilding takes a minute, and none of your originals are changed.",
    ],
    steps: [
      "Export each project as its own PDF, and prepare a cover page and a contact page.",
      "Add them to [Merge PDF](/merge-pdf) with the cover first and contact page last, ordering the projects in between.",
      "Press **Merge PDFs**, download, and check that images and fonts look as intended.",
    ],
    example: {
      title: "Example: two portfolios from one set of projects",
      body: "With six project PDFs, you can build a four-project portfolio for an agency and a different four-project one for a university course, from the same files, in two merges.",
    },
    useCases: [
      "**Job and course applications** that need a tailored sample.",
      "**Freelance pitches** with a short, relevant set of projects.",
      "**Archive:** a complete portfolio kept as one file.",
    ],
    limits: [
      "Image-heavy portfolios can be large. See [merging large PDFs](/merge-pdf/merge-large-pdf-files) if you hit limits.",
      "Merging doesn't add navigation or links between sections.",
      "Each file can be up to 50 MB.",
    ],
    faq: [
      {
        question: "Will my images look the same after merging?",
        answer: "Yes. Pages are copied from your files, and images aren't recompressed.",
      },
      {
        question: "Can I make the file smaller?",
        answer: "[Compress PDF](/compress-pdf) can help with some files, but it doesn't recompress images. Exporting your projects at a lower image resolution works better.",
      },
      {
        question: "How many projects should I include?",
        answer: "Follow the application's guidance. When none is given, a short, relevant selection usually reads better than everything you've made.",
      },
    ],
    siblings: ["merge-pdf-for-job-application", "merge-large-pdf-files", "merge-pdf-chapters-into-one-document", "combine-pdf-files-into-one"],
    relatedTools: ["compress-pdf", "pdf-to-jpg", "delete-pdf-pages"],
  },
  {
    slug: "merge-pdf-chapters-into-one-document",
    toolSlug: "merge-pdf",
    title: "Merge PDF Chapters Into One Document | Foldryn",
    description:
      "Join separate PDF chapters or sections into one document. Order the files, merge in your browser, and add page numbers to the finished file.",
    h1: "Merge Separate Chapters or Sections Into One PDF",
    intent: "student",
    markets: ["Global"],
    primaryKeyword: "merge pdf chapters into one document",
    secondaryKeywords: ["combine book chapters pdf", "join thesis chapters into one pdf", "merge report sections pdf", "combine lecture notes pdf files"],
    intro:
      "Long documents are often written and saved in sections. When it's time to share the whole thing, join the chapters in order.",
    situation: [
      "A thesis, a manual or a long report is easier to work on in parts. Each chapter can be edited and exported on its own, then combined at the end. The same applies to lecture notes you collected week by week.",
      "Combine them in chapter order and number the merged file once, so page numbers run continuously. If a chapter was exported with its own numbering, you may prefer to number the whole document again from 1, or from a number of your choice.",
    ],
    steps: [
      "Export each chapter as a PDF and name them 01-introduction.pdf, 02-methods.pdf and so on.",
      "Add them to [Merge PDF](/merge-pdf), check the list, and press **Merge PDFs**.",
      "Download the merged file and use [PDF Page Numbering](/pdf-page-numbering) if it needs continuous numbers.",
    ],
    example: {
      title: "Example: a six-chapter thesis draft",
      body: "Six chapter PDFs, a bibliography and an appendix make eight files. Merge in that order and the supervisor receives one document to read and comment on.",
    },
    useCases: [
      "**Theses and dissertations** assembled from chapters.",
      "**Manuals** written by several authors.",
      "**Study notes** joined into one revision file.",
    ],
    limits: [
      "Existing page numbers printed on each chapter stay as they are, so you may end up with duplicates unless you re-export without them.",
      "No table of contents is created automatically.",
      "Bookmarks in the original chapters may not carry over.",
    ],
    faq: [
      {
        question: "Can I add page numbers after merging?",
        answer: "Yes, with [PDF Page Numbering](/pdf-page-numbering), using the position and starting number you choose.",
      },
      {
        question: "What if I need to replace one chapter later?",
        answer: "Swap the file and merge again. The other chapters don't need to change.",
      },
      {
        question: "Does the merged document keep links?",
        answer: "Links and bookmarks in the originals may not carry across. Check the result if you rely on them.",
      },
    ],
    siblings: ["merge-pdf-for-assignment-submission", "merge-pdf-for-meeting-packet", "merge-pdf-and-add-page-numbers", "merge-pdf-for-portfolio"],
    relatedTools: ["pdf-page-numbering", "split-pdf", "compress-pdf"],
  },
];
