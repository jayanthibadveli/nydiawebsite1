'use client';
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function PageTransition() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.position = "fixed";
    el.style.inset = "0";
    el.style.background = "linear-gradient(135deg, rgba(139,92,246,0.14), rgba(34,211,238,0.14))";
    el.style.backdropFilter = "blur(6px)";
    el.style.zIndex = "999";
    document.body.appendChild(el);
    gsap.to(el, { opacity: 0, duration: 0.6, ease: "power2.out", onComplete: () => el.remove() });
    return () => { try { el.remove(); } catch {} };
  }, []);
  return null;
}
