# Villardonnel - Site Vitrine

Application web officielle pour la commune de Villardonnel.

## Description
Une plateforme vitrine élégante et performante, conçue pour informer les citoyens et les communes. Elle comprend une page d'accueil avec une identité visuelle "caractérielle", des sections dédiables (bordereau, actualités, contact), et une navigation simplifiée.

## Stack Technique
- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Composants**: shadcn/ui, Radix UI
- **Base de données**: Drizzle ORM
- **Authentification**: (Aucune / Optionnelle)
- **Emails**: Resend + React Email

## Installation & Développement

### Prérequis
- Node.js >= 20.10.0
- npm

### Installation
1. Cloner le dépôt :
   ```bash
   git clone <url-du-depot>
   cd villardonnel
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer les variables d'environnement :
   Copiez le fichier `.env.example` vers `.env` et remplissez les valeurs nécessaires.
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## Commandes Utiles
- `npm run dev` : Lancer le serveur de développement.
- `npm run build` : Générer le build de production.
- `npm run lint` : Lancer le linter.
- `npm run typecheck` : Vérifier les types TypeScript.
- `npm run format` : Formater le code avec Prettier.
- `npm run test` : Lancer les tests unitaires.
- `npm run test:e2e` : Lancer les tests Playwright.

## Architecture & Conventions
- **Structure**: Orientée fonctionnalités (`src/features/`).
- **Imports**: Utilisation d'imports absolus (`@/*`).
- **Zod**: Validation stricte de toutes les entrées.
- **No Comments**: Le code doit être auto-explicatif.
- **Actions**: Utilisation des Server Actions pour les mutations.

## Déploiement
Voir `docs/DEPLOIEMENT.md` pour les instructions de déploiement sur VPS via Docker.
