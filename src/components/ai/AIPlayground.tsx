'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RotateCcw, Bot, User, ChevronDown, Sparkles, Zap, Brain, ShoppingCart, HeartPulse, BarChart3, Building2 } from 'lucide-react';
import Link from 'next/link';

type Message = { role: 'user' | 'assistant'; text: string; id: number };
type Model = { id: string; label: string; badge: string; systemPrompt: string };

const MODELS: Model[] = [
  {
    id: 'syspara-agent',
    label: 'SysPara Agent',
    badge: 'Business AI',
    systemPrompt: 'You are SysPara\'s AI business consultant. Help users understand how AI can transform their business. Be concise, specific, and always relate answers back to real business outcomes. Keep responses under 200 words.',
  },
  {
    id: 'automation-bot',
    label: 'Automation Bot',
    badge: 'Workflows',
    systemPrompt: 'You are an automation specialist at SysPara. Identify workflow inefficiencies and suggest specific AI-powered automation solutions. Be practical and give concrete examples. Keep responses under 200 words.',
  },
  {
    id: 'analytics-ai',
    label: 'Analytics AI',
    badge: 'Data & Insights',
    systemPrompt: 'You are a data analytics AI at SysPara. Help businesses extract insights and make data-driven decisions. Give specific, actionable analytics recommendations. Keep responses under 200 words.',
  },
];

const USE_CASES = [
  {
    icon: <ShoppingCart size={18} />,
    label: 'E-commerce',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    prompts: [
      'How can AI increase my e-commerce conversion rate?',
      'Can AI predict which products will sell out next month?',
      'How do I automate customer support for my online store?',
    ],
  },
  {
    icon: <HeartPulse size={18} />,
    label: 'Healthcare',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    prompts: [
      'How can AI reduce patient no-shows at my clinic?',
      'Can AI automate appointment scheduling and reminders?',
      'How do I use AI to speed up patient intake forms?',
    ],
  },
  {
    icon: <BarChart3 size={18} />,
    label: 'Finance',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    prompts: [
      'How can AI detect fraudulent transactions in real time?',
      'Can AI automate my monthly financial reporting?',
      'How do I use predictive analytics for cash flow forecasting?',
    ],
  },
  {
    icon: <Building2 size={18} />,
    label: 'Operations',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    prompts: [
      'Which of my business processes should I automate first?',
      'How can AI reduce manual data entry in my team?',
      'What is the ROI of deploying an AI agent for my business?',
    ],
  },
];

const GENERAL_PROMPTS = [
  'How can AI reduce my operational costs?',
  'What workflows can be automated with AI?',
  'How do AI agents work in practice?',
  'What ROI can I expect from AI adoption?',
  'How does SysPara integrate with existing systems?',
  'How long does AI implementation take?',
];

