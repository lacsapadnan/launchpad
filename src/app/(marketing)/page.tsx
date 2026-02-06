import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { FeaturesGrid } from "@/components/marketing/features-grid";
import { DarkPillars } from "@/components/marketing/dark-pillars";
import { Steps } from "@/components/marketing/steps";
import { Comparison } from "@/components/marketing/comparison";
import { Audience } from "@/components/marketing/audience";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";
import { Footer } from "@/components/marketing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <DarkPillars />
        <Steps />
        <Comparison />
        <Audience />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
