'use client';
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import ScrollTriggerAnim from "@/components/animations/ScrollTrigger";
import { siteContent } from "@/lib/utils";
import Image from "next/image";

export default function Journey() {
  return (
    <section id="journey" className="py-20" data-sync>
      <div className="container">
        <SectionHeading eyebrow="About Us: Journey" title="Journey" />
        <ScrollTriggerAnim selector=".slide-up" direction="up" />
        <ScrollTriggerAnim selector=".slide-left" direction="left" />
        <ScrollTriggerAnim selector=".slide-right" direction="right" />
        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.journey.map((p, i) => (
            <AnimatedCard key={i}>
              <p className="text-neutral-700">{p}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading title="How We Work" />
          <div className="grid md:grid-cols-5 gap-4">
            {siteContent.howWeWork.map((step, i) => {
              const imgSrc = `/${String(i + 1).padStart(2, "0")}.png`; // /01.png … /05.png
              return (
                <AnimatedCard key={i} className="p-0 overflow-hidden text-center sync-item transition-transform duration-300 hover:-translate-y-1">
                  <div className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                    <Image
                      src={imgSrc}
                      alt={`Step ${String(i + 1).padStart(2, "0")}`}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 768px) 20vw, 90vw"
                      className="object-cover filter grayscale brightness-[1.06] contrast-[1.05] saturate-[.75]"
                      priority={i === 0}
                    />
                  </div>
                  <div className="text-neutral-500 text-xs uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-neutral-700 mt-2">{step}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
