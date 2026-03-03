import React from "react";
import { ProblemCard } from "./ui/ProblemCard";

export function ProblemSection() {
  return (
    <section className="container mx-auto px-6 mt-40 max-w-6xl">
      <div className="space-y-3 mb-14 text-center sm:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Most Web3 Projects Lose Users
        </h2>
        <p className="text-lg text-zinc-500 max-w-xl">
          Traditional onboarding fails in the decentralized world. We identify
          and fix the structural leaks in your user funnel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ProblemCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-blue"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          }
          title="Ghost Users"
          description="Users connect their wallet once for a specific transaction and never return to the protocol."
        />
        <ProblemCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-blue"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          }
          title="High Friction"
          description="Complex on-chain requirements and steep learning curves stall organic growth before it starts."
        />
        <ProblemCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-blue"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          }
          title="Retention Void"
          description="No defined roadmap for users to transition from casual observers to meaningful contributors."
        />
      </div>
    </section>
  );
}
