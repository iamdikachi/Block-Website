"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MissionCard } from "./MissionCard";

interface DemoMissionBoardProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  missions: any;
  onOpenModal: (mission: any) => void;
}

export const DemoMissionBoard = ({ activeTab, setActiveTab, missions, onOpenModal }: DemoMissionBoardProps) => {
  return (
    <section id="missions" className="mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-3">Mission Board</h2>
          <p className="text-gray-400">Complete tasks to earn XP and progress through levels</p>
        </div>
        <div className="flex flex-wrap md:flex-row p-1 bg-white/5 rounded-2xl border border-white/10 self-start">
          <button 
            type="button"
            id="tab-explorer"
            onClick={() => setActiveTab("explorer")}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer z-20 ${activeTab === 'explorer' ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Explorer
          </button>
          <button 
            type="button"
            id="tab-activated"
            onClick={() => setActiveTab("activated")}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer z-20 ${activeTab === 'activated' ? 'bg-brand-blue text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            Activated
          </button>
          <button 
            type="button"
            id="tab-contributor"
            onClick={() => setActiveTab("contributor")}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer z-20 ${activeTab === 'contributor' ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Contributor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="contents"
          >
            {missions[activeTab as keyof typeof missions].map((mission: any) => (
              <MissionCard key={mission.title} mission={mission} onOpenModal={onOpenModal} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
