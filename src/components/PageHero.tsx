import Scene3D from "./Scene3DLoader";

/** En-tête commun des pages internes : fond lumineux, mini scène 3D, titre dégradé. */
export default function PageHero({ eyebrow, title, accent, text }: { eyebrow: string; title: string; accent?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_80%_0%,rgba(37,99,235,.35),transparent),radial-gradient(40%_50%_at_0%_100%,rgba(59,130,246,.12),transparent)]" />
      <Scene3D variant="compact" className="pointer-events-none absolute -right-24 top-0 -z-10 h-full w-[70%] opacity-50 sm:right-0 sm:w-[45%] sm:opacity-80" />
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 inline-flex rounded-full border border-nw-glow/30 bg-nw-glow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-nw-glow">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
          {title} {accent && <span className="text-gradient">{accent}</span>}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg text-nw-gray">{text}</p>}
      </div>
    </section>
  );
}
