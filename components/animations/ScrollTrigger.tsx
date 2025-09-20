'use client';
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';
type Props = { selector: string; y?: number; x?: number; delay?: number; direction?: Direction };
export default function ScrollTriggerAnim({ selector, y = 24, x = 0, delay = 0, direction = 'up' }: Props) {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const triggers: ScrollTrigger[] = [];

    elements.forEach((el, i) => {
      const hidden: any = { opacity: 0 };
      const visible: any = { opacity: 1, duration: 0.8, delay: delay + i * 0.06, ease: 'power3.out' };

      const distX = Math.abs(x) || 40;
      const distY = Math.abs(y) || 24;
      if (direction === 'left') { hidden.x = -distX; visible.x = 0; }
      if (direction === 'right') { hidden.x = distX; visible.x = 0; }
      if (direction === 'down') { hidden.y = distY; visible.y = 0; }
      if (direction === 'up') { hidden.y = -distY; visible.y = 0; }

      gsap.set(el, hidden);

      const t = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => gsap.to(el, visible),
        onEnterBack: () => gsap.to(el, visible),
        onLeave: () => gsap.to(el, hidden),
        onLeaveBack: () => gsap.to(el, hidden),
      });
      triggers.push(t);
    });

    return () => {
      triggers.forEach(t => t.kill());
    };
  }, [selector, y, x, delay, direction]);
  return null;
}
