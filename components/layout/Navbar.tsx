"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-60 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-brand-dark/80 border-b border-white/5 sm:px-12"
      >
        {" "}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">
              The Bloc
            </span>
          </motion.div>
        </Link>
        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400"
        >
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
          <a
            href="#deliverables"
            className="hover:text-white transition-colors"
          >
            Deliverables
          </a>
          <Link
            href="/book"
            className="bg-brand-blue hover:bg-blue-600 px-6 py-2.5 rounded-lg text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            BOOK CALL
          </Link>
        </motion.div>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden flex-col gap-1.5 p-2 z-70"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-zinc-400 rounded-full"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-zinc-400 rounded-full"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-zinc-400 rounded-full"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-brand-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-bold text-center">
              <a
                href="#process"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                Process
              </a>
              <a
                href="#deliverables"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                Deliverables
              </a>
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="bg-brand-blue text-white py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                BOOK CALL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
