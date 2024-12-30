## Arborescence du projet ##

GIGGYBUG/
│
├── 1 - dist/                    # Dossier pour les fichiers compilés, destinés à être utilisés en prod ou pour le build global.
│
├── 2 - backend/             
│   ├── node_modules/            # Dossier des dépendances backend, installé via npm.
│   ├── src/                     # Dossier source du backend contenant toute la logique du serveur.
│   │   ├── config/              # Fichiers de configuration pour l'application backend (e.g: connexion à la base de données).
│   │   ├── controllers/         # Gestion des requêtes HTTP et des réponses dans l'API.
│   │   ├── models/              # Modèles représentant les données utilisées par l'application (par exemple, pour la base de données).
│   │   ├── routes/              # Définit les routes HTTP pour l'API backend.
│   │   ├── .env                 # Fichier de configuration pour les variables d'environnement, telles que les clés d'API ou les informations sensibles.
│   │   ├── app.ts               # Fichier principal où l'application backend est initialisée.
│   │   ├── db.ts                # Fichier de gestion de la base de données (connexion, requêtes, etc.).
│   │   ├── index.ts             # Point d'entrée du backend.
│   ├── package-lock.json        # Fichier généré automatiquement par npm pour garantir des installations reproductibles des dépendances.
│   ├── package.json             # Fichier qui contient les dépendances, scripts et informations générales sur l'application backend.
│   ├── tsconfig.json            # Configuration TypeScript spécifique au backend, définissant les options du compilateur.
│
├── 3 - frontend/            
│   ├── node_modules/            # Dossier des dépendances frontend, installé via npm.
│   ├── public/                  # Dossier pour les fichiers publics accessibles par le navigateur (images, favicon, etc.).
│   ├── src/                     # Contient le code source du frontend.
│   │   ├── assets/              # Dossier pour les assets utilisés par l'application (logos, images, etc.).
│   │   │   ├── logo_{0...5}     # Logo de l'application, avec plusieurs variantes.
│   │   │   ├── react.svg        # Logo ou image liée à React.
│   │   ├── App.css              # Fichier CSS global pour l'application frontend.
│   │   ├── App.tsx              # Composant principal de l'application frontend en React.
│   │   ├── index.css            # Fichier CSS pour la mise en forme de la page d'entrée.
│   │   ├── main.tsx             # Point d'entrée de l'application React.
│   │   ├── vite-env.d.ts        # Déclarations de types pour Vite (outil de développement frontend).
│   ├── eslint.config.js         # Configuration d'ESLint pour le linting du code frontend.
│   ├── index.html               # Fichier HTML principal pour l'application frontend.
│   ├── package-lock.json        # Fichier généré automatiquement par npm pour garantir des installations reproductibles des dépendances frontend.
│   ├── package.json             # Fichier contenant les dépendances, scripts et informations générales sur l'application frontend.
│   ├── README.front.md          # Documentation spécifique au frontend.
│   ├── tailwind.config.js       # Configuration de Tailwind CSS pour personnaliser les styles frontend.
│   ├── tsconfig.app.json        # Configuration TypeScript pour le code frontend.
│   ├── tsconfig.json            # Fichier de configuration TypeScript pour le projet complet.
│   ├── tsconfig.node.json       # Configuration TypeScript pour les fichiers Node.js.
│   ├── vite.config.js           # Configuration de Vite, l'outil de bundling pour le frontend.
│   ├── node_modules             # Un autre dossier node_modules qui contient les dépendances liées au frontend.
│   │   ├── .bin                 # Scripts binaires associés aux dépendances frontend.
│   │   ├── @types               # Types TypeScript pour les dépendances utilisées (par exemple, React).
│   │   ├── csstype              # Types associés à CSS-in-JS ou à des propriétés CSS.
│   │   ├── typescript           # Dossier contenant le package TypeScript et ses dépendances.
│   │   ├── .package-lock.json   # Fichier généré pour le contrôle des versions des dépendances.
├── .gitignore                   # Fichier listant les fichiers et dossiers à ignorer par Git (ex. : node_modules).
├── index.js                     # Point d'entrée global du projet, probablement pour configurer l'application.
├── index.ts                     # Point d'entrée TypeScript (alternative à index.js).
├── jsconfig.json                # Configuration pour JavaScript dans l'éditeur, probablement utilisé pour gérer les chemins d'importation.
├── package-lock.json            # Fichier généré automatiquement par npm pour garantir une installation cohérente des dépendances.
├── package.json                 # Fichier contenant les dépendances, les scripts et d'autres informations essentielles sur le projet.
└── README.md                    # Documentation générale du projet, expliquant son but et comment l'utiliser.

## Dépendances ##

npm install dotenv 
  : pour pouvoir read les var d'env. du .env

  dans mon file app.ts : 
  import dotenv from 'dotenv';
    je call mon module dotenv
  dotenv.config(); 
    for charging les ver. d'env.

npm install -D typescript ts-node @types/node

  typescript : 
    Compile le code TypeScript

  : ts-node : 
    permet d'exécuter directement du TypeScript sans avoir à le compiler manuellement.
      Quand tu écris un fichier TypeScript (.ts), normalement, tu dois :
      Compiler ce fichier avec tsc (TypeScript Compiler) pour le convertir en JavaScript.
      Exécuter le fichier JavaScript résultant avec node.

  @types/node : 
    fournit les définitions de types pour Node.js.
      ce code TypeScript sans installer @types/node :
      console.log(process.env.NODE.ENV);
        err: Cannot find name 'process'

## TS SETUP ##
sudo npm i -g typescript (don't do tsc here)

# tsc -v
check version 

# create your index.ts
touch index.ts


## VUE SETUP ##
npm install -g @vue/cli

# Create a project #
vue create my-project

# Project setup #
npm install

# Compiles for development #
npm run serve

# Compiles and minifies (optimize) for production #
npm run build

## Lints and fixes files ##
npm run lint

# INSTALL ESLint #
npm install eslint eslint-plugin-vue --save-dev
# Analyse code pour détecter erreurs de style, de syntaxe et éventuellement les corriger automatiquement #

# Customize configuration #
See [Configuration Reference](https://cli.vuejs.org/config/).

## App.vue ##
kind of html but optimize for vue
## assets#
logo.png
# to change for a beetle of my own drawings #
styles.css
# move css elements from App.vue to his own file (style.css) for a better lisibility #
# call the file in my App.vue #

App.vue => logic and structure of my component
styles.css => styles of my component

Doc du projet:

# overflow hidden
Ce style masquera toute partie du contenu qui dépasse les dimensions du conteneur. En d'autres termes, si le contenu est plus grand que le conteneur, la partie excédentaire sera cachée. Cela peut être utile pour créer des effets d'animation propres et éviter les débordements non désirés.

Pour les Animations : Si ton animation fait bouger des éléments en dehors du conteneur et que tu souhaites garder un design propre sans que ces parties ne soient visibles, overflow: hidden; est utile.

Pour les Découpes : Si tu veux que certaines parties de tes éléments (comme des images ou des boîtes de texte) soient visibles uniquement dans un certain espace, utiliser overflow: hidden; peut t'aider à créer cet effet de découpe.

├── frontend/ 
npm create vite@latest frontend --template react
cd frontend
npm install

checkPort.js : command to launch the listening event : node check-port.js 
Le port 5432 est libre.