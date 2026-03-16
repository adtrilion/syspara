'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

type Message = { id: number; role: 'bot' | 'user'; text: string };
type LeadStage = 'chat' | 'ask_name' | 'ask_email' | 'done';

const GREETING =
  "Hi there! 👋 I'm SysPara's AI assistant. I can answer questions about our services, AI solutions, pricing, and more. What can I help you with today?";

const QUICK_REPLIES = [
  'What services do you offer?',
  'How does AI automation work?',
  'What industries do you serve?',
  'How do I get started?',
];

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function getBotResponse(input: string): string {
  const msg = input.toLowerCase();

  if (/price|cost|pricing|how much|budget|rate|charge/.test(msg)) {
    return "Our pricing depends on the scope and complexity of your project. Most clients start with a free discovery call where we assess your needs and provide a tailored proposal.\n\nTypically:\n• AI Agent deployments start from $2,000\n• Full automation systems from $5,000\n• Enterprise solutions are custom-quoted\n\nWould you like to book a free consultation to get an accurate estimate?";
  }

  if (/service|offer|build|develop|what do you do/.test(msg)) {
    return "SysPara builds AI-powered digital solutions across 6 core areas:\n\n🤖 AI Agents & Automation\n📊 Predictive Analytics\n💬 AI Chatbots\n🌐 Web & Mobile Development\n☁️ Cloud Infrastructure\n🔧 IT Consulting\n\nWe work with businesses across Healthcare, Finance, E-commerce, Logistics, and more. Which area interests you most?";
  }

  if (/ai agent|autonomous|agent/.test(msg)) {
    return "AI agents are autonomous systems that can reason, plan, and execute tasks without constant human input. They connect to your existing tools — CRM, email, databases — and handle complex workflows end-to-end.\n\nExamples we've built:\n→ Lead qualification agents that research and score prospects\n→ Customer support agents resolving 70%+ of tickets automatically\n→ Compliance monitoring agents running 24/7\n\nWant to explore what an AI agent could do for your specific business?";
  }

  if (/automat|workflow|process|repetitive|manual/.test(msg)) {
    return "Automation is one of our strongest areas. We help businesses eliminate repetitive manual work using a combination of RPA and AI.\n\nCommon wins our clients see:\n✓ Invoice processing automated in minutes vs. hours\n✓ Customer onboarding reduced from days to minutes\n✓ Report generation fully automated\n✓ 40–70% reduction in operational costs\n\nWhat processes are currently slowing your team down?";
  }

  if (/industry|sector|healthcare|finance|ecommerce|real estate|education|logistics/.test(msg)) {
    return "We serve businesses across multiple industries:\n\n🏥 Healthcare — patient workflow automation, predictive diagnostics\n💹 Finance — fraud detection, risk scoring, reporting\n🛒 E-commerce — AI recommendations, dynamic pricing\n🏢 Real Estate — property valuation, lead scoring\n🎓 Education — adaptive learning, student analytics\n🚚 Logistics — route optimization, demand forecasting\n\nEach solution is custom-built for your industry's specific challenges. Which sector are you in?";
  }

  if (/how long|timeline|time|duration|when/.test(msg)) {
    return "Project timelines vary by scope:\n\n⚡ Quick automations: 2–4 weeks\n🤖 AI agent deployment: 4–8 weeks\n🌐 Full web/mobile platform: 8–16 weeks\n🏢 Enterprise AI systems: 3–6 months\n\nWe follow an agile process with weekly updates so you always know where things stand. Want to discuss your specific timeline?";
  }

  if (/start|begin|get started|next step|how do i|process/.test(msg)) {
    return "Getting started is simple:\n\n1️⃣ Book a free 30-min discovery call\n2️⃣ We assess your needs and identify opportunities\n3️⃣ You receive a tailored proposal within 48 hours\n4️⃣ We kick off with a clear roadmap and milestones\n\nNo commitment required for the initial call. Would you like me to connect you with our team?";
  }

  if (/roi|return|result|outcome|benefit|saving|reduce cost/.test(msg)) {
    return "Our clients typically see strong ROI within the first 6 months:\n\n📉 30–70% reduction in manual processing costs\n📈 15–25% increase in conversion rates\n⏱️ 60%+ faster response times\n🔄 Processes running 24/7 without added headcount\n\nOne of our e-commerce clients saw a 3x ROI within 4 months of deploying our AI recommendation engine. Want to explore what's possible for your business?";
  }

  if (/integrate|existing|crm|erp|system|connect|api/.test(msg)) {
    return "Integration is a core part of what we do. Our solutions connect with:\n\n→ CRMs: Salesforce, HubSpot, Zoho\n→ ERPs: SAP, Oracle, NetSuite\n→ Communication: Slack, Teams, WhatsApp\n→ Data: PostgreSQL, MongoDB, BigQuery\n→ Cloud: AWS, Azure, GCP\n\nWe build custom API connectors when needed. What systems are you currently using?";
  }

  if (/hello|hi|hey|good morning|good afternoon/.test(msg)) {
    return "Hello! 👋 Great to hear from you. I'm here to help you explore how SysPara can transform your business with AI and automation.\n\nWhat would you like to know about?";
  }

  if (/thank|thanks|appreciate/.test(msg)) {
    return "You're very welcome! 😊 Is there anything else I can help you with? If you'd like to speak with our team directly, I can arrange that for you.";
  }

  if (/contact|speak|talk|human|person|team|call/.test(msg)) {
    return "Absolutely! Our team would love to connect with you. You can:\n\n📧 Email us at info@syspara.in\n📞 Call us at +971 544 31 8822\n📅 Or I can take your details and have someone reach out within 1 business day.\n\nWould you like me to pass your details to our team?";
  }

  // Default — still helpful
  return "That's a great question! SysPara specialises in AI agents, automation, web development, and cloud infrastructure for modern businesses.\n\nI'd love to give you a more specific answer — could you tell me a bit more about what you're looking to achieve? Or feel free to ask about our services, pricing, timelines, or industries we work with.";
}

