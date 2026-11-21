import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand({ title = "Un projet en tête ?", text = "Décrivez-nous votre besoin, nous revenons vers vous avec une proposition claire." }: { title?: string; text?: string }) {
  return (
    <section className="px-5 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-nw-glow/30 bg-nw-blue/10 px-6 py-16 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(59,130,246,.35),transparent)]" />
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-nw-gray">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/devis" className="glow-btn inline-flex min-h-12 items-center gap-2 rounded-full bg-nw-blue px-8 font-semibold text-white">Demander un devis <ArrowRight size={18} /></Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-8 font-semibold text-white hover:bg-white/5">Nous contacter</Link>
        </div>
      </div>
    </section>
  );
}
