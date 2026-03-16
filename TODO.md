# SysPara AI System — Master TODO List

---

## Phase 1 — Fix Current Chatbot ✅ COMPLETE
> Goal: turn the current bot into a useful AI assistant

### Backend
- [x] Create `/api/chat` AI endpoint
- [x] Connect chatbot to Groq API (llama3-70b-8192 — free tier, replaces OpenAI)
- [x] Add system prompt describing SysPara services
- [x] Add conversation memory (historyRef — last 10 messages)
- [x] Improve response tone (human consultant style — Agent SysPara persona)

### Frontend
- [x] Upgrade LeadBot.tsx → Agent SysPara
- [x] Chat history UI
- [x] Loading / typing indicator
- [x] Mobile-friendly chat window

---

## Phase 2 — Website Knowledge AI (RAG) ✅ COMPLETE
> Goal: chatbot understands entire website

### Data ingestion
- [x] Scrape website pages (consolidated into siteKnowledge.ts)
- [x] Scrape blog posts (all 6 posts + Q&A ingested)
- [x] Extract clean text

### Embeddings
- [ ] Generate embeddings using OpenAI/Groq
  > Currently using full-context injection (works well at this site size). Embeddings needed when content grows large.

### Vector database
- [ ] Setup Supabase vector table
- [ ] Store page embeddings

### Retrieval system
- [x] User question → sent to AI with full site context
- [ ] Search vector DB (not needed yet — full context fits in prompt)
- [x] Send relevant content to AI

---

## Phase 3 — Lead Capture Intelligence ✅ COMPLETE
> Goal: turn chatbot into sales assistant

### Lead detection
- [x] Detect pricing questions
- [x] Detect project requests ("can you build", "I want", "how much")
- [x] Detect consultation interest ("get started", "book a call", "hire you")

### Lead flow
- [x] Ask user name
- [x] Ask email
- [x] Ask phone / WhatsApp number
- [ ] Ask business type (can be added to flow)
- [ ] Ask project goal (handled conversationally by AI)
- [ ] Ask timeline (handled conversationally by AI)

### Alerts
- [x] Email notification on every lead (via Resend)
- [ ] WhatsApp notification — code ready, needs WHATSAPP_TOKEN + WHATSAPP_PHONE_ID in Vercel env
- [ ] Slack notification

---

## Phase 4 — AI Demo Upgrade
> Goal: improve the /demo page into a stronger sales page

- [ ] Example prompts
- [ ] Business use cases
- [ ] AI workflow examples
- [ ] CTA to contact

---

## Phase 5 — AI Project Estimator
> Goal: high-quality lead generator tool

User answers:
- Company type
- AI solution type
- Team size
- Automation needs
- Budget range

AI generates:
- Estimated Project Scope
- Suggested AI Solution
- Approximate Cost
- Timeline

- [ ] Build estimator UI
- [ ] Build estimator API route
- [ ] Connect to lead capture

---

## Phase 6 — Auto Website Learning
> Goal: chatbot updates itself automatically

- [ ] Daily cron job to scrape website
- [ ] Auto-generate embeddings
- [ ] Update vector database

---

## Phase 7 — Voice AI (Optional)
> Stack: Whisper (speech recognition) + ElevenLabs (voice response)

- [x] Blog audio player (Web Speech API — basic read-aloud on blog posts)
- [ ] Voice input in chatbot (Whisper)
- [ ] Voice response from chatbot (ElevenLabs)

---

## Phase 8 — High Value Lead Alerts
> When AI detects strong lead signals, notify instantly

- [x] High-intent detection logic (fires on strong buying signals)
- [x] Email alert on lead capture
- [ ] WhatsApp alert (ready — needs env vars)
- [ ] Slack alert

---

## Phase 9 — Analytics
> Track chatbot performance

- [ ] Number of conversations
- [ ] Leads captured
- [ ] Common questions
- [ ] Conversion rate
- [ ] Google Analytics integration
- [ ] Custom database logging

---

## Phase 10 — AI Sales Automation (Future)
> Optional later stage

- [ ] AI follow-up emails to leads
- [ ] Auto schedule meetings
- [ ] Prospect qualification pipeline

---

## Final System Vision

```
Visitor
  ↓
Agent SysPara (AI Chatbot)       ✅ Live
  ↓
Website Knowledge (RAG)          ✅ Live (full-context)
  ↓
Lead Qualification                ✅ Live
  ↓
Contact Capture                   ✅ Live
  ↓
You get notified                  ✅ Live (email) / ⏳ WhatsApp pending
```

---

_Last updated: auto-generated from codebase audit_
