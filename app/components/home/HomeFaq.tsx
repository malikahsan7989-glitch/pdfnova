import JsonLd from "../shared/JsonLd";
import { faqPageSchema } from "@/lib/structuredData";

const faqs = [
  {
    question: "Is Foldryn free to use?",
    answer:
      "Yes. Foldryn provides a growing collection of free, browser-based PDF tools — including tools for organizing, converting, optimizing, and editing PDFs — and every one of them is free to use.",
  },
  {
    question: "Do I need to create an account?",
    answer: "No. None of the tools require a login or signup.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No — every tool on Foldryn processes your file locally in your browser and never uploads it to a server. Each tool page also states this explicitly.",
  },
  {
    question: "What file size limits apply?",
    answer:
      "PDF files are limited to 50 MB, and images to 20 MB, to keep processing reliable across devices.",
  },
];

export default function HomeFaq() {
  const faqData = faqPageSchema(faqs);

  return (
    <section className="border-t border-slate-100 bg-slate-50 px-4 py-20 sm:px-6">
      {faqData && <JsonLd data={faqData} />}
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
