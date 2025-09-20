'use client';
import React from "react";

const ITEMS = [
  { emoji: "📈", label: "Real-Time Insights" },
  { emoji: "⚙️", label: "Automation" },
  { emoji: "🧠", label: "Data-Driven Decisions" },
  { emoji: "🚀", label: "Faster Innovation" },
  { emoji: "🤖", label: "Virtual Assistance" },
  { emoji: "📦", label: "Scalability" },
  { emoji: "💸", label: "Cost Optimisation" },
  { emoji: "✅", label: "Reliability" },
  { emoji: "🔒", label: "Security" },
  { emoji: "⏱️", label: "24/7 Ops" },
];

function Pill({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="shrink-0 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm flex items-center gap-2">
      <span className="text-[15px]" aria-hidden>{emoji}</span>
      <span className="text-neutral-800 text-sm font-medium">{label}</span>
    </div>
  );
}

export default function BenefitsMarquee() {
  // Duplicate items to make the loop seamless
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="group relative mt-10 pb-2">
      {/* gradient fade edges */}
      <div className="pointer-events-none absolute inset-0 fade-edges" />
      <div className="overflow-hidden">
        <div
          className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]"
          aria-label="Key benefits marquee"
        >
          {loop.map((item, i) => (
            <Pill key={`${item.label}-${i}`} emoji={item.emoji} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
