"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  index: number;
}

export function ProjectCard({ title, description, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={link}
        target="_blank"
        className="group block p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
