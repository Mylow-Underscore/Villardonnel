# Sécurité du Projet

## En-têtes de Sécurité
Les en-têtes suivants sont configurés dans `next.config.ts` :
- **CSP (Content Security Policy)** : Protège contre les attaques XSS et injections.
- **HSTS (Strict-Transport-Security)** : Force la connexion HTTPS.
- **X-Content-Type-Options** : Empêche l'interprétation incorrecte du type de contenu.
- **X-Frame-Options** : Empêche l'affichage du site dans des frames (protection contre le Clickjacking).
- **Referrer-Policy** : Contrôle les informations de référence partagées.

## Gestion des Variables d'Environnement
Toutes les variables d'environnement sont validées au démarrage avec `@t3-oss/env-nextjs` et `Zod`.
- Le fichier de configuration est `src/lib/env.ts`.
- Les secrets ne sont jamais exposés au client (`NEXT_PUBLIC_`).

## Validation des Entrées
Chaque action serveur et formulaire utilise `Zod` pour la validation stricte des données entrantes.

## Cookies & CSRF
- Les cookies sensibles utilisent les attributs `HttpOnly`, `Secure`, et `SameSite`.
- La protection CSRF native de Next.js est activée pour les Server Actions.

## RGPD
- Une bannière de consentement aux cookies est prévue pour les traceurs.
- Les pages de mentions légales et de politique de confidentialité sont prévues dans le schéma de navigation.
