"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-nw-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Navigation principale">
        <Link href="/" aria-label="NexWeb, accueil"><Logo size={32} /></Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className="cursor-pointer text-sm text-nw-gray transition-colors hover:text-white">{l.label}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link href="/commander" className="glow-btn hidden min-h-11 cursor-pointer items-center rounded-full bg-nw-blue px-5 text-sm font-semibold text-white sm:inline-flex">Commander un site</Link>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full text-white md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="menu-mobile" className="border-t border-white/5 bg-nw-black px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} onClick={() => setOpen(false)} className="block min-h-11 py-3 text-base text-nw-gray hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
          <Link href="/commander" className="glow-btn mt-3 flex min-h-12 items-center justify-center rounded-full bg-nw-blue font-semibold text-white">Commander un site</Link>
        </div>
      )}
    </header>
  );
}
