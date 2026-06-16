"use client";

import { Sparkles, BookOpen } from "lucide-react";

interface AiOverviewProps {
  query: string;
}

export function AiOverview({ query }: AiOverviewProps) {
  const normQuery = query.toLowerCase().trim();

  let summary = "";
  let sources: { name: string; url: string }[] = [];

  if (normQuery.includes("next")) {
    summary = "Next.js is a full-stack React framework built by Vercel. It streamlines web development by offering server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). Its compiler, written in Rust, speeds up builds, while features like React Server Components (RSC) and built-in image optimization improve runtime performance.";
    sources = [
      { name: "nextjs.org", url: "https://nextjs.org" },
      { name: "Vercel Blog", url: "https://vercel.com/blog" }
    ];
  } else if (normQuery.includes("react")) {
    summary = "React is an open-source front-end JavaScript library developed by Meta. It enables developers to create single-page applications by managing state and rendering components efficiently using a Virtual DOM. Its component-driven architecture facilitates reusability and clean codebase organization.";
    sources = [
      { name: "react.dev", url: "https://react.dev" },
      { name: "React GitHub", url: "https://github.com/facebook/react" }
    ];
  } else if (normQuery.includes("shadcn")) {
    summary = "shadcn/ui is an open-source UI design system built on top of Tailwind CSS and Radix UI primitives. Unlike traditional npm component libraries, it provides component code that developers copy and paste directly into their source directory, allowing complete customization of styles and structure.";
    sources = [
      { name: "ui.shadcn.com", url: "https://ui.shadcn.com" },
      { name: "shadcn GitHub", url: "https://github.com/shadcn-ui/ui" }
    ];
  } else {
    // Default fallback summary
    summary = `Showing search results for "${query}". You can browse the web search listings, inspect the rich knowledge panel on the right, or filter by category (Images, Videos, News). Let me know if you would like to run a specific mock query like "Next.js", "React", or "shadcn/ui" to unlock custom AI summaries.`;
    sources = [
      { name: "Web Indexes", url: "#" },
      { name: "Documentation Hub", url: "#" }
    ];
  }

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 shadow-sm select-none animate-fade-in mb-6">
      {/* Title block */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-linear-to-tr from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-sm font-bold bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          AI Overview
        </span>
      </div>

      {/* Main summary paragraph */}
      <p className="text-[13px] sm:text-[14px] leading-relaxed text-card-foreground font-light mb-4">
        {summary}
      </p>

      {/* Citations/Sources links */}
      <div className="flex flex-wrap items-center gap-2 border-t border-border/10 pt-3">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mr-1">
          Sources
        </span>
        {sources.map((src, idx) => (
          <a
            key={idx}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-muted/40 hover:bg-muted/70 border border-border/40 text-[11px] text-primary font-medium py-1 px-3 rounded-full transition-all"
          >
            <BookOpen className="w-3 h-3 text-primary" />
            <span>{src.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
