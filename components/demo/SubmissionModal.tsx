"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  mission: any;
}

export const SubmissionModal = ({ isOpen, onClose, mission }: SubmissionModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && mission && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card-bg border border-white/10 w-full max-w-lg rounded-3xl p-8 relative z-10"
          >
            <h2 className="text-2xl font-bold mb-2">Submit Mission Proof</h2>
            <p className="text-gray-400 text-sm mb-6">{mission.title}</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Wallet Address</label>
                <input type="text" placeholder="0x..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Proof Link (Tweet, TX, or Screenshot)</label>
                <input type="text" placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="bg-blue-900/10 border border-brand-blue/20 rounded-xl p-4 text-xs text-blue-300 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 mt-0.5" />
                <p>Submissions are reviewed manually by the community team. Approved missions will earn XP points after verification.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-2"
              >
                Submit for Approval
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
