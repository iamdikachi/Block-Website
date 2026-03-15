"use client";

import React from "react";
import { ShieldCheck, Star } from "lucide-react";

export const DemoGuidelines = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 border-t border-white/5 pt-24">
      <div>
        <h2 className="text-2xl font-bold mb-6">Community Guidelines</h2>
        <ul className="space-y-4">
          {[
            "Submit genuine mission proofs",
            "Respect other community members",
            "Follow ecosystem guidelines",
            "No spam or fake submissions"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
              <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
        <p className="text-gray-400 text-sm mb-6">
          Participants who reach Contributor Level may be invited to:
        </p>
        <ul className="space-y-4">
          {[
            "Join future campaigns",
            "Collaborate with the project",
            "Help lead community initiatives"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
              <Star className="w-5 h-5 text-brand-blue shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
