"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MissionCardProps {
  mission: {
    title: string;
    description: string;
    reward: number;
    icon: React.ReactNode;
  };
  onOpenModal: (mission: any) => void;
}

export const MissionCard = ({ mission, onOpenModal }: MissionCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card-bg/50 border border-white/10 rounded-2xl p-6 hover:border-brand-blue/30 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue group-hover:scale-110 transition-transform">
          {mission.icon}
        </div>
        <div className="bg-brand-blue/20 text-brand-blue text-xs font-bold px-3 py-1 rounded-full border border-brand-blue/20">
          {mission.reward} XP
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-blue transition-colors">{mission.title}</h3>
      <p className="text-gray-400 text-sm mb-6">{mission.description}</p>
      <button 
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onOpenModal(mission);
        }}
        className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-blue hover:text-white border border-white/10 hover:border-brand-blue transition-all text-sm font-medium flex items-center justify-center gap-2 cursor-pointer z-10"
      >
        Submit Proof <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
