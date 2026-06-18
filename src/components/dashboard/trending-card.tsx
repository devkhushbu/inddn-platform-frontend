"use client";

import { TrendingUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function TrendingCard() {
  const router = useRouter();

  const trends = [
    "Next.js 15.5 release notes",
    "Tailwind CSS v4 linear gradients",
    "React 19 Server Actions guide",
    "shadcn/ui custom theme designs",
    "Indian brands global growth 2026"
  ];

  const handleTrendClick = (trend: string) => {
    router.push(`/search?q=${encodeURIComponent(trend)}`);
  };

  return (
    <div className="flex flex-col bg-card/45 backdrop-blur-md border border-border/40 p-5 sm:p-6 rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/25 flex-1 min-h-[140px] text-card-foreground select-none transition-all duration-300 hover:border-border/60 hover:shadow-md dark:hover:shadow-xl hover:bg-card/55">
      {/* Title */}
      <h2 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4">
        TRENDING SEARCHES
      </h2>

      {/* List items */}
      <ul className="flex flex-col gap-2.5">
        {trends.map((trend, idx) => (
          <li 
            key={idx}
            onClick={() => handleTrendClick(trend)}
            className="flex items-center justify-between group cursor-pointer border-b border-border/10 pb-2.5 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs sm:text-[13px] text-card-foreground/90 group-hover:text-primary transition-colors font-light">
                {trend}
              </span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
          </li>
        ))}
      </ul>
    </div>
  );
}
