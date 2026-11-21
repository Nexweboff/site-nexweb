import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import UnavailableForm from "@/components/UnavailableForm";
import { site } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact — NexWeb" };

export default function Contact() {
  const items = [
    { Icon: Mail, label: "E-mail", value: site.contact.email },
    { Icon: Phone, label: "Téléphone", value: site.contact.phone },
    { Icon: MapPin, label: "Adresse", value: site.contact.address },
    { Icon: Clock, label: "Horaires", value: site.contact.hours },
  ];
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Parlons de" accent="votre projet." text="Les coordonnées de l'agence seront affichées ici dès qu'elles auront été renseignées." />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 lg:grid-cols-5">
        <ul className="space-y-4 lg:col-span-2">
          {items.map(({ Icon, label, value }) => (
            <li key={label} className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-nw-blue/15 text-nw-glow"><Icon size={20} aria-hidden="true" /></span>
              <div><p className="text-xs uppercase tracking-wider text-nw-gray/60">{label}</p><p className="text-white">{value}</p></div>
            </li>
          ))}
        </ul>
        <div className="glass rounded-2xl p-6 sm:p-8 lg:col-span-3">
          <UnavailableForm
            notice="Le formulaire de contact n'est pas encore actif : aucun message ne peut être envoyé pour le moment. Il sera activé avec le système d'e-mails."
            submitLabel="Envoyer le message"
            fields={[
              { name: "nom", label: "Nom", required: true },
              { name: "email", label: "Adresse e-mail", type: "email", required: true },
              { name: "sujet", label: "Objet", required: true },
              { name: "tel", label: "Téléphone", type: "tel" },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]}
          />
        </div>
      </section>
    </PageShell>
  );
}
