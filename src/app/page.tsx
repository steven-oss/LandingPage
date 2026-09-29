import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { ProjectCard, type ProjectItem } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  about,
  experience,
  experienceSection,
  ctaBanner,
  faq,
  faqSection,
  hero,
  heroFeaturedImage,
  processSection,
  processSteps,
  projects,
  services,
  servicesSection,
  site,
  techStack,
  workSection,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-mesh relative overflow-hidden border-b border-white/5 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-violet-200">
                {site.availability}
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                {hero.greeting}
                <span className="text-gradient">{site.name}</span>
              </h1>
              <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">{site.headline}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">{hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  {hero.secondaryCta.label}
                </a>
                <a
                  href={hero.tertiaryCta.href}
                  className="inline-flex px-4 py-3 text-sm font-medium text-violet-300 transition hover:text-white"
                >
                  {hero.tertiaryCta.label} →
                </a>
              </div>
              <p className="mt-8 text-sm text-slate-500">
                {site.location} · {site.title}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-violet-600/40 to-fuchsia-600/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs text-slate-500">fam-attendance-tracking</span>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-xl">
                  <Image
                    src={heroFeaturedImage}
                    alt="出席管理系統儀表板預覽"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="About" title="關於我" />
            <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Experience"
              title={experienceSection.title}
              subtitle={experienceSection.subtitle}
            />
            <ul className="mt-12 space-y-8">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.project}`}
                  className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {job.role}
                        <span className="font-normal text-slate-600"> · {job.company}</span>
                      </h3>
                      <p className="mt-1 text-sm font-medium text-violet-700">{job.project}</p>
                    </div>
                    <p className="text-sm text-slate-500">
                      {job.period} · {job.employment}
                      <span className="hidden sm:inline"> · {job.location}</span>
                    </p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                    {job.highlights.map((line) => (
                      <li key={line.slice(0, 32)}>{line}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Portfolio — before services for visual impact */}
        <section id="work" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Work"
              title={workSection.title}
              subtitle={workSection.subtitle}
            />
            <ul className="mt-12 grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className={"featured" in project && project.featured ? "lg:col-span-2" : ""}
                >
                  <ProjectCard project={project as ProjectItem} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Services"
              title={servicesSection.title}
              subtitle={servicesSection.subtitle}
            />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <li
                  key={s.title}
                  className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5"
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
        <section id="tech" className="scroll-mt-20 border-y border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Stack" title={techStack.title} subtitle={techStack.subtitle} />
            <ul className="mt-10 flex flex-wrap gap-3">
              {techStack.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 transition hover:border-violet-200 hover:bg-violet-50/50"
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
              title={processSection.title}
              subtitle={processSection.subtitle}
            />
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <li
                  key={step.step}
                  className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm"
                >
                  <span className="text-xs font-bold text-violet-600">{step.step}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading
              align="center"
              eyebrow="FAQ"
              title={faqSection.title}
              subtitle={faqSection.subtitle}
            />
            <dl className="mt-10 space-y-4">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6"
                >
                  <dt className="font-semibold text-slate-900">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="hero-mesh py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{ctaBanner.title}</h2>
            <p className="mt-4 text-slate-300">{ctaBanner.subtitle}</p>
            <a
              href={ctaBanner.button.href}
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:opacity-90"
            >
              {ctaBanner.button.label}
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Contact" title="聯絡表單" subtitle="填寫表單或直接 Email" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
          </p>
          <a href={site.linkedInUrl} className="transition hover:text-violet-300">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
