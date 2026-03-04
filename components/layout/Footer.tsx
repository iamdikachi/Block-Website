import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 px-6 sm:px-12 bg-brand-dark">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-brand-blue rounded flex items-center justify-center shrink-0">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-zinc-500 uppercase tracking-widest text-[10px]">
            The Bloc
          </span>
        </div>


        <p className="text-zinc-600 text-[11px]">
          © 2026 THE BLOC Infrastructure. All rights reserved.
        </p>


        <div className="flex items-center gap-6 text-[11px] font-medium text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
