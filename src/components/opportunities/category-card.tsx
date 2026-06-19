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

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = CATEGORY_ICONS[category.id] || Globe;

  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-2 gap-2 border-border/60">
      
      {/* TOP SECTION: Header + Global Card */}
      <div className="flex-1 flex flex-col bg-muted/40 border border-border/40 rounded-[1.25rem] p-4 gap-4 transition-colors group-hover:bg-muted/60">
        
        {/* Header */}
        <div className="flex justify-between items-start gap-3 relative z-10">
          <div className="flex gap-3 w-full">
            <div className="shrink-0 mt-0.5 w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary/20">
              <Icon className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-lg font-bold tracking-tight text-foreground transition-colors leading-tight group-hover:text-primary">
                {category.title}
              </CardTitle>
              <CardDescription className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                {category.subtitle}
              </CardDescription>
            </div>
          </div>
        </div>

        {/* Inner Card 1: Global Landscape */}
        <div className="w-fit max-w-full rounded-xl p-3.5 bg-background/60 backdrop-blur-md border border-border/50 shadow-sm transition-colors mt-auto relative z-10">
          <div className="flex items-center justify-between gap-4 mb-3">
             <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5 shrink-0">
              <Globe className="w-3.5 h-3.5" /> Global
            </h4>
             <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-secondary/80 backdrop-blur-sm text-secondary-foreground border border-border/50 shrink-0">
              {category.status}
            </span>
          </div>
          
          {/* Nested Cards (Players) */}
          <div className="flex flex-wrap gap-2 text-[11px] leading-relaxed font-medium">
            {category.players.map((p, i) => (
              <div key={i} className="inline-flex items-center bg-muted/60 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1.5 transition-colors group-hover:border-border">
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
      <div className="w-full bg-muted/40 rounded-[1.25rem] p-4 border border-border/40 transition-colors group-hover:bg-muted/60 relative z-10">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground flex items-center gap-2 mb-2">
          <Lightbulb className="w-4 h-4 text-orange-500 group-hover:animate-pulse" strokeWidth={2} />
          India&apos;s Opening
        </h4>
        <p className="text-[11.5px] text-muted-foreground leading-relaxed font-medium">
          {category.indiasOpening}
        </p>
      </div>
    </Card>
  );
}
