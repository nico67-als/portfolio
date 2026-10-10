# Portfolio — Nicolas Grasser

Portfolio de développeur front-end React : présentation, compétences, projets, parcours et
contact, sur une seule page.

Site en ligne : https://nicolas-grasser.vercel.app

## Stack

- React 19, Vite
- Tailwind CSS v4, React Icons
- ESLint (avec `eslint-plugin-jsx-a11y` pour l'accessibilité), Prettier
- Déploiement sur Vercel

## Lancer le projet en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

### Formulaire de contact

Le formulaire envoie les messages via [Formspree](https://formspree.io). Copier `.env.example`
en `.env.local` et renseigner l'identifiant du formulaire (la partie après `/f/` dans l'URL
Formspree). Sur Vercel, déclarer la même variable dans les réglages du projet.

```bash
VITE_FORMSPREE_ID=xxxxxxxx
```

Sans cette variable, l'envoi échoue et le site propose l'adresse e-mail à la place.

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
├── hooks/       section visible, défilement, fenêtres modales
└── sections/    sections de la page
```
