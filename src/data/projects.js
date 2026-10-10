export const filters = [
  'Tous',
  'React',
  'JavaScript',
  'API REST',
  'SEO',
  'Accessibilité',
]

// Les projets avec `details` ouvrent une fiche ; les autres affichent leurs liens.
// `image` : capture à ajouter dans src/assets (null = emplacement réservé).
export const projects = [
  {
    id: 'nina-carducci',
    name: 'Nina Carducci',
    hook: '100/100 sur les 4 scores Lighthouse',
    tags: ['SEO', 'Performance', 'Accessibilité', 'HTML/CSS'],
    image: null,
    github: 'https://github.com/nico67-als/projet-8_SEO',
    site: 'https://nico67-als.github.io/projet-8_SEO/',
    details: {
      subtitle:
        "Audit et optimisation SEO, performance et accessibilité d'un site de photographe",
      images: [
        { src: null, alt: "Page d'accueil du site de Nina Carducci" },
        {
          src: null,
          alt: 'Rapport Lighthouse : 100/100 en performance, accessibilité, bonnes pratiques et SEO',
        },
      ],
      sections: [
        {
          title: 'Contexte',
          text: "Nina Carducci, photographe à Bordeaux, avait un site lent et mal référencé : 74 en performance, 68 en accessibilité et 73 en SEO sur Lighthouse, avec une image principale qui mettait 16,2 s à s'afficher (LCP). La mission : l'optimiser sans toucher au design.",
        },
        {
          title: 'Objectifs',
          text: 'Dépasser 90/100 sur Lighthouse en performance, SEO et accessibilité, et améliorer la visibilité locale de la photographe.',
        },
        {
          title: 'Stack technique',
          text: 'HTML5, CSS3, Bootstrap, jQuery, Schema.org, Open Graph. Outils : Lighthouse, WAVE, test des résultats enrichis de Google, GitHub Pages.',
        },
        {
          title: 'Compétences développées',
          text: "J'ai mené l'audit, puis priorisé les corrections par impact : images en WebP redimensionnées et chargées en différé, HTML sémantique, données structurées pour le référencement local. J'ai aussi corrigé un contraste de 2,12:1 en le passant à 9,87:1.",
        },
        {
          title: 'Résultats et impact',
          text: 'Les quatre catégories Lighthouse atteignent 100/100 sur le site en ligne, et le LCP passe de 16,2 s à 0,7 s. WAVE ne relève aucune erreur, et le test des résultats enrichis de Google valide deux éléments : commerce local et organisation.',
        },
        {
          title: "Perspectives d'amélioration",
          text: 'Supprimer le CSS et le JS Bootstrap inutilisés, remplacer le plugin jQuery de la galerie, et créer une image de partage au format 1200×630.',
        },
      ],
    },
  },
  {
    id: 'argent-bank',
    name: 'Argent Bank',
    hook: 'Espace client bancaire en React et Redux',
    tags: ['React', 'Redux', 'API REST'],
    image: null,
    github: 'https://github.com/nico67-als/projet-10_argentbank',
    details: {
      subtitle:
        "Authentification, profil utilisateur et conception d'une API de transactions",
      images: [
        { src: null, alt: "Page profil d'un utilisateur connecté" },
        {
          src: null,
          alt: 'Extrait de la documentation Swagger des routes de transactions',
        },
      ],
      sections: [
        {
          title: 'Contexte',
          text: "Argent Bank, une banque en ligne, lance son application. Le projet avait deux phases : l'authentification et le profil, puis une proposition d'API pour les transactions.",
        },
        {
          title: 'Objectifs',
          text: "Connecter le front à une API existante, protéger les pages privées, permettre de modifier le pseudo et centraliser l'état avec Redux.",
        },
        {
          title: 'Stack technique',
          text: 'React 19, Vite, React Router, Redux Toolkit et SCSS côté front ; Node.js, Express et MongoDB (fournis) et Swagger côté API.',
        },
        {
          title: 'Compétences développées',
          text: "J'ai découpé le store en deux slices, la session et le profil, parce qu'ils n'ont pas le même cycle de vie. J'ai géré les appels asynchrones avec des thunks, le « Remember me » (localStorage ou sessionStorage) et la déconnexion sur une réponse 401. J'ai ensuite conçu six routes REST à partir de la maquette, en choisissant PATCH plutôt que PUT pour ne modifier qu'une partie d'une transaction. J'ai aussi proposé deux ajouts au-delà de la demande : un filtre par mois sur la même route, et une route qui liste les catégories.",
        },
        {
          title: 'Résultats et impact',
          text: 'La phase 1 est entièrement fonctionnelle, le fichier Swagger des transactions passe sans erreur dans Swagger Editor et a été validé en soutenance, et le poids des images a baissé de 80 % (220 Ko → 43 Ko).',
        },
        {
          title: "Perspectives d'amélioration",
          text: 'Afficher un message clair si le serveur est injoignable, remplacer Font Awesome par des icônes SVG, et implémenter les transactions côté front.',
        },
      ],
    },
  },
  {
    id: 'kasa',
    name: 'Kasa',
    hook: 'Application de location immobilière en React, avec routing et composants réutilisables',
    tags: ['React', 'React Router'],
    image: null,
    github: 'https://github.com/nico67-als/projet-7_kasa',
  },
  {
    id: 'sophie-bluel',
    name: 'Sophie Bluel',
    hook: "Portfolio d'architecte dynamique : galerie filtrée, connexion et ajout de projets via API",
    tags: ['JavaScript', 'API REST'],
    image: null,
    github: 'https://github.com/nico67-als/projet-6_sophie-bluel',
  },
  {
    id: '724-events',
    name: '724 Events',
    hook: "Débogage d'un site React existant, avec cahier de recettes et tests",
    tags: ['React', 'Débogage', 'Tests'],
    image: null,
    github: 'https://github.com/nico67-als/projet-9_724events',
  },
]
