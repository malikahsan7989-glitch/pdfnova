const faqs = [
  {
    question: "Is Foldryn free to use?",
    answer: "Yes. All five core tools — Merge, Split, Compress, PDF to JPG, and JPG to PDF — are free to use.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. None of the tools require a login or signup.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "For most tools, no — your file is processed entirely in your browser and never leaves your device. Each tool page states clearly whether it works this way.",
  },
  {
    question: "What file size limits apply?",
    answer:
      "PDF files are limited to 50 MB, and images to 20 MB, to keep processing reliable across devices.",
  },
];

export default function HomeFaq() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
