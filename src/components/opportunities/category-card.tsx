import { OpportunityCategory } from "@/data/opportunities";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Search, Plus, Rocket, GitBranch, 
  Sparkles, Handshake, MonitorPlay, Code, Heart, Coins, Info,
  Smartphone, BrainCircuit, MessagesSquare, AppWindow, Cloud, Building2, ShieldCheck, ShoppingCart, Utensils, CreditCard, PlaySquare, GraduationCap, Music, Cpu, CarFront, Globe
} from "lucide-react";

interface CategoryCardProps {
  category: OpportunityCategory;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
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

function getStatusVariant(status: string) {
  const s = status.toLowerCase();
  if (s.includes("no") || s.includes("urgent") || s.includes("weak")) return "destructive";
  if (s.includes("lead") || s.includes("fast")) return "default";
  return "secondary";
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = CATEGORY_ICONS[category.id] || Globe;
  
  const foreignPlayers = category.players.filter(p => p.country !== "India");
  const indiaPlayer = category.players.find(p => p.country === "India") || { country: "India", flag: "🇮🇳", companies: "— None yet" };

  return (
    <Card className="group relative flex flex-col h-full bg-card border border-border/50 rounded-[20px] p-4 sm:p-5 overflow-hidden transition-all duration-500 hover:border-primary/30">
      
      {/* Attractive Glowing Backgrounds on Hover */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header matching image exactly */}
      <div className="relative z-10 flex items-start gap-3.5 mb-4">
        <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center bg-muted/60 border border-border/80 shrink-0 transition-transform duration-500 group-hover:scale-105">
          <Icon className="w-5 h-5 text-foreground/80" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-base tracking-tight text-foreground truncate">{category.title}</h3>
            {category.status && (
              <Badge 
                variant={getStatusVariant(category.status)} 
                className="rounded-full px-2.5 h-5 text-[10px] uppercase tracking-wider font-bold shrink-0 border-transparent"
              >
                {category.status}
              </Badge>
            )}
          </div>
          <p className="text-sm font-medium text-muted-foreground mt-0.5">{category.subtitle}</p>
        </div>
      </div>

      <div className="relative z-10 h-px w-full bg-border/50 mb-4" />

      {/* Global Landscape matching image */}
      <div className="relative z-10 bg-muted/30 rounded-xl p-3.5 border border-border/50 mb-4 transition-colors group-hover:bg-muted/40">
        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5"/> Global Landscape
        </h4>
        <div className="grid gap-2">
          {foreignPlayers.map((p, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs">
               <span className="w-6 text-center text-sm" title={p.country}>{p.flag}</span>
               <span className="font-bold text-foreground w-16 truncate">{p.country === "S. Korea" ? "S. Korea" : p.country}</span>
               <span className="text-muted-foreground font-medium truncate">{p.companies}</span>
            </div>
          ))}
        </div>
      </div>

      {/* India Block */}
      <div className="relative z-10 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-3.5 mb-4 transition-all duration-300 group-hover:border-primary/40">
         <div className="absolute -top-3 -right-3 p-3 opacity-5 pointer-events-none rotate-12">
           <span className="text-6xl">🇮🇳</span>
         </div>
         <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
           <div>
             <h4 className="font-extrabold text-foreground flex items-center gap-1.5 text-sm">
               <span className="text-base">🇮🇳</span> India
             </h4>
             <p className={`font-semibold text-xs mt-1 ${indiaPlayer.companies.includes("None") ? "text-destructive" : "text-primary"}`}>
               {indiaPlayer.companies}
             </p>
           </div>
           <Button size="sm" className="rounded-full font-bold px-4 h-8 bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105">
             <Plus className="w-3.5 h-3.5 mr-1" strokeWidth={3} /> Join
           </Button>
         </div>
         
         <div className="relative z-10 pt-2.5 border-t border-primary/10 flex flex-wrap items-center gap-x-3 gap-y-2">
           <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest shrink-0">Building this?</span>
           <div className="flex gap-3">
             <button className="text-xs text-foreground font-bold flex items-center gap-1.5 hover:text-primary transition-colors">
               <Rocket className="w-3.5 h-3.5 text-primary" /> Post Existing
             </button>
             <button className="text-xs text-foreground font-bold flex items-center gap-1.5 hover:text-purple-600 transition-colors">
               <GitBranch className="w-3.5 h-3.5 text-purple-500" /> Post Ongoing
             </button>
           </div>
         </div>
      </div>

      {/* Join As Section */}
      <div className="relative z-10 rounded-xl border border-border/80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-3.5 mb-4 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />
         <div className="flex flex-col mb-2.5">
           <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5 mb-1">
             <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Join As
           </h4>
           <span className="text-xs text-muted-foreground italic font-medium">Earn equity & rewards when the project succeeds.</span>
         </div>
         
         <div className="flex flex-wrap gap-1.5">
           <Badge variant="outline" className="bg-background/80 hover:bg-background border-border font-bold px-2 py-1 text-[10px] transition-all hover:scale-105 cursor-pointer">
             <Handshake className="w-3 h-3 mr-1.5 text-orange-500" /> Strategic Partner
           </Badge>
           <Badge variant="outline" className="bg-background/80 hover:bg-background border-border font-bold px-2 py-1 text-[10px] transition-all hover:scale-105 cursor-pointer">
             <MonitorPlay className="w-3 h-3 mr-1.5 text-blue-500" /> Project Manager
           </Badge>
           <Badge variant="outline" className="bg-background/80 hover:bg-background border-border font-bold px-2 py-1 text-[10px] transition-all hover:scale-105 cursor-pointer">
             <Code className="w-3 h-3 mr-1.5 text-emerald-500" /> Participator <span className="ml-1 text-muted-foreground">(4)</span>
           </Badge>
           <Badge variant="outline" className="bg-background/80 hover:bg-background border-border font-bold px-2 py-1 text-[10px] transition-all hover:scale-105 cursor-pointer">
             <Heart className="w-3 h-3 mr-1.5 text-red-500" /> Supporter
           </Badge>
         </div>
      </div>

      {/* Investor Section */}
      <div className="relative z-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 mb-2 flex items-center justify-between gap-3 group/investor hover:bg-emerald-500/10 transition-colors">
         <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover/investor:bg-emerald-500/20 transition-colors">
             <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
           </div>
           <div>
             <h4 className="font-bold text-foreground text-xs tracking-tight">Support as Investor</h4>
             <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Fund & earn returns</p>
           </div>
         </div>
         <Button size="sm" variant="outline" className="h-7 rounded-full border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all font-bold px-3 text-xs hover:scale-105">
           Invest
         </Button>
      </div>

      {/* India's Opening - Accordion */}
      <div className="relative z-10 mt-auto pt-1">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="opening" className="border-none">
            <AccordionTrigger className="hover:no-underline py-2 group/trigger outline-none">
              <div className="flex items-center gap-2 text-left">
                <div className="w-6 h-6 rounded-full bg-muted-foreground/10 group-hover/trigger:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                  <Info className="w-3.5 h-3.5 text-foreground group-hover/trigger:text-primary transition-colors" />
                </div>
                <span className="font-bold text-xs text-muted-foreground group-hover/trigger:text-primary transition-colors">India&apos;s Opening</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0 pt-1">
              <div className="p-3 bg-muted/40 rounded-xl border border-border/50 text-xs text-foreground/80 leading-relaxed font-medium">
                {category.indiasOpening}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
}
