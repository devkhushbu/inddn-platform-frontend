"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

// ═══════════════════════════════════════════════════════════════════════════
//  DARK MODE — Deep, moody, atmospheric gradients
// ═══════════════════════════════════════════════════════════════════════════
export const DARK_GRADIENTS = [
  { label: "Aurora",     value: "linear-gradient(135deg,#0f0c29 0%,#302b63 40%,#24243e 70%,#00b4d8 100%)" },
  { label: "Dusk",       value: "linear-gradient(160deg,#1a1a2e 0%,#16213e 30%,#e94560 75%,#f5a623 100%)" },
  { label: "Cosmos",     value: "linear-gradient(140deg,#09011a 0%,#3a0ca3 40%,#7209b7 70%,#f72585 100%)" },
  { label: "Ocean Deep", value: "linear-gradient(145deg,#03045e 0%,#0077b6 40%,#00b4d8 70%,#90e0ef 100%)" },
  { label: "Ember",      value: "linear-gradient(155deg,#1c0a00 0%,#6b2d0e 35%,#c1440e 65%,#f9a62b 100%)" },
  { label: "Cyber",      value: "linear-gradient(150deg,#0a0a0a 0%,#003333 40%,#00d2ff 80%,#7efff5 100%)" },
  { label: "Midnight",   value: "linear-gradient(160deg,#0a0010 0%,#1a0030 35%,#2d1b69 70%,#11998e 100%)" },
  { label: "Volcano",    value: "linear-gradient(155deg,#1a0000 0%,#450000 30%,#ff416c 70%,#ff4b2b 100%)" },
];

// ═══════════════════════════════════════════════════════════════════════════
//  LIGHT MODE — Bright, airy, soft gradients
// ═══════════════════════════════════════════════════════════════════════════
export const LIGHT_GRADIENTS = [
  { label: "Morning Sky",   value: "linear-gradient(160deg,#e0f7ff 0%,#b3e5fc 30%,#81d4fa 60%,#f8bbd0 100%)" },
  { label: "Golden Dawn",   value: "linear-gradient(150deg,#fff8e1 0%,#ffe082 35%,#ffcc02 65%,#ffab40 100%)" },
  { label: "Spring Meadow", value: "linear-gradient(145deg,#f1f8e9 0%,#dcedc8 30%,#aed581 65%,#7cb342 100%)" },
  { label: "Peach Bliss",   value: "linear-gradient(160deg,#fff3e0 0%,#ffe0b2 30%,#ffcc80 60%,#ff8a65 100%)" },
  { label: "Lavender Mist", value: "linear-gradient(140deg,#f3e5f5 0%,#e1bee7 35%,#ce93d8 65%,#ab47bc 100%)" },
  { label: "Arctic Blue",   value: "linear-gradient(150deg,#e3f2fd 0%,#bbdefb 35%,#90caf9 65%,#64b5f6 100%)" },
  { label: "Rose Quartz",   value: "linear-gradient(155deg,#fce4ec 0%,#f8bbd0 35%,#f48fb1 65%,#e91e63 100%)" },
  { label: "Mint Fresh",    value: "linear-gradient(145deg,#e0f2f1 0%,#b2dfdb 35%,#80cbc4 65%,#26a69a 100%)" },
];

