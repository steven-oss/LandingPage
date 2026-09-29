/**
 * 網站文案集中管理 — 對外名稱：Steven Wang
 * 用語：對外白話為主，各段至多保留一個英文專有名詞（括號補充）。
 */

export const site = {
  name: "Steven Wang",
  nameEn: "Steven Wang",
  title: "前端工程師 · 求職中 · 可接案",
  headline:
    "約 5 年前端經驗 · React / Vue3 / TypeScript · 離線可用網頁（PWA）· 與後端、上線流程協作",
  location: "台灣",
  linkedInUrl:
    "https://www.linkedin.com/in/%E8%81%96%E6%B7%B5-%E7%8E%8B-59b43725b/",
  email: "zxc897286150@gmail.com",
  githubUrl: "https://github.com/steven-oss",
  availability: "開放求職 · 歡迎專案合作 · 遠端／混合",
} as const;

export const hero = {
  greeting: "你好，我是 ",
  subtitle:
    "約 5 年前端，熟悉 React、Vue3、TypeScript，以及弱網仍可用的網頁做法。同時開放前端職缺與專案合作：招聘方請看作品與 GitHub；若要官網、後台或應用程式，也歡迎先聊需求，再一起估範圍與費用。",
  primaryCta: { label: "查看作品", href: "#work" },
  secondaryCta: { label: "合作項目", href: "#services" },
  tertiaryCta: { label: "聯絡我", href: "#contact" },
} as const;

export const about = {
  paragraphs: [
    "我擁有約五年前端開發經驗，熟悉 React、Vue3、TypeScript，以及 React Native。目前擔任前端工程師，專注企業級網站、後台與 App 介面；個人作品則自行完成資料串接與 Vercel、Render 上線。",
    "重視使用者體驗與程式品質。詳細職涯與專案見下方「工作經歷」；Side Project 見「作品展示」。",
  ],
} as const;

export const experienceSection = {
  title: "工作經歷",
  subtitle:
    "由新到舊。內容與 LinkedIn 一致，以白話摘要；細節可面談或見 LinkedIn。",
} as const;

export const experience = [
  {
    role: "前端工程師",
    company: "康翔科技股份有限公司",
    employment: "正職",
    period: "2025/2 — 至今",
    location: "台北／新北 · 現場",
    project: "遠傳雲端醫療資訊系統（Cloud HIS）",
    highlights: [
      "以 Vue 3、TypeScript、Quasar、Pinia 開發掛號、看診、批價、藥局、疫苗等模組，元件化並優化操作流程。",
      "實作離線可用網頁（PWA）：弱網或斷線仍可查詢、掛號、看診紀錄等，恢復連線後背景同步。",
      "調整快取與 App Shell 載入，縮短載入時間，並處理版本更新時的資源不一致問題。",
    ],
    tags: ["Vue 3", "TypeScript", "Quasar", "Pinia", "PWA", "IndexedDB"],
  },
  {
    role: "軟體工程師",
    company: "AIValue 智慧價值股份有限公司",
    employment: "正職",
    period: "2021/7 — 2024/4",
    location: "台北市內湖 · 現場",
    project: "時空學園、亞東預拌、lemonade 電商等",
    highlights: [
      "【時空學園】React 遊戲資料後台；導入 GitLab 自動化部署、Nginx、Docker（Ubuntu）。",
      "【亞東預拌】多語系、角色權限、區／廠管理；協作 Apache POI 產業報表。",
      "【lemonade 電商】React 直播購物 Web、React Native App；回歸測試與 Postman API 測試。",
    ],
    tags: [
      "React",
      "React Native",
      "GitLab CI",
      "Docker",
      "Nginx",
      "Postman",
      "Spring Boot",
    ],
  },
] as const;

export const servicesSection = {
  title: "可協作的項目",
  subtitle:
    "求職與接案共用同一份能力表。尚未有正式對外接案案例；首次合作會先對需求，再估工時與報價。",
} as const;

export const services = [
  {
    title: "網站與應用程式",
    description:
      "React / Next.js、Vue3 企業網站、後台與儀表板，元件化架構，方便日後擴充與維護。",
    icon: "layout",
  },
  {
    title: "離線與弱網體驗（PWA）",
    description:
      "讓網頁像 App 一樣可安裝、可離線或弱網使用；含本地快取與效能調校，適合現場、醫療等網路不穩情境。",
    icon: "globe",
  },
  {
    title: "前端功能開發",
    description:
      "表單與驗證、狀態管理、介面實作（含 MUI、Tailwind、Quasar 等），與設計稿或既有規格對齊。",
    icon: "code",
  },
  {
    title: "資料串接與上線",
    description:
      "與後端 API 對接；個人作品使用 Vercel、Render。公司專案依團隊流程，曾接觸 GitLab CI、Docker、Nginx。",
    icon: "plug",
  },
] as const;

