"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Search,
  X,
  Edit2
} from "lucide-react";

interface AppItem {
  name: string;
  url: string;
  bgColor: string;
  textColor: string;
  letter: string;
  icon?: React.ReactNode;
  logoUrl?: string;
}

interface AppsLauncherProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AppsLauncher({ open, onOpenChange }: AppsLauncherProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onOpenChange]);

  // Close on Escape keypress
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  // Favorites data matching the uploaded design colors and icons
  const favorites: AppItem[] = [
    { name: "Account", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "A", logoUrl: "/acoount.png" },
    { name: "IndianBrand", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "IB", logoUrl: "/indian-brand.png" },
    { name: "Gap Finder", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "GF", logoUrl: "/gap-finder.png" },
    { name: "INDDN Fund", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "IF", logoUrl: "/inddn-fund.png" },
    { name: "Builder Hub", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "BH", logoUrl: "/builder-hub.png" },
    { name: "Launch", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "L", logoUrl: "/launch.png" },
    { name: "Network", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "N", logoUrl: "/network.png" },
    { name: "Mentors", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "M", logoUrl: "/mentors.png" },
    { name: "Dashboard", url: "#", bgColor: "bg-white dark:bg-white/95 border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-900", textColor: "text-neutral-800 dark:text-neutral-900", letter: "D", logoUrl: "/dashboard.png" }
  ];

  // Indian Apps data with real Google favicon API brand logo URLs
  const indianApps: AppItem[] = [
    { name: "PhonePe", url: "https://www.phonepe.com", bgColor: "bg-[#5f259f]", textColor: "text-white", letter: "Pp", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=phonepe.com" },
    { name: "Paytm", url: "https://www.paytm.com", bgColor: "bg-[#00b9f5]", textColor: "text-white", letter: "Py", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=paytm.com" },
    { name: "CRED", url: "https://cred.club", bgColor: "bg-[#0f0f0f] border border-white/10", textColor: "text-white", letter: "Cr", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=cred.club" },
    { name: "Groww", url: "https://groww.in", bgColor: "bg-[#00d09c]", textColor: "text-white", letter: "Gr", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=groww.in" },
    { name: "Zerodha", url: "https://zerodha.com", bgColor: "bg-[#387ed1]", textColor: "text-white", letter: "Ze", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=zerodha.com" },
    { name: "BHIM", url: "https://www.bhimupi.org.in", bgColor: "bg-gradient-to-r from-[#FF9933] via-white to-[#138808] border border-border/20", textColor: "text-zinc-800 font-black", letter: "Bh", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=bhimupi.org.in" },
    { name: "Flipkart", url: "https://www.flipkart.com", bgColor: "bg-[#2874f0]", textColor: "text-white", letter: "Fk", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=flipkart.com" },
    { name: "Meesho", url: "https://www.meesho.com", bgColor: "bg-[#ff4f81]", textColor: "text-white", letter: "Me", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=meesho.com" },
    { name: "Nykaa", url: "https://www.nykaa.com", bgColor: "bg-[#fc2779]", textColor: "text-white", letter: "Ny", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=nykaa.com" },
    { name: "Myntra", url: "https://www.myntra.com", bgColor: "bg-gradient-to-tr from-[#ff3f6c] via-[#ff6f20] to-[#ff9017]", textColor: "text-white", letter: "My", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=myntra.com" },
    { name: "BigBasket", url: "https://www.bigbasket.com", bgColor: "bg-[#84c225]", textColor: "text-white", letter: "Bb", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=bigbasket.com" },
    { name: "JioMart", url: "https://www.jiomart.com", bgColor: "bg-[#002e6e]", textColor: "text-white", letter: "Jm", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=jiomart.com" },
    { name: "Zomato", url: "https://www.zomato.com", bgColor: "bg-[#cb202d]", textColor: "text-white", letter: "Zo", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=zomato.com" },
    { name: "Swiggy", url: "https://www.swiggy.com", bgColor: "bg-[#fc8019]", textColor: "text-white", letter: "Sw", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=swiggy.com" },
    { name: "Blinkit", url: "https://blinkit.com", bgColor: "bg-[#fcd303]", textColor: "text-black font-extrabold", letter: "Bl", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=blinkit.com" },
    { name: "IRCTC", url: "https://www.irctc.co.in", bgColor: "bg-[#0f295f]", textColor: "text-white", letter: "IR", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=irctc.co.in" },
    { name: "MakeMyTrip", url: "https://www.makemytrip.com", bgColor: "bg-[#0d619e]", textColor: "text-white", letter: "Mt", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=makemytrip.com" },
    { name: "OYO", url: "https://www.oyorooms.com", bgColor: "bg-[#ee2a24]", textColor: "text-white", letter: "Oy", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=oyorooms.com" },
    { name: "Ola", url: "https://www.olacabs.com", bgColor: "bg-[#000000] border border-white/10", textColor: "text-[#d4fe00] font-black", letter: "Ol", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=olacabs.com" },
    { name: "Rapido", url: "https://www.rapido.bike", bgColor: "bg-[#f6c600]", textColor: "text-black font-extrabold", letter: "Rp", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=rapido.bike" },
    { name: "redBus", url: "https://www.redbus.in", bgColor: "bg-[#d84e55]", textColor: "text-white", letter: "Rb", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=redbus.in" },
    { name: "JioCinema", url: "https://www.jiocinema.com", bgColor: "bg-[#d5006d]", textColor: "text-white", letter: "JC", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=jiocinema.com" },
    { name: "Hotstar", url: "https://www.hotstar.com", bgColor: "bg-[#030b1e] border border-blue-500/20", textColor: "text-[#00bfff] font-bold", letter: "Hs", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=hotstar.com" },
    { name: "JioSaavn", url: "https://www.jiosaavn.com", bgColor: "bg-[#00b1a0]", textColor: "text-white", letter: "Js", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=jiosaavn.com" },
    { name: "SonyLIV", url: "https://www.sonyliv.com", bgColor: "bg-[#181818] border border-yellow-500/20", textColor: "text-yellow-500 font-bold", letter: "SL", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=sonyliv.com" },
    { name: "Zee5", url: "https://www.zee5.com", bgColor: "bg-[#111111]", textColor: "text-[#ff0099] font-black", letter: "Z5", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=zee5.com" },
    { name: "ShareChat", url: "https://sharechat.com", bgColor: "bg-[#ffc107]", textColor: "text-black font-bold", letter: "Sc", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=sharechat.com" },
    { name: "DigiLocker", url: "https://www.digilocker.gov.in", bgColor: "bg-[#0275d8]", textColor: "text-white", letter: "Dl", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=digilocker.gov.in" },
    { name: "UMANG", url: "https://web.umang.gov.in", bgColor: "bg-[#0c2f70]", textColor: "text-white", letter: "Um", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=web.umang.gov.in" },
    { name: "MyGov", url: "https://www.mygov.in", bgColor: "bg-[#e26928]", textColor: "text-white", letter: "Mg", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=mygov.in" },
    { name: "Income Tax", url: "https://www.incometax.gov.in", bgColor: "bg-[#003366]", textColor: "text-white", letter: "IT", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=incometax.gov.in" },
    { name: "PharmEasy", url: "https://pharmeasy.in", bgColor: "bg-[#159a9c]", textColor: "text-white", letter: "Pe", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=pharmeasy.in" },
    { name: "1mg", url: "https://www.1mg.com", bgColor: "bg-[#ff6f61]", textColor: "text-white", letter: "1m", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=1mg.com" },
    { name: "Practo", url: "https://www.practo.com", bgColor: "bg-[#2d87f0]", textColor: "text-white", letter: "Pr", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=practo.com" },
    { name: "BYJU'S", url: "https://byjus.com", bgColor: "bg-[#803285]", textColor: "text-white", letter: "By", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=byjus.com" },
    { name: "Unacademy", url: "https://unacademy.com", bgColor: "bg-[#2d3a4b]", textColor: "text-white", letter: "Ua", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=unacademy.com" },
    { name: "Internshala", url: "https://internshala.com", bgColor: "bg-[#00a5ec]", textColor: "text-white", letter: "Is", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=internshala.com" },
    { name: "Naukri", url: "https://www.naukri.com", bgColor: "bg-[#002f5f]", textColor: "text-white", letter: "Nk", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=naukri.com" },
    { name: "Shine", url: "https://www.shine.com", bgColor: "bg-[#ff5a00]", textColor: "text-white", letter: "Sh", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=shine.com" },
    { name: "Inshorts", url: "https://www.inshorts.com", bgColor: "bg-[#d71920]", textColor: "text-white", letter: "In", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=inshorts.com" },
    { name: "DailyHunt", url: "https://www.dailyhunt.in", bgColor: "bg-[#163a8a]", textColor: "text-white", letter: "Dh", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=dailyhunt.in" },
    { name: "NDTV", url: "https://www.ndtv.com", bgColor: "bg-[#e50614]", textColor: "text-white", letter: "Nd", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=ndtv.com" },
    { name: "Jio", url: "https://www.jio.com", bgColor: "bg-[#0a2f96]", textColor: "text-white", letter: "Ji", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=jio.com" },
    { name: "Airtel", url: "https://www.airtel.in", bgColor: "bg-[#ff0000]", textColor: "text-white", letter: "At", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain=airtel.in" }
  ];

  // Filtering based on search query
  const filteredFavorites = favorites.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredIndianApps = indianApps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute right-0 top-12 w-[340px] sm:w-[380px] rounded-[28px] z-50 p-4 border flex flex-col gap-4 max-h-[520px] overflow-hidden",
        "animate-fade-in transition-all duration-300 backdrop-blur-3xl",
        isDark
          ? "bg-[#1f1f1f] border-[#303030] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.05)] text-foreground"
          : "bg-[#f1f3f4] border-[#e0e0e0] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.8)] text-foreground"
      )}
    >
      {/* Search Header */}
      <div className="relative flex items-center shrink-0 group">
        <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground/50 transition-colors duration-200 group-focus-within:text-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search apps..."
          className={cn(
            "w-full focus:outline-none rounded-2xl py-2.5 pl-10 pr-8 text-[11px] font-sans transition-all duration-300 text-foreground",
            isDark
              ? "bg-muted/40 border border-border/40 hover:bg-muted/65 focus:bg-background focus:border-border/80 focus:ring-1 focus:ring-ring/20 placeholder-muted-foreground/40"
              : "bg-card border border-border hover:bg-neutral-50/50 focus:bg-card focus:border-border/80 focus:ring-1 focus:ring-ring/10 placeholder-muted-foreground/50"
          )}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 p-0.5 hover:bg-muted-foreground/15 rounded-full transition-colors text-muted-foreground/80 cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* App grids wrapper (scrollable content) */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-5 custom-scrollbar max-h-[440px]">
        
        {/* YOUR FAVORITES (Double Layer Card) */}
        {filteredFavorites.length > 0 && (
          <div className={cn(
            "border transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)]",
            isDark 
              ? "bg-[#2d2d2d] border-[#3d3d3d] rounded-[24px] p-3.5" 
              : "bg-white border-neutral-200/60 rounded-[24px] p-3.5"
          )}>
            <div className="flex justify-between items-center px-1 mb-2">
              <span className="text-[13.5px] font-medium text-foreground/90 pl-1">
                Your favorites
              </span>
              <button 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer border hover:scale-105 active:scale-95",
                  isDark
                    ? "bg-white/[0.06] border-white/[0.08] hover:bg-white/[0.12] text-white/70 hover:text-white"
                    : "bg-black/[0.04] border-black/[0.05] hover:bg-black/[0.08] text-black/60 hover:text-black"
                )}
                aria-label="Edit favorites"
              >
                <Edit2 className="w-3 h-3" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-x-2 gap-y-2.5">
              {filteredFavorites.map((app, idx) => {
                const isActive = app.name === "Dashboard";
                return (
                  <a
                    key={idx}
                    href={app.url}
                    className={cn(
                      "relative flex flex-col items-center justify-center gap-1 p-2 w-full max-w-[86px] aspect-square rounded-2xl text-center group mx-auto transition-all duration-300 border select-none cursor-pointer",
                      "hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-95",
                      isActive
                        ? "bg-accent border-border/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                        : "border-transparent"
                    )}
                  >
                    <AppIcon app={app} isDark={isDark} />
                    <span className="text-[10px] leading-tight text-foreground/85 font-medium tracking-wide truncate w-full px-1 group-hover:text-foreground group-hover:scale-102 transition-all duration-300">
                      {app.name}
                    </span>
                    {isActive && (
                      <span className={cn(
                        "absolute bottom-1 w-1 h-1 rounded-full",
                        isDark ? "bg-white/70 shadow-[0_0_4px_white]" : "bg-black/70"
                      )} />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* INDIAN APPS (Outside the Favorites card, sitting on the main popup bg) */}
        {filteredIndianApps.length > 0 && (
          <div className="space-y-3 pt-1">
            <div className="px-1.5">
              <span className="text-[13px] font-medium text-foreground/85 pl-1.5">
                🇮🇳 Indian Apps
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-x-2 gap-y-2.5">
              {filteredIndianApps.map((app, idx) => (
                <a
                  key={idx}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 p-2 w-full max-w-[86px] aspect-square rounded-2xl text-center group mx-auto transition-all duration-300 border border-transparent select-none cursor-pointer",
                    "hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:scale-95"
                  )}
                >
                  <AppIcon app={app} isDark={isDark} />
                  <span className="text-[10px] leading-tight text-foreground/85 font-medium tracking-wide truncate w-full px-1 group-hover:text-foreground group-hover:scale-102 transition-all duration-300">
                    {app.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {filteredFavorites.length === 0 && filteredIndianApps.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground gap-1.5 select-none">
            <Search className="w-8 h-8 opacity-25" />
            <span className="text-xs font-semibold">No apps found</span>
            <span className="text-[10.5px] opacity-65">Try searching for another brand</span>
          </div>
        )}

      </div>
    </div>
  );
}

// ── Sub-component to render icon with robust fallback ───────────────────────
function AppIcon({ app, isDark }: { app: AppItem; isDark: boolean }) {
  const [error, setError] = useState(false);

  const getGlowStyle = () => {
    // 1. Map Favorites name glows directly
    const favoritesGlowMap: Record<string, string> = {
      "Account": "rgba(239, 68, 68, 0.28)",      // Red
      "IndianBrand": "rgba(139, 92, 246, 0.28)",  // Violet
      "Gap Finder": "rgba(59, 130, 246, 0.28)",   // Blue
      "INDDN Fund": "rgba(16, 185, 129, 0.28)",   // Emerald
      "Builder Hub": "rgba(236, 72, 153, 0.28)",  // Pink
      "Launch": "rgba(244, 63, 94, 0.28)",        // Rose
      "Network": "rgba(14, 165, 233, 0.28)",       // Sky
      "Mentors": "rgba(245, 158, 11, 0.28)",       // Amber
      "Dashboard": "rgba(20, 184, 166, 0.28)"     // Teal
    };

    if (favoritesGlowMap[app.name]) {
      return {
        "--icon-glow": favoritesGlowMap[app.name],
      } as React.CSSProperties;
    }

    // 2. Check for custom hex colors
    const hexMatch = app.bgColor.match(/#([a-f0-9]{6})/i);
    const hex = hexMatch ? hexMatch[1] : null;
    if (hex) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return {
        "--icon-glow": `rgba(${r}, ${g}, ${b}, 0.28)`,
      } as React.CSSProperties;
    }

    if (app.name === "Myntra") {
      return { "--icon-glow": "rgba(255, 63, 108, 0.28)" } as React.CSSProperties;
    }
    if (app.name === "BHIM") {
      return { "--icon-glow": "rgba(255, 153, 51, 0.28)" } as React.CSSProperties;
    }
    return {
      "--icon-glow": isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)",
    } as React.CSSProperties;
  };

  const glowStyle = getGlowStyle();

  if (app.icon) {
    return (
      <div 
        className={cn(
          "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_15px_var(--icon-glow)] shrink-0",
          app.bgColor
        )}
        style={glowStyle}
      >
        {app.icon}
      </div>
    );
  }

  if (app.logoUrl && !error) {
    const isLocalLogo = app.logoUrl.startsWith("/");
    return (
      <div 
        className={cn(
          "rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_15px_var(--icon-glow)] shrink-0",
          isLocalLogo ? "w-14 h-14" : "w-11 h-11",
          !isLocalLogo && "p-2 border",
          !isLocalLogo && (isDark ? "bg-white/95 border-white/10" : "bg-white border-border/80")
        )}
        style={glowStyle}
      >
        <Image
          src={app.logoUrl}
          alt={`${app.name} Brand Logo`}
          onError={() => setError(true)}
          className={cn(
            "object-contain select-none pointer-events-none",
            isLocalLogo ? "w-14 h-14" : "w-7 h-7"
          )}
          width={isLocalLogo ? 56 : 28}
          height={isLocalLogo ? 56 : 28}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_15px_var(--icon-glow)] font-sans shrink-0",
        app.bgColor, app.textColor
      )}
      style={glowStyle}
    >
      <span className="text-sm font-black">{app.letter}</span>
    </div>
  );
}
