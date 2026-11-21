/**
 * VALEURS TEMPORAIRES — Phase 3.
 * Ces contenus seront remplacés par la base de données (Phase 6) et
 * modifiables depuis /administration. Aucune coordonnée ni information
 * légale n'est inventée : tout champ non renseigné est marqué "À renseigner".
 */
export const PLACEHOLDER = "À renseigner";

export const site = {
  name: "NexWeb",
  slogan: "Votre vision. Notre expertise.",
  contact: { email: PLACEHOLDER, phone: PLACEHOLDER, address: PLACEHOLDER, hours: PLACEHOLDER },
};

export const services = [
  { title: "Sites vitrines", text: "Une présence en ligne soignée pour présenter votre activité et convaincre." },
  { title: "Sites professionnels", text: "Des sites sur mesure, structurés pour votre image et votre référencement." },
  { title: "Sites e-commerce", text: "Une boutique claire et rapide pour vendre en ligne en toute confiance." },
  { title: "Plateformes personnalisées", text: "Des outils web adaptés à vos usages et à vos processus." },
  { title: "Refonte de sites", text: "Moderniser design, performances et contenus sans repartir de zéro." },
  { title: "Maintenance & hébergement", text: "Mises à jour, suivi, nom de domaine et hébergement, facturés séparément." },
];

export const plans = [
  { name: "Starter", price: "99 €", features: ["Jusqu'à 3 pages", "Design responsive", "Formulaire de contact", "Mise en page personnalisée"] },
  { name: "Business", price: "199 €", featured: true, features: ["Jusqu'à 6 pages", "Design personnalisé", "Formulaires avancés", "SEO de base", "Réseaux sociaux"] },
  { name: "Premium", price: "349 €", features: ["Jusqu'à 10 pages", "Animations personnalisées", "Fonctionnalités supplémentaires", "Optimisation des performances", "Accompagnement"] },
  { name: "Sur mesure", price: "Sur devis", features: ["Cahier des charges dédié", "Fonctionnalités spécifiques", "Accompagnement renforcé"] },
];

export const process = [
  { n: "01", title: "Échange", text: "Nous cernons votre projet, vos objectifs et vos contraintes." },
  { n: "02", title: "Devis", text: "Une proposition claire, avec hébergement, domaine et maintenance détaillés à part." },
  { n: "03", title: "Création", text: "Design, développement et points de validation réguliers." },
  { n: "04", title: "Livraison", text: "Tests, mise en ligne et accompagnement après publication." },
];

export const advantages = [
  { title: "Sur mesure", text: "Chaque site est pensé pour votre activité, pas un modèle recyclé." },
  { title: "Rapide et fluide", text: "Performances et accessibilité traitées dès la conception." },
  { title: "Tarifs lisibles", text: "Formules transparentes, frais annexes toujours distincts." },
  { title: "Suivi humain", text: "Un interlocuteur unique de la demande à la livraison." },
];
