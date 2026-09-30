import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dna, Egg, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EggJourney } from "@/components/site/EggJourney";
import { Section, SectionHeading, StatusBadge } from "@/components/site/primitives";
import { company, geneticsPage } from "@/content/site";

export const Route = createFileRoute("/genetics-hatchery")({
  head: () => ({
    meta: [
      { title: "Genetics & Hatchery Development | Afrifama" },
      { property: "og:title", content: "Genetics & Hatchery Development | Afrifama" },
      { property: "og:url", content: "/genetics-hatchery" },
      {
        name: "description",
        content:
          "Afrifama is developing parent-stock capability, genetics partnerships and the technical foundations for future locally relevant chick supply in Kenya.",
      },
      {
        property: "og:description",
        content:
          "Afrifama is developing parent-stock capability, genetics partnerships and the technical foundations for future locally relevant chick supply in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/genetics-hatchery` }],
  }),
  component: Genetics,
});

function Genetics() {
  const icons = [Dna, Egg, Sprout];
  return (
    <>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 pt-6 pb-8 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow text-terracotta">Genetics &amp; Hatchery</p>
            <StatusBadge status="In Development" />
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            {geneticsPage.title}
          </h1>
          <p className="mt-2 mb-5 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {geneticsPage.intro}
          </p>
          <EggJourney />
        </div>
      </section>

      <Section compact>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="For smallholder farmers" title={geneticsPage.farmers.title} />
          <div>
            <p className="body-copy text-muted-foreground">{geneticsPage.farmers.body}</p>
            <p className="mt-4 body-copy text-muted-foreground">{geneticsPage.farmers.support}</p>
          </div>
        </div>
      </Section>

      <Section compact tone="muted">
        <SectionHeading eyebrow="From parent flock to first start" title={geneticsPage.careTitle} />
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {geneticsPage.care.map((item, index) => {
            const Icon = icons[index] ?? Dna;
            return (
              <article key={item.title} className="border-t border-border pt-5">
                <Icon className="size-6 text-terracotta" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section compact>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Afrifama’s development direction"
            title={geneticsPage.direction.title}
          />
          <div>
            <p className="body-copy text-muted-foreground">{geneticsPage.direction.body}</p>
            <div className="mt-5 border-l-4 border-gold bg-secondary/50 px-5 py-4">
              <p className="font-display font-bold">{geneticsPage.direction.statusTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {geneticsPage.direction.status}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section compact tone="muted">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="Technical partnerships"
            title={geneticsPage.partnership.title}
            lead={geneticsPage.partnership.body}
          />
          <Button asChild size="lg" className="shrink-0 self-start lg:self-center">
            <Link to="/contact">
              {geneticsPage.partnership.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
