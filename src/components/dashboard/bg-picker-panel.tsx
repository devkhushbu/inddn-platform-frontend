"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { X, Shuffle, Check, Images, Palette, Sun, Moon } from "lucide-react";
import {
  DARK_IMAGES, LIGHT_IMAGES,
  DARK_GRADIENTS, LIGHT_GRADIENTS,
  type BgEntry, type BgMode,
} from "./background-image";
import { cn } from "@/lib/utils";

interface BgPickerPanelProps {
  currentBg: BgEntry | null;
  onSelect: (entry: BgEntry | null) => void;
  onClose: () => void;
}

export function BgPickerPanel({ currentBg, onSelect, onClose }: BgPickerPanelProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const [tab, setTab] = useState<BgMode>("image");

  // Use theme-specific pools
  const images    = isDark ? DARK_IMAGES    : LIGHT_IMAGES;
  const gradients = isDark ? DARK_GRADIENTS : LIGHT_GRADIENTS;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-popover border-t border-border shadow-2xl rounded-t-3xl animate-slide-up max-h-[88vh] flex flex-col">

        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border/40 shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-foreground tracking-wide">Background Chooser</h2>
              {/* Theme badge */}
              <span className={cn(
                "flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                isDark
                  ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                  : "bg-amber-400/10 text-amber-600 border-amber-400/20"
              )}>
                {isDark ? <Moon className="w-2.5 h-2.5" /> : <Sun className="w-2.5 h-2.5" />}
                {isDark ? "Dark" : "Light"} Set
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Showing {isDark ? "dark/moody" : "bright/airy"} backgrounds for current theme
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { onSelect(null); onClose(); }}
              className="flex items-center gap-1.5 text-[11px] font-semibold bg-muted hover:bg-accent border border-border/40 text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full transition-all cursor-pointer"
            >
              <Shuffle className="w-3 h-3" />
              Random
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab pills */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 shrink-0">
          <button
            onClick={() => setTab("image")}
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer",
              tab === "image"
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-muted text-muted-foreground border-border/30 hover:bg-accent"
            )}
          >
            <Images className="w-3.5 h-3.5" />
            Photos <span className="opacity-60 font-normal">({images.length})</span>
          </button>
          <button
            onClick={() => setTab("gradient")}
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer",
              tab === "gradient"
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-muted text-muted-foreground border-border/30 hover:bg-accent"
            )}
          >
            <Palette className="w-3.5 h-3.5" />
            Colours <span className="opacity-60 font-normal">({gradients.length})</span>
          </button>
        </div>

        {/* Scrollable grid */}
        <div className="overflow-y-auto flex-1 px-5 py-4">

          {/* ── Photos grid ── */}
          {tab === "image" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {images.map((img) => {
                const isActive = currentBg?.value === img.value;
                return (
                  <button
                    key={img.value}
                    onClick={() => { onSelect({ mode: "image", value: img.value, label: img.label }); onClose(); }}
                    className={cn(
                      "relative group rounded-xl overflow-hidden aspect-video cursor-pointer border-2 transition-all duration-200 shadow-md",
                      isActive
                        ? "border-primary shadow-primary/30 scale-[1.03]"
                        : "border-transparent hover:border-border hover:scale-[1.01] hover:shadow-lg"
                    )}
                  >
                    <Image
                      src={img.value}
                      alt={img.label}
                      fill
                      unoptimized
                      className={cn(
                        "object-cover transition-transform duration-300 group-hover:scale-105",
                        isDark ? "brightness-90" : "brightness-105 saturate-110"
                      )}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-200" />
                    {/* Label */}
                    <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-black/70 to-transparent text-[10px] text-white font-semibold tracking-wide truncate text-left">
                      {img.label}
                    </span>
                    {/* Active check */}
                    {isActive && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* ── Gradients grid ── */}
          {tab === "gradient" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {gradients.map((g) => {
                const isActive = currentBg?.value === g.value;
                return (
                  <button
                    key={g.value}
                    onClick={() => { onSelect({ mode: "gradient", value: g.value, label: g.label }); onClose(); }}
                    className={cn(
                      "relative group rounded-xl overflow-hidden aspect-video cursor-pointer border-2 transition-all duration-200 shadow-md",
                      isActive
                        ? "border-primary shadow-primary/30 scale-[1.03]"
                        : "border-transparent hover:border-border hover:scale-[1.01] hover:shadow-lg"
                    )}
                    style={{ background: g.value }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200" />
                    <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-black/60 to-transparent text-[10px] text-white font-semibold tracking-wide text-left">
                      {g.label}
                    </span>
                    {isActive && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

        </div>
        {/* Padding at the bottom for mobile safe-area */}
        <div className="shrink-0 h-4" />
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.38s cubic-bezier(0.34,1.4,0.64,1) both; }
      `}</style>
    </>
  );
}
