import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PLACEHOLDER } from "@/lib/site-config";

export const metadata: Metadata = { title: "Politique de confidentialité — NexWeb" };

export default function Page() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="À ce stade, le site ne collecte aucune donnée personnelle via ses formulaires, qui ne sont pas actifs. Ce texte devra être mis à jour à l'activation des demandes, comptes et e-mails."
      sections={[
        { title: "Responsable du traitement", body: [`NexWeb — ${PLACEHOLDER}. Contact pour toute question sur les données personnelles : ${PLACEHOLDER}.`] },
        { title: "Données susceptibles d'être collectées", body: ["Lorsque les formulaires et comptes seront activés : identité, coordonnées, informations sur le projet, fichiers transmis, échanges avec l'agence. Les finalités, bases légales et durées de conservation exactes seront précisées ici."] },
        { title: "Vos droits", body: ["Conformément à la réglementation applicable (RGPD), vous disposez notamment d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité de vos données, ainsi que du droit d'introduire une réclamation auprès de l'autorité de contrôle compétente."] },
        { title: "Sécurité", body: ["Des mesures techniques et organisationnelles seront mises en œuvre pour protéger les données traitées. Le détail sera complété lors de la mise en service des traitements."] },
        { title: "Destinataires et sous-traitants", body: [`Liste des prestataires (hébergement, e-mails, paiement) : ${PLACEHOLDER}.`] },
      ]}
    />
  );
}
