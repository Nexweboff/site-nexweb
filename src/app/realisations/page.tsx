import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Nos réalisations — NexWeb" };

export default function Realisations() {
  return (
    <PageShell>
      <PageHero eyebrow="Réalisations" title="Notre portfolio" accent="arrive bientôt." text="Nous ne présentons que des projets réels, avec l'accord de nos clients." />
      <section className="mx-auto max-w-4xl px-5 pb-12">
        <div className="glass rounded-3xl p-10 text-center sm:p-16">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-nw-blue/15 text-nw-glow"><Sparkles aria-hidden="true" /></span>
          <h2 className="mt-6 font-display text-2xl font-bold text-white">Aucune réalisation publiée pour le moment</h2>
          <p className="mx-auto mt-3 max-w-xl text-nw-gray">Les projets (captures d&apos;écran, liens, descriptions) seront ajoutés ici dès qu&apos;ils pourront être présentés.</p>
        </div>
      </section>
      <CtaBand title="Soyons votre prochain projet" />
    </PageShell>
  );
}
