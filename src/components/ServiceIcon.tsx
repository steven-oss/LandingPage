const icons = {
  globe: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.8 4 6.2 4 9s-1.5 6.2-4 9m0-18c-2.5 2.8-4 6.2-4 9s1.5 6.2 4 9"
    />
  ),
  layout: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm4 0v16m8-12H8"
    />
  ),
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  plug: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  ),
} as const;

type ServiceIconProps = {
  name: keyof typeof icons;
};

export function ServiceIcon({ name }: ServiceIconProps) {
  return (
    <svg
      className="h-7 w-7 text-sky-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      {icons[name]}
    </svg>
  );
}
