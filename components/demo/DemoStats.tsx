"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export const DemoStats = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="md:col-span-2 bg-card-bg border border-white/10 rounded-3xl p-8 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Level</p>
              <h2 className="text-3xl font-bold text-brand-blue">Explorer</h2>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm mb-1">Total Points</p>
              <h2 className="text-3xl font-bold">0 XP</h2>
            </div>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "0%" }}
              className="h-full bg-linear-to-r from-brand-blue to-blue-400"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 font-medium">
            <p>Activated Unlock: 150 XP</p>
            <p>0% towards next level</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-2xl" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-brand-blue/10 border border-brand-blue/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center"
      >
        <Trophy className="w-12 h-12 text-brand-blue mb-4" />
        <h3 className="text-xl font-bold mb-2">Lead the Way</h3>
        <p className="text-gray-400 text-sm">Top contributors earn exclusive NFT roles and early access.</p>
      </motion.div>
    </section>
  );
};
