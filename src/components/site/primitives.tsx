import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Status } from "@/content/site";

export function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    Operational: "bg-primary/10 text-primary ring-primary/20",
    "In Development": "bg-gold/25 text-gold-foreground ring-gold/40",
    Future: "bg-secondary text-secondary-foreground ring-border",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ring-inset ${styles[status]}`}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}

export function Section({
  children,
  className = "",
  tone = "default",
  id,
  compact = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "forest";
  id?: string;
  compact?: boolean;
}) {
  const tones = {
    default: "",
    muted: "bg-secondary/60",
    forest: "bg-forest text-primary-foreground",
  } as const;
  return (
    <section
      id={id}
      className={`${compact ? "py-10 sm:py-12" : "section-pad"} ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className={`eyebrow ${inverted ? "text-gold" : "text-terracotta"}`}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 h2-section font-extrabold">{title}</h2>
      {lead ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            inverted ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <ChevronRight className="size-3.5 opacity-50" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  status,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  status?: Status;
  breadcrumbs: { label: string; to?: string }[];
}) {
  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-16 sm:pb-20 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow text-terracotta">{eyebrow}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="h1-page font-extrabold lg:col-span-7">
            {title}
          </h1>
          <div className="lg:col-span-5">
            {status ? (
              <div className="mb-3">
                <StatusBadge status={status} />
              </div>
            ) : null}
            <p className="text-lg leading-relaxed text-muted-foreground">{lead}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  );
}

export function CheckList({
  items,
  inverted = false,
}: {
  items: string[];
  inverted?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base">
          <span
            aria-hidden="true"
            className={`mt-2 size-1.5 shrink-0 rounded-full ${inverted ? "bg-gold" : "bg-primary"}`}
          />
          <span className={inverted ? "text-primary-foreground/85" : "text-foreground"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
