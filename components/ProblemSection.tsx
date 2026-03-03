"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ProblemCard } from "./ui/ProblemCard";

export function ProblemSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98, rotate: -1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="container mx-auto px-6 mt-24 md:mt-40 max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div
          variants={headerVariants}
          className="space-y-4 mb-12 md:mb-20 text-center sm:text-left"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
            Most Web3 Projects <span className="text-zinc-500">Lose Users</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">
            Traditional onboarding fails in the decentralized world. We identify
            and fix the structural leaks in your user funnel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div variants={cardVariants}>
            <ProblemCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-blue"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              }
              title="Ghost Users"
              description="Users connect their wallet once for a specific transaction and never return to the protocol."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ProblemCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-blue"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              }
              title="High Friction"
              description="Complex on-chain requirements and steep learning curves stall organic growth before it starts."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <ProblemCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-blue"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              }
              title="Retention Void"
              description="No defined roadmap for users to transition from casual observers to meaningful contributors."
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
