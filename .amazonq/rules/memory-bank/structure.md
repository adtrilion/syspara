# Project Structure

## Directory Layout
```
syspara-website/
├── src/
│   ├── app/                    # Next.js App Router pages & API routes
│   │   ├── layout.tsx          # Root layout (Navbar, Footer, LeadBot, metadata)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global CSS (Tailwind base + custom utilities)
│   │   ├── about/              # About page
│   │   ├── ai-agents/          # AI Agents page
│   │   ├── ai-demo/            # Interactive AI demo page
│   │   ├── ai-solutions/       # AI Solutions page
│   │   ├── blog/[slug]/        # Dynamic blog post pages
│   │   ├── contact/            # Contact page
│   │   ├── dashboard/          # Dashboard demo page
│   │   ├── industries/         # Industries page
│   │   ├── portfolio/          # Portfolio/case studies page
│   │   ├── services/           # Services page
│   │   └── api/
│   │       ├── contact/        # POST handler — sends email via Resend
│   │       └── leads/          # POST handler — captures lead data
│   ├── components/
│   │   ├── ai/                 # AI-specific interactive components
│   │   │   ├── LeadBot.tsx     # Floating chatbot (global, in root layout)
│   │   │   ├── LeadChatbot.tsx # Chatbot UI internals
│   │   │   ├── AIDemo.tsx      # AI demo component
│   │   │   ├── AIPlayground.tsx
│   │   │   └── DashboardDemo.tsx
│   │   ├── sections/           # Full-width page sections (used inside pages)
│   │   │   ├── Hero.tsx        # Homepage hero
│   │   │   ├── CTA.tsx         # Call-to-action section
│   │   │   ├── Process.tsx     # Process/how-it-works
│   │   │   ├── Industries.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── PortfolioGrid.tsx
│   │   │   ├── ContactFormSection.tsx
│   │   │   └── ... (AI-specific sections)
│   │   ├── ui/                 # Reusable primitive UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── PortfolioCard.tsx
│   │   │   ├── IndustryCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── TestimonialCard.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   └── NewsletterForm.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogHero.tsx
│   │   ├── dashboard/
│   │   │   └── DashboardDemo.tsx
│   │   ├── Navbar.tsx          # Global navigation
│   │   └── Footer.tsx          # Global footer
│   ├── data/
│   │   ├── services.ts         # Static services data
│   │   └── blogPosts.ts        # Static blog post data
│   └── styles/
│       ├── globals.css         # Duplicate/alias of app/globals.css
│       └── theme.ts            # Shared color/gradient constants
├── public/
│   ├── icons/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── .prettierrc
```

## Architectural Patterns

### Component Hierarchy
- **Pages** (`src/app/**/page.tsx`) — compose multiple `sections/` components
- **Sections** (`components/sections/`) — full-width, self-contained page sections with their own data
- **UI primitives** (`components/ui/`) — reusable cards, buttons, animated wrappers
- **AI components** (`components/ai/`) — interactive client components for demos and chatbot

### Routing
- Next.js App Router with file-based routing
- Dynamic route: `/blog/[slug]`
- API routes under `src/app/api/`

### Data Flow
- Static data in `src/data/` (services, blog posts) — no external CMS
- Form submissions → API routes → Resend email service
- Lead capture → `/api/leads` route

### Layout
- Single root layout wraps all pages with Navbar, Footer, and global LeadBot chatbot
- About page has its own nested `layout.tsx`
- `'use client'` directive used on interactive/animated components; pages default to Server Components
