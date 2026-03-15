# SysPara Website — Technology Stack

## Core Framework
- **Next.js 16.1.6** — App Router, server components, file-based routing
- **React 19.2.3** — UI library
- **TypeScript 5** — Strict typing throughout

## Styling
- **Tailwind CSS 4** — Utility-first CSS via `@tailwindcss/postcss`
- **Custom theme** — `src/styles/theme.ts` defines color tokens and gradients
- **Custom CSS utilities** — `glass`, `gradient-text` defined in globals.css

## Animation
- **Framer Motion 12** — Used for scroll-triggered animations (`AnimatedSection`), hero blob animations, and staggered entrance effects

## Forms & Validation
- **react-hook-form 7** — Form state management
- **zod 4** — Schema validation for form inputs

## Icons
- **lucide-react 0.577** — Icon library used throughout components

## Email / Backend
- **Nodemailer 8** — Email delivery from `/api/contact` route
- **Environment variable** `CDN_URL` — Optional CDN prefix via `next.config.ts`

## Utilities
- **clsx 2** — Conditional className merging

## Dev Tools
| Tool | Version |
|---|---|
| ESLint | 9 + eslint-config-next 16.1.6 |
| Prettier | 3.8.1 |
| Vitest | 4.1.0 |
| @testing-library/react | 16.3.2 |

## Build & Runtime
- **Turbopack** enabled in dev via `next.config.ts`
- **Remote images** allowed from `images.unsplash.com`
- **Font** — Inter (Google Fonts via `next/font/google`, variable `--font-inter`)

## Development Commands
```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint check
npm run format     # Prettier format src/**
npm run test       # Vitest test runner
npm run ci:lint    # CI lint step
npm run ci:build   # CI build step
```

## Path Alias
- `@/` maps to `src/` (configured in `tsconfig.json`)
