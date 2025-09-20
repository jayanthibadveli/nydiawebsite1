'use client';
import AnimatedCard from "@/components/ui/AnimatedCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollTriggerAnim from "@/components/animations/ScrollTrigger";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import { siteContent } from "@/lib/utils";

export default function Services() {
  return (
    <section id="services" className="py-20 relative" data-sync>
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Services"
          paragraph="Practical automation delivered with clean engineering."
        />

        <ScrollTriggerAnim selector=".svc-card" direction="up" />
        <ScrollTriggerAnim selector=".svc-left" direction="left" />
        <ScrollTriggerAnim selector=".svc-right" direction="right" />

        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.solutions.map((s, i) => (
            <AnimatedCard
              key={s.name}
              delay={i * 0.06}
              className={`svc-card sync-item ${i % 2 === 0 ? 'svc-left' : 'svc-right'} transition-transform duration-300 hover:-translate-y-1`}
            >
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <p className="text-neutral-600 mt-2">{s.tagline}</p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                {s.bullets.map((x, k) => (
                  <li key={k} className="flex gap-2">
                    <span>•</span><span>{x}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>

        {/* Auto-scrolling keywords bar */}
        <div className="mt-10">
          <BenefitsMarquee />
        </div>
      </div>
    </section>
  );
}
