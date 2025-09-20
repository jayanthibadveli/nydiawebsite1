'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Avoid duplicate registration during HMR
if (typeof window !== 'undefined' && !(gsap.core as any).globals()?.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
