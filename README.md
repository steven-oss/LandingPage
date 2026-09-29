# 個人介紹 Landing Page

Next.js（App Router）+ TypeScript + Tailwind CSS 的單頁接案／個人品牌網站。

## 開始使用

```bash
npm install
npm run dev
```

瀏覽 [http://localhost:3000](http://localhost:3000)。

## 對照 LinkedIn 更新文案

LinkedIn 需登入才能編輯，無法自動同步。請打開你的 [公開個人檔案設定](https://www.linkedin.com/public-profile/settings/)，將以下區塊複製到 **`src/content/site.ts`**：

| LinkedIn 區塊 | 對應設定 |
| --- | --- |
| 姓名 / 標題列（Headline） | `site.name`、`site.headline`、`site.title` |
| 關於（About） | `about.paragraphs` |
| 精選 / 專案 | `projects` |
| 技能 | `techStack.items` |
| 聯絡方式 | `site.email`、`site.lineId`、`site.linkedInUrl`、`site.githubUrl` |

## 聯絡表單

`POST /api/contact` 目前僅驗證並寫入 server log。上線前可串接 [Resend](https://resend.com) 等郵件服務。

## 部署

```bash
npm run build
npm start
```

可部署至 [Vercel](https://vercel.com) 或任何支援 Next.js 的平台。
