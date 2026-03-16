'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RotateCcw, Bot, User, ChevronDown, Sparkles, Zap, Brain } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; text: string; id: number };

type Model = { id: string; label: string; badge: string; color: string };

const MODELS: Model[] = [
  { id: 'syspara-agent', label: 'SysPara Agent', badge: 'Business AI', color: 'text-blue-400' },
  { id: 'automation-bot', label: 'Automation Bot', badge: 'Workflows', color: 'text-purple-400' },
  { id: 'analytics-ai', label: 'Analytics AI', badge: 'Data & Insights', color: 'text-cyan-400' },
];

const SYSTEM_PROMPTS: Record<string, string> = {
  'syspara-agent': 'You are SysPara\'s AI business consultant. Help users understand how AI can transform their business.',
  'automation-bot': 'You are an automation specialist. Identify workflow inefficiencies and suggest AI-powered solutions.',
  'analytics-ai': 'You are a data analytics AI. Help businesses extract insights and make data-driven decisions.',
};

const RESPONSES: Record<string, string[]> = {
  'syspara-agent': [
    `Great question! Here's how SysPara approaches this:\n\n**1. Discovery & Assessment**\nWe start by mapping your current workflows to identify high-impact automation opportunities.\n\n**2. Custom AI Design**\nOur team builds AI agents tailored to your specific business logic — not generic off-the-shelf tools.\n\n**3. Integration & Deployment**\nWe integrate directly with your CRM, ERP, and communication platforms for seamless operation.\n\n**4. Measurable Outcomes**\nClients typically see 40–70% reduction in manual workload within the first 90 days.\n\nWould you like to explore a specific use case for your industry?`,
    `Excellent! AI agents are transforming business operations in several key ways:\n\n→ **Customer Support** — Resolving 70%+ of inquiries without human intervention\n→ **Sales Automation** — Lead scoring, outreach, and follow-up on autopilot\n→ **Document Processing** — Extracting and routing data from invoices and contracts\n→ **Compliance Monitoring** — Real-time regulatory checks across all transactions\n\nSysPara has deployed agents across Healthcare, Finance, E-commerce, and Logistics sectors. Each agent is built to your exact specifications and integrates with your existing stack.\n\nReady to see what's possible for your business?`,
    `Here's a realistic breakdown of AI ROI for modern businesses:\n\n**Cost Reduction**\n• Operations: 30–60% reduction in manual processing costs\n• Support: 50–80% decrease in ticket resolution time\n• HR: 40% faster onboarding and document handling\n\n**Revenue Impact**\n• Personalization engines drive 15–25% higher conversion\n• Predictive analytics reduce churn by up to 35%\n• Faster response times increase customer satisfaction scores\n\nThe average SysPara client achieves full ROI within 6 months of deployment. Want to discuss what this could look like for your specific situation?`,
  ],
  'automation-bot': [
    `I've analyzed common workflow patterns and identified these high-impact automation opportunities:\n\n**Immediate Wins (Week 1–2)**\n✓ Email triage and auto-routing\n✓ Invoice data extraction and approval workflows\n✓ Meeting scheduling and calendar management\n\n**Medium-Term (Month 1–3)**\n✓ Customer onboarding automation\n✓ Inventory reorder triggers\n✓ Report generation and distribution\n\n**Strategic (Month 3–6)**\n✓ Predictive maintenance alerts\n✓ Dynamic pricing models\n✓ Cross-system data synchronization\n\nEach automation typically saves 5–20 hours per week per department. Which area would you like to prioritize?`,
    `Here's a workflow automation blueprint for your business:\n\n**Current State Analysis**\nMost businesses waste 30–40% of employee time on repetitive, rule-based tasks that AI can handle instantly.\n\n**Recommended Automation Stack**\n→ RPA layer for UI-based task automation\n→ AI layer for judgment-based decisions\n→ Integration layer connecting all your tools\n→ Monitoring layer for performance tracking\n\n**Expected Outcomes**\n• 60% reduction in processing time\n• 95%+ accuracy on data entry tasks\n• 24/7 operation without additional headcount\n\nSysPara builds end-to-end automation systems that scale with your business. Shall we map out your specific workflow?`,
  ],
  'analytics-ai': [
    `Based on industry benchmarks, here are the analytics capabilities that drive the most business value:\n\n**Predictive Models**\n📊 Customer churn prediction — identify at-risk accounts 30 days in advance\n📊 Demand forecasting — reduce inventory costs by 20–35%\n📊 Lead scoring — focus sales effort on highest-probability deals\n\n**Real-Time Dashboards**\n📊 Live revenue and conversion tracking\n📊 Operational KPI monitoring with anomaly alerts\n📊 Customer behavior analytics and segmentation\n\n**Data Infrastructure**\nWe build the data pipelines, warehouses, and ML models that power these insights — all integrated into your existing BI tools.\n\nWhat data do you currently have that we could turn into actionable intelligence?`,
    `Here's how predictive analytics creates competitive advantage:\n\n**The Data Flywheel**\nMore data → Better models → Better decisions → More revenue → More data\n\n**Key Use Cases by Industry**\n• **Retail**: Predict which products will trend 2–4 weeks ahead\n• **Finance**: Flag fraudulent transactions with 99.2% accuracy\n• **Healthcare**: Identify high-risk patients before complications arise\n• **SaaS**: Predict churn 45 days before cancellation\n\n**SysPara's Analytics Stack**\nWe use a combination of classical ML, deep learning, and LLM-powered analysis to deliver insights that are both accurate and explainable.\n\nReady to turn your data into a strategic asset?`,
  ],
};

