import { AlertTriangle } from "lucide-react";
import PageShell from "./PageShell";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export type LegalSection = { title: string; body: string[] };

export default function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <PageShell>
      <PageHero eyebrow="Informations légales" title={title} />
      <section className="mx-auto max-w-3xl px-5 pb-24">
        <div role="note" className="mb-10 flex gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>Document provisoire. Les mentions « À renseigner » doivent être complétées avec les informations réelles de l&apos;entreprise, et l&apos;ensemble relu par un professionnel du droit avant publication. {intro}</p>
        </div>
        <Reveal className="space-y-10">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-xl font-bold text-white">{s.title}</h2>
              {s.body.map((p, i) => <p key={i} className="mt-3 leading-relaxed text-nw-gray">{p}</p>)}
            </article>
          ))}
        </Reveal>
      </section>
    </PageShell>
  );
}
