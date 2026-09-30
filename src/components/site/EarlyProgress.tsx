import { earlyProgress } from "@/content/site";
import { Section, SectionHeading } from "./primitives";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function EarlyProgressSection({
  tone = "muted",
  compact = false,
  photoSlot,
}: {
  tone?: "default" | "muted";
  compact?: boolean;
  photoSlot?: string;
}) {
  return (
    <Section tone={tone} compact={compact}>
      <div className={photoSlot ? "grid items-center gap-7 lg:grid-cols-[1.2fr_1fr]" : ""}>
        <SectionHeading
          eyebrow="Early Progress"
          title="Where we are today, stated plainly."
          lead="These are early-stage figures from a business still building. They are not mature impact claims, and we update them as verified data changes."
        />
        {photoSlot ? (
          <ImagePlaceholder slot={photoSlot} className="aspect-[16/9] w-full rounded-xl" />
        ) : null}
      </div>
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
