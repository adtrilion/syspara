'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) return;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="mb-4 text-4xl">✅</div>
        <h3 className="text-xl font-semibold text-slate-900">Thank you! We'll be in touch soon.</h3>
        <p className="text-gray-600 mt-2">Our team typically responds within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
          })}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          placeholder="Company Name"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('company')}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="service">Service Interested In</label>
        <select
          id="service"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
        {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
