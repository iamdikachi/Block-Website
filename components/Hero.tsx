import React from "react";

export function Hero() {
  return (
    <section className="container mx-auto px-6 max-w-5xl text-center space-y-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
        </span>
        Infrastructure Grade Activation
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          User Activation{" "}
          <span className="text-brand-blue">Infrastructure</span> for Web3
          Projects
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
          High-credibility, operator-focused onboarding systems for DeFi, DAOs,
          and L2s. Stop guessing and start activating your users from day one.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 rounded-xl font-bold text-base transition-all hover:shadow-[0_0_24px_rgba(59,130,246,0.45)] flex items-center justify-center gap-2">
          Book 15-Minute Activation Audit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-base transition-all">
          View Demo Onboarding Hub
        </button>
      </div>
    </section>
  );
}
