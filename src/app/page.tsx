import Link from "next/link";
import { ArrowRight, Check, Gauge, PenTool, ShieldCheck, Users } from "lucide-react";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import Scene3D from "@/components/Scene3DLoader";
import Reveal from "@/components/Reveal";
import { advantages, plans, process, services, site } from "@/lib/site-config";

const advIcons = [PenTool, Gauge, ShieldCheck, Users];

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-dvh items-center overflow-hidden px-5 pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(37,99,235,.35),transparent),radial-gradient(40%_40%_at_10%_90%,rgba(59,130,246,.15),transparent)]" />
          <HeroBackground />
          <Scene3D className="pointer-events-none absolute inset-y-0 right-[-20%] -z-0 w-[90%] opacity-60 sm:right-0 sm:w-[60%] sm:opacity-100" />
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="mb-5 inline-flex rounded-full border border-nw-glow/30 bg-nw-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-nw-glow">Agence digitale</p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Votre vision.<br /><span className="text-gradient">Notre expertise.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-nw-gray">NexWeb crée, publie et maintient des sites Internet élégants, rapides et pensés pour votre activité.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/commander" className="glow-btn inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-nw-blue px-7 font-semibold text-white">Commander un site <ArrowRight size={18} /></Link>
              <Link href="/tarifs" className="inline-flex min-h-12 cursor-pointer items-center rounded-full border border-white/15 px-7 font-semibold text-white transition-colors hover:bg-white/5">Voir les tarifs</Link>
            </div>
          </div>
        </section>

        {/* PRÉSENTATION */}
        <section id="presentation" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24">
          <Reveal className="grid gap-10 lg:grid-cols-2">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Une agence, de l&apos;idée à la mise en ligne.</h2>
            <p className="text-lg text-nw-gray">NexWeb prend en charge la création, le développement, la refonte, la publication, la maintenance et l&apos;hébergement de votre site, ainsi que la configuration de votre nom de domaine. Un seul interlocuteur, un processus clair.</p>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-20 bg-nw-night/50 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Nos services</h2>
            <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-nw-glow/50">
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-nw-gray/90">{s.text}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* TARIFS */}
        <section id="tarifs" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Nos tarifs</h2>
          <p className="mt-4 max-w-2xl text-nw-gray">Hébergement, nom de domaine et maintenance sont facturés séparément.</p>
          <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <article key={p.name} className={`rounded-2xl p-7 ${p.featured ? "border border-nw-glow bg-nw-blue/10 shadow-[0_0_60px_-20px_rgba(59,130,246,.8)]" : "glass"}`}>
                <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-3 font-display text-4xl font-extrabold text-white">{p.price}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-nw-glow" aria-hidden="true" />{f}</li>)}
                </ul>
              </article>
            ))}
          </Reveal>
        </section>

        {/* RÉALISATIONS */}
        <section id="realisations" className="scroll-mt-20 bg-nw-night/50 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Nos réalisations</h2>
            <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-white/15 text-center text-sm text-nw-gray/70">
                  Réalisation à ajouter<br />depuis l&apos;administration
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* AVANTAGES */}
        <section className="mx-auto max-w-7xl px-5 py-24">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Pourquoi NexWeb</h2>
          <Reveal className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => {
              const Icon = advIcons[i];
              return (
                <div key={a.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-nw-blue/15 text-nw-glow"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-nw-gray/90">{a.text}</p>
                </div>
              );
            })}
          </Reveal>
        </section>

        {/* PROCESSUS */}
        <section id="processus" className="scroll-mt-20 bg-nw-night/50 px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Notre processus</h2>
            <Reveal className="mt-12 grid gap-5 md:grid-cols-4">
              {process.map((s) => (
                <div key={s.n} className="glass rounded-2xl p-7">
                  <span className="font-display text-sm font-bold text-nw-glow">{s.n}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-nw-gray/90">{s.text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-nw-glow/30 bg-nw-blue/10 px-6 py-16 text-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(59,130,246,.35),transparent)]" />
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Prêt à lancer votre site ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-nw-gray">{site.slogan}</p>
            <Link href="/commander" className="glow-btn mt-8 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-nw-blue px-8 font-semibold text-white">Commander un site <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
