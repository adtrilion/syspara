'use client';

import { useState } from 'react';
import { Loader2, Users, MessageSquare, TrendingUp, Star, RefreshCw, LogOut } from 'lucide-react';

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  source: string;
  score: number | null;
  followed_up_at: string | null;
};

type Conversation = {
  id: string;
  session_id: string;
  created_at: string;
  message_count: number;
  lead_captured: boolean;
  lead_email: string | null;
  last_message_at: string;
};

function scoreColor(score: number | null) {
  if (!score) return 'text-slate-500';
  if (score >= 8) return 'text-emerald-400';
  if (score >= 6) return 'text-yellow-400';
  return 'text-red-400';
}

function scoreBg(score: number | null) {
  if (!score) return 'bg-slate-800';
  if (score >= 8) return 'bg-emerald-500/10 border-emerald-500/30';
  if (score >= 6) return 'bg-yellow-500/10 border-yellow-500/30';
  return 'bg-red-500/10 border-red-500/30';
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<'leads' | 'conversations'>('leads');

  async function login() {
    setLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin', {
        headers: { 'x-admin-secret': password },
      });
      if (!res.ok) {
        setAuthError('Incorrect password.');
        return;
      }
      const data = await res.json();
      setLeads(data.leads);
      setConversations(data.conversations);
      setAuthed(true);
    } catch {
      setAuthError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  }

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin', {
        headers: { 'x-admin-secret': password },
      });
      const data = await res.json();
      setLeads(data.leads);
      setConversations(data.conversations);
    } finally {
      setLoading(false);
    }
  }

  // Stats
  const totalLeads = leads.length;
  const hotLeads = leads.filter((l) => (l.score ?? 0) >= 8).length;
  const followedUp = leads.filter((l) => l.followed_up_at).length;
  const totalConvs = conversations.length;
  const convLeads = conversations.filter((c) => c.lead_captured).length;
  const convRate = totalConvs > 0 ? Math.round((convLeads / totalConvs) * 100) : 0;

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <p className="text-2xl font-bold gradient-text">SysPara Admin</p>
            <p className="text-slate-500 text-sm mt-1">Enter your admin password to continue</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && login()}
              placeholder="Admin password"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {authError && <p className="text-sm text-red-400" role="alert">{authError}</p>}
            <button
              onClick={login}
              disabled={loading || !password}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white disabled:opacity-50 transition hover:scale-[1.02]"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-slate-900/50 px-6 py-4 flex items-center justify-between">
        <p className="font-bold gradient-text text-lg">SysPara Admin</p>
        <div className="flex items-center gap-3">
          <button
            onClick={refresh}
            disabled={loading}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-white/20 transition"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
          <button
            onClick={() => { setAuthed(false); setPassword(''); }}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-white/20 transition"
          >
            <LogOut size={12} /> Sign out
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Users size={18} />, label: 'Total Leads', value: totalLeads, color: 'text-blue-400' },
            { icon: <Star size={18} />, label: 'Hot Leads (8+)', value: hotLeads, color: 'text-emerald-400' },
            { icon: <MessageSquare size={18} />, label: 'Conversations', value: totalConvs, color: 'text-purple-400' },
            { icon: <TrendingUp size={18} />, label: 'Conv. Rate', value: `${convRate}%`, color: 'text-amber-400' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['leads', 'conversations'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition capitalize ${
                tab === t
                  ? 'bg-blue-600 text-white'
                  : 'border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {t} {t === 'leads' ? `(${totalLeads})` : `(${totalConvs})`}
            </button>
          ))}
        </div>

        {/* Leads table */}
        {tab === 'leads' && (
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {['Score', 'Name', 'Email', 'Phone', 'Service', 'Source', 'Followed Up', 'Date'].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-slate-500">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/3 transition">
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border text-xs font-bold ${scoreBg(lead.score)} ${scoreColor(lead.score)}`}>
                          {lead.score ?? '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-white">{lead.name}</td>
                      <td className="px-4 py-3 text-slate-400">{lead.email}</td>
                      <td className="px-4 py-3 text-slate-400">{lead.phone || '—'}</td>
                      <td className="px-4 py-3 text-slate-400 max-w-[160px] truncate">{lead.service || '—'}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${lead.source === 'estimator' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                          {lead.source}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {lead.followed_up_at
                          ? <span className="text-emerald-400 text-xs">✓ {fmt(lead.followed_up_at)}</span>
                          : <span className="text-slate-600 text-xs">Pending</span>}
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{fmt(lead.created_at)}</td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr><td colSpan={8} className="px-4 py-12 text-center text-slate-600">No leads yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Conversations table */}
        {tab === 'conversations' && (
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {['Session', 'Messages', 'Lead Captured', 'Lead Email', 'Last Active', 'Started'].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-slate-500">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {conversations.map((conv) => (
                    <tr key={conv.id} className="border-b border-white/5 hover:bg-white/3 transition">
                      <td className="px-4 py-3 text-slate-500 font-mono text-xs">{conv.session_id.slice(-8)}</td>
                      <td className="px-4 py-3 text-white font-medium">{conv.message_count}</td>
                      <td className="px-4 py-3">
                        {conv.lead_captured
                          ? <span className="text-emerald-400 text-xs font-medium">✓ Yes</span>
                          : <span className="text-slate-600 text-xs">No</span>}
                      </td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{conv.lead_email || '—'}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{fmt(conv.last_message_at)}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{fmt(conv.created_at)}</td>
                    </tr>
                  ))}
                  {conversations.length === 0 && (
                    <tr><td colSpan={6} className="px-4 py-12 text-center text-slate-600">No conversations yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
