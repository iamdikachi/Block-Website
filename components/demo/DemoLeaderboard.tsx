"use client";

import React from "react";
import { Trophy } from "lucide-react";

export const DemoLeaderboard = () => {
  return (
    <section id="leaderboard" className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 mb-32">
      <div className="bg-card-bg border border-white/10 rounded-3xl md:p-8 p-4">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl md:text-2xl font-bold">Top Contributors</h2>
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
            "Token rewards",
            "NFT whitelist spots",
            "Exclusive community roles",
            "Early access to features",
            "Contributor recognition",
            "Direct team support"
          ].map((reward, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
              {reward}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
