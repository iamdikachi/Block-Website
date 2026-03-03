import React from "react";

export function FinalCTA() {
  return (
    <section
      id="book-call"
      className="container mx-auto px-6 mt-32 max-w-4xl text-center"
    >
      <div className="space-y-8">
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Build Activation Infrastructure That{" "}
            <span className="text-brand-blue">Compounds</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
            Stop leaking users. Our systems turn one-time wallet connects into
            long-term protocol participants.
          </p>
        </div>
        <button className="px-8 py-4 bg-brand-blue hover:bg-blue-600 rounded-xl font-bold text-sm transition-all hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]">
          Book 15-Minute Activation Audit
        </button>
      </div>
    </section>
  );
}
