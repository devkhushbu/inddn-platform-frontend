"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  Palette,
  LayoutDashboard,
  History,
  ShieldCheck,
  Globe,
  ChevronRight,
  Trash2,
  ExternalLink,
  MessageSquare,
  Image as ImageIcon,
  Shuffle,
  CheckCircle2,
  Circle,
  Search,
  Mic,
  Bell,
  BookOpen,
  Sparkles,
  Eye,
  Sun,
  Moon,
  Zap,
  Clock,
  X,
  BarChart2,
  Cloud,
  Newspaper,
  Wifi,
  TrendingUp,
  Cookie,
  MapPin,
  Database,
  AlertCircle,
  Info,
  Download,
  RefreshCw,
  LayoutGrid,
  Images,
  Check,
  Rows,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DARK_IMAGES, LIGHT_IMAGES, DARK_GRADIENTS, LIGHT_GRADIENTS, type BgEntry,
} from "./background-image";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  showStats: boolean;
  setShowStats: (v: boolean) => void;
  showNews: boolean;
  setShowNews: (v: boolean) => void;
  showVpn: boolean;
  setShowVpn: (v: boolean) => void;
  showTrending: boolean;
  setShowTrending: (v: boolean) => void;
  showWeather: boolean;
  setShowWeather: (v: boolean) => void;
  bgBlur: boolean;
  setBgBlur: (v: boolean) => void;
  bgStyleMode: "auto" | "gradient" | "image";
  setBgStyleMode: (mode: "auto" | "gradient" | "image") => void;
  setPinnedBg: (bg: BgEntry | null) => void;
  setBgRefreshToken: (cb: (prev: number) => number) => void;
  currentBg: BgEntry | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Primitives
// ─────────────────────────────────────────────────────────────────────────────

function Switch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        "relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        checked
          ? "bg-primary"
          : "bg-input"
      )}
    >
      <span
        className={cn(
          "pointer-events-none block h-[15px] w-[15px] rounded-full shadow-md ring-0 transition-transform duration-200",
          "bg-background",
          checked ? "translate-x-[20px]" : "translate-x-[1px]"
        )}
      />
    </button>
  );
}

function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("mb-2 px-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70", className)}>
      {children}
    </p>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border/60 bg-card divide-y divide-border/50", className)}>
      {children}
    </div>
  );
}

function SettingRow({
  icon: Icon,
  label,
  description,
  children,
  className,
  chevron,
  danger,
  badge,
  onClick,
}: {
  icon?: React.ElementType;
  label: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  chevron?: boolean;
  danger?: boolean;
  badge?: string;
  onClick?: () => void;
}) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "group flex w-full min-h-[52px] items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-muted/40",
        className
      )}
    >
      {Icon && (
        <span className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
          danger ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"
        )}>
          <Icon className="h-3.5 w-3.5" />
        </span>
      )}
      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <span className={cn(
          "text-[13.5px] font-medium leading-tight tracking-[-0.01em]",
          danger ? "text-destructive" : "text-foreground"
        )}>
          {label}
        </span>
        {description && (
          <span className="text-[11.5px] leading-snug text-muted-foreground/80">{description}</span>
        )}
      </div>
      {badge && (
        <span className="text-[10.5px] font-semibold bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{badge}</span>
      )}
      {children && <div className="flex shrink-0 items-center gap-2">{children}</div>}
      {chevron && (
        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-transform duration-150 group-hover:translate-x-0.5" />
      )}
    </Comp>
  );
}

function RadioOption({
  label, description, checked, onClick,
}: { label: string; description?: string; checked: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex w-full min-h-[52px] items-center gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-muted/40",
        checked && "bg-primary/5"
      )}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
        {checked
          ? <CheckCircle2 className="h-4 w-4 text-primary" />
          : <Circle className="h-4 w-4 text-muted-foreground/40" />}
      </span>
      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <span className={cn("text-[13.5px] font-medium leading-tight", checked ? "text-primary" : "text-foreground")}>
          {label}
        </span>
        {description && (
          <span className="text-[11.5px] leading-snug text-muted-foreground/80">{description}</span>
        )}
      </div>
    </button>
  );
}

