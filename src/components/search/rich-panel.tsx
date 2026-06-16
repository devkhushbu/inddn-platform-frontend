"use client";

import { ExternalLink, Globe } from "lucide-react";

interface RichPanelProps {
  query: string;
}

export function RichPanel({ query }: RichPanelProps) {
  const normQuery = query.toLowerCase().trim();

  let data = {
    title: "",
    subtitle: "",
    description: "",
    logo: null as React.ReactNode,
    details: [] as { label: string; value: string }[],
    website: ""
  };

  if (normQuery.includes("next")) {
    data = {
      title: "Next.js",
      subtitle: "React Web Framework",
      description: "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
      logo: (
        <div className="w-full h-32 bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-inner">
          <svg viewBox="0 0 180 180" className="w-16 h-16 fill-white" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="90" fill="#111" />
            <path d="M140.73 147.23L96.22 89.28L96.17 124.62H87.1V55.37H96.17L139.73 112.5V55.37H148.8V136.72C148.8 140.71 145.74 144.15 140.73 147.23ZM110.15 97.43L101.07 85.55V55.37H110.15V97.43Z" />
          </svg>
        </div>
      ),
      details: [
        { label: "Original author", value: "Guillermo Rauch" },
        { label: "Developer", value: "Vercel" },
        { label: "Initial release", value: "October 25, 2016" },
        { label: "Written in", value: "JavaScript, TypeScript, Rust" },
        { label: "License", value: "MIT License" }
      ],
      website: "https://nextjs.org"
    };
  } else if (normQuery.includes("react")) {
    data = {
      title: "React",
      subtitle: "JavaScript Library",
      description: "React is a free and open-source front-end JavaScript library for building user interfaces based on component-driven development. It is maintained by Meta and a community of creators.",
      logo: (
        <div className="w-full h-32 bg-[#0c0d10] rounded-xl flex items-center justify-center border border-[#1a1c23] shadow-inner">
          <svg viewBox="-11.5 -10.23 23 20.47" className="w-16 h-16 stroke-[#58c4dc] fill-none animate-[spin_12s_linear_infinite]" strokeWidth="1">
            <circle cx="0" cy="0" r="2.05" fill="#58c4dc" />
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </svg>
        </div>
      ),
      details: [
        { label: "Developer", value: "Meta / Instagram / Community" },
        { label: "Initial release", value: "May 29, 2013" },
        { label: "Written in", value: "JavaScript, TypeScript" },
        { label: "License", value: "MIT License" },
        { label: "Platform", value: "Web, Mobile (React Native)" }
      ],
      website: "https://react.dev"
    };
  } else if (normQuery.includes("shadcn")) {
    data = {
      title: "shadcn/ui",
      subtitle: "UI Component Architecture",
      description: "shadcn/ui is a collection of re-usable interface components designed with Tailwind CSS and Radix UI primitives. It allows complete styling control since the code is copied straight to your project.",
      logo: (
        <div className="w-full h-32 bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-inner">
          <svg viewBox="0 0 256 256" className="w-14 h-14 stroke-white stroke-2 fill-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M128,0 L256,73.8 L256,221.5 L128,256 L0,221.5 L0,73.8 Z" />
            <line x1="56" y1="91.5" x2="200" y2="174.5" />
            <line x1="56" y1="174.5" x2="200" y2="91.5" />
          </svg>
        </div>
      ),
      details: [
        { label: "Creator", value: "Shadcn" },
        { label: "Initial release", value: "2023" },
        { label: "Technologies", value: "React, Radix UI, Tailwind CSS" },
        { label: "License", value: "MIT License" },
        { label: "Style type", value: "Copy & Paste code snippet model" }
      ],
      website: "https://ui.shadcn.com"
    };
  } else {
    // If not a recognized tech, return null to hide knowledge panel
    return null;
  }

  return (
    <div className="hidden lg:flex flex-col bg-card border border-border/40 p-5 rounded-2xl w-full max-w-[340px] text-card-foreground select-none shadow-sm flex-shrink-0 animate-fade-in self-start sticky top-[120px]">
      {/* Visual Badge/Logo Box */}
      {data.logo}

      {/* Title block */}
      <div className="mt-4 border-b border-border/30 pb-3">
        <h2 className="text-xl font-bold tracking-tight">{data.title}</h2>
        <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
          {data.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-[13px] text-card-foreground/80 leading-relaxed font-light py-3 border-b border-border/30">
        {data.description}
      </p>

      {/* Details list parameters */}
      <div className="flex flex-col gap-2.5 py-3 border-b border-border/30">
        {data.details.map((detail, idx) => (
          <div key={idx} className="flex flex-col text-xs leading-snug">
            <span className="text-muted-foreground font-medium">{detail.label}</span>
            <span className="text-foreground font-semibold mt-0.5">{detail.value}</span>
          </div>
        ))}
      </div>

      {/* Official Link actions */}
      <div className="flex items-center gap-4 pt-3 text-xs font-semibold">
        <a
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-primary hover:underline"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Official Website</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
