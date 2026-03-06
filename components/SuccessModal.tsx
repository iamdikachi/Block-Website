"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-101 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-brand-dark border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] pointer-events-auto relative overflow-hidden"
            >
              {/* Decorative Blue Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px]" />

              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="w-16 h-16 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      delay: 0.2,
                    }}
                  >
                    <Check className="w-8 h-8 text-brand-blue" />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {message}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full py-4 bg-brand-blue hover:bg-blue-600 rounded-xl font-bold text-white transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  GOT IT
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
