import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { serviceDetails } from "@/lib/content";

export const metadata: Metadata = { title: "Nos services — NexWeb", description: "Sites vitrines, professionnels, e-commerce, plateformes, refonte, maintenance, hébergement et domaine." };

export default function Services() {
  return (
    <PageShell>
      <PageHero eyebrow="Services" title="Tout ce qu'il faut pour" accent="votre présence en ligne." text="De la création à la maintenance, NexWeb accompagne chaque étape de la vie de votre site." />
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <Reveal className="grid gap-5 md:grid-cols-2">
          {serviceDetails.map((s) => (
            <article key={s.slug} id={s.slug} className="glass scroll-mt-24 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-nw-glow/50">
              <h2 className="font-display text-2xl font-bold text-white">{s.title}</h2>
              <p className="mt-3 text-nw-gray">{s.text}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {s.points.map((p) => <li key={p} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-nw-glow" aria-hidden="true" />{p}</li>)}
              </ul>
            </article>
          ))}
        </Reveal>
      </section>
      <CtaBand />
    </PageShell>
  );
}
