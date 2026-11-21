import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site-config";

const legal = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/conditions-generales-de-vente", label: "Conditions générales de vente" },
  { href: "/politique-de-cookies", label: "Politique de cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-nw-black px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-nw-gray/80">{site.slogan} Création, développement, maintenance et hébergement de sites Internet.</p>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-nw-gray/80">
            <li>E-mail : {site.contact.email}</li>
            <li>Téléphone : {site.contact.phone}</li>
            <li>Adresse : {site.contact.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold text-white">Informations</h3>
          <ul className="mt-4 space-y-2 text-sm text-nw-gray/80">
            {legal.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            <li><Link href="/services" className="hover:text-white">Nos services</Link></li>
            <li><Link href="/devis" className="text-nw-glow hover:underline">Demander un devis</Link></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-xs text-nw-gray/60">© NexWeb. Coordonnées et mentions légales à renseigner depuis l&apos;administration.</p>
    </footer>
  );
}
