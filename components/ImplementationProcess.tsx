"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function ImplementationProcess() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="container mx-auto px-6 mt-48 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Implementation Process
        </h2>
        <div className="w-12 h-1 bg-brand-blue mx-auto rounded-full" />
      </motion.div>

      <div className="relative flex flex-col gap-0">
        {/* Vertical connecting line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
          className="absolute left-[28px] top-12 bottom-12 w-px bg-gradient-to-b from-brand-blue/40 via-white/10 to-transparent hidden sm:block"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
            <motion.div
              key={step.num}
              variants={itemVariants}
              className={`flex gap-8 items-start ${i < 2 ? "pb-16" : ""}`}
            >
              {/* Number badge */}
              <motion.div
                whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
                className="relative z-10 shrink-0 w-14 h-14 rounded-xl bg-[#0d1a2f] border border-brand-blue/40 flex flex-col items-center justify-center gap-0.5 shadow-[0_0_16px_rgba(59,130,246,0.15)] transition-colors"
              >
                <span className="text-[10px] font-black text-brand-blue tracking-widest">
                  {step.num}
                </span>
              </motion.div>
              {/* Content */}
              <div className="pt-2 space-y-3">
                <h3 className="text-lg font-bold tracking-[0.2em] uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-base text-zinc-500 leading-relaxed max-w-md">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