function MessageText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <span className="whitespace-pre-wrap leading-relaxed">
      {lines.map((line, i) => {
        const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <span key={i}>
            <span dangerouslySetInnerHTML={{ __html: bold }} />
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
    </span>
  );
}

export default function AIPlayground() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(0);

  function nextId() {
    idRef.current += 1;
    return idRef.current;
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', text: text.trim(), id: nextId() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Build clean history from current messages state + new user message
      const history = [
        ...messages.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.text })),
        { role: 'user' as const, content: text.trim() },
      ].slice(-8);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, systemPrompt: selectedModel.systemPrompt }),
      });
      const data = await res.json();
      const reply = data.reply ?? 'Sorry, I had trouble responding. Please try again.';
      setMessages((prev) => [...prev, { role: 'assistant', text: reply, id: nextId() }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Something went wrong. Please try again.', id: nextId() }]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  function reset() {
    setMessages([]);
    setLoading(false);
    setInput('');
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  const model = selectedModel;
  const useCase = USE_CASES[activeUseCase];

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">

        {/* Use case tabs */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 text-center">Try it for your industry</p>
          <div className="flex flex-wrap justify-center gap-3">
            {USE_CASES.map((uc, i) => (
              <button
                key={uc.label}
                onClick={() => setActiveUseCase(i)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeUseCase === i
                    ? `${uc.border} ${uc.bg} ${uc.color}`
                    : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                <span className={activeUseCase === i ? uc.color : 'text-slate-500'}>{uc.icon}</span>
                {uc.label}
              </button>
            ))}
          </div>

          {/* Use case prompts */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mt-4"
            >
              {useCase.prompts.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  disabled={loading}
                  className={`rounded-full border ${useCase.border} ${useCase.bg} px-4 py-2 text-xs ${useCase.color} hover:opacity-80 transition disabled:opacity-40`}
                >
                  {p}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6 items-start">

          {/* Left panel */}
          <div className="space-y-4">
            {/* Model selector */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">AI Model</p>
              <div className="relative">
                <button
                  onClick={() => setModelOpen((v) => !v)}
                  className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white hover:border-white/20 transition"
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${model.id === 'syspara-agent' ? 'bg-blue-400' : model.id === 'automation-bot' ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                    {model.label}
                  </span>
                  <ChevronDown size={14} className={`text-slate-500 transition-transform ${modelOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {modelOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-1 w-full rounded-xl border border-white/10 bg-slate-900 py-1 z-20 shadow-xl"
                    >
                      {MODELS.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => { setSelectedModel(m); setModelOpen(false); reset(); }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-white/5 transition ${m.id === model.id ? 'text-white' : 'text-slate-400'}`}
                        >
                          <span className="flex items-center gap-2">
                            <span className={`h-2 w-2 rounded-full ${m.id === 'syspara-agent' ? 'bg-blue-400' : m.id === 'automation-bot' ? 'bg-purple-400' : 'bg-cyan-400'}`} />
                            {m.label}
                          </span>
                          <span className="text-xs text-slate-600">{m.badge}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Capabilities */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Capabilities</p>
              {[
                { icon: <Brain size={14} />, label: 'Deep reasoning', color: 'text-blue-400' },
                { icon: <Zap size={14} />, label: 'Real-time responses', color: 'text-purple-400' },
                { icon: <Sparkles size={14} />, label: 'Context-aware', color: 'text-cyan-400' },
              ].map((c) => (
                <div key={c.label} className={`flex items-center gap-2 text-xs ${c.color}`}>
                  {c.icon}
                  <span className="text-slate-400">{c.label}</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>

            {/* General prompts */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">General Prompts</p>
              <div className="space-y-1.5">
                {GENERAL_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => sendMessage(p)}
                    disabled={loading}
                    className="w-full text-left rounded-lg px-3 py-2 text-xs text-slate-400 hover:bg-white/8 hover:text-white transition-all duration-150 disabled:opacity-40"
                  >
                    <span className="text-blue-500 mr-1.5">→</span>{p}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/estimator"
              className="block rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-center hover:bg-blue-500/15 transition group"
            >
              <p className="text-sm font-semibold text-white mb-1">Get a real estimate</p>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition">Answer 5 questions → AI generates your project scope & cost</p>
              <p className="text-xs text-blue-400 mt-2 font-medium">Try the Estimator →</p>
            </Link>
          </div>

          {/* Right panel — chat */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 overflow-hidden flex flex-col" style={{ minHeight: '580px' }}>
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 bg-slate-950/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-500 font-mono">syspara-playground · {model.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <motion.span className="h-1.5 w-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  Live AI
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-white/20 transition"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
              {messages.length === 0 && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">
                    <Bot size={24} className="text-white" />
                  </div>
                  <p className="text-white font-semibold mb-2">{model.label}</p>
                  <p className="text-sm text-slate-500 max-w-xs">Pick an industry tab above, select a prompt, or type your own question.</p>
                </motion.div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-xl ${msg.role === 'assistant' ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-slate-700'}`}>
                      {msg.role === 'assistant' ? <Bot size={14} className="text-white" /> : <User size={14} className="text-slate-300" />}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === 'assistant' ? 'bg-white/5 text-slate-200 rounded-tl-sm border border-white/8' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-sm'}`}>
                      <MessageText text={msg.text} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              {loading && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                  <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-white/5 border border-white/8 flex items-center gap-1.5">
                    {[0, 0.15, 0.3].map((d, i) => (
                      <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-500" animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: d }} />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/8 px-4 py-4">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
                  placeholder={`Ask ${model.label} anything...`}
                  disabled={loading}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-slate-600">
                Powered by Groq · llama3-70b · <Link href="/contact#contact-form" className="text-blue-500 hover:text-blue-400 transition-colors">Deploy this for your business →</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
