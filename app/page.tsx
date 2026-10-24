import Hero from "./components/home/Hero";
import ToolGrid from "./components/home/ToolGrid";
import TrustSection from "./components/home/TrustSection";
import HowItWorks from "./components/home/HowItWorks";
import HomeFaq from "./components/home/HomeFaq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <ToolGrid />
      <TrustSection />
      <HowItWorks />
      <HomeFaq />
    </main>
  );
}
