"use client";

import { useState } from "react";
import { site } from "@/content/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      body: String(data.get("body") ?? "").trim(),
    };

    if (payload.body.length < 5) {
      setState("error");
      setMessage(`需求說明至少 5 個字（目前 ${payload.body.length} 字）。`);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "送出失敗");
      }

      setState("success");
      setMessage("已收到您的訊息，我會盡快回覆。");
      form.reset();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "送出失敗，請稍後再試或直接 Email 聯絡。");
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <h3 className="text-lg font-semibold text-slate-900">其他聯絡方式</h3>
        <ul className="mt-4 space-y-4 text-sm text-slate-600">
          <li>
            <span className="block font-medium text-slate-800">Email</span>
            <a href={`mailto:${site.email}`} className="text-violet-700 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            <span className="block font-medium text-slate-800">LinkedIn</span>
            <a
              href={site.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-700 hover:underline"
            >
              查看個人檔案
            </a>
          </li>
          <li>
            <span className="block font-medium text-slate-800">GitHub</span>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-700 hover:underline"
            >
              {site.githubUrl.replace("https://", "")}
            </a>
          </li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="lg:col-span-3 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-slate-700">姓名</span>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-violet-500 focus:ring-2"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-slate-700">Email</span>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-violet-500 focus:ring-2"
            />
          </label>
        </div>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">主旨</span>
          <input
            name="subject"
            required
            placeholder="例如：官網改版、後台系統估價"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-violet-500 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">需求說明</span>
          <textarea
            name="body"
            required
            minLength={5}
            rows={5}
            placeholder="請至少 5 字，例如：想了解前端職缺／官網估價／可面談時間"
            className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none ring-violet-500 focus:ring-2"
          />
        </label>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-8"
        >
          {state === "submitting" ? "送出中…" : "送出訊息"}
        </button>
        {message && (
          <p
            className={`text-sm ${state === "success" ? "text-emerald-700" : "text-red-600"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
