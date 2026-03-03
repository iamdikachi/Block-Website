import React from "react";

export function ImplementationProcess() {
  return (
    <section className="container mx-auto px-6 mt-40 max-w-3xl">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Implementation Process
        </h2>
      </div>

      <div className="relative flex flex-col gap-0">
        {/* Vertical connecting line */}
        <div className="absolute left-[28px] top-12 bottom-12 w-px bg-white/5 hidden sm:block" />

        {[
          {
            num: "01",
            title: "DISCOVERY & AUDIT",
            body: 'We dive into your existing data to find where users drop off and identify the "Magic Moment" of your protocol.',
          },
          {
            num: "02",
            title: "INFRASTRUCTURE BUILD",
            body: "Our team builds the custom onboarding hub, smart contract integrations, and educational flow.",
          },
          {
            num: "03",
            title: "LAUNCH & ACTIVATION",
            body: "We deploy the system and monitor real-time activation rates, tweaking the engine for maximum conversion.",
          },
        ].map((step, i) => (
          <div
            key={step.num}
            className={`flex gap-6 items-start ${i < 2 ? "pb-12" : ""}`}
          >
            {/* Number badge */}
            <div className="relative z-10 shrink-0 w-14 h-14 rounded-xl bg-[#0d1a2f] border border-brand-blue/40 flex flex-col items-center justify-center gap-0.5 shadow-[0_0_16px_rgba(59,130,246,0.15)]">
              <span className="text-[9px] font-bold text-brand-blue/60 tracking-widest">
                {step.num}
              </span>
            </div>
            {/* Content */}
            <div className="pt-2 space-y-2">
              <h3 className="text-base font-bold tracking-widest uppercase text-white">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
