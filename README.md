# JumaTech Solutions

Modern full-stack website and admin platform for JumaTech Solutions.

## Stack
- Turborepo + pnpm workspaces
- Next.js 15 (App Router) for the public site and dashboard
- Express.js API with Drizzle ORM and Neon PostgreSQL
- Shared Zod schemas and TypeScript types

## Workspace
- `apps/web`: marketing site and admin dashboard
- `apps/api`: API, auth, uploads, and database access
- `packages/shared`: shared schemas and types
- `packages/tsconfig`: shared TypeScript configs

## Environment
Copy `.env.example` to `.env` files in the relevant packages and set your Neon, Cloudinary, and Resend credentials.

## Scripts
- `pnpm dev`
- `pnpm build`
- `pnpm typecheck`
- `pnpm lint`
