'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Bot, TrendingUp, Zap, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

type AgentStatus = 'active' | 'processing' | 'idle';

type Agent = {
  id: string;
  name: string;
  task: string;
  status: AgentStatus;
  runs: number;
};

type Metric = {
  label: string;
  value: number;
  unit: string;
  delta: string;
  icon: React.ReactNode;
  color: string;
};

const STATUS_CONFIG: Record<AgentStatus, { label: string; color: string; icon: React.ReactNode }> =
  {
    active: { label: 'Active', color: 'text-emerald-400', icon: <CheckCircle size={13} /> },
    processing: { label: 'Processing', color: 'text-amber-400', icon: <Clock size={13} /> },
    idle: { label: 'Idle', color: 'text-slate-500', icon: <AlertCircle size={13} /> },
  };

const INITIAL_AGENTS: Agent[] = [
  { id: 'a1', name: 'Lead Qualifier', task: 'Scoring inbound leads from CRM', status: 'active', runs: 142 },
  { id: 'a2', name: 'Support Bot', task: 'Resolving tier-1 support tickets', status: 'active', runs: 89 },
  { id: 'a3', name: 'Report Generator', task: 'Compiling weekly analytics digest', status: 'processing', runs: 34 },
  { id: 'a4', name: 'Data Sync Agent', task: 'Syncing Salesforce ↔ HubSpot', status: 'idle', runs: 210 },
];

function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return value;
}

function MetricCard({ metric }: { metric: Metric }) {
  const count = useCounter(metric.value);
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
    >
      <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${metric.color}`}>
        {metric.icon}
      </div>
      <p className="text-2xl font-bold text-white">
        {count.toLocaleString()}
        <span className="text-base font-normal text-slate-400 ml-1">{metric.unit}</span>
      </p>
      <p className="text-sm text-slate-400 mt-0.5">{metric.label}</p>
      <p className="text-xs text-emerald-400 mt-1">{metric.delta}</p>
    </motion.div>
  );
}

function AgentRow({ agent, index }: { agent: Agent; index: number }) {
  const cfg = STATUS_CONFIG[agent.status];
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/3 px-4 py-3 hover:bg-white/6 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/30 to-purple-600/30">
          <Bot size={15} className="text-blue-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">{agent.name}</p>
          <p className="text-xs text-slate-500">{agent.task}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:block text-xs text-slate-500">{agent.runs} runs</span>
        <span className={`flex items-center gap-1 text-xs font-medium ${cfg.color}`}>
          {agent.status === 'active' && (
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
          {cfg.icon}
          {cfg.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState<'overview' | 'agents'>('overview');

  const metrics: Metric[] = [
    {
      label: 'Tasks Automated',
      value: 4821,
      unit: '',
      delta: '↑ 12% this week',
      icon: <Zap size={18} />,
      color: 'bg-blue-600/20 text-blue-400',
    },
    {
      label: 'Hours Saved',
      value: 312,
      unit: 'hrs',
      delta: '↑ 8% this week',
      icon: <TrendingUp size={18} />,
      color: 'bg-purple-600/20 text-purple-400',
    },
    {
      label: 'Active Agents',
      value: 2,
      unit: '/ 4',
      delta: '2 processing or idle',
      icon: <Bot size={18} />,
      color: 'bg-cyan-600/20 text-cyan-400',
    },
    {
      label: 'Uptime',
      value: 99,
      unit: '%',
      delta: '30-day average',
      icon: <Activity size={18} />,
      color: 'bg-emerald-600/20 text-emerald-400',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              <Activity size={14} className="text-emerald-400" />
              Live Dashboard Preview
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Your AI Systems, <span className="gradient-text">At a Glance</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every client gets a real-time dashboard to monitor their AI agents, track automation
              performance, and measure ROI.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Dashboard shell */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-amber-500/70" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono">syspara-dashboard.app</span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Live
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex gap-1 border-b border-white/8 px-5 pt-3">
              {(['overview', 'agents'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors capitalize ${
                    activeTab === tab
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-5">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' ? (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                      {metrics.map((m) => (
                        <MetricCard key={m.label} metric={m} />
                      ))}
                    </div>

                    {/* Fake activity chart */}
                    <div className="mt-4 rounded-xl border border-white/8 bg-white/3 p-4">
                      <p className="text-xs text-slate-500 mb-3 font-medium">Automation Activity — Last 7 Days</p>
                      <div className="flex items-end gap-1.5 h-16">
                        {[40, 65, 50, 80, 72, 90, 85].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-blue-600 to-purple-600 opacity-70"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1.5 text-xs text-slate-600">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                          <span key={d}>{d}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="agents"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {INITIAL_AGENTS.map((agent, i) => (
                      <AgentRow key={agent.id} agent={agent} index={i} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
