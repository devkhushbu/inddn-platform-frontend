"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Shortcut {
  name: string;
  url: string;
  icon: React.ReactNode;
  cardClass?: string;
}

export function Shortcuts() {
  const [currentPage, setCurrentPage] = useState(0);

  // --- CUSTOM SVG BADGES & ICONS WITH SHADCN COLOR DESIGN SYSTEM ---
  
  // GitHub: White icon directly on beige-translucent card
  const GithubWhiteLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 fill-foreground drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );

  // OpenAI Badge: White squircle containing black OpenAI logo
  const OpenAiBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-white rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-black" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.6,9.5c0.2-0.7,0.1-1.4-0.2-2c-0.3-0.6-0.8-1.1-1.5-1.3c0-0.2,0-0.5-0.1-0.7c-0.2-0.9-0.8-1.6-1.6-2c-0.8-0.4-1.7-0.4-2.5,0c-0.4-0.4-1-0.7-1.6-0.8c-0.8-0.2-1.7,0-2.4,0.5C10.3,3,9.8,2.9,9.2,3C8.4,3.1,7.7,3.5,7.2,4.2C6.8,4,6.2,3.9,5.7,4C4.9,4.2,4.2,4.7,3.8,5.4C3.4,5.3,2.9,5.4,2.5,5.6C1.7,6.1,1.2,6.8,1,7.6c-0.1,0.4-0.1,0.8,0,1.2c-0.4,0.3-0.7,0.8-0.9,1.3c-0.3,0.7-0.3,1.5,0,2.2c0.2,0.7,0.6,1.2,1.3,1.5c0,0.2,0,0.5,0.1,0.7c0.2,0.9,0.8,1.6,1.6,2c0.6,0.3,1.3,0.4,1.9,0.3c0.4,0.4,0.9,0.7,1.5,0.8c0.8,0.2,1.7,0,2.4-0.5c0.4,0.2,0.9,0.3,1.5,0.2c0.8-0.1,1.5-0.5,2-1.2c0.4,0.2,1,0.3,1.5,0.2c0.8-0.2,1.5-0.7,1.9-1.4c0.4,0.1,0.9,0,1.3-0.2c0.8-0.5,1.3-1.2,1.5-2.1c0.1-0.4,0.1-0.8,0-1.2C20.4,10.6,20.7,10.1,20.6,9.5z M12.5,19.3c-0.6,0-1.2-0.2-1.7-0.5c0.1-0.1,0.3-0.2,0.4-0.3l3.7-2.1c0.3-0.2,0.5-0.5,0.5-0.9v-5.2l1.6-0.9c0,0,0,0,0.1,0v4.3C17.1,16.5,15,18.7,12.5,19.3z M4.7,14.6c-0.3-0.5-0.4-1.1-0.4-1.7c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.3,0.2l3.7,2.1c0.3,0.2,0.7,0.2,1,0l4.5-2.6v1.8l-3.9,2.2C8.3,17.6,6,16.7,4.7,14.6z M5,7.7C5.3,7.2,5.8,6.8,6.4,6.6c0,0.1,0,0.3,0,0.4v4.3c0,0.4,0.2,0.7,0.5,0.9l4.5,2.6l-1.6,0.9c0,0,0,0-0.1,0l-3.7-2.1C4.4,12.3,3.7,10.1,5,7.7z M17,11.2l-4.5-2.6V6.8l3.9-2.2c1.6,0.9,2.4,2.8,2.1,4.6c-0.2,0.8-0.6,1.4-1.2,1.9C17.2,11.1,17.1,11.2,17,11.2z M12.5,4.7c0.6,0,1.2,0.2,1.7,0.5c-0.1,0.1-0.3,0.2-0.4,0.3l-3.7,2.1c-0.3,0.2-0.5,0.5-0.5,0.9V13.7L8,14.6v-4.3C8,7.5,10.1,5.3,12.5,4.7z M14.1,10.3l-2.1-1.2L9.9,10.3V7.9l2.1-1.2l2.1,1.2V10.3z M19.3,9.4c0,0.6-0.1,1.1-0.4,1.6c-0.1-0.1-0.2-0.1-0.3-0.2l-3.7-2.1c-0.3-0.2-0.7-0.2-1,0L9.4,11.3V9.5l3.9-2.2C14.9,6.4,17.4,6.7,19,8.2C19.2,8.6,19.3,9,19.3,9.4z" />
      </svg>
    </div>
  );

  // Black Circle Vercel Badge
  const BlackCircleVercelBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-black rounded-full flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,4 22,20 2,20" />
      </svg>
    </div>
  );

  // Yellow Squircle Google Meet Badge
  const GoogleMeetBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-[#fbbc05] rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
      </svg>
    </div>
  );

  // Black Squircle shadcn double-slash Badge
  const ShadcnBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-black rounded-md flex items-center justify-center border border-white/10 shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-white stroke-2 fill-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="16" y1="5" x2="8" y2="19" />
        <line x1="12" y1="5" x2="4" y2="19" className="opacity-40" />
      </svg>
    </div>
  );

  // Blue Squircle LinkedIn Badge
  const LinkedinBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-[#0a66c2] rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784 1.764 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </div>
  );

  // YouTube Badge: Red squircle with white play triangle
  const YoutubeBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-red-600 rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <polygon points="9.5,7.5 16,12 9.5,16.5" />
      </svg>
    </div>
  );

  // Tailwind Badge: Cyan squircle with white waves
  const TailwindBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-teal-500 rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.5c-2.7 0-4.3 1.3-4.8 4 1-.7 2.2-.4 2.8.5 1 1.4.6 3-.7 3.8-1 .6-2.4.2-3.1-.7-.4-.5-.6-1.1-.6-1.7v-.2c0-2.4 1.8-4.5 4.3-4.8.7-.1 1.4-.1 2.1.1 1.1.3 2 .9 2.7 1.8.4.5.6 1.1.6 1.7 0 2.2-1.6 4.1-3.8 4.6-.7.2-1.4.1-2-.1-1.1-.3-2-.9-2.7-1.8-.4-.5-.6-1.1-.6-1.7 0-2.2 1.6-4.1 3.8-4.6"/>
      </svg>
    </div>
  );

  // StackOverflow Badge: Orange squircle with white lines
  const StackOverflowBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-[#ef8236] rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 15v4H4v-4H2v6h16v-6h-2zM7 11.5l7 1.5.3-1.9-7-1.5-.3 1.9zm1.3-4.3l6.3 3.1.9-1.7-6.3-3.1-.9 1.7zm2.4-3.7l5.2 4.7 1.3-1.4-5.2-4.7-1.3 1.4z" />
      </svg>
    </div>
  );

  // Opportunities Badge: Gradient squircle with target icon
  const OpportunitiesBadge = () => (
    <div className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 bg-gradient-to-tr from-orange-500 via-primary to-emerald-500 rounded-md flex items-center justify-center shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    </div>
  );

  const pages: Shortcut[][] = [
    [
      {
        name: "Opportunities",
        url: "/opportunities",
        icon: <OpportunitiesBadge />,
        cardClass: "bg-foreground/5 hover:bg-foreground/10 border-primary/20 shadow-inner",
      },
      {
        name: "GitHub",
        url: "https://github.com",
        icon: <GithubWhiteLogo />,
        cardClass: "bg-foreground/5 hover:bg-foreground/10 border-border/20 shadow-inner",
      },
      {
        name: "Order actions",
        url: "https://chat.openai.com",
        icon: <OpenAiBadge />,
      },
      {
        name: "Create Nex...",
        url: "https://nextjs.org",
        icon: <BlackCircleVercelBadge />,
      },
      {
        name: "Meet - dqi-...",
        url: "https://meet.google.com",
        icon: <GoogleMeetBadge />,
      },
      {
        name: "shadcn/ui",
        url: "https://ui.shadcn.com",
        icon: <ShadcnBadge />,
      },
      {
        name: "Feed",
        url: "https://linkedin.com",
        icon: <LinkedinBadge />,
      },
      {
        name: "Vercel",
        url: "https://vercel.com",
        icon: <BlackCircleVercelBadge />,
      },
    ],
    [
      {
        name: "YouTube",
        url: "https://youtube.com",
        icon: <YoutubeBadge />,
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com",
        icon: <TailwindBadge />,
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        icon: <StackOverflowBadge />,
      },
      {
        name: "shadcn/ui",
        url: "https://ui.shadcn.com",
        icon: <ShadcnBadge />,
      },
      {
        name: "Feed",
        url: "https://linkedin.com",
        icon: <LinkedinBadge />,
      },
      {
        name: "GitHub",
        url: "https://github.com",
        icon: <GithubWhiteLogo />,
        cardClass: "bg-foreground/5 hover:bg-foreground/10 border-border/20 shadow-inner",
      },
      {
        name: "Order actions",
        url: "https://chat.openai.com",
        icon: <OpenAiBadge />,
      },
    ]
  ];

  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-2xl mx-auto px-4 select-none">
      {/* Container with sliding animation transition */}
      <div className="relative overflow-hidden w-full py-0.5">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pageItems, idx) => (
            <div 
              key={idx} 
              // Changed grid to flex with tight padding/gap-x-2.5 to avoid stretching out
              className="shrink-0 w-full flex flex-wrap justify-center gap-y-3 gap-x-2.5 px-4"
            >
              {pageItems.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-1 w-[72px] text-center focus:outline-none"
                >
                  {/* Glass Card Container using shadcn/ui colors */}
                  <div className={cn(
                    "w-11 h-11 sm:w-11.5 sm:h-11.5 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-md dark:hover:shadow-lg backdrop-blur-md",
                    "hover:scale-105 hover:shadow-lg active:scale-95 group-focus-visible:ring-1.5 group-focus-visible:ring-ring group-focus-visible:ring-offset-1",
                    item.cardClass || "bg-card/30 hover:bg-card/45 border border-border/25"
                  )}>
                    {item.icon}
                  </div>
                  {/* Label using shadcn/ui text color */}
                  <span className="text-[10px] sm:text-[10.5px] text-card-foreground/85 font-medium tracking-wide truncate w-full px-1 dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] group-hover:text-card-foreground transition-colors">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center gap-1 mt-0.5">
        {pages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            aria-label={`Go to page ${idx + 1}`}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none",
              currentPage === idx 
                ? "bg-foreground scale-110 shadow-sm" 
                : "bg-foreground/30 hover:bg-foreground/50 active:scale-90"
            )}
          />
        ))}
      </div>
    </div>
  );
}
