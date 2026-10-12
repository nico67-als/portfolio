import {
  LuAccessibility,
  LuBug,
  LuGauge,
  LuPlug,
  LuSearch,
} from 'react-icons/lu'
import {
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNotion,
  SiReact,
  SiRedux,
  SiSass,
  SiSwagger,
  SiVite,
} from 'react-icons/si'

// Chaque compétence est prouvée par au moins un projet.
export const skillGroups = [
  {
    title: 'Front-end',
    items: [
      {
        name: 'HTML5, CSS3, responsive',
        proof: 'Nina Carducci, Kasa',
        icon: SiHtml5,
      },
      {
        name: 'JavaScript',
        proof:
          "Sophie Bluel : galerie filtrée, connexion et ajout de projets via l'API",
        icon: SiJavascript,
      },
      {
        name: 'React, React Router',
        proof: 'Kasa, Argent Bank',
        icon: SiReact,
      },
      {
        name: 'Redux Toolkit',
        proof:
          'Argent Bank : store en deux slices, appels asynchrones avec des thunks',
        icon: SiRedux,
      },
      {
        name: 'Sass (SCSS), Tailwind CSS',
        proof: 'Argent Bank (SCSS), ce portfolio (Tailwind)',
        icon: SiSass,
      },
      {
        name: 'API REST, authentification par jeton',
        proof: 'Sophie Bluel, Argent Bank',
        icon: LuPlug,
      },
    ],
  },
  {
    title: 'Qualité web',
    items: [
      {
        name: 'Performance',
        proof: 'Nina Carducci : LCP de 16,2 s à 0,7 s',
        icon: LuGauge,
      },
      {
        name: 'Accessibilité',
        proof: 'Nina Carducci : 100/100 sur Lighthouse, 0 erreur sur WAVE',
        icon: LuAccessibility,
      },
      {
        name: 'SEO',
        proof: 'Nina Carducci : données structurées validées par Google',
        icon: LuSearch,
      },
      {
        name: 'Débogage et tests',
        proof: '724 Events : Jest et React Testing Library',
        icon: LuBug,
      },
    ],
  },
  {
    title: 'Outils et méthodes',
    items: [
      { name: 'Git, GitHub', proof: 'Tous les projets', icon: SiGit },
      {
        name: 'Vite, Vercel, GitHub Pages',
        proof:
          'Argent Bank et ce portfolio (Vite), Nina Carducci (GitHub Pages)',
        icon: SiVite,
      },
      {
        name: 'Swagger',
        proof: 'Argent Bank : six routes de transactions documentées',
        icon: SiSwagger,
      },
      {
        name: 'Agile Scrum, Notion',
        proof:
          'Menu Maker et ce portfolio : user stories, story points, sprints',
        icon: SiNotion,
      },
    ],
  },
  {
    title: 'Savoir-être',
    items: [
      {
        name: 'Rigueur',
        proof:
          "Armée de l'air ; chaque optimisation de Nina Carducci mesurée avant et après",
      },
      {
        name: 'Adaptabilité',
        proof: 'Cinq opérations extérieures, puis une reconversion complète',
      },
      {
        name: 'Apprentissage rapide',
        proof: 'Du HTML à React et Redux en six mois de formation',
      },
      {
        name: 'Autonomie',
        proof: 'Formation à distance, travail planifié en sprints',
      },
      {
        name: 'Force de proposition',
        proof: 'Argent Bank : deux routes ajoutées au-delà de la demande',
      },
      {
        name: 'Veille technologique',
        proof: 'Feedly : 14 sources suivies sur deux axes (projet Menu Maker)',
      },
    ],
  },
]
