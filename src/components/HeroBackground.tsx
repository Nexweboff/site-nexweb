"use client";
import { useEffect, useRef } from "react";

/** Réseau de points animé (canvas 2D). Léger, mis en pause hors écran, statique si mouvement réduit. */
export default function HeroBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, running = true;
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 768 ? 28 : 64;
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const max = w < 768 ? 110 : 150;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
        ctx.fillStyle = "rgba(59,130,246,.9)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < max) { ctx.strokeStyle = `rgba(59,130,246,${(1 - d / max) * .35})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
      }
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    const io = new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); } });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full opacity-70" />;
}
