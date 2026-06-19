import { OpportunityCategory } from "@/data/opportunities";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { 
  Globe, Lightbulb, Search, Smartphone, BrainCircuit, MessagesSquare, 
  AppWindow, Cloud, Building2, ShieldCheck, ShoppingCart, Utensils, 
  CreditCard, PlaySquare, GraduationCap, Music, Cpu, Rocket, CarFront,
  type LucideIcon
} from "lucide-react";

interface CategoryCardProps {
  category: OpportunityCategory;
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "search-engines": Search,
  "smartphone-os": Smartphone,
  "ai-llm": BrainCircuit,
  "social-media": MessagesSquare,
  "web-browsers": AppWindow,
  "cloud-computing": Cloud,
  "crm-erp": Building2,
  "cybersecurity": ShieldCheck,
  "e-commerce": ShoppingCart,
  "food-grocery": Utensils,
  "digital-payments": CreditCard,
  "video-streaming": PlaySquare,
  "edtech": GraduationCap,
  "music-streaming": Music,
  "semiconductors": Cpu,
  "space-tech": Rocket,
  "ev-batteries": CarFront,
};

const THEMES: Record<string, { glow: string, bg: string, bar: string, text: string, inner: string }> = {
  "Technology": {
    glow: "from-blue-500/80",
    bg: "from-blue-500/5",
    bar: "from-blue-500 via-blue-400 to-cyan-400",
    text: "text-blue-600 dark:text-blue-400",
    inner: "bg-blue-500/10",
  },
  "Consumer": {
    glow: "from-pink-500/80",
    bg: "from-pink-500/5",
    bar: "from-pink-500 via-pink-400 to-rose-400",
    text: "text-pink-600 dark:text-pink-400",
    inner: "bg-pink-500/10",
  },
  "Enterprise": {
    glow: "from-indigo-500/80",
    bg: "from-indigo-500/5",
    bar: "from-indigo-500 via-indigo-400 to-violet-400",
    text: "text-indigo-600 dark:text-indigo-400",
    inner: "bg-indigo-500/10",
  },
  "Media & Content": {
    glow: "from-purple-500/80",
    bg: "from-purple-500/5",
    bar: "from-purple-500 via-purple-400 to-fuchsia-400",
    text: "text-purple-600 dark:text-purple-400",
    inner: "bg-purple-500/10",
  },
  "Infrastructure": {
    glow: "from-emerald-500/80",
    bg: "from-emerald-500/5",
    bar: "from-emerald-500 via-emerald-400 to-teal-400",
    text: "text-emerald-600 dark:text-emerald-400",
    inner: "bg-emerald-500/10",
  },
};

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = CATEGORY_ICONS[category.id] || Globe;
  const theme = THEMES[category.filterCategory] || THEMES["Technology"];

  return (
    <Card className={`group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 p-2 gap-2 border-border/60 bg-gradient-to-br ${theme.bg} via-card to-card`}>
      
      {/* CTA-Style Top Colorful Bar */}
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${theme.bar} opacity-70 group-hover:opacity-100 transition-opacity`} />

      {/* High-Performance Glowing Center Circle (NO BLUR FILTER) */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] ${theme.glow} to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none rounded-full z-0`} />

      {/* TOP SECTION: Header + Global Card */}
      <div className="relative z-10 flex-1 flex flex-col bg-muted/60 border border-border/40 rounded-[1.25rem] p-4 gap-4 transition-colors group-hover:border-border/60 overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-start gap-3 relative z-10">
          <div className="flex gap-3 w-full">
            <div className={`shrink-0 mt-0.5 w-11 h-11 flex items-center justify-center rounded-xl border border-border/50 transition-colors bg-background shadow-sm ${theme.inner}`}>
              <Icon className={`w-5 h-5 ${theme.text}`} strokeWidth={2} />
            </div>
            <div className="space-y-1">
              <CardTitle className={`text-lg font-bold tracking-tight text-foreground transition-colors leading-tight group-hover:${theme.text}`}>
                {category.title}
              </CardTitle>
              <CardDescription className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                {category.subtitle}
              </CardDescription>
            </div>
          </div>
        </div>

        {/* Inner Card 1: Global Landscape */}
        <div className="w-fit max-w-full rounded-xl p-3.5 bg-background border border-border/50 shadow-sm transition-colors mt-auto relative z-10">
          <div className="flex items-center justify-between gap-4 mb-3">
             <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 shrink-0">
              <Globe className="w-3.5 h-3.5" /> Global
            </h4>
             <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-secondary text-secondary-foreground border border-border/50 shrink-0">
              {category.status}
            </span>
          </div>
          
          {/* Nested Cards (Players) */}
          <div className="flex flex-wrap gap-2 text-[11px] leading-relaxed font-medium">
            {category.players.map((p, i) => (
              <div key={i} className="inline-flex items-center bg-muted/60 border border-border/50 rounded-lg px-2 py-1.5 transition-colors group-hover:border-border">
                <span 
                  className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-[4px] bg-background border border-border shadow-sm text-foreground font-bold text-[9px] mr-2.5 uppercase tracking-widest shrink-0" 
                  title={p.country}
                >
                  {p.flag}
                </span> 
                <span className="font-semibold text-foreground tracking-tight whitespace-nowrap">{p.companies}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: India's Opening */}
      <div className="w-full bg-muted/60 rounded-[1.25rem] p-4 border border-border/40 transition-colors group-hover:border-border/60 relative z-10 overflow-hidden">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-2 relative z-10">
          <Lightbulb className={`w-4 h-4 group-hover:animate-pulse ${theme.text}`} strokeWidth={2} />
          India&apos;s Opening
        </h4>
        <p className="text-[11.5px] text-muted-foreground leading-relaxed font-medium relative z-10">
          {category.indiasOpening}
        </p>
      </div>
    </Card>
  );
}
