import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Section,
  SectionHeading,
  StatusBadge,
  Card,
  CheckList,
} from "@/components/site/primitives";
import { EcosystemDiagram } from "@/components/site/EcosystemDiagram";
import { StageProgression } from "@/components/site/StageProgression";
import { EarlyProgressSection } from "@/components/site/EarlyProgress";
import { CtaBand } from "@/components/site/CtaBand";
import {
  company,
  pillars,
  problems,
  feedProducts,
  formulationProcess,
  partnershipAfrifamaProvides,
  partnershipFarmerProvides,
  fieldNotes,
} from "@/content/site";
import heroImage from "@/assets/hero-farmer.jpg";
import feedImage from "@/assets/feed-materials.jpg";
import trainingImage from "@/assets/farmer-training.jpg";
import chicksImage from "@/assets/chicks.jpg";

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
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/` }],
  }),
  component: Home,
});

function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-24">
        <div className="lg:col-span-6">
          <p className="eyebrow text-terracotta">Kenyan agribusiness · Kilifi County</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] sm:text-5xl lg:text-6xl">
            Building a stronger poultry system from feed to flock.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Afrifama is a Kenyan agribusiness building an integrated poultry system around quality
            nutrition, reliable production, structured farmer partnerships and the foundations for
            stronger poultry genetics.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
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
          <p className="mt-10 border-l-2 border-gold pl-4 font-display text-sm font-semibold text-muted-foreground">
            {company.positioning}
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={heroImage}
              alt="Kenyan poultry farmer holding a healthy hen inside a well-managed layer house"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-card">
            <p className="eyebrow text-terracotta">One connected system</p>
            <div className="mt-4 text-primary">
              <EcosystemDiagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />

      <Section>
        <SectionHeading
          eyebrow="The Afrifama ecosystem"
          title="A connected poultry platform, not a collection of separate projects."
          lead="Each part of Afrifama exists because the others need it. Nutrition supports bird performance, birds support farmer income, field support protects both, and volume makes market linkages realistic."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold">{pillar.title}</h3>
                <StatusBadge status={pillar.status} />
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.summary}</p>
              <div className="mt-5 flex-1">
                <CheckList items={pillar.points} />
              </div>
              <Link
                to={pillar.to}
                className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
              >
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Afrifama exists"
              title="Poultry farming in Kenya fails for system reasons more often than for lack of effort."
              lead="Afrifama is responding by building practical, connected solutions around the production system — commercially, not as charity."
            />
          </div>
          <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {problems.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <h3 className="font-display text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Afrifama Feeds"
              title="Different nutrition for different stages. One Afrifama quality standard."
              lead="Formulations are developed using professional feed-formulation software, laboratory analysis, practical production data and technical input from qualified nutrition specialists within East Africa and Europe."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {formulationProcess.map((step) => (
                <div key={step.title} className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-display text-sm font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8">
              <Link to="/feeds">
                See the feed range
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-6">
            <img
              src={feedImage}
              alt="Maize, soybean meal and mineral premix raw materials used in Afrifama poultry feed"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {feedProducts.map((product) => (
            <Card key={product.name} className="flex flex-col">
              <span className="eyebrow text-terracotta">{product.stage}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{product.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.summary}
              </p>
              <p className="mt-4 border-t border-border pt-4 text-sm text-foreground">
                {product.useFor}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="eyebrow text-terracotta">Stage progression</h3>
          <div className="mt-5">
            <StageProgression />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <img
              src={trainingImage}
              alt="Afrifama field officer training smallholder poultry farmers beside a farm poultry house"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Smallholder farmer partnership"
              title="A structured commercial partnership with selected farmers."
              lead="Afrifama works with farmers whose farms are ready to carry a production cycle. Responsibilities are agreed in writing on both sides before any birds are placed."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card>
                <h3 className="font-display text-base font-bold">Afrifama may provide</h3>
                <div className="mt-4">
                  <CheckList items={partnershipAfrifamaProvides} />
                </div>
              </Card>
              <Card>
                <h3 className="font-display text-base font-bold">Farmers provide</h3>
                <div className="mt-4">
                  <CheckList items={partnershipFarmerProvides} />
                </div>
              </Card>
            </div>
            <p className="mt-6 rounded-xl border border-gold/40 bg-gold/15 p-4 text-sm leading-relaxed text-foreground">
              Input support is <strong>recoverable production support</strong> provided under an
              agreed partnership. It is not a donation, a conventional bank loan, or an open public
              credit facility.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/farmer-partnership">Understand the Partnership</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/faqs">Read Farmer FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="mb-4">
              <StatusBadge status="In Development" />
            </div>
            <SectionHeading
              eyebrow="Genetics & hatchery development"
              title="Farmers struggle to get the right birds, at the right time, in practical quantities."
              lead="Afrifama is developing partnerships and technical foundations for improved access to reliable poultry genetics and future local hatchery capacity."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              This work is in development. Afrifama does not operate a completed hatchery, and
              commercial chick supply is not yet available.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/genetics-hatchery">Read the development plan</Link>
            </Button>
          </div>
          <div className="lg:col-span-6">
            <img
              src={chicksImage}
              alt="Healthy day-old chicks under a brooder lamp in a clean rearing environment"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
        </div>
      </Section>

      <EarlyProgressSection />

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Afrifama Field Notes"
            title="What we are building now"
            lead="Afrifama documents the practical work of building its poultry system — from feed formulation and farmer training to field learning, production and future hatchery development."
          />
          <Button asChild variant="outline">
            <Link to="/field-notes">
              View All Field Notes
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {fieldNotes.map((note) => (
            <Card key={note.slug} className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                  {note.category}
                </span>
                <span className="rounded-md bg-gold/25 px-2 py-1 text-xs font-semibold text-gold-foreground">
                  Sample content
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{note.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
