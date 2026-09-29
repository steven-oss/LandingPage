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

## 聯絡表單（Resend）

表單會透過 [Resend](https://resend.com) 寄到 **`site.email`**（或環境變數 `CONTACT_TO_EMAIL`）。

1. 至 Resend 建立 API Key。
2. 複製 `.env.example` 為 `.env.local`，填入：

```bash
RESEND_API_KEY=re_xxxx
```

3. **本機測試**：`RESEND_FROM` 可用 `Steven Wang <onboarding@resend.dev>`，此模式下 Resend 通常**只能寄到你 Resend 註冊信箱**。
4. **正式上線**：在 Resend 驗證網域，並在 Vercel → Settings → Environment Variables 設定 `RESEND_API_KEY`、建議設定 `RESEND_FROM=你的名字 <contact@你的網域>`。

## 部署

```bash
npm run build
npm start
```

可部署至 [Vercel](https://vercel.com) 或任何支援 Next.js 的平台。
