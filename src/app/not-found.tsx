import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 opacity-15 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600 opacity-15 blur-3xl rounded-full" />
      </div>
      <div className="relative z-10 text-center px-4">
        <p className="text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
