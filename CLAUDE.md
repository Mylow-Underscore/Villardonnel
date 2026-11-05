# Project Context & Config

## Architecture
- Feature-based folder structure in `src/features/`.
- Server Components by default.
- `ok: true, data` / `ok: false, error` uniform action results.

## Conventions
- **No Comments**: The code must be self-explanatory.
- **Context7**: Always consult Context7 for documentation before using new APIs.
- **Types**: Zero `any`, zero `@ts-ignore`.
- **Actions**: Use Server Actions for mutations, validated by Zod.
- **UI**: Mobile-first, accessible (WCAG 2.2 AA).
- **Commits**: Conventional Commits.

## Rules
- Every function must be typed.
- No dead code or TODOs.
- Use absolute imports `@/*`.
- Every feature must have: types, validation, error handling, loading/empty states, and tests.
- Follow the "Phase-by-Phase" development methodology.
- Lint, typecheck, and test before every commit.

## Guidance
- For deployment checklists, use the `deploy-guide` skill.
- For specific styling conventions, refer to the `style-guide` rules in `.claude/rules/style-guide.md`.