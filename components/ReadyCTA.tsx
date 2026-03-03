import React from "react";

export function ReadyCTA() {
  return (
    <section className="container mx-auto px-6 mt-40 max-w-4xl text-center">
      <div
        className="relative rounded-3xl overflow-hidden border border-white/5 p-16 space-y-8"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(3,7,18,0.8) 60%)",
        }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to activate your users?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Book a free 15-minute audit and get a custom activation roadmap for
            your protocol.
          </p>
        </div>
        <button className="px-10 py-5 bg-brand-blue hover:bg-blue-600 rounded-xl font-bold text-base transition-all hover:shadow-[0_0_24px_rgba(59,130,246,0.45)] inline-flex items-center gap-2">
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
      </div>
    </section>
  );
}
