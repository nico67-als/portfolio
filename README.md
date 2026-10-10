# Portfolio — Nicolas Grasser

Portfolio de développeur front-end React : présentation, compétences, projets, parcours et
contact, sur une seule page.

Site en ligne : à venir.

## Stack

- React 19, Vite
- Tailwind CSS v4
- ESLint (avec `eslint-plugin-jsx-a11y` pour l'accessibilité), Prettier
- Déploiement sur Vercel

## Lancer le projet en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

## Scripts

| Commande          | Rôle                             |
| ----------------- | -------------------------------- |
| `npm run dev`     | Serveur de développement         |
| `npm run build`   | Build de production dans `dist/` |
| `npm run preview` | Aperçu du build                  |
| `npm run lint`    | Vérification ESLint              |
| `npm run format`  | Formatage Prettier               |

## Structure

```
src/
├── assets/      images et icônes
├── components/  composants réutilisables
├── data/        contenus (projets, compétences, parcours)
└── sections/    sections de la page
```
