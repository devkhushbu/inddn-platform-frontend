export type Player = {
  country: string;
  flag: string;
  companies: string;
};

export type OpportunityCategory = {
  id: string;
  title: string;
  subtitle: string;
  status: string; // e.g., "No Indian player", "Urgent gap"
  players: Player[];
  indiasOpening: string;
  filterCategory: string; // Used for tabs
};

export const opportunitiesData: OpportunityCategory[] = [
  {
    id: "search-engines",
    title: "Search engines",
    subtitle: "Web & information discovery",
    status: "No Indian player",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Google, Bing, Yahoo" },
      { country: "Russia", flag: "🇷🇺", companies: "Yandex" },
      { country: "China", flag: "🇨🇳", companies: "Baidu" },
      { country: "S. Korea", flag: "🇰🇷", companies: "Naver" },
      { country: "India", flag: "🇮🇳", companies: "— None yet" },
    ],
    indiasOpening: "900M+ Indian internet users, zero homegrown search. A multilingual Indic search engine is a national priority and a massive untapped market.",
    filterCategory: "Technology",
  },
  {
    id: "smartphone-os",
    title: "Smartphone operating systems",
    subtitle: "Mobile & device OS",
    status: "No Indian player",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Android (Google), iOS (Apple)" },
      { country: "China", flag: "🇨🇳", companies: "HarmonyOS (Huawei)" },
      { country: "India", flag: "🇮🇳", companies: "— None yet" },
    ],
    indiasOpening: "Every Indian smartphone runs a foreign OS. A sovereign Indian OS for Bharat's 750M+ smartphone users is a strategic and commercial goldmine.",
    filterCategory: "Technology",
  },
  {
    id: "ai-llm",
    title: "AI & large language models",
    subtitle: "Artificial intelligence platforms",
    status: "Urgent gap",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "ChatGPT, Gemini, Claude" },
      { country: "China", flag: "🇨🇳", companies: "DeepSeek, Qwen, Ernie" },
      { country: "India", flag: "🇮🇳", companies: "Sarvam AI (very early)" },
    ],
    indiasOpening: "India has world-class AI engineers but no globally competitive LLM. An AI fluent in all 22 Indic languages could serve 2 billion+ South Asians.",
    filterCategory: "Technology",
  },
  {
    id: "social-media",
    title: "Social media platforms",
    subtitle: "Social networking & content",
    status: "Weak presence",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Instagram, Facebook, X" },
      { country: "China", flag: "🇨🇳", companies: "WeChat, TikTok" },
      { country: "India", flag: "🇮🇳", companies: "ShareChat, Josh (growing)" },
    ],
    indiasOpening: "ShareChat exists but lacks global scale. An Indian-first platform built for Bharat's culture, 22 languages and data privacy needs is wide open.",
    filterCategory: "Media & Content",
  },
  {
    id: "web-browsers",
    title: "Web browsers",
    subtitle: "Internet navigation software",
    status: "No Indian player",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Chrome, Safari, Edge, Firefox" },
      { country: "China", flag: "🇨🇳", companies: "360 Browser, UC Browser" },
      { country: "India", flag: "🇮🇳", companies: "— None yet" },
    ],
    indiasOpening: "India uses browsers built by its biggest tech competitors. A privacy-first Indian browser with Indic language support could reach every Indian device.",
    filterCategory: "Technology",
  },
  {
    id: "cloud-computing",
    title: "Cloud computing platforms",
    subtitle: "Infrastructure & cloud services",
    status: "No Indian player",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "AWS, Azure, Google Cloud" },
      { country: "China", flag: "🇨🇳", companies: "Alibaba Cloud, Tencent Cloud" },
      { country: "India", flag: "🇮🇳", companies: "Airtel Cloud (very early)" },
    ],
    indiasOpening: "India's ₹2L+ Cr cloud spend goes entirely abroad. A sovereign Indian cloud built for DPDP Act compliance and rupee pricing is a national and commercial imperative.",
    filterCategory: "Infrastructure",
  },
  {
    id: "crm-erp",
    title: "CRM & ERP software",
    subtitle: "Business management tools",
    status: "Zoho leads!",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Salesforce, Oracle" },
      { country: "Germany", flag: "🇩🇪", companies: "SAP (global dominance)" },
      { country: "India", flag: "🇮🇳", companies: "Zoho — world-class!" },
    ],
    indiasOpening: "Zoho is India's hidden champion — built in Chennai, 100M+ users globally. INDDN needs to replicate this success across 20 more enterprise software categories.",
    filterCategory: "Enterprise",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity solutions",
    subtitle: "Data protection & threat defence",
    status: "No Indian player",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "CrowdStrike, Palo Alto, McAfee" },
      { country: "Israel", flag: "🇮🇱", companies: "Check Point, CyberArk" },
      { country: "India", flag: "🇮🇳", companies: "— No global player yet" },
    ],
    indiasOpening: "India spends thousands of crores protecting its own data with foreign tools. A sovereign Indian cybersecurity firm is a national security and commercial imperative.",
    filterCategory: "Enterprise",
  },
  {
    id: "e-commerce",
    title: "E-commerce platforms",
    subtitle: "Online shopping & retail",
    status: "Building fast",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Amazon, eBay" },
      { country: "China", flag: "🇨🇳", companies: "Alibaba, Temu" },
      { country: "India", flag: "🇮🇳", companies: "Flipkart, Meesho, IndianBrand" },
    ],
    indiasOpening: "Flipkart is now Walmart-owned. IndianBrand aims to be the proudly Indian, founder-owned marketplace selling Indian-made products to the world.",
    filterCategory: "Consumer",
  },
  {
    id: "food-grocery",
    title: "Food & grocery delivery",
    subtitle: "Quick commerce & logistics",
    status: "India leads",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "DoorDash, Instacart" },
      { country: "China", flag: "🇨🇳", companies: "Meituan, Eleme" },
      { country: "India", flag: "🇮🇳", companies: "Zomato, Swiggy, Blinkit" },
    ],
    indiasOpening: "India genuinely leads in quick commerce innovation. The next step: Zomato and Swiggy expanding across Southeast Asia and the Middle East as Indian-built global products.",
    filterCategory: "Consumer",
  },
  {
    id: "digital-payments",
    title: "Digital payments & fintech",
    subtitle: "Payment infrastructure & apps",
    status: "India leads!",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Visa, Mastercard, PayPal" },
      { country: "China", flag: "🇨🇳", companies: "AliPay, WeChat Pay" },
      { country: "India", flag: "🇮🇳", companies: "UPI, PhonePe, Paytm, Razorpay" },
    ],
    indiasOpening: "India leads with UPI — India's gift to the world. The mission now is to export UPI infrastructure to 50+ countries as an Indian-built global standard.",
    filterCategory: "Consumer",
  },
  {
    id: "video-streaming",
    title: "Video streaming (OTT)",
    subtitle: "Entertainment & content platforms",
    status: "Partial coverage",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Netflix, YouTube, Disney+" },
      { country: "China", flag: "🇨🇳", companies: "iQIYI, Youku" },
      { country: "India", flag: "🇮🇳", companies: "JioCinema, Hotstar, MX Player" },
    ],
    indiasOpening: "India has OTT but all are telecom-backed or foreign-funded. An independent, creator-owned Indian streaming platform competing globally is wide open.",
    filterCategory: "Media & Content",
  },
  {
    id: "edtech",
    title: "Online education (EdTech)",
    subtitle: "Learning & skills platforms",
    status: "Growing fast",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Coursera, Duolingo, Khan Academy" },
      { country: "China", flag: "🇨🇳", companies: "TAL Education, VIPKid" },
      { country: "India", flag: "🇮🇳", companies: "PhysicsWallah, upGrad, BYJU'S" },
    ],
    indiasOpening: "PhysicsWallah is a remarkable Indian success. The next chapter: Indian EdTech expanding to teach the world — in English and 100+ languages — at Indian prices.",
    filterCategory: "Consumer",
  },
  {
    id: "music-streaming",
    title: "Music streaming",
    subtitle: "Audio content & music discovery",
    status: "Weak presence",
    players: [
      { country: "Sweden", flag: "🇸🇪", companies: "Spotify" },
      { country: "USA", flag: "🇺🇸", companies: "Apple Music, YouTube Music" },
      { country: "India", flag: "🇮🇳", companies: "Gaana, JioSaavn (limited)" },
    ],
    indiasOpening: "Gaana and JioSaavn exist but lack global reach. A truly global Indian music platform promoting Indian artists and classical music worldwide is a huge opportunity.",
    filterCategory: "Media & Content",
  },
  {
    id: "semiconductors",
    title: "Semiconductor chips",
    subtitle: "Hardware & microprocessor manufacturing",
    status: "No Indian fab",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Intel, Qualcomm, AMD" },
      { country: "Taiwan", flag: "🇹🇼", companies: "TSMC (makes chips for all)" },
      { country: "India", flag: "🇮🇳", companies: "Tata fab planned (2026+)" },
    ],
    indiasOpening: "India designs no chips and fabs none at scale. The ₹76,000 Cr India Semiconductor Mission is India's moon shot. INDDN-backed chip design startups can ride this wave.",
    filterCategory: "Infrastructure",
  },
  {
    id: "space-tech",
    title: "Satellite & space tech",
    subtitle: "Space infrastructure & services",
    status: "ISRO leads, pvt growing",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "SpaceX Starlink, OneWeb" },
      { country: "China", flag: "🇨🇳", companies: "ChinaSat" },
      { country: "India", flag: "🇮🇳", companies: "ISRO, Pixxel, Agnikul Cosmos" },
    ],
    indiasOpening: "India has ISRO's legacy and a booming private space sector. Pixxel and Agnikul prove Indian startups can compete in satellite internet, Earth observation and launch services.",
    filterCategory: "Infrastructure",
  },
  {
    id: "ev-batteries",
    title: "Electric vehicles & batteries",
    subtitle: "Clean mobility & energy storage",
    status: "Building capacity",
    players: [
      { country: "USA", flag: "🇺🇸", companies: "Tesla, Lucid Motors" },
      { country: "China", flag: "🇨🇳", companies: "BYD, NIO, CATL (batteries)" },
      { country: "India", flag: "🇮🇳", companies: "Tata EV, Ola Electric, Ather" },
    ],
    indiasOpening: "Ola Electric and Ather are world-class 2-wheeler EV companies. The gap: an Indian 4-wheeler EV that competes globally on quality and price — Tesla for Bharat.",
    filterCategory: "Infrastructure",
  }
];
