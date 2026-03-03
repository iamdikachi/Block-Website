import React from "react";

interface DeliverableCardProps {
  gradient: string;
  pattern: "grid" | "dashboard" | "people" | "chart";
  title: string;
  description: string;
}

export function DeliverableCard({
  gradient,
  pattern,
  title,
  description,
}: DeliverableCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-brand-blue/20 transition-all duration-300 bg-white/2">
      {/* Visual placeholder */}
      <div
        className={`h-44 bg-linear-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}
      >
        {pattern === "grid" && (
          <svg
            width="120"
            height="80"
            className="opacity-20 text-white"
            viewBox="0 0 120 80"
          >
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 9 }).map((__, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 14}
                  y={r * 14}
                  width="10"
                  height="10"
                  rx="1"
                  fill="currentColor"
                />
              )),
            )}
          </svg>
        )}
        {pattern === "dashboard" && (
          <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            className="opacity-30 text-blue-400"
          >
            <rect
              x="8"
              y="8"
              width="50"
              height="10"
              rx="2"
              fill="currentColor"
              opacity="0.6"
            />
            <rect
              x="8"
              y="24"
              width="104"
              height="6"
              rx="2"
              fill="currentColor"
              opacity="0.3"
            />
            <rect
              x="8"
              y="36"
              width="104"
              height="6"
              rx="2"
              fill="currentColor"
              opacity="0.2"
            />
            <rect
              x="8"
              y="52"
              width="30"
              height="20"
              rx="2"
              fill="currentColor"
              opacity="0.5"
            />
            <rect
              x="45"
              y="52"
              width="35"
              height="20"
              rx="2"
              fill="currentColor"
              opacity="0.3"
            />
            <rect
              x="87"
              y="52"
              width="25"
              height="20"
              rx="2"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        )}
        {pattern === "people" && (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="opacity-20 text-white"
          >
            <circle cx="40" cy="22" r="12" fill="currentColor" />
            <path
              d="M16 68c0-13.3 10.7-24 24-24s24 10.7 24 24"
              fill="currentColor"
            />
            <circle cx="68" cy="28" r="8" fill="currentColor" opacity="0.5" />
            <path
              d="M52 68c0-8.8 7.2-16 16-16"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        )}
        {pattern === "chart" && (
          <svg
            width="120"
            height="60"
            viewBox="0 0 120 60"
            className="opacity-30 text-brand-blue"
          >
            <polyline
              points="0,55 20,40 40,45 60,20 80,30 100,10 120,18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <polygon
              points="0,55 20,40 40,45 60,20 80,30 100,10 120,18 120,60 0,60"
              fill="currentColor"
              opacity="0.15"
            />
          </svg>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark/60 to-transparent" />
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-sm text-white">{title}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
