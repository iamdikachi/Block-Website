"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="container mx-auto px-6 max-w-5xl text-center space-y-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div
          variants={itemVariants}
          className="text-[8px] inline-flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue  md:text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        >
          <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-brand-blue" />
          </span>
          Infrastructure Grade Activation
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] md:leading-none bg-clip-text text-transparent bg-linear-to-b from-white to-white/50"
          >
            User Activation
            <span className="text-brand-blue"> Infrastructure</span> for Web3
            Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-xs md:text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium"
          >
            High-credibility, operator-focused onboarding systems for DeFi,
            DAOs, and L2s. Stop guessing and start activating your users from
            day one.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-6"
        >
          <motion.a
            href="https://calendly.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-2 md:px-10 py-2 md:py-5 bg-brand-blue hover:bg-blue-600 rounded-md 
            md:rounded-2xl font-bold text-xs md:text-lg transition-all flex items-center justify-center gap-3 active:scale-95 
            cursor-pointer"
          >
            Book <span className="hidden md:block">15-Minute Activation</span> Audit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
          </motion.a>
          <motion.a
            href="https://notion.so/your-workspace"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 sm:w-auto md:px-10 py-2 md:py-5 bg-white/5 border border-white/10 rounded-md md:rounded-2xl font-bold text-base md:text-lg transition-all flex items-center justify-center cursor-pointer"
          >
            View Demo <span className="hidden md:block">Onboarding Hub</span> 
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
