import { Zap, ShieldCheck, Smartphone } from "lucide-react";

const points = [
  {
    icon: Zap,
    title: "Fast",
    description: "Simple tools designed to make everyday PDF tasks quick and easy.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-focused",
    description:
      "Most tools process your files locally in your browser instead of uploading them to a server.",
  },
  {
    icon: Smartphone,
    title: "Works everywhere",
    description: "Use Foldryn from your phone, tablet, or desktop — no app to install.",
  },
];

export default function TrustSection() {
  return (
    <section id="about" className="border-y border-slate-100 bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-slate-900">Why use Foldryn?</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {points.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
