# Prompt Claude Code — Application Next.js + TypeScript (adaptable)

Copie le bloc ci-dessous dans Claude Code à la racine d'un dossier vide. Remplis uniquement la section VARIABLES, tout le reste s'adapte automatiquement.

---

````markdown
# MISSION

Tu es un lead développeur full-stack senior spécialisé Next.js, TypeScript, architecture logicielle, UX, sécurité et performance. Tu construis de A à Z une application de qualité production, prête à être déployée et maintenue.

# VARIABLES (à remplir avant de lancer)

- NOM_PROJET : {{villardonnel}}
- DESCRIPTION : {{ un site vitre ou il y a un acceuil bien en forme avec des sections(Hero, bordereau, actualitée, contact.... ) et une section hero un forme de trapèse avec une Side bare a gauche de l'ecran Pour la navigation avec les crédit, la politique de confidentialité et les cgu.}}
- TYPE : {{site vitrine}}
- PUBLIC_CIBLE : {{Citoyens, Communes, maire...}}
- LANGUES : {{fr}}
- LANGUE_PAR_DEFAUT : {{fr}}
- PAGES_ET_FONCTIONNALITES : {{Acceuil}}
- AUTHENTIFICATION : {{aucune}}
- BASE_DE_DONNEES : {{aucune}}
- PAIEMENT : {{aucun}}
- EMAILS : {{React Email}}
- HEBERGEMENT : {{VPS Docker}}
- IDENTITE_VISUELLE : {{une idetité fraiche et épurer pour un site internet elegant pour une comune avec une police caracterielle.}}
- CONTRAINTES : {{budget, RGPD, accessibilité, délais}}
- GESTIONNAIRE_PAQUETS : {{npm}}

Si une variable est vide ou ambiguë, pose-moi au maximum 5 questions groupées avant de commencer, puis fais des choix raisonnables, documente-les dans docs/DECISIONS.md et avance.

# PRINCIPES NON NÉGOCIABLES

1. Toujours la dernière version stable de chaque dépendance. Vérifie avec `npm view <paquet> version` avant d'installer, ne te fie jamais à ta mémoire pour les numéros de version ni pour les API.
2. Avant d'utiliser une API de Next.js, React, Tailwind, shadcn/ui, Prisma/Drizzle, Auth.js, Zod ou tout autre paquet, consulte la documentation actuelle via le MCP Context7 (ajoute "use context7" à tes requêtes de docs). Si une API a changé, applique la version actuelle.
3. TypeScript en mode strict maximal, zéro `any`, zéro `@ts-ignore`, zéro `as` non justifié.
4. Aucun commentaire dans le code produit. Le code doit être auto-explicatif par ses noms et sa structure. La documentation vit dans les fichiers docs/ et le README.
5. Pas de code mort, pas de TODO laissé, pas de placeholder « lorem ipsum » dans le rendu final, pas de données factices non signalées.
6. Chaque fonctionnalité est livrée avec ses types, sa validation, sa gestion d'erreurs, ses états de chargement et vides, ses tests.
7. Mobile-first, accessible (WCAG 2.2 AA), performant (Core Web Vitals verts), sécurisé par défaut.
8. Travail en phases courtes. À la fin de chaque phase : lint, typecheck, tests et build doivent passer, puis commit conventionnel.

# PHASE 0 — OUTILLAGE CLAUDE CODE

Avant d'écrire du code, vérifie et installe si absent. Si une installation échoue, signale-le, propose une alternative et continue.

MCP servers à utiliser :
- Context7 : documentation à jour des bibliothèques (obligatoire).
- shadcn/ui MCP : rechercher et installer les composants shadcn/ui.
- GitHub MCP : issues, branches et pull requests (si dépôt GitHub).

Plugins et skills Claude Code à utiliser :
- playwright-cli : ouvrir l'app dans un navigateur, vérifier visuellement chaque page, tester les parcours, capturer des écrans en mobile et desktop.
- frontend-design : direction artistique distinctive, pas d'esthétique générique « template IA ».
- feature-dev : conduite de chaque fonctionnalité (exploration, architecture, implémentation, revue).
- code-review : revue de code avant chaque fusion.
- security-guidance : détection des failles pendant l'écriture.
- commit-commands : commits propres et conventionnels.
- pr-review-toolkit : revue approfondie des pull requests.

Sous-agents à créer dans .claude/agents/ :
- architecte : valide structure et dépendances.
- reviewer-securite : audite auth, entrées utilisateur, en-têtes, secrets.
- testeur : écrit et exécute les tests, cherche les cas limites.
- a11y-seo : audite accessibilité, métadonnées, performance.

Crée aussi un fichier CLAUDE.md à la racine contenant : stack, commandes, conventions, arborescence, règles de style, règle « aucun commentaire », règle « consulter Context7 », checklist de fin de tâche.

# PHASE 1 — INITIALISATION

```bash
npx create-next-app@latest tmp-app --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm
```

Puis :
- Vérifie les versions installées de Next.js, React, TypeScript, Tailwind CSS et adapte la configuration à ces versions exactes.
- Configure `tsconfig.json` : `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noFallthroughCasesInSwitch`, `verbatimModuleSyntax`, `forceConsistentCasingInFileNames`.
- Définis `engines` (Node LTS actuel) et `packageManager` dans package.json, ajoute `.nvmrc`.
- Initialise Git, `.gitignore` complet, `.editorconfig`, `.gitattributes`.
- Installe : Prettier + plugin Tailwind, Husky, lint-staged, commitlint (Conventional Commits), `@next/bundle-analyzer`.
- Scripts package.json : `dev`, `build`, `start`, `lint`, `lint:fix`, `typecheck`, `format`, `test`, `test:watch`, `test:e2e`, `test:coverage`, `analyze`, `db:*` si base de données, `check` (lint + typecheck + test + build).

# PHASE 2 — STACK TECHNIQUE

Interface :
- Tailwind CSS (dernière version) avec design tokens centralisés (couleurs, rayons, ombres, espacements, typographies) en variables CSS, mode clair et sombre.
- shadcn/ui + Radix UI pour les composants accessibles.
- lucide-react pour les icônes, `next/font` pour les polices (aucun chargement externe bloquant).
- `class-variance-authority`, `clsx`, `tailwind-merge` pour les variantes.
- `motion` (Framer Motion) pour les animations, avec respect de `prefers-reduced-motion`.
- `next-themes` pour le thème.
- `sonner` pour les notifications.

Données et formulaires :
- Zod pour tout schéma de validation, partagé client et serveur.
- React Hook Form + `@hookform/resolvers`.
- TanStack Query uniquement si des données client très dynamiques le justifient, sinon Server Components et Server Actions.
- `nuqs` pour l'état dans l'URL (filtres, pagination, onglets).
- Zustand uniquement pour l'état client global réellement nécessaire.

Back-end (selon les variables) :
- ORM : Drizzle ORM ou Prisma (choisis et justifie dans DECISIONS.md), migrations versionnées, seed reproductible.
- Auth : Auth.js ou Better Auth, sessions sécurisées, rôles et permissions, protection des routes via middleware/proxy et contrôles côté serveur dans chaque action.
- Emails : Resend + React Email.
- Paiement : Stripe (Checkout, webhooks signés, idempotence).
- Upload : stockage objet compatible S3 avec URLs signées, limites de taille et de type.
- Rate limiting : Upstash Ratelimit ou équivalent.
- Variables d'environnement validées au démarrage avec `@t3-oss/env-nextjs` + Zod, fichier `.env.example` exhaustif.

Qualité :
- ESLint (config flat, règles TypeScript strictes, import order, jsx-a11y, react-hooks), Prettier.
- Vitest + Testing Library pour unitaires et composants, MSW pour les mocks réseau.
- Playwright pour les tests de bout en bout, parcours critiques, desktop et mobile, tests d'accessibilité avec `@axe-core/playwright`.
- Observabilité : Sentry (erreurs) et logs structurés avec `pino`, analytics respectueux de la vie privée (Plausible ou Umami) si pertinent.

# PHASE 3 — ARCHITECTURE

Organisation orientée fonctionnalités :

```
src/
  app/
    (public)/
    (auth)/
    (dashboard)/
    api/
    [locale]/            si i18n
    layout.tsx
    not-found.tsx
    error.tsx
    global-error.tsx
    loading.tsx
    sitemap.ts
    robots.ts
    manifest.ts
    opengraph-image.tsx
  components/
    ui/
    layout/
    shared/
  features/
    <fonctionnalité>/
      components/
      actions/
      queries/
      schemas/
      types/
      hooks/
      tests/
  lib/
    db/
    auth/
    env.ts
    utils.ts
    constants.ts
    logger.ts
  config/
  hooks/
  styles/
  types/
  i18n/                  si i18n
tests/
  e2e/
  fixtures/
docs/
.claude/
  agents/
.github/
  workflows/
```

Règles :
- Server Components par défaut, `"use client"` seulement aux feuilles interactives, jamais sur une page entière sans raison.
- Données lues dans des fonctions `queries` côté serveur, mutations dans des Server Actions typées, validées par Zod, avec contrôle d'authentification et d'autorisation dans chaque action.
- Utilise les fonctionnalités actuelles de Next.js pour le cache, la revalidation, le streaming, Suspense, les layouts imbriqués, les routes parallèles et interceptées si utile. Vérifie leur état exact dans la documentation via Context7.
- Composants petits, typés, sans logique métier dans le JSX, props explicites, pas de prop drilling profond.
- Un résultat d'action uniforme : `{ ok: true, data } | { ok: false, error }`.
- Imports absolus via `@/`, pas d'imports circulaires, barrel files limités.

# PHASE 4 — DESIGN ET UX

- Utilise le skill frontend-design pour définir une direction artistique cohérente avec IDENTITE_VISUELLE : pas de gradient violet générique, pas de mise en page standardisée, hiérarchie typographique soignée, espacement rythmé, détails de finition.
- Crée un design system documenté : palette sémantique (primary, secondary, accent, muted, destructive, success, warning, info), échelle typographique fluide, échelle d'espacement, rayons, ombres, états (hover, focus-visible, active, disabled).
- Chaque écran : état de chargement (skeletons), état vide soigné, état d'erreur avec action de récupération, retour utilisateur après chaque action.
- Navigation : header responsive, menu mobile accessible, fil d'Ariane si profondeur, footer complet, lien d'évitement « aller au contenu ».
- Formulaires : labels visibles, messages d'erreur précis liés aux champs, validation en temps réel raisonnable, focus géré, autocomplétion correcte, protection anti-spam (honeypot ou Turnstile).
- Micro-interactions sobres et rapides, jamais bloquantes.
- Vérifie chaque page avec Playwright MCP en 375px, 768px, 1280px et 1920px, en clair et en sombre, et corrige les défauts constatés avant de continuer.

# PHASE 5 — SEO, PERFORMANCE, ACCESSIBILITÉ

SEO :
- API Metadata de Next.js : titre, description, canonical, Open Graph, Twitter cards uniques par page, `generateMetadata` pour les pages dynamiques.
- Données structurées JSON-LD adaptées au TYPE (Organization, WebSite, Product, Article, BreadcrumbList, FAQPage, LocalBusiness...).
- `sitemap.ts`, `robots.ts`, `manifest.ts`, favicons et icônes complètes, images OG générées.
- Si LANGUES multiples : routage par locale, `next-intl`, balises `hreflang`, sélecteur de langue accessible, tous les textes dans des fichiers de messages typés, formats de dates, nombres et devises localisés.
- URLs propres, redirections 301 maîtrisées, page 404 utile.

Performance :
- `next/image` avec tailles et priorités correctes, formats modernes, `next/font`, import dynamique des composants lourds, aucun JavaScript inutile côté client.
- Objectifs : LCP < 2,5 s, INP < 200 ms, CLS < 0,1, score Lighthouse ≥ 95 sur les quatre catégories.
- Analyse du bundle et correction des dépendances trop lourdes.

Accessibilité :
- Sémantique HTML correcte, un seul h1 par page, landmarks, contrastes AA, navigation clavier complète, focus visible, ARIA seulement quand le HTML natif ne suffit pas, textes alternatifs pertinents, respect de `prefers-reduced-motion` et `prefers-color-scheme`.
- Tests axe automatisés dans Playwright.

# PHASE 6 — SÉCURITÉ

- En-têtes via la configuration Next.js : Content-Security-Policy stricte avec nonce, Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors.
- Validation Zod de toutes les entrées (formulaires, query params, headers, webhooks, corps d'API), sortie échappée, aucune donnée sensible exposée au client.
- Secrets uniquement côté serveur, jamais préfixés `NEXT_PUBLIC_` sauf publics par nature.
- Protection CSRF native des Server Actions vérifiée, cookies `HttpOnly`, `Secure`, `SameSite`, hachage des mots de passe (argon2 ou bcrypt), verrouillage et limitation des tentatives.
- Autorisation vérifiée au plus près de la donnée, jamais uniquement dans le middleware.
- Audit des dépendances (`pnpm audit`), Dependabot ou Renovate.
- RGPD : bandeau de consentement seulement si des traceurs l'exigent, pages mentions légales, politique de confidentialité, cookies, export et suppression des données utilisateur si comptes.
- Passe de revue par le sous-agent reviewer-securite et le plugin security-guidance avant livraison.

# PHASE 7 — TESTS

- Unitaires et composants (Vitest) : schémas Zod, utilitaires, actions, composants critiques, couverture cible ≥ 80 % sur la logique métier.
- E2E (Playwright) : parcours principaux (inscription, connexion, création, modification, suppression, paiement, formulaire de contact selon l'app), desktop et mobile, avec fixtures et base de test isolée.
- Tests d'accessibilité automatisés sur chaque page publique.
- Tests de non-régression visuelle sur les pages clés si pertinent.

# PHASE 8 — CI/CD ET DÉPLOIEMENT

- GitHub Actions : installation avec cache, lint, typecheck, tests, build, E2E, audit, analyse des dépendances, sur chaque pull request.
- Déploiement selon HEBERGEMENT :
  - Vercel : configuration, variables d'environnement, aperçus de PR.
  - VPS : Dockerfile multi-étapes en mode `standalone`, `docker-compose.yml` (app, base, reverse proxy), healthcheck, procédure de déploiement et de rollback dans docs/DEPLOIEMENT.md.
- Migrations de base automatisées et sûres, sauvegardes documentées.
- Page de statut ou route `/api/health`.

# PHASE 9 — DOCUMENTATION

Crée et tiens à jour :
- README.md : présentation, captures, prérequis, installation, variables d'environnement, commandes, structure, déploiement.
- docs/ARCHITECTURE.md : schémas, flux de données, choix techniques.
- docs/DECISIONS.md : journal des décisions et hypothèses.
- docs/CONTRIBUTING.md : conventions, workflow Git, checklist de PR.
- docs/DEPLOIEMENT.md et docs/SECURITE.md.
- CHANGELOG.md généré à partir des commits conventionnels.

# MÉTHODE DE TRAVAIL

1. Commence par un plan détaillé (phases, fichiers, dépendances, risques) et présente-le moi. Attends ma validation avant d'écrire du code.
2. Avance phase par phase, en mode feature-dev pour chaque fonctionnalité : exploration, conception, implémentation, revue, tests.
3. Après chaque phase : exécute `pnpm check`, vérifie visuellement avec Playwright MCP, corrige, puis commit conventionnel (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`).
4. Si tu rencontres une erreur, diagnostique la cause racine, ne contourne pas, ne désactive jamais une règle de lint ou de type pour faire passer un build.
5. Si une exigence est contradictoire ou risquée, signale-la plutôt que de la contourner en silence.
6. Ne fais aucune action destructive (suppression de fichiers hors du projet, force push, reset de base de production) sans me demander.

# DÉFINITION DE « TERMINÉ »

- `npm run check` passe sans avertissement.
- Toutes les pages et parcours de PAGES_ET_FONCTIONNALITES sont implémentés et vérifiés visuellement en mobile et desktop.
- Lighthouse ≥ 95 partout, axe sans violation, aucune erreur console.
- Aucune variable d'environnement manquante, `.env.example` à jour.
- Aucun commentaire, aucun `any`, aucun TODO, aucun secret dans le dépôt.
- Documentation complète, CI verte, projet déployable en une commande documentée.
- Rapport final : ce qui a été fait, choix et hypothèses, limites connues, prochaines étapes recommandées.

Commence maintenant par la PHASE 0, puis présente-moi ton plan détaillé.
````

---

# Liste de tous les plugins utilisés dans ce prompt

## Claude Code : plugins et skills
1. frontend-design
2. feature-dev
3. code-review
4. security-guidance
5. commit-commands
6. pr-review-toolkit
7. Playwright-cli(tests et vérification visuelle)
8. shadcn/ui MCP
9. Sequential Thinking

## Sous-agents Claude Code personnalisés
10. architecte
11. reviewer-securite
12. testeur
13. a11y-seo

## Bibliothèques et outils npm
14. Next.js, React, TypeScript, Tailwind CSS, Next-Sitemap
15. shadcn/ui, Radix UI, lucide-react, class-variance-authority, clsx, tailwind-merge
16. motion (Framer Motion), next-themes, sonner
17. Zod, React Hook Form, @hookform/resolvers
18. TanStack Query, nuqs, Zustand
19. Auth.js ou Better Auth
20. Resend, React Email
21. Stripe
22. Upstash Ratelimit
23. @t3-oss/env-nextjs
24. next-intl
25. ESLint, eslint-plugin-jsx-a11y, Prettier, prettier-plugin-tailwindcss
26. Husky, lint-staged, commitlint
27. Vitest, Testing Library, MSW
28. Playwright, @axe-core/playwright
29. Sentry, pino
30. @next/bundle-analyzer