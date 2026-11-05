# Procédure de Déploiement (VPS & Docker)

## Architecture de Déploiement
Le projet est déployé sur un VPS via Docker. L'architecture utilise :
- **Nginx** comme reverse proxy.
- **Docker Compose** pour orchestrer l'application Next.js et une base de données (si nécessaire).
- **Next.js Standalone Mode** pour une image Docker légère.

## Prérequis
- Un serveur VPS avec Docker et Docker Compose installés.
- Un nom de domaine pointant vers l'IP du serveur.
- Les clés d'API et variables d'environnement configurées dans le fichier `.env` du conteneur.

## Procédure de Déploiement
1. **Build de l'image** :
   ```bash
   docker-compose build
   ```
2. **Lancement des conteneurs** :
   ```bash
   docker-compose up -d
   ```
3. **Vérification du statut** :
   ```bash
   docker ps
   ```

## Procédure de Rollback
En cas de problème majeur, revenir à la version précédente :
1. Identifier l'ID du conteneur précédent (ou utiliser les tags).
2. Redémarrer avec l'image précédente : `docker-compose up -d <service_name>:<tag_precedent>`.

## Healthcheck
L'application expose un endpoint `/api/health` pour vérifier que le service est opérationnel.
Le Dockerfile et le docker-compose incluent un healthcheck basé sur cet endpoint.
