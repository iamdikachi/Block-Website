"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ActivationLifecycle } from "@/components/ActivationLifecycle";
import { CoreDeliverables } from "@/components/CoreDeliverables";
import { HubSection } from "@/components/HubSection";
import { ReadyCTA } from "@/components/ReadyCTA";
import { ImplementationProcess } from "@/components/ImplementationProcess";
import { FitSection } from "@/components/FitSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue/30 overflow-x-hidden relative">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] -z-10 pointer-events-none"
      />

      <Navbar />

      <main className="relative pt-32 pb-24">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] rounded-full -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <Hero />
        <ProblemSection />
        <ActivationLifecycle />
        <CoreDeliverables />
        <HubSection />
        <ReadyCTA />
        <ImplementationProcess />
        <FitSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
