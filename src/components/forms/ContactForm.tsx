'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const inputBase = 'w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border bg-white/5 text-white placeholder-slate-500';
const inputNormal = 'border-white/10';
const inputError = 'border-red-500 focus:ring-red-500';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setApiError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
      reset();
    } catch {
      setApiError('Something went wrong. Please try again or email us at info@syspara.in');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="mb-4 text-4xl">✅</div>
        <h3 className="text-xl font-semibold text-white">Thank you! We'll be in touch soon.</h3>
        <p className="text-slate-400 mt-2">Our team typically responds within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-5" noValidate>
      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-sm text-red-400 mt-1" role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
          })}
        />
        {errors.email && <p className="text-sm text-red-400 mt-1" role="alert">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300" htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          placeholder="Company Name"
          className={`${inputBase} ${inputNormal}`}
          {...register('company')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300" htmlFor="service">Service Interested In</label>
        <select
          id="service"
          className={`${inputBase} ${errors.service ? inputError : inputNormal} bg-slate-800`}
          {...register('service', { required: 'Please select a service' })}
        >
          <option value="">Select a service...</option>
          <option value="ai-solutions">AI Solutions</option>
          <option value="ai-agents">AI Agents</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-apps">Mobile Apps</option>
          <option value="cloud-infrastructure">Cloud Infrastructure</option>
          <option value="it-consulting">IT Consulting</option>
        </select>
        {errors.service && <p className="text-sm text-red-400 mt-1" role="alert">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-slate-300" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputBase} ${errors.message ? inputError : inputNormal}`}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="text-sm text-red-400 mt-1" role="alert">{errors.message.message}</p>}
      </div>

      {apiError && (
        <p className="text-sm text-red-400 bg-red-900/20 border border-red-500/30 rounded-lg px-4 py-3" role="alert">
          {apiError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
