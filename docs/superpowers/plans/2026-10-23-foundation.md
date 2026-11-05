# Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish the project infrastructure, configuration, and design tokens.

**Architecture:** Initialize the Next.js project with strict TypeScript configurations, standardizing the folder structure and establishing the Drizzle ORM connection.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Drizzle ORM, Vitest, Playwright.

**Spec:** `prompt-claude-code-nextjs.md`

## Global Constraints

- Framework: Next.js 14+ (App Router)
- Language: TypeScript (Strict Mode)
- Styling: Tailwind CSS
- Component Library: shadcn/ui
- Architecture: Feature-based folder structure in `src/features/`
- Rule: No Comments (self-explanatory code)
- Rule: Use absolute imports `@/*`
- Rule: Uniform action results `{ ok: true, data } | { ok: false, error }`
- Requirement: Mobile-first, accessible (WCAG 2.2 AA)

## Review Focus

- **Missing Environment Variable**: App crashes on startup because a required variable from `.env.example` is missing.
- **Type Leak**: A server action returns a raw object instead of the uniform `{ ok, data/error }` format.
- **Import Path**: A file uses a relative path instead of the `@/*` absolute import.
- **Linting Violation**: A component uses an `any` type or a non-standard Tailwind class.
- **Accessibility**: A button or navigation element is not reachable via keyboard.

---

### Task 1: Project Initialization & Configuration

**Files:**
- Create: `package.json`, `tsconfig.json`, `.gitignore`, `.editorconfig`, `.gitattributes`, `.nvmrc`
- Modify: `next.config.ts`
- Test: `npm run build`

**Interfaces:**
- Produces: Standardized project structure for all subsequent tasks.

- [ ] **Step 1: Create project with Next.js boilerplate**

Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --turbopack --import-alias "@/*" --use-npm`

- [ ] **Step 2: Configure `tsconfig.json` with strict rules**

Ensure `strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`, `noImplicitOverride: true`, `noFallthroughCasesInSwitch: true`, `verbatimModuleSyntax: true`, `forceConsistentCasingInFileNames: true`.

- [ ] **Step 3: Install core dev tools**

Run: `npm install -D prettier prettier-plugin-tailwindcss husky lint-staged commitlint10 @next/bundle-analyzer`

- [ ] **Step 4: Configure Prettier and ESLint**

Create `.prettierrc`, `.eslintrc.json` (flat), and configure `lint-staged` in `package.json`.

- [ ] **Step 5: Run `npm run build` to verify setup**

Expected: SUCCESS (no errors).

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "chore: initial project setup and config"
```

### Task 2: Design Tokens & Global Styles

**Files:**
- Create: `src/styles/variables.css`, `src/lib/constants.ts`
- Modify: `src/app/globals.css`
- Test: Visual check of theme colors.

**Interfaces:**
- Produces: Centralized design tokens for UI components.

- [ ] **Step 1: Define design tokens in `src/styles/variables.css`**

Define primary, secondary, accent, muted, destructive, success, warning, and info colors. Define typography scales and spacing.

- [ ] **Step 2: Integrate tokens into `src/app/globals.css`**

Use `@layer base` to apply variables.

- [ ] **Step 3: Define constant values in `src/lib/constants.ts`**

Export all brand-specific constants (e.g., page titles, navigation links).

- [ ] **Step 4: Verify theme variables in browser**

Check that variables are correctly injected into the root.

- [ ] **Step 5: Commit**

```bash
git add src/styles/variables.css src/lib/constants.ts src/app/globals.css
git commit -m "feat: setup design tokens and global styles"
```

### Task 3: Drizzle ORM Initialization

**Files:**
- Create: `drizzle.config.ts`, `src/lib/db/schema.ts`, `src/lib/db/index.ts`
- Test: `npm run db:generate`

**Interfaces:**
- Produces: Database connection and schema definition.

- [ ] **Step 1: Create `drizzle.config.ts`**

Configure path to schema and output directory for migrations.

- [ ] **Step 2: Create `src/lib/db/index.ts`**

Initialize the Drizzle client.

- [ ] **Step 3: Define initial schema in `src/lib/db/schema.ts`**

Define basic tables (e.g., `users`, `posts` if applicable).

- [ ] **Step 4: Verify migration generation**

Run: `npx drizzle-kit generate`
Expected: SUCCESS (migration files created).

- [ ] **Step 5: Commit**

```bash
git add drizzle.config.ts src/lib/db/
git commit -m "feat: initialize drizzle ORM"
```
