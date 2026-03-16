# Technology Stack

## Core Framework
- **Next.js 16.1.6** — App Router, Server Components, API routes, Turbopack dev server
- **React 19.2.3** — UI library
- **TypeScript 5** — strict mode enabled, target ES2017

## Styling
- **Tailwind CSS v4** — utility-first CSS via `@tailwindcss/postcss`
- **Custom CSS utilities** in `src/app/globals.css`:
  - `.gradient-text` — blue→purple→cyan gradient text
  - `.glass` / `.glass-dark` — glassmorphism cards
  - `.glow-blue` / `.glow-purple` — box-shadow glow effects
  - `.card-hover` — translateY(-4px) hover lift
  - `.section-divider` — subtle horizontal rule
  - `.noise-bg` — SVG noise texture overlay
- **CSS variables** for brand colors: `--primary: #2563eb`, `--secondary: #7c3aed`, `--accent: #06b6d4`, `--background: #0f172a`

## Theme Constants (`src/styles/theme.ts`)
```ts
colors: { primary: '#2563eb', secondary: '#7c3aed', accent: '#06b6d4', dark: '#0f172a' }
gradients: {
  primary: 'from-blue-600 via-purple-600 to-cyan-500',
  subtle: 'from-blue-600 to-purple-600',
  dark: 'from-slate-900 via-slate-800 to-slate-900',
}
```

## Animation
- **Framer Motion 12.36.0** — page/section entrance animations, scroll-triggered reveals

## UI & Icons
- **Lucide React 0.577.0** — icon library
- **clsx 2.1.1** — conditional className utility

## Forms & Validation
- **react-hook-form 7.71.2** — form state management
- **Zod 4.3.6** — schema validation

## Email / API
- **Resend 6.9.3** — transactional email for contact form and lead capture

## Font
- **Inter** (Google Fonts via `next/font/google`) — CSS variable `--font-inter`

## Path Alias
- `@/*` → `src/*` (configured in tsconfig.json)

## Dev Tools
- **ESLint 9** with `eslint-config-next`
- **Prettier 3.8.1** — `singleQuote: true`, `semi: true`, `trailingComma: 'all'`, `printWidth: 100`, `tabWidth: 2`
- **Vitest 4.1.0** — unit testing
- **@testing-library/react 16.3.2** — component testing

## Build & Config
- **Turbopack** enabled in dev (`next.config.ts`)
- Remote image domain: `images.unsplash.com`
- CDN support via `CDN_URL` env variable (`assetPrefix`)
- `NEXT_PUBLIC_SITE_URL` env variable for metadata base URL

## Development Commands
```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
npm run format    # Prettier format src/**
npm run test      # Vitest
```
