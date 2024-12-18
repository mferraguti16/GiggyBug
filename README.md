giggy-bug/
│
├── backend/               # Partie back-end
│   ├── src/
│   │   ├── app.ts         # Fichier principal de l'application Node.js
│   │   ├── routes/        # Routes API
│   │   ├── controllers/   # Gestion des requêtes
│   │   ├── models/        # Gestion des données
│   │   └── config/        # Configuration (DB, etc.)
│   └── package.json       # Dépendances et scripts
│
├── frontend/              # Partie front-end
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── pages/         # Pages principales
│   │   ├── App.tsx        # Point d'entrée du front
│   │   └── index.tsx      # Initialisation de l'app React
│   └── package.json       # Dépendances et scripts
│
└── README.md              # Documentation du projet

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


## PROJECT STRUCTURE ##

/project-root
# giggybug
  /src
    /controllers
    /routes
    /models
    index.ts
  /dist (compilé)
  .gitignore (.gitignoré)
  package.json
  tsconfig.json

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