export default function LeadChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [stage, setStage] = useState<LeadStage>('chat');
  const [lead, setLead] = useState({ name: '', email: '' });
  const [typing, setTyping] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);

  function nextId() {
    idRef.current += 1;
    return idRef.current;
  }

  function addBot(text: string, delay = 600) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), role: 'bot', text }]);
    }, delay);
  }

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ id: nextId(), role: 'bot', text: GREETING }]);
      }, 300);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 400);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  async function handleSend(text?: string) {
    const val = (text ?? input).trim();
    if (!val || typing) return;
    setInput('');
    const newCount = msgCount + 1;
    setMsgCount(newCount);
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: val }]);

    if (stage === 'ask_name') {
      const name = val;
      setLead((l) => ({ ...l, name }));
      setStage('ask_email');
      addBot(`Nice to meet you, ${name}! 😊 What's the best email address for our team to reach you?`);
      return;
    }

    if (stage === 'ask_email') {
      if (!isValidEmail(val)) {
        addBot("Hmm, that doesn't look like a valid email address. Could you double-check?", 500);
        return;
      }
      const updatedLead = { ...lead, email: val };
      setLead(updatedLead);
      setStage('done');
      // submit lead
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: updatedLead.name,
            email: updatedLead.email,
            service: 'Chatbot Lead',
            message: `Lead captured via chatbot. Conversation had ${newCount} messages.`,
          }),
        });
      } catch {
        // silent
      }
      addBot(
        `Perfect! ✅ I've passed your details to our team, ${updatedLead.name}. Someone will reach out to ${updatedLead.email} within 1 business day.\n\nIn the meantime, feel free to explore our services or try the AI playground at syspara.in/demo. Is there anything else I can help you with?`,
        800,
      );
      return;
    }

    // After 3 exchanges, offer to connect with team
    if (stage === 'chat' && newCount === 3) {
      const response = getBotResponse(val);
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { id: nextId(), role: 'bot', text: response }]);
        setTimeout(() => {
          addBot("By the way — would you like me to connect you with our team for a free consultation? I just need your name and email. 🙂", 800);
          setStage('ask_name');
        }, 1200);
      }, 700);
      return;
    }

    addBot(getBotResponse(val), 700);
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-200"
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-blue-400"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
            style={{ maxHeight: '520px' }}
            role="dialog"
            aria-modal="true"
            aria-label="SysPara AI chat assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SysPara AI</p>
                <div className="flex items-center gap-1 text-xs text-emerald-400">
                  <motion.span className="h-1.5 w-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  Online
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto text-slate-500 hover:text-slate-300 transition-colors" aria-label="Close chat">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${msg.role === 'bot' ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-slate-700'}`}>
                      {msg.role === 'bot' ? <Bot size={12} className="text-white" /> : <User size={12} className="text-slate-300" />}
                    </div>
                    <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'bot' ? 'bg-white/8 text-slate-200 rounded-bl-sm' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {typing && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-end gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm bg-white/8 px-4 py-3 flex items-center gap-1.5">
                    {[0, 0.15, 0.3].map((d, i) => (
                      <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-500" animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: d }} />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Quick replies — only on first message */}
              {messages.length === 1 && !typing && stage === 'chat' && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/8 px-3 py-3 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                disabled={typing}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition disabled:opacity-50"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || typing}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