// History entry mock
function HistoryEntry({ query, time, onDelete }: { query: string; time: string; onDelete: () => void }) {
  return (
    <div className="group flex items-center gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
        <Clock className="h-3 w-3" />
      </span>
      <div className="flex flex-1 flex-col gap-0 min-w-0">
        <span className="text-[13px] font-medium leading-tight text-foreground truncate">{query}</span>
        <span className="text-[10.5px] text-muted-foreground/60">{time}</span>
      </div>
      <button
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 flex h-6 w-6 items-center justify-center rounded-full hover:bg-muted transition-all text-muted-foreground hover:text-destructive"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tabs definition
// ─────────────────────────────────────────────────────────────────────────────
const tabs = [
  { value: "settings",    Icon: Settings,        label: "Search" },
  { value: "appearance",  Icon: Palette,          label: "Appearance" },
  { value: "newtab",      Icon: LayoutDashboard,  label: "New Tab" },
  { value: "background",  Icon: ImageIcon,        label: "Background" },
  { value: "history",     Icon: History,          label: "History" },
  { value: "privacy",     Icon: ShieldCheck,      label: "Privacy" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────────
export function SettingsDialog({
  open, onOpenChange,
  showStats, setShowStats,
  showNews, setShowNews,
  showVpn, setShowVpn,
  showTrending, setShowTrending,
  showWeather, setShowWeather,
  bgBlur, setBgBlur,
  bgStyleMode, setBgStyleMode,
  setPinnedBg, setBgRefreshToken,
  currentBg,
}: SettingsDialogProps) {

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDark = resolvedTheme !== "light";
  const [bgPickerTab, setBgPickerTab] = React.useState<"image" | "gradient">("image");
  const bgImages    = isDark ? DARK_IMAGES    : LIGHT_IMAGES;
  const bgGradients = isDark ? DARK_GRADIENTS : LIGHT_GRADIENTS;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Search settings
  const [searchRegion, setSearchRegion] = React.useState<"in" | "com">("in");
  const [prioritiseIndian, setPrioritiseIndian] = React.useState(true);
  const [autocomplete, setAutocomplete] = React.useState(true);
  const [voiceSearch, setVoiceSearch] = React.useState(true);
  const [instantResults, setInstantResults] = React.useState(true);
  const [resultsPerPage, setResultsPerPage] = React.useState<"10" | "20" | "30">("10");
  const [searchLang, setSearchLang] = React.useState<"en" | "hi" | "both">("both");

  // Appearance
  const [fontSize, setFontSize] = React.useState<"sm" | "md" | "lg">("md");
  const [density, setDensity] = React.useState<"compact" | "default" | "comfortable">("default");
  const [animations, setAnimations] = React.useState(true);
  const [personalise, setPersonalise] = React.useState(false);
  const [showFavicons, setShowFavicons] = React.useState(true);

  // New Tab
  const [showSearchBar, setShowSearchBar] = React.useState(true);
  const [showClock, setShowClock] = React.useState(true);
  const [newTabLayout, setNewTabLayout] = React.useState<"grid" | "list">("grid");
  const [showGreeting, setShowGreeting] = React.useState(true);

  // History
  const [saveHistory, setSaveHistory] = React.useState(true);
  const [autoDelete, setAutoDelete] = React.useState<"never" | "30d" | "90d">("never");
  const [syncHistory, setSyncHistory] = React.useState(false);
  const [historyItems, setHistoryItems] = React.useState([
    { id: 1, query: "INDDN search engine features", time: "2 min ago" },
    { id: 2, query: "Best mutual funds in India 2025", time: "15 min ago" },
    { id: 3, query: "Chandrayaan 4 launch date", time: "1 hour ago" },
    { id: 4, query: "IPL 2025 points table today", time: "3 hours ago" },
    { id: 5, query: "React.js vs Next.js difference", time: "Yesterday" },
    { id: 6, query: "INDDN privacy policy", time: "2 days ago" },
  ]);

  // Privacy
  const [safeSearch, setSafeSearch] = React.useState<"strict" | "moderate" | "off">("moderate");
  const [blockTrackers, setBlockTrackers] = React.useState(true);
  const [doNotTrack, setDoNotTrack] = React.useState(false);
  const [locationAccess, setLocationAccess] = React.useState(false);
  const [analyticsShare, setAnalyticsShare] = React.useState(false);
  const [adPersonalisation, setAdPersonalisation] = React.useState(false);

  const deleteHistory = (id: number) =>
    setHistoryItems((prev) => prev.filter((h) => h.id !== id));

  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[820px] sm:max-w-[820px] h-[86vh] p-0 gap-0 overflow-hidden flex flex-col border-border/60 bg-background shadow-2xl"
        style={{ fontFamily: "var(--font-geist-sans, var(--font-sans, system-ui))" }}
      >
        {/* Header */}
        <DialogHeader className="flex-row items-center gap-3 px-5 py-4 border-b border-border/60 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20">
            <Search className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1">
            <DialogTitle className="text-[15px] font-semibold tracking-tight">
              INDDN Settings
            </DialogTitle>
            <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
              Search Engine & New Tab Preferences
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10.5px] text-emerald-600 dark:text-emerald-400 font-semibold">INDDN v2</span>
          </div>
        </DialogHeader>

        {/* Body */}
        <Tabs defaultValue="settings" orientation="vertical" className="flex flex-1 overflow-hidden min-h-0">

          {/* Sidebar */}
          <div className="w-56 shrink-0 border-r border-border/60 bg-muted/10 py-4 px-3 flex flex-col gap-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 px-2 mb-2">Menu</p>
            <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 gap-1">
              {tabs.map(({ value, Icon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={cn(
                    "group w-full justify-start gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-left relative",
                    "text-muted-foreground transition-all duration-200 bg-transparent border border-transparent",
                    "hover:bg-muted/50 hover:text-foreground hover:border-border/40",
                    "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:border-border/60 data-[state=active]:shadow-sm"
                  )}
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r-full bg-primary opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-200" />
                  <span className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200",
                    "bg-muted text-muted-foreground group-data-[state=active]:bg-primary/15 group-data-[state=active]:text-primary"
                  )}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex-1">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-auto pt-4 px-1 space-y-2">
              <SettingRow icon={MessageSquare} label="Send feedback" chevron onClick={() => {}}
                className="rounded-xl border border-border/40 bg-muted/20 px-3 min-h-0 py-2.5" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">

            {/* ── SEARCH SETTINGS ─────────────────────── */}
            <TabsContent value="settings" className="mt-0 p-5 space-y-5 outline-none">
              <SectionLabel>Search Region</SectionLabel>
              <Card>
                <div className="flex divide-x divide-border/50">
                  {[
                    { key: "in", flag: "🇮🇳", label: ".in — India" },
                    { key: "com", flag: "🌐", label: ".com — Global" },
                  ].map(({ key, flag, label }) => (
                    <button
                      key={key}
                      onClick={() => setSearchRegion(key as "in" | "com")}
                      className={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3.5 text-[13px] font-medium transition-colors",
                        searchRegion === key ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                      )}
                    >
                      <span className="text-base">{flag}</span> {label}
                    </button>
                  ))}
                </div>
                <SettingRow icon={Globe} label="Prioritise Indian websites" description="Boost Indian domains in results">
                  <Switch checked={prioritiseIndian} onChange={() => setPrioritiseIndian(!prioritiseIndian)} />
                </SettingRow>
              </Card>

              <SectionLabel>Language & Results</SectionLabel>
              <Card>
                <div className="p-4 space-y-3">
                  <p className="text-[11px] text-muted-foreground/70 font-semibold uppercase tracking-widest">Search Language</p>
                  <div className="grid grid-cols-3 gap-2">
                    {([["en", "English"], ["hi", "हिन्दी"], ["both", "Both"]] as const).map(([k, l]) => (
                      <button key={k} onClick={() => setSearchLang(k)}
                        className={cn("rounded-lg py-2 text-[12px] font-semibold border transition-all",
                          searchLang === k ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted"
                        )}>{l}</button>
                    ))}
                  </div>
                </div>
                <div className="p-4 space-y-3 border-t border-border/50">
                  <p className="text-[11px] text-muted-foreground/70 font-semibold uppercase tracking-widest">Results per page</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(["10", "20", "30"] as const).map((n) => (
                      <button key={n} onClick={() => setResultsPerPage(n)}
                        className={cn("rounded-lg py-2 text-[12px] font-semibold border transition-all",
                          resultsPerPage === n ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted"
                        )}>{n} results</button>
                    ))}
                  </div>
                </div>
              </Card>

              <SectionLabel>Search Features</SectionLabel>
              <Card>
                <SettingRow icon={Sparkles} label="Autocomplete suggestions" description="Show query suggestions as you type">
                  <Switch checked={autocomplete} onChange={() => setAutocomplete(!autocomplete)} />
                </SettingRow>
                <SettingRow icon={Mic} label="Voice search" description="Search using your microphone">
                  <Switch checked={voiceSearch} onChange={() => setVoiceSearch(!voiceSearch)} />
                </SettingRow>
                <SettingRow icon={Zap} label="Instant results" description="Preview results as you type">
                  <Switch checked={instantResults} onChange={() => setInstantResults(!instantResults)} />
                </SettingRow>
                <SettingRow icon={BookOpen} label="Keyboard shortcuts" description="Enable hotkeys for quick search actions" badge="Coming soon" chevron />
              </Card>
            </TabsContent>

            {/* ── APPEARANCE ───────────────────────────── */}
            <TabsContent value="appearance" className="mt-0 p-5 space-y-5 outline-none">
              <SectionLabel>Theme</SectionLabel>
              <Card>
                <RadioOption label="Light" description="Clean white interface for bright environments" checked={theme === "light"} onClick={() => setTheme("light")} />
                <RadioOption label="Dark" description="Dark interface, easier on the eyes at night" checked={theme === "dark"} onClick={() => setTheme("dark")} />
                <RadioOption label="System default" description="Automatically match your OS light/dark setting" checked={theme === "system"} onClick={() => setTheme("system")} />
              </Card>

              <SectionLabel>Text & Display</SectionLabel>
              <Card>
                <div className="p-4 space-y-3">
                  <p className="text-[11px] text-muted-foreground/70 font-semibold uppercase tracking-widest">Font Size</p>
                  <div className="grid grid-cols-3 gap-2">
                    {([["sm", "Small"], ["md", "Medium"], ["lg", "Large"]] as const).map(([k, l]) => (
                      <button key={k} onClick={() => setFontSize(k)}
                        className={cn("rounded-lg py-2 text-[12px] font-semibold border transition-all",
                          fontSize === k ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted"
                        )}>{l}</button>
                    ))}
                  </div>
                </div>
                <div className="p-4 space-y-3 border-t border-border/50">
                  <p className="text-[11px] text-muted-foreground/70 font-semibold uppercase tracking-widest">Content Density</p>
                  <div className="grid grid-cols-3 gap-2">
                    {([["compact", "Compact"], ["default", "Default"], ["comfortable", "Comfy"]] as const).map(([k, l]) => (
                      <button key={k} onClick={() => setDensity(k)}
                        className={cn("rounded-lg py-2 text-[12px] font-semibold border transition-all",
                          density === k ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted"
                        )}>{l}</button>
                    ))}
                  </div>
                </div>
              </Card>

              <SectionLabel>Interface</SectionLabel>
              <Card>
                <SettingRow icon={Sparkles} label="Animations & transitions" description="Smooth visual effects throughout the interface">
                  <Switch checked={animations} onChange={() => setAnimations(!animations)} />
                </SettingRow>
                <SettingRow icon={Eye} label="Show website favicons" description="Display site icons next to search results">
                  <Switch checked={showFavicons} onChange={() => setShowFavicons(!showFavicons)} />
                </SettingRow>
                <SettingRow icon={Palette} label="Personalise your feed" description="Tailor content recommendations to your interests">
                  <Switch checked={personalise} onChange={() => setPersonalise(!personalise)} />
                </SettingRow>
              </Card>
            </TabsContent>

            {/* ── NEW TAB ──────────────────────────────── */}
            <TabsContent value="newtab" className="mt-0 p-5 space-y-5 outline-none">
              <SectionLabel>Layout</SectionLabel>
              <Card>
                <div className="p-4 space-y-3">
                  <p className="text-[11px] text-muted-foreground/70 font-semibold uppercase tracking-widest">Widget Layout</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setNewTabLayout("grid")}
                      className={cn("flex items-center justify-center gap-2 rounded-lg py-2.5 text-[12px] font-semibold border transition-all",
                        newTabLayout === "grid" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted"
                      )}>
                      <LayoutGrid className="h-3.5 w-3.5" /> Grid
                    </button>
                    <button onClick={() => setNewTabLayout("list")}
                      className={cn("flex items-center justify-center gap-2 rounded-lg py-2.5 text-[12px] font-semibold border transition-all",
                        newTabLayout === "list" ? "bg-primary text-primary-foreground border-primary" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted"
                      )}>
                      <Rows className="h-3.5 w-3.5" /> List
                    </button>
                  </div>
                </div>
              </Card>

              <SectionLabel>Elements</SectionLabel>
              <Card>
                <SettingRow icon={Search} label="Show search bar" description="Large search box on the new tab page">
                  <Switch checked={showSearchBar} onChange={() => setShowSearchBar(!showSearchBar)} />
                </SettingRow>
                <SettingRow icon={Clock} label="Show clock" description="Current time displayed on new tab">
                  <Switch checked={showClock} onChange={() => setShowClock(!showClock)} />
                </SettingRow>
                <SettingRow icon={Bell} label="Show greeting" description="Good morning/afternoon/evening message">
                  <Switch checked={showGreeting} onChange={() => setShowGreeting(!showGreeting)} />
                </SettingRow>
              </Card>

              <SectionLabel>Widgets</SectionLabel>
              <Card>
                {[
                  { icon: BarChart2, label: "Stats card",       desc: "Live web performance metrics",      val: showStats,    set: setShowStats },
                  { icon: Newspaper, label: "News card",         desc: "Top stories from across India",     val: showNews,     set: setShowNews },
                  { icon: Wifi,      label: "VPN card",          desc: "Quick access to VPN controls",      val: showVpn,      set: setShowVpn },
                  { icon: TrendingUp,label: "Trending searches", desc: "See what India is searching",       val: showTrending, set: setShowTrending },
                  { icon: Cloud,     label: "Weather widget",    desc: "Current weather for your location", val: showWeather,  set: setShowWeather },
                ].map(({ icon, label, desc, val, set }) => (
                  <SettingRow key={label} icon={icon} label={label} description={desc}>
                    <Switch checked={val} onChange={() => set(!val)} />
                  </SettingRow>
                ))}
              </Card>

              <SectionLabel>Background</SectionLabel>
              <Card className={cn(!isDark && "opacity-45 pointer-events-none select-none")}>
                <div className="p-4 space-y-3">
                  <p className="text-[11px] text-muted-foreground/70 font-semibold uppercase tracking-widest">Background Style</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(["auto", "gradient", "image"] as const).map((mode) => (
                      <button key={mode} onClick={() => { setBgStyleMode(mode); setPinnedBg(null); }}
                        className={cn("rounded-lg py-2.5 text-[12px] font-semibold border transition-all capitalize",
                          bgStyleMode === mode ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                        )}>{mode}</button>
                    ))}
                  </div>
                </div>
                <SettingRow label="Blur background" description="Apply a soft blur effect to the wallpaper">
                  <Switch checked={bgBlur} onChange={() => setBgBlur(!bgBlur)} />
                </SettingRow>
              </Card>
            </TabsContent>

            {/* ── BACKGROUND ───────────────────────────── */}
            <TabsContent value="background" className="mt-0 p-5 space-y-5 outline-none">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <SectionLabel className="mb-0.5">Background Chooser</SectionLabel>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={cn(
                      "flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border",
                      isDark ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-amber-400/10 text-amber-600 border-amber-400/20"
                    )}>
                      {isDark ? <Moon className="w-2.5 h-2.5" /> : <Sun className="w-2.5 h-2.5" />}
                      {isDark ? "Dark" : "Light"} Set
                    </span>
                    <span className="text-[10.5px] text-muted-foreground/60">
                      {isDark ? "Dark/moody" : "Bright/airy"} backgrounds for current theme
                    </span>
                  </div>
                </div>
              </div>

              {!isDark && (
                <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-[12.5px] text-amber-800 dark:text-amber-300 leading-normal">
                  <Info className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <span className="font-semibold">Light Mode Active:</span> Background wallpapers and custom colors are disabled in Light Mode to ensure high contrast, readability, and a clean interface. Switch to Dark Mode to customize.
                  </div>
                </div>
              )}

              <div className={cn("space-y-5 transition-all duration-300", !isDark && "opacity-45 pointer-events-none select-none")}>
                <div className="flex justify-end">
                  <button
                    onClick={() => { setPinnedBg(null); setBgRefreshToken((t) => t + 1); }}
                    className="flex items-center gap-1.5 text-[11px] font-semibold bg-muted hover:bg-accent border border-border/40 text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full transition-all"
                  >
                    <Shuffle className="w-3 h-3" /> Random
                  </button>
                </div>

                {/* Style mode */}
                <div className="grid grid-cols-3 gap-2">
                  {(["auto", "gradient", "image"] as const).map((mode) => (
                    <button key={mode} onClick={() => { setBgStyleMode(mode); setPinnedBg(null); }}
                      className={cn("rounded-lg py-2.5 text-[12px] font-semibold border transition-all capitalize",
                        bgStyleMode === mode ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-muted/60 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                      )}>{mode}
                    </button>
                  ))}
                </div>

                {/* Tabs: Photos / Colours */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setBgPickerTab("image")}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all",
                      bgPickerTab === "image"
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted text-muted-foreground border-border/30 hover:bg-accent"
                    )}
                  >
                    <Images className="w-3.5 h-3.5" />
                    Photos <span className="opacity-60 font-normal">({bgImages.length})</span>
                  </button>
                  <button
                    onClick={() => setBgPickerTab("gradient")}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all",
                      bgPickerTab === "gradient"
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted text-muted-foreground border-border/30 hover:bg-accent"
                    )}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    Colours <span className="opacity-60 font-normal">({bgGradients.length})</span>
                  </button>
                </div>

                {/* Photos grid */}
                {bgPickerTab === "image" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {bgImages.map((img) => {
                      const isActive = currentBg?.value === img.value;
                      return (
                        <button
                          key={img.value}
                          onClick={() => {
                            setPinnedBg({ mode: "image", value: img.value, label: img.label });
                            setBgStyleMode("image");
                          }}
                          className={cn(
                            "relative group rounded-xl overflow-hidden aspect-video cursor-pointer border-2 transition-all duration-200 shadow-md",
                            isActive ? "border-primary shadow-primary/30 scale-[1.03]" : "border-transparent hover:border-border hover:scale-[1.01] hover:shadow-lg"
                          )}
                        >
                          <Image src={img.value} alt={img.label} fill unoptimized
                            className={cn("object-cover transition-transform duration-300 group-hover:scale-105", isDark ? "brightness-90" : "brightness-105 saturate-110")}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-200" />
                          <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-black/70 to-transparent text-[10px] text-white font-semibold tracking-wide truncate text-left">
                            {img.label}
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

                {/* Gradients grid */}
                {bgPickerTab === "gradient" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {bgGradients.map((g) => {
                      const isActive = currentBg?.value === g.value;
                      return (
                        <button
                          key={g.value}
                          onClick={() => {
                            setPinnedBg({ mode: "gradient", value: g.value, label: g.label });
                            setBgStyleMode("gradient");
                          }}
                          className={cn(
                            "relative group rounded-xl overflow-hidden aspect-video cursor-pointer border-2 transition-all duration-200 shadow-md",
                            isActive ? "border-primary shadow-primary/30 scale-[1.03]" : "border-transparent hover:border-border hover:scale-[1.01] hover:shadow-lg"
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

                {/* Blur */}
                <Card>
                  <SettingRow label="Blur background" description="Apply a soft blur effect to the wallpaper">
                    <Switch checked={bgBlur} onChange={() => setBgBlur(!bgBlur)} />
                  </SettingRow>
                </Card>
              </div>
            </TabsContent>

            {/* ── HISTORY ──────────────────────────────── */}
            <TabsContent value="history" className="mt-0 p-5 space-y-5 outline-none">
              <SectionLabel>Controls</SectionLabel>
              <Card>
                <SettingRow icon={History} label="Save search history" description="Store searches to improve recommendations">
                  <Switch checked={saveHistory} onChange={() => setSaveHistory(!saveHistory)} />
                </SettingRow>
                <SettingRow icon={RefreshCw} label="Sync history across devices" description="Requires INDDN account sign-in" badge="Pro">
                  <Switch checked={syncHistory} onChange={() => setSyncHistory(!syncHistory)} />
                </SettingRow>
              </Card>

              <SectionLabel>Auto-delete</SectionLabel>
              <Card>
                <RadioOption label="Never" description="Keep search history indefinitely" checked={autoDelete === "never"} onClick={() => setAutoDelete("never")} />
                <RadioOption label="After 30 days" description="Automatically delete searches older than 30 days" checked={autoDelete === "30d"} onClick={() => setAutoDelete("30d")} />
                <RadioOption label="After 90 days" description="Automatically delete searches older than 90 days" checked={autoDelete === "90d"} onClick={() => setAutoDelete("90d")} />
              </Card>

              <div className="flex items-center justify-between px-1">
                <SectionLabel className="mb-0">Recent Searches</SectionLabel>
                <button
                  onClick={() => setHistoryItems([])}
                  className="text-[11px] text-destructive font-semibold hover:underline"
                >
                  Clear all
                </button>
              </div>
              <Card>
                {historyItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-2 py-10 text-muted-foreground">
                    <History className="h-8 w-8 opacity-30" />
                    <p className="text-[13px] font-medium">No search history</p>
                    <p className="text-[11px] opacity-60">Your recent searches will appear here</p>
                  </div>
                ) : (
                  historyItems.map((h) => (
                    <HistoryEntry key={h.id} query={h.query} time={h.time} onDelete={() => deleteHistory(h.id)} />
                  ))
                )}
              </Card>

              <SectionLabel>Data Management</SectionLabel>
              <Card>
                <SettingRow icon={Trash2} label="Clear browsing data" description="Delete history, cookies, cache, and more" chevron danger onClick={() => {}} />
                <SettingRow icon={Download} label="Download my data" description="Export all your INDDN search data" chevron onClick={() => {}} />
                <SettingRow icon={ExternalLink} label="Manage full history" description="View and delete individual search entries" chevron onClick={() => {}} />
              </Card>
            </TabsContent>

            {/* ── PRIVACY ──────────────────────────────── */}
            <TabsContent value="privacy" className="mt-0 p-5 space-y-5 outline-none">
              <SectionLabel>SafeSearch</SectionLabel>
              <Card>
                <RadioOption label="Strict" description="Filter explicit text, images, links and videos" checked={safeSearch === "strict"} onClick={() => setSafeSearch("strict")} />
                <RadioOption label="Moderate" description="Filter explicit images, but not text or links" checked={safeSearch === "moderate"} onClick={() => setSafeSearch("moderate")} />
                <RadioOption label="Off" description="Show all results including explicit content" checked={safeSearch === "off"} onClick={() => setSafeSearch("off")} />
              </Card>

              <SectionLabel>Tracking Protection</SectionLabel>
              <Card>
                <SettingRow icon={ShieldCheck} label="Block third-party trackers" description="Prevent ad networks tracking you across sites">
                  <Switch checked={blockTrackers} onChange={() => setBlockTrackers(!blockTrackers)} />
                </SettingRow>
                <SettingRow icon={AlertCircle} label="Send 'Do Not Track' request" description="Signal to websites that you don't want to be tracked">
                  <Switch checked={doNotTrack} onChange={() => setDoNotTrack(!doNotTrack)} />
                </SettingRow>
                <SettingRow icon={Cookie} label="Manage cookies" description="Control which cookies sites can store" chevron onClick={() => {}} />
              </Card>

              <SectionLabel>Permissions</SectionLabel>
              <Card>
                <SettingRow icon={MapPin} label="Location access" description="Allow INDDN to use your location for local results">
                  <Switch checked={locationAccess} onChange={() => setLocationAccess(!locationAccess)} />
                </SettingRow>
                <SettingRow icon={Bell} label="Notifications" description="Allow search alerts and result updates" chevron onClick={() => {}} />
              </Card>

              <SectionLabel>Data & Personalisation</SectionLabel>
              <Card>
                <SettingRow icon={Database} label="Anonymous analytics" description="Share usage data to help improve INDDN (no personal info)">
                  <Switch checked={analyticsShare} onChange={() => setAnalyticsShare(!analyticsShare)} />
                </SettingRow>
                <SettingRow icon={Sparkles} label="Ad personalisation" description="Show ads relevant to your searches and interests">
                  <Switch checked={adPersonalisation} onChange={() => setAdPersonalisation(!adPersonalisation)} />
                </SettingRow>
              </Card>

              <Card>
                <SettingRow icon={Info} label="Privacy policy" description="Read how INDDN protects your data" chevron onClick={() => {}} />
                <SettingRow icon={ExternalLink} label="Data deletion request" description="Request complete removal of your data" chevron danger onClick={() => {}} />
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
