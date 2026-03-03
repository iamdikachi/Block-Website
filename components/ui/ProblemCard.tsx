import React from "react";

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ProblemCard({ icon, title, description }: ProblemCardProps) {
  return (
    <div className="group p-7 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-blue/30 hover:bg-white/4 transition-all duration-300">
      <div className="mb-5 inline-flex p-3 rounded-xl bg-brand-blue/10 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
