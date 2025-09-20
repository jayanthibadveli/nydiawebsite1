'use client';
import { useEffect, useRef, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/lib/utils";

export default function HeroBanner() {
  const [idx, setIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % siteContent.banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!wrapRef.current) return;
    gsap.fromTo(
      wrapRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [idx]);

  const b = siteContent.banners[idx];

  return (
    <section className="relative overflow-hidden bg-bg min-h-[100svh] md:min-h-screen flex items-center" data-sync>
      {/* Background video (ensure it's above the section background, but below content) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* optional subtle veil for readability; you can remove if you want raw video */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="radial-glow top-[-260px]" />
      {/* content is now explicitly above the video */}
      <div className="container relative z-10 text-center" ref={wrapRef}>
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm sync-item">
          <span>{b.title}</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-foreground sync-item">
          {b.mainTitle}
        </h1>
        <p className="mt-4 text-neutral-600 max-w-3xl mx-auto sync-item">{b.subTitle}</p>
        <p className="mt-3 text-neutral-500 text-sm sync-item">{b.footnote}</p>

        <div className="mt-8 flex items-center justify-center gap-4 sync-item">
          <GradientButton href="#contact" variant="black">Get Started</GradientButton>
          <GradientButton href="#services" variant="gray">See Our Services</GradientButton>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {siteContent.banners.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to banner ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-neutral-900" : "bg-neutral-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
