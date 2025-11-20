import { BlogCard } from "@/components/ui/blog-card";
import { getBlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog - Rushikesh Ghotekar",
  description: "Thoughts on software development, system design, and more.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
      <div className="flex flex-col space-y-8">
        {allBlogs.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.metadata.title}
            summary={post.metadata.summary}
            publishedAt={post.metadata.publishedAt}
          />
        ))}
      </div>
    </div>
  );
}
