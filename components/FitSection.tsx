"use client";

import { motion, Variants } from "framer-motion";

export function FitSection() {
  const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="mt-24 md:mt-40 bg-brand-dark border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
          {/* Is For */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={leftColumnVariants}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-emerald-400">
                The Bloc Is For:
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Series A+ Web3 protocols with active TVL",
                "DAOs looking to professionalize governance",
                "L2 Ecosystems focused on developer/user density",
                "Teams with clear product-market fit but low retention",
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex items-start gap-4 text-sm md:text-base text-zinc-400 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-blue shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not A Fit */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={rightColumnVariants}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-400"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-red-400">
                Not A Fit:
              </h3>
            </div>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Pre-product/MVP stage projects",
                "Memecoin or high-churn retail speculative apps",
                "Teams looking for marketing/shilling services",
                "Projects without a clear utility core",
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex items-start gap-4 text-sm md:text-base text-zinc-400 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/40 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
