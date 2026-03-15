"use client";

import React from "react";
import { ShieldCheck, Zap, Star } from "lucide-react";

export const DemoJourney = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400">Three steps to becoming a core ecosystem contributor</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connector Lines (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-px bg-linear-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 -z-10" />
        
        <div className="text-center">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-blue">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">1. Join</h3>
          <p className="text-gray-400 text-sm">Start with Explorer missions to understand the ecosystem.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-blue">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">2. Activate</h3>
          <p className="text-gray-400 text-sm">Engage with the protocol to unlock deeper interactions.</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            <Star className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3">3. Contribute</h3>
          <p className="text-gray-400 text-sm">Create content and help grow the community.</p>
        </div>
      </div>
    </section>
  );
};