export const techStack = {
  title: "技術與特色",
  subtitle:
    "前端為主，並含後端串接、測試、部署與資料相關工具（名稱供工程背景參考）。",
  items: [
    { name: "React", category: "框架" },
    { name: "Next.js", category: "框架" },
    { name: "React Native", category: "框架" },
    { name: "Vue 3", category: "框架" },
    { name: "TypeScript", category: "語言" },
    { name: "WordPress", category: "CMS" },
    { name: "Redux", category: "狀態" },
    { name: "Zustand", category: "狀態" },
    { name: "Pinia", category: "狀態" },
    { name: "MUI", category: "UI" },
    { name: "Tailwind CSS", category: "UI" },
    { name: "Quasar", category: "UI" },
    { name: "Formik", category: "表單" },
    { name: "Zod", category: "驗證" },
    { name: "Cypress", category: "測試" },
    { name: "PWA / Service Worker", category: "效能" },
    { name: "IndexedDB", category: "效能" },
    { name: "Spring Boot", category: "後端" },
    { name: "Python", category: "後端" },
    { name: "MySQL", category: "資料庫" },
    { name: "Postman", category: "API" },
    { name: "GitLab / GitHub", category: "版控" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "Vercel", category: "部署" },
    { name: "Render", category: "部署" },
    { name: "Docker", category: "DevOps" },
    { name: "Nginx", category: "DevOps" },
    { name: "Ubuntu Server", category: "DevOps" },
    { name: "SonarQube", category: "品質" },
    { name: "Power BI", category: "資料" },
    { name: "Drizzle ORM", category: "資料庫" },
    { name: "JPA", category: "資料庫" },
    { name: "PostgreSQL", category: "資料庫" },
  ],
} as const;

/** 正職團隊工作方式（非接案 SOP） */
export const processSection = {
  title: "團隊中的工作方式",
  subtitle:
    "以短週期迭代（Sprint）運作：與需求窗口對齊功能與估時、依主管規劃開發，並依規定送審程式。個人作品則自行測試與 Vercel／Render 上線。",
} as const;

export const processSteps = [
  {
    step: "01",
    title: "排程與估時",
    description:
      "參與迭代排程，釐清功能優先順序，並依團隊方式提供開發時間估算給需求窗口。",
  },
  {
    step: "02",
    title: "開發執行",
    description:
      "在主管既定的技術方向與任務拆分下實作；提交合併請求，依團隊規範接受程式審查（多由正職同仁審核）。",
  },
  {
    step: "03",
    title: "測試與品質",
    description:
      "以手動與跨裝置測試為主；曾用 Cypress 做端對端測試，是否使用依專案規定。",
  },
  {
    step: "04",
    title: "上線與環境",
    description:
      "公司專案依團隊流程，曾接觸 GitLab CI、Docker、Nginx；個人作品使用 Vercel、Render 發布。",
  },
] as const;

export const workSection = {
  title: "作品展示",
  subtitle: "含實際畫面截圖；點 Demo 可進入線上版本。",
} as const;

export const heroFeaturedImage = "/projects/fam-attendance/dashboard.png";

