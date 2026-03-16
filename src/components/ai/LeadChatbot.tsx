'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { HIGH_INTENT_PATTERNS } from '@/data/siteKnowledge';

type Message = { id: number; role: 'bot' | 'user'; text: string };
type LeadStage = 'chat' | 'ask_name' | 'ask_email' | 'ask_phone' | 'done';

const GREETING =
  "Hey there! 👋 I'm Agent SysPara — your AI guide to everything SysPara offers.\n\nWhat's on your mind? Tell me about your business and I'll point you in the right direction.";

const QUICK_REPLIES = [
  'What services do you offer?',
  'How does AI automation work?',
  'What industries do you serve?',
  'How do I get started?',
];

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

// Build a valid Groq message array from displayed messages + new user message.
// Groq requires: alternating user/assistant, always starting with user.
function buildHistory(
  messages: Message[],
  newUserMessage: string,
): { role: 'user' | 'assistant'; content: string }[] {
  const history = messages
    .filter((m) => m.role === 'user' || m.role === 'bot')
    .map((m) => ({
      role: (m.role === 'bot' ? 'assistant' : 'user') as 'user' | 'assistant',
      content: m.text,
    }))
    .concat({ role: 'user', content: newUserMessage });

  // Drop everything before the first user message
  const firstUserIdx = history.findIndex((m) => m.role === 'user');
  const trimmed = firstUserIdx > 0 ? history.slice(firstUserIdx) : history;

  // Collapse consecutive same-role messages (safety net)
  return trimmed.reduce<{ role: 'user' | 'assistant'; content: string }[]>((acc, msg) => {
    if (acc.length > 0 && acc[acc.length - 1].role === msg.role) {
      acc[acc.length - 1].content += '\n' + msg.content;
      return acc;
    }
    return [...acc, msg];
  }, []);
}

export default function LeadChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [stage, setStage] = useState<LeadStage>('chat');
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [typing, setTyping] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);
  const highIntentTriggered = useRef(false);

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

  async function getAIResponse(currentMessages: Message[], userMessage: string): Promise<string> {
    const history = buildHistory(currentMessages, userMessage);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-10) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'API error');
      return data.reply ?? "I'm having trouble right now. Please contact us at info@syspara.in.";
    } catch {
      return "I'm having trouble right now. Please contact us at info@syspara.in or call +971 544 31 8822.";
    }
  }

  async function submitLead(finalLead: typeof lead, count: number) {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: finalLead.name,
          email: finalLead.email,
          phone: finalLead.phone,
          service: 'Agent SysPara — Chatbot Lead',
          message: `Lead captured via Agent SysPara after ${count} messages.`,
        }),
      });
    } catch {
      // silent
    }
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

    // Snapshot messages before state update for history building
    const currentMessages = [...messages];
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: val }]);

    // Lead capture flow — no AI needed
    if (stage === 'ask_name') {
      setLead((l) => ({ ...l, name: val }));
      setStage('ask_email');
      addBot(`Great to meet you, ${val}! 😊 What's the best email address to reach you?`);
      return;
    }

    if (stage === 'ask_email') {
      if (!isValidEmail(val)) {
        addBot("Hmm, that doesn't look right — could you double-check the email address?", 500);
        return;
      }
      setLead((l) => ({ ...l, email: val }));
      setStage('ask_phone');
      addBot("Perfect! And your phone number? (WhatsApp works great too 📱)");
      return;
    }

    if (stage === 'ask_phone') {
      const finalLead = { ...lead, phone: val };
      setLead(finalLead);
      setStage('done');
      await submitLead(finalLead, newCount);
      addBot(
        `You're all set, ${finalLead.name}! ✅ I've sent your details to the SysPara team — someone will reach out within 1 business day.\n\nIn the meantime, feel free to explore syspara.in/ai-demo to see our AI in action. Anything else I can help with?`,
        800,
      );
      return;
    }

    // AI response
    setTyping(true);
    const reply = await getAIResponse(currentMessages, val);
    setTyping(false);
    setMessages((prev) => [...prev, { id: nextId(), role: 'bot', text: reply }]);

    // High-intent detection
    if (HIGH_INTENT_PATTERNS.test(val) && !highIntentTriggered.current && stage === 'chat') {
      highIntentTriggered.current = true;
      setTimeout(() => {
        addBot(
          "It sounds like you're ready to move forward — that's exciting! 🚀\n\nI'd love to get our team to reach out to you directly. Could I grab your name to get started?",
          900,
        );
        setStage('ask_name');
      }, 1000);
      return;
    }

    // Fallback lead capture after 4 exchanges
    if (stage === 'chat' && newCount === 4 && !highIntentTriggered.current) {
      highIntentTriggered.current = true;
      setTimeout(() => {
        addBot(
          "By the way — would you like our team to reach out with a tailored recommendation for your business? I just need a couple of details. What's your name?",
          900,
        );
        setStage('ask_name');
      }, 1200);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-200"
        whileTap={{ scale: 0.95 }}
        aria-label="Open Agent SysPara chat"
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
            aria-label="Agent SysPara AI assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Agent SysPara</p>
                <div className="flex items-center gap-1 text-xs text-emerald-400">
                  <motion.span className="h-1.5 w-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  AI Sales Assistant
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

              {/* Quick replies */}
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
                placeholder={
                  stage === 'ask_name' ? 'Your name...' :
                  stage === 'ask_email' ? 'Your email...' :
                  stage === 'ask_phone' ? 'Your phone / WhatsApp...' :
                  'Ask me anything...'
                }
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
