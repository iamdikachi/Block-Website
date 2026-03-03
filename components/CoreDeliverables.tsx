import React from "react";
import { DeliverableCard } from "./ui/DeliverableCard";

export function CoreDeliverables() {
  return (
    <section
      id="deliverables"
      className="container mx-auto px-6 mt-40 max-w-6xl"
    >
      <div className="mb-12 space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Core Deliverables
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <DeliverableCard
          gradient="from-zinc-800 to-zinc-900"
          pattern="grid"
          title="Onboarding Architecture"
          description="Tailored technical funnels designed specifically for your protocol's unique user flow."
        />
        <DeliverableCard
          gradient="from-blue-950 to-zinc-900"
          pattern="dashboard"
          title="Learning + Action"
          description="Educational modules paired with verifiable on-chain actions to ensure user understanding."
        />
        <DeliverableCard
          gradient="from-slate-800 to-zinc-900"
          pattern="people"
          title="Community Link"
          description="Seamless integration between on-chain activity and your Discord or Snapshot governance."
        />
        <DeliverableCard
          gradient="from-zinc-800 to-slate-900"
          pattern="chart"
          title="Metrics & Reporting"
          description="Granular real-time data tracking user lifecycle stages and protocol health."
        />
      </div>
    </section>
  );
}
