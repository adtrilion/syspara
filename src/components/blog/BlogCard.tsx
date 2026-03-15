import Link from 'next/link';

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
};

export default function BlogCard({ title, excerpt, slug, date, category, readTime }: Props) {
  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">{category}</span>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-5 flex-1">{excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">{date} · {readTime}</span>
        <Link href={`/blog/${slug}`} className="text-blue-600 text-sm font-medium hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
}
