'use client';
import { useMemo, useState } from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { siteContent, formatCurrency, Plan } from "@/lib/utils";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const factor = yearly ? 0.7 : 1; // 30% off for yearly
  const plans = useMemo(() => siteContent.pricing.plans as Plan[], []);

  return (
    <section id="pricing" className="py-20 relative">
      <div className="radial-glow top-[-140px]" />
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          paragraph={siteContent.pricing.donationNote}
        />

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className={`text-sm ${!yearly ? "text-neutral-900" : "text-neutral-500"}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className="relative inline-flex h-8 w-16 items-center rounded-full bg-neutral-200 p-1"
            aria-label="Toggle billing period"
          >
            <span
              className={`h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${yearly ? "translate-x-8" : ""}`}
            />
          </button>
          <span className={`text-sm ${yearly ? "text-neutral-900" : "text-neutral-500"}`}>
            Yearly <span className="text-neutral-500">(30% off)</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => {
            const price = Math.round(p.priceMonthly * factor);
            return (
              <AnimatedCard key={p.name} delay={i * 0.06}>
                <div className="flex items-center justify-between">
                  <div className="text-neutral-700">{p.name}</div>
                  {p.badge && (
                    <div className="text-xs px-2 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">{p.badge}</div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="text-4xl font-semibold text-foreground">
                    {formatCurrency(price)}
                    <span className="text-base text-neutral-500">/mo</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-neutral-600">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><span>•</span><span>{f}</span></li>
                  ))}
                </ul>

                <GradientButton className="mt-6 w-full" href="#contact" variant="black">
                  Get Started
                </GradientButton>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
