"use client";

import { useState } from "react";
import { opportunitiesData } from "@/data/opportunities";
import { CategoryCard } from "@/components/opportunities/category-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const FILTERS = [
  "All Categories",
  "Technology",
  "Consumer",
  "Enterprise",
  "Media & Content",
  "Infrastructure"
];

export default function OpportunitiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Categories");

  const filteredData = opportunitiesData.filter(category => 
    activeFilter === "All Categories" || category.filterCategory === activeFilter
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Ambient background glows - OPTIMIZED FOR PERFORMANCE */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/20 to-transparent rounded-full opacity-60" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-500/20 to-transparent rounded-full opacity-60" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-500/20 to-transparent rounded-full opacity-60" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted transition-transform active:scale-95">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 via-primary to-emerald-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-[10px] font-black tracking-tighter">
                  IN
                </div>
              </div>
              <span className="font-extrabold tracking-tight hidden sm:inline-block">INDDN</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-background font-bold shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5">
              <Rocket className="w-4 h-4 mr-2" />
              Join the Mission
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 container mx-auto px-4 md:px-8 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary mb-2 backdrop-blur-sm shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2.5 animate-pulse"></span>
            17 Mega-Opportunities
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent drop-shadow-sm pb-2">
            India&apos;s Tech Opening
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            The global technology landscape is shifting. Discover the massive gaps in India&apos;s digital infrastructure and the trillion-dollar opportunities waiting for native innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
                activeFilter === filter
                  ? "bg-foreground text-background shadow-md scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105 backdrop-blur-sm"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Categories Grid - 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredData.map((category) => (
            <div key={category.id} className="animate-fade-in-up" style={{ animationFillMode: "both" }}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
        
        {/* Call to Action Footer */}
        <div className="mt-32 p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 via-card to-emerald-500/10 border border-border/40 text-center relative overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-primary to-emerald-500" />
          <h2 className="text-3xl md:text-4xl font-black mb-5 tracking-tight">Ready to build for Bharat?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto font-medium">
            Stop building incremental features for crowded markets. It&apos;s time to build sovereign infrastructure for 1.4 billion people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button size="lg" className="rounded-full w-full sm:w-auto shadow-xl bg-foreground text-background hover:bg-foreground/90 font-bold px-8 h-12">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto bg-background/50 backdrop-blur-md font-bold border-border/60 hover:bg-muted h-12 px-8">
              Explore Projects
            </Button>
          </div>
        </div>

      </main>
    </div>
  );
}
