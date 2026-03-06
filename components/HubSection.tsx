"use client";

import React from "react";
import { motion } from "framer-motion";
import NotionList from "./NotionList";

export function HubSection() {
  return (
    <section id="hub" className="container mx-auto px-6 py-24 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest">
            Live Demonstration
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            The Demo <span className="text-brand-blue">Onboarding Hub</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            This is a real-time view of our Notion infrastructure. Every time a
            booking is made via the activation audit, it's instantly categorized
            and tracked here.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-1">
              <p className="text-white font-bold">Real-time Sync</p>
              <p className="text-zinc-500 text-xs text-pretty">
                Direct connection between Calendly and your Notion workspace.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-white font-bold">Custom Views</p>
              <p className="text-zinc-500 text-xs text-pretty">
                Filtered data views for Product, Success, and Leadership teams.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live List View */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-brand-blue/20 rounded-[2.5rem] blur-2xl group-hover:bg-brand-blue/30 transition-all duration-500" />

            <div className="relative bg-brand-dark/60 border border-white/5 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
                  Notion API Live Feed
                </div>
              </div>

              <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                <NotionList />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
