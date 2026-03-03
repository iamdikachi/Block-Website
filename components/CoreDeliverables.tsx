"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { DeliverableCard } from "./ui/DeliverableCard";

export function CoreDeliverables() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="deliverables"
      className="container mx-auto px-6 mt-40 max-w-6xl"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Core Deliverables
        </h2>
        <div className="w-12 h-1 bg-brand-blue rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={itemVariants}>
          <DeliverableCard
            gradient="from-zinc-800 to-zinc-900"
            pattern="grid"
            title="Onboarding Architecture"
            description="Tailored technical funnels designed specifically for your protocol's unique user flow."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DeliverableCard
            gradient="from-blue-950 to-zinc-900"
            pattern="dashboard"
            title="Learning + Action"
            description="Educational modules paired with verifiable on-chain actions to ensure user understanding."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DeliverableCard
            gradient="from-slate-800 to-zinc-900"
            pattern="people"
            title="Community Link"
            description="Seamless integration between on-chain activity and your Discord or Snapshot governance."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DeliverableCard
            gradient="from-zinc-800 to-slate-900"
            pattern="chart"
            title="Metrics & Reporting"
            description="Granular real-time data tracking user lifecycle stages and protocol health."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
