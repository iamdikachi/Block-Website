"use client";

import React from "react";
import Link from "next/link";

export const DemoCTA = () => {
  return (
    <section className="text-center bg-brand-blue rounded-3xl p-4 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
      <div className="relative z-10">
        <h2 className="text-xl md:text-4xl font-bold mb-6">For Project Teams</h2>
        <p className="text-white/80 text-xs md:max-w-2xl md:mx-auto mb-10 md:text-lg">
          If you're a Web3 project interested in running an Activation Campaign like this, reach out to the THE BLOC team.
        </p>
        <Link 
          href="/book"
          className="px-6 md:px-10 py-5 bg-white text-[12px] md:text-lg text-brand-blue rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl inline-block"
        >
          Build Your Hub with THE BLOC
        </Link>
      </div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
};
