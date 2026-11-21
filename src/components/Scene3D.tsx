"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Scène Three.js : noyau polyédrique filaire, anneaux orbitaux et particules.
 * - pixel ratio plafonné, moins de particules sur mobile
 * - mise en pause hors écran / onglet masqué
 * - image fixe si "mouvement réduit"
 * - ne rend rien (le parent garde son fond) si WebGL est indisponible
 */
export default function Scene3D({ variant = "hero", className = "" }: { variant?: "hero" | "compact"; className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch { return; }

    const mobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
    renderer.setClearAlpha(0);
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, variant === "hero" ? 7 : 6);

    const BLUE = 0x2563eb, GLOW = 0x3b82f6;
    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 1),
      new THREE.MeshBasicMaterial({ color: GLOW, wireframe: true, transparent: true, opacity: 0.75 })
    );
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 0),
      new THREE.MeshBasicMaterial({ color: BLUE, transparent: true, opacity: 0.35 })
    );
    group.add(core, inner);

    const ringMat = new THREE.MeshBasicMaterial({ color: GLOW, transparent: true, opacity: 0.55 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.012, 8, 160), ringMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.1, 0.01, 8, 160), ringMat.clone());
    ring1.rotation.x = Math.PI / 2.4; ring2.rotation.set(Math.PI / 3, Math.PI / 5, 0);
    group.add(ring1, ring2);

    const nodes = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    const orbiters: THREE.Mesh[] = [0, 1, 2].map(() => { const m = nodes.clone(); group.add(m); return m; });

    const count = mobile ? 220 : 520;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.6 + Math.random() * 3.2, a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(b) * Math.cos(a); pos[i * 3 + 1] = r * Math.sin(b) * Math.sin(a); pos[i * 3 + 2] = r * Math.cos(b);
    }
    const pg = new THREE.BufferGeometry(); pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(pg, new THREE.PointsMaterial({ color: GLOW, size: 0.035, transparent: true, opacity: 0.8 }));
    scene.add(stars);

    const resize = () => {
      const w = el.clientWidth || 1, h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      group.scale.setScalar(w < 640 ? 0.8 : 1);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(el);

    let mx = 0, my = 0, tx = 0, ty = 0, raf = 0, running = true, visible = true;
    const onMove = (e: PointerEvent) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = (e.clientY / window.innerHeight - 0.5) * 2; };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    const clock = new THREE.Clock();
    const frame = () => {
      const t = clock.getElapsedTime();
      tx += (mx - tx) * 0.05; ty += (my - ty) * 0.05;
      core.rotation.y = t * 0.18; core.rotation.x = t * 0.09;
      inner.rotation.y = -t * 0.25;
      ring1.rotation.z = t * 0.12; ring2.rotation.z = -t * 0.08;
      orbiters.forEach((m, i) => { const a = t * (0.5 + i * 0.15) + i * 2.1; m.position.set(Math.cos(a) * (2.5 + i * 0.3), Math.sin(a * 0.7) * 1.2, Math.sin(a) * (2.5 + i * 0.3)); });
      stars.rotation.y = t * 0.02;
      group.rotation.y = tx * 0.35; group.rotation.x = ty * 0.2;
      renderer.render(scene, camera);
      if (running && visible && !reduce) raf = requestAnimationFrame(frame);
    };
    frame();

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && running && !reduce) { cancelAnimationFrame(raf); clock.getDelta(); raf = requestAnimationFrame(frame); } });
    io.observe(el);
    const onVis = () => { running = !document.hidden; if (running && visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); } };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false; cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
      window.removeEventListener("pointermove", onMove); document.removeEventListener("visibilitychange", onVis);
      scene.traverse((o) => { const m = o as THREE.Mesh; m.geometry?.dispose(); const mat = m.material as THREE.Material | THREE.Material[] | undefined; if (Array.isArray(mat)) mat.forEach((x) => x.dispose()); else mat?.dispose(); });
      renderer.dispose(); renderer.domElement.remove();
    };
  }, [variant]);

  return <div ref={host} aria-hidden="true" className={className} />;
}
