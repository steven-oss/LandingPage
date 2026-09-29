import type { Metadata } from "next";
import { Noto_Sans_TC, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.headline,
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.headline,
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${notoSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
