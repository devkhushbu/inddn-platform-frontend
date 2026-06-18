"use client";

import { useState } from "react";
import { Shield, Video, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function VpnCard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex bg-card/45 backdrop-blur-md border border-border/40 rounded-2xl shadow-sm dark:shadow-lg dark:shadow-black/25 overflow-hidden flex-1 text-card-foreground select-none transition-all duration-300 hover:border-border/60 hover:shadow-md dark:hover:shadow-xl hover:bg-card/55">
      
      {/* Left Sidebar using shadcn styles */}
      <div className="w-12 bg-muted/30 flex flex-col items-center gap-4 py-4 border-r border-border/20 shrink-0">
        <button
          onClick={() => setActiveTab(0)}
          className={cn(
            "p-2 rounded-xl transition-all duration-300 cursor-pointer",
            activeTab === 0 
              ? "bg-primary/20 text-primary border border-primary/25" 
              : "text-muted-foreground/50 hover:text-muted-foreground"
          )}
          aria-label="VPN Benefits"
        >
          <Shield className="w-4 h-4" />
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={cn(
            "p-2 rounded-xl transition-all duration-300 cursor-pointer",
            activeTab === 1 
              ? "bg-primary/20 text-primary border border-primary/25" 
              : "text-muted-foreground/50 hover:text-muted-foreground"
          )}
          aria-label="VPN Status"
        >
          {/* Custom triangle/stats icon matching screenshot */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
            <polygon points="12,2 2,22 22,22" />
            <line x1="8" y1="18" x2="16" y2="18" />
            <line x1="10" y1="14" x2="14" y2="14" />
          </svg>
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={cn(
            "p-2 rounded-xl transition-all duration-300 cursor-pointer",
            activeTab === 2 
              ? "bg-primary/20 text-primary border border-primary/25" 
              : "text-muted-foreground/50 hover:text-muted-foreground"
          )}
          aria-label="VPN Video Streaming"
        >
          <Video className="w-4 h-4" />
        </button>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 p-5 flex flex-col justify-between min-h-[170px]">
        {activeTab === 0 && (
          <div className="flex flex-col gap-3 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs font-black tracking-wider text-card-foreground">BRAVE VPN</span>
                <span className="text-[9px] text-muted-foreground/60 font-light">Powered by Guardian</span>
              </div>
            </div>

            {/* List Benefits */}
            <ul className="flex flex-col gap-1.5 my-1">
              {[
                "Extra privacy & security online",
                "Hide your IP & change your location",
                "Protect every app on your device"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-card-foreground/80 font-light leading-tight">
                  <div className="w-3.5 h-3.5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Actions */}
            <div className="flex items-center justify-between gap-2 mt-1">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] sm:text-xs font-semibold py-2 px-4 rounded-full transition-all active:scale-95 cursor-pointer shadow-sm">
                Start free trial
              </button>
              <a href="#" className="text-[10px] text-muted-foreground/60 hover:text-foreground underline underline-offset-2 transition-colors">
                Already purchased?
              </a>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="flex flex-col justify-between h-full gap-3 animate-fade-in">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">VPN STATS</span>
                <span className="text-[9px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
                  Secured
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground/80 font-light leading-normal">
                Encrypted tunnels shield your connections. Brave VPN prevents ISP tracking and snooping on public networks.
              </p>
              
              <div className="grid grid-cols-2 gap-2 mt-3 bg-muted/20 p-2 rounded-xl border border-border/20">
                <div className="flex flex-col">
                  <span className="text-[9px] text-muted-foreground/60">BANDWIDTH</span>
                  <span className="text-xs font-bold text-primary">Unlimited</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-muted-foreground/60">SERVERS</span>
                  <span className="text-xs font-bold text-foreground">40+ Countries</span>
                </div>
              </div>
            </div>
            <button className="w-fit flex items-center gap-1.5 text-[11px] text-primary hover:text-primary/80 font-medium transition-colors cursor-pointer mt-1">
              View server locations <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {activeTab === 2 && (
          <div className="flex flex-col justify-between h-full gap-3 animate-fade-in">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-muted-foreground tracking-wider">STREAMING MODE</span>
              </div>
              <p className="text-[11px] text-muted-foreground/80 font-light leading-normal">
                Optimize speeds for streaming video and media, avoiding buffering while maintaining total data encryption.
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 mt-2">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] sm:text-xs font-medium py-2 px-4 rounded-full transition-all active:scale-95 cursor-pointer shadow-sm">
                Configure Stream Mode
              </button>
              <span className="text-[9px] text-muted-foreground/50">10 Gbps nodes</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
