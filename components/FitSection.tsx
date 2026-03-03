import React from "react";

export function FitSection() {
  return (
    <section className="mt-40 bg-brand-dark border-t border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Is For */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-emerald-400">
                The Bloc Is For:
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Series A+ Web3 protocols with active TVL",
                "DAOs looking to professionalize governance",
                "L2 Ecosystems focused on developer/user density",
                "Teams with clear product-market fit but low retention",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not A Fit */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-400"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-red-400">
                Not A Fit:
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Pre-product/MVP stage projects",
                "Memecoin or high-churn retail speculative apps",
                "Teams looking for marketing/shilling services",
                "Projects without a clear utility core",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
