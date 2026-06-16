"use client";

import { useEffect, useState } from "react";

export function StatsCard() {
  const [trackers, setTrackers] = useState(0);
  const [bandwidth, setBandwidth] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Count-up animation values
    const targetTrackers = 43042;
    const targetBandwidth = 1.22;
    const targetTime = 36;

    const duration = 1200; // 1.2 seconds
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      
      // Easing function outQuad
      const progress = currentStep / steps;
      const easeProgress = progress * (2 - progress);

      setTrackers(Math.floor(targetTrackers * easeProgress));
      setBandwidth(parseFloat((targetBandwidth * easeProgress).toFixed(2)));
      setTime(Math.floor(targetTime * easeProgress));

      if (currentStep >= steps) {
        clearInterval(interval);
        setTrackers(targetTrackers);
        setBandwidth(targetBandwidth);
        setTime(targetTime);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-card/45 backdrop-blur-md border border-border/40 p-5 sm:p-6 rounded-2xl shadow-lg shadow-black/25 flex-1 min-h-[140px] text-card-foreground select-none transition-all duration-300 hover:border-border/60 hover:shadow-xl hover:bg-card/55">
      {/* Title */}
      <h2 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6">
        STATS
      </h2>
      
      {/* Stats Columns */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end">
        {/* Trackers blocked */}
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-orange-500 leading-none mb-1.5 sm:mb-2">
            {trackers.toLocaleString()}
          </span>
          <span className="text-[10px] sm:text-[11px] leading-tight text-muted-foreground font-light">
            Trackers & ads blocked
          </span>
        </div>
        
        {/* Bandwidth saved */}
        <div className="flex flex-col border-l border-border/30 pl-2 sm:pl-4">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-violet-400 leading-none mb-1.5 sm:mb-2">
            {bandwidth} <span className="text-xs sm:text-sm font-semibold">GB</span>
          </span>
          <span className="text-[10px] sm:text-[11px] leading-tight text-muted-foreground font-light">
            Bandwidth saved
          </span>
        </div>
        
        {/* Time saved */}
        <div className="flex flex-col border-l border-border/30 pl-2 sm:pl-4">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-none mb-1.5 sm:mb-2">
            {time} <span className="text-xs sm:text-xs font-light text-muted-foreground">Minutes</span>
          </span>
          <span className="text-[10px] sm:text-[11px] leading-tight text-muted-foreground font-light">
            Time saved
          </span>
        </div>
      </div>
    </div>
  );
}
