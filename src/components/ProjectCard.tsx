import Image from "next/image";
import Link from "next/link";

export type ProjectItem = {
  title: string;
  description: string;
  tags: readonly string[];
  links: { demo: string; github: string };
  image?: string;
  gallery?: readonly string[];
  featured?: boolean;
};

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.featured ?? false;
  const cover = project.image;
  const demoValid = project.links.demo !== "#";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 ${
        isFeatured ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-0" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-violet-100 via-fuchsia-50 to-cyan-100 ${
          isFeatured ? "min-h-[220px] lg:min-h-full" : "aspect-[16/10]"
        }`}
      >
        {cover ? (
          <>
            <Image
              src={cover}
              alt={`${project.title} 預覽`}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 40vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </>
        ) : (
          <div className="flex h-full min-h-[180px] items-center justify-center">
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent">
              {project.title.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${isFeatured ? "lg:justify-center" : ""}`}>
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>

        {project.gallery && project.gallery.length > 0 && (
          <ul className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {project.gallery.map((src) => (
              <li key={src} className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg ring-1 ring-slate-200">
                <Image src={src} alt="" fill className="object-cover object-top" sizes="96px" />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {demoValid && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              開啟 Demo
            </Link>
          )}
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-violet-300 hover:text-violet-700"
          >
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
}
