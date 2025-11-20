import { Hero } from "@/components/ui/hero";
import { ProjectCard } from "@/components/ui/project-card";
import { BlogCard } from "@/components/ui/blog-card";
import { projects } from "@/data/projects";
import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const allBlogs = getBlogPosts();
  const recentBlogs = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 space-y-24">
      <Hero />
      
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Selected Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Recent Writing</h2>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          {recentBlogs.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.metadata.title}
              summary={post.metadata.summary}
              publishedAt={post.metadata.publishedAt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
