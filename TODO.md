# SysPara AI System — Master TODO List

---

## Technical Audit ✅ COMPLETE (June 2025)
> Full codebase audit — all issues fixed

### Fixed
- [x] AIPlayground.tsx — historyRef bug — replaced with buildHistory() from messages state
- [x] AIPlayground.tsx — doubled system prompt — /api/chat now accepts optional `systemPrompt` from client
- [x] AIPlayground.tsx — nextId() stale closure — replaced with useRef
- [x] /api/chat — no input validation — added message count limit + missing field check + rate limiting (30 req/min)
- [x] /api/estimator — no input validation — added required field check + rate limiting (3 req/min)
- [x] /api/leads — rate limiting added (5 req/min)
- [x] /api/contact — rate limiting added (5 req/min)
- [x] Navbar.tsx — duplicate Industries link removed from AI dropdown
- [x] Navbar.tsx — duplicate About link removed from AI dropdown
- [x] og-image — dynamic /api/og route built with Next.js ImageResponse (edge runtime)
- [x] Lead storage — Supabase leads table, all leads saved from /api/leads and /api/estimator

### Pending (manual)
- [ ] Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to Vercel environment variables

---

## Phase 1 — Fix Current Chatbot ✅ COMPLETE
> Goal: turn the current bot into a useful AI assistant

### Backend
- [x] Create `/api/chat` AI endpoint
- [x] Connect chatbot to Groq API (llama3-70b-8192 — free tier)
- [x] Add system prompt describing SysPara services
- [x] Add conversation memory via buildHistory() — last 10 messages
- [x] Improve response tone (human consultant style — Agent SysPara persona)

### Frontend
- [x] Upgrade LeadBot.tsx → Agent SysPara
- [x] Chat history UI
- [x] Loading / typing indicator
- [x] Mobile-friendly chat window

---

## Phase 2 — Website Knowledge AI (RAG) ✅ COMPLETE
> Goal: chatbot understands entire website

- [x] Consolidated site pages + blog into siteKnowledge.ts
- [x] Full-context injection as system prompt (no vector DB needed at current size)
- [x] Blog Q&A pairs added to all 6 posts

---

## Phase 3 — Lead Capture Intelligence ✅ COMPLETE
> Goal: turn chatbot into sales assistant

- [x] High-intent pattern detection (pricing, project requests, consultation interest)
- [x] Lead flow: name → email → phone
- [x] Fallback lead capture after 4 exchanges
- [x] Email notification on every lead (via Resend)
- [ ] WhatsApp alert — code ready, needs WHATSAPP_TOKEN + WHATSAPP_PHONE_ID in Vercel env

---

## Phase 4 — AI Demo Upgrade ✅ COMPLETE
> Goal: improve /demo into a stronger sales page

- [x] Industry tabs (E-commerce, Healthcare, Finance, Operations)
- [x] Real Groq AI responses
- [x] 4-step How It Works section
- [x] Dual CTA — Estimator + Book Consultation

---

## Phase 5 — AI Project Estimator ✅ COMPLETE
> Goal: high-quality lead generator tool

- [x] 5-step single-click question flow
- [x] Groq 70B generates scope, cost, timeline, highlights
- [x] Contact capture + email alert
- [x] Added to Navbar (AI dropdown + mobile)
- [x] Live at syspara.in/estimator

---

## Phase 6 — Voice AI (Optional)
> Stack: Whisper (speech-to-text) + ElevenLabs (text-to-speech)

- [x] Blog audio player (Web Speech API — read-aloud on blog posts)
- [ ] Voice input in chatbot (Whisper API)
- [ ] Voice response from chatbot (ElevenLabs API)

---

## Phase 7 — High Value Lead Alerts
> Instant notifications when strong buying signals detected

- [x] High-intent detection logic
- [x] Email alert on every lead capture
- [ ] WhatsApp alert — code ready, needs env vars in Vercel
- [ ] Slack alert

---

## Phase 8 — Analytics
> Track chatbot and site performance

- [ ] Conversation count logging
- [ ] Leads captured tracking
- [ ] Common questions analysis
- [ ] Conversion rate tracking
- [ ] Google Analytics / GA4 integration
- [ ] Custom database logging (Supabase or PlanetScale)

---

## Phase 9 — AI Sales Automation
> Close the loop — AI follows up with leads automatically

- [ ] AI follow-up email sequence to captured leads (via Resend + cron)
- [ ] Auto-schedule meeting link in follow-up (Calendly integration)
- [ ] Lead scoring — rank leads by intent signals
- [ ] Prospect qualification pipeline dashboard

---

## Final System Vision

```
Visitor
  ↓
Agent SysPara (AI Chatbot)       ✅ Live — Groq 70B, buildHistory() fix
  ↓
Website Knowledge (RAG)          ✅ Live — full-context injection
  ↓
AI Demo Playground               ✅ Live — real AI, industry tabs, fixed
  ↓
AI Project Estimator             ✅ Live — 5-step, lead capture, email alert
  ↓
Lead Qualification               ✅ Live — high-intent detection
  ↓
Contact Capture                  ✅ Live — name, email, phone
  ↓
You get notified                 ✅ Live (email) / ⏳ WhatsApp needs env vars
  ↓
AI Follow-up Emails              ⏳ Phase 9
  ↓
Meeting Booked                   ⏳ Phase 9
```

---

_Last updated: All high priority tasks complete (June 2025) — pushed as faf471f_
