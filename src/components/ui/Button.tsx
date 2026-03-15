import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export default function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed';
  const styles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25',
    outline: 'border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
