"use client";
import { useEffect, useState } from "react";

/** Intro : logo qui apparaît puis transition vers l'accueil. Jouée une fois par session. */
export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try { seen = sessionStorage.getItem("nw-intro") === "1"; } catch {}
    if (reduce || seen) { const t0 = setTimeout(() => setVisible(false), 0); return () => clearTimeout(t0); }
    try { sessionStorage.setItem("nw-intro", "1"); } catch {}
    const t1 = setTimeout(() => setLeaving(true), 1900);
    const t2 = setTimeout(() => setVisible(false), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;
  return (
    <>
      <noscript><style>{`.nw-intro{display:none!important}`}</style></noscript>
      <div
        className={`nw-intro fixed inset-0 z-[100] grid place-items-center bg-nw-black transition-all duration-700 ${leaving ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"}`}
        role="status" aria-label="Chargement de NexWeb"
      >
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-nw-blue/40 blur-3xl" />
            <svg width="96" height="96" viewBox="0 0 64 64" aria-hidden="true">
              <defs><linearGradient id="in-g" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" /><stop offset="1" stopColor="#2563EB" /></linearGradient></defs>
              <path className="draw" d="M18 47V17l28 30V17" fill="none" stroke="url(#in-g)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="46" cy="17" r="4.2" fill="#fff" className="animate-pulse" />
            </svg>
          </div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-white">Nex<span className="text-nw-glow">Web</span></p>
          <p className="text-sm text-nw-gray/80">Votre vision. Notre expertise.</p>
        </div>
        <button onClick={() => { setLeaving(true); setTimeout(() => setVisible(false), 400); }}
          className="absolute bottom-8 right-6 min-h-11 min-w-11 cursor-pointer rounded-full px-4 text-sm text-nw-gray/70 hover:text-white">
          Passer
        </button>
      </div>
    </>
  );
}