// ═══════════════════════════════════════════════════════════════════════════
//  DARK MODE — Night / moody / atmospheric photos
// ═══════════════════════════════════════════════════════════════════════════
export const DARK_IMAGES = [
  { label: "City Lights",   value: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" },
  { label: "Milky Way",     value: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80" },
  { label: "Aurora Night",  value: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1920&q=80" },
  { label: "Starry Sky",    value: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920&q=80" },
  { label: "Neon Rain",     value: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?w=1920&q=80" },
  { label: "Night Mountain",value: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80" },
  { label: "Dark Forest",   value: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80" },
  { label: "Ocean Night",   value: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80" },
];

// ═══════════════════════════════════════════════════════════════════════════
//  LIGHT MODE — Bright / natural / daytime photos
// ═══════════════════════════════════════════════════════════════════════════
export const LIGHT_IMAGES = [
  { label: "Green Hills",   value: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80" },
  { label: "Mountain Mist", value: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" },
  { label: "Forest Light",  value: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1920&q=80" },
  { label: "Lake Reflect",  value: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1920&q=80" },
  { label: "Desert Dunes",  value: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80" },
  { label: "Autumn Forest", value: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80" },
  { label: "Sunny Beach",   value: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" },
  { label: "Spring Field",  value: "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=1920&q=80" },
];

// Convenience combined exports (all, for picker panel)
export const ALL_GRADIENTS = { dark: DARK_GRADIENTS, light: LIGHT_GRADIENTS };
export const ALL_IMAGES    = { dark: DARK_IMAGES,    light: LIGHT_IMAGES    };

export type BgMode = "gradient" | "image";
export interface BgEntry { mode: BgMode; value: string; label?: string }

interface BackgroundImageProps {
  mode?: BgMode;
  refreshToken?: number;
  pinned?: BgEntry | null;
  onBgChange?: (entry: BgEntry) => void;
}

export function BackgroundImage({ mode, refreshToken, pinned, onBgChange }: BackgroundImageProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const [current, setCurrent] = useState<BgEntry | null>(null);
  const [next,    setNext]    = useState<BgEntry | null>(null);
  const [fading,  setFading]  = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pick a random entry using the correct theme-aware pool
  const pickRandom = useCallback((preferMode?: BgMode, dark?: boolean): BgEntry => {
    const useDark = dark ?? isDark;
    const m = preferMode ?? (Math.random() < 0.5 ? "gradient" : "image");
    if (m === "gradient") {
      const pool = useDark ? DARK_GRADIENTS : LIGHT_GRADIENTS;
      const g = pool[Math.floor(Math.random() * pool.length)];
      return { mode: "gradient", value: g.value, label: g.label };
    }
    const pool = useDark ? DARK_IMAGES : LIGHT_IMAGES;
    const img = pool[Math.floor(Math.random() * pool.length)];
    return { mode: "image", value: img.value, label: img.label };
  }, [isDark]);

  const transitionTo = useCallback((candidate: BgEntry) => {
    setNext(candidate);
    setFading(true);
    setTimeout(() => {
      setCurrent(candidate);
      setNext(null);
      setFading(false);
      onBgChange?.(candidate);
    }, 700);
  }, [onBgChange]);

  // Initial pick on mount
  useEffect(() => {
    const entry = pinned ?? pickRandom(mode);
    setCurrent(entry);
    onBgChange?.(entry);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Theme change → re-pick (unless pinned)
  useEffect(() => {
    if (pinned) return;
    transitionTo(pickRandom(mode, isDark));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  // Pinned override
  useEffect(() => {
    if (!pinned) return;
    transitionTo(pinned);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned]);

  // External refresh (ignored if pinned)
  useEffect(() => {
    if (refreshToken === undefined || pinned) return;
    transitionTo(pickRandom(mode));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken]);

  // BgMode change → re-pick
  useEffect(() => {
    if (pinned) return;
    transitionTo(pickRandom(mode));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // Auto-cycle every 30 s (only when NOT pinned)
  useEffect(() => {
    if (pinned) { if (intervalRef.current) clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(() => transitionTo(pickRandom(mode)), 30_000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, pinned, isDark]);

  if (!current) return null;

  return (
    <div className="absolute inset-0 w-full h-full select-none overflow-hidden -z-10">
      <BgLayer bg={current} visible={!fading} isDark={isDark} />
      {next && <BgLayer bg={next} visible={fading} isDark={isDark} />}

      {/* Readability overlays — theme-aware */}
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-black/25 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white/15 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
        </>
      )}

      {/* Badge — bottom right */}
      <div className={`absolute bottom-5 right-5 flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] tracking-wide font-medium select-none border ${
        isDark
          ? "bg-black/35 border-white/10 text-white/60"
          : "bg-white/50 border-black/10 text-black/60"
      }`}>
        <span className={`w-1.5 h-1.5 rounded-full ${current.mode === "image" ? "bg-sky-400" : "bg-violet-400"}`} />
        {current.label ?? (current.mode === "image" ? "Photo" : "Colour")}
        <span className={`text-[9px] ml-0.5 ${isDark ? "text-white/30" : "text-black/30"}`}>
          · {isDark ? "Dark" : "Light"}
        </span>
      </div>
    </div>
  );
}

// ── Single bg layer ────────────────────────────────────────────────────────
function BgLayer({ bg, visible, isDark }: { bg: BgEntry; visible: boolean; isDark: boolean }) {
  return (
    <div
      className="absolute inset-0 w-full h-full transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {bg.mode === "gradient" ? (
        <div className="w-full h-full" style={{ background: bg.value }} />
      ) : (
        <Image
          src={bg.value}
          alt="Dashboard Background"
          fill
          priority
          quality={90}
          unoptimized
          className={`object-cover transition-all duration-700 ${isDark ? "brightness-[0.80]" : "brightness-[1.05] saturate-[1.1]"}`}
        />
      )}
    </div>
  );
}
