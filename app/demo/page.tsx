"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Video, 
  BookOpen, 
  MessageSquare,
  Wallet,
  Zap,
  Target,
  CheckCircle2,
  Users,
  Globe
} from "lucide-react";

// Import Refactored Components
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoStats } from "@/components/demo/DemoStats";
import { DemoJourney } from "@/components/demo/DemoJourney";
import { DemoMissionBoard } from "@/components/demo/DemoMissionBoard";
import { DemoLeaderboard } from "@/components/demo/DemoLeaderboard";
import { DemoTimeline } from "@/components/demo/DemoTimeline";
import { DemoGuidelines } from "@/components/demo/DemoGuidelines";
import { DemoInsights } from "@/components/demo/DemoInsights";
import { DemoCTA } from "@/components/demo/DemoCTA";
import { SubmissionModal } from "@/components/demo/SubmissionModal";

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
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <Navbar />

      <main className="relative pt-32 pb-24 max-w-7xl mx-auto px-6">
        <DemoHero />
        <DemoStats />
        <DemoJourney />
        <DemoMissionBoard 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          missions={missions} 
          onOpenModal={handleOpenModal} 
        />
        <DemoLeaderboard />
        <DemoTimeline />
        <DemoGuidelines />
        <DemoInsights />
        <DemoCTA />
      </main>

      <Footer />

      <SubmissionModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        mission={selectedMission} 
      />
    </div>
  );
}
