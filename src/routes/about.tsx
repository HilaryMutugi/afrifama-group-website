import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Card, Prose } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import {
  company,
  mission,
  vision,
  operatingPrinciples,
  storyParagraphs,
  pillars,
} from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Afrifama — An integrated Kenyan poultry agribusiness" },
      {
        name: "description",
        content:
          "Afrifama's story, mission, vision and operating principles, and why an integrated poultry model matters for Kenyan farmers.",
      },
      { property: "og:title", content: "About Afrifama — An integrated Kenyan poultry agribusiness" },
      {
        property: "og:description",
        content:
          "Why Afrifama is building feed, poultry production, farmer partnerships and genetics development as one connected system.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/about` }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Afrifama"
        title="A poultry business built around the realities of Kenyan farms."
        lead="Afrifama is an early-growth, commercially disciplined and farmer-centred agribusiness based in Kilifi County, Kenya."
        breadcrumbs={[{ label: "About Afrifama" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our story" title="How Afrifama started" />
            <div className="mt-6">
              <Prose paragraphs={storyParagraphs} />
            </div>
          </div>
          <div className="space-y-5 lg:col-span-5">
            <Card>
              <h2 className="eyebrow text-terracotta">Mission</h2>
              <p className="mt-3 text-lg leading-relaxed">{mission}</p>
            </Card>
            <Card>
              <h2 className="eyebrow text-terracotta">Vision</h2>
              <p className="mt-3 text-lg leading-relaxed">{vision}</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Operating principles"
          title="How we make decisions"
          lead="These principles decide what we build next and what we are prepared to claim publicly."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {operatingPrinciples.map((p) => (
            <Card key={p.title}>
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The integrated model"
              title="Why solving one piece is not enough"
              lead="A farmer with good birds and poor feed still loses money. Good feed with unreliable bird supply leaves houses empty. The parts have to move together."
            />
          </div>
          <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <h3 className="font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership profiles"
          lead="Afrifama's leadership and technical team profiles will be published here."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {["Leadership profile", "Leadership profile", "Technical team profile"].map((label, i) => (
            <Card key={i}>
              <div
                aria-hidden="true"
                className="dot-texture h-36 rounded-xl border border-border bg-secondary text-primary"
              />
              <p className="mt-4 font-display text-base font-bold">{label} — placeholder</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Name, role and biography to be supplied by Afrifama.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
