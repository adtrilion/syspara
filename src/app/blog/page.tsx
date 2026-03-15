import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Blog | SysPara',
  description: 'Insights and articles on AI, automation, digital transformation, and technology strategy from SysPara.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
            />
          ))}
        </div>
      </section>
    </>
  );
}
