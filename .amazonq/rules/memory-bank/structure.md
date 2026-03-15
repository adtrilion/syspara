# SysPara Website — Project Structure

## Root Layout
```
syspara-website/
├── src/
│   ├── app/          # Next.js App Router pages and API routes
│   ├── components/   # React components (sections, ui, forms, blog)
│   ├── data/         # Static typed data (services, blog posts)
│   └── styles/       # Theme constants and global CSS
├── public/           # Static assets (icons, images, SVGs)
├── .amazonq/rules/   # Amazon Q memory bank rules
├── next.config.ts    # Next.js config (Turbopack, images, CDN)
├── tsconfig.json     # TypeScript config
├── .prettierrc       # Prettier formatting config
└── eslint.config.mjs # ESLint config
```

## src/app — Pages (App Router)
| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/ai-solutions` | `app/ai-solutions/page.tsx` |
| `/ai-agents` | `app/ai-agents/page.tsx` |
| `/industries` | `app/industries/page.tsx` |
| `/portfolio` | `app/portfolio/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `POST /api/contact` | `app/api/contact/` |
| `POST /api/leads` | `app/api/leads/` |

## src/components — Component Layers
- **sections/** — Full-width page sections (Hero, Services, AIInnovation, CTA, etc.)
- **ui/** — Reusable atomic components (Button, Card, AnimatedSection, ServiceCard, etc.)
- **forms/** — Form components (ContactForm with react-hook-form + zod)
- **blog/** — Blog-specific components (BlogCard, BlogHero)
- **Navbar.tsx** — Sticky responsive navigation with scroll detection
- **Footer.tsx** — Site-wide footer

## src/data — Static Data
- `services.ts` — Typed `Service[]` array
- `blogPosts.ts` — Blog post data

## src/styles — Design Tokens
- `theme.ts` — Color palette and gradient definitions
- `globals.css` — Tailwind base styles and custom CSS utilities

## Architectural Patterns
- **App Router** with file-based routing (Next.js 16)
- **Server Components by default**; `'use client'` only where interactivity/hooks are needed
- **Section-based page composition** — pages import and compose section components
- **Atomic UI layer** — reusable cards, buttons, and wrappers in `components/ui/`
- **Typed static data** — data files export typed arrays consumed by components
- **API routes** for form submission (contact) and lead capture
