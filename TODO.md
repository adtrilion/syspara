# SysPara — Master TODO & Roadmap

---

## Stack
- **Framework:** Next.js 16 App Router + TypeScript (strict)
- **Styling:** Tailwind CSS v4 + Framer Motion
- **AI:** Groq — llama3-70b-8192
- **Database:** Supabase (leads + conversations)
- **Email:** Resend
- **Hosting:** Vercel (Hobby — daily cron)
- **Analytics:** GA4 (G-MG0BEJBZB9)

---

## Feature Status

| Feature | Status |
|---|---|
| Agent SysPara (AI chatbot) | ✅ Live |
| Lead capture (name → email → phone) | ✅ Live |
| Lead storage — Supabase | ✅ Live |
| Lead scoring (AI 1–10) | ✅ Live |
| Conversation logging — Supabase | ✅ Live |
| AI Project Estimator | ✅ Live |
| AI Demo Playground | ✅ Live |
| AI follow-up emails (daily cron) | ✅ Live |
| Admin dashboard — /admin | ✅ Live |
| Email alerts — Resend | ✅ Live |
| Rate limiting (all API routes) | ✅ Live |
| Dynamic OG images — /api/og | ✅ Live |
| GA4 analytics | ✅ Live |
| Blog (6 posts + audio player) | ✅ Live |
| WhatsApp alerts | ⏳ Needs WHATSAPP_TOKEN + WHATSAPP_PHONE_ID in Vercel |

---

## API Routes

| Route | Method | Purpose |
|---|---|---|
| /api/chat | POST | Groq chat — chatbot + playground |
| /api/leads | POST | Lead capture — Supabase + score + email |
| /api/estimator | POST | AI estimate — Groq + lead save |
| /api/contact | POST | Contact form email |
| /api/conversations | POST | Log chatbot sessions |
| /api/followup | GET | Cron — AI follow-up emails |
| /api/admin | GET | Admin data — leads + conversations |
| /api/og | GET | Dynamic OG image (edge) |

---

## Environment Variables

| Variable | Status |
|---|---|
| RESEND_API_KEY | ✅ |
| GROQ_API_KEY | ✅ |
| SUPABASE_URL | ✅ |
| SUPABASE_SERVICE_ROLE_KEY | ✅ |
| CRON_SECRET | ✅ |
| ADMIN_SECRET | ✅ |
| NEXT_PUBLIC_SITE_URL | ✅ |
| WHATSAPP_TOKEN | ⏳ Pending |
| WHATSAPP_PHONE_ID | ⏳ Pending |

---

## Supabase Schema

```sql
-- leads
id, created_at, name, email, phone, company, service,
message, source, score, followed_up_at

-- conversations
id, created_at, session_id, messages (jsonb), lead_captured,
lead_email, message_count, last_message_at
```

---

## Sales Funnel

```
Visitor lands on syspara.in
  ↓ Agent SysPara opens (chatbot)           ✅
  ↓ AI answers questions (Groq 70B)         ✅
  ↓ High-intent detected → lead capture     ✅
  ↓ Lead scored 1–10 by AI                  ✅
  ↓ Saved to Supabase                       ✅
  ↓ Email alert (Resend)                    ✅
  ↓ WhatsApp alert                          ⏳ needs env vars
  ↓ AI follow-up email (next day, 9am UTC)  ✅
  ↓ Review in admin dashboard               ✅ syspara.in/admin
  ↓ Close the deal                          🤝
```

---

## Immediate

- [ ] Activate WhatsApp alerts — add WHATSAPP_TOKEN + WHATSAPP_PHONE_ID to Vercel
- [ ] Submit sitemap to Google Search Console

## Short Term

- [ ] Slack alert for leads scored 8+
- [ ] Add JSON-LD structured data to blog posts
- [ ] Add meta descriptions to services, portfolio, ai-agents, ai-solutions pages
- [ ] Replace placeholder portfolio projects with real case studies
- [ ] Add 10+ more blog posts (target 20+)

## Medium Term

- [ ] Admin: full conversation transcript view, filter by score/date, CSV export
- [ ] Calendly booking link in follow-up emails + /contact page
- [ ] CMS migration — Sanity or Contentful for blog
- [ ] Voice input/output in chatbot (Whisper + ElevenLabs)

## Longer Term

- [ ] Arabic language version + RTL layout
- [ ] CRM integration (HubSpot or Zoho)
- [ ] Lead source attribution + A/B testing framework
- [ ] Automated proposal generation from estimator results
- [ ] Multi-tenant admin + lead assignment

---

_Last updated: Redeployed clean on Vercel (commit 9eae9b9) — all features live_
