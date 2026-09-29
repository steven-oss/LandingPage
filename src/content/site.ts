/**
 * 網站文案集中管理 — 請對照 LinkedIn 個人檔案更新以下欄位。
 * LinkedIn: 設定 → 公開網址 / 關於 / 精選 / 技能
 */

export const site = {
  name: "Steven Wang",
  nameEn: "Steven Wang",
  title: "全端／前端工程師 · 接案開發",
  /** LinkedIn 標題列（Headline）風格 */
  headline:
    "協助企業與創業者打造穩定、好維護的網站與 Web 應用 · React · Vue · TypeScript · Spring Boot",
  location: "台灣",
  linkedInUrl:
    "https://www.linkedin.com/in/%E8%81%96%E6%B7%B5-%E7%8E%8B-59b43725b/", // 換成你的公開個人檔案網址
  email: "zxc897286150@gmail.com", // 換成你的 Email
  githubUrl: "https://github.com/steven-oss",
  availability: "可接新案 · 遠端／混合協作",
} as const;

export const hero = {
  greeting: "你好，我是",
  subtitle:
    "專注網站與 Web App 開發，從需求釐清、UI 實作到 API 串接與上線部署，提供可長期維護的解法。",
  primaryCta: { label: "查看服務", href: "#services" },
  secondaryCta: { label: "聯絡我", href: "#contact" },
} as const;

/** LinkedIn「關於」摘要風格 */
export const about = {
  paragraphs: [
    "我是一位以使用者體驗與程式品質為核心的開發者，熟悉 React、Vue 與 TypeScript 生態，並具備 Spring Boot 後端與 REST API 整合經驗。",
    "無論是企業官網、後台管理系統、或需要與既有服務串接的前端功能，我都能從需求訪談開始，協助你規劃技術方案、估算時程，並以敏捷迭代方式交付。",
    "重視 RWD、效能與可維護性；若專案適合，也可評估 PWA 以提升行動端體驗。",
  ],
} as const;

export const services = [
  {
    title: "網站開發",
    description:
      "企業官網、Landing Page、多語系與 SEO 基礎建置，RWD 適配各種裝置。",
    icon: "globe",
  },
  {
    title: "Web App",
    description:
      "互動式應用、會員系統、儀表板與後台，以元件化架構方便後續擴充。",
    icon: "layout",
  },
  {
    title: "前端功能開發",
    description:
      "表單流程、資料視覺化、即時更新 UI，與設計稿高度一致的前端實作。",
    icon: "code",
  },
  {
    title: "API 串接",
    description:
      "REST / GraphQL 整合、身分驗證、錯誤處理與快取策略，前後端協作順暢。",
    icon: "plug",
  },
] as const;

export const techStack = {
  title: "技術與特色",
  subtitle: "依專案需求選型，兼顧開發效率與長期維護成本。",
  items: [
    { name: "React", category: "前端" },
    { name: "Vue", category: "前端" },
    { name: "TypeScript", category: "語言" },
    { name: "Next.js", category: "框架" },
    { name: "Spring Boot", category: "後端" },
    { name: "RWD", category: "體驗" },
    { name: "PWA", category: "體驗" },
    { name: "Tailwind CSS", category: "樣式" },
  ],
} as const;

export const processSteps = [
  {
    step: "01",
    title: "需求",
    description: "訪談目標、使用者情境、功能清單與時程期望，釐清 MVP 範圍。",
  },
  {
    step: "02",
    title: "規劃",
    description: "資訊架構、技術選型、Wireframe／原型與報價／里程碑確認。",
  },
  {
    step: "03",
    title: "開發",
    description: "迭代開發、定期 Demo，Git 版控與 Code Review 習慣。",
  },
  {
    step: "04",
    title: "測試",
    description: "跨瀏覽器／裝置測試、效能與無障礙基本檢查。",
  },
  {
    step: "05",
    title: "部署",
    description: "CI/CD、域名與 HTTPS、監控與交付文件，必要時協助上線後調整。",
  },
] as const;

export const projects = [
  {
    title: "出席管理系統",
    description:
      "專為教會與社區組織設計的出席管理系統，採用 Next.js、MySQL 與 Drizzle ORM 建置。）",
    tags: ["Next.js", "TypeScript", "MySQL", "Drizzle ORM"],
    links: {
      demo: "https://fam-attendance-tracking.vercel.app/",
      github: site.githubUrl,
    },
  },
  {
    title: "出席管理系統-spring boot",
    description:
      "使用 Spring Boot + Java 17 + JPA + PostgreSQL 開發的出席管理 RESTful API。",
    tags: ["Spring Boot", "API", "Java 17", "JPA", "PostgreSQL"],
    links: {
      demo: "https://fam-attendance-springboot-api.onrender.com/",
      github: site.githubUrl,
    },
  },
  {
    title: "台股量化選股與紙交易專案",
    description:
      "結合 道氏理論（趨勢過濾）、橫截面動能（Cross-sectional Momentum） 與 系統化風控（固定停損 + 移動停損），以 0050 為核心配置，搭配 0050 成分股策略池進行回測與實盤前驗證。",
    tags: ["Python", "量化交易", "回測", "實盤"],
    links: {
      demo: "#",
      github: site.githubUrl,
    },
  },
] as const;

export const faq = [
  {
    question: "如何報價？",
    answer:
      "依功能複雜度、設計完整度、串接數量與時程報價。需求訪談後提供固定報價或階段式報價，大型專案可拆 Milestone 付款。",
  },
  {
    question: "開發時間大概多久？",
    answer:
      "簡單 Landing Page 約 1–2 週；含後台或串接的 Web App 常見 4–12 週。實際時程會在規劃階段與你確認。",
  },
  {
    question: "指定技術棧可以嗎？",
    answer:
      "可以。若你已有 React 或 Vue 技術棧，我會優先沿用；新專案會依 SEO、效能與團隊維護能力建議 Next.js 等方案。",
  },
  {
    question: "上線後維護怎麼算？",
    answer:
      "可選按次修 bug、小型功能加價，或月保固（含小修改時數）。交付時會提供部署說明與基本文件，方便你或團隊接手。",
  },
] as const;

export const ctaBanner = {
  title: "有網站或系統需求？",
  subtitle: "歡迎與我討論 — 即使還在構想階段，也可以先聊聊方向與可行性。",
  button: { label: "開始聯絡", href: "#contact" },
} as const;

export const navLinks = [
  { label: "服務", href: "#services" },
  { label: "技術", href: "#tech" },
  { label: "流程", href: "#process" },
  { label: "作品", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "聯絡", href: "#contact" },
] as const;
