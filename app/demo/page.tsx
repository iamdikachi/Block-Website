"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Trophy, 
  Target, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Video, 
  BookOpen, 
  MessageSquare,
  Wallet,
  Globe,
  Star
} from "lucide-react";

// --- Components ---

const MissionCard = ({ mission, onOpenModal }: { mission: any, onOpenModal: (m: any) => void }) => {
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

// --- Page Sections ---

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("explorer");
  const [showModal, setShowModal] = useState(false);
  const [selectedMission, setSelectedMission] = useState<any>(null);

  const missions = {
    explorer: [
      { title: "Follow [PROJECT] on X", description: "Stay updated with announcements", reward: 10, icon: <Globe className="w-5 h-5" /> },
      { title: "Join Discord", description: "Join the community", reward: 10, icon: <MessageSquare className="w-5 h-5" /> },
      { title: "Watch Intro Video", description: "Learn what the project does", reward: 20, icon: <Video className="w-5 h-5" /> },
      { title: "Read Project Overview", description: "Understand the mission", reward: 10, icon: <BookOpen className="w-5 h-5" /> },
    ],
    activated: [
      { title: "Connect Wallet", description: "Connect wallet to the platform", reward: 30, icon: <Wallet className="w-5 h-5" /> },
      { title: "Bridge Tokens", description: "Complete a test transaction", reward: 40, icon: <Zap className="w-5 h-5" /> },
      { title: "Use the Protocol", description: "Perform a real interaction", reward: 50, icon: <Target className="w-5 h-5" /> },
      { title: "Complete Tutorial Quiz", description: "Confirm knowledge", reward: 30, icon: <CheckCircle2 className="w-5 h-5" /> },
    ],
    contributor: [
      { title: "Create Tutorial Thread", description: "Explain how the protocol works", reward: 80, icon: <MessageSquare className="w-5 h-5" /> },
      { title: "Invite 3 New Users", description: "Help onboard new members", reward: 100, icon: <Users className="w-5 h-5" /> },
      { title: "Host Community Space", description: "Discuss the project", reward: 120, icon: <Globe className="w-5 h-5" /> },
      { title: "Create Short Video", description: "Educational or promotional content", reward: 120, icon: <Video className="w-5 h-5" /> },
    ]
  };

  const handleOpenModal = (mission: any) => {
    setSelectedMission(mission);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-blue/30 overflow-x-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <Navbar />

      <main className="relative pt-32 pb-24 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" /> Community Activation Campaign • 30 Days
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Welcome to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Activation Hub</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Official engagement portal for [PROJECT NAME]. Complete missions, earn XP, and level up to become a core contributor.
          </motion.p>
        </section>

        {/* Level & Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 bg-card-bg border border-white/10 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Current Level</p>
                  <h2 className="text-3xl font-bold text-brand-blue">Explorer</h2>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-1">Total Points</p>
                  <h2 className="text-3xl font-bold">0 XP</h2>
                </div>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "0%" }}
                  className="h-full bg-gradient-to-r from-brand-blue to-blue-400"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <p>Activated Unlock: 150 XP</p>
                <p>0% towards next level</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-2xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-blue/10 border border-brand-blue/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center"
          >
            <Trophy className="w-12 h-12 text-brand-blue mb-4" />
            <h3 className="text-xl font-bold mb-2">Lead the Way</h3>
            <p className="text-gray-400 text-sm">Top contributors earn exclusive NFT roles and early access.</p>
          </motion.div>
        </section>

        {/* Progression System (The Journey) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">Three steps to becoming a core ecosystem contributor</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 -z-10" />
            
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

        {/* Mission Board */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-3">Mission Board</h2>
              <p className="text-gray-400">Complete tasks to earn XP and progress through levels</p>
            </div>
            <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 self-start">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 
        ">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="contents"
              >
                {missions[activeTab as keyof typeof missions].map((mission, i) => (
                  <MissionCard key={mission.title} mission={mission} onOpenModal={handleOpenModal} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Leaderboard & Rewards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="bg-card-bg border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">Top Contributors</h2>
            </div>
            <div className="space-y-4">
              {[
                { rank: 1, address: "0x74...3e21", points: "320 XP" },
                { rank: 2, address: "0x1a...f892", points: "250 XP" },
                { rank: 3, address: "0xcc...9012", points: "210 XP" },
                { rank: 4, address: "0xbf...4421", points: "180 XP" },
                { rank: 5, address: "0xde...1102", points: "160 XP" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${i === 0 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-white/10'}`}>
                      {item.rank}
                    </span>
                    <span className="font-mono text-gray-300">{item.address}</span>
                  </div>
                  <span className="font-bold text-brand-blue">{item.points}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Exclusive Rewards</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Participation in the campaign unlocks more than just XP. High-ranking contributors gain status and tangible ecosystem benefits.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Token Rewards",
                "NFT Whitelist",
                "Community Roles",
                "Early Access",
                "Contributor Badges",
                "Direct Support"
              ].map((reward, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  {reward}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Campaign Timeline</h2>
            <p className="text-gray-400">Mark your milestones over the next 30 days</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { week: "Week 1", title: "Explorer Missions", active: true },
              { week: "Week 2", title: "Activated Missions", active: false },
              { week: "Week 3", title: "Contributor Missions", active: false },
              { week: "Week 4", title: "Leaderboard Competition", active: false },
            ].map((step, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${step.active ? 'border-brand-blue bg-brand-blue/10' : 'border-white/10 bg-white/5 opacity-60'}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${step.active ? 'text-brand-blue' : 'text-gray-500'}`}>{step.week}</p>
                <h3 className="font-bold">{step.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center bg-gradient-to-b from-brand-blue/20 to-transparent rounded-3xl p-16 border border-brand-blue/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to activate your community?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              This demo hub shows how THE BLOC helps Web3 ecosystems onboard and activate users through structured, gamified journeys.
            </p>
            <button className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              Build Your Hub with THE BLOC
            </button>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
        </section>
      </main>

      <Footer />

      {/* Submission Modal */}
      <AnimatePresence>
        {showModal && selectedMission && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card-bg border border-white/10 w-full max-w-lg rounded-3xl p-8 relative z-10"
            >
              <h2 className="text-2xl font-bold mb-2">Submit Mission Proof</h2>
              <p className="text-gray-400 text-sm mb-6">{selectedMission.title}</p>
              
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
                  onClick={() => setShowModal(false)}
                  className="w-full py-4 bg-brand-blue text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-2"
                >
                  Submit for Approval
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
