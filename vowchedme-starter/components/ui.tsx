import { clsx } from "clsx";

export function cn(...classes: Array<string | false | null | undefined>) {
  return clsx(classes);
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
      {children}
    </span>
  );
}

export function Card({
  title,
  body,
  footer,
}: {
  title: string;
  body: string;
  footer?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-bold tracking-tight">{title}</h3>
        <span className="h-2.5 w-2.5 rounded-full bg-vowch-500 shadow-glow" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
      {footer ? <p className="mt-3 text-xs text-slate-400">{footer}</p> : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition";
  const styles =
    variant === "primary"
      ? "bg-vowch-500 text-ink-950 hover:brightness-110"
      : "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10";
  return (
    <a href={href} className={cn(base, styles)}>
      {children}
    </a>
  );
}
