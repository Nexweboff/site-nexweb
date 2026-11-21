import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PLACEHOLDER } from "@/lib/site-config";

export const metadata: Metadata = { title: "Conditions générales de vente — NexWeb" };

export default function Page() {
  return (
    <LegalPage
      title="Conditions générales de vente"
      intro="Aucune vente n'est encore possible en ligne. Les clauses ci-dessous sont une trame à compléter et à faire valider."
      sections={[
        { title: "Objet", body: ["Les présentes conditions encadrent les prestations de création, refonte, maintenance et hébergement de sites Internet proposées par NexWeb."] },
        { title: "Identification du vendeur", body: [`${PLACEHOLDER} (voir mentions légales).`] },
        { title: "Devis et commande", body: ["Toute prestation fait l'objet d'un devis détaillé. La commande est formée à l'acceptation du devis par le client."] },
        { title: "Prix et frais distincts", body: ["Les prix des formules sont indiqués sur la page Tarifs. L'hébergement, le nom de domaine et la maintenance sont facturés séparément, et détaillés dans le devis."] },
        { title: "Modalités de paiement", body: [`Échéances, moyens de paiement, pénalités de retard : ${PLACEHOLDER}.`] },
        { title: "Délais et livraison", body: [`Délais et modalités de validation : ${PLACEHOLDER}.`] },
        { title: "Droit de rétractation et résiliation", body: [`Conditions applicables selon la qualité du client (consommateur ou professionnel) : ${PLACEHOLDER}.`] },
        { title: "Responsabilité, droit applicable, litiges", body: [`${PLACEHOLDER}.`] },
      ]}
    />
  );
}
