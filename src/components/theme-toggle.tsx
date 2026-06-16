"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const options = [
    { key: "light", icon: <Sun className="w-3.5 h-3.5" />,    label: "Light"  },
    { key: "dark",  icon: <Moon className="w-3.5 h-3.5" />,   label: "Dark"   },
    { key: "system",icon: <Monitor className="w-3.5 h-3.5" />, label: "System" },
  ] as const;

  return (
    <div className="flex items-center gap-1 bg-muted/60 border border-border/40 rounded-full p-0.5 backdrop-blur-md">
      {options.map(({ key, icon, label }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          title={label}
          aria-label={`Switch to ${label} mode`}
          className={cn(
            "flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 cursor-pointer",
            theme === key
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
