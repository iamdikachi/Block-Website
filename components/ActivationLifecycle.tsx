import React from "react";

export function ActivationLifecycle() {
  return (
    <section id="process" className="container mx-auto px-6 mt-40 max-w-5xl">
      <div className="text-center mb-16 space-y-3">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500">
          The Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          The Activation Lifecycle
        </h2>
        <div className="mx-auto w-12 h-0.5 bg-brand-blue rounded-full mt-2" />
      </div>

      {/* Stepper */}
      <div className="relative">
        {/* Connector Line */}
        <div className="absolute top-[22px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-white/10 hidden sm:block" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-4 text-center relative z-10">
          {[
            {
              num: "01",
              label: "New",
              sub: "INITIAL CONNECT",
              active: false,
            },
            {
              num: "02",
              label: "Activated",
              sub: "CORE ACTION",
              active: true,
            },
            {
              num: "03",
              label: "Contributor",
              sub: "REPEATED VALUE",
              active: false,
            },
            {
              num: "04",
              label: "Core Contributor",
              sub: "GOVERNANCE & OPS",
              active: false,
            },
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center gap-3">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                  step.active
                    ? "bg-brand-blue border-brand-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "bg-white/5 border-white/10 text-zinc-400"
                }`}
              >
                {step.num}
              </div>
              <div>
                <p
                  className={`font-bold text-sm ${step.active ? "text-white" : "text-zinc-300"}`}
                >
                  {step.label}
                </p>
                <p
                  className={`text-xs tracking-widest mt-0.5 ${step.active ? "text-brand-blue" : "text-zinc-600"}`}
                >
                  {step.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
