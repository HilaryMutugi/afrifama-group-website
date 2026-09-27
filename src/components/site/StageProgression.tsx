const stages = [
  { label: "Chick", weeks: "Week 0–8", feed: "Chick Mash" },
  { label: "Grower", weeks: "Week 9–18", feed: "Growers Mash" },
  { label: "Layer", weeks: "Week 19+", feed: "Layers Mash" },
  { label: "Dual-purpose", weeks: "Grower–production", feed: "Kienyeji Mash" },
];

export function StageProgression() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((s, i) => (
        <li
          key={s.label}
          className="relative rounded-2xl border border-border bg-card p-5 shadow-card"
        >
          <span className="eyebrow text-terracotta">Stage {i + 1}</span>
          <p className="mt-2 font-display text-xl font-bold">{s.label}</p>
          <p className="text-sm text-muted-foreground">{s.weeks}</p>
          <p className="mt-4 inline-flex rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground">
            {s.feed}
          </p>
          <span
            aria-hidden="true"
            className="absolute top-1/2 -right-4 hidden h-px w-4 bg-border lg:block last:lg:hidden"
          />
        </li>
      ))}
    </ol>
  );
}
