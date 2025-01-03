### Arborescence du projet ###

GIGGYBUG/
│
├── backend/   
│   ├── dist-backend/           # Fichiers compilés du backend prêts pour la production.
│   ├── node_modules/           # Dépendances backend installées via npm.
│   ├── src/                    # Code source du backend.
│   │   ├── config/             # Configuration du backend (connexion BDD, variables d'environnement, etc.).
│   │   ├── controllers/        # Logique pour gérer les requêtes HTTP et les réponses.
│   │   ├── models/             # Modèles de données (structure et interactions avec la BDD).
│   │   ├── routes/             # Définition des routes API du backend.
│   │   ├── .env                # Variables d'environnement (non versionnées, sensibles).
│   │   ├── app.ts              # Initialisation principale de l'application backend.
│   │   ├── db.ts               # Gestion des connexions à la base de données.
│   │   ├── index.ts            # Point d'entrée principal du backend.
│   ├── package-lock.json       # Fichier pour garantir des installations cohérentes des dépendances.
│   ├── package.json            # Déclaration des dépendances, scripts et métadonnées backend.
│   ├── tsconfig.json           # Configuration TypeScript spécifique au backend.
│
├── frontend/     
│   ├── dist-frontend/          # Fichiers compilés du frontend prêts pour la production.
│   ├── node_modules/           # Dépendances frontend installées via npm.
│   ├── public/                 # Fichiers statiques accessibles par le navigateur (favicon, images, etc.).
│   ├── src/                    # Code source du frontend.
│   │   ├── assets/             # Ressources statiques (images, logos, icônes, etc.).
│   │   │   ├── logo_{0...5}    # Variantes du logo.
│   │   │   ├── react.svg       # Exemple d'asset spécifique.
│   │   ├── App.css             # Styles globaux de l'application frontend.
│   │   ├── App.tsx             # Composant principal de l'application React.
│   │   ├── index.css           # CSS pour la page d'entrée.
│   │   ├── main.tsx            # Point d'entrée de l'application React.
│   │   ├── vite-env.d.ts       # Déclarations de types pour l'environnement Vite.
│   ├── eslint.config.js        # Configuration d'ESLint pour analyser et corriger le code frontend.
│   ├── index.html              # Fichier HTML principal du frontend.
│   ├── package-lock.json       # Fichier pour garantir des installations cohérentes des dépendances.
│   ├── package.json            # Déclaration des dépendances, scripts et métadonnées frontend.
│   ├── README.front.md         # Documentation dédiée au frontend.
│   ├── tailwind.config.js      # Configuration de Tailwind CSS pour personnaliser les styles.
│   ├── tsconfig-front.app.json # Configuration TypeScript dédiée au frontend.
│   ├── tsconfig.json           # Configuration TypeScript globale pour le frontend.
│   ├── tsconfig.node.json      # Configuration TypeScript pour les modules Node.js.
│   ├── vite.config.ts          # Configuration de Vite (outil de développement frontend).
│
├── .gitignore                  # Liste des fichiers/dossiers à ignorer par Git.
├── index.js                    # (Optionnel) Point d'entrée global du projet en JavaScript.
├── index.ts                    # (Optionnel) Point d'entrée global du projet en TypeScript.
├── jsconfig.json               # Configuration des chemins et types JavaScript (si nécessaire).
├── package-lock.json           # Fichier pour des installations cohérentes de dépendances globales.
├── package.json                # Déclaration des dépendances, scripts et métadonnées globales.
└── README.md                   # Documentation générale du projet.

### Dependency, module, parser, plugging ###

1. **dotenv** : Charger les variables d'environnement depuis le fichier `.env`.
  Exemple d'utilisation (dans app.ts) :
    import dotenv from 'dotenv';
    dotenv.config();
  Installation :
    npm install dotenv

2. **TypeScript** : Compile le code TypeScript en JavaScript.
  npm install -D typescript
  **ts-node** : Permet d'exécuter directement du TypeScript sans avoir besoin de le compiler manuellement.
  npm install -D ts-node
  **@types/node** : Fournit des types pour Node.js afin d'améliorer l'expérience de développement.
  npm install -D @types/node

## ESLint ##
  npm install eslint 
  **@typescript-eslint/parser** : Installer le parser TypeScript
     Un parser est un outil qui transforme le code source TypeScript et le convertit en une structure que l'outil de linting (ESLint) peut comprendre et analyser.
  **@typescript-eslint/eslint-plugin** : Installer
  **eslint-plugin-react** : Installer
  **eslint-plugin-react-hooks**
  **--save-dev** 
**initialize the eslint file**
 npx eslint --init
**launch ESLint on my project** : npx eslint . (or repo-to-check/)
    will check all files of the current repository
## Lints and fixes files ##
  npm run lint

## Compiles for development ##
  npm run serve
# Compiles and minifies (optimize) for production #
  npm run build

## Documentation ##
**https://www.typescriptlang.org/docs/**
**https://nodejs.org/docs/latest/api/**
**https://developer.mozilla.org/fr/search?q=.find&page=2**