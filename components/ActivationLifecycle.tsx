"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function ActivationLifecycle() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="process" className="container mx-auto px-6 mt-24 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-20 space-y-4"
      >
        <p className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">
          The Process
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The Activation Lifecycle
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto h-1 bg-brand-blue rounded-full mt-4"
        />
      </motion.div>

      {/* Stepper */}
      <div className="relative">
        {/* Connector Line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
          className="absolute top-[26px] left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden sm:block"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-16 gap-x-4 text-center relative z-10"
        >
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
            <motion.div
              variants={itemVariants}
              key={step.num}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  backgroundColor: step.active
                    ? "#3b82f6"
                    : "rgba(255,255,255,0.1)",
                  boxShadow: step.active
                    ? "0 0 25px rgba(59,130,246,0.6)"
                    : "none",
                }}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  step.active
                    ? "bg-brand-blue border-brand-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "bg-white/5 border-white/10 text-zinc-500"
                }`}
              >
                {step.num}
              </motion.div>
              <div>
                <p
                  className={`font-bold text-lg ${step.active ? "text-white" : "text-zinc-400"}`}
                >
                  {step.label}
                </p>
                <p
                  className={`text-xs tracking-[0.2em] mt-1 font-semibold ${step.active ? "text-brand-blue" : "text-zinc-600"}`}
                >
                  {step.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
