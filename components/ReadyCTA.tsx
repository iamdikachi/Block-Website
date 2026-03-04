"use client";

import React from "react";
import { motion } from "framer-motion";

export function ReadyCTA() {
  return (
    <section className="container mx-auto px-6 mt-24 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 p-10 md:p-20 space-y-8 md:space-y-12 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.2) 0%, rgba(3,7,18,0.95) 75%)",
        }}
      >
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-tight">
            Ready to activate your users?
          </h2>
          <p className="text-zinc-400 text-base md:text-xl max-w-xl mx-auto leading-relaxed font-medium">
            Book a free 15-minute audit and get a custom activation roadmap for
            your protocol.
          </p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 30px rgba(59,130,246,0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-brand-blue hover:bg-blue-600 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] inline-flex items-center gap-3 active:scale-95"
        >
          Book 15-Minute Activation Audit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
