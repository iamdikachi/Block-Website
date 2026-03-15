"use client";

import React from "react";
import { Target, Trophy, Zap, Users, Star, ShieldCheck } from "lucide-react";

export const DemoInsights = () => {
  return (
    <section className="mb-20">
      <div className="bg-linear-to-r from-brand-blue/10 to-transparent border border-brand-blue/20 rounded-3xl p-4 md:p-12 text-center mb-12">
        <h2 className="text-lg md:text-3xl font-bold mb-4">About THE BLOC</h2>
        <p className="text-gray-400 md:max-w-2xl md:mx-auto text-sm leading-relaxed mb-8">
          THE BLOC builds User Activation Infrastructure for Web3 ecosystems. Our mission is to help projects onboard users, activate communities, reward contributors, and grow sustainably.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-brand-blue">
          <span>Onboard Users</span>
          <span>Activate Communities</span>
          <span>Reward Contributors</span>
          <span>Grow Sustainably</span>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-12">
        <h2 className="text-xl font-bold mb-8 text-center">Engagement Mechanics Built Into This Hub</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "Progress Tracking", icon: <Target className="w-5 h-5" /> },
            { name: "Level Systems", icon: <Trophy className="w-5 h-5" /> },
            { name: "Gamified Missions", icon: <Zap className="w-5 h-5" /> },
            { name: "Social Competition", icon: <Users className="w-5 h-5" /> },
            { name: "Reward Incentives", icon: <Star className="w-5 h-5" /> },
            { name: "Recognition", icon: <ShieldCheck className="w-5 h-5" /> }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-zinc-500">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-white mb-2 text-sm">1. Guided Journey</h4>
            <p className="text-zinc-500 text-xs">Users are guided step-by-step from explorers to contributors.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 text-sm">2. Structured Engagement</h4>
            <p className="text-zinc-500 text-xs">A clear framework for users to participate consistently.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2 text-sm">3. Natural Contributors</h4>
            <p className="text-zinc-500 text-xs">Top users emerge through verified proof of contribution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
