"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Globe, ImageIcon, Video, Newspaper, MapPin, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function SearchHeader({ activeTab, setActiveTab }: SearchHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const GoogleMiniLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 flex-shrink-0 cursor-pointer" onClick={() => router.push("/")} xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.95-3.24 3.51v2.9h5.18c3.07-2.83 4.83-7 4.83-12.04 0-.69-.06-1.35-.11-2.1z" />
      <path fill="#34A853" d="M12.18 21.43c2.75 0 5.06-.92 6.75-2.5l-5.18-2.9c-.83.56-1.9.92-3.17.92-2.5 0-4.61-1.69-5.36-3.95H.03v3.01c1.72 3.42 5.27 5.77 9.4 5.77z" />
      <path fill="#FBBC05" d="M6.82 13c-.19-.56-.3-1.17-.3-1.8s.11-1.24.3-1.8V6.39H.03C-.62 7.7.03 9.77.03 11.2s-.65 3.5.03 4.81L6.82 13z" />
      <path fill="#EA4335" d="M12.18 4.15c1.49 0 2.83.51 3.89 1.52l2.92-2.92C17.23 1.11 14.93 0 12.18 0 8.05 0 4.5 2.35 2.78 5.77l3.75 2.92c.75-2.26 2.86-3.95 5.65-3.95z" />
    </svg>
  );

  const tabs = [
    { id: "all",    label: "All",    icon: <Globe     className="w-3.5 h-3.5" /> },
    { id: "images", label: "Images", icon: <ImageIcon className="w-3.5 h-3.5" /> },
    { id: "videos", label: "Videos", icon: <Video     className="w-3.5 h-3.5" /> },
    { id: "news",   label: "News",   icon: <Newspaper className="w-3.5 h-3.5" /> },
    { id: "maps",   label: "Maps",   icon: <MapPin    className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="w-full bg-card/60 backdrop-blur-md border-b border-border/40 select-none z-30 sticky top-0">
      <div className="max-w-6xl mx-auto px-4 pt-4 flex flex-col gap-3">
        {/* Top bar: logo + input */}
        <div className="flex items-center gap-4 sm:gap-6">
          <GoogleMiniLogo />
          
          <form onSubmit={handleSubmit} className="flex-1 max-w-[620px]">
            <div className="relative flex items-center bg-muted/30 border border-border/45 hover:border-border/60 focus-within:border-ring focus-within:bg-card rounded-full px-4.5 py-2 h-[42px] transition-all duration-200">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent text-card-foreground text-sm focus:outline-none w-full border-none caret-primary font-sans"
              />
              <button type="submit" className="text-muted-foreground/75 hover:text-foreground cursor-pointer p-0.5">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Tab filters navigation */}
        <div className="flex items-center justify-between border-t border-border/10 mt-1">
          <div className="flex items-center gap-1 sm:gap-4 -mb-[1px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold tracking-wide border-b-2 transition-all cursor-pointer",
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-full hover:bg-muted/30">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
