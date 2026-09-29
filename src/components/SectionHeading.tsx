type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-sky-700">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}
