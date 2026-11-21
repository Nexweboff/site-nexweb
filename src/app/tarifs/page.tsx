import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { plans } from "@/lib/site-config";
import { extras, faq } from "@/lib/content";

export const metadata: Metadata = { title: "Nos tarifs — NexWeb", description: "Formules Starter, Business, Premium et sur mesure. Hébergement, domaine et maintenance facturés séparément." };

export default function Tarifs() {
  return (
    <PageShell>
      <PageHero eyebrow="Tarifs" title="Des formules" accent="claires et lisibles." text="Choisissez la formule adaptée à votre projet. Hébergement, nom de domaine et maintenance sont toujours facturés séparément." />
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <article key={p.name} className={`flex flex-col rounded-2xl p-7 ${p.featured ? "border border-nw-glow bg-nw-blue/10 shadow-[0_0_60px_-20px_rgba(59,130,246,.8)]" : "glass"}`}>
              <h2 className="font-display text-lg font-bold text-white">{p.name}</h2>
              <p className="mt-3 font-display text-4xl font-extrabold text-white">{p.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-nw-glow" aria-hidden="true" />{f}</li>)}
              </ul>
              <Link href="/devis" className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-white ${p.featured ? "glow-btn bg-nw-blue" : "border border-white/15 hover:bg-white/5"}`}>Demander un devis</Link>
            </article>
          ))}
        </Reveal>
      </section>
      <section className="bg-nw-night/50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Frais distincts</h2>
          <Reveal className="mt-10 grid gap-5 md:grid-cols-3">
            {extras.map((e) => (
              <div key={e.title} className="glass rounded-2xl p-7"><h3 className="font-display text-lg font-bold text-white">{e.title}</h3><p className="mt-2 text-sm text-nw-gray/90">{e.text}</p></div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Questions fréquentes</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
          {faq.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">{f.q}<ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
              <p className="mt-3 text-nw-gray">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </PageShell>
  );
}
