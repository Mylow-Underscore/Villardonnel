# Contributing to Villardonnel

## Conventions de Code
- **No Comments**: Le code doit être auto-explicatif. Les noms de fonctions et de variables doivent être clairs.
- **TypeScript**: Utilisation stricte. Aucun `any` ou `@ts-ignore` n'est toléré.
- **Imports**: Utilisation systématique des imports absolus `@/*`.
- **Server Actions**: Toutes les mutations doivent passer par des Server Actions validées par Zod.

## Workflow Git
1. **Branche** : Créer une branche pour chaque fonctionnalité ou correction (`feat/`, `fix/`, `chore/`, `docs/`, `test/`, `refactor/`).
2. **Commit** : Suivre les [Conventional Commits](https://www.conventionalcommits.org/).
3. **Review** : Chaque Pull Request doit passer les tests CI (lint, typecheck, build, tests).

## Checklist de PR
- [ ] Le code respecte la convention "No Comments".
- [ ] Les types sont stricts et complets.
- [ ] Les nouveaux composants UI utilisent les tokens de design définis.
- [ ] Les Server Actions incluent une gestion d'erreurs uniforme (`{ ok, data/error }`).
- [ ] Les tests unitaires et/ou E2E ont été ajoutés.
- [ ] L'accessibilité (WCAG 2.2 AA) a été vérifiée.
- [ ] La documentation a été mise à jour si nécessaire.

## Phase de Développement
Suivre la méthodologie "Phase-by-Phase" :
1. Exploration
2. Architecture
3. Implémentation
4. Revue
5. Tests
