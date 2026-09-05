// =================================
//  TYPES
// =================================
interface SocialCardProps {
  title: string;
  icon: "github" | "linkedin";
  link: string;
}

function BrandIcon({ name }: { name: SocialCardProps["icon"] }) {
  if (name === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-[var(--text-color)]"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-[var(--text-color)]"
    >
      <path d="M20.45 2H3.55A1.54 1.54 0 0 0 2 3.53v16.94A1.54 1.54 0 0 0 3.55 22h16.9A1.54 1.54 0 0 0 22 20.47V3.53A1.54 1.54 0 0 0 20.45 2ZM8.03 18.9H4.86V8.7h3.17v10.2ZM6.45 7.3a1.84 1.84 0 1 1 0-3.68 1.84 1.84 0 0 1 0 3.68ZM19 18.9h-3.16v-4.96c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62v5.04H9.12V8.7h3.04v1.4h.04c.42-.8 1.46-1.65 3-1.65 3.2 0 3.8 2.1 3.8 4.85v5.6Z" />
    </svg>
  );
}

// =================================
//  COMPONENT
// =================================
export default function SocialCard({ title, icon, link }: SocialCardProps) {
  return (
    <button
      aria-label={`Open ${title}`}
      className="
        relative min-h-[60px] w-full bg-[var(--surface-color)] border-[3px] border-[var(--border-color)]
        shadow-[4px_4px_0px_var(--shadow-color)] p-2 flex items-center gap-2 text-start
        transition-all duration-[120ms] ease-out hover:translate-x-[3px]
        hover:translate-y-[3px] hover:shadow-[2px_2px_0px_var(--shadow-color)] cursor-pointer
      "
      onClick={() => window.open(link)}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-[var(--border-color)] bg-[var(--surface-muted-color)] shadow-[2px_2px_0px_var(--shadow-color)]">
        <BrandIcon name={icon} />
      </span>

      <span className="flex min-w-0 flex-col items-start gap-1">
        <span className="font-sans text-sm font-extrabold uppercase leading-none text-[var(--text-color)]">
          {title}
        </span>
        <span className="border border-[var(--border-color)] bg-[var(--status-color)] px-1 py-0.5 font-sans text-[var(--text-color)] text-[8px] font-extrabold uppercase leading-none tracking-wide">
          Available
        </span>
      </span>
    </button>
  );
}
