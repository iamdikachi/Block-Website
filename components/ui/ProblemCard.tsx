"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-brand-blue/30 hover:bg-white/4 transition-colors duration-500 overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-linear-to-br from-brand-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <motion.div 
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="mb-6 inline-flex p-4 rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/10 transition-colors group-hover:bg-brand-blue/20"
      >
        {icon}
      </motion.div>
      <h3 className="relative text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
      <p className="relative text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">{description}</p>
    </motion.div>
  );
}
