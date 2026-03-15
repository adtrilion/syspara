'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
};

type Step = 'greeting' | 'name' | 'email' | 'need' | 'done';

const STEP_PROMPTS: Record<Step, string> = {
  greeting: "Hi there! 👋 I'm SysPara's AI assistant. I'd love to learn about your business needs. What's your name?",
  name: "Great to meet you, {name}! What's the best email address to reach you?",
  email: "Perfect. And what's the main challenge you're hoping AI or automation can solve for your business?",
  need: "Thanks, {name}! I've captured your details and our team will reach out to {email} within 1 business day. Is there anything else you'd like to know?",
  done: "You're all set! 🎉 In the meantime, feel free to explore our services or read our blog. Have a great day!",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LeadChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>('greeting');
  const [lead, setLead] = useState({ name: '', email: '', need: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);

  function nextId() {
    idRef.current += 1;
    return idRef.current;
  }

  function addMessage(role: 'bot' | 'user', text: string) {
    setMessages((prev) => [...prev, { id: nextId(), role, text }]);
  }

  // Open → show greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => addMessage('bot', STEP_PROMPTS.greeting), 300);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 400);
  }, [open]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend() {
    const val = input.trim();
    if (!val || submitting) return;
    setInput('');
    setError('');
    addMessage('user', val);

    if (step === 'greeting') {
      const name = val;
      setLead((l) => ({ ...l, name }));
      setStep('name');
      setTimeout(
        () => addMessage('bot', STEP_PROMPTS.name.replace('{name}', name)),
        500,
      );
    } else if (step === 'name') {
      if (!isValidEmail(val)) {
        setTimeout(() => {
          addMessage('bot', "Hmm, that doesn't look like a valid email. Could you double-check?");
        }, 400);
        return;
      }
      const email = val;
      setLead((l) => ({ ...l, email }));
      setStep('email');
      setTimeout(() => addMessage('bot', STEP_PROMPTS.email), 500);
    } else if (step === 'email') {
      const need = val;
      const updatedLead = { ...lead, need };
      setLead(updatedLead);
      setStep('need');
      setSubmitting(true);
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: updatedLead.name, email: updatedLead.email, message: need }),
        });
      } catch {
        // silent — UX continues regardless
      } finally {
        setSubmitting(false);
      }
      setTimeout(
        () =>
          addMessage(
            'bot',
            STEP_PROMPTS.need
              .replace('{name}', updatedLead.name)
              .replace('{email}', updatedLead.email),
          ),
        500,
      );
    } else if (step === 'need') {
      setStep('done');
      setTimeout(() => addMessage('bot', STEP_PROMPTS.done), 500);
    } else {
      setTimeout(
        () =>
          addMessage(
            'bot',
            "Our team will be in touch soon! Feel free to explore the site while you wait. 😊",
          ),
        400,
      );
    }
  }

  function handleClose() {
    setOpen(false);
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
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
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
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
            style={{ maxHeight: '480px' }}
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
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Online
                </div>
              </div>
              <button
                onClick={handleClose}
                className="ml-auto text-slate-500 hover:text-slate-300 transition-colors"
                aria-label="Close chat"
              >
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
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        msg.role === 'bot'
                          ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                          : 'bg-slate-700'
                      }`}
                    >
                      {msg.role === 'bot' ? (
                        <Bot size={12} className="text-white" />
                      ) : (
                        <User size={12} className="text-slate-300" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        msg.role === 'bot'
                          ? 'bg-white/8 text-slate-200 rounded-bl-sm'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {error && <p className="text-xs text-red-400 text-center">{error}</p>}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/8 px-3 py-3 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || submitting}
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
