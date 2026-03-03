import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ActivationLifecycle } from "@/components/ActivationLifecycle";
import { CoreDeliverables } from "@/components/CoreDeliverables";
import { ReadyCTA } from "@/components/ReadyCTA";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { FitSection } from "@/components/FitSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue/30 overflow-x-hidden">
      <Navbar />

      <main className="relative pt-32 pb-24">
        {/* Background Gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] rounded-full -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <Hero />
        <ProblemSection />
        <ActivationLifecycle />
        <CoreDeliverables />
        <ReadyCTA />
        <ImplementationProcess />
        <FitSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
