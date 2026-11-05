# Architecture Overview

## Project Structure
The project follows a feature-based architecture where each major domain/feature has its own directory in `src/features/`.

### Core Folders
- `src/app/`: Next.js App Router structure (Route Groups: (public), (auth), (dashboard)).
- `src/components/`: Global UI components.
  - `ui/`: Atomic shadcn/ui components.
  - `layout/`: Page layouts and navigational elements.
  - `shared/`: Reusable domain-agnostic components.
- `src/features/`: Domain-specific logic.
  - Each feature folder contains:
    - `actions/`: Server Actions for mutations.
    - `components/`: Feature-specific UI components.
    - `hooks/`: Feature-specific React hooks.
    - `schemas/`: Zod validation schemas.
    - `types/`: TypeScript definitions.
    - `tests/`: Unit and integration tests for the feature.
- `src/lib/`: Shared libraries and core utilities.
  - `db/`: Drizzle ORM configuration and schemas.
  - `auth/`: Auth.js (NextAuth) configuration.
  - `env.ts`: Validated environment variables.
  - `utils.ts`: General utility functions.
  - `logger.ts`: Pino logger instance.
- `src/config/`: Application configuration.
- `src/hooks/`: Global React hooks.
- `src/styles/`: Global styles and CSS variables.
- `src/types/`: Global TypeScript definitions.

## Architecture Rules
- **Server Components by Default**: Use Server Components unless a client-side interaction is required.
- **Data Flow**:
  - Read data in `queries` (Server Components/Actions).
  - Mutations via Server Actions, validated by Zod.
- **Uniform Action Results**: Every Server Action returns an `{ ok: true, data } | { ok: false, error }` object.
- **Absolute Imports**: Use `@/*` for all internal paths.
- **No Comments**: Code is self-explanatory via clean naming and structure.
