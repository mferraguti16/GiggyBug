import { Pool } from 'pg'; // Importer le module pg pour se connecter à PostgreSQL

// Créer une instance de Pool pour gérer la connexion à la base de données
const pool = new Pool({
  user: process.env.DB_USER, // Utilisateur
  host: process.env.DB_HOST, // Hôte
  database: process.env.DB_NAME, // Nom de la base de données
  password: process.env.DB_PASSWORD, // Mot de passe
  port: parseInt(process.env.DB_PORT || '5432', 10), // Port (5432 par défaut)
});

// Exporter une méthode pour exécuter des requêtes SQL
export default {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
