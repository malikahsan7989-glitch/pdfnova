const steps = [
  {
    number: "1",
    title: "Select your file",
    description: "Choose a PDF or image from your device, or drag and drop it in.",
  },
  {
    number: "2",
    title: "Process it in your browser",
    description: "Your file is processed locally on your device using the tool you picked.",
  },
  {
    number: "3",
    title: "Download your result",
    description: "Save the finished file straight to your device — that's it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
