"use client";

import { useState } from "react";
import {
  Settings, Sparkles, Eye, EyeOff, LayoutGrid,
  CloudRain, Grid, RefreshCw, ImageIcon, Palette, Shuffle, GalleryHorizontal,
} from "lucide-react";
import { BackgroundImage, type BgEntry, type BgMode } from "./background-image";
import { BgPickerPanel } from "./bg-picker-panel";
import { SearchBar } from "./search-bar";
import { Shortcuts } from "./shortcuts";
import { StatsCard } from "./stats-card";
import { NewsCard } from "./news-card";
import { VpnCard } from "./vpn-card";
import { TrendingCard } from "./trending-card";
import { WeatherCard } from "./weather-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

type BgStyleMode = "auto" | "gradient" | "image";

export default function Dashboard() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isBgPickerOpen, setIsBgPickerOpen] = useState(false);

  // Visibility states
  const [showStats,    setShowStats]    = useState(true);
  const [showNews,     setShowNews]     = useState(true);
  const [showVpn,      setShowVpn]      = useState(true);
  const [showTrending, setShowTrending] = useState(true);
  const [showWeather,  setShowWeather]  = useState(true);
  const [bgBlur,       setBgBlur]       = useState(false);

  // Background control
  const [bgStyleMode,    setBgStyleMode]    = useState<BgStyleMode>("auto");
  const [bgRefreshToken, setBgRefreshToken] = useState(0);
  const [pinnedBg,       setPinnedBg]       = useState<BgEntry | null>(null); // null = random
  const [currentBg,      setCurrentBg]      = useState<BgEntry | null>(null); // tracked for picker

  const bgModeOptions: { key: BgStyleMode; label: string; icon: React.ReactNode }[] = [
    { key: "auto",     label: "Auto",  icon: <Shuffle   className="w-3 h-3" /> },
    { key: "gradient", label: "Color", icon: <Palette   className="w-3 h-3" /> },
    { key: "image",    label: "Photo", icon: <ImageIcon className="w-3 h-3" /> },
  ];

  // Derived mode for BackgroundImage component
  const derivedMode: BgMode | undefined =
    bgStyleMode === "auto" ? undefined : bgStyleMode;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden font-sans pb-0 bg-background text-foreground">

      {/* Background */}
      <div className={cn("transition-all duration-500", bgBlur ? "blur-md scale-102" : "")}>
        <BackgroundImage
          mode={derivedMode}
          refreshToken={bgRefreshToken}
          pinned={pinnedBg}
          onBgChange={setCurrentBg}
        />
      </div>

      {/* Background Picker Sheet */}
      {isBgPickerOpen && (
        <BgPickerPanel
          currentBg={currentBg}
          onSelect={(entry) => {
            setPinnedBg(entry);          // null = back to random
            if (entry) setBgStyleMode(entry.mode);
          }}
          onClose={() => setIsBgPickerOpen(false)}
        />
      )}

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header className="w-full flex items-center justify-between px-6 py-4 select-none z-40">

        {/* Left: quick links */}
        <div className="flex items-center gap-3.5 text-xs text-foreground/70 font-medium">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:underline transition-all cursor-pointer drop-shadow-sm"
          >
            Gmail
          </a>
          <a href="#" className="hover:text-foreground hover:underline transition-all cursor-pointer drop-shadow-sm">
            Images
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">

          {/* Weather mini badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-card/60 border border-border/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] text-foreground/80 font-medium shadow-sm">
            <CloudRain className="w-3.5 h-3.5 text-sky-400" />
            <span>32°C New Delhi</span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Wallpaper picker trigger */}
          <button
            onClick={() => setIsBgPickerOpen(true)}
            title="Choose Background"
            className="p-2.5 rounded-full hover:bg-muted text-foreground/70 hover:text-foreground transition-all duration-200 cursor-pointer"
            aria-label="Choose Background"
          >
            <GalleryHorizontal className="w-4.5 h-4.5" />
          </button>

          {/* Grid launcher */}
          <button
            className="p-2.5 rounded-full hover:bg-muted text-foreground/70 hover:text-foreground transition-all duration-200 cursor-pointer"
            aria-label="Apps"
          >
            <Grid className="w-4.5 h-4.5" />
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 via-card to-emerald-500 p-[1.5px] shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-[11px] font-black text-foreground">
              RK
            </div>
          </div>

          {/* Settings */}
          <div className="relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2.5 rounded-full bg-secondary hover:bg-secondary/85 text-secondary-foreground border border-border/40 backdrop-blur-md transition-all duration-300 shadow-md focus:outline-none cursor-pointer"
              aria-label="Settings"
            >
              <Settings className={cn("w-4.5 h-4.5 transition-transform duration-500", isSettingsOpen ? "rotate-90" : "hover:rotate-45")} />
            </button>

            {/* Settings Dropdown */}
            {isSettingsOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsSettingsOpen(false)} />
                <div className="absolute right-0 mt-3 w-64 bg-popover border border-border text-popover-foreground backdrop-blur-2xl rounded-2xl p-4 shadow-2xl z-50 animate-fade-in">
                  <div className="flex items-center gap-2 border-b border-border/40 pb-2.5 mb-3">
                    <LayoutGrid className="w-4 h-4 text-primary" />
                    <h3 className="text-xs font-bold tracking-wider uppercase text-popover-foreground">
                      Customize Page
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">

                    {/* Card visibility toggles */}
                    {(
                      [
                        ["Stats Card",     showStats,    setShowStats],
                        ["News Card",      showNews,     setShowNews],
                        ["VPN Card",       showVpn,      setShowVpn],
                        ["Trending Card",  showTrending, setShowTrending],
                        ["Weather Widget", showWeather,  setShowWeather],
                      ] as [string, boolean, (v: boolean) => void][]
                    ).map(([label, value, setter]) => (
                      <div key={label} className="flex items-center justify-between text-xs">
                        <span className="text-popover-foreground/80 font-light flex items-center gap-2">
                          {value
                            ? <Eye    className="w-3.5 h-3.5" />
                            : <EyeOff className="w-3.5 h-3.5 text-popover-foreground/40" />}
                          {label}
                        </span>
                        <button
                          onClick={() => setter(!value)}
                          className={cn("w-8 h-4.5 rounded-full p-0.5 transition-colors cursor-pointer", value ? "bg-primary" : "bg-muted")}
                        >
                          <div className={cn("w-3.5 h-3.5 rounded-full bg-background transition-transform", value ? "translate-x-3.5" : "translate-x-0")} />
                        </button>
                      </div>
                    ))}

                    {/* Background style controls */}
                    <div className="flex flex-col gap-2 border-t border-border/40 pt-3">
                      <span className="text-[10px] text-popover-foreground/50 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Background Style
                      </span>

                      {/* Auto / Color / Photo pills */}
                      <div className="flex gap-1.5">
                        {bgModeOptions.map(({ key, label, icon }) => (
                          <button
                            key={key}
                            onClick={() => { setBgStyleMode(key); setPinnedBg(null); }}
                            className={cn(
                              "flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer",
                              bgStyleMode === key
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-muted/50 text-popover-foreground/60 border-border/30 hover:bg-muted"
                            )}
                          >
                            {icon}{label}
                          </button>
                        ))}
                      </div>

                      {/* Open picker */}
                      <button
                        onClick={() => { setIsSettingsOpen(false); setIsBgPickerOpen(true); }}
                        className="flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg text-[10px] font-semibold bg-muted/40 hover:bg-muted border border-border/30 text-popover-foreground/70 hover:text-popover-foreground transition-all cursor-pointer group"
                      >
                        <ImageIcon className="w-3 h-3" />
                        Choose Photo / Colour…
                      </button>

                      {/* Refresh */}
                      <button
                        onClick={() => { setPinnedBg(null); setBgRefreshToken(t => t + 1); }}
                        className="flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg text-[10px] font-semibold bg-muted/40 hover:bg-muted border border-border/30 text-popover-foreground/70 hover:text-popover-foreground transition-all cursor-pointer group"
                      >
                        <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        Shuffle Background
                      </button>

                      {/* Show pinned name */}
                      {pinnedBg && (
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground bg-muted/30 border border-border/20 rounded-lg px-2.5 py-1.5">
                          <span className="truncate">📌 {pinnedBg.label ?? "Custom"}</span>
                          <button
                            onClick={() => setPinnedBg(null)}
                            className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer ml-2 shrink-0"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Blur toggle */}
                    <div className="flex items-center justify-between text-xs border-t border-border/40 pt-2.5">
                      <span className="text-popover-foreground/80 font-light flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Blur Background
                      </span>
                      <button
                        onClick={() => setBgBlur(!bgBlur)}
                        className={cn("w-8 h-4.5 rounded-full p-0.5 transition-colors cursor-pointer", bgBlur ? "bg-primary" : "bg-muted")}
                      >
                        <div className={cn("w-3.5 h-3.5 rounded-full bg-background transition-transform", bgBlur ? "translate-x-3.5" : "translate-x-0")} />
                      </button>
                    </div>

                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col justify-center items-center gap-6 py-6 sm:py-8 z-10 w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center select-none text-center mb-2 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] bg-gradient-to-r from-orange-500 via-foreground to-emerald-500 text-transparent bg-clip-text">
            INDDN
          </h1>
          <span className="text-[9px] sm:text-[10px] text-foreground/50 tracking-[0.2em] font-extrabold uppercase mt-1 drop-shadow-sm">
            Search Engine
          </span>
        </div>
        <SearchBar />
        <Shortcuts />
      </main>

      {/* ── Footer / Widgets ─────────────────────────────────────────────── */}
      <footer className="w-full z-10 mt-6 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 pb-8">
          {showStats    && <StatsCard />}
          {showNews     && <NewsCard />}
          {showVpn      && <VpnCard />}
          {showTrending && <TrendingCard />}
          {showWeather  && <WeatherCard />}
        </div>

        <div className="w-full bg-card/40 border-t border-border/30 backdrop-blur-md px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10.5px] sm:text-xs text-muted-foreground tracking-wide font-light select-none">
          <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-1.5">
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">About</a>
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">Advertising</a>
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">Business</a>
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">How Search Works</a>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-x-4 gap-y-1.5">
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors cursor-pointer">Settings</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
