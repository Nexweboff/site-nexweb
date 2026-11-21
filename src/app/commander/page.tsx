import Link from "next/link";
export const metadata = { title: "Commander un site — NexWeb" };
export default function Commander() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-white">Commander un site</h1>
        <p className="mt-4 max-w-md text-nw-gray">Le parcours de commande n&apos;est pas encore disponible : il sera développé en Phase 4. Aucune demande ne peut être enregistrée pour le moment.</p>
        <Link href="/" className="mt-8 inline-flex min-h-11 items-center text-nw-glow hover:underline">← Retour à l&apos;accueil</Link>
      </div>
    </main>
  );
}
