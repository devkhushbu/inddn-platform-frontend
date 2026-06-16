"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.95-3.24 3.51v2.9h5.18c3.07-2.83 4.83-7 4.83-12.04 0-.69-.06-1.35-.11-2.1z"
      />
      <path
        fill="#34A853"
        d="M12.18 21.43c2.75 0 5.06-.92 6.75-2.5l-5.18-2.9c-.83.56-1.9.92-3.17.92-2.5 0-4.61-1.69-5.36-3.95H.03v3.01c1.72 3.42 5.27 5.77 9.4 5.77z"
      />
      <path
        fill="#FBBC05"
        d="M6.82 13c-.19-.56-.3-1.17-.3-1.8s.11-1.24.3-1.8V6.39H.03C-.62 7.7.03 9.77.03 11.2s-.65 3.5.03 4.81L6.82 13z"
      />
      <path
        fill="#EA4335"
        d="M12.18 4.15c1.49 0 2.83.51 3.89 1.52l2.92-2.92C17.23 1.11 14.93 0 12.18 0 8.05 0 4.5 2.35 2.78 5.77l3.75 2.92c.75-2.26 2.86-3.95 5.65-3.95z"
      />
    </svg>
  );

  return (
    <form 
      onSubmit={handleSearch}
      className="w-full max-w-[600px] mx-auto px-4 select-none"
    >
      <div className="relative group transition-all duration-300">
        {/* Glow effect on hover/focus using shadcn variables */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-primary/10 to-secondary/10 rounded-full blur opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition duration-500" />
        
        {/* Inner search box */}
        <div className="relative flex items-center bg-card/45 backdrop-blur-xl border border-border/40 hover:border-border/60 group-focus-within:border-ring group-focus-within:bg-card rounded-full px-5 py-3 h-[50px] shadow-lg shadow-black/30 transition-all duration-300">
          <div className="flex items-center gap-3 w-full">
            {/* Google G Icon */}
            <GoogleLogo />
            
            {/* Input Element */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the web"
              className="bg-transparent text-card-foreground placeholder-muted-foreground/50 text-[15px] focus:outline-none w-full border-none caret-primary font-sans tracking-wide"
            />
            
            {/* Search Submit button / Icon */}
            <button 
              type="submit" 
              className="text-muted-foreground/60 hover:text-foreground transition-colors p-1 cursor-pointer"
              aria-label="Submit search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
