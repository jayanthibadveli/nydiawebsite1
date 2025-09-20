'use client';
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  sectionSelector: string; // e.g., '#services'
  itemSelector?: string;   // defaults to '.sync-item'
  stagger?: number;        // defaults to 0.08
};

export default function SectionSync({ sectionSelector, itemSelector = '.sync-item', stagger = 0.08 }: Props) {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(sectionSelector);
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>(itemSelector));
    if (items.length === 0) return;

    // Mark section for children to optionally detect and skip self animations
    section.setAttribute('data-sync', 'true');

    const ctx = gsap.context(() => {
      // Initial hidden state
      gsap.set(items, { opacity: 0, y: 24 });

      // Slide in/out synced with section visibility
      const t = ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger }),
        onEnterBack: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger }),
        onLeave: () => gsap.to(items, { opacity: 0, y: 24, duration: 0.5, ease: 'power2.in', stagger: 0.05 }),
        onLeaveBack: () => gsap.to(items, { opacity: 0, y: -24, duration: 0.5, ease: 'power2.in', stagger: 0.05 }),
      });

      return () => {
        t.kill();
      };
    }, section);

    return () => ctx.revert();
  }, [sectionSelector, itemSelector, stagger]);

  return null;
}


