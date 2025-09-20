'use client';
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import clsx from "clsx";

type Props = { className?: string; children: React.ReactNode; delay?: number; };

export default function AnimatedCard({ className, children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    // If within a synced section, skip individual animation to avoid double animating
    if (el.closest('[data-sync="true"]')) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          delay,
          scrollTrigger: { trigger: el, start: "top 85%" }
        }
      );
    }, el);
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ctx.revert();
    };
  }, [delay]);

  return (
    <div ref={ref} className={clsx("group card-gradient rounded-2xl p-6 relative overflow-hidden", className)}>
      <div className="blur-ring rounded-2xl group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
}
