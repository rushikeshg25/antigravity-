"use client";

import Link from "next/link";
import { format } from "date-fns";

interface BlogCardProps {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
}

export function BlogCard({ title, summary, publishedAt, slug }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block group p-6 -mx-6 rounded-xl hover:bg-accent/50 transition-colors"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground tabular-nums">
            {format(new Date(publishedAt), "MMM dd, yyyy")}
          </span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {summary}
        </p>
      </div>
    </Link>
  );
}
