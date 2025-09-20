'use client';
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import ScrollTriggerAnim from "@/components/animations/ScrollTrigger";
import { siteContent } from "@/lib/utils";
import Image from "next/image";
const WHAT_IMAGES = [ "/digitalCoreService.png", "/CustomSoft.png", "/CloudInte.png", "/AiMl.png", "/QAtesting.png", ];

export default function AboutUs() {
  const a = siteContent.about;

  return (
    <section id="about" className="py-20" data-sync>
      <div className="container">
        <SectionHeading eyebrow="About us" title="About Nydia Tech" />
        <ScrollTriggerAnim selector=".slide-up" direction="up" />
        <ScrollTriggerAnim selector=".slide-left" direction="left" />
        <ScrollTriggerAnim selector=".slide-right" direction="right" />

        {/* Intro paragraphs */}
        <div className="mx-auto max-w-4xl space-y-4 text-neutral-700">
          {a.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* TOP: Why Choose (full width) */}
        <div className="mt-10">
          <AnimatedCard className="max-w-5xl mx-auto">
            <h4 className="text-xl font-semibold">Why Choose Nydia Tech?</h4>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-neutral-700">
              {siteContent.whyChooseUs.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ol>
          </AnimatedCard>
        </div>

        {/* BELOW: 3 feature cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Collaborate */}
          <AnimatedCard className="p-0 overflow-hidden h-full flex flex-col sync-item transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-full aspect-[4/3] slide-left">
              <Image
                src="/collaboratekpi.png"
                alt="Collaborate"
                fill
                sizes="(min-width:1024px) 30vw, (min-width:768px) 32vw, 90vw"
                className="object-contain bg-white filter grayscale brightness-[1.06] contrast-[1.05] saturate-[.75]"
                priority
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Collaborate</h4>
              <p className="text-neutral-700">{a.collaborate}</p>
            </div>
          </AnimatedCard>

          {/* Innovate */}
          <AnimatedCard className="p-0 overflow-hidden h-full flex flex-col sync-item transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-full aspect-[4/3] slide-up">
              <Image
                src="/innovate.png"
                alt="Innovate"
                fill
                sizes="(min-width:1024px) 30vw, (min-width:768px) 32vw, 90vw"
                className="object-contain bg-white filter grayscale brightness-[1.06] contrast-[1.05] saturate-[.75]"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Innovate</h4>
              <p className="text-neutral-700">{a.innovate}</p>
            </div>
          </AnimatedCard>

          {/* Grow */}
          <AnimatedCard className="p-0 overflow-hidden h-full flex flex-col sync-item transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-full aspect-[4/3] slide-right">
              <Image
                src="/grow.png"
                alt="Grow"
                fill
                sizes="(min-width:1024px) 30vw, (min-width:768px) 32vw, 90vw"
                className="object-contain bg-white filter grayscale brightness-[1.06] contrast-[1.05] saturate-[.75]"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h4 className="text-lg font-semibold">Grow</h4>
              <p className="text-neutral-700">{a.grow}</p>
            </div>
          </AnimatedCard>
        </div>

        {/* What We Do — staggered, centered, with soft lift */}
        <div className="mt-12">
          <h4 className="text-2xl font-semibold text-foreground">What We Do</h4>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {siteContent.whatWeDo.map((x, i) => {
              const span =
                i === 0 ? "lg:col-span-4" :
                i === 1 ? "lg:col-span-4" :
                i === 2 ? "lg:col-span-4" :
                i === 3 ? "lg:col-span-6" :
                "lg:col-span-6";

              const offset =
                i === 0 ? "lg:translate-y-3" :
                i === 1 ? "lg:-translate-y-2" :
                i === 2 ? "lg:translate-y-6" :
                i === 3 ? "lg:-translate-y-2" :
                "lg:translate-y-3";

              return (
                <AnimatedCard
                  key={i}
                  className={`p-0 overflow-hidden flex flex-col transition-transform duration-300 ${span} ${offset} hover:-translate-y-1 sync-item`}
                >
                  <div className="relative w-full aspect-[4/3] slide-up">
                    <Image
                      src={WHAT_IMAGES[i]}
                      alt={x.split(":")[0] || `What we do ${i + 1}`}
                      fill
                      sizes="(min-width:1280px) 24vw, (min-width:1024px) 28vw, (min-width:768px) 45vw, 90vw"
                      className="object-contain bg-white filter grayscale brightness-[1.06] contrast-[1.05] saturate-[.75]"
                      priority={i === 0}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-neutral-700">{x}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
