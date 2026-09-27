import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  Section,
  SectionHeading,
  Card,
  CheckList,
  StatusBadge,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company } from "@/content/site";
import chicksImage from "@/assets/chicks.jpg";

export const Route = createFileRoute("/genetics-hatchery")({
  head: () => ({
    meta: [
      { title: "Genetics & Hatchery Development (In Development) | Afrifama" },
      {
        name: "description",
        content:
          "Afrifama is developing partnerships and technical foundations for reliable poultry genetics and future local hatchery capacity in Kenya. No commercial chick supply is available yet.",
      },
      { property: "og:title", content: "Genetics & Hatchery Development | Afrifama" },
      {
        property: "og:description",
        content:
          "Improving farmer access to reliable poultry genetics — the problem, our intended solution, and where the work currently stands.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/genetics-hatchery` }],
  }),
  component: Genetics,
});

const EggToChick = () => (
  <figure>
    <svg
      viewBox="0 0 320 90"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of the development sequence from parent stock to fertile egg, incubation, hatching and day-old chick"
    >
      {[
        { label: "Parent stock", x: 32 },
        { label: "Fertile egg", x: 104 },
        { label: "Incubation", x: 176 },
        { label: "Hatch", x: 248 },
        { label: "Day-old chick", x: 300 },
      ].map((s, i, arr) => (
        <g key={s.label}>
          {i < arr.length - 1 ? (
            <line
              x1={s.x + 14}
              y1="38"
              x2={arr[i + 1]!.x - 14}
              y2="38"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="text-border"
            />
          ) : null}
          <ellipse cx={s.x} cy="38" rx="12" ry="15" className="fill-secondary stroke-primary" strokeWidth="1.2" />
          <text
            x={s.x}
            y="72"
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize="7"
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  </figure>
);

function Genetics() {
  return (
    <>
      <PageHero
        eyebrow="Genetics & Hatchery"
        title="Reliable access to the right birds, at the right time."
        lead="Afrifama is developing partnerships and technical foundations for improved access to reliable poultry genetics and future local hatchery capacity."
        status="In Development"
        breadcrumbs={[
          { label: "Our Businesses", to: "/businesses" },
          { label: "Genetics & Hatchery" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="The industry problem"
              title="Bird availability constrains every other decision"
              lead="Farmers often struggle to obtain the right birds, at the right time, in commercially practical quantities."
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Batches arrive weeks away from the planned placement date",
                  "Minimum order sizes do not match smallholder house capacity",
                  "Origin and rearing history of birds are often unclear",
                  "Empty houses and unpredictable feed demand follow",
                ]}
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={chicksImage}
              alt="Day-old chicks in a clean brooding environment with controlled heat and water"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Our intended solution"
          title="What we are building, in sequence"
          lead="This work is in development. Nothing below is being offered commercially yet."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Genetics partnerships",
              status: "In Development" as const,
              body: "Technical relationships that give Kenyan farmers dependable access to suitable layer and dual-purpose genetics.",
            },
            {
              title: "Parent stock and brooding",
              status: "Future" as const,
              body: "Parent-stock management and brooding capacity planned around verified demand from our farmer network.",
            },
            {
              title: "Local hatchery capacity",
              status: "Future" as const,
              body: "Hatchery capacity sized to serve farmers in practical quantities on a predictable schedule.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <StatusBadge status={item.status} />
              <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-8 text-primary">
          <h3 className="eyebrow text-terracotta">Egg to chick — development sequence</h3>
          <div className="mt-6">
            <EggToChick />
          </div>
        </Card>
      </Section>

      <Section>
        <Card className="border-gold/40 bg-gold/15">
          <h2 className="font-display text-xl font-bold">Current status, stated clearly</h2>
          <p className="mt-3 max-w-3xl leading-relaxed">
            Afrifama does not operate a completed hatchery and does not currently supply commercial
            day-old chicks. We are not naming genetics partners or specific bird strains publicly at
            this stage. Technical and genetics partners are welcome to contact us directly.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">Discuss a technical partnership</Link>
          </Button>
        </Card>
      </Section>

      <CtaBand />
    </>
  );
}
