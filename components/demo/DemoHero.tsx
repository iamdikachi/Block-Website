"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";

export const DemoHero = () => {
  return (
    <section className="text-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium mb-8"
      >
        <Zap className="w-4 h-4" /> Community Activation Campaign • 30 Days
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
      >
        Welcome to the <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-blue-400">Activation Hub</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Official engagement portal for [PROJECT NAME]. Complete missions, earn XP, and level up to become a core contributor.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:max-w-3xl md:mx-auto text-sm text-gray-500 font-medium"
      >
        {[
          "Learn ecosystem",
          "Explore protocol",
          "Complete missions",
          "Earn rewards",
          "Become contributor"
        ].map((text, i) => (
          <div key={i} className="flex md:items-center md:justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            {text}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