export const projects = [
  {
    title: "出席管理系統",
    description:
      "教會與社區出席管理：儀表板統計、成員與小組 CRUD、週日出席矩陣、RWD 行動版。Next.js、MySQL、Drizzle ORM。",
    tags: ["Next.js", "TypeScript", "MySQL", "Drizzle ORM", "Vercel"],
    image: "/projects/fam-attendance/dashboard.png",
    gallery: [
      "/projects/fam-attendance/attendance.png",
      "/projects/fam-attendance/fams.png",
      "/projects/fam-attendance/mobile.png",
    ],
    featured: true,
    links: {
      demo: "https://fam-attendance-tracking.vercel.app/",
      github: site.githubUrl,
    },
  },
  {
    title: "個人網站",
    description:
      "使用 Next.js、Tailwind CSS 與 TypeScript 開發的個人品牌網站（本頁）。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/personal-site/landing.png",
    links: {
      demo: "https://landing-page-one-coral-89.vercel.app/",
      github: site.githubUrl,
    },
  },
  {
    title: "出席管理系統 — Spring Boot API",
    description:
      "使用 Spring Boot、Java 17、JPA 與 PostgreSQL 開發的出席管理 RESTful API。",
    tags: ["Spring Boot", "Java 17", "JPA", "PostgreSQL", "Render"],
    image: "/projects/springboot-api/swagger-ui.png",
    links: {
      demo: "https://fam-attendance-springboot-api.onrender.com/",
      github: site.githubUrl,
    },
  },
  {
    title: "台股量化選股與紙交易專案",
    description:
      "結合道氏理論（趨勢過濾）、橫截面動能與系統化風控（固定停損 + 移動停損），以 0050 為核心配置。附 2010 年起定期定額回測與不同配比比較；紙交易仍驗證中（未滿半年）。圖表為歷史回測，非未來績效保證。",
    tags: ["Python", "量化交易", "回測"],
    image: "/projects/taiwan-quant/dca-equity.png",
    gallery: [
      "/projects/taiwan-quant/drawdown.png",
      "/projects/taiwan-quant/metrics-table.png",
    ],
    links: {
      demo: "#",
      github: "https://github.com/steven-oss/Theoretical-Stock-Selection",
    },
  },
] as const;

export const faqSection = {
  title: "常見問題",
  subtitle: "求職與專案合作各一半 — 用一般說明回答，避免行話。",
} as const;

export const faq = [
  {
    question: "目前是否開放求職？",
    answer:
      "是。我持續關注前端工程師職缺（遠端或混合尤佳）。請附上職缺說明或團隊簡介，或透過 LinkedIn、Email、下方表單聯絡。正職與專案見「工作經歷」，Side Project 見「作品展示」，程式見 GitHub。",
  },
  {
    question: "想找什麼類型的工作？",
    answer:
      "以前端為主：React / Vue3 / TypeScript、網站或 React Native App；具離線網頁、企業系統（含醫療資訊）與後端資料串接經驗。希望團隊重視程式品質與 Code Review。",
  },
  {
    question: "有接案經驗嗎？怎麼開始？",
    answer:
      "尚未有正式對外接案案例，能力來自正職與個人作品。請用表單或 Email 說明想達成的目標、功能清單、希望完成時間與預算大概區間。我會回覆是否可接、還缺哪些資訊，並建議第一版先做哪些功能（其餘可之後再加）。",
  },
  {
    question: "接案如何計價？有價目表嗎？",
    answer:
      "目前沒有公開價目表。會先和你對齊「第一版要做什麼」，再依複雜度與預估工時，討論「整包固定價」或「分階段做、每階段驗收再進下一階段」；確認後才開工。若你有預算上限，可一起縮小或分次做；很小的試做需求另議。",
  },
  {
    question: "時程怎麼估？",
    answer:
      "會參考個人作品實際花費與正職上估時的習慣，把功能拆開後給「大概區間」（不是保證天數）。時間會受需求是否變更、設計是否齊全、要接幾支後端影響；第一次合作通常先做第一版，再談後續加功能。",
  },
  {
    question: "指定技術或只做前端可以嗎？",
    answer:
      "可以指定 React / Next.js、Vue3、React Native、TypeScript 等。可以只做前端（畫面、操作、接後端資料）；若需要簡單後端，可評估個人作品等級的 Next 內建 API 或與 Spring Boot 協作，複雜後端建議由你的工程師或第三方負責。",
  },
  {
    question: "交付後維護與原始碼？",
    answer:
      "維護尚未訂標準方案，上線後的修改可再談（單次或短期協助）。原始碼與主機帳號歸誰、是否提供操作／部署說明，會在報價前寫清楚，避免雙方認知不同。",
  },
] as const;

export const ctaBanner = {
  title: "求職或專案合作，都歡迎聯絡",
  subtitle:
    "招聘方：附上職缺說明，我會回覆面談時間。專案方：描述需求與預算區間即可；尚無價目表，會先對第一版範圍再談報價。",
  button: { label: "Email / 表單聯絡", href: "#contact" },
} as const;

export const navLinks = [
  { label: "關於", href: "#about" },
  { label: "經歷", href: "#experience" },
  { label: "合作", href: "#services" },
  { label: "技術", href: "#tech" },
  { label: "工作方式", href: "#process" },
  { label: "作品", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "聯絡", href: "#contact" },
] as const;
