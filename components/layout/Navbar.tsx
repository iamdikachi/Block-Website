import React from "react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-[#030712]/80 border-b border-white/5 sm:px-12">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase">
          The Bloc
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#process" className="hover:text-white transition-colors">
          Process
        </a>
        <a href="#deliverables" className="hover:text-white transition-colors">
          Deliverables
        </a>
        <a
          href="#book-call"
          className="bg-brand-blue hover:bg-blue-600 px-6 py-2.5 rounded-lg text-white font-semibold transition-all hover:scale-105 active:scale-95"
        >
          BOOK CALL
        </a>
      </div>
    </nav>
  );
}
