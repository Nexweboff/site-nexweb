import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { values } from "@/lib/content";
import { process } from "@/lib/site-config";

export const metadata: Metadata = { title: "À propos — NexWeb" };

export default function APropos() {
  return (
    <PageShell>
      <PageHero eyebrow="À propos" title="Une agence" accent="tournée vers l'essentiel." text="NexWeb conçoit des sites Internet élégants, rapides et fiables, avec une relation simple et transparente." />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <Reveal className="grid gap-10 lg:grid-cols-2">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Notre mission</h2>
          <p className="text-lg text-nw-gray">Permettre à chaque professionnel de disposer d&apos;une présence en ligne à la hauteur de son activité : création, refonte, publication, maintenance et hébergement réunis chez un seul interlocuteur.</p>
        </Reveal>
      </section>
      <section className="bg-nw-night/50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Nos valeurs</h2>
          <Reveal className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (<div key={v.title} className="glass rounded-2xl p-7"><h3 className="font-display text-lg font-bold text-white">{v.title}</h3><p className="mt-2 text-sm text-nw-gray/90">{v.text}</p></div>))}
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Notre façon de travailler</h2>
        <Reveal className="mt-10 grid gap-5 md:grid-cols-4">
          {process.map((s) => (<div key={s.n} className="glass rounded-2xl p-7"><span className="font-display text-sm font-bold text-nw-glow">{s.n}</span><h3 className="mt-3 font-display text-xl font-bold text-white">{s.title}</h3><p className="mt-2 text-sm text-nw-gray/90">{s.text}</p></div>))}
        </Reveal>
      </section>
      <CtaBand />
    </PageShell>
  );
}
