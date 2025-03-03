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

## DOC

**https://www.typescriptlang.org/docs/**
**https://nodejs.org/docs/latest/api/**
**https://developer.mozilla.org/fr/search?q=.find&page=2**