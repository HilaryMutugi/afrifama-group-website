import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Card, CheckList } from "@/components/site/primitives";
import { EarlyProgressSection } from "@/components/site/EarlyProgress";
import { CtaBand } from "@/components/site/CtaBand";
import { company } from "@/content/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Early progress in Kilifi County | Afrifama" },
      {
        name: "description",
        content:
          "Afrifama's early progress: farmer reach, training and field activity, production milestones, and a clear separation between achieved results, work in progress and future targets.",
      },
      { property: "og:title", content: "Impact — Early progress | Afrifama" },
      {
        property: "og:description",
        content:
          "Early-stage figures from Kilifi County, presented without exaggeration and separated from work in progress and future targets.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/impact` }],
  }),
  component: Impact,
});

const achieved = [
  "First commercial layer-production cycle started",
  "Four stage-based feed products in production",
  "Farmer engagement across seven Kilifi wards",
  "Farmer applications received and under structured review",
  "Training and farm-readiness visits conducted",
];

const inProgress = [
  "Expanding the selected-farmer partnership cohort",
  "Strengthening raw-material screening and laboratory routines",
  "Building field-monitoring and record-keeping systems",
  "Developing genetics partnerships and hatchery planning",
];

const futureTargets = [
  "Local hatchery capacity serving farmers in practical quantities",
  "Coordinated market linkages as egg volumes grow",
  "Wider distribution of Afrifama feeds",
  "Growth beyond Kenya into the wider East African market",
];

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Early progress, reported without exaggeration."
        lead="Afrifama is an early-growth business. This page separates what has been achieved from what is in progress and what remains a target."
        breadcrumbs={[{ label: "Impact" }]}
      />

      <EarlyProgressSection tone="default" />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Farmer reach"
          title="Where the farmer work sits today"
          lead="Reach means farmers we have met, trained, assessed or engaged through field activity — not farmers currently in a production agreement."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Card>
            <h3 className="font-display text-lg font-bold">Engagement</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Over 150 farmers reached through field visits, training sessions and farmer meetings
              across seven wards in Kilifi County.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-bold">Applications</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              More than 205 expressions of interest received and reviewed against farm-readiness
              criteria. Acceptance is not automatic.
            </p>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-bold">Training and field activity</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Practical training on housing, brooding, feeding routines, vaccination, biosecurity
              and record-keeping, delivered on farm.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Honest accounting"
          title="Achieved, in progress, and future"
          lead="We keep these three categories separate so nobody plans around something that does not exist yet."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Card>
            <h3 className="eyebrow text-primary">Achieved</h3>
            <div className="mt-4">
              <CheckList items={achieved} />
            </div>
          </Card>
          <Card className="border-gold/40 bg-gold/10">
            <h3 className="eyebrow text-terracotta">In progress</h3>
            <div className="mt-4">
              <CheckList items={inProgress} />
            </div>
          </Card>
          <Card className="bg-secondary/60">
            <h3 className="eyebrow text-muted-foreground">Future targets</h3>
            <div className="mt-4">
              <CheckList items={futureTargets} />
            </div>
          </Card>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Afrifama does not publish awards, certifications, testimonials or partner logos it has not
          earned, and does not publish individual farmer or flock data.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
