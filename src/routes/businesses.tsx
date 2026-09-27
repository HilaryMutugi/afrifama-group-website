import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  Section,
  SectionHeading,
  StatusBadge,
  Card,
  CheckList,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company, pillars } from "@/content/site";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Our Businesses — Poultry, Feeds, Farmer Partnership, Genetics | Afrifama" },
      {
        name: "description",
        content:
          "Afrifama's four business areas with clear operational status: poultry production, Afrifama Feeds, the smallholder farmer partnership, and genetics and hatchery development.",
      },
      { property: "og:title", content: "Our Businesses | Afrifama" },
      {
        property: "og:description",
        content:
          "Four connected business areas, each labelled Operational, In Development or Future so partners know exactly what exists today.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/businesses` }],
  }),
  component: Businesses;
});

function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Four connected business areas, labelled honestly."
        lead="Some parts of the Afrifama system are operating today and others are still being built. Every area below carries its current operational status."
        breadcrumbs={[{ label: "Our Businesses" }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Overview"
          title="One system, four areas of work"
          lead="Each area is run as a business in its own right, and each one is designed to strengthen the others."
        />
        <div className="mt-12 space-y-5">
          {pillars.map((pillar, index) => (
            <Card key={pillar.title}>
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="eyebrow text-terracotta">
                    0{index + 1} · Afrifama {pillar.title.split(" ")[0]}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{pillar.title}</h3>
                  <div className="mt-3">
                    <StatusBadge status={pillar.status} />
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="leading-relaxed text-muted-foreground">{pillar.summary}</p>
                  <Button asChild variant="outline" size="sm" className="mt-5">
                    <Link to={pillar.to}>
                      Go to {pillar.title}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
                <div className="lg:col-span-3">
                  <CheckList items={pillar.points} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Status labels"
          title="What our labels mean"
          lead="We use three labels consistently across the website."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              status: "Operational" as const,
              body: "Running today with real activity, customers or flocks.",
            },
            {
              status: "In Development" as const,
              body: "Actively being built — partnerships, technical work or planning underway. Not yet available commercially.",
            },
            {
              status: "Future" as const,
              body: "Planned as production volumes grow. Not started as a commercial activity.",
            },
          ].map((item) => (
            <Card key={item.status}>
              <StatusBadge status={item.status} />
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
