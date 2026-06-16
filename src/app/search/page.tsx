"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchHeader } from "@/components/search/search-header";
import { AiOverview } from "@/components/search/ai-overview";
import { RichPanel } from "@/components/search/rich-panel";
import { ResultsList } from "@/components/search/results-list";
import { Play, Newspaper } from "lucide-react";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeTab, setActiveTab] = useState("all");

  // Mock Images search results
  const mockImages = [
    { id: 1, title: "Next.js Architecture Workflow", bg: "bg-gradient-to-br from-indigo-700 to-purple-800", dims: "1920x1080" },
    { id: 2, title: "React Component Lifecycle Lifecycle", bg: "bg-gradient-to-br from-[#1e293b] to-[#0f172a]", dims: "1280x720" },
    { id: 3, title: "shadcn/ui Custom Theme Generator", bg: "bg-gradient-to-br from-zinc-800 to-zinc-950", dims: "1600x900" },
    { id: 4, title: "Vercel Global Edge Operations", bg: "bg-gradient-to-br from-[#171717] to-[#404040]", dims: "1920x1080" },
    { id: 5, title: "Tailwind CSS v4 New Linear Gradients", bg: "bg-gradient-to-br from-teal-600 to-cyan-700", dims: "1024x768" },
    { id: 6, title: "GitHub Copilot Terminal Integration", bg: "bg-gradient-to-br from-slate-900 to-purple-950", dims: "1280x800" },
  ];

  // Mock Videos search results
  const mockVideos = [
    { title: `Learn ${query || "Next.js"} in 10 Minutes - Full Beginner Course`, duration: "10:14", channel: "CodeAcademy", views: "142K views", age: "2 months ago", platform: "YouTube" },
    { title: `Advanced Patterns in ${query || "React"} for Senior Engineers`, duration: "42:15", channel: "Vercel Conf", views: "89K views", age: "1 year ago", platform: "Vercel Video" },
    { title: `Building production-ready dashboard apps with shadcn/ui and Tailwind`, duration: "1:24:05", channel: "TechStack", views: "55K views", age: "5 days ago", platform: "YouTube" }
  ];

  // Mock News search results
  const mockNews = [
    { source: "Hacker News", title: `${query || "Next.js"} community reacts to latest major update releases`, time: "3 hours ago", snippet: "Developers discuss changes in caching, Turbopack default compilers, and the new layout APIs." },
    { source: "Vercel Newsroom", title: `Vercel announces global optimizations for ${query || "React Server Components"}`, time: "2 days ago", snippet: "Edge hosting metrics show latency improvements up to 35% across European and Asian zones." },
    { source: "Smashing Magazine", title: `A comprehensive review of custom styling in ${query || "shadcn/ui"} widgets`, time: "1 week ago", snippet: "Learn best practices to override variables, integrate custom fonts, and build layouts." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark font-sans">
      
      {/* Mini search header */}
      <SearchHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Results grid layout */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          
          {/* Left Side Content */}
          <div className="flex-1 w-full max-w-[650px]">
            {activeTab === "all" && (
              <>
                {/* AI Overview Box */}
                {query && <AiOverview query={query} />}
                
                {/* Standard Search Results List */}
                <ResultsList query={query} />
              </>
            )}

            {activeTab === "images" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4.5 animate-fade-in select-none">
                {mockImages.map((img) => (
                  <div key={img.id} className="group cursor-pointer flex flex-col gap-2">
                    <div className={`aspect-video w-full rounded-xl ${img.bg} flex flex-col items-center justify-center p-4 border border-border/30 group-hover:border-primary/50 shadow-md relative overflow-hidden transition-all duration-300`}>
                      <span className="text-white/35 text-[10px] font-mono absolute top-2 right-2">
                        {img.dims}
                      </span>
                      <span className="text-white/90 text-center font-bold tracking-tight text-xs leading-snug">
                        {img.title}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-primary font-semibold truncate">
                        {query || "Design Asset"}
                      </span>
                      <span className="text-xs text-card-foreground/90 font-light truncate">
                        {img.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "videos" && (
              <div className="flex flex-col gap-5 animate-fade-in select-none">
                {mockVideos.map((video, idx) => (
                  <div key={idx} className="flex gap-4 p-3 rounded-2xl hover:bg-muted/30 border border-transparent hover:border-border/30 cursor-pointer transition-all duration-300">
                    <div className="relative w-36 h-20 bg-muted rounded-xl flex items-center justify-center border border-border/40 overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-linear-to-br from-indigo-950 to-neutral-900 opacity-60" />
                      <Play className="w-6 h-6 text-white/95 fill-white/10 z-10" />
                      <span className="absolute bottom-1 right-1 bg-black/85 text-[9px] text-white/95 px-1.5 py-0.5 rounded font-mono font-bold">
                        {video.duration}
                      </span>
                    </div>
                    <div className="flex flex-col justify-between py-0.5">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-card-foreground leading-snug hover:underline">
                          {video.title}
                        </h4>
                        <span className="text-[10px] text-muted-foreground/85 flex items-center gap-1">
                          {video.channel} • {video.views} • {video.age}
                        </span>
                      </div>
                      <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 w-fit px-2 py-0.5 rounded-full font-bold">
                        {video.platform}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "news" && (
              <div className="flex flex-col gap-5 animate-fade-in select-none">
                {mockNews.map((news, idx) => (
                  <article key={idx} className="flex flex-col gap-1.5 p-4 bg-card/40 border border-border/35 rounded-2xl hover:border-border/60 hover:bg-card/65 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-1.5 text-[10px] text-primary font-bold uppercase tracking-wider">
                      <Newspaper className="w-3.5 h-3.5" />
                      <span>{news.source}</span>
                      <span className="text-muted-foreground/60 font-light">• {news.time}</span>
                    </div>
                    <h4 className="text-sm sm:text-[15px] font-semibold text-card-foreground leading-snug">
                      {news.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-muted-foreground font-light leading-relaxed">
                      {news.snippet}
                    </p>
                  </article>
                ))}
              </div>
            )}

          </div>

          {/* Right Side Content: Wikipedia Knowledge Panel */}
          {activeTab === "all" && <RichPanel query={query} />}

        </div>
      </main>

    </div>
  );
}

// Fallback search skeleton loading
function SearchPageSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground dark font-sans animate-pulse">
      <div className="w-full bg-card/60 border-b border-border/40 py-5">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-6">
          <div className="w-7 h-7 rounded-full bg-muted" />
          <div className="w-full max-w-[620px] h-[40px] rounded-full bg-muted" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="flex-1 max-w-[650px] flex flex-col gap-5">
            <div className="w-full h-32 rounded-2xl bg-muted" />
            <div className="w-3/4 h-6 rounded bg-muted" />
            <div className="w-full h-4 rounded bg-muted" />
            <div className="w-full h-4 rounded bg-muted" />
          </div>
          <div className="hidden lg:block w-[340px] h-[400px] rounded-2xl bg-muted" />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchPageContent />
    </Suspense>
  );
}
