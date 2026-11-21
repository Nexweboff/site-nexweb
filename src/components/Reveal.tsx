"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Révèle ses enfants directs au défilement (petit décalage, fade). Contenu visible sans JS ni en mouvement réduit. */
export default function Reveal({ children, className = "", stagger = 0.08 }: { children: React.ReactNode; className?: string; stagger?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = ref.current ? Array.from(ref.current.children) : [];
      gsap.from(items, { opacity: 0, y: 16, duration: 0.5, stagger, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } });
    });
    return () => mm.revert();
  }, [stagger]);
  return <div ref={ref} className={className}>{children}</div>;
}
