# SysPara Website — Development Guidelines

## Code Formatting Standards
- **Prettier config** (`.prettierrc`): `singleQuote: true`, `semi: true`, `trailingComma: "all"`, `printWidth: 100`, `tabWidth: 2`
- All source files use single quotes for strings
- Trailing commas on all multi-line structures (arrays, objects, params)
- Max line width 100 characters

## TypeScript Conventions
- Explicit types for all exported data and component props
- Use `interface` for component props extending HTML element attributes (e.g., `ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>`)
- Use `type` for simple data shapes (e.g., `export type Service = { id: string; name: string; summary: string }`)
- Typed static data arrays exported from `src/data/` files
- `next-env.d.ts` is auto-generated — never edit manually

## Component Patterns

### Server vs Client Components
- Default to **Server Components** (no directive needed)
- Add `'use client'` only when using hooks (`useState`, `useEffect`) or browser APIs
- Examples requiring `'use client'`: `Navbar.tsx`, `Hero.tsx`, `AnimatedSection.tsx`, `ContactForm.tsx`

### Component File Structure
```tsx
'use client'; // only if needed

import { ... } from '...'; // external imports first
import ComponentName from '@/components/...'; // internal imports second

export default function ComponentName({ prop1, prop2 }: Props) {
  // hooks at top
  // return JSX
}
```

### Props Pattern
- Destructure props inline in function signature
- Provide default values inline: `variant = 'primary'`, `className = ''`, `delay = 0`
- Spread remaining props with `...props` for HTML element wrappers

## Styling Conventions

### Tailwind Usage
- Use Tailwind utility classes exclusively — no inline `style` except for complex dynamic values (e.g., `backgroundImage` patterns)
- Responsive prefix order: mobile-first, then `md:`, `lg:`
- Common layout pattern: `max-w-6xl mx-auto px-4` for page sections
- Section padding: `py-20` (standard), `py-14` (compact)

### Color Palette (from `theme.ts`)
```ts
primary:   '#2563eb'  // blue-600
secondary: '#7c3aed'  // purple-600
accent:    '#06b6d4'  // cyan-500
dark:      '#0f172a'  // slate-950
```

### Gradient Pattern
- Primary CTA gradient: `bg-gradient-to-r from-blue-600 to-purple-600`
- Full brand gradient: `from-blue-600 via-purple-600 to-cyan-500`
- Dark background: `from-slate-900 via-slate-800 to-slate-900`
- Text gradient: use `gradient-text` CSS utility class

### Custom CSS Utilities (globals.css)
- `glass` — glassmorphism effect (backdrop-blur + bg-white/opacity + border)
- `gradient-text` — transparent background-clip text with brand gradient

### Button Variants
```tsx
// Primary (default)
'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25'

// Outline
'border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400'
```

## Animation Patterns (Framer Motion)

### Scroll-triggered entrance (via AnimatedSection)
```tsx
<AnimatedSection delay={0.1}>
  <YourContent />
</AnimatedSection>
// Uses: initial={{ opacity: 0, y: 40 }}, whileInView={{ opacity: 1, y: 0 }}, viewport={{ once: true }}
```

### Staggered hero animations
```tsx
// Each element gets increasing delay: 0, 0.1, 0.2, 0.3...
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
```

### Ambient background blobs
```tsx
<motion.div
  animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
  transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
/>
```

## Page Composition Pattern
Pages are thin composers — they import and arrange section components:
```tsx
// app/page.tsx pattern
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* inline sections for simple content */}
    </>
  );
}
```

## Data Layer Pattern
```ts
// src/data/services.ts
export type Service = { id: string; name: string; summary: string };
export const services: Service[] = [ ... ];
```
- Export both the type and the data array from the same file
- Use `id` field as React `key` prop

## Import Path Convention
- Always use `@/` alias for internal imports (maps to `src/`)
- Never use relative `../../` paths for cross-directory imports

## API Routes
- Located at `src/app/api/[route]/route.ts`
- Contact form uses Nodemailer for email delivery
- Lead capture at `/api/leads`
- Use `zod` for request body validation in API handlers

## Next.js Config Conventions
- Turbopack enabled for dev builds
- Remote image domains explicitly whitelisted in `images.remotePatterns`
- CDN prefix via `process.env.CDN_URL` (optional, defaults to `''`)

## Naming Conventions
- **Components**: PascalCase filenames and function names (`AnimatedSection`, `BlogCard`)
- **Pages**: `page.tsx` (Next.js convention)
- **Data files**: camelCase (`blogPosts.ts`, `services.ts`)
- **CSS utilities**: kebab-case (`gradient-text`, `glass`)
- **Route segments**: kebab-case directories (`ai-agents/`, `ai-solutions/`)
