"use client";

import React from "react";
import { motion } from "framer-motion";

export const DemoTimeline = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Campaign Timeline</h2>
        <p className="text-gray-400">Mark your milestones over the next 30 days</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { week: "Week 1", title: "Explorer Missions", active: true },
          { week: "Week 2", title: "Activated Missions", active: false },
          { week: "Week 3", title: "Contributor Missions", active: false },
          { week: "Week 4", title: "Leaderboard Competition", active: false },
        ].map((step, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${step.active ? 'border-brand-blue bg-brand-blue/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]' : 'border-white/10 bg-white/5 opacity-60'}`}>
            <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${step.active ? 'text-brand-blue' : 'text-gray-500'}`}>{step.week}</p>
            <h3 className="font-bold">{step.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-zinc-500 text-sm italic">Engagement psychology: Time-boxed events create urgency.</p>
      </div>
    </section>
  );
};
