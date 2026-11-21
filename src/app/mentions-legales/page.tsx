import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PLACEHOLDER } from "@/lib/site-config";

export const metadata: Metadata = { title: "Mentions légales — NexWeb" };

export default function Page() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Les informations d'identification de l'éditeur ne sont pas encore renseignées."
      sections={[
        { title: "Éditeur du site", body: [`Nom commercial : NexWeb.`, `Forme juridique : ${PLACEHOLDER}.`, `Dénomination ou nom de l'exploitant : ${PLACEHOLDER}.`, `Numéro d'immatriculation (SIRET) : ${PLACEHOLDER}.`, `Adresse : ${PLACEHOLDER}.`, `E-mail : ${PLACEHOLDER}. Téléphone : ${PLACEHOLDER}.`] },
        { title: "Directeur de la publication", body: [`${PLACEHOLDER}.`] },
        { title: "Hébergeur du site", body: [`Nom et coordonnées de l'hébergeur : ${PLACEHOLDER}.`] },
        { title: "Propriété intellectuelle", body: ["Les contenus de ce site (textes, visuels, logo, éléments graphiques) sont protégés. Toute reproduction sans autorisation préalable est interdite, sauf exceptions prévues par la loi."] },
        { title: "Responsabilité", body: ["L'éditeur s'efforce de fournir des informations exactes et à jour, sans pouvoir garantir l'absence d'erreur ou d'interruption du service."] },
      ]}
    />
  );
}
