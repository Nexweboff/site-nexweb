import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Politique de cookies — NexWeb" };

export default function Page() {
  return (
    <LegalPage
      title="Politique de cookies"
      intro="À ce jour, le site n'utilise aucun cookie de mesure d'audience ni de publicité. Ce texte devra être mis à jour si de tels outils sont ajoutés."
      sections={[
        { title: "Qu'est-ce qu'un cookie ?", body: ["Un cookie est un petit fichier enregistré sur votre appareil lors de la visite d'un site, pour mémoriser des informations."] },
        { title: "Stockage utilisé actuellement", body: ["Le site mémorise uniquement, le temps de votre session de navigation, le fait que l'animation d'introduction a déjà été jouée. Cette information reste sur votre appareil et n'est pas transmise."] },
        { title: "Futurs cookies", body: ["Lors de l'activation des comptes (espace client, administration), des cookies strictement nécessaires à la connexion seront utilisés. Tout cookie non essentiel (mesure d'audience, par exemple) ne sera déposé qu'avec votre consentement, via un module de gestion des choix."] },
        { title: "Gérer vos préférences", body: ["Vous pouvez à tout moment supprimer ou bloquer les cookies depuis les réglages de votre navigateur."] },
      ]}
    />
  );
}
