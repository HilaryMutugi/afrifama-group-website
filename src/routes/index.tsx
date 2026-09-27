import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wheat, Egg, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, StatusBadge } from "@/components/site/primitives";
import { EarlyProgressSection } from "@/components/site/EarlyProgress";
import { CtaBand } from "@/components/site/CtaBand";
import { company, pillars, problems, fieldNotes, valueChain } from "@/content/site";
import heroImage from "@/assets/hero-value-chain.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afrifama — Building a stronger poultry system from feed to flock" },
      {
        name: "description",
        content:
          "Afrifama is a Kenyan agribusiness building an integrated poultry system: quality feed, commercial layer production, structured smallholder farmer partnerships and poultry genetics development.",
      },
      {
        property: "og:title",
        content: "Afrifama — Building a stronger poultry system from feed to flock",
      },
      {
        property: "og:description",
        content:
          "Quality nutrition, reliable production, structured farmer partnerships and the foundations for stronger poultry genetics in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/` }],
  }),
  component: Home,
});

const chainIcons = [Wheat, Egg, Users, Store];

function Hero() {
  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-14">
        <div className="lg:col-span-6">
          <p className="eyebrow text-terracotta">Kenyan agribusiness · Kilifi County</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Building a stronger poultry system from feed to flock.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Afrifama is a Kenyan agribusiness building an integrated poultry system around quality
            nutrition, reliable production, structured farmer partnerships and the foundations for
            stronger poultry genetics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/businesses">
                Explore Our Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Partner With Afrifama</Link>
            </Button>
          </div>
          <p className="mt-8 border-l-2 border-gold pl-4 font-display text-sm font-semibold text-muted-foreground">
            {company.positioning}
          </p>
        </div>
        <div className="lg:col-span-6">
          <img
            src={heroImage}
            alt="A brown layer hen beside bowls of maize, poultry mash and soybean, with a basket of brown eggs on a Kenyan smallholding"
            width={1408}
            height={1152}
            className="aspect-[4/3] w-full rounded-2xl border border-border object-cover object-[35%_center] shadow-card lg:aspect-[11/10] lg:max-h-[30rem]"
          />
        </div>
      </div>
    </div>
  );
}

function ValueChainStrip() {
  return (
    <div className="border-b border-border bg-background">
      <ol className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {valueChain.map((step, i) => {
          const Icon = chainIcons[i] ?? Wheat;
          return (
            <li key={step.title} className="flex items-start gap-3 lg:px-5 lg:first:pl-0">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-display text-base font-bold">
                  {step.title}
                  {i < valueChain.length - 1 ? (
                    <ArrowRight className="hidden size-4 text-gold lg:inline" aria-hidden="true" />
                  ) : null}
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ValueChainStrip />

      <Section compact>
        <SectionHeading
          eyebrow="Our businesses"
          title="Four connected areas of work."
          lead="Each part of Afrifama exists because the others need it."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              <StatusBadge status={pillar.status} />
              <h3 className="mt-4 font-display text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pillar.summary}
              </p>
              <Link
                to={pillar.to}
                className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" compact>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Afrifama exists"
              title="Poultry farming in Kenya fails for system reasons more often than for lack of effort."
              lead="Afrifama is responding by building practical, connected solutions around the production system — commercially, not as charity."
            />
          </div>
          <ul className="grid gap-x-8 gap-y-6 lg:col-span-7 sm:grid-cols-2">
            {problems.map((p) => (
              <li key={p.title} className="border-t border-border pt-4">
                <h3 className="font-display text-base font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <EarlyProgressSection tone="default" compact />

      <Section tone="muted" compact>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Afrifama Field Notes" title="Latest field notes" />
          <Button asChild variant="outline">
            <Link to="/field-notes">
              View All Field Notes
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {fieldNotes.map((note) => (
            <div
              key={note.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                  {note.category}
                </span>
                <span className="rounded-md bg-gold/25 px-2 py-1 text-xs font-semibold text-gold-foreground">
                  Sample content
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{note.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note.excerpt}
              </p>
              <Link
                to="/field-notes/$slug"
                params={{ slug: note.slug }}
                className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
              >
                Read note
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