const PROMPTS = [
  'How can AI reduce my operational costs?',
  'What workflows can be automated with AI?',
  'How do AI agents work in practice?',
  'What ROI can I expect from AI adoption?',
  'How does SysPara integrate with existing systems?',
  'Which industries benefit most from AI agents?',
  'How long does AI implementation take?',
  'What data do I need to get started with AI?',
];

function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

function StreamingMessage({ text }: { text: string }) {
  const { displayed } = useTypewriter(text, 12);
  return <MessageText text={displayed} />;
}

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
  const [streaming, setStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const [idCounter, setIdCounter] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const nextId = useCallback(() => {
    setIdCounter((c) => c + 1);
    return idCounter + 1;
  }, [idCounter]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText]);

  function getResponse(model: Model): string {
    const pool = RESPONSES[model.id] ?? RESPONSES['syspara-agent'];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  async function sendMessage(text: string) {
    if (!text.trim() || streaming) return;
    const userMsg: Message = { role: 'user', text: text.trim(), id: nextId() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setStreaming(true);

    const response = getResponse(selectedModel);
    setStreamingText(response);

    // simulate streaming delay based on response length
    await new Promise((r) => setTimeout(r, response.length * 12 + 400));

    setMessages((prev) => [...prev, { role: 'assistant', text: response, id: nextId() }]);
    setStreamingText('');
    setStreaming(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function reset() {
    setMessages([]);
    setStreamingText('');
    setStreaming(false);
    setInput('');
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  const model = selectedModel;

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">

          {/* Left panel — config */}
          <div className="space-y-4">
            {/* Model selector */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Model</p>
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

            {/* System prompt */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">System Prompt</p>
              <p className="text-xs text-slate-400 leading-relaxed">{SYSTEM_PROMPTS[model.id]}</p>
            </div>

            {/* Stats */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Capabilities</p>
              {[
                { icon: <Brain size={14} />, label: 'Reasoning', color: 'text-blue-400' },
                { icon: <Zap size={14} />, label: 'Real-time', color: 'text-purple-400' },
                { icon: <Sparkles size={14} />, label: 'Context-aware', color: 'text-cyan-400' },
              ].map((c) => (
                <div key={c.label} className={`flex items-center gap-2 text-xs ${c.color}`}>
                  {c.icon}
                  <span className="text-slate-400">{c.label}</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>

            {/* Prompt library */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Prompt Library</p>
              <div className="space-y-1.5">
                {PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => sendMessage(p)}
                    disabled={streaming}
                    className="w-full text-left rounded-lg px-3 py-2 text-xs text-slate-400 hover:bg-white/8 hover:text-white transition-all duration-150 disabled:opacity-40"
                  >
                    <span className="text-blue-500 mr-1.5">→</span>{p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel — chat */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 overflow-hidden flex flex-col" style={{ minHeight: '600px' }}>
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
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Live
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
              {messages.length === 0 && !streaming && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">
                    <Bot size={24} className="text-white" />
                  </div>
                  <p className="text-white font-semibold mb-2">{model.label}</p>
                  <p className="text-sm text-slate-500 max-w-xs">Select a prompt from the library or type your own question to get started.</p>
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

              {/* Streaming message */}
              {streaming && streamingText && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm bg-white/5 text-slate-200 border border-white/8">
                    <StreamingMessage text={streamingText} />
                    <motion.span
                      className="inline-block ml-0.5 h-4 w-0.5 bg-blue-400 align-middle"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Thinking indicator */}
              {streaming && !streamingText && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                  <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-white/5 border border-white/8 flex items-center gap-1.5">
                    {[0, 0.15, 0.3].map((d, i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-slate-500"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                      />
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
                  disabled={streaming}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || streaming}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-slate-600">This is a simulated demo. <a href="/contact#contact-form" className="text-blue-500 hover:text-blue-400 transition-colors">Contact us</a> to deploy real AI for your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
