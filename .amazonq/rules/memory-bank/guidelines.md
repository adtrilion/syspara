# Development Guidelines

## Client vs Server Components
- Pages (`app/**/page.tsx`) are **Server Components** by default — no `'use client'` unless needed
- Add `'use client'` only when using hooks (`useState`, `useEffect`, `useRef`), event handlers, or Framer Motion
- Interactive components (forms, chatbot, animated sections) always have `'use client'` at the top

## Component Patterns

### Re-export aliases
Thin re-export files are used to decouple section names from implementation locations:
```ts
// src/components/sections/CTA.tsx
export { default } from '@/components/ui/CTASection';

// src/components/ai/LeadBot.tsx
export { default } from '@/components/ai/LeadChatbot';
```

### Section structure
Every page section follows this layout pattern:
```tsx
<section className="py-24 bg-slate-950">
  <div className="max-w-6xl mx-auto px-4">
    <AnimatedSection className="text-center mb-14">
      <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
        Section Label
      </span>
      <h2 className="text-4xl font-bold text-white">Section Title</h2>
      <p className="mt-4 text-slate-400 max-w-xl mx-auto">Subtitle text.</p>
    </AnimatedSection>
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <AnimatedSection key={item.title} delay={i * 0.1}>
          <Card {...item} />
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
```

### AnimatedSection wrapper
Wrap any content that should animate on scroll with `<AnimatedSection>`. Use `delay` prop for staggered children:
```tsx
<AnimatedSection delay={0.1}>...</AnimatedSection>
```

## Styling Conventions

### Dark theme baseline
All pages use a dark background. Alternate sections between `bg-slate-950` and `bg-slate-900`.

### Brand gradient
Apply the brand gradient to text using the `.gradient-text` utility class:
```tsx
<span className="gradient-text">AI & Automation</span>
```

Apply to backgrounds/buttons using Tailwind gradient utilities:
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
className="bg-gradient-to-br from-blue-600 to-purple-600"
```

### Section label badges
Use this pattern for section category labels:
```tsx
<span className="inline-block rounded-full bg-{color}-900/30 border border-{color}-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-{color}-400 mb-4">
  Label
</span>
```
Color varies by section: `blue`, `purple`, `cyan`, `amber`.

### Background decorative orbs
Use blurred gradient circles for visual depth in hero/CTA sections:
```tsx
<div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 opacity-20 blur-3xl rounded-full pointer-events-none" />
<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 opacity-20 blur-3xl rounded-full pointer-events-none" />
```

### Glass effect
Use `.glass-dark` for dark glassmorphism cards:
```tsx
className="glass-dark rounded-2xl p-6"
```

### Section dividers
Use the `.section-divider` utility between major page sections:
```tsx
<div className="section-divider" />
```

## Button & Link Patterns

### Primary CTA button
```tsx
<Link
  href="/contact#contact-form"
  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
>
  Book Free Consultation
</Link>
```

### Secondary/ghost button
```tsx
<Link
  href="/portfolio"
  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-all duration-200"
>
  View Our Work
</Link>
```

## Animation Patterns (Framer Motion)

### Scroll-triggered entrance (sections)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
```

### Page-load entrance (hero elements, staggered)
```tsx
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
```

### AnimatePresence for mount/unmount
```tsx
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
```

### Infinite ambient animations (background blobs)
```tsx
animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
```

## Form Patterns
- Use `react-hook-form` for all forms
- Validate with inline `register` rules; use Zod for API-level validation
- Show field errors with `role="alert"` for accessibility
- Shared input class pattern:
```ts
const inputBase = 'w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border bg-white/5 text-white placeholder-slate-500';
const inputNormal = 'border-white/10';
const inputError = 'border-red-500 focus:ring-red-500';
```
- Submit to `/api/leads` (lead capture) or `/api/contact` (contact email)
- Show loading state with `<Loader2 className="animate-spin" />` from lucide-react
- Show success state by replacing form with a confirmation message

## API Route Patterns
- API routes live in `src/app/api/*/route.ts`
- Use Resend for email delivery
- Return JSON responses with appropriate HTTP status codes
- Silent error handling in client-side fetch calls (catch blocks with no re-throw for non-critical paths)

## Data Patterns
- Static data (services, blog posts) lives in `src/data/*.ts` as typed arrays
- Data is imported directly into pages/sections — no API calls for static content
- Inline data arrays in page files are acceptable for page-specific content (industries, testimonials, process steps)

## Accessibility
- Skip-to-content link in root layout: `<a href="#main-content" className="sr-only focus:not-sr-only ...">`
- Main content wrapped in `<main id="main-content">`
- All interactive elements have `aria-label` attributes
- Dialog/modal components use `role="dialog"` and `aria-modal="true"`
- Form error messages use `role="alert"`
- Form inputs have associated `<label>` elements with matching `htmlFor`/`id`

## Import Conventions
- Use `@/` path alias for all internal imports (maps to `src/`)
- Import order: React/Next → third-party → internal components → types/data
- Lucide icons imported by name: `import { Bot, X, Send } from 'lucide-react'`

## TypeScript
- Strict mode enabled — no implicit `any`
- Define local types at the top of the file before the component
- Use `type` (not `interface`) for component prop shapes and local data types
- Prefer explicit return types on utility functions; components can infer

## Naming Conventions
- Components: PascalCase (`LeadChatbot`, `CTASection`)
- Files: PascalCase for components, camelCase for data/utility files
- CSS utility classes: kebab-case (`.gradient-text`, `.glass-dark`)
- Constants: SCREAMING_SNAKE_CASE for module-level strings (`GREETING`, `QUICK_REPLIES`)
