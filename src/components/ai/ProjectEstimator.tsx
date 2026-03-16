'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Loader2, CheckCircle, DollarSign, Clock, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Answers = {
  companyType: string;
  solutionType: string;
  teamSize: string;
  automationNeeds: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
};

type Estimate = {
  scope: string;
  solution: string;
  costMin: string;
  costMax: string;
  timeline: string;
  highlights: string[];
  nextStep: string;
};

const STEPS = [
  {
    id: 'companyType',
    question: 'What type of company are you?',
    options: ['E-commerce / Retail', 'Healthcare / Clinic', 'Finance / Fintech', 'Logistics / Supply Chain', 'SaaS / Tech', 'Agency / Consulting', 'Education', 'Other'],
  },
  {
    id: 'solutionType',
    question: 'What AI solution are you looking for?',
    options: ['AI Automation & Workflows', 'AI Chatbot / Virtual Assistant', 'Predictive Analytics', 'AI Dashboard', 'Custom AI Agent', 'Web / Mobile App with AI', 'Full Digital Transformation', 'Not sure — need guidance'],
  },
  {
    id: 'teamSize',
    question: 'How large is your team?',
    options: ['Just me (solo)', '2–10 people', '11–50 people', '51–200 people', '200+ people'],
  },
  {
    id: 'automationNeeds',
    question: 'What is your biggest operational challenge?',
    options: ['Too much manual data entry', 'Slow customer response times', 'Difficulty scaling operations', 'Poor visibility into business data', 'High operational costs', 'Losing leads / poor follow-up', 'Compliance and reporting burden', 'Other'],
  },
  {
    id: 'budget',
    question: 'What is your approximate budget?',
    options: ['Under $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+', 'Not sure yet'],
  },
];

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export default function ProjectEstimator() {
  const [step, setStep] = useState(0); // 0-4 = questions, 5 = contact, 6 = results
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [contactError, setContactError] = useState('');
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [error, setError] = useState('');

  const currentStep = STEPS[step];
  const progress = Math.round((step / (STEPS.length + 1)) * 100);

  function selectOption(value: string) {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: value }));
    setTimeout(() => {
      if (step < STEPS.length - 1) setStep((s) => s + 1);
      else setStep(STEPS.length); // go to contact step
    }, 200);
  }

  async function submitContact() {
    if (!contact.name.trim()) return setContactError('Please enter your name.');
    if (!isValidEmail(contact.email)) return setContactError('Please enter a valid email address.');
    if (!contact.phone.trim()) return setContactError('Please enter your phone number.');
    setContactError('');
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/estimator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, ...contact }),
      });
      const data = await res.json();
      if (!res.ok || !data.estimate) throw new Error(data.error ?? 'Failed');
      setEstimate(data.estimate);
      setStep(6);
    } catch {
      setError('Something went wrong generating your estimate. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-slate-950 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">

        {/* Progress bar */}
        {step < 6 && (
          <div className="mb-10">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Step {Math.min(step + 1, STEPS.length + 1)} of {STEPS.length + 1}</span>
              <span>{progress}% complete</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">

          {/* Question steps */}
          {step < STEPS.length && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">{currentStep.question}</h2>
              <div className="grid gap-3">
                {currentStep.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className={`w-full text-left rounded-2xl border px-5 py-4 text-sm font-medium transition-all duration-150 ${
                      answers[currentStep.id as keyof Answers] === option
                        ? 'border-blue-500 bg-blue-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/8 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {option}
                      {answers[currentStep.id as keyof Answers] === option && <CheckCircle size={16} className="text-blue-400" />}
                    </span>
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep((s) => s - 1)} className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
              )}
            </motion.div>
          )}

          {/* Contact step */}
          {step === STEPS.length && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-8">
                <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                  Almost there
                </span>
                <h2 className="text-2xl font-bold text-white">Where should we send your estimate?</h2>
                <p className="mt-2 text-slate-400 text-sm">Your personalised AI project estimate is ready to generate. Enter your details and we'll send a copy to your inbox.</p>
              </div>
              <div className="space-y-4">
                <input
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  placeholder="Your email address"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                  value={contact.phone}
                  onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                  placeholder="Phone / WhatsApp number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {contactError && <p className="text-sm text-red-400" role="alert">{contactError}</p>}
                {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
                <button
                  onClick={submitContact}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? <><Loader2 size={18} className="animate-spin" /> Generating your estimate...</> : <> Generate My AI Estimate <ChevronRight size={18} /></>}
                </button>
              </div>
              <button onClick={() => setStep((s) => s - 1)} className="mt-4 flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                <ChevronLeft size={16} /> Back
              </button>
            </motion.div>
          )}

          {/* Results */}
          {step === 6 && estimate && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
                  <Zap size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Your AI Project Estimate</h2>
                <p className="text-slate-400 text-sm">Generated by Agent SysPara based on your answers</p>
              </div>

              {/* Cost + Timeline */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <DollarSign size={20} className="text-blue-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Estimated Cost</p>
                  <p className="text-2xl font-bold text-white">${Number(estimate.costMin).toLocaleString()} – ${Number(estimate.costMax).toLocaleString()}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <Clock size={20} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Timeline</p>
                  <p className="text-2xl font-bold text-white">{estimate.timeline}</p>
                </div>
              </div>

              {/* Scope */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">Recommended Solution</p>
                <p className="text-white font-semibold mb-2">{estimate.solution}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{estimate.scope}</p>
              </div>

              {/* Highlights */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">What's Included</p>
                <ul className="space-y-2">
                  {estimate.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10 p-6 text-center">
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-blue-600 opacity-20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-600 opacity-20 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-white font-semibold mb-1">Ready to get started?</p>
                  <p className="text-slate-400 text-sm mb-4">{estimate.nextStep}</p>
                  <Link
                    href="/contact#contact-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                  >
                    Book Free Consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
