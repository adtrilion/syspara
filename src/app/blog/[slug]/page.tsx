import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | SysPara Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-4 py-24">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Blog
      </Link>
      <span className="block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
        {post.category}
      </span>
      <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
      <p className="text-sm text-slate-400 mb-10">{post.date} · {post.readTime}</p>
      <div className="prose prose-slate max-w-none">
        {post.content.split('\n\n').map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-6">{para}</p>
        ))}
      </div>
      <div className="mt-16 relative overflow-hidden rounded-3xl bg-slate-950 p-10 text-center text-white">
        <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-blue-600 opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-purple-600 opacity-20 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Ready to implement AI in your business?</h2>
          <p className="text-slate-400 mb-6">Talk to SysPara and get a free consultation.</p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
