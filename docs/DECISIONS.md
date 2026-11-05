# Decision: Drizzle ORM

**Context**: Choosing a database ORM for the project.
**Options**:
- Prisma: Well-known, great DX, but heavier runtime and slower migrations.
- Drizzle: Lightweight, "TypeScript-first", feels like writing SQL but with type safety.
**Decision**: Drizzle ORM.
**Rationale**:
- Better performance and smaller bundle size.
- Native TypeScript feel with excellent type inference.
- Simpler migration workflow.
- Align with "performance" and "TypeScript-first" goals in the project instructions.

**Action**: Initialize Drizzle and set up schema files in `src/lib/db`.
