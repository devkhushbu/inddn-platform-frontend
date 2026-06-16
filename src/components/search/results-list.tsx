"use client";

import { Globe, GitBranch } from "lucide-react";

interface ResultsListProps {
  query: string;
}

interface SearchResultItem {
  title: string;
  url: string;
  displayUrl: string;
  snippet: string;
  icon?: React.ReactNode;
}

export function ResultsList({ query }: ResultsListProps) {
  const normQuery = query.toLowerCase().trim();

  let results: SearchResultItem[] = [];

  const ReactLogoIcon = () => (
    <div className="w-5 h-5 rounded-full bg-[#1c1d22] flex items-center justify-center border border-white/5">
      <svg viewBox="-11.5 -10.23 23 20.47" className="w-3 h-3 stroke-[#58c4dc] fill-none" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    </div>
  );

  const VercelLogoIcon = () => (
    <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center border border-white/5">
      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,4 22,20 2,20" />
      </svg>
    </div>
  );

  const GithubLogoIcon = () => (
    <div className="w-5 h-5 rounded-full bg-card flex items-center justify-center border border-border">
      <GitBranch className="w-3 h-3 text-foreground" />
    </div>
  );

  const GeneralIcon = () => (
    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center border border-border">
      <Globe className="w-3 h-3 text-muted-foreground" />
    </div>
  );

  if (normQuery.includes("next")) {
    results = [
      {
        title: "Next.js by Vercel - The React Framework for the Web",
        url: "https://nextjs.org",
        displayUrl: "https://nextjs.org",
        snippet: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with React Server Components, server actions, and route handlers.",
        icon: <VercelLogoIcon />
      },
      {
        title: "Next.js Documentation - Learn key framework features",
        url: "https://nextjs.org/docs",
        displayUrl: "https://nextjs.org › docs",
        snippet: "Welcome to the Next.js documentation. Access tutorials, APIs, reference modules, and guides to build applications using either the App Router or the Pages Router.",
        icon: <VercelLogoIcon />
      },
      {
        title: "vercel/next.js: The React Framework - GitHub repository",
        url: "https://github.com/vercel/next.js",
        displayUrl: "https://github.com › vercel › next.js",
        snippet: "GitHub repository for Next.js. Inspect framework codebase, check open issues, contribute to releases, and read discussions about React server capabilities.",
        icon: <GithubLogoIcon />
      },
      {
        title: "Deploying Next.js applications on Vercel Hosting Platform",
        url: "https://vercel.com/templates/next.js",
        displayUrl: "https://vercel.com › templates › next.js",
        snippet: "Get started instantly with templates for Next.js. Configure zero-setup deployments, check analytics, and implement global edge networking.",
        icon: <VercelLogoIcon />
      }
    ];
  } else if (normQuery.includes("react")) {
    results = [
      {
        title: "React - A JavaScript library for building user interfaces",
        url: "https://react.dev",
        displayUrl: "https://react.dev",
        snippet: "React lets you build user interfaces out of individual components. Create React components using JavaScript, manage local states, and handle global configurations.",
        icon: <ReactLogoIcon />
      },
      {
        title: "React Reference & Quick Start Docs",
        url: "https://react.dev/reference",
        displayUrl: "https://react.dev › reference",
        snippet: "Browse official React documentation. Read about Hooks like useState, useEffect, useContext, and standard React DOM APIs for client and server rendering.",
        icon: <ReactLogoIcon />
      },
      {
        title: "facebook/react: A declarative, flexible library - GitHub",
        url: "https://github.com/facebook/react",
        displayUrl: "https://github.com › facebook › react",
        snippet: "Source code repository for React. Learn about the component rendering lifecycle, concurrent rendering features, and open source development workflows.",
        icon: <GithubLogoIcon />
      },
      {
        title: "React Native · Learn how to build native apps with React",
        url: "https://reactnative.dev",
        displayUrl: "https://reactnative.dev",
        snippet: "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
        icon: <ReactLogoIcon />
      }
    ];
  } else if (normQuery.includes("shadcn")) {
    results = [
      {
        title: "shadcn/ui - Beautifully designed components for React apps",
        url: "https://ui.shadcn.com",
        displayUrl: "https://ui.shadcn.com",
        snippet: "Accessible and customizable components that you can copy and paste into your apps. Built with Radix UI primitives and styled with Tailwind CSS.",
        icon: <VercelLogoIcon />
      },
      {
        title: "shadcn-ui/ui: Component source code and blueprints - GitHub",
        url: "https://github.com/shadcn-ui/ui",
        displayUrl: "https://github.com › shadcn-ui › ui",
        snippet: "Explore the shadcn/ui GitHub codebase. Download templates, contribute components like Carousel, Sidebar, Accordion, and submit bug fixes.",
        icon: <GithubLogoIcon />
      },
      {
        title: "Getting Started with shadcn/ui and Next.js Frameworks",
        url: "https://ui.shadcn.com/docs/installation/next",
        displayUrl: "https://ui.shadcn.com › docs › installation",
        snippet: "Step-by-step setup guides to install and configure shadcn/ui inside a Next.js project. Set up components.json, tailwind configs, and utilities.",
        icon: <VercelLogoIcon />
      }
    ];
  } else {
    // Default fallback search results
    results = [
      {
        title: `Ultimate Guide & Tutorials for learning ${query} in 2026`,
        url: "#",
        displayUrl: `https://learn-coding.com › topics › ${query}`,
        snippet: `Discover beginner-friendly tutorials, advanced implementation plans, and architectural patterns to master ${query} effectively.`,
        icon: <GeneralIcon />
      },
      {
        title: `GitHub - Explore Open Source projects relating to ${query}`,
        url: "#",
        displayUrl: `https://github.com › search?q=${query}`,
        snippet: `Browse popular open source repositories, packages, tools, and developer modules built around ${query} by the community.`,
        icon: <GithubLogoIcon />
      },
      {
        title: `Latest News and Community Discussions on ${query}`,
        url: "#",
        displayUrl: `https://community-hub.org › discuss › ${query}`,
        snippet: `Join tech forum discussions, review development guides, and check out what experts are talking about regarding the future of ${query}.`,
        icon: <GeneralIcon />
      }
    ];
  }

  return (
    <div className="flex flex-col gap-6.5 max-w-[650px] w-full animate-fade-in mb-8 select-none">
      {results.map((item, idx) => (
        <article key={idx} className="flex flex-col gap-1 group">
          {/* Breadcrumb row */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground/80">
            {item.icon}
            <span className="truncate hover:underline cursor-pointer font-light">
              {item.displayUrl}
            </span>
          </div>

          {/* Title row */}
          <h3 className="text-[17px] sm:text-[18px] leading-snug font-semibold text-primary group-hover:underline transition-all">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              {item.title}
            </a>
          </h3>

          {/* Snippet snippet */}
          <p className="text-[12px] sm:text-[13px] text-muted-foreground leading-relaxed font-light">
            {item.snippet}
          </p>
        </article>
      ))}

      {/* Mock pagination */}
      <div className="flex items-center gap-2.5 mt-4 border-t border-border/10 pt-6">
        <span className="text-xs text-muted-foreground">Results Page:</span>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`w-7 h-7 text-xs font-bold rounded-full transition-colors cursor-pointer ${
              num === 1
                ? "bg-primary text-primary-foreground"
                : "bg-muted/40 hover:bg-muted/70 text-muted-foreground hover:text-foreground border border-border/45"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
