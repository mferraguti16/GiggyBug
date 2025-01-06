import jwt from 'jsonwebtoken'; // cookie-based client-side session
import bcrypt from 'bcrypt'; // algo de cryptage (hash + sel)
import { Request, Response } from 'express'; // async need
import db from '../config/db.ts'; // Module pour gérer la connexion à PostgreSQL

/* Créer un utilisateur */
export async function createUser(email: string, password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hasher le mot de passe
    const result = await db.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, hashedPassword]
    );
    return result.rows[0]; // Retourne l'utilisateur créé (ID et email)
  } catch (err) {
    console.error('Erreur lors de la création de l’utilisateur:', err);
    throw new Error('Erreur lors de la création de l’utilisateur');
  }
}

/* Connexion d’un utilisateur */
export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    // Trouver l'utilisateur dans la base de données
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Créer un token JWT
    const token = jwt.sign(
      { userId: user.id, isAdmin: user.isadmin }, // Payload
      process.env.JWT_SECRET as string, // Clé secrète depuis un fichier .env
      { expiresIn: '1h' } // Durée de validité
    );

    res.json({ token });
  } catch (err) {
    console.error('Erreur lors de la connexion:', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
}

/* Déconnexion de l’utilisateur */
export function logout(req: Request, res: Response) {
  // Le token JWT n'est pas supprimé côté serveur, mais côté client
  res.status(200).json({ message: 'Déconnexion réussie' });
}

/* Récupérer les informations de l'utilisateur connecté */
export async function getMe(req: Request, res: Response) {
  try {
    const userId = req.user?.userId; // ID utilisateur depuis le middleware d'authentification

    const result = await db.query('SELECT id, email, isadmin FROM users WHERE id = $1', [userId]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json({
      userId: user.id,
      email: user.email,
      isAdmin: user.isadmin,
    });
  } catch (err) {
    console.error('Erreur lors de la récupération de l’utilisateur:', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
}

// => next test each endpoint with Postman//