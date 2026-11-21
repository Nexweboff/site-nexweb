import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import UnavailableForm from "@/components/UnavailableForm";
import { quoteSteps } from "@/lib/content";

export const metadata: Metadata = { title: "Demander un devis — NexWeb" };

export default function Devis() {
  return (
    <PageShell>
      <PageHero eyebrow="Devis" title="Demandez votre" accent="devis personnalisé." text="Décrivez votre projet : nous vous répondrons avec une proposition détaillée." />
      <section className="mx-auto max-w-7xl px-5 pb-12">
        <Reveal className="grid gap-5 md:grid-cols-3">
          {quoteSteps.map((s) => (<div key={s.n} className="glass rounded-2xl p-7"><span className="font-display text-sm font-bold text-nw-glow">Étape {s.n}</span><h2 className="mt-3 font-display text-xl font-bold text-white">{s.title}</h2><p className="mt-2 text-sm text-nw-gray/90">{s.text}</p></div>))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <UnavailableForm
            notice="La demande de devis n'est pas encore active : aucune demande ne peut être enregistrée pour le moment. Le parcours complet sera disponible avec l'enregistrement des demandes."
            submitLabel="Envoyer la demande"
            fields={[
              { name: "nom", label: "Nom", required: true },
              { name: "prenom", label: "Prénom", required: true },
              { name: "email", label: "Adresse e-mail", type: "email", required: true },
              { name: "tel", label: "Téléphone", type: "tel", required: true },
              { name: "societe", label: "Entreprise (si applicable)" },
              { name: "type", label: "Type de site", type: "select", options: ["Vitrine", "Professionnel", "E-commerce", "Plateforme personnalisée", "Refonte"], required: true },
              { name: "formule", label: "Formule", type: "select", options: ["Starter", "Business", "Premium", "Sur mesure"], required: true },
              { name: "delai", label: "Délai souhaité" },
              { name: "description", label: "Description du projet", type: "textarea", required: true },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}
