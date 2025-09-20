'use client';
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Props = { text: string; delay?: number; className?: string; };
export default function AnimatedText({ text, delay = 0, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    gsap.fromTo(el, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay, duration: 0.8, ease: "power3.out" });
  }, [delay]);
  return <span ref={ref} className={className}>{text}</span>;
}
