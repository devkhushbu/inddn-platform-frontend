"use client";

import { useState } from "react";
import {
  Settings,
  CloudRain, Grid,
} from "lucide-react";
import { BackgroundImage, type BgEntry, type BgMode } from "./background-image";
import { SearchBar } from "./search-bar";
import { Shortcuts } from "./shortcuts";
import { StatsCard } from "./stats-card";
import { NewsCard } from "./news-card";
import { VpnCard } from "./vpn-card";
import { TrendingCard } from "./trending-card";
import { WeatherCard } from "./weather-card";
import { SettingsDialog } from "./settings-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppsLauncher } from "./apps-launcher";
import { cn } from "@/lib/utils";

type BgStyleMode = "auto" | "gradient" | "image";

export default function Dashboard() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);

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

  // Derived mode for BackgroundImage component
  const derivedMode: BgMode | undefined =
    bgStyleMode === "auto" ? undefined : bgStyleMode;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden font-sans pb-0 text-foreground dashboard-root">

      {/* Background */}
      <div className={cn("absolute inset-0 z-0 transition-all duration-500", bgBlur ? "blur-md scale-102" : "")}>
        <BackgroundImage
          mode={derivedMode}
          refreshToken={bgRefreshToken}
          pinned={pinnedBg}
          onBgChange={setCurrentBg}
        />
      </div>


      <header className="relative w-full flex items-center justify-between px-6 py-4 select-none z-40">

        {/* Left: quick links */}
        <div className="flex items-center gap-3.5 text-xs text-foreground/70 font-medium">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:underline transition-all cursor-pointer dark:drop-shadow-sm"
          >
            Gmail
          </a>
          <a href="#" className="hover:text-foreground hover:underline transition-all cursor-pointer dark:drop-shadow-sm">
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


          {/* Grid launcher */}
          <div className="relative">
            <button
              onClick={() => setIsAppsOpen(!isAppsOpen)}
              className={cn(
                "p-2.5 rounded-full transition-all duration-300 cursor-pointer border",
                isAppsOpen 
                  ? "bg-primary/10 border-primary/20 text-primary shadow-inner scale-95"
                  : "bg-transparent border-transparent hover:bg-muted text-foreground/70 hover:text-foreground hover:scale-105"
              )}
              aria-label="Apps"
            >
              <Grid className="w-4.5 h-4.5" />
            </button>
            <AppsLauncher open={isAppsOpen} onOpenChange={setIsAppsOpen} />
          </div>

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

            <SettingsDialog
              open={isSettingsOpen}
              onOpenChange={setIsSettingsOpen}
              showStats={showStats} setShowStats={setShowStats}
              showNews={showNews} setShowNews={setShowNews}
              showVpn={showVpn} setShowVpn={setShowVpn}
              showTrending={showTrending} setShowTrending={setShowTrending}
              showWeather={showWeather} setShowWeather={setShowWeather}
              bgBlur={bgBlur} setBgBlur={setBgBlur}
              bgStyleMode={bgStyleMode} setBgStyleMode={setBgStyleMode}
              setPinnedBg={setPinnedBg} setBgRefreshToken={setBgRefreshToken}
              currentBg={currentBg}
            />
          </div>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main className="relative flex-1 flex flex-col justify-center items-center gap-6 py-6 sm:py-8 z-10 w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center select-none text-center mb-2 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight dark:drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] bg-gradient-to-r from-orange-500 via-foreground to-emerald-500 text-transparent bg-clip-text">
            INDDN
          </h1>
          <span className="text-[9px] sm:text-[10px] text-foreground/50 tracking-[0.2em] font-extrabold uppercase mt-1 dark:drop-shadow-sm">
            Search Engine
          </span>
        </div>
        <SearchBar />
        <Shortcuts />
      </main>

      {/* ── Footer / Widgets ─────────────────────────────────────────────── */}
      <footer className="relative w-full z-10 mt-6 sm:mt-10">
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
