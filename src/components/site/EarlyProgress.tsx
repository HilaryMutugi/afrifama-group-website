import { earlyProgress } from "@/content/site";
import { Section, SectionHeading } from "./primitives";

export function EarlyProgressSection({
  tone = "muted",
  compact = false,
}: {
  tone?: "default" | "muted";
  compact?: boolean;
}) {
  return (
    <Section tone={tone} compact={compact}>
      <SectionHeading
        eyebrow="Early Progress"
        title="Where we are today, stated plainly."
        lead="These are early-stage figures from a business still building. They are not mature impact claims, and we update them as verified data changes."
      />
      <dl className={`${compact ? "mt-10" : "mt-12"} grid gap-4 sm:grid-cols-2 lg:grid-cols-5`}>
        {earlyProgress.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl border border-border bg-card p-6 ${compact ? "" : "shadow-card"}`}
          >
            <dt className="order-2 mt-1 font-display text-base font-bold">{item.label}</dt>
            <dd className="font-display text-4xl font-extrabold text-primary">{item.value}</dd>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm text-muted-foreground">
        Figures reflect early-stage progress in Kilifi County and are maintained in a single content
        file so they can be updated as the work develops.
      </p>
    </Section>
  );
}
