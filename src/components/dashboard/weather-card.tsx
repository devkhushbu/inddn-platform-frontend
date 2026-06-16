"use client";

import { CloudRain, ArrowUpRight, TrendingUp } from "lucide-react";

export function WeatherCard() {
  return (
    <div className="flex flex-col bg-card/45 backdrop-blur-md border border-border/40 p-5 sm:p-6 rounded-2xl shadow-lg shadow-black/25 flex-1 min-h-[140px] text-card-foreground select-none transition-all duration-300 hover:border-border/60 hover:shadow-xl hover:bg-card/55">
      
      {/* Title */}
      <h2 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-4">
        WEATHER & MARKETS
      </h2>

      {/* Grid containing Weather and Markets */}
      <div className="grid grid-cols-2 gap-4 flex-1 justify-items-stretch">
        
        {/* Weather section */}
        <div className="flex flex-col justify-between pr-2 border-r border-border/20">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-card-foreground">New Delhi</span>
            <span className="text-[9px] text-muted-foreground font-light">Partly Cloudy</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <CloudRain className="w-6 h-6 text-sky-400 animate-bounce" />
            <span className="text-xl sm:text-2xl font-bold leading-none">32°C</span>
          </div>
        </div>

        {/* Markets section */}
        <div className="flex flex-col justify-between pl-2">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-card-foreground flex items-center gap-1">
              Markets <TrendingUp className="w-3 h-3 text-emerald-500" />
            </span>
            <span className="text-[9px] text-muted-foreground font-light">NSE India</span>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <div className="flex items-center justify-between text-[11px] leading-tight">
              <span className="font-light text-muted-foreground">Nifty 50</span>
              <span className="text-emerald-500 font-bold flex items-center">
                +1.24% <ArrowUpRight className="w-2.5 h-2.5" />
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] leading-tight">
              <span className="font-light text-muted-foreground">Sensex</span>
              <span className="text-emerald-500 font-bold flex items-center">
                +0.95% <ArrowUpRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
