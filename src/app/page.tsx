import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  about,
  ctaBanner,
  faq,
  hero,
  processSteps,
  projects,
  services,
  site,
  techStack,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-sky-50/80 to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <p className="text-sm font-medium text-sky-800">{site.availability}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              {hero.greeting}
              {site.name}
              <span className="mt-2 block text-2xl font-semibold text-slate-700 sm:text-3xl">
                {site.headline}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              {site.location} · {site.title}
            </p>
          </div>
        </section>

        {/* About (LinkedIn 關於) */}
        <section className="border-b border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="About" title="關於我" />
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Services"
              title="服務介紹"
              subtitle="從官網到完整 Web 應用，依需求提供端到端或前端專項協作。"
            />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <li
                  key={s.title}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-md"
                >
                  <ServiceIcon name={s.icon} />
                  <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech */}
        <section id="tech" className="scroll-mt-20 border-b border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Stack"
              title={techStack.title}
              subtitle={techStack.subtitle}
            />
            <ul className="mt-10 flex flex-wrap gap-3">
              {techStack.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="ml-2 text-slate-500">{item.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Process"
              title="開發流程"
              subtitle="需求 → 規劃 → 開發 → 測試 → 部署，每階段透明對齊。"
            />
            <ol className="mt-12 grid gap-6 md:grid-cols-5">
              {processSteps.map((step, i) => (
                <li
                  key={step.step}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  {i < processSteps.length - 1 && (
                    <span
                      className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-slate-200 md:block"
                      aria-hidden
                    />
                  )}
                  <span className="text-xs font-bold text-sky-700">{step.step}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="scroll-mt-20 border-b border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Work"
              title="作品展示"
              subtitle="Side Project、GitHub 與 Demo — 可對照 LinkedIn「專案」區塊更新。"
            />
            <ul className="mt-12 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="flex flex-col rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4 text-sm font-medium">
                    <a href={project.links.demo} className="text-sky-700 hover:underline">
                      Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading align="center" eyebrow="FAQ" title="常見問題" />
            <dl className="mt-10 space-y-6">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold sm:text-3xl">{ctaBanner.title}</h2>
            <p className="mt-4 text-slate-300">{ctaBanner.subtitle}</p>
            <a
              href={ctaBanner.button.href}
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {ctaBanner.button.label}
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Contact" title="聯絡表單" subtitle="填寫表單或直接 Email" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
          </p>
          <a href={site.linkedInUrl} className="hover:text-slate-800">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
