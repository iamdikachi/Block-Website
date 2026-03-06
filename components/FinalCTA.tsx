"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function FinalCTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="book-call"
      className="container mx-auto px-6 mt-10 max-w-4xl text-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="space-y-10"
      >
        <div className="space-y-4">
          <h2 className="text-base md:text-5xl font-black tracking-tight leading-[1.1]">
            Build Activation Infrastructure That{" "}
            <span className="text-brand-blue">Compounds</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Stop leaking users. Our systems turn one-time wallet connects into
            long-term protocol participants.
          </p>
        </div>
        <motion.a
          href="https://calendly.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(59,130,246,0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-2 sm:w-auto md:px-12 py-5 md:py-6 bg-brand-blue hover:bg-blue-600 rounded-xl md:rounded-2xl font-bold text-base md:text-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95 inline-flex items-center justify-center cursor-pointer"
        >
          Book 15-Minute Activation Audit
        </motion.a>
      </motion.div>
    </section>
  );
}
