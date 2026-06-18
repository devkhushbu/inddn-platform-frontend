"use client";

import { useState } from "react";
import { Newspaper, X } from "lucide-react";

export function NewsCard() {
  const [isNewsEnabled, setIsNewsEnabled] = useState(false);

  const mockNews = [
    { id: 1, source: "TechCrunch", title: "Next.js 15.5 ships with Turbo speed optimizations", time: "2h ago" },
    { id: 2, source: "Shadcn UI", title: "New sidebar layouts released in components library", time: "5h ago" },
    { id: 3, source: "GitHub Blog", title: "Copilot agents integrated natively in terminals", time: "1d ago" },
  ];

  return (
    <div className="flex flex-col bg-card/45 backdrop-blur-md border border-border/40 p-5 sm:p-6 rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/25 flex-1 min-h-[140px] text-card-foreground select-none transition-all duration-300 hover:border-border/60 hover:shadow-md dark:hover:shadow-xl hover:bg-card/55">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
          NEWS
        </h2>
        {isNewsEnabled && (
          <button 
            onClick={() => setIsNewsEnabled(false)}
            className="text-[10px] text-muted-foreground/60 hover:text-muted-foreground flex items-center gap-1 transition-colors cursor-pointer"
          >
            Disable <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Main Content Area */}
      {!isNewsEnabled ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Circular Purple Icon */}
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Newspaper className="w-5 h-5 text-primary" />
            </div>
            {/* Description */}
            <p className="text-[13px] sm:text-[14px] text-card-foreground/90 leading-normal max-w-[280px] font-normal">
              Turn on Brave News, and never miss a story
            </p>
          </div>
          
          {/* Action Button using shadcn classes */}
          <button
            onClick={() => setIsNewsEnabled(true)}
            className="w-full sm:w-auto text-xs sm:text-[13px] font-medium bg-secondary hover:bg-secondary/85 border border-border/30 text-secondary-foreground rounded-full py-2.5 px-5 transition-all active:scale-95 whitespace-nowrap cursor-pointer shadow-sm"
          >
            Turn on Brave News
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 animate-fade-in">
          {mockNews.map((news) => (
            <div 
              key={news.id} 
              className="flex items-start justify-between gap-3 group/item cursor-pointer border-b border-border/10 pb-2 last:border-0 last:pb-0"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-primary font-semibold tracking-wide uppercase">
                  {news.source}
                </span>
                <span className="text-xs sm:text-[13px] text-card-foreground group-hover/item:text-primary transition-colors line-clamp-1 font-light">
                  {news.title}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/50 shrink-0">
                {news.time}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